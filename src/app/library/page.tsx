import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { ReimportButton } from "@/components/ReimportButton";
import { ensureSeeded } from "@/lib/seed";
import { listDocuments } from "@/lib/retrieval";

export const dynamic = "force-dynamic";

export default function LibraryPage() {
  ensureSeeded();
  const docs = listDocuments() as {
    id: string;
    title: string;
    jurisdiction: string;
    regulator: string;
    documentType: string;
    currentStatus: string;
    publicationYear: number | null;
    effectiveDate: string | null;
    version: string | null;
    topicsJson: string;
    reviewedAt: string;
    filename: string;
    originalSourceReference: string;
  }[];

  return (
    <AppShell title="Official source library">
      <Panel eyebrow="Local only" title="Indexed documents">
        <p className="mb-4 text-sm text-[var(--muted)]">
          Starter files are educational primers. Replace them with official Act/Regulation/code text
          extracts using the instructions in <code>data/documents/README.md</code>.
        </p>
        <ReimportButton />
      </Panel>

      <Panel title={`${docs.length} documents`}>
        <ul className="space-y-3">
          {docs.map((d) => (
            <li key={d.id} className="border border-[var(--line)] p-3 text-sm">
              <p className="font-medium">{d.title}</p>
              <p className="mt-1 text-[var(--muted)]">
                {d.jurisdiction} · {d.documentType.replaceAll("_", " ")} · {d.currentStatus}
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Regulator: {d.regulator}
                {d.version ? ` · Version: ${d.version}` : ""}
                {d.effectiveDate ? ` · Effective: ${d.effectiveDate}` : ""}
              </p>
              <p className="mt-1 text-xs">Topics: {(JSON.parse(d.topicsJson) as string[]).join(", ")}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">File: {d.filename}</p>
              <p className="mt-1 text-xs text-[var(--muted)]">{d.originalSourceReference}</p>
            </li>
          ))}
        </ul>
      </Panel>
    </AppShell>
  );
}
