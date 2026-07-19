# HSE Launchpad

Personal learning assistant for an Associate HSE Consultant preparing to start in Queensland (curriculum ends **9 August 2026**).

Uses Node.js 22 built-in SQLite (Vercel-friendly). Locally, progress persists under `data/`. On Vercel, the database is in-memory per instance (study content still works; progress may reset on cold starts).

**Ask HSE** uses a cloud API key (Groq/OpenAI-compatible) via environment variables.

## What you get

1. Dashboard  
2. Guided 3-week curriculum  
3. Daily lesson (explanation, terminology, readings, scenario, quiz, confidence)  
4. Official source library (local import + FTS search)  
5. Ask HSE — **Study mode** and **Source mode**  
6. Flashcards (spaced repetition; incorrect quiz answers return sooner)  
7. Quiz centre (weighted toward weak areas)  
8. Scenario simulator (fictional jobs)  
9. Final mock project checklist  
10. Progress / weak areas  

## Quick start

```bash
cd hse-launchpad
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### AI setup (pick one)

**Recommended — cloud (OpenAI-compatible):**

```bash
copy .env.example .env.local
# edit .env.local and set OPENAI_API_KEY=sk-...
```

Optional: `OPENAI_MODEL=gpt-4o-mini` and `OPENAI_BASE_URL` for other OpenAI-compatible providers.

### Vercel

Set **Node.js 22+** in the project settings, then add:

- `OPENAI_API_KEY`
- `OPENAI_BASE_URL` (e.g. `https://api.groq.com/openai/v1`)
- `OPENAI_MODEL` (e.g. `llama-3.3-70b-versatile`)

Redeploy after pushing.

**Optional — Ollama instead:**

```bash
ollama serve
ollama pull qwen3:8b
```

If no AI is configured, Source mode still returns the best matching library excerpt or **not verified**.

## Import official documents

See `data/documents/README.md` and `data/imports/IMPORT.md`.

Starter primers are educational digests only. Download and import:

1. Work Health and Safety Act 2011 (Qld)  
2. Work Health and Safety Regulation 2011 (Qld)  
3. How to manage and control asbestos in the workplace Code of Practice 2021 (varied 2023)  
4. How to safely remove asbestos Code of Practice 2021 (varied 2023)  
5. Hazardous chemicals and/or silica approved code (Qld)

Do **not** import employer/client/confidential material without written approval.

## Study session shape (weekdays)

- 10 min — closed-book recall  
- 20 min — structured lesson  
- 20 min — official source reading  
- 20 min — applied scenario  
- 10 min — quiz + flashcards  

## Scripts

```bash
npm run dev          # local app
npm run build        # production build
npm run start        # serve production build
npm run lint
npm run typecheck
npm run test         # unit tests (vitest)
npm run test:e2e     # Playwright
npm run check        # typecheck + lint + unit + build
```

## Safety boundaries

Training aid only. It must not provide final legal advice, declare ACM from photos, approve exposure assessments, state a workplace is safe, invent exposure limits, or replace employer induction/supervision.

Banner on every page:

> Training aid — verify against current legislation, approved procedures and supervisor guidance.

## Data location

- SQLite progress DB: `data/hse-launchpad.db` (gitignored)  
- Documents: `data/documents/`  
- Nothing is uploaded to external AI APIs.
