/**
 * Simple spaced-repetition scheduler.
 * Incorrect answers return sooner; correct answers space out.
 */

export type SrsCard = {
  ease: number;
  intervalDays: number;
  repetitions: number;
  dueAt: string; // ISO date YYYY-MM-DD
  lapses: number;
};

const MIN_EASE = 1.3;

export function todayIso(d = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export function addDays(iso: string, days: number): string {
  const d = new Date(`${iso}T12:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function createCard(from = todayIso()): SrsCard {
  return {
    ease: 2.5,
    intervalDays: 0,
    repetitions: 0,
    dueAt: from,
    lapses: 0,
  };
}

/** Grade: 0 = again, 1 = hard, 2 = good, 3 = easy */
export function reviewCard(card: SrsCard, grade: 0 | 1 | 2 | 3, from = todayIso()): SrsCard {
  if (grade === 0) {
    return {
      ...card,
      repetitions: 0,
      intervalDays: 0,
      ease: Math.max(MIN_EASE, card.ease - 0.2),
      lapses: card.lapses + 1,
      dueAt: from, // again today
    };
  }

  let { ease, intervalDays, repetitions } = card;

  if (grade === 1) ease = Math.max(MIN_EASE, ease - 0.15);
  if (grade === 3) ease = ease + 0.15;

  if (repetitions === 0) {
    intervalDays = grade === 1 ? 0 : 1;
  } else if (repetitions === 1) {
    intervalDays = grade === 1 ? 1 : 3;
  } else {
    const factor = grade === 1 ? 1.2 : grade === 2 ? ease : ease * 1.3;
    intervalDays = Math.max(1, Math.round(intervalDays * factor));
  }

  // Incorrect history shortens intervals
  if (card.lapses > 2 && intervalDays > 1) {
    intervalDays = Math.max(1, Math.floor(intervalDays * 0.75));
  }

  return {
    ease,
    intervalDays,
    repetitions: repetitions + 1,
    lapses: card.lapses,
    dueAt: addDays(from, intervalDays),
  };
}

export function isDue(card: SrsCard, on = todayIso()): boolean {
  return card.dueAt <= on;
}

/** Priority weight for quiz scheduling: higher = ask more often */
export function questionWeight(opts: {
  incorrectCount: number;
  correctCount: number;
  lastIncorrectAt: string | null;
}): number {
  const total = opts.incorrectCount + opts.correctCount;
  const errorRate = total === 0 ? 0.5 : opts.incorrectCount / total;
  const recentBoost = opts.lastIncorrectAt && opts.lastIncorrectAt >= addDays(todayIso(), -3) ? 1.5 : 1;
  return 1 + errorRate * 4 * recentBoost + opts.incorrectCount * 0.25;
}
