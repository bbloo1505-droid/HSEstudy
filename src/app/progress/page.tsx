"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button, Panel } from "@/components/ui/Panel";
import { CONFIDENCE_LABELS, type ConfidenceLevel } from "@/lib/types";

type Topic = {
  id: string;
  label: string;
  confidence: ConfidenceLevel;
  confidenceLabel: string;
};

export default function ProgressPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [weak, setWeak] = useState<{ label: string; misses: number }[]>([]);
  const [msg, setMsg] = useState("");

  async function load() {
    const res = await fetch("/api/progress");
    const data = await res.json();
    setTopics(data.topics ?? []);
    setWeak(data.weakAreas ?? []);
  }

  useEffect(() => {
    void load();
  }, []);

  async function update(topicId: string, confidence: ConfidenceLevel) {
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topicId, confidence }),
    });
    setMsg("Updated.");
    await load();
  }

  return (
    <AppShell title="Mastery and weak areas">
      <Panel title="Topic confidence">
        <div className="space-y-3">
          {topics.map((t) => (
            <div
              key={t.id}
              className="flex flex-wrap items-center justify-between gap-3 border border-[var(--line)] px-3 py-2 text-sm"
            >
              <span>{t.label}</span>
              <select
                className="border border-[var(--line)] bg-white px-2 py-1"
                value={t.confidence}
                onChange={(e) => update(t.id, e.target.value as ConfidenceLevel)}
              >
                {(Object.keys(CONFIDENCE_LABELS) as ConfidenceLevel[]).map((c) => (
                  <option key={c} value={c}>
                    {CONFIDENCE_LABELS[c]}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        {msg ? <p className="mt-3 text-sm text-[var(--muted)]">{msg}</p> : null}
      </Panel>

      <Panel title="Weak areas (from quiz misses)">
        {weak.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">No misses recorded yet.</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {weak.map((w) => (
              <li key={w.label} className="flex justify-between border-b border-[var(--line)] pb-2">
                <span>{w.label}</span>
                <span>{w.misses}</span>
              </li>
            ))}
          </ul>
        )}
        <Button type="button" className="mt-4" variant="secondary" onClick={load}>
          Refresh
        </Button>
      </Panel>
    </AppShell>
  );
}
