/**
 * Graduate consulting operating system for Associate HSE Consultant prep.
 * Educational framing — not Prensa confidential procedures or templates.
 *
 * Learner profile: Cert I Conservation & Ecosystem Management with site WHS
 * experience — bridging into hazmat / hygiene consulting judgement.
 */

export const LEARNER_PROFILE = {
  level: "cert1_bridge_to_consulting" as const,
  statement:
    "You already have site WHS habits from Cert I. You are not expected to arrive as an occupational hygienist — you are building consulting depth: duty holders, registers, codes, evidence and escalation.",
  rules: [
    "Use what you know from site WHS — then upgrade the legal and reporting precision.",
    "Bridge: definition → consulting example → what goes in the report.",
    "Prefer verification over sounding competent.",
    "Escalate uncertainty; do not improvise on site.",
    "Never invent section numbers or exposure limits.",
  ],
};

export const CONSULTING_JOB_STATEMENT = {
  title: "What the job actually is (consulting-depth version)",
  body: `You already understand hazards, PPE and looking after people on site. Consulting adds scoped advice to duty holders.

In plain terms, consultants help clients make safer, legally defensible decisions when something at a workplace might harm people’s health (for example asbestos, dust, chemicals or noise).

The repeating job is:

1. Understand what the client is actually asking for (the scope) and who the PCBU is.
2. Look for things that could cause harm (hazards) and who could be exposed.
3. Collect evidence carefully (notes, photos, samples, CoC).
4. Check that evidence against Queensland instruments and good practice — label requirement vs guidance vs opinion.
5. Recommend practical controls (fix the source first; masks last) with residual risk and limitations.
6. Write it down so a supervisor and the client can follow your reasoning.

Reliability and precision beat cleverness. Depth beats skimming.`,
};

export const PROJECT_SEQUENCE = [
  "Scope",
  "Plan",
  "Inspect",
  "Sample",
  "Analyse",
  "Interpret",
  "Recommend",
  "Report",
] as const;

export const SCOPE_CHECKS = [
  "Why has the client engaged the consultancy?",
  "What site, buildings, workers or activities are included?",
  "What is specifically excluded?",
  "What deliverable has been promised?",
  "What deadline and budget apply?",
  "Is the work routine, legally required, or incident response?",
  "Who is authorised to make decisions?",
];

export const SCOPE_EXAMPLES = [
  "Prepare an asbestos register.",
  "Determine whether this wall contains asbestos before drilling.",
  "Conduct occupational exposure monitoring during removal.",
  "Investigate a suspected uncontrolled asbestos disturbance.",
  "Clear an area for reoccupation after removal.",
];

export const HIERARCHY_OF_CONTROLS = [
  "Eliminate",
  "Substitute",
  "Isolate",
  "Engineering controls",
  "Administrative controls",
  "PPE (last — least reliable)",
];

export const EVIDENCE_TYPES = [
  "observations",
  "worker interviews",
  "photographs",
  "plans and drawings",
  "asbestos registers / AMPs",
  "safety data sheets",
  "maintenance records",
  "task duration and frequency",
  "control measures in use",
  "bulk samples",
  "personal exposure samples",
  "static / background samples",
  "calibration records",
  "laboratory results",
];

export const INTERPRET_QUESTIONS = [
  "Is the sample representative?",
  "Was the correct method used?",
  "Was the worker performing normal work?",
  "Were controls operating normally?",
  "Was the monitoring period long enough?",
  "Were there unusual conditions?",
  "Does the result represent one worker, a task, or a broader SEG?",
  "What uncertainty remains?",
];

export const RECOMMENDATION_RULES = [
  "what needs to happen",
  "why it matters",
  "who should do it",
  "how urgently",
  "what standard or obligation drives it",
  "how effectiveness should be verified",
];

export const ESCALATION_TRIGGERS = [
  "suspected uncontrolled asbestos disturbance",
  "workers may be in immediate danger",
  "planned method cannot be followed",
  "asked to act outside competence",
  "samples or equipment may be compromised",
  "results suggest a serious exceedance",
  "site conditions materially differ from scope",
  "pressure to alter findings",
  "uncertain whether an area is safe",
];

export const SCOPE_CREEP_LINES = [
  "Could you quickly inspect the other building?",
  "While you're here, can you sample this as well?",
  "Can you give us a verbal clearance?",
  "Can you also tell us whether the mould is dangerous?",
];

export const SCOPE_CREEP_RESPONSE =
  "That may be outside the current scope. I'll confirm with the project manager before proceeding.";

export const GRADUATE_MISTAKES = {
  structural: [
    "Not understanding the scope",
    "Wrong sampling method",
    "Lost traceability between samples, notes and photos",
    "Conclusions the data cannot support",
    "Working outside competence without supervision",
  ],
  execution: [
    "Poor equipment preparation",
    "Missing calibration records",
    "Weak field notes",
    "Late timesheets",
    "Starting the report too late",
    "Not telling the PM about delays",
  ],
  technical: [
    "Treating an exposure limit as a target rather than a maximum",
    "Assuming static sample = personal exposure",
    "Assuming material is asbestos-free from appearance",
    "Confusing hazard with exposure risk",
    "Recommending PPE before higher-order controls",
    "Ignoring task duration and worker behaviour",
  ],
  personal: [
    "Pretending to understand instead of asking",
    "Overwriting reports to look clever",
    "Overconfidence after one or two similar jobs",
    "Letting client/contractor pressure change findings",
    "Watching instruments instead of observing the work",
    "Staying silent when something does not make sense",
  ],
};

export const THREE_PRIORITIES = [
  {
    title: "Become exceptional at evidence collection",
    detail:
      "Field notes, photographs, sample IDs, calibration, task observations, chain of custody. Seniors can fix awkward writing; they cannot reconstruct missing site information.",
  },
  {
    title: "Learn to write a defensible first draft",
    detail:
      "Correct scope, accurate methodology, traceable results, honest limitations, logical conclusions, practical recommendations. Perfect prose is secondary.",
  },
  {
    title: "Learn the employer’s internal system fast",
    detail:
      "Templates, folders, naming, equipment booking, lab submission, QA review, timesheets, budgets, escalation pathways. Process fluency beats memorising the whole Regulation in week one.",
  },
];

export type WeekdayPrepSession = {
  date: string; // YYYY-MM-DD
  week: number;
  title: string;
  focus: string[];
  closedBook: string;
  practice: string;
  readingHint: string;
  launchpadLessonId?: string;
};

/** Weekday Prensa prep aligned to curriculum through start date 10 Aug 2026. */
export const WEEKDAY_PREP_SESSIONS: WeekdayPrepSession[] = [
  {
    date: "2026-07-20",
    week: 1,
    title: "Day 1 bridge — what consulting is + the legal ladder",
    focus: [
      "Beginner: you are not expected to know this yet — learn the words first",
      "Project sequence in plain English: ask → plan → look → sample → lab → explain → recommend → write",
      "Legal ladder: Act (big duties) → Regulation (detailed rules) → codes (how to comply in practice) → standards/methods → company procedures",
      "Different client questions are different jobs (register ≠ clearance ≠ monitoring)",
    ],
    closedBook:
      "Without notes: (1) what does 'scope' mean? (2) name any 4 of the 8 project stages in order.",
    practice:
      "In 5 plain sentences, rewrite this client ask for a supervisor: 'Check if we can drill this wall.' Include PCBU/scope questions and what you still need to ask.",
    readingHint:
      "HSE Launchpad lesson w1-mon in-depth explanation (all sections). Skim risks COP contents page — do not read the whole PDF yet.",
    launchpadLessonId: "w1-mon",
  },
  {
    date: "2026-07-21",
    week: 1,
    title: "Duty holders, consultation, escalation",
    focus: [
      "PCBU, officer, worker duties",
      "When to escalate immediately",
      "Scope-creep response line",
    ],
    closedBook: "Name five escalation triggers.",
    practice: "Draft the exact words you would say when asked for a verbal clearance.",
    readingHint: "Consultation COP + duty holder sections in Act",
    launchpadLessonId: "w1-tue",
  },
  {
    date: "2026-07-22",
    week: 1,
    title: "Risk management and hierarchy of controls",
    focus: [
      "Hazard vs risk",
      "Hierarchy: eliminate → PPE last",
      "Poor vs actionable recommendations",
    ],
    closedBook: "Recite the hierarchy of controls.",
    practice:
      "Rewrite 'use appropriate PPE' into an actionable silica/dry-cutting recommendation.",
    readingHint: "How to manage WHS risks COP",
    launchpadLessonId: "w1-wed",
  },
  {
    date: "2026-07-23",
    week: 1,
    title: "Hazardous chemicals and SDS navigation",
    focus: ["GHS / labels / SDS / registers", "SDS ≠ task risk assessment", "Register gap patterns"],
    closedBook: "List the SDS sections you open first on site.",
    practice: "List eight things missing from a bad fictional chemical register.",
    readingHint: "Hazchem COP + labelling COP",
    launchpadLessonId: "w1-thu",
  },
  {
    date: "2026-07-24",
    week: 1,
    title: "Toxicology and exposure routes",
    focus: ["Inhalation / skin / ingestion / injection", "Acute vs chronic", "Dose ≈ concentration × time"],
    closedBook: "Explain hazard vs risk using sealed asbestos cement sheeting.",
    practice: "For lead dust, note primary routes and why hygiene/home contamination matters.",
    readingHint: "Hazchem COP exposure/health monitoring concepts",
    launchpadLessonId: "w1-fri",
  },
  {
    date: "2026-07-27",
    week: 2,
    title: "Asbestos fundamentals",
    focus: ["ACM / friable / non-friable / PACM", "Common products and locations", "Visual ≠ confirmation"],
    closedBook: "Define friable vs non-friable in one sentence each.",
    practice: "List 10 common ACM products you should learn to recognise as suspected.",
    readingHint: "Asbestos manage/control COP",
    launchpadLessonId: "w2-mon",
  },
  {
    date: "2026-07-28",
    week: 2,
    title: "Registers, AMP, survey types",
    focus: [
      "Register vs management plan",
      "Management vs refurbishment/demolition surveys",
      "Qld post-1989 register logic (verify in source)",
    ],
    closedBook: "When is a management survey insufficient?",
    practice: "Review a fictional incomplete register — list five gaps.",
    readingHint: "Asbestos manage/control COP — registers and AMP",
    launchpadLessonId: "w2-tue",
  },
  {
    date: "2026-07-29",
    week: 2,
    title: "Sampling, CoC, roles, clearances",
    focus: [
      "Chain of custody and ID matching",
      "Consultant vs assessor vs removalist",
      "Clearance is not a casual walkthrough",
      "Never clear under schedule pressure",
    ],
    closedBook: "What must match across notes, photos, bags, lab and report?",
    practice: "Write five field-note fields you will always capture for a bulk sample.",
    readingHint: "Asbestos remove COP — air monitoring and clearance concepts",
    launchpadLessonId: "w2-wed",
  },
  {
    date: "2026-07-30",
    week: 2,
    title: "Other hazmat recognition",
    focus: ["Lead paint", "PCBs", "SMF", "ODS", "When to call for sampling/specialists"],
    closedBook: "Name four non-asbestos hazmat categories and one typical location each.",
    practice: "Write limitations language for 'visual only — no sampling authorised'.",
    readingHint: "Risks COP + asbestos COP for multi-hazard walkovers",
    launchpadLessonId: "w2-thu",
  },
  {
    date: "2026-07-31",
    week: 2,
    title: "Silica and dust controls",
    focus: [
      "RCS and high-risk tasks",
      "Water / LEV / isolation / RPE",
      "Do not memorise limits from random webpages — use official WES/WEL",
    ],
    closedBook: "List hierarchy-aligned controls for dry concrete cutting.",
    practice: "Draft three prioritised recommendations for uncontrolled dry cutting.",
    readingHint: "Silica RCS COP",
    launchpadLessonId: "w2-fri",
  },
  {
    date: "2026-08-03",
    week: 3,
    title: "Occupational hygiene ARECC",
    focus: ["Anticipate → Recognise → Evaluate → Control → Verify", "SEG thinking", "Personal vs static"],
    closedBook: "Define SEG in one sentence.",
    practice: "Explain why two 'labourers' may need different monitoring.",
    readingHint: "Imported codes + Week 3 lesson",
    launchpadLessonId: "w3-mon",
  },
  {
    date: "2026-08-04",
    week: 3,
    title: "WES / WEL / TWA / STEL / peak",
    focus: [
      "WES operative until 30 Nov 2026",
      "WEL from 1 Dec 2026",
      "Limits are not a safe/dangerous bright line",
      "ALARP still applies",
    ],
    closedBook: "Define TWA, STEL and peak without numbers.",
    practice: "Write one sentence distinguishing WES vs WEL timing for an August 2026 report.",
    readingHint: "Safe Work Australia WES/WEL materials (import when available)",
    launchpadLessonId: "w3-tue",
  },
  {
    date: "2026-08-05",
    week: 3,
    title: "Sampling strategy and QA",
    focus: ["Calibration pre/post", "Blanks", "Method selection", "Direct-reading = indicative unless method allows"],
    closedBook: "List pre-sampling checks before you leave the office.",
    practice: "Write a mini method note for personal silica sampling (fields only, no invented limits).",
    readingHint: "Silica COP monitoring notes + lesson",
    launchpadLessonId: "w3-wed",
  },
  {
    date: "2026-08-06",
    week: 3,
    title: "Controls, RPE, verification",
    focus: ["Push clients back from mask-first thinking", "Fit, selection, use duration", "Verify controls"],
    closedBook: "Why is PPE the least reliable layer?",
    practice: "Convert a PPE-only client request into a hierarchy discussion script (6 lines).",
    readingHint: "Risks COP + silica COP controls",
    launchpadLessonId: "w3-thu",
  },
  {
    date: "2026-08-07",
    week: 3,
    title: "Health monitoring and boundaries",
    focus: [
      "Air monitoring ≠ health monitoring",
      "Registered medical practitioner supervision",
      "Do not declare workplaces 'safe'",
    ],
    closedBook: "One sentence: what health monitoring does and does not replace.",
    practice: "List five things outside graduate competence that must be escalated.",
    readingHint: "Hazchem COP health monitoring concepts",
    launchpadLessonId: "w3-fri",
  },
];

export function getPrepSessionForDate(iso: string): WeekdayPrepSession | null {
  return WEEKDAY_PREP_SESSIONS.find((s) => s.date === iso) ?? null;
}

export function nextPrepSession(fromIso: string): WeekdayPrepSession | null {
  return WEEKDAY_PREP_SESSIONS.find((s) => s.date >= fromIso) ?? null;
}
