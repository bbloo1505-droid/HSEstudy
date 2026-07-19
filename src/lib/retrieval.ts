import { getDb } from "./db";
import type { DocumentType } from "./types";

export type RetrievedChunk = {
  chunkId: number;
  documentId: string;
  title: string;
  jurisdiction: string;
  documentType: DocumentType;
  currentStatus: string;
  sectionLabel: string;
  pageHint: string;
  content: string;
  rank: number;
};

const TYPE_PRIORITY: Record<string, number> = {
  legislation: 0,
  regulation: 1,
  approved_code_of_practice: 2,
  australian_standard: 3,
  regulator_guidance: 4,
  company_procedure: 5,
  general_explanatory: 9,
};

function typeBoost(documentType: string): number {
  return TYPE_PRIORITY[documentType] ?? 6;
}

/** Hybrid-ish local retrieval via SQLite FTS5. Official docs rank above study primers. */
export function searchDocuments(query: string, limit = 6): RetrievedChunk[] {
  const db = getDb();
  const cleaned = query
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, 12)
    .join(" ");

  if (!cleaned.trim()) return [];

  const ftsQuery = cleaned
    .split(/\s+/)
    .map((w) => `"${w}"*`)
    .join(" OR ");

  try {
    const rows = db
      .prepare(
        `
      SELECT
        c.id AS chunkId,
        c.document_id AS documentId,
        d.title AS title,
        d.jurisdiction AS jurisdiction,
        d.document_type AS documentType,
        d.current_status AS currentStatus,
        c.section_label AS sectionLabel,
        c.page_hint AS pageHint,
        c.content AS content,
        bm25(document_fts) AS rank
      FROM document_fts
      JOIN document_chunks c ON c.id = document_fts.chunk_id
      JOIN documents d ON d.id = c.document_id
      WHERE document_fts MATCH ?
      ORDER BY rank
      LIMIT ?
    `,
      )
      .all(ftsQuery, Math.max(limit * 8, 24)) as RetrievedChunk[];

    return rows
      .sort((a, b) => {
        const typeDiff = typeBoost(a.documentType) - typeBoost(b.documentType);
        if (typeDiff !== 0) return typeDiff;
        return a.rank - b.rank; // bm25: lower is better
      })
      .slice(0, limit);
  } catch {
    const like = `%${cleaned.split(/\s+/)[0]}%`;
    const rows = db
      .prepare(
        `
      SELECT
        c.id AS chunkId,
        c.document_id AS documentId,
        d.title AS title,
        d.jurisdiction AS jurisdiction,
        d.document_type AS documentType,
        d.current_status AS currentStatus,
        c.section_label AS sectionLabel,
        c.page_hint AS pageHint,
        c.content AS content,
        0 AS rank
      FROM document_chunks c
      JOIN documents d ON d.id = c.document_id
      WHERE c.content LIKE ?
      LIMIT ?
    `,
      )
      .all(like, Math.max(limit * 8, 24)) as RetrievedChunk[];

    return rows
      .sort((a, b) => typeBoost(a.documentType) - typeBoost(b.documentType))
      .slice(0, limit);
  }
}

export function getDocumentCount(): number {
  const row = getDb().prepare(`SELECT COUNT(*) AS n FROM documents`).get() as { n: number };
  return row.n;
}

export function listDocuments() {
  return getDb()
    .prepare(
      `SELECT id, title, jurisdiction, regulator, document_type AS documentType,
              publication_year AS publicationYear, effective_date AS effectiveDate,
              version, current_status AS currentStatus, topics_json AS topicsJson,
              reviewed_at AS reviewedAt, filename, original_source_reference AS originalSourceReference
       FROM documents ORDER BY title`,
    )
    .all();
}
