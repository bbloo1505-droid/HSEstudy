"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Panel";

export function CopyPromptButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setDone(true);
    window.setTimeout(() => setDone(false), 2000);
  }

  return (
    <Button type="button" onClick={copy} variant={done ? "secondary" : "primary"}>
      {done ? "Copied" : "Copy NotebookLM prompt"}
    </Button>
  );
}
