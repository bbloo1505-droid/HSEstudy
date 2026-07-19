"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button, Panel } from "@/components/ui/Panel";

type Q = {
  id: string;
  prompt: string;
  choices: string[];
  explanation: string;
  sourceHint: string;
  topicId: string;
};

export default function QuizCentrePage() {
  const [questions, setQuestions] = useState<Q[]>([]);
  const [limit, setLimit] = useState(20);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<Record<string, { correct: boolean; explanation: string }>>(
    {},
  );

  async function start() {
    setAnswers({});
    setResults({});
    const res = await fetch(`/api/quiz?limit=${limit}`);
    const data = await res.json();
    setQuestions(data.questions ?? []);
  }

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
      [id]: { correct: data.correct, explanation: data.explanation },
    }));
  }

  const scored = Object.values(results);
  const correctCount = scored.filter((r) => r.correct).length;

  return (
    <AppShell title="Weighted practice">
      <Panel title="Quiz centre">
        <p className="mb-3 text-sm text-[var(--muted)]">
          Questions you miss return more frequently. Use 50–100 question sessions on Sundays.
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <label className="text-sm">
            Questions
            <input
              type="number"
              min={5}
              max={100}
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="ml-2 w-20 border border-[var(--line)] px-2 py-1"
            />
          </label>
          <Button type="button" onClick={start}>
            Start weighted quiz
          </Button>
        </div>
        {scored.length ? (
          <p className="mt-3 text-sm">
            Score so far: {correctCount}/{scored.length}
          </p>
        ) : null}
      </Panel>

      {questions.map((q, i) => {
        const result = results[q.id];
        return (
          <Panel key={q.id} title={`Q${i + 1}`}>
            <p className="text-sm font-medium">{q.prompt}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">{q.topicId}</p>
            <div className="mt-3 space-y-2">
              {q.choices.map((c, idx) => (
                <label key={c} className="flex gap-2 text-sm">
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
              <p className={`mt-3 text-sm ${result.correct ? "text-[var(--ok)]" : "text-[var(--danger)]"}`}>
                {result.correct ? "Correct." : "Incorrect."} {result.explanation}
              </p>
            )}
          </Panel>
        );
      })}
    </AppShell>
  );
}
