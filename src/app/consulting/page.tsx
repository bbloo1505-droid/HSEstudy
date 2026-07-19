import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import {
  CONSULTING_JOB_STATEMENT,
  ESCALATION_TRIGGERS,
  EVIDENCE_TYPES,
  GRADUATE_MISTAKES,
  HIERARCHY_OF_CONTROLS,
  LEARNER_PROFILE,
  PROJECT_SEQUENCE,
  RECOMMENDATION_RULES,
  SCOPE_CHECKS,
  SCOPE_CREEP_LINES,
  SCOPE_CREEP_RESPONSE,
  SCOPE_EXAMPLES,
  THREE_PRIORITIES,
  WEEKDAY_PREP_SESSIONS,
} from "../../../content/consulting-os";

export default function ConsultingPage() {
  return (
    <AppShell title="Consulting operating system">
      <Panel eyebrow="Learner profile" title="Starting from zero">
        <p className="text-sm leading-relaxed">{LEARNER_PROFILE.statement}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
          {LEARNER_PROFILE.rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Panel>

      <Panel eyebrow="Graduate focus" title={CONSULTING_JOB_STATEMENT.title}>
        <p className="whitespace-pre-wrap text-sm leading-relaxed">{CONSULTING_JOB_STATEMENT.body}</p>
      </Panel>

      <Panel title="Project sequence">
        <ol className="list-decimal space-y-1 pl-5 text-sm">
          {PROJECT_SEQUENCE.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </Panel>

      <div className="grid gap-6 md:grid-cols-2">
        <Panel title="Scope checks">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {SCOPE_CHECKS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Panel>
        <Panel title="Different scopes — never blur">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {SCOPE_EXAMPLES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel title="Hierarchy of controls">
        <ol className="list-decimal space-y-1 pl-5 text-sm">
          {HIERARCHY_OF_CONTROLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </Panel>

      <Panel title="Evidence you may collect">
        <ul className="grid gap-1 text-sm sm:grid-cols-2">
          {EVIDENCE_TYPES.map((s) => (
            <li key={s} className="border border-[var(--line)] px-2 py-1">
              {s}
            </li>
          ))}
        </ul>
      </Panel>

      <Panel title="Recommendations must state">
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {RECOMMENDATION_RULES.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Panel>

      <Panel title="Escalate immediately when">
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {ESCALATION_TRIGGERS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Panel>

      <Panel title="Scope creep">
        <ul className="mb-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
          {SCOPE_CREEP_LINES.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="border border-[var(--line)] bg-[var(--bg-soft)] px-3 py-2 text-sm font-medium">
          {SCOPE_CREEP_RESPONSE}
        </p>
      </Panel>

      <Panel title="Three highest-leverage priorities">
        <div className="space-y-3 text-sm">
          {THREE_PRIORITIES.map((p, i) => (
            <div key={p.title} className="border border-[var(--line)] px-3 py-2">
              <p className="font-semibold">
                {i + 1}. {p.title}
              </p>
              <p className="mt-1 text-[var(--muted)]">{p.detail}</p>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Graduate mistakes to avoid">
        {(
          [
            ["Structural", GRADUATE_MISTAKES.structural],
            ["Execution", GRADUATE_MISTAKES.execution],
            ["Technical", GRADUATE_MISTAKES.technical],
            ["Personal", GRADUATE_MISTAKES.personal],
          ] as const
        ).map(([label, items]) => (
          <div key={label} className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{label}</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
              {items.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        ))}
      </Panel>

      <Panel eyebrow="Until 10 August" title="Weekday Prensa prep sessions">
        <ul className="divide-y divide-[var(--line)] text-sm">
          {WEEKDAY_PREP_SESSIONS.map((s) => (
            <li key={s.date} className="py-3">
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                {s.date} · Week {s.week}
              </p>
              <p className="font-medium">{s.title}</p>
              <p className="mt-1 text-[var(--muted)]">Closed-book: {s.closedBook}</p>
            </li>
          ))}
        </ul>
      </Panel>
    </AppShell>
  );
}
