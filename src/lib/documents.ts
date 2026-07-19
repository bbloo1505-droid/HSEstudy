import fs from "fs";
import path from "path";
import { getDb } from "./db";
import { DocumentMetaSchema, type DocumentMeta } from "./types";

const DOCS_DIR = path.join(process.cwd(), "data", "documents");

function chunkText(text: string, size = 900): { content: string; sectionLabel: string; pageHint: string }[] {
  const parts = text.split(/\n(?=#{1,3}\s)|\n{2,}/).map((p) => p.trim()).filter(Boolean);
  const chunks: { content: string; sectionLabel: string; pageHint: string }[] = [];
  let buffer = "";
  let section = "Body";
  let page = "";

  const flush = () => {
    if (!buffer.trim()) return;
    chunks.push({ content: buffer.trim(), sectionLabel: section, pageHint: page || section });
    buffer = "";
  };

  for (const part of parts) {
    const heading = part.match(/^#{1,3}\s+(.+)/);
    const pageMark = part.match(/\[\[page:([^\]]+)\]\]/i);
    if (pageMark) page = pageMark[1].trim();
    if (heading) {
      flush();
      section = heading[1].trim();
    }
    if ((buffer + "\n\n" + part).length > size) flush();
    buffer = buffer ? `${buffer}\n\n${part}` : part;
  }
  flush();
  return chunks.length ? chunks : [{ content: text.slice(0, size), sectionLabel: "Body", pageHint: "1" }];
}

export function ensureDocsDir() {
  if (!fs.existsSync(DOCS_DIR)) fs.mkdirSync(DOCS_DIR, { recursive: true });
}

/** Import all *.meta.json + matching .txt/.md files from data/documents */
export function importLocalDocuments(): { imported: number; errors: string[] } {
  ensureDocsDir();
  const db = getDb();
  const errors: string[] = [];
  let imported = 0;

  const metas = fs.readdirSync(DOCS_DIR).filter((f) => f.endsWith(".meta.json"));

  const insertDoc = db.prepare(`
    INSERT OR REPLACE INTO documents (
      id, title, jurisdiction, regulator, document_type, publication_date, publication_year,
      effective_date, version, current_status, original_source_reference, topics_json,
      reviewed_at, filename, imported_at
    ) VALUES (
      @id, @title, @jurisdiction, @regulator, @documentType, @publicationDate, @publicationYear,
      @effectiveDate, @version, @currentStatus, @originalSourceReference, @topicsJson,
      @reviewedAt, @filename, @importedAt
    )
  `);

  const deleteChunks = db.prepare(`DELETE FROM document_chunks WHERE document_id = ?`);
  const deleteFts = db.prepare(`DELETE FROM document_fts WHERE document_id = ?`);
  const insertChunk = db.prepare(`
    INSERT INTO document_chunks (document_id, chunk_index, section_label, page_hint, content)
    VALUES (?, ?, ?, ?, ?)
  `);
  const insertFts = db.prepare(`
    INSERT INTO document_fts (content, section_label, document_id, chunk_id)
    VALUES (?, ?, ?, ?)
  `);

  const tx = db.transaction((meta: DocumentMeta, body: string) => {
    const id = meta.filename.replace(/\.(txt|md)$/i, "");
    insertDoc.run({
      id,
      title: meta.title,
      jurisdiction: meta.jurisdiction,
      regulator: meta.regulator,
      documentType: meta.documentType,
      publicationDate: meta.publicationDate ?? null,
      publicationYear: meta.publicationYear ?? null,
      effectiveDate: meta.effectiveDate ?? null,
      version: meta.version ?? null,
      currentStatus: meta.currentStatus,
      originalSourceReference: meta.originalSourceReference,
      topicsJson: JSON.stringify(meta.topics),
      reviewedAt: meta.reviewedAt,
      filename: meta.filename,
      importedAt: new Date().toISOString(),
    });
    deleteChunks.run(id);
    deleteFts.run(id);
    const chunks = chunkText(body);
    chunks.forEach((c, i) => {
      const info = insertChunk.run(id, i, c.sectionLabel, c.pageHint, c.content);
      insertFts.run(c.content, c.sectionLabel, id, Number(info.lastInsertRowid));
    });
  });

  for (const metaFile of metas) {
    try {
      const raw = JSON.parse(fs.readFileSync(path.join(DOCS_DIR, metaFile), "utf8"));
      const meta = DocumentMetaSchema.parse(raw);
      const bodyPath = path.join(DOCS_DIR, meta.filename);
      if (!fs.existsSync(bodyPath)) {
        errors.push(`Missing body file for ${metaFile}: ${meta.filename}`);
        continue;
      }
      const body = fs.readFileSync(bodyPath, "utf8");
      tx(meta, body);
      imported += 1;
    } catch (e) {
      errors.push(`${metaFile}: ${e instanceof Error ? e.message : String(e)}`);
    }
  }

  return { imported, errors };
}
