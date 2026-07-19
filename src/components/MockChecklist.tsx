"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Panel";

export function MockChecklist({
  projectId,
  items,
  initialState,
  initialNotes,
}: {
  projectId: string;
  items: string[];
  initialState: Record<string, boolean>;
  initialNotes: Record<string, string>;
}) {
  const [state, setState] = useState(initialState);
  const [notes, setNotes] = useState(initialNotes);
  const [msg, setMsg] = useState("");

  async function save() {
    const res = await fetch("/api/mock-project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, state, notes }),
    });
    setMsg(res.ok ? "Saved locally." : "Save failed.");
  }

  const done = Object.values(state).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--muted)]">
        {done}/{items.length} complete
      </p>
      {items.map((item) => (
        <div key={item} className="border border-[var(--line)] p-3">
          <label className="flex items-start gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={!!state[item]}
              onChange={(e) => setState((s) => ({ ...s, [item]: e.target.checked }))}
              className="mt-1"
            />
            <span>{item}</span>
          </label>
          <textarea
            className="mt-2 w-full border border-[var(--line)] bg-white px-2 py-1.5 text-sm"
            rows={3}
            placeholder="Notes for this step…"
            value={notes[item] ?? ""}
            onChange={(e) => setNotes((n) => ({ ...n, [item]: e.target.value }))}
          />
        </div>
      ))}
      <Button type="button" onClick={save}>
        Save progress
      </Button>
      {msg ? <p className="text-sm text-[var(--muted)]">{msg}</p> : null}
    </div>
  );
}
