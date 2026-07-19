import { getDb } from "./db";
import { ensureSeeded } from "./seed";
import { reviewCard, todayIso, type SrsCard } from "./srs";

export function listDueFlashcards(limit = 40) {
  ensureSeeded();
  const today = todayIso();
  return getDb()
    .prepare(
      `SELECT id, topic_id AS topicId, front, back, ease, interval_days AS intervalDays,
              repetitions, lapses, due_at AS dueAt
       FROM flashcards WHERE due_at <= ? ORDER BY due_at ASC LIMIT ?`,
    )
    .all(today, limit);
}

export function listAllFlashcards() {
  ensureSeeded();
  return getDb()
    .prepare(
      `SELECT id, topic_id AS topicId, front, back, ease, interval_days AS intervalDays,
              repetitions, lapses, due_at AS dueAt
       FROM flashcards ORDER BY due_at ASC`,
    )
    .all();
}

export function gradeFlashcard(id: string, grade: 0 | 1 | 2 | 3) {
  ensureSeeded();
  const db = getDb();
  const row = db
    .prepare(
      `SELECT ease, interval_days AS intervalDays, repetitions, lapses, due_at AS dueAt
       FROM flashcards WHERE id = ?`,
    )
    .get(id) as
    | {
        ease: number;
        intervalDays: number;
        repetitions: number;
        lapses: number;
        dueAt: string;
      }
    | undefined;
  if (!row) throw new Error("Card not found");

  const next = reviewCard(
    {
      ease: row.ease,
      intervalDays: row.intervalDays,
      repetitions: row.repetitions,
      lapses: row.lapses,
      dueAt: row.dueAt,
    } satisfies SrsCard,
    grade,
  );

  db.prepare(
    `UPDATE flashcards
     SET ease = ?, interval_days = ?, repetitions = ?, lapses = ?, due_at = ?
     WHERE id = ?`,
  ).run(next.ease, next.intervalDays, next.repetitions, next.lapses, next.dueAt, id);

  return next;
}
