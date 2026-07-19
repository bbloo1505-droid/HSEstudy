import { describe, expect, it } from "vitest";
import { addDays, createCard, isDue, questionWeight, reviewCard, todayIso } from "@/lib/srs";

describe("spaced repetition", () => {
  it("creates cards due today", () => {
    const card = createCard("2026-07-19");
    expect(card.dueAt).toBe("2026-07-19");
    expect(isDue(card, "2026-07-19")).toBe(true);
  });

  it("spaces out successful reviews", () => {
    let card = createCard("2026-07-19");
    card = reviewCard(card, 2, "2026-07-19");
    expect(card.intervalDays).toBe(1);
    expect(card.dueAt).toBe("2026-07-20");
    card = reviewCard(card, 2, "2026-07-20");
    expect(card.intervalDays).toBe(3);
  });

  it("returns incorrect cards immediately", () => {
    let card = createCard("2026-07-19");
    card = reviewCard(card, 2, "2026-07-19");
    card = reviewCard(card, 0, "2026-07-20");
    expect(card.dueAt).toBe("2026-07-20");
    expect(card.repetitions).toBe(0);
    expect(card.lapses).toBe(1);
  });

  it("weights frequently missed questions higher", () => {
    const easy = questionWeight({ incorrectCount: 0, correctCount: 5, lastIncorrectAt: null });
    const hard = questionWeight({
      incorrectCount: 4,
      correctCount: 1,
      lastIncorrectAt: todayIso(),
    });
    expect(hard).toBeGreaterThan(easy);
  });

  it("adds days correctly", () => {
    expect(addDays("2026-07-31", 1)).toBe("2026-08-01");
  });
});
