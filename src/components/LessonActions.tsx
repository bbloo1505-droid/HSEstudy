"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Panel";
import type { ConfidenceLevel } from "@/lib/types";
import { CONFIDENCE_LABELS } from "@/lib/types";

const LEVELS = Object.keys(CONFIDENCE_LABELS) as ConfidenceLevel[];

export function LessonActions({
  lessonId,
  initialConfidence,
  initialNotes,
}: {
  lessonId: string;
  initialConfidence?: string;
  initialNotes?: string;
}) {
  const [confidence, setConfidence] = useState<ConfidenceLevel>(
    (initialConfidence as ConfidenceLevel) || "learning",
  );
  const [notes, setNotes] = useState(initialNotes ?? "");
  const [status, setStatus] = useState("");

  async function save() {
    setStatus("Saving…");
    const res = await fetch("/api/lessons/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, confidence, notes }),
    });
    setStatus(res.ok ? "Saved. Topic confidence updated." : "Save failed.");
  }

  return (
    <div className="space-y-3 text-sm">
      <label className="block">
        <span className="text-[var(--muted)]">How confident are you after this lesson?</span>
        <select
          className="mt-1 w-full border border-[var(--line)] bg-white px-3 py-2"
          value={confidence}
          onChange={(e) => setConfidence(e.target.value as ConfidenceLevel)}
        >
          {LEVELS.map((l) => (
            <option key={l} value={l}>
              {CONFIDENCE_LABELS[l]}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-[var(--muted)]">Notes (optional)</span>
        <textarea
          className="mt-1 w-full border border-[var(--line)] bg-white px-3 py-2"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <Button type="button" onClick={save}>
        Mark lesson complete
      </Button>
      {status ? <p className="text-[var(--muted)]">{status}</p> : null}
    </div>
  );
}
