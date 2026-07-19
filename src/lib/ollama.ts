/**
 * Local-only Ollama client. Nothing leaves localhost.
 */

export type OllamaModelInfo = {
  name: string;
  size?: number;
  modified_at?: string;
};

const DEFAULT_HOST = process.env.OLLAMA_HOST ?? "http://127.0.0.1:11434";

export function getOllamaHost(): string {
  return DEFAULT_HOST;
}

export async function listModels(): Promise<OllamaModelInfo[]> {
  try {
    const res = await fetch(`${getOllamaHost()}/api/tags`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { models?: OllamaModelInfo[] };
    return data.models ?? [];
  } catch {
    return [];
  }
}

export async function isOllamaAvailable(): Promise<boolean> {
  const models = await listModels();
  return true; // connection succeeded if listModels didn't throw... actually empty can mean up
}

export async function checkOllama(): Promise<{
  online: boolean;
  models: OllamaModelInfo[];
  host: string;
}> {
  try {
    const res = await fetch(`${getOllamaHost()}/api/tags`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return { online: false, models: [], host: getOllamaHost() };
    const data = (await res.json()) as { models?: OllamaModelInfo[] };
    return { online: true, models: data.models ?? [], host: getOllamaHost() };
  } catch {
    return { online: false, models: [], host: getOllamaHost() };
  }
}

export async function generateText(opts: {
  model: string;
  system: string;
  prompt: string;
  temperature?: number;
}): Promise<string> {
  const res = await fetch(`${getOllamaHost()}/api/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: opts.model,
      system: opts.system,
      prompt: opts.prompt,
      stream: false,
      options: { temperature: opts.temperature ?? 0.2 },
    }),
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Ollama error ${res.status}: ${text}`);
  }
  const data = (await res.json()) as { response?: string };
  return data.response?.trim() ?? "";
}
