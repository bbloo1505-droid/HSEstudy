"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/", label: "Dashboard", icon: "⌂" },
  { href: "/curriculum", label: "Curriculum", icon: "☰" },
  { href: "/consulting", label: "Consulting OS", icon: "◎" },
  { href: "/hazmat-framework", label: "HAZMAT Framework", icon: "⬡" },
  { href: "/lesson", label: "Daily Lesson", icon: "▸" },
  { href: "/ask", label: "Ask HSE", icon: "?" },
  { href: "/library", label: "Source Library", icon: "▦" },
  { href: "/flashcards", label: "Flashcards", icon: "▭" },
  { href: "/quiz", label: "Quiz Centre", icon: "✓" },
  { href: "/scenarios", label: "Scenarios", icon: "◇" },
  { href: "/mock-project", label: "Mock Project", icon: "▣" },
  { href: "/progress", label: "Progress", icon: "◉" },
];

export function SidebarNav({
  weekLabel,
  lessonTitle,
  lessonHref,
  progressPct,
  dueCards,
}: {
  weekLabel: string;
  lessonTitle: string;
  lessonHref: string;
  progressPct: number;
  dueCards: number;
}) {
  const pathname = usePathname();
  const [llmLabel, setLlmLabel] = useState("Checking AI…");
  const [llmOk, setLlmOk] = useState(false);

  useEffect(() => {
    fetch("/api/llm")
      .then((r) => r.json())
      .then((d: { online?: boolean; label?: string }) => {
        setLlmOk(!!d.online);
        setLlmLabel(d.label ?? "No AI configured");
      })
      .catch(() => {
        setLlmOk(false);
        setLlmLabel("No AI configured");
      });
  }, []);

  return (
    <aside className="card flex h-fit flex-col gap-4 p-3 md:sticky md:top-4">
      <div className="px-2 pt-1">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--accent-dim)] text-sm font-bold text-[var(--accent)]">
            HSE
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight">HSE Launchpad</p>
            <p className="text-[11px] text-[var(--muted)]">Personal study · Queensland</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className={llmOk ? "badge badge-ok" : "badge badge-warn"}>{llmLabel}</span>
          <span className="badge">Beginner</span>
        </div>
      </div>

      <nav>
        <ul className="space-y-0.5">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm transition",
                    active
                      ? "bg-[var(--violet-dim)] text-[#d8d2ff]"
                      : "text-[var(--muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]",
                  )}
                >
                  <span className="w-4 text-center text-xs opacity-80">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          This week
        </p>
        <p className="mt-1 text-xs text-[var(--violet)]">{weekLabel}</p>
        <p className="mt-1 line-clamp-2 text-sm font-medium leading-snug">{lessonTitle}</p>
        <div className="progress-track mt-3">
          <div className="progress-fill-violet" style={{ width: `${progressPct}%` }} />
        </div>
        <Link
          href={lessonHref}
          className="mt-3 flex w-full items-center justify-center rounded-xl bg-[var(--violet)] px-3 py-2 text-xs font-semibold text-white"
        >
          Continue lesson
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Beginner
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--accent)]">From zero</p>
        </div>
        <div className="rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Due cards
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--amber)]">{dueCards}</p>
        </div>
      </div>
    </aside>
  );
}
