/**
 * LLM provider for HSE Launchpad (personal study tool).
 * Prefers OpenAI-compatible cloud API when configured; otherwise Ollama; otherwise none.
 */

import { checkOllama, generateText as ollamaGenerate } from "./ollama";

export type LlmProvider = "openai" | "ollama" | "none";

export type LlmStatus = {
  provider: LlmProvider;
  online: boolean;
  model: string | null;
  label: string;
};

function openaiKey(): string | undefined {
  return process.env.OPENAI_API_KEY?.trim() || undefined;
}

function openaiBase(): string {
  return (process.env.OPENAI_BASE_URL?.trim() || "https://api.openai.com/v1").replace(/\/$/, "");
}

function openaiModel(): string {
  return process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";
}

export async function getLlmStatus(): Promise<LlmStatus> {
  if (openaiKey()) {
    return {
      provider: "openai",
      online: true,
      model: openaiModel(),
      label: `Cloud · ${openaiModel()}`,
    };
  }

  const ollama = await checkOllama();
  if (ollama.online && ollama.models.length) {
    const model = ollama.models[0]?.name ?? "ollama";
    return {
      provider: "ollama",
      online: true,
      model,
      label: `Ollama · ${model}`,
    };
  }

  return {
    provider: "none",
    online: false,
    model: null,
    label: "No AI configured",
  };
}

export async function generateLlmText(opts: {
  system: string;
  prompt: string;
  temperature?: number;
}): Promise<{ text: string; provider: LlmProvider; model: string }> {
  const key = openaiKey();
  if (key) {
    const model = openaiModel();
    const res = await fetch(`${openaiBase()}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model,
        temperature: opts.temperature ?? 0.2,
        messages: [
          { role: "system", content: opts.system },
          { role: "user", content: opts.prompt },
        ],
      }),
      signal: AbortSignal.timeout(120_000),
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`OpenAI-compatible API error ${res.status}: ${err}`);
    }
    const data = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = data.choices?.[0]?.message?.content?.trim() ?? "";
    return { text, provider: "openai", model };
  }

  const ollama = await checkOllama();
  if (ollama.online && ollama.models.length) {
    const model = ollama.models[0].name;
    const text = await ollamaGenerate({
      model,
      system: opts.system,
      prompt: opts.prompt,
      temperature: opts.temperature,
    });
    return { text, provider: "ollama", model };
  }

  throw new Error(
    "No AI provider configured. Add OPENAI_API_KEY to .env.local (recommended for a personal study tool), or run Ollama.",
  );
}
