"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Panel";

export function ScenarioTrainer({
  scenarioId,
  modelAnswer,
  sourceNotes,
}: {
  scenarioId: string;
  modelAnswer: string;
  sourceNotes: string;
}) {
  const [response, setResponse] = useState("");
  const [saved, setSaved] = useState(false);
  const [showModel, setShowModel] = useState(false);

  async function save() {
    await fetch("/api/scenarios/attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scenarioId, response }),
    });
    setSaved(true);
  }

  return (
    <div className="mt-4 space-y-3">
      <textarea
        className="w-full border border-[var(--line)] bg-white px-3 py-2 text-sm"
        rows={8}
        placeholder="Write your inspection prep / review notes here…"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <div className="flex flex-wrap gap-2">
        <Button type="button" onClick={save} disabled={!response.trim()}>
          Save attempt
        </Button>
        <Button type="button" variant="secondary" onClick={() => setShowModel((v) => !v)}>
          {showModel ? "Hide model answer" : "Show model answer"}
        </Button>
      </div>
      {saved ? <p className="text-xs text-[var(--muted)]">Attempt saved locally.</p> : null}
      {showModel ? (
        <div className="space-y-2 border border-[var(--line)] bg-[var(--bg-soft)] p-3 text-sm">
          <p className="whitespace-pre-wrap">{modelAnswer}</p>
          <p className="text-xs text-[var(--muted)]">{sourceNotes}</p>
        </div>
      ) : null}
    </div>
  );
}
