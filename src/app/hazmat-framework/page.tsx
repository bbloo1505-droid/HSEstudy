import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import {
  BEGINNER_VOCAB,
  HAZMAT_FRAMEWORK_INTRO,
  HAZMAT_STEPS,
  REFERENCE_BODIES,
  SPECIALISED_SERVICES,
} from "../../../content/hazmat-risk-framework";

export default function HazmatFrameworkPage() {
  return (
    <AppShell title="HAZMAT risk framework">
      <Panel eyebrow="Beginner map" title={HAZMAT_FRAMEWORK_INTRO.title}>
        <p className="text-sm leading-relaxed text-[#d7deea]">{HAZMAT_FRAMEWORK_INTRO.plainEnglish}</p>
        <p className="mt-3 rounded-xl border border-[var(--line)] bg-[var(--accent-dim)] px-3 py-2 text-sm text-[var(--accent)]">
          {HAZMAT_FRAMEWORK_INTRO.beginnerNote}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/consulting"
            className="rounded-xl border border-[var(--line-strong)] px-3 py-2 text-sm"
          >
            Consulting OS
          </Link>
          <Link
            href="/lesson?id=w1-wed"
            className="rounded-xl bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-[#062016]"
          >
            Risk management lesson
          </Link>
        </div>
      </Panel>

      <Panel title="Words to learn first">
        <dl className="grid gap-3 sm:grid-cols-2">
          {BEGINNER_VOCAB.map((v) => (
            <div key={v.term} className="rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] p-3">
              <dt className="text-sm font-semibold text-[var(--accent)]">{v.term}</dt>
              <dd className="mt-1 text-sm text-[var(--muted)]">{v.definition}</dd>
            </div>
          ))}
        </dl>
      </Panel>

      {HAZMAT_STEPS.map((step) => (
        <Panel
          key={step.n}
          eyebrow={`Step ${step.n}`}
          title={step.title}
          action={<span className="badge badge-violet">{step.n}/5</span>}
        >
          <p className="text-sm leading-relaxed text-[#d7deea]">{step.plainEnglish}</p>

          {"hierarchy" in step && step.hierarchy ? (
            <ol className="mt-4 space-y-2">
              {step.hierarchy.map((h, i) => (
                <li
                  key={h.name}
                  className="rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-2.5 text-sm"
                >
                  <p className="font-semibold">
                    {i + 1}. {h.name}
                  </p>
                  <p className="mt-1 text-[var(--muted)]">{h.example}</p>
                </li>
              ))}
            </ol>
          ) : null}

          {"actions" in step && step.actions ? (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[#d7deea]">
              {step.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          ) : null}

          <p className="mt-4 rounded-xl border border-[var(--amber)]/30 bg-[var(--amber-dim)] px-3 py-2 text-sm text-[var(--amber)]">
            Consultant tip: {step.consultantCare}
          </p>
        </Panel>
      ))}

      <Panel eyebrow="Service types you will hear" title="Specialised consulting areas">
        <div className="space-y-3">
          {SPECIALISED_SERVICES.map((s) => (
            <div key={s.title} className="rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] p-4">
              <p className="font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-[#d7deea]">{s.plainEnglish}</p>
              <p className="mt-2 text-xs text-[var(--muted)]">{s.note}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Who the guidance usually comes from">
        <ul className="space-y-2 text-sm">
          {REFERENCE_BODIES.map((b) => (
            <li key={b.name} className="rounded-xl border border-[var(--line)] px-3 py-2">
              <span className="font-medium">{b.name}</span>
              <span className="text-[var(--muted)]"> — {b.role}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-[var(--muted)]">
          Codes and guidance help you meet duties. They are not a substitute for reading the Queensland
          Act/Regulation when you need a legal requirement.
        </p>
      </Panel>
    </AppShell>
  );
}
