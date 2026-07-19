"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button, Panel } from "@/components/ui/Panel";
import type { SourceAnswer } from "@/lib/types";

const EXAMPLES = [
  "What is the difference between a regulation and a code of practice?",
  "When is an asbestos register required?",
  "What is the difference between personal and static air monitoring?",
  "Explain TWA, STEL and peak limitation.",
  "What information should appear on a hazardous-chemical register?",
];

export default function AskPage() {
  const [question, setQuestion] = useState(EXAMPLES[0]);
  const [mode, setMode] = useState<"study" | "source">("source");
  const [answer, setAnswer] = useState<SourceAnswer | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function ask() {
    setLoading(true);
    setError("");
    setAnswer(null);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, mode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setAnswer(data.answer);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AppShell title="Ask against local sources">
      <Panel eyebrow="Modes" title="Ask HSE">
        <div className="space-y-4 text-sm">
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={mode === "source" ? "primary" : "secondary"}
              onClick={() => setMode("source")}
            >
              Source mode
            </Button>
            <Button
              type="button"
              variant={mode === "study" ? "primary" : "secondary"}
              onClick={() => setMode("study")}
            >
              Study mode
            </Button>
          </div>
          <p className="text-[var(--muted)]">
            <strong>Source mode</strong> must cite a retrieved excerpt or report unverified.{" "}
            <strong>Study mode</strong> may explain and analogise, but never invents citations.
          </p>
          <textarea
            className="w-full border border-[var(--line)] bg-white px-3 py-2"
            rows={4}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                className="border border-[var(--line)] px-2 py-1 text-xs text-[var(--muted)] hover:text-[var(--ink)]"
                onClick={() => setQuestion(ex)}
              >
                {ex.slice(0, 42)}…
              </button>
            ))}
          </div>
          <Button type="button" onClick={ask} disabled={loading}>
            {loading ? "Working locally…" : "Ask"}
          </Button>
          {error ? <p className="text-[var(--danger)]">{error}</p> : null}
        </div>
      </Panel>

      {answer ? (
        <Panel title="Answer">
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="font-semibold">Direct answer</dt>
              <dd className="mt-1 whitespace-pre-wrap">{answer.directAnswer}</dd>
            </div>
            <div>
              <dt className="font-semibold">Plain-English explanation</dt>
              <dd className="mt-1 whitespace-pre-wrap text-[var(--muted)]">{answer.plainEnglish}</dd>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="font-semibold">Official source</dt>
                <dd>{answer.officialSourceTitle}</dd>
              </div>
              <div>
                <dt className="font-semibold">Page / section</dt>
                <dd>{answer.pageOrSection}</dd>
              </div>
              <div>
                <dt className="font-semibold">Jurisdiction</dt>
                <dd>{answer.jurisdiction}</dd>
              </div>
              <div>
                <dt className="font-semibold">Document status</dt>
                <dd>{answer.documentStatus}</dd>
              </div>
              <div>
                <dt className="font-semibold">Document type</dt>
                <dd>{answer.documentType.replaceAll("_", " ")}</dd>
              </div>
              <div>
                <dt className="font-semibold">Confidence</dt>
                <dd>
                  {answer.confidence}
                  {answer.verified ? " · verified excerpt" : " · not verified citation"}
                </dd>
              </div>
            </div>
            <div>
              <dt className="font-semibold">Consultant relevance</dt>
              <dd className="mt-1 text-[var(--muted)]">{answer.consultantRelevance}</dd>
            </div>
            <div>
              <dt className="font-semibold">Uncertainty / limitations</dt>
              <dd className="mt-1 text-[var(--muted)]">{answer.uncertainty}</dd>
            </div>
            {answer.excerpt ? (
              <div>
                <dt className="font-semibold">Excerpt</dt>
                <dd className="mt-1 whitespace-pre-wrap border border-[var(--line)] bg-[var(--bg-soft)] p-3 text-xs leading-relaxed">
                  {answer.excerpt}
                </dd>
              </div>
            ) : null}
          </dl>
        </Panel>
      ) : null}
    </AppShell>
  );
}
