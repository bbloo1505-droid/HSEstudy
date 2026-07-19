"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Panel";

export function ReimportButton() {
  const [msg, setMsg] = useState("");

  async function run() {
    setMsg("Importing…");
    const res = await fetch("/api/documents/import", { method: "POST" });
    const data = await res.json();
    setMsg(
      res.ok
        ? `Imported ${data.imported}. ${data.errors?.length ? `Errors: ${data.errors.join("; ")}` : "Refresh the page."}`
        : data.error || "Import failed",
    );
  }

  return (
    <div className="space-y-2">
      <Button type="button" onClick={run}>
        Re-import documents
      </Button>
      {msg ? <p className="text-sm text-[var(--muted)]">{msg}</p> : null}
    </div>
  );
}
