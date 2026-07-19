import { buildSourceAnswer, unverifiedAnswer, validateSourceModeAnswer } from "./citations";
import { getDb } from "./db";
import { generateLlmText, getLlmStatus } from "./llm";
import { searchDocuments } from "./retrieval";
import type { AnswerMode, SourceAnswer } from "./types";
import { TRAINING_DISCLAIMER } from "./types";

export async function askHse(question: string, mode: AnswerMode): Promise<SourceAnswer> {
  const q = question.trim();
  if (!q) return unverifiedAnswer("");

  if (mode === "source") {
    return askSourceMode(q);
  }
  return askStudyMode(q);
}

async function askSourceMode(question: string): Promise<SourceAnswer> {
  const hits = searchDocuments(question, 5);
  if (!hits.length) {
    const answer = unverifiedAnswer(question);
    logAsk("source", question, answer);
    return answer;
  }

  const top = hits[0];
  const context = hits
    .map(
      (h, i) =>
        `[${i + 1}] ${h.title} | ${h.sectionLabel || h.pageHint}\n${h.content.slice(0, 1200)}`,
    )
    .join("\n\n");

  const status = await getLlmStatus();
  let directAnswer = "";
  let plainEnglish = "";
  let relevance = "";
  let uncertainty = "Answer constrained to retrieved excerpts only.";

  if (status.online) {
    try {
      const { text: raw } = await generateLlmText({
        temperature: 0.1,
        system: `You are in SOURCE MODE for a Queensland HSE learning app for an absolute beginner graduate.
Rules:
- Use ONLY the provided excerpts.
- Never invent section numbers, page numbers, duties, or exposure limits.
- Never present a code of practice as legislation.
- If excerpts are insufficient, say so clearly.
- Explain plainly; define jargon briefly.
- Return JSON with keys: directAnswer, plainEnglish, consultantRelevance, uncertainty.
${TRAINING_DISCLAIMER}`,
        prompt: `Question: ${question}\n\nExcerpts:\n${context}\n\nJSON:`,
      });
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]) as {
          directAnswer?: string;
          plainEnglish?: string;
          consultantRelevance?: string;
          uncertainty?: string;
        };
        directAnswer = parsed.directAnswer ?? "";
        plainEnglish = parsed.plainEnglish ?? "";
        relevance = parsed.consultantRelevance ?? "";
        uncertainty = parsed.uncertainty ?? uncertainty;
      }
    } catch {
      // fall through to excerpt-only answer
    }
  }

  if (!directAnswer) {
    directAnswer = `Based on retrieved text from “${top.title}” (${top.sectionLabel || top.pageHint}): ${top.content.slice(0, 400)}…`;
    plainEnglish = status.online
      ? "The model did not return structured JSON. Showing the top matching excerpt — read the source yourself before relying on this."
      : "No AI key configured. Showing the top matching excerpt from your library. Add OPENAI_API_KEY in .env.local for clearer answers.";
    relevance =
      "Use the excerpt locator to open the official document and confirm the requirement with your supervisor.";
  }

  const answer = buildSourceAnswer({
    directAnswer,
    plainEnglish,
    title: top.title,
    pageOrSection: top.pageHint || top.sectionLabel || "Retrieved excerpt",
    jurisdiction: top.jurisdiction,
    documentStatus: top.currentStatus,
    documentType: top.documentType,
    consultantRelevance: relevance,
    uncertainty,
    excerpt: top.content.slice(0, 900),
    confidence: hits.length >= 2 ? "medium" : "low",
  });

  const validation = validateSourceModeAnswer(answer);
  const finalAnswer = validation.ok ? answer : unverifiedAnswer(question);
  logAsk("source", question, finalAnswer);
  return finalAnswer;
}

async function askStudyMode(question: string): Promise<SourceAnswer> {
  const hits = searchDocuments(question, 3);
  const status = await getLlmStatus();

  const grounding = hits.length
    ? hits.map((h) => `- ${h.title} (${h.sectionLabel}): ${h.content.slice(0, 500)}`).join("\n")
    : "No local official excerpts retrieved. Provide a beginner study explanation and clearly mark that it is uncited.";

  if (!status.online) {
    const answer: SourceAnswer = {
      directAnswer:
        "Study AI is not configured yet. Add OPENAI_API_KEY to .env.local (easiest), or run Ollama.",
      plainEnglish: hits[0]?.content.slice(0, 600) ??
        "Until AI is configured, use Daily Lesson, Consulting OS, and the Source Library.",
      officialSourceTitle: hits[0]?.title ?? "—",
      pageOrSection: hits[0] ? hits[0].pageHint || hits[0].sectionLabel : "—",
      jurisdiction: hits[0]?.jurisdiction ?? "Queensland (expected)",
      documentStatus: hits[0]?.currentStatus ?? "—",
      documentType: hits[0]?.documentType ?? "general_explanatory",
      consultantRelevance:
        "Study explanations help you learn; they are not legal advice and must be verified.",
      uncertainty: hits.length ? "Excerpt shown without model synthesis." : "No sources retrieved.",
      confidence: hits.length ? "low" : "unverified",
      verified: false,
      excerpt: hits[0]?.content.slice(0, 900),
    };
    logAsk("study", question, answer);
    return answer;
  }

  try {
    const { text: raw } = await generateLlmText({
      temperature: 0.35,
      system: `You are a patient study coach for an absolute beginner Associate HSE Consultant starting in Queensland.
Assume zero prior HSE knowledge. Define jargon in plain English.
Study mode may explain, analogise, and quiz — but must NOT invent citations.
Never invent section numbers or exposure limits.
Distinguish legislation vs codes of practice vs standards vs company procedures.
If unsure, say so.
${TRAINING_DISCLAIMER}
Return JSON: directAnswer, plainEnglish, consultantRelevance, uncertainty, confidence (high|medium|low|unverified).`,
      prompt: `Question: ${question}\n\nOptional grounding excerpts:\n${grounding}\n\nJSON:`,
    });
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    const parsed = jsonMatch
      ? (JSON.parse(jsonMatch[0]) as {
          directAnswer?: string;
          plainEnglish?: string;
          consultantRelevance?: string;
          uncertainty?: string;
          confidence?: SourceAnswer["confidence"];
        })
      : {};

    const answer: SourceAnswer = {
      directAnswer: parsed.directAnswer ?? raw.slice(0, 800),
      plainEnglish: parsed.plainEnglish ?? "See direct answer.",
      officialSourceTitle: hits[0]?.title ?? "Uncited study explanation",
      pageOrSection: hits[0] ? hits[0].pageHint || hits[0].sectionLabel : "—",
      jurisdiction: hits[0]?.jurisdiction ?? "Queensland (study context)",
      documentStatus: hits[0]?.currentStatus ?? "n/a",
      documentType: hits[0]?.documentType ?? "general_explanatory",
      consultantRelevance:
        parsed.consultantRelevance ??
        "Useful for learning; verify before applying on site or in reports.",
      uncertainty: parsed.uncertainty ?? "Study mode — not a verified citation.",
      confidence: parsed.confidence ?? (hits.length ? "medium" : "unverified"),
      verified: false,
      excerpt: hits[0]?.content.slice(0, 900),
    };
    logAsk("study", question, answer);
    return answer;
  } catch (e) {
    const answer = unverifiedAnswer(
      `${question} (model error: ${e instanceof Error ? e.message : String(e)})`,
    );
    logAsk("study", question, answer);
    return answer;
  }
}

function logAsk(mode: AnswerMode, question: string, answer: SourceAnswer) {
  getDb()
    .prepare(
      `INSERT INTO ask_log (mode, question, answer_json, created_at) VALUES (?, ?, ?, ?)`,
    )
    .run(mode, question, JSON.stringify(answer), new Date().toISOString());
}
