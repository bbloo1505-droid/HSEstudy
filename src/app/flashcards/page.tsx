"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button, Panel } from "@/components/ui/Panel";

type Card = {
  id: string;
  topicId: string;
  front: string;
  back: string;
  dueAt: string;
};

export default function FlashcardsPage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  async function load() {
    const res = await fetch("/api/flashcards");
    const data = await res.json();
    setCards(data.due ?? []);
    setIndex(0);
    setRevealed(false);
  }

  useEffect(() => {
    void load();
  }, []);

  const card = cards[index];

  async function grade(g: 0 | 1 | 2 | 3) {
    if (!card) return;
    await fetch("/api/flashcards/grade", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: card.id, grade: g }),
    });
    const next = cards.filter((_, i) => i !== index);
    setCards(next);
    setIndex(0);
    setRevealed(false);
  }

  return (
    <AppShell title="Spaced repetition">
      <Panel eyebrow="Due today" title="Flashcards">
        <p className="mb-4 text-sm text-[var(--muted)]">
          Incorrect quiz answers generate cards and return more often. Grade honestly.
        </p>
        {!card ? (
          <p className="text-sm">No cards due. Complete a quiz to create cards from misses.</p>
        ) : (
          <div className="space-y-4">
            <p className="text-xs text-[var(--muted)]">
              Card {index + 1} of {cards.length} · {card.topicId}
            </p>
            <div className="border border-[var(--line)] bg-[var(--bg-soft)] p-4 text-sm whitespace-pre-wrap">
              {card.front}
            </div>
            {revealed ? (
              <div className="border border-[var(--line)] p-4 text-sm whitespace-pre-wrap">
                {card.back}
              </div>
            ) : (
              <Button type="button" onClick={() => setRevealed(true)}>
                Reveal
              </Button>
            )}
            {revealed ? (
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="secondary" onClick={() => grade(0)}>
                  Again
                </Button>
                <Button type="button" variant="secondary" onClick={() => grade(1)}>
                  Hard
                </Button>
                <Button type="button" onClick={() => grade(2)}>
                  Good
                </Button>
                <Button type="button" onClick={() => grade(3)}>
                  Easy
                </Button>
              </div>
            ) : null}
          </div>
        )}
      </Panel>
    </AppShell>
  );
}
