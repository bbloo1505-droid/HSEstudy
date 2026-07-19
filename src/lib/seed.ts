import { getDb } from "./db";
import { importLocalDocuments } from "./documents";
import { LESSONS, MOCK_PROJECT, QUIZ_BANK, SCENARIOS, TOPICS } from "./seed-data";
import { createCard, todayIso } from "./srs";

const SEED_VERSION = "1";

export function ensureSeeded(): void {
  const db = getDb();
  const row = db.prepare(`SELECT value FROM meta WHERE key = 'seed_version'`).get() as
    | { value: string }
    | undefined;
  if (row?.value === SEED_VERSION) {
    // Still refresh documents from disk on boot
    importLocalDocuments();
    return;
  }

  const tx = db.transaction(() => {
    db.exec(`
      DELETE FROM quiz_stats;
      DELETE FROM quiz_questions;
      DELETE FROM lesson_completions;
      DELETE FROM flashcards;
      DELETE FROM scenario_attempts;
      DELETE FROM scenarios;
      DELETE FROM mock_project_progress;
      DELETE FROM mock_projects;
      DELETE FROM topic_progress;
      DELETE FROM lessons;
      DELETE FROM topics;
    `);

    const insertTopic = db.prepare(
      `INSERT INTO topics (id, label, sort_order) VALUES (?, ?, ?)`,
    );
    const insertProgress = db.prepare(
      `INSERT INTO topic_progress (topic_id, confidence, notes, updated_at) VALUES (?, 'not_introduced', '', ?)`,
    );
    for (const t of TOPICS) {
      insertTopic.run(t.id, t.label, t.sortOrder);
      insertProgress.run(t.id, todayIso());
    }

    const insertLesson = db.prepare(`
      INSERT INTO lessons (
        id, day_date, week, day_label, title, topic_ids, objectives_json, explanation,
        terminology_json, official_readings_json, consulting_relevance, worked_example,
        scenario_prompt, scenario_model, common_mistakes_json, summary, session_plan
      ) VALUES (
        @id, @dayDate, @week, @dayLabel, @title, @topicIds, @objectives, @explanation,
        @terminology, @readings, @consulting, @worked, @scenarioPrompt, @scenarioModel,
        @mistakes, @summary, @sessionPlan
      )
    `);

    for (const l of LESSONS) {
      insertLesson.run({
        id: l.id,
        dayDate: l.dayDate,
        week: l.week,
        dayLabel: l.dayLabel,
        title: l.title,
        topicIds: JSON.stringify(l.topicIds),
        objectives: JSON.stringify(l.objectives),
        explanation: l.explanation,
        terminology: JSON.stringify(l.terminology),
        readings: JSON.stringify(l.officialReadings),
        consulting: l.consultingRelevance,
        worked: l.workedExample,
        scenarioPrompt: l.scenarioPrompt,
        scenarioModel: l.scenarioModel,
        mistakes: JSON.stringify(l.commonMistakes),
        summary: l.summary,
        sessionPlan: l.sessionPlan,
      });
    }

    const insertQ = db.prepare(`
      INSERT INTO quiz_questions (
        id, lesson_id, topic_id, prompt, choices_json, correct_index, explanation, source_hint
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const insertStat = db.prepare(
      `INSERT INTO quiz_stats (question_id, correct_count, incorrect_count) VALUES (?, 0, 0)`,
    );
    for (const q of QUIZ_BANK) {
      insertQ.run(
        q.id,
        q.lessonId,
        q.topicId,
        q.prompt,
        JSON.stringify(q.choices),
        q.correctIndex,
        q.explanation,
        q.sourceHint,
      );
      insertStat.run(q.id);
    }

    const insertSc = db.prepare(`
      INSERT INTO scenarios (id, title, category, brief, tasks_json, model_answer, source_notes, fictional_notice)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    for (const s of SCENARIOS) {
      insertSc.run(
        s.id,
        s.title,
        s.category,
        s.brief,
        JSON.stringify(s.tasks),
        s.modelAnswer,
        s.sourceNotes,
        s.fictionalNotice,
      );
    }

    db.prepare(
      `INSERT INTO mock_projects (id, title, brief, checklist_json, due_date) VALUES (?, ?, ?, ?, ?)`,
    ).run(
      MOCK_PROJECT.id,
      MOCK_PROJECT.title,
      MOCK_PROJECT.brief,
      JSON.stringify(MOCK_PROJECT.checklist),
      MOCK_PROJECT.dueDate,
    );

    db.prepare(
      `INSERT INTO mock_project_progress (project_id, checklist_state_json, notes_json, updated_at)
       VALUES (?, ?, ?, ?)`,
    ).run(
      MOCK_PROJECT.id,
      JSON.stringify(Object.fromEntries(MOCK_PROJECT.checklist.map((c) => [c, false]))),
      JSON.stringify({}),
      todayIso(),
    );

    db.prepare(`INSERT OR REPLACE INTO settings (key, value) VALUES ('ollama_model', ?)`).run(
      "qwen3:8b",
    );
    db.prepare(`INSERT OR REPLACE INTO meta (key, value) VALUES ('seed_version', ?)`).run(
      SEED_VERSION,
    );
  });

  tx();
  importLocalDocuments();
}

export function ensureFlashcardFromMiss(opts: {
  questionId: string;
  topicId: string;
  front: string;
  back: string;
}) {
  const db = getDb();
  const existing = db
    .prepare(`SELECT id FROM flashcards WHERE source_question_id = ?`)
    .get(opts.questionId) as { id: string } | undefined;
  if (existing) {
    const card = createCard();
    db.prepare(
      `UPDATE flashcards SET due_at = ?, interval_days = 0, repetitions = 0, lapses = lapses + 1 WHERE id = ?`,
    ).run(card.dueAt, existing.id);
    return;
  }
  const card = createCard();
  db.prepare(
    `INSERT INTO flashcards (
      id, topic_id, front, back, source_question_id, ease, interval_days, repetitions, lapses, due_at, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
    `fc-${opts.questionId}`,
    opts.topicId,
    opts.front,
    opts.back,
    opts.questionId,
    card.ease,
    card.intervalDays,
    card.repetitions,
    card.lapses,
    card.dueAt,
    new Date().toISOString(),
  );
}
