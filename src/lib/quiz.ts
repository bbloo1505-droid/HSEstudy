import { getDb } from "./db";
import { ensureFlashcardFromMiss, ensureSeeded } from "./seed";
import { todayIso } from "./srs";

export function recordAnswer(questionId: string, selectedIndex: number) {
  ensureSeeded();
  const db = getDb();
  const q = db
    .prepare(
      `SELECT id, prompt, choices_json AS choicesJson, correct_index AS correctIndex,
              explanation, topic_id AS topicId
       FROM quiz_questions WHERE id = ?`,
    )
    .get(questionId) as
    | {
        id: string;
        prompt: string;
        choicesJson: string;
        correctIndex: number;
        explanation: string;
        topicId: string;
      }
    | undefined;

  if (!q) throw new Error("Question not found");

  const correct = selectedIndex === q.correctIndex;
  if (correct) {
    db.prepare(
      `UPDATE quiz_stats SET correct_count = correct_count + 1, last_seen_at = ? WHERE question_id = ?`,
    ).run(new Date().toISOString(), questionId);
  } else {
    db.prepare(
      `UPDATE quiz_stats
       SET incorrect_count = incorrect_count + 1, last_incorrect_at = ?, last_seen_at = ?
       WHERE question_id = ?`,
    ).run(todayIso(), new Date().toISOString(), questionId);

    const choices = JSON.parse(q.choicesJson) as string[];
    ensureFlashcardFromMiss({
      questionId: q.id,
      topicId: q.topicId,
      front: q.prompt,
      back: `Correct: ${choices[q.correctIndex]}\n\n${q.explanation}`,
    });
  }

  return {
    correct,
    correctIndex: q.correctIndex,
    explanation: q.explanation,
  };
}
