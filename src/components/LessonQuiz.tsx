"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Panel";

type Q = {
  id: string;
  prompt: string;
  choices: string[];
  explanation: string;
  sourceHint: string;
};

export function LessonQuiz({ lessonId }: { lessonId: string }) {
  const [questions, setQuestions] = useState<Q[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<
    Record<string, { correct: boolean; explanation: string; correctIndex: number }>
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/quiz?lessonId=${encodeURIComponent(lessonId)}`)
      .then((r) => r.json())
      .then((d) => setQuestions(d.questions ?? []))
      .finally(() => setLoading(false));
  }, [lessonId]);

  async function submit(id: string) {
    const selectedIndex = answers[id];
    if (selectedIndex === undefined) return;
    const res = await fetch("/api/quiz/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: id, selectedIndex }),
    });
    const data = await res.json();
    setResults((prev) => ({
      ...prev,
      [id]: {
        correct: data.correct,
        explanation: data.explanation,
        correctIndex: data.correctIndex,
      },
    }));
  }

  if (loading) return <p className="text-sm text-[var(--muted)]">Loading quiz…</p>;
  if (!questions.length) return <p className="text-sm text-[var(--muted)]">No questions for this lesson.</p>;

  return (
    <div className="space-y-6">
      {questions.map((q, i) => {
        const result = results[q.id];
        return (
          <div key={q.id} className="border border-[var(--line)] p-3">
            <p className="text-sm font-medium">
              {i + 1}. {q.prompt}
            </p>
            <div className="mt-3 space-y-2">
              {q.choices.map((c, idx) => (
                <label key={c} className="flex cursor-pointer gap-2 text-sm">
                  <input
                    type="radio"
                    name={q.id}
                    checked={answers[q.id] === idx}
                    onChange={() => setAnswers((a) => ({ ...a, [q.id]: idx }))}
                    disabled={!!result}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
            {!result ? (
              <Button type="button" className="mt-3" onClick={() => submit(q.id)}>
                Check
              </Button>
            ) : (
              <div className="mt-3 text-sm">
                <p className={result.correct ? "text-[var(--ok)]" : "text-[var(--danger)]"}>
                  {result.correct ? "Correct." : "Incorrect — flashcard scheduled."}
                </p>
                <p className="mt-1 text-[var(--muted)]">{result.explanation}</p>
                {q.sourceHint ? (
                  <p className="mt-1 text-xs text-[var(--muted)]">Hint: {q.sourceHint}</p>
                ) : null}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
