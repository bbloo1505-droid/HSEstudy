/**
 * NotebookLM Audio Overview prompts for the HSE Launchpad curriculum.
 * Use: Deep Dive · Long · English · topic-specific sources only.
 */

export const NOTEBOOKLM_SETUP = {
  format: "Deep Dive",
  length: "Long",
  language: "English",
  audienceLine:
    "Audience: absolute beginner Associate HSE Consultant starting in Queensland on 10 August 2026. Explain from zero. Define jargon. No invented section numbers or exposure limits. Distinguish Act vs Regulation vs codes. End with a 10-question verbal quiz and explained answers. Speak clearly with worked examples, a mid-episode recap, and repetition of key definitions.",
  tip: "Long is the closest NotebookLM setting to ~1 hour (not guaranteed). Prefer only the listed sources for each episode — do not select all sources every time.",
};

export type PodcastEpisode = {
  date: string;
  week: number;
  dayLabel: string;
  title: string;
  sources: string[];
  focus: string;
  launchpadLessonId?: string;
};

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    date: "2026-07-20",
    week: 1,
    dayLabel: "Week 1 — Monday",
    title: "Queensland WHS legal ladder",
    sources: [
      "Work Health and Safety Act 2011 (Queensland)",
      "Work Health and Safety Regulation 2011 (Queensland)",
      "How to manage work health and safety risks Code of Practice 2021",
    ],
    focus: `Explain how Queensland WHS law fits together: Act → Regulation → approved codes → standards → company procedures. Cover PCBU and duties at a beginner level, and why consultants must know where a requirement lives. Use plain consulting examples, not theory dumps.`,
    launchpadLessonId: "w1-mon",
  },
  {
    date: "2026-07-21",
    week: 1,
    dayLabel: "Week 1 — Tuesday",
    title: "Duty holders, consultation and escalation",
    sources: [
      "Work Health and Safety Act 2011 (Queensland)",
      "Work health and safety consultation, cooperation and coordination Code of Practice 2021",
    ],
    focus: `Explain PCBU, officers, workers, consultation, cooperation and coordination. Include when a graduate should escalate. Use fictional site examples. Make it practical for first-week fieldwork.`,
    launchpadLessonId: "w1-tue",
  },
  {
    date: "2026-07-22",
    week: 1,
    dayLabel: "Week 1 — Wednesday",
    title: "Risk management and hierarchy of controls",
    sources: ["How to manage work health and safety risks Code of Practice 2021"],
    focus: `Teach hazard versus risk, the risk process, and the hierarchy of controls with HAZMAT and hygiene examples. Show bad versus good recommendations. Stress that PPE is last, not first.`,
    launchpadLessonId: "w1-wed",
  },
  {
    date: "2026-07-23",
    week: 1,
    dayLabel: "Week 1 — Thursday",
    title: "Hazardous chemicals: GHS, labels, SDS, registers",
    sources: [
      "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
      "Labelling of workplace hazardous chemicals Code of Practice",
      "Preparation of safety data sheets for hazardous chemicals — Model Code of Practice",
    ],
    focus: `Beginner tour of GHS, labels, SDS navigation, and hazardous chemical registers. What to look for in a messy register. What an SDS cannot replace. Keep it practical for supervised consulting.`,
    launchpadLessonId: "w1-thu",
  },
  {
    date: "2026-07-24",
    week: 1,
    dayLabel: "Week 1 — Friday",
    title: "Toxicology and exposure routes for graduates",
    sources: [
      "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
      "Study primer: Exposure criteria, WES/WEL and monitoring basics",
    ],
    focus: `Explain exposure routes, acute versus chronic effects, dose ≈ concentration × time, and why task observation matters as much as numbers. Keep it graduate-consultant practical.`,
    launchpadLessonId: "w1-fri",
  },
  {
    date: "2026-07-25",
    week: 1,
    dayLabel: "Week 1 — Saturday",
    title: "Workshop: chemical register review",
    sources: [
      "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
      "Labelling of workplace hazardous chemicals Code of Practice",
      "Preparation of safety data sheets for hazardous chemicals — Model Code of Practice",
    ],
    focus: `Walk through a fictional chemical-register review end to end: missing SDSs, ghost entries, labelling gaps, storage/compatibility concerns, and how to write findings with limitations. Include common consultant mistakes.`,
    launchpadLessonId: "w1-sat",
  },
  {
    date: "2026-07-26",
    week: 1,
    dayLabel: "Week 1 — Sunday",
    title: "Week 1 closed-book consolidation",
    sources: [
      "Work Health and Safety Act 2011 (Queensland)",
      "Work Health and Safety Regulation 2011 (Queensland)",
      "How to manage work health and safety risks Code of Practice 2021",
      "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
    ],
    focus: `Consolidate Week 1: legal ladder, duty holders, risk/hierarchy, hazchem registers. Use spaced recall, analogies, and a longer verbal quiz. Flag weak areas a graduate should revise on Monday.`,
    launchpadLessonId: "w1-sun",
  },
  {
    date: "2026-07-27",
    week: 2,
    dayLabel: "Week 2 — Monday",
    title: "Asbestos fundamentals",
    sources: ["How to manage and control asbestos in the workplace Code of Practice 2021"],
    focus: `Teach ACM, friable versus non-friable, presumed ACM, and common products/locations. Emphasise visual recognition is suspicion only, not confirmation. Queensland consulting context.`,
    launchpadLessonId: "w2-mon",
  },
  {
    date: "2026-07-28",
    week: 2,
    dayLabel: "Week 2 — Tuesday",
    title: "Asbestos registers, AMP and survey types",
    sources: ["How to manage and control asbestos in the workplace Code of Practice 2021"],
    focus: `Explain asbestos registers versus management plans, management surveys versus refurbishment/demolition surveys, and how to spot an incomplete register before works.`,
    launchpadLessonId: "w2-tue",
  },
  {
    date: "2026-07-29",
    week: 2,
    dayLabel: "Week 2 — Wednesday",
    title: "Sampling, CoC, roles and clearances",
    sources: [
      "How to safely remove asbestos Code of Practice 2021",
      "How to manage and control asbestos in the workplace Code of Practice 2021",
    ],
    focus: `Cover sampling limits, chain of custody, Class A versus non-friable licensing concepts, air monitoring and clearance inspections. Stress never clearing under schedule pressure.`,
    launchpadLessonId: "w2-wed",
  },
  {
    date: "2026-07-30",
    week: 2,
    dayLabel: "Week 2 — Thursday",
    title: "Other hazardous building materials",
    sources: [
      "How to manage work health and safety risks Code of Practice 2021",
      "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
    ],
    focus: `Foundational recognition of lead paint, PCBs, SMF, ODS, mould/moisture — where they occur, why they matter, when to sample or escalate. Not visual diagnosis.`,
    launchpadLessonId: "w2-thu",
  },
  {
    date: "2026-07-31",
    week: 2,
    dayLabel: "Week 2 — Friday",
    title: "Respirable crystalline silica",
    sources: [
      "Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022",
    ],
    focus: `Explain respirable crystalline silica, high-risk tasks, hierarchy controls (water, LEV, isolation, RPE), and when monitoring is used. Do not invent numeric limits; teach how to look them up in official lists.`,
    launchpadLessonId: "w2-fri",
  },
  {
    date: "2026-08-01",
    week: 2,
    dayLabel: "Week 2 — Saturday",
    title: "Workshop: pre-refurbishment HAZMAT plan",
    sources: [
      "How to manage and control asbestos in the workplace Code of Practice 2021",
      "How to safely remove asbestos Code of Practice 2021",
      "Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022",
      "How to manage work health and safety risks Code of Practice 2021",
    ],
    focus: `Walk through a fictional pre-refurbishment HAZMAT job from scope → plan → inspect → sample → interpret → recommend → report. Point out common graduate mistakes and escalation points.`,
    launchpadLessonId: "w2-sat",
  },
  {
    date: "2026-08-02",
    week: 2,
    dayLabel: "Week 2 — Sunday",
    title: "Workshop: asbestos register review",
    sources: ["How to manage and control asbestos in the workplace Code of Practice 2021"],
    focus: `Review a fictional incomplete asbestos register: inconsistencies, missing items, survey type mismatch, and recommended next steps. Practise limitation language a graduate can use under supervision.`,
    launchpadLessonId: "w2-sun",
  },
  {
    date: "2026-08-03",
    week: 3,
    dayLabel: "Week 3 — Monday",
    title: "Occupational hygiene ARECC",
    sources: [
      "How to manage work health and safety risks Code of Practice 2021",
      "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
      "Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022",
    ],
    focus: `Teach Anticipate → Recognise → Evaluate → Control → Verify, similar exposure groups, and personal versus static monitoring for a beginner consultant.`,
    launchpadLessonId: "w3-mon",
  },
  {
    date: "2026-08-04",
    week: 3,
    dayLabel: "Week 3 — Tuesday",
    title: "WES, WEL, TWA, STEL and peak",
    sources: [
      "Study primer: Exposure criteria, WES/WEL and monitoring basics",
      "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
      "Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022",
    ],
    focus: `Explain TWA, STEL, peak, and the WES→WEL transition (WES still relevant at an August 2026 start; WEL from 1 December 2026). Emphasise limits are not a safe/dangerous bright line and must be looked up officially.`,
    launchpadLessonId: "w3-tue",
  },
  {
    date: "2026-08-05",
    week: 3,
    dayLabel: "Week 3 — Wednesday",
    title: "Sampling strategy, calibration and QA",
    sources: [
      "Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022",
      "How to safely remove asbestos Code of Practice 2021",
    ],
    focus: `Cover planning a sample, calibration, blanks, duration, chain of custody, and why direct-reading tools are often indicative only. Beginner field-discipline focus.`,
    launchpadLessonId: "w3-wed",
  },
  {
    date: "2026-08-06",
    week: 3,
    dayLabel: "Week 3 — Thursday",
    title: "Controls, RPE and verification",
    sources: [
      "How to manage work health and safety risks Code of Practice 2021",
      "Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022",
    ],
    focus: `How to push clients up the hierarchy, RPE as the last layer, fit/use concepts, and verifying that controls work. Include scripts a graduate can use with a project manager.`,
    launchpadLessonId: "w3-thu",
  },
  {
    date: "2026-08-07",
    week: 3,
    dayLabel: "Week 3 — Friday",
    title: "Health monitoring and professional boundaries",
    sources: ["Managing risks of hazardous chemicals in the workplace Code of Practice 2021"],
    focus: `Air monitoring versus health monitoring, when health monitoring is used, the registered medical practitioner role, and graduate professional boundaries — what not to declare or approve.`,
    launchpadLessonId: "w3-fri",
  },
  {
    date: "2026-08-08",
    week: 3,
    dayLabel: "Week 3 — Saturday",
    title: "Field notes, CoC and report QA",
    sources: [
      "How to manage and control asbestos in the workplace Code of Practice 2021",
      "How to safely remove asbestos Code of Practice 2021",
      "How to manage work health and safety risks Code of Practice 2021",
    ],
    focus: `Teach defensible fieldwork: notes, photos, sample IDs, chain of custody, lab reconciliation, limitations wording, and report QA before senior review.`,
    launchpadLessonId: "w3-sat",
  },
  {
    date: "2026-08-09",
    week: 3,
    dayLabel: "Week 3 — Sunday",
    title: "Full mock project audio walkthrough",
    sources: [
      "Work Health and Safety Act 2011 (Queensland)",
      "Work Health and Safety Regulation 2011 (Queensland)",
      "How to manage and control asbestos in the workplace Code of Practice 2021",
      "How to safely remove asbestos Code of Practice 2021",
      "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
      "Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022",
      "How to manage work health and safety risks Code of Practice 2021",
    ],
    focus: `Simulate a full client job debrief: missing information, inspection plan, sample schedule, chain of custody, lab reconciliation, findings and limitations, WHS framework applied to the job, and five smart questions to ask a supervisor in week one.`,
    launchpadLessonId: "w3-sun",
  },
];

export function buildNotebookPrompt(episode: PodcastEpisode): string {
  return `${NOTEBOOKLM_SETUP.audienceLine}

Episode title: ${episode.title}
Date: ${episode.date} (${episode.dayLabel})

Focus for the hosts:
${episode.focus}

Preferred sources for this episode only:
${episode.sources.map((s) => `- ${s}`).join("\n")}
`;
}

export function getEpisodeForDate(iso: string): PodcastEpisode | undefined {
  return PODCAST_EPISODES.find((e) => e.date === iso);
}

export function nextEpisode(fromIso: string): PodcastEpisode | undefined {
  return PODCAST_EPISODES.find((e) => e.date >= fromIso);
}
