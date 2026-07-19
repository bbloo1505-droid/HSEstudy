import { getDb } from "./db";
import { ensureSeeded } from "./seed";
import { questionWeight, todayIso } from "./srs";
import type { ConfidenceLevel } from "./types";
import { CONFIDENCE_LABELS, CURRICULUM_END, CURRICULUM_START, TOPIC_LABELS } from "./types";

export function initApp() {
  ensureSeeded();
}

export function getDashboard() {
  initApp();
  const db = getDb();
  const today = todayIso();

  const lesson = db
    .prepare(`SELECT * FROM lessons WHERE day_date = ?`)
    .get(today) as Record<string, unknown> | undefined;

  const nearest =
    lesson ??
    (db
      .prepare(
        `SELECT * FROM lessons WHERE day_date >= ? ORDER BY day_date ASC LIMIT 1`,
      )
      .get(today) as Record<string, unknown> | undefined) ??
    (db
      .prepare(`SELECT * FROM lessons ORDER BY day_date DESC LIMIT 1`)
      .get() as Record<string, unknown>);

  const topics = db
    .prepare(
      `SELECT t.id, t.label, p.confidence, p.updated_at AS updatedAt
       FROM topics t JOIN topic_progress p ON p.topic_id = t.id
       ORDER BY t.sort_order`,
    )
    .all() as { id: string; label: string; confidence: ConfidenceLevel; updatedAt: string }[];

  const dueCards = (
    db.prepare(`SELECT COUNT(*) AS n FROM flashcards WHERE due_at <= ?`).get(today) as { n: number }
  ).n;

  const weak = db
    .prepare(
      `
    SELECT q.topic_id AS topicId, SUM(s.incorrect_count) AS misses
    FROM quiz_stats s
    JOIN quiz_questions q ON q.id = s.question_id
    GROUP BY q.topic_id
    HAVING misses > 0
    ORDER BY misses DESC
    LIMIT 5
  `,
    )
    .all() as { topicId: string; misses: number }[];

  const completedLessons = (
    db.prepare(`SELECT COUNT(*) AS n FROM lesson_completions`).get() as { n: number }
  ).n;
  const totalLessons = (db.prepare(`SELECT COUNT(*) AS n FROM lessons`).get() as { n: number }).n;
  const docs = (db.prepare(`SELECT COUNT(*) AS n FROM documents`).get() as { n: number }).n;

  const daysLeft = Math.max(
    0,
    Math.ceil(
      (new Date(`${CURRICULUM_END}T12:00:00`).getTime() - new Date(`${today}T12:00:00`).getTime()) /
        86400000,
    ),
  );

  const upcoming = db
    .prepare(
      `SELECT id, day_date AS dayDate, day_label AS dayLabel, title, week
       FROM lessons WHERE day_date > ? ORDER BY day_date ASC LIMIT 4`,
    )
    .all(nearest ? String(nearest.day_date) : today) as {
    id: string;
    dayDate: string;
    dayLabel: string;
    title: string;
    week: number;
  }[];

  const pct =
    totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);

  return {
    today,
    curriculumStart: CURRICULUM_START,
    curriculumEnd: CURRICULUM_END,
    daysLeft,
    progressPct: pct,
    todayLesson: nearest
      ? {
          id: String(nearest.id),
          title: String(nearest.title),
          dayDate: String(nearest.day_date),
          dayLabel: String(nearest.day_label),
          week: Number(nearest.week),
        }
      : null,
    upcoming,
    topics: topics.map((t) => ({
      ...t,
      confidenceLabel: CONFIDENCE_LABELS[t.confidence],
      level: confidenceToLevel(t.confidence),
    })),
    dueCards,
    weakAreas: weak.map((w) => ({
      topicId: w.topicId,
      label: TOPIC_LABELS[w.topicId as keyof typeof TOPIC_LABELS] ?? w.topicId,
      misses: w.misses,
    })),
    completedLessons,
    totalLessons,
    documentCount: docs,
  };
}

function confidenceToLevel(c: ConfidenceLevel): number {
  switch (c) {
    case "not_introduced":
      return 0;
    case "learning":
      return 1;
    case "can_explain":
      return 2;
    case "can_apply":
      return 3;
    case "ready_supervised":
      return 4;
    default:
      return 0;
  }
}

export function listLessons() {
  initApp();
  const completed = new Set(
    (
      getDb().prepare(`SELECT lesson_id AS id FROM lesson_completions`).all() as { id: string }[]
    ).map((r) => r.id),
  );
  return (
    getDb()
      .prepare(
        `SELECT id, day_date AS dayDate, week, day_label AS dayLabel, title, topic_ids AS topicIds
         FROM lessons ORDER BY day_date`,
      )
      .all() as {
      id: string;
      dayDate: string;
      week: number;
      dayLabel: string;
      title: string;
      topicIds: string;
    }[]
  ).map((l) => ({
    ...l,
    topicIds: JSON.parse(l.topicIds) as string[],
    completed: completed.has(l.id),
  }));
}

export function getLesson(idOrDate: string) {
  initApp();
  const db = getDb();
  const row = (db.prepare(`SELECT * FROM lessons WHERE id = ? OR day_date = ?`).get(
    idOrDate,
    idOrDate,
  ) ?? null) as Record<string, unknown> | null;
  if (!row) return null;

  const completion = db
    .prepare(`SELECT confidence, completed_at AS completedAt, notes FROM lesson_completions WHERE lesson_id = ?`)
    .get(row.id) as { confidence: string; completedAt: string; notes: string } | undefined;

  return {
    id: row.id as string,
    dayDate: row.day_date as string,
    week: row.week as number,
    dayLabel: row.day_label as string,
    title: row.title as string,
    topicIds: JSON.parse(row.topic_ids as string) as string[],
    objectives: JSON.parse(row.objectives_json as string) as string[],
    explanation: row.explanation as string,
    terminology: JSON.parse(row.terminology_json as string) as {
      term: string;
      definition: string;
    }[],
    officialReadings: JSON.parse(row.official_readings_json as string) as {
      title: string;
      note: string;
    }[],
    consultingRelevance: row.consulting_relevance as string,
    workedExample: row.worked_example as string,
    scenarioPrompt: row.scenario_prompt as string,
    scenarioModel: row.scenario_model as string,
    commonMistakes: JSON.parse(row.common_mistakes_json as string) as string[],
    summary: row.summary as string,
    sessionPlan: row.session_plan as string,
    completion: completion ?? null,
  };
}

export function completeLesson(lessonId: string, confidence: ConfidenceLevel, notes = "") {
  initApp();
  const db = getDb();
  const lesson = getLesson(lessonId);
  if (!lesson) throw new Error("Lesson not found");

  db.prepare(
    `INSERT OR REPLACE INTO lesson_completions (lesson_id, confidence, completed_at, notes)
     VALUES (?, ?, ?, ?)`,
  ).run(lessonId, confidence, new Date().toISOString(), notes);

  const bump: ConfidenceLevel =
    confidence === "ready_supervised"
      ? "can_apply"
      : confidence === "can_apply"
        ? "can_apply"
        : confidence === "can_explain"
          ? "can_explain"
          : "learning";

  for (const topicId of lesson.topicIds) {
    db.prepare(
      `UPDATE topic_progress SET confidence = ?, updated_at = ? WHERE topic_id = ?`,
    ).run(bump, todayIso(), topicId);
  }
}

export function updateTopicConfidence(topicId: string, confidence: ConfidenceLevel) {
  initApp();
  getDb()
    .prepare(`UPDATE topic_progress SET confidence = ?, updated_at = ? WHERE topic_id = ?`)
    .run(confidence, todayIso(), topicId);
}

export function getQuizForLesson(lessonId: string, limit = 10) {
  initApp();
  const rows = getDb()
    .prepare(
      `
    SELECT q.id, q.prompt, q.choices_json AS choicesJson, q.correct_index AS correctIndex,
           q.explanation, q.source_hint AS sourceHint, q.topic_id AS topicId,
           s.correct_count AS correctCount, s.incorrect_count AS incorrectCount,
           s.last_incorrect_at AS lastIncorrectAt
    FROM quiz_questions q
    JOIN quiz_stats s ON s.question_id = q.id
    WHERE q.lesson_id = ?
  `,
    )
    .all(lessonId) as {
    id: string;
    prompt: string;
    choicesJson: string;
    correctIndex: number;
    explanation: string;
    sourceHint: string;
    topicId: string;
    correctCount: number;
    incorrectCount: number;
    lastIncorrectAt: string | null;
  }[];

  return rows
    .map((r) => ({
      ...r,
      choices: JSON.parse(r.choicesJson) as string[],
      weight: questionWeight({
        incorrectCount: r.incorrectCount,
        correctCount: r.correctCount,
        lastIncorrectAt: r.lastIncorrectAt,
      }),
    }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, limit)
    .map(({ choicesJson: _c, correctCount: _cc, incorrectCount: _ic, lastIncorrectAt: _l, weight: _w, ...q }) => q);
}

export function getWeightedQuiz(limit = 20, topicId?: string) {
  initApp();
  const rows = (
    topicId
      ? getDb().prepare(
          `
      SELECT q.id, q.prompt, q.choices_json AS choicesJson, q.correct_index AS correctIndex,
             q.explanation, q.source_hint AS sourceHint, q.topic_id AS topicId,
             s.correct_count AS correctCount, s.incorrect_count AS incorrectCount,
             s.last_incorrect_at AS lastIncorrectAt
      FROM quiz_questions q
      JOIN quiz_stats s ON s.question_id = q.id
      WHERE q.topic_id = ?
    `,
        )
      : getDb().prepare(
          `
      SELECT q.id, q.prompt, q.choices_json AS choicesJson, q.correct_index AS correctIndex,
             q.explanation, q.source_hint AS sourceHint, q.topic_id AS topicId,
             s.correct_count AS correctCount, s.incorrect_count AS incorrectCount,
             s.last_incorrect_at AS lastIncorrectAt
      FROM quiz_questions q
      JOIN quiz_stats s ON s.question_id = q.id
    `,
        )
  ).all(...(topicId ? [topicId] : [])) as {
    id: string;
    prompt: string;
    choicesJson: string;
    correctIndex: number;
    explanation: string;
    sourceHint: string;
    topicId: string;
    correctCount: number;
    incorrectCount: number;
    lastIncorrectAt: string | null;
  }[];

  return rows
    .map((r) => ({
      ...r,
      choices: JSON.parse(r.choicesJson) as string[],
      weight: questionWeight({
        incorrectCount: r.incorrectCount,
        correctCount: r.correctCount,
        lastIncorrectAt: r.lastIncorrectAt,
      }),
    }))
    .sort((a, b) => b.weight - a.weight || Math.random() - 0.5)
    .slice(0, limit)
    .map(({ choicesJson: _c, correctCount: _cc, incorrectCount: _ic, lastIncorrectAt: _l, weight: _w, ...q }) => q);
}
