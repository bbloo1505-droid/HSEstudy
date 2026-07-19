import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getDb, resetDbForTests } from "@/lib/db";
import { ensureSeeded } from "@/lib/seed";
import { getDashboard, getLesson, listLessons } from "@/lib/progress";
import { recordAnswer } from "@/lib/quiz";

describe("progress and seed", () => {
  beforeEach(() => {
    resetDbForTests();
    ensureSeeded();
  });

  afterEach(() => {
    resetDbForTests();
  });

  it("seeds 21 lessons and topics", () => {
    const lessons = listLessons();
    expect(lessons.length).toBe(21);
    const dash = getDashboard();
    expect(dash.topics.length).toBe(13);
    expect(dash.totalLessons).toBe(21);
  });

  it("loads week 1 monday lesson content", () => {
    const lesson = getLesson("w1-mon");
    expect(lesson?.title).toBeTruthy();
    expect(lesson?.objectives.length).toBeGreaterThan(0);
    expect(lesson?.dayDate).toBe("2026-07-20");
  });

  it("creates flashcards from incorrect answers", () => {
    const q = getDb()
      .prepare(`SELECT id, correct_index AS correctIndex FROM quiz_questions LIMIT 1`)
      .get() as { id: string; correctIndex: number };
    const wrong = (q.correctIndex + 1) % 4;
    const result = recordAnswer(q.id, wrong);
    expect(result.correct).toBe(false);
    const card = getDb()
      .prepare(`SELECT id FROM flashcards WHERE source_question_id = ?`)
      .get(q.id);
    expect(card).toBeTruthy();
  });

  it("imports starter primer documents", () => {
    const n = (
      getDb().prepare(`SELECT COUNT(*) AS n FROM documents`).get() as { n: number }
    ).n;
    expect(n).toBeGreaterThanOrEqual(5);
  });
});
