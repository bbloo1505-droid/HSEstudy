import { askHse } from "../src/lib/ask";
import { ensureSeeded } from "../src/lib/seed";
import { listDocuments, searchDocuments } from "../src/lib/retrieval";

async function main() {
  ensureSeeded();
  const docs = listDocuments() as { title: string; documentType: string }[];
  console.log(
    "docs:",
    docs.map((d) => `${d.documentType}: ${d.title.slice(0, 72)}`),
  );

  const hits = searchDocuments("reasonably practicable PCBU", 3);
  console.log(
    "hits:",
    hits.map((h) => ({
      title: h.title.slice(0, 50),
      page: h.pageHint,
      type: h.documentType,
    })),
  );

  const a = await askHse(
    "What is the difference between a regulation and a code of practice?",
    "source",
  );
  console.log({
    verified: a.verified,
    source: a.officialSourceTitle,
    page: a.pageOrSection,
    type: a.documentType,
    confidence: a.confidence,
    excerpt: a.excerpt?.slice(0, 220),
  });
}

main();
