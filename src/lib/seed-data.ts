import type { TopicId } from "./types";
import { applyDeepLessons } from "./lessons/apply-deep";

export interface TopicSeed {
  id: TopicId;
  label: string;
  sortOrder: number;
}

export interface LessonSeed {
  id: string;
  dayDate: string;
  week: 1 | 2 | 3;
  dayLabel: string;
  title: string;
  topicIds: string[];
  objectives: string[];
  explanation: string;
  terminology: { term: string; definition: string }[];
  officialReadings: { title: string; note: string }[];
  consultingRelevance: string;
  workedExample: string;
  scenarioPrompt: string;
  scenarioModel: string;
  commonMistakes: string[];
  summary: string;
  sessionPlan: string;
}

export interface QuizQuestionSeed {
  id: string;
  lessonId: string;
  topicId: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
  sourceHint: string;
}

export interface ScenarioSeed {
  id: string;
  title: string;
  category: string;
  brief: string;
  tasks: string[];
  modelAnswer: string;
  sourceNotes: string;
  fictionalNotice: string;
}

export interface MockProjectSeed {
  id: string;
  title: string;
  brief: string;
  dueDate: string;
  checklist: string[];
}

export const TOPICS: TopicSeed[] = [
  { id: "whs_legal_framework", label: "WHS legal framework", sortOrder: 1 },
  { id: "risk_management", label: "Risk management", sortOrder: 2 },
  { id: "hazardous_chemicals", label: "Hazardous chemicals", sortOrder: 3 },
  { id: "asbestos", label: "Asbestos", sortOrder: 4 },
  { id: "other_hazmat", label: "Other hazardous building materials", sortOrder: 5 },
  { id: "occupational_hygiene", label: "Occupational hygiene", sortOrder: 6 },
  { id: "air_monitoring", label: "Air monitoring", sortOrder: 7 },
  { id: "noise", label: "Noise", sortOrder: 8 },
  { id: "silica", label: "Silica", sortOrder: 9 },
  { id: "health_monitoring", label: "Health monitoring", sortOrder: 10 },
  { id: "fieldwork", label: "Fieldwork", sortOrder: 11 },
  { id: "reporting", label: "Reporting", sortOrder: 12 },
  { id: "consulting_practice", label: "Consulting practice", sortOrder: 13 },
];

const LESSONS_BASE: LessonSeed[] = [
  {
    id: "w1-mon",
    dayDate: "2026-07-20",
    week: 1,
    dayLabel: "Week 1 — Monday",
    title: "Queensland WHS Legal Framework Foundations",
    topicIds: ["whs_legal_framework", "consulting_practice"],
    objectives: [
      "Explain the hierarchy from Act to company procedures",
      "Identify primary WHS duty holders under Queensland law",
      "Describe how approved codes of practice interact with the Regulation",
      "Apply a consultant's role within the legal framework without overstepping scope",
    ],
    explanation: `Queensland workplace health and safety law is built on the Work Health and Safety Act 2011 (Qld), supported by the Work Health and Safety Regulation 2011 (Qld) and approved codes of practice. As a graduate entering HSE consulting, your first task is not to memorise every clause but to understand how these instruments fit together and who they bind. The Act sets broad duties; the Regulation adds specific requirements; approved codes describe how to achieve compliance in particular circumstances; Australian Standards and company procedures sit below that stack as practical implementation tools.

The hierarchy matters in consulting because clients often ask you to "quote the law" when they mean a procedure, or they treat a code as optional guidance when it may be admissible evidence of what is reasonably practicable. In Queensland, Safe Work Australia develops model laws; Queensland adopts and maintains its own Act and Regulation. When you prepare advice, always state the jurisdiction and check currency — transitional provisions and regulator guidance can change how requirements apply on the ground.

For graduate consultants, the WHS framework is the lens through which every inspection, register review, and monitoring recommendation must be viewed. You are not the regulator and you do not enforce the law, but you help duty holders understand obligations, identify gaps, and plan proportionate controls. Document your assumptions, distinguish legal requirements from good practice, and flag where specialist licensed work is required — especially for asbestos removal and certain hazardous chemicals work.`,
    terminology: [
      { term: "PCBU", definition: "Person Conducting a Business or Undertaking — the primary duty holder under the WHS Act who must ensure health and safety so far as is reasonably practicable." },
      { term: "Reasonably practicable", definition: "What could reasonably be done at a particular time to ensure health and safety, weighing likelihood and severity of harm against cost and difficulty of measures." },
      { term: "Approved code of practice", definition: "Practical guidance approved under the WHS Act; admissible in proceedings to help determine whether a duty has been complied with." },
      { term: "Regulator", definition: "In Queensland, Workplace Health and Safety Queensland (WHSQ) administers and enforces the WHS laws." },
    ],
    officialReadings: [
      { title: "Work Health and Safety Act 2011 (Qld)", note: "Primary duties, definitions, and enforcement framework" },
      { title: "Work Health and Safety Regulation 2011 (Qld)", note: "Prescriptive requirements including hazardous chemicals and asbestos provisions" },
      { title: "Safe Work Australia — Model WHS Act and Regulation", note: "Comparative context; Queensland adopts its own versions" },
    ],
    consultingRelevance: "Every client engagement begins with clarifying who the PCBU is, what work is in scope, and which legal instruments apply. Misidentifying the duty holder or jurisdiction undermines every downstream deliverable.",
    workedExample: "A property manager at fictional Riverside Commercial Pty Ltd asks you to 'make the building compliant.' Before site work, you confirm the PCBU (likely the building owner or principal contractor for the project), obtain the engagement letter, and list applicable instruments: WHS Act and Regulation (Qld), relevant approved codes, and the client's asbestos and hazchem procedures.",
    scenarioPrompt: "Fictional client Harborview Offices asks you to start a walk-through tomorrow with no engagement letter and no confirmed PCBU. What do you do first?",
    scenarioModel: "Decline fieldwork until scope is documented. Request the engagement letter naming the client PCBU, site access arrangements, and whether the visit is advisory inspection or part of a regulated process. Explain that WHS advice must be tied to identified duty holders. Offer a brief scoping call to confirm jurisdiction (Queensland), building age, and likely hazmat registers needed.",
    commonMistakes: [
      "Treating company procedures as law without checking upstream requirements",
      "Quoting model WHS Act provisions without confirming Queensland adoption",
      "Starting site work without documented scope and PCBU identification",
      "Presenting guidance notes as legal determinations",
    ],
    summary: "Queensland WHS law flows Act → Regulation → approved codes → standards → procedures. Consultants clarify duty holders, jurisdiction, and scope before giving advice.",
    sessionPlan: "80-minute weekday session: 10 min recap and goals; 25 min hierarchy and duty holders; 20 min reading strategy for Act/Regulation; 15 min worked example; 10 min scenario discussion and quiz block.",
  },
  {
    id: "w1-tue",
    dayDate: "2026-07-21",
    week: 1,
    dayLabel: "Week 1 — Tuesday",
    title: "Duty Holders, Officers and Consultation",
    topicIds: ["whs_legal_framework", "consulting_practice"],
    objectives: [
      "Distinguish PCBU duties from officer due diligence duties",
      "Explain worker and other person duties at a workplace",
      "Outline consultation, representation, and HSR roles",
      "Identify when to escalate issues to the client PCBU vs the regulator",
    ],
    explanation: `The WHS Act distributes duties across PCBUs, officers, workers, and other persons at a workplace. The PCBU must provide and maintain a safe workplace, safe plant and structures, adequate facilities, training, and supervision — so far as is reasonably practicable. Officers of a PCBU must exercise due diligence to ensure the PCBU complies with its duties. This is not delegable to a consultant; your role is to inform and support, not absorb legal liability.

Workers must take reasonable care for their own health and safety and that of others, comply with reasonable instructions, and cooperate with policies and procedures. Other persons at workplaces — including visitors and contractors — must also take reasonable care and comply with reasonable directions. In consulting, you are typically an 'other person' or engaged contractor; you must follow site rules, permit systems, and isolation protocols.

Consultation is a legal requirement, not a courtesy. PCBUs must consult with workers who are likely to be directly affected by WHS matters, including when identifying hazards and deciding on controls. Health and safety representatives (HSRs) have defined powers where elected. When you inspect a Queensland site, ask whether an HSR should be notified, whether consultation records exist for proposed refurbishment, and whether your findings will feed into client consultation processes.`,
    terminology: [
      { term: "Officer", definition: "A person who makes or participates in decisions affecting the whole or a substantial part of the organisation's activities; must exercise due diligence." },
      { term: "Due diligence", definition: "Officer obligation to acquire and keep up-to-date knowledge of WHS matters, understand operations and hazards, and ensure appropriate resources and processes exist." },
      { term: "HSR", definition: "Health and safety representative elected by workers in a work group, with consultation and inspection rights under the Act." },
      { term: "Upstream duty", definition: "Duties of designers, manufacturers, importers, and suppliers to ensure plant, substances, and structures are without risks when used as intended." },
    ],
    officialReadings: [
      { title: "Work Health and Safety Act 2011 (Qld)", note: "Part on duties of PCBUs, officers, workers, and other persons" },
      { title: "Safe Work Australia — Interpretive Guideline: The health and safety duty of an officer", note: "Plain-language officer due diligence expectations" },
    ],
    consultingRelevance: "Scoping meetings must identify the PCBU, site contact, and whether HSRs or consultation obligations apply before intrusive inspection or sampling.",
    workedExample: "At fictional Northbank School (PCBU: Northbank P&C Association), refurbishment is planned. You confirm the principal contractor's WHS management plan, ask whether workers and HSRs were consulted on asbestos disturbance risks, and document that your role is hazmat identification — not sign-off of the construction WHS plan.",
    scenarioPrompt: "A site supervisor tells you to skip induction because 'consultants don't count as workers.' How do you respond?",
    scenarioModel: "Politely insist on full site induction and hazard briefing. Explain you are an other person at the workplace with duties to follow reasonable directions and take reasonable care. Request documentation of emergency procedures, asbestos/no-go zones, and permit requirements. Do not proceed without induction aligned with the PCBU's procedures.",
    commonMistakes: [
      "Assuming the consultant is exempt from site rules",
      "Advising workers directly to stop work without involving the PCBU",
      "Confusing client project manager authority with PCBU status",
      "Ignoring HSR notification where consultation is legally required",
    ],
    summary: "Duties are shared: PCBU (primary), officers (due diligence), workers and others (reasonable care). Consultants support compliance but do not replace duty holders.",
    sessionPlan: "80-minute weekday session: 10 min review; 20 min PCBU and officer duties; 15 min workers/others; 20 min consultation and HSR; 15 min scenario and quiz.",
  },
  {
    id: "w1-wed",
    dayDate: "2026-07-22",
    week: 1,
    dayLabel: "Week 1 — Wednesday",
    title: "Risk Management for HSE Consulting",
    topicIds: ["risk_management", "consulting_practice"],
    objectives: [
      "Apply the risk management process to consulting engagements",
      "Use the hierarchy of controls in recommendations",
      "Document risk assessments with clear assumptions and limitations",
      "Align client risk registers with hazmat and hygiene findings",
    ],
    explanation: `Risk management is the practical core of WHS consulting. The standard process — identify hazards, assess risks, control risks, and review controls — appears in the WHS Regulation and approved codes across asbestos, hazardous chemicals, and general workplace management. For graduates, the challenge is not drawing a matrix but making defensible judgements with incomplete information, especially in older Queensland buildings.

The hierarchy of controls ranks elimination first, then substitution, engineering, administrative controls, and finally personal protective equipment. Consultants often see over-reliance on PPE and signage where elimination or isolation would be more appropriate for asbestos or silica. Your reports should recommend controls in hierarchy order and explain why lower-order controls alone may be insufficient.

In consulting practice, risk management includes engagement risk: scope creep, access limitations, unverified registers, and pressure to conclude 'no asbestos' without survey. Document what you inspected, what you could not access, and what further investigation is required. A proportionate risk assessment beats a false sense of certainty.`,
    terminology: [
      { term: "Hierarchy of controls", definition: "Preferred order for risk treatment: elimination, substitution, engineering, administrative, PPE." },
      { term: "Residual risk", definition: "Risk remaining after controls are applied; must be reviewed and communicated." },
      { term: "Reasonably foreseeable", definition: "Hazards and scenarios that a reasonable person would anticipate in the circumstances." },
      { term: "ALARP", definition: "As low as reasonably practicable — risk reduced until further measures are grossly disproportionate to benefit." },
    ],
    officialReadings: [
      { title: "How to Manage Work Health and Safety Risks Code of Practice 2021", note: "General risk management steps and hierarchy of controls" },
      { title: "Work Health and Safety Regulation 2011 (Qld)", note: "Risk management requirements for specific hazards" },
    ],
    consultingRelevance: "Inspection plans, sampling strategies, and report recommendations must show identifiable hazards, assessed exposure pathways, and hierarchy-aligned controls.",
    workedExample: "During a fictional warehouse roof leak assessment, disturbed ceiling material is suspected ACM. You stop work in the area, isolate with barrier tape, recommend licensed assessment, and document immediate administrative controls — not 'continue with P2 masks' as the primary response.",
    scenarioPrompt: "Client wants you to rate all roof spaces 'low risk' without access because lifts are unavailable. What is your approach?",
    scenarioModel: "Document inaccessible areas explicitly. Rate accessed areas based on evidence; mark uninspected zones as 'not assessed — access not provided.' Recommend targeted access when safe means exist or prior survey data is obtained. Refuse to assign low risk by assumption.",
    commonMistakes: [
      "Jumping to PPE before higher-order controls",
      "Conflating likelihood scores with legal compliance",
      "Omitting inaccessible areas from the risk narrative",
      "Using generic boilerplate without site-specific hazards",
    ],
    summary: "Identify, assess, control, review — using the hierarchy of controls and honest documentation of gaps and residual risk.",
    sessionPlan: "80-minute weekday session: 10 min recap; 25 min risk process and hierarchy; 20 min worked example; 15 min report language; 10 min quiz.",
  },
  {
    id: "w1-thu",
    dayDate: "2026-07-23",
    week: 1,
    dayLabel: "Week 1 — Thursday",
    title: "Hazardous Chemicals: GHS, SDS and Registers",
    topicIds: ["hazardous_chemicals", "risk_management"],
    objectives: [
      "Explain GHS classification and label elements relevant to site audits",
      "Use SDS structure to extract exposure and storage requirements",
      "Review hazardous chemicals registers for completeness and currency",
      "Link register gaps to risk assessment and procurement controls",
    ],
    explanation: `Hazardous chemicals in Queensland workplaces are managed under the WHS Regulation with GHS-based classification and labelling. The Globally Harmonized System (GHS) provides hazard classes and pictograms that you will see on containers, SDS, and registers. As a consultant reviewing a site, you are checking that chemicals are identified, risks assessed, controls implemented, and information available to workers — not performing laboratory classification.

The Safety Data Sheet (SDS) is your primary reference for each product: identity, hazards, first aid, PPE, storage incompatibility, spill response, and disposal. Registers must list hazardous chemicals stored above manifest thresholds where applicable, and in practice most PCBUs maintain registers of all hazardous products used on site. Compare register entries to physical storage, check SDS currency (typically review every five years or when formulation changes), and note decanted liquids without labels.

GHS and SDS review connects directly to risk management: a missing SDS or unlabelled container is both a compliance gap and an uncontrolled exposure pathway. For Queensland industrial and commercial sites, also consider manifest quantities, placarding, and emergency planning where thresholds apply.`,
    terminology: [
      { term: "GHS", definition: "Globally Harmonized System of Classification and Labelling of Chemicals, adopted in Australian WHS regulations." },
      { term: "SDS", definition: "Safety Data Sheet — manufacturer/importer document with hazard and control information for a hazardous chemical." },
      { term: "Hazardous chemicals register", definition: "Workplace record of hazardous chemicals stored or used, with product identifiers and SDS access." },
      { term: "Manifest quantity", definition: "Threshold quantity of certain hazardous chemicals triggering additional WHS Regulation obligations." },
    ],
    officialReadings: [
      { title: "Managing risks of hazardous chemicals in the workplace Code of Practice 2021", note: "Registers, SDS, labelling, and risk management for hazardous chemicals" },
      { title: "Work Health and Safety Regulation 2011 (Qld)", note: "Hazardous chemicals provisions including manifests and placards" },
    ],
    consultingRelevance: "Hazchem register reviews are a staple consulting deliverable; GHS/SDS literacy is essential for credible findings and actionable recommendations.",
    workedExample: "At fictional Greenleaf Maintenance Co., the register lists 'degreaser' with no SDS link. Site walk shows unlabelled 20 L drums in a bund. You record product photos, request SDS from the supplier, flag labelling and register gaps, and recommend segregation review against SDS storage classes.",
    scenarioPrompt: "Register shows 3 products; you find 12 containers in the store. Owner says 'the rest are just cleaners.' Next step?",
    scenarioModel: "Inventory all containers, photograph labels, identify each product or send unknowns for identification. Update register scope in the report. Do not assume non-hazardous status without SDS evidence. Recommend interim labelling and segregation until SDS are obtained.",
    commonMistakes: [
      "Treating household cleaners as automatically non-hazardous",
      "Ignoring SDS revision dates",
      "Listing products without location and approximate quantity",
      "Missing manifest/placard triggers at larger sites",
    ],
    summary: "GHS labels and SDS underpin hazchem registers. Consultants reconcile physical storage to register entries and flag missing information.",
    sessionPlan: "80-minute weekday session: 15 min GHS pictograms; 20 min SDS walkthrough; 25 min register audit method; 10 min example; 10 min quiz.",
  },
  {
    id: "w1-fri",
    dayDate: "2026-07-24",
    week: 1,
    dayLabel: "Week 1 — Friday",
    title: "Toxicology Essentials for HSE Graduates",
    topicIds: ["hazardous_chemicals", "occupational_hygiene", "health_monitoring"],
    objectives: [
      "Differentiate hazard, exposure, dose, and response",
      "Explain routes of exposure and common toxicological endpoints",
      "Relate SDS health hazard information to monitoring options",
      "Avoid confusing air monitoring with health monitoring",
    ],
    explanation: `Toxicology explains how substances cause harm — essential background for interpreting SDS health sections, exposure assessments, and monitoring recommendations. Hazard is the intrinsic property of a substance; exposure is contact over time; dose is the amount absorbed; response is the health effect. A highly hazardous substance may present low risk if exposure is negligible, while a moderate hazard with high exposure can cause serious harm — silica and asbestos illustrate this vividly.

Routes of exposure include inhalation, skin absorption, ingestion, and injection. Occupational hygiene focuses on quantifying inhalation and dermal exposure where relevant. Acute effects occur quickly (irritation, narcosis); chronic effects develop over time (silicosis, mesothelioma, lead neuropathy). Sensitisers and carcinogens require special attention in risk communication even at low exposures.

Graduates must not blur air monitoring (environmental measurement) with health monitoring (clinical assessment of workers). SDS Section 8 suggests exposure controls and sometimes biological exposure indices; Section 11 describes toxicological data. Use this to recommend controls and to flag when specialist occupational hygienist or medical practitioner input is needed — not to diagnose illness.`,
    terminology: [
      { term: "LD50", definition: "Dose lethal to 50% of test population — indicator of acute toxicity; not used alone for workplace risk decisions." },
      { term: "TWA", definition: "Time-weighted average exposure averaged over a standard shift; used with workplace exposure standards." },
      { term: "Carcinogen", definition: "Substance capable of causing cancer; triggers stricter control and disclosure expectations." },
      { term: "Health monitoring", definition: "Medical monitoring of workers to detect harm from work-related exposure — distinct from air monitoring." },
    ],
    officialReadings: [
      { title: "Managing risks of hazardous chemicals in the workplace Code of Practice 2021", note: "Health monitoring triggers for hazardous chemicals" },
      { title: "Safe Work Australia — Workplace exposure standards for airborne contaminants", note: "Reference values for airborne contaminants" },
    ],
    consultingRelevance: "Credible reports connect hazard information to exposure pathways and appropriate control or monitoring types without overclaiming medical expertise.",
    workedExample: "SDS for fictional SolvClean X notes respiratory sensitisation. You recommend improved ventilation and glove selection, document that health monitoring may be required if exposure continues after controls, and specify that any biological monitoring must be arranged by the PCBU with a registered medical practitioner.",
    scenarioPrompt: "Client asks you to 'do health monitoring' during air sampling for solvents. Clarify your response.",
    scenarioModel: "Explain air monitoring measures airborne concentrations; health monitoring is a medical program under WHS laws requiring a registered medical practitioner and worker consent. You may recommend the PCBU obtain health monitoring if exposure risk remains; you do not perform clinical tests or interpret medical results.",
    commonMistakes: [
      "Using LD50 alone to dismiss chronic inhalation risks",
      "Recommending health monitoring without RP involvement",
      "Confusing STEL exceedances with biological exposure indices",
      "Diagnosing occupational disease from a single air sample",
    ],
    summary: "Hazard, exposure, dose, and response frame consulting advice. Air monitoring and health monitoring serve different purposes and different professionals.",
    sessionPlan: "80-minute weekday session: 15 min concepts; 20 min routes and endpoints; 20 min SDS Sections 8 and 11; 15 min boundaries; 10 min quiz.",
  },
  {
    id: "w1-sat",
    dayDate: "2026-07-25",
    week: 1,
    dayLabel: "Week 1 — Saturday",
    title: "Chemical Register Review Workshop",
    topicIds: ["hazardous_chemicals", "fieldwork", "reporting"],
    objectives: [
      "Conduct a structured hazchem register review end-to-end",
      "Reconcile register entries with physical storage locations",
      "Draft findings with photos, gaps, and priority recommendations",
      "Prepare handover notes for client procurement and SDS management",
    ],
    explanation: `This workshop consolidates Week 1 hazardous chemicals learning through a simulated register review for fictional Apex Fabrication Pty Ltd, a Queensland metal workshop. You will work through document review, site inventory logic, SDS currency checks, and report drafting. The emphasis is methodical reconciliation: every line on the register should trace to a container, location, and current SDS — or be flagged as obsolete.

Register reviews often reveal ghost entries (products no longer on site), shadow chemicals (on site but not registered), and SDS gaps (register entry without accessible SDS). Priority ranking should consider toxicity, quantity, storage inadequacy, and frequency of use. Link findings to the hierarchy of controls: bunding failures are engineering/administrative; missing labels are immediate administrative fixes.

Weekend sessions allow longer practical blocks. Capture photographic evidence with site permission, respect confidential formulations, and avoid photographing people without consent. Your deliverable is a draft findings table suitable for supervisor review before client issue.`,
    terminology: [
      { term: "Shadow chemical", definition: "Hazardous product present on site but absent from the register — common audit finding." },
      { term: "SDS currency", definition: "SDS must be current; typically updated within five years or when product changes." },
      { term: "Decanted container", definition: "Smaller vessel filled from bulk supply — must be labelled per WHS requirements." },
    ],
    officialReadings: [
      { title: "Managing risks of hazardous chemicals in the workplace Code of Practice 2021", note: "Register and SDS obligations" },
    ],
    consultingRelevance: "Register reviews are billable, repeatable work — mastering the checklist builds client trust and reduces rework.",
    workedExample: "Apex register lists Welding Gas Mixture A with 2020 SDS. You verify cylinder tags match, request updated SDS from supplier, note adequate segregation from oxidisers, and mark entry 'pending SDS update' rather than 'compliant.'",
    scenarioPrompt: "During Apex review you find a 200 L drum labelled only 'SOLVENT.' No SDS. Document and recommend.",
    scenarioModel: "Photograph drum and any placards; isolate from ignition sources if indoors; tag 'identity unknown — do not use until SDS obtained'; recommend PCBU contact supplier or lab identification; add critical finding to report with interim storage controls.",
    commonMistakes: [
      "Closing the review without physical walk-through",
      "Deleting register lines without client confirmation",
      "Issuing 'compliant' when SDS are missing",
      "Ignoring small decanted containers in workshops",
    ],
    summary: "Register review = document check + physical reconciliation + prioritised findings with SDS and labelling actions.",
    sessionPlan: "Weekend workshop (2–3 hours): 30 min method briefing; 60 min simulated register and store audit; 45 min draft findings; 15 min peer review and quiz subset.",
  },
  {
    id: "w1-sun",
    dayDate: "2026-07-26",
    week: 1,
    dayLabel: "Week 1 — Sunday",
    title: "Week 1 Closed-Book Review",
    topicIds: ["whs_legal_framework", "risk_management", "hazardous_chemicals", "consulting_practice"],
    objectives: [
      "Consolidate WHS framework, duty holders, and risk management",
      "Recall GHS, SDS, and register review essentials",
      "Identify knowledge gaps before Week 2 asbestos content",
      "Practice closed-book recall under timed conditions",
    ],
    explanation: `Week 1 review day tests integrated understanding without reference materials. Queensland WHS law, duty holder roles, the risk management process, and hazardous chemicals management form the foundation for asbestos and occupational hygiene topics in Weeks 2 and 3. Closed-book practice strengthens recall for client meetings and fieldwork where you cannot pause to look up every term.

Focus on structure: Can you explain the legislative hierarchy? Can you describe PCBU vs officer duties? Can you walk through a register review sequence? Can you distinguish air monitoring from health monitoring? Mark any weak areas for flashcard review Monday evening.

This session uses a larger question bank and one integrated scenario. All business names and sites remain fictional. Verify any legal detail against current Queensland instruments before relying on it in paid client work.`,
    terminology: [
      { term: "Closed-book recall", definition: "Study technique testing memory without notes — simulates field questions from supervisors and clients." },
      { term: "Integrated scenario", definition: "Exercise combining multiple topics — mirrors real consulting tasks." },
    ],
    officialReadings: [
      { title: "Work Health and Safety Act 2011 (Qld)", note: "Review primary duties and definitions" },
      { title: "Managing risks of hazardous chemicals in the workplace Code of Practice 2021", note: "Review register and SDS sections" },
    ],
    consultingRelevance: "Supervisors expect graduates to explain framework basics confidently before attending supervised site visits.",
    workedExample: "Timed drill: in 5 minutes, list the hierarchy of controls with one hazchem example each. Compare to model answer and note gaps.",
    scenarioPrompt: "Integrated review: fictional client asks for same-day hazchem clearance certificate. Outline your response using Week 1 topics only.",
    scenarioModel: "Explain you cannot issue a statutory 'clearance certificate' unless licensed/authorised for that specific process. Offer register review scope, site inspection, SDS reconciliation, and written findings with limitations. Confirm PCBU and scope in writing. Apply hierarchy of controls in recommendations.",
    commonMistakes: [
      "Cramming codes without understanding hierarchy",
      "Neglecting consultation and duty holder basics",
      "Assuming Week 1 content is 'easy' and skipping review",
    ],
    summary: "Week 1 foundation: QLD WHS framework, duties, risk management, hazchem registers — consolidate before asbestos week.",
    sessionPlan: "Weekend review (2 hours): 20 min terminology drill; 40 min closed-book quiz (~20 questions); 30 min integrated scenario; 30 min error review and Week 2 preview.",
  },
  {
    id: "w2-mon",
    dayDate: "2026-07-27",
    week: 2,
    dayLabel: "Week 2 — Monday",
    title: "Asbestos Fundamentals in Queensland Buildings",
    topicIds: ["asbestos", "whs_legal_framework"],
    objectives: [
      "Describe asbestos types, common product forms, and health effects",
      "Explain friable vs non-friable asbestos and disturbance concepts",
      "Outline licensing triggers for removal work in Queensland",
      "Apply consultant boundaries — identification vs licensed removal",
    ],
    explanation: `Asbestos was widely used in Australian buildings until the late 1980s and in some products into the 2000s. In Queensland consulting you will encounter asbestos cement sheeting, vinyl floor tiles, mastic, insulation, and sprayed coatings. Chrysotile, amosite, and crocidolite have different fibre characteristics but all require controlled management when disturbed. Health effects include asbestosis, lung cancer, and mesothelioma with latency measured in decades — exposure prevention is paramount.

Materials are classified by condition and friability. Friable asbestos can be crumbled by hand pressure when dry and releases fibres more readily; non-friable asbestos is bonded in a matrix such as cement. Disturbance during demolition, refurbishment, or poor maintenance converts managed in-situ material into an exposure risk. The WHS Regulation and How to Manage and Control Asbestos in the Workplace Code of Practice set expectations for identification, registers, and control.

Queensland licensing is critical knowledge: friable asbestos removal requires a Class A licence; non-friable removal exceeding 10 m² requires a licensed asbestos removal business. Consultants identify, assess, and recommend — they do not remove unless separately licensed. Approved asbestos codes were varied in January 2023; always confirm you are using current Queensland versions.`,
    terminology: [
      { term: "ACM", definition: "Asbestos-containing material — any material containing asbestos." },
      { term: "Friable asbestos", definition: "Material that, when dry, can be crumbled or reduced to powder by hand pressure." },
      { term: "Class A licence", definition: "Queensland licence required for friable asbestos removal work." },
      { term: "Disturbance", definition: "Any activity that generates or releases asbestos fibres, including drilling, cutting, or breakage." },
    ],
    officialReadings: [
      { title: "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)", note: "Management, identification, and control of in-situ asbestos" },
      { title: "Work Health and Safety Regulation 2011 (Qld)", note: "Asbestos licensing and removal requirements" },
    ],
    consultingRelevance: "Misclassifying friability or licensing triggers exposes clients to illegal removal and exposes your firm to scope and liability errors.",
    workedExample: "At fictional Lakeside Units built 1972, you note corrugated asbestos cement roofing in good condition but brittle. You classify as non-friable ACM, recommend managed in-situ with maintenance protocol, and flag that any removal >10 m² needs licensed removers — not maintenance staff with angle grinders.",
    scenarioPrompt: "Client plans DIY removal of 15 m² of asbestos cement eaves. What do you advise?",
    scenarioModel: "Advise that non-friable removal over 10 m² requires a licensed asbestos removal business in Queensland. DIY is not compliant at this area. Recommend engaging licensed removers, updating the asbestos register, and air monitoring if required by the removal plan.",
    commonMistakes: [
      "Calling all asbestos cement 'safe' regardless of disturbance",
      "Ignoring 10 m² non-friable licensing threshold",
      "Assuming pre-1990 means asbestos present in all materials",
      "Performing intrusive sampling without training and client authorisation",
    ],
    summary: "Know ACM forms, friability, health risks, and QLD licensing: Class A for friable; licensed business for >10 m² non-friable removal.",
    sessionPlan: "80-minute weekday session: 15 min asbestos types and health; 25 min friable/non-friable and licensing; 20 min case photos; 10 min quiz; 10 min scenario.",
  },
  {
    id: "w2-tue",
    dayDate: "2026-07-28",
    week: 2,
    dayLabel: "Week 2 — Tuesday",
    title: "Asbestos Registers, AMP and Surveys",
    topicIds: ["asbestos", "reporting", "consulting_practice"],
    objectives: [
      "Explain asbestos register and Asbestos Management Plan (AMP) requirements",
      "Differentiate management surveys from pre-demolition/refurbishment surveys",
      "Review register entries for location, condition, and risk ratings",
      "Identify when re-survey is needed after building changes",
    ],
    explanation: `PCBUs with management or control of workplaces must maintain an asbestos register and, where asbestos is identified, an Asbestos Management Plan. The register records identified or assumed ACM locations, material type, condition, and actions. The AMP describes how asbestos risks will be managed, including roles, inspection frequency, disturbance procedures, and training. Registers must be kept up to date — especially before refurbishment or demolition.

Survey types serve different purposes. A management survey supports ongoing occupancy and minor works; it is not always sufficient before intrusive refurbishment. Pre-demolition or pre-refurbishment surveys are more intrusive and aim to locate all ACM that could be disturbed by the proposed work scope. Consultants must match survey recommendation to client project intent — a register from 2015 may be inadequate for a 2026 fit-out if areas were not accessed.

When reviewing registers, check: Are locations specific (room/floor/elevation)? Are photos or diagrams included? Is condition rated and dated? Are 'presumed asbestos' items flagged for testing? Is the AMP referenced and current? Gaps trigger recommendations for targeted survey by licensed assessors, not guesswork.`,
    terminology: [
      { term: "Asbestos register", definition: "Document listing asbestos or ACM identified at a workplace, with location and condition information." },
      { term: "AMP", definition: "Asbestos Management Plan — documents procedures for managing asbestos risks at the workplace." },
      { term: "Presumed ACM", definition: "Material treated as asbestos until proven otherwise, based on product type and building era." },
      { term: "Pre-refurbishment survey", definition: "Intrusive survey before refurbishment to identify ACM that may be disturbed by the work." },
    ],
    officialReadings: [
      { title: "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)", note: "Registers, AMPs, and survey expectations" },
      { title: "How to Safely Remove Asbestos Code of Practice 2021 (varied 2023)", note: "Context for removal planning linked to register accuracy" },
    ],
    consultingRelevance: "Register reviews are high-volume consulting work; accuracy prevents illegal disturbance and supports defensible client decisions.",
    workedExample: "Fictional Metro Community Hall register lists 'ceiling tiles — assumed ACM' in Main Hall only. Planned kitchen extension affects adjoining store room not surveyed. You recommend pre-refurbishment survey including store room ceiling and penetrations before contractor mobilisation.",
    scenarioPrompt: "Register last updated 2018; new roof leak damaged ceiling linings. Is the register sufficient?",
    scenarioModel: "No — condition change and potential new damage require register update and reassessment. Recommend licensed inspection of affected areas, isolate damaged zones, update register entries and AMP actions, and consult workers/contractors before repair works.",
    commonMistakes: [
      "Treating management survey as sufficient for all refurbishment",
      "Vague locations like 'throughout building'",
      "Omitting presumed ACM pending verification",
      "Failing to link register findings to AMP actions",
    ],
    summary: "Registers and AMPs must be current, specific, and matched to project scope — upgrade survey level when refurbishment intrudes new areas.",
    sessionPlan: "80-minute weekday session: 20 min register/AMP requirements; 25 min survey types; 20 min register review exercise; 15 min quiz.",
  },
  {
    id: "w2-wed",
    dayDate: "2026-07-29",
    week: 2,
    dayLabel: "Week 2 — Wednesday",
    title: "Sampling, Chain of Custody and Laboratory Roles",
    topicIds: ["asbestos", "fieldwork", "air_monitoring"],
    objectives: [
      "Describe bulk sampling rationale and minimising disturbance",
      "Complete chain of custody (CoC) documentation accurately",
      "Explain NATA lab analysis and result interpretation basics",
      "Clarify roles: consultant, sampler, lab, licensed assessor",
    ],
    explanation: `Bulk sampling confirms whether suspected materials contain asbestos. Sampling must be justified, client-authorised, and performed to minimise fibre release — typically small samples from representative locations with wetting or control techniques per approved guidance. Not every consulting graduate performs sampling on day one; many firms use licensed asbestos assessors. Know the process anyway to plan jobs, review CoC forms, and reconcile lab reports.

Chain of custody documents who collected each sample, when, where, and how it was transported to the laboratory. Breaks in custody undermine legal and technical defensibility. NATA-accredited laboratories analyse bulk samples (often PLM with supplementary techniques as required). Results report asbestos presence, type, and sometimes percentage — interpret against location notes on the CoC and inspection photos.

Roles must stay clear: you may plan sampling locations; licensed personnel may collect; the lab analyses; the PCBU acts on findings. Air monitoring around sampling may be required depending on scope and client procedure. Never backfill sample results onto registers before lab confirmation.`,
    terminology: [
      { term: "Chain of custody (CoC)", definition: "Documented trail tracking sample possession from collection through laboratory analysis." },
      { term: "Bulk sample", definition: "Physical specimen of building material submitted for asbestos identification." },
      { term: "NATA accreditation", definition: "National Association of Testing Authorities accreditation — quality mark for labs." },
      { term: "PLM", definition: "Polarised light microscopy — common technique for bulk asbestos identification." },
    ],
    officialReadings: [
      { title: "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)", note: "Identification and sampling considerations" },
      { title: "AS 4964 Method for the qualitative identification of asbestos in bulk samples", note: "Standard method referenced for bulk analysis" },
    ],
    consultingRelevance: "Sampling plans and CoC accuracy prevent rework, wrong register entries, and client disputes over 'who said it was asbestos.'",
    workedExample: "For fictional Portside Warehouse, you schedule three bulk samples: vinyl floor adhesive (presumed), ceiling texture (damaged), and external fibre cement (control). CoC lists Room IDs matching floor plan, collector name, date/time, and lab batch. Report draft holds conclusions until results return.",
    scenarioPrompt: "Lab reports 'no asbestos detected' but sample was taken from wrong room per your notes. Action?",
    scenarioModel: "Do not update register as negative. Investigate CoC and field notes mismatch; inform supervisor and client; recommend re-sample from correct location with corrected labelling; document error and corrective action in file notes.",
    commonMistakes: [
      "Large destructive samples without client approval",
      "CoC location IDs not matching site plan",
      "Updating register before lab results verified",
      "Confusing analyst certificate with clearance certificate",
    ],
    summary: "Justified bulk sampling, intact CoC, NATA lab analysis, and role clarity — results drive register updates only when traceable.",
    sessionPlan: "80-minute weekday session: 15 min sampling ethics; 25 min CoC walkthrough; 20 min lab results exercise; 10 min roles; 10 min quiz.",
  },
  {
    id: "w2-thu",
    dayDate: "2026-07-30",
    week: 2,
    dayLabel: "Week 2 — Thursday",
    title: "Lead, PCB, SMF and ODS — Other Hazmat",
    topicIds: ["other_hazmat", "risk_management", "reporting"],
    objectives: [
      "Identify common lead-containing materials in older Queensland buildings",
      "Outline PCB-containing equipment and SMF/ODS considerations",
      "Integrate other hazmat into inspection plans and registers",
      "Recommend proportionate investigation without alarmism",
    ],
    explanation: `Not all hazardous building materials are asbestos. Lead-based paint is common in pre-1970s buildings and in industrial coatings; disturbance during sanding or heat stripping creates inhalation and ingestion risks, especially for children in residential conversions. Polychlorinated biphenyls (PCBs) appear in older electrical capacitors, switchgear, and some fluorescent light ballasts. Synthetic mineral fibres (SMF) include glasswool and rockwool — generally less hazardous than asbestos but still require controlled handling in some client procedures. Ozone-depleting substances (ODS) may remain in older refrigeration equipment.

Consulting approach parallels asbestos: identify likely materials by era and product type, check existing registers and prior reports, recommend targeted testing when disturbance is planned, and apply hierarchy of controls. Do not conflate SMF with asbestos in client communication — terminology precision matters. PCB waste and ODS handling trigger environmental and WHS obligations beyond a standard walk-through.

Other hazmat findings belong in structured reports with photos, location, recommended next steps, and clear fictional/client disclaimers. Escalate specialist environmental consultants when PCB oil volumes or ODS recovery require licensed handlers.`,
    terminology: [
      { term: "Lead-based paint (LBP)", definition: "Paint with lead content above trace levels — hazard when disturbed or deteriorating." },
      { term: "PCB", definition: "Polychlorinated biphenyl — persistent organic pollutant formerly used in electrical equipment." },
      { term: "SMF", definition: "Synthetic mineral fibre insulation products — not asbestos but may irritate skin and airways." },
      { term: "ODS", definition: "Ozone-depleting substances — regulated refrigerants requiring specialist recovery." },
    ],
    officialReadings: [
      { title: "How to Manage Work Health and Safety Risks Code of Practice 2021", note: "General risk management for non-asbestos hazards" },
      { title: "Managing risks of hazardous chemicals in the workplace Code of Practice 2021", note: "Chemical aspects where PCBs/ODS intersect WHS" },
    ],
    consultingRelevance: "Pre-refurbishment inspections that ignore lead and PCB gaps expose clients to surprise costs and regulatory issues mid-project.",
    workedExample: "Fictional Heritage Arcade (1920s) shows flaking paint on timber balustrades. You note probable LBP, recommend lead paint management plan before sanding, and suggest wipe/testing if disturbance unavoidable. Separate from asbestos ceiling works in scope.",
    scenarioPrompt: "Switchroom contains old capacitors marked 'askarel.' Client never heard of PCBs. Your note?",
    scenarioModel: "Flag as potential PCB-containing equipment; recommend electrical contractor with PCB handling capability assess before works; advise PCBU not to drill or open units; reference WHS and environmental obligations for PCB waste — do not test or drain yourself.",
    commonMistakes: [
      "Reporting all insulation as asbestos",
      "Recommending dry sanding old paint without lead consideration",
      "Ignoring plant room equipment in hazmat scope",
      "Using unverified historical lead percentages as facts",
    ],
    summary: "Lead, PCB, SMF, and ODS belong in holistic hazmat planning — era, location, and disturbance intent drive proportionate recommendations.",
    sessionPlan: "80-minute weekday session: 20 min lead paint; 15 min PCB/ODS; 15 min SMF; 20 min integrated inspection table; 10 min quiz.",
  },
  {
    id: "w2-fri",
    dayDate: "2026-07-31",
    week: 2,
    dayLabel: "Week 2 — Friday",
    title: "Crystalline Silica Exposure and the Silica Code",
    topicIds: ["silica", "occupational_hygiene", "risk_management"],
    objectives: [
      "Explain respirable crystalline silica health effects and high-risk tasks",
      "Apply the Managing respirable crystalline silica dust code (commenced 1 May 2023)",
      "Differentiate silica risk on construction sites vs building inspections",
      "Recommend controls aligned with hierarchy — water, extraction, RPE",
    ],
    explanation: `Respirable crystalline silica (RCS) from engineered stone benchtops, concrete cutting, brick grinding, and some demolition tasks causes silicosis and other serious lung disease. Queensland adopts the national Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry code and broader silica guidance under the WHS framework. The silica code commenced 1 May 2023 — consultants must reference current Queensland approved codes, not outdated summaries.

Graduate building inspectors may not cut stone daily, but refurbishment projects you assess often trigger silica exposure for contractors. Your reports should flag silica-generating activities (jackhammering concrete, cutting tiles, chasing brick) and require contractor SWMS, wet methods, LEV, and RPE where warranted. Air monitoring may be needed to verify control effectiveness — especially where engineered stone may be present.

Silica assessment connects to Week 3 occupational hygiene: workplace exposure standards for quartz apply in August 2026 as WES values; WEL values commence 1 December 2026 under transitional arrangements. When recommending monitoring, state which standard applies to the assessment date and note upcoming changes without presenting future limits as current compliance.`,
    terminology: [
      { term: "RCS", definition: "Respirable crystalline silica — fine particles reaching deep lung tissue." },
      { term: "Engineered stone", definition: "Composite stone product with high crystalline silica content — high-risk when dry-cut." },
      { term: "Silica code (2023)", definition: "Approved code for managing respirable crystalline silica risks — commenced 1 May 2023." },
      { term: "WES/WEL", definition: "Workplace exposure standards — WES applies at Aug 2026 curriculum start; WEL from 1 Dec 2026." },
    ],
    officialReadings: [
      { title: "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice", note: "Engineered stone controls — commenced 1 May 2023" },
      { title: "Safe Work Australia — Workplace exposure standards for airborne contaminants", note: "Silica exposure values and transition to WEL" },
    ],
    consultingRelevance: "Pre-refurbishment reports that omit silica-generating tasks leave clients exposed to silicosis liability and regulator scrutiny.",
    workedExample: "Fictional CityFit Gym fit-out includes removal of concrete nib walls. You specify silica risk for jackhammering, require contractor wet cutting and on-tool extraction, and recommend baseline air monitoring if high-energy methods proceed indoors.",
    scenarioPrompt: "Client shows prior 'silica-free' letter from another consultant based on visual inspection only. Accept?",
    scenarioModel: "Do not accept as definitive. Visual inspection cannot prove absence of silica-containing materials or future generating tasks. Review scope of prior letter, identify planned disturbance tasks, and recommend task-based silica risk assessment and controls per current code.",
    commonMistakes: [
      "Assuming silica only applies to benchtop fabricators",
      "Citing pre-2023 guidance as current",
      "Applying WEL limits before 1 December 2026 without noting transition",
      "Recommending RPE alone for dry cutting engineered stone",
    ],
    summary: "Silica code (from 1 May 2023) drives controls for high-risk tasks; consultants flag generating activities and align monitoring to WES at Aug 2026.",
    sessionPlan: "80-minute weekday session: 20 min health and sources; 25 min code requirements; 20 min controls hierarchy; 15 min quiz.",
  },
  {
    id: "w2-sat",
    dayDate: "2026-08-01",
    week: 2,
    dayLabel: "Week 2 — Saturday",
    title: "Hazmat Inspection Planning Workshop",
    topicIds: ["fieldwork", "consulting_practice", "asbestos", "other_hazmat"],
    objectives: [
      "Build a pre-refurbishment inspection plan from a client brief",
      "Sequence document review, access requirements, and sampling",
      "Estimate resources, PPE, and supervisor sign-off points",
      "Draft a one-day field plan with contingencies",
    ],
    explanation: `Today you translate a fictional client brief into a field-ready hazmat inspection plan for Redwood Medical Clinic refurbishment. Planning prevents ad-hoc site wandering and missed plant rooms. Start with scope: building era, works description, areas of intrusion, and existing registers. List documents to request: asbestos register, AMP, prior hazmat reports, SDS for on-site chemicals, floor plans, and contractor programme.

The plan should specify access (keys, lifts, after-hours), personnel (supervisor accompaniment, licensed sampler if needed), equipment (torches, mirrors, camera, PPE tier), and stop conditions (active patients, unisolated electrical). Schedule sampling holds and lab turnaround assumptions. Identify deliverables: updated register recommendations, photo log, CoC batch, draft report outline.

Weekend workshop format: produce a written plan another graduate could execute. Include consultation touchpoints and client communication milestones.`,
    terminology: [
      { term: "Inspection plan", definition: "Structured document defining scope, method, access, PPE, and outputs for a hazmat site visit." },
      { term: "Stop condition", definition: "Predefined reason to pause fieldwork — unsafe access, clinical activity, missing isolation." },
      { term: "Hold point", definition: "Stage requiring supervisor or client approval before proceeding — e.g., before intrusive sampling." },
    ],
    officialReadings: [
      { title: "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)", note: "Survey planning context" },
      { title: "How to Manage Work Health and Safety Risks Code of Practice 2021", note: "Planning for hazard identification" },
    ],
    consultingRelevance: "Supervisors approve plans before billing field time — weak plans cause budget overruns and missed hazmat.",
    workedExample: "Redwood brief: 1985 clinic, strip-out Levels 1–2, unknown ceiling linings. Plan includes register review, 14 rooms + roof space if accessible, three bulk samples at hold point, PCB check in switchroom, lead paint note for external timber.",
    scenarioPrompt: "Plan assumes roof access; on arrival ladder is unsafe. Adapt?",
    scenarioModel: "Implement stop condition for roof; document limitation in field notes; proceed with accessible areas; notify client same day; recommend engineered access or drone/visual from hatch where policy allows; update plan and fee variation if re-mobilisation needed.",
    commonMistakes: [
      "No document review before site",
      "PPE underestimated for dusty roof spaces",
      "Sampling without hold point approval",
      "Omitting plant room and external elevations",
    ],
    summary: "Inspection plan = scope + documents + access + PPE + sampling holds + deliverables + stop conditions.",
    sessionPlan: "Weekend workshop (2–3 hours): 30 min brief analysis; 90 min draft plan; 30 min peer critique; 30 min revise and short quiz.",
  },
  {
    id: "w2-sun",
    dayDate: "2026-08-02",
    week: 2,
    dayLabel: "Week 2 — Sunday",
    title: "Asbestos Register Review Practice",
    topicIds: ["asbestos", "reporting", "consulting_practice"],
    objectives: [
      "Perform structured review of a fictional asbestos register",
      "Cross-check register against AMP and proposed refurbishment scope",
      "Draft priority findings and recommended survey upgrades",
      "Prepare supervisor-ready review memo",
    ],
    explanation: `This practice day focuses on register review for fictional Tanaka Industrial Park Building 4 ahead of tenant fit-out. You receive a sample register, partial floor plan, and fit-out scope marking new penetrations and ceiling removal in Zones B and C. Your task is not removal planning but credible register critique: completeness, specificity, condition ratings, and alignment with proposed disturbance.

Work through systematically: executive summary, register metadata (date, assessor, next review), line-by-line location check, presumed ACM logic, AMP cross-reference, and gap list. Recommend pre-refurbishment survey where ceiling removal is planned but register relies on management survey from 2016 with no ceiling cavity access noted.

Use Queensland asbestos codes varied January 2023 as your reference frame. All entities fictional.`,
    terminology: [
      { term: "Register review memo", definition: "Consultant document summarising register adequacy, gaps, and recommended actions — not a new survey certificate." },
      { term: "Zone of disturbance", definition: "Area affected by proposed works — must be covered by current asbestos information." },
    ],
    officialReadings: [
      { title: "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)", note: "Register content expectations" },
    ],
    consultingRelevance: "Register reviews bridge low-cost document work and higher-value survey recommendations — a core graduate task.",
    workedExample: "Register entry 'Level 2 — generic ceiling' lacks room IDs. Fit-out targets Rooms 2.04–2.09. You recommend intrusive survey of those rooms' ceilings and note register non-compliance with specificity expectations.",
    scenarioPrompt: "Client wants sign-off that register is 'good enough' to avoid survey costs. Response?",
    scenarioModel: "Explain register review is not clearance for refurbishment. Document gaps between register coverage and disturbance scope. Recommend pre-refurbishment survey for uncovered zones. PCBU retains duty to ensure asbestos info adequate before work — consultant does not waive survey need.",
    commonMistakes: [
      "Approving registers without scope comparison",
      "Missing AMP review entirely",
      "Copy-pasting register text into report as your findings",
      "Promising legal compliance instead of documented opinion",
    ],
    summary: "Register review compares documented ACM info to planned disturbance — gaps drive survey and update recommendations.",
    sessionPlan: "Weekend practice (2 hours): 20 min method; 70 min register review exercise; 30 min memo draft and review quiz.",
  },
  {
    id: "w3-mon",
    dayDate: "2026-08-03",
    week: 3,
    dayLabel: "Week 3 — Monday",
    title: "Occupational Hygiene and the ARECC Framework",
    topicIds: ["occupational_hygiene", "air_monitoring", "consulting_practice"],
    objectives: [
      "Define occupational hygiene and the consultant's role vs hygienist",
      "Apply ARECC: Anticipate, Recognise, Evaluate, Control, Confirm",
      "Link hygiene assessment to client exposure scenarios",
      "Know when to engage a certified occupational hygienist",
    ],
    explanation: `Occupational hygiene is the science of anticipating, recognising, evaluating, and controlling workplace environmental factors that may cause illness or discomfort. The ARECC framework structures professional practice: anticipate hazards before exposure occurs; recognise agents and routes; evaluate exposure through qualitative and quantitative means; control using hierarchy principles; confirm effectiveness via monitoring and review.

Graduate consultants often support hygiene work — planning monitoring, documenting conditions, coordinating labs — before they lead complex evaluations. In Queensland, know your firm's boundaries: interpreting exposure against standards may require COH or supervisor sign-off. Your value early on includes thorough anticipation and recognition during inspections, accurate field notes, and well-scoped monitoring plans.

ARECC applies across asbestos air monitoring, silica, solvents, and noise. This week builds quantitative skills: exposure standards, sampling strategy, controls, RPE, and health monitoring boundaries. Always tie hygiene recommendations to the PCBU's duty to eliminate or minimise exposure so far as is reasonably practicable.`,
    terminology: [
      { term: "ARECC", definition: "Anticipate, Recognise, Evaluate, Control, Confirm — core occupational hygiene process." },
      { term: "Occupational hygienist", definition: "Professional specialising in exposure assessment and control — may hold COH certification." },
      { term: "Exposure scenario", definition: "Description of task, frequency, duration, and controls affecting worker exposure." },
      { term: "Qualitative assessment", definition: "Non-measurement-based evaluation of exposure potential — precedes quantitative monitoring." },
    ],
    officialReadings: [
      { title: "Safe Work Australia — Workplace exposure standards for airborne contaminants", note: "Values used in evaluation step" },
      { title: "How to Manage Work Health and Safety Risks Code of Practice 2021", note: "Control confirmation and review" },
    ],
    consultingRelevance: "Monitoring proposals clients pay for must show ARECC logic — especially Anticipate/Recognise in the written plan.",
    workedExample: "Fictional BrewCo bottling line solvent wipe-down 2× daily. You anticipate vapour inhalation, recognise acetone-class solvent from SDS, recommend qualitative review of ventilation, then scoped static air monitoring on a typical shift before/after control upgrade.",
    scenarioPrompt: "Client wants air monitoring but cannot describe tasks or duration. Proceed?",
    scenarioModel: "Do not deploy pumps yet. ARECC requires exposure scenario definition: tasks, workers present, duration, ventilation, existing controls. Conduct walk-through or worker interview, draft scenario, then design monitoring with supervisor/hygienist approval.",
    commonMistakes: [
      "Monitoring without defined exposure scenario",
      "Equating one sample with lifelong exposure certainty",
      "Skipping control recommendations in monitoring reports",
      "Claiming COH-level sign-off without qualification",
    ],
    summary: "ARECC structures hygiene work: define scenario, evaluate against standards, control, then confirm — respect qualification boundaries.",
    sessionPlan: "80-minute weekday session: 15 min OH intro; 30 min ARECC with examples; 20 min scenario writing; 15 min quiz.",
  },
  {
    id: "w3-tue",
    dayDate: "2026-08-04",
    week: 3,
    dayLabel: "Week 3 — Tuesday",
    title: "Workplace Exposure Standards: WES, WEL, TWA, STEL and Peak",
    topicIds: ["occupational_hygiene", "air_monitoring", "silica"],
    objectives: [
      "Differentiate TWA, STEL, and peak exposure limit concepts",
      "Apply WES values current at August 2026 curriculum start",
      "Explain WEL commencement from 1 December 2026 and transitional context",
      "Compare measured results to correct standard for assessment date",
    ],
    explanation: `Safe Work Australia publishes workplace exposure standards for airborne contaminants. At the start of this curriculum (August 2026), workplace exposure standards (WES) remain the reference values for comparing air monitoring results in most Queensland consulting contexts. From 1 December 2026, workplace exposure limits (WEL) commence under national transition arrangements — consultants must know which value applies to the job date and document that choice in reports.

TWA (time-weighted average) represents average exposure over an 8-hour shift unless specified otherwise. STEL (short-term exposure limit) addresses 15-minute peaks. Peak limits apply to instantaneous or very short excursions for some substances. Exceedance interpretation requires matching sampling method, averaging time, and uncertainty — never treat a single grab sample as definitive compliance proof without context.

When drafting reports in August 2026, cite WES for compliance comparisons unless client instruction adopts forward WEL for planning. Note upcoming WEL where relevant for client budgeting of control upgrades. Do not invent section numbers in legislation — refer to the Workplace exposure standards document title and assessment date.`,
    terminology: [
      { term: "WES", definition: "Workplace exposure standard — applicable reference at August 2026 curriculum start." },
      { term: "WEL", definition: "Workplace exposure limit — commences 1 December 2026 under transitional arrangements." },
      { term: "STEL", definition: "Short-term exposure limit — typically 15-minute average not to be exceeded." },
      { term: "Peak limitation", definition: "Maximum instantaneous or near-instantaneous concentration for specified substances." },
    ],
    officialReadings: [
      { title: "Safe Work Australia — Workplace exposure standards for airborne contaminants", note: "TWA, STEL, peak values and WES/WEL transition" },
      { title: "Work Health and Safety Regulation 2011 (Qld)", note: "Framework for managing airborne contaminant risks" },
    ],
    consultingRelevance: "Wrong standard or averaging period invalidates monitoring reports and exposes firms to professional errors.",
    workedExample: "Silica monitoring on 2026-08-05 returns TWA 0.04 mg/m³ against quartz WES 0.05 mg/m³ (verify current table). Report states WES comparison, notes WEL commencement 2026-12-01 for client planning, recommends continued wet methods.",
    scenarioPrompt: "Results exceed WES but are below published WEL. Report in August 2026?",
    scenarioModel: "Primary comparison to current WES with date stated. Note WEL commencement and that future assessments may apply stricter limits. Recommend controls to achieve sustainable compliance under either value; do not dismiss exceedance because WEL is higher.",
    commonMistakes: [
      "Using WEL before December 2026 without labelling as forward-looking",
      "Comparing 15-minute data to TWA limits",
      "Ignoring sampling uncertainty and pump errors",
      "Presenting standards as static without checking Safe Work Australia updates",
    ],
    summary: "August 2026 assessments use WES; know WEL from 1 Dec 2026; match TWA/STEL/peak to sampling method and report clearly.",
    sessionPlan: "80-minute weekday session: 25 min definitions; 25 min WES/WEL timeline; 20 min calculation examples; 10 min quiz.",
  },
  {
    id: "w3-wed",
    dayDate: "2026-08-05",
    week: 3,
    dayLabel: "Week 3 — Wednesday",
    title: "Air Monitoring Sampling Strategy",
    topicIds: ["air_monitoring", "fieldwork", "occupational_hygiene"],
    objectives: [
      "Design static and personal exposure monitoring strategies",
      "Select sample duration, flow rates, and number of samples logically",
      "Document weather, ventilation, and activity context in field notes",
      "Plan laboratory analysis and reporting timelines",
    ],
    explanation: `Air monitoring strategy translates ARECC evaluation into a practical field program. Static (area) samples assess concentration in a zone; personal samples on workers assess inhalation exposure — often preferred for compliance comparison to TWA limits. Define objectives first: baseline, clearance, or control verification. Number of samples should reflect variability across tasks, workers, and shifts — single samples are screening, not comprehensive proof.

Field documentation is as important as pumps: calibration records, flow rates, run times, worker activities, doors/windows status, LEV operation, and adjacent generating tasks. Coordinate NATA labs for gravimetric dust, silica, asbestos fibre counting (PCM/TEM per scope), or sorbent tubes for vapours. Chain of custody applies as for bulk samples.

Queensland heat and humidity affect field plans — schedule monitoring representative of worst reasonable conditions where safe. Consult supervisor on pump placement and worker consent for personal samples.`,
    terminology: [
      { term: "Static sample", definition: "Fixed-location air sample measuring area concentration over defined period." },
      { term: "Personal sample", definition: "Sample collected in worker breathing zone — typically on lapel/collar." },
      { term: "Gravimetric analysis", definition: "Weighing collected dust on filters — used for respirable dust and some silica assessments." },
      { term: "Calibration", definition: "Pre- and post-sample flow verification ensuring volume measurement accuracy." },
    ],
    officialReadings: [
      { title: "Safe Work Australia — Workplace exposure standards for airborne contaminants", note: "Comparison basis for results" },
      { title: "AS 3640 Workplace atmospheres — Method for sampling and gravimetric determination of respirable dust", note: "Common gravimetric reference" },
    ],
    consultingRelevance: "Clients reject monitoring invoices when strategy slides lack objective, sample map, and activity log.",
    workedExample: "Fictional SilicaTask demo bay: two personal samples on cutters during 4-hour monitoring, one static near LEV return, pre/post pump calibration logged, photos of setup, activity log every 15 minutes.",
    scenarioPrompt: "Only one personal sample collected; worker took break outside for 2 hours. Interpret cautiously?",
    scenarioModel: "Note non-representative activity period in report. TWA extrapolation may under/over-estimate true shift exposure. Recommend additional sampling covering full shift or task-focused STEL assessment per supervisor. Do not declare full-shift compliance without representative coverage.",
    commonMistakes: [
      "No calibration records",
      "Personal pump on belt not breathing zone",
      "Ignoring concurrent untested generating tasks",
      "Comparing results to wrong contaminant row in standards table",
    ],
    summary: "Define monitoring objective, map static/personal samples, log activity context, calibrate pumps, match analysis to contaminant.",
    sessionPlan: "80-minute weekday session: 20 min static vs personal; 30 min strategy case; 20 min field forms; 10 min quiz.",
  },
  {
    id: "w3-thu",
    dayDate: "2026-08-06",
    week: 3,
    dayLabel: "Week 3 — Thursday",
    title: "Exposure Controls and Respiratory Protective Equipment",
    topicIds: ["risk_management", "occupational_hygiene", "air_monitoring"],
    objectives: [
      "Recommend engineering and administrative controls before RPE",
      "Explain RPE types, fit testing, and program elements at overview level",
      "Link control selection to monitoring confirmation needs",
      "Document residual exposure when RPE is interim control",
    ],
    explanation: `Controls reduce exposure at source. Engineering controls include local exhaust ventilation, enclosure, and wet methods. Administrative controls cover job rotation, signage, permits, and training. RPE is last in the hierarchy — yet field teams often request PPE-first answers. Consultants should specify control packages: e.g., wet cutting + on-tool extraction + RPE if monitoring confirms residual risk.

RPE program elements include correct device class (P1/P2/P3 for particulates; appropriate gas/vapour cartridges for chemicals), fit testing for tight-fitting respirators, maintenance, and training. You typically recommend that the PCBU implement a RPE program per manufacturer and WHS guidance rather than selecting masks casually. Note clean-shaven requirements for tight-fitting units and heat stress interactions in Queensland.

When reports rely on RPE as interim control, state that monitoring should confirm effectiveness and that RPE must not replace higher-order controls where reasonably practicable — especially silica and asbestos disturbance contexts.`,
    terminology: [
      { term: "LEV", definition: "Local exhaust ventilation — captures contaminant at source." },
      { term: "RPE", definition: "Respiratory protective equipment — last line in hierarchy when exposure remains." },
      { term: "Fit test", definition: "Qualitative or quantitative check that tight-fitting respirator seals to wearer face." },
      { term: "APF", definition: "Assigned protection factor — numerical rating of respirator performance when program requirements met." },
    ],
    officialReadings: [
      { title: "How to Manage Work Health and Safety Risks Code of Practice 2021", note: "Hierarchy of controls" },
      { title: "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice", note: "Silica-specific control examples" },
    ],
    consultingRelevance: "Reports listing 'P2 masks' without program context are weak; supervisors expect hierarchy narrative and confirmation plan.",
    workedExample: "After fictional monitoring shows silica TWA near WES with wet cutting only, you recommend upgrading to on-tool LEV, maintaining wet methods, RPE as backup during transition, and repeat monitoring 30 days post-LEV install.",
    scenarioPrompt: "Client proposes RPE-only for asbestos non-friable removal under 10 m² by unlicensed handyman. Advice?",
    scenarioModel: "Reject as primary strategy. Non-friable removal still requires competent/licensed approach per area thresholds; RPE does not substitute licensing or safe work methods. Recommend licensed remover, enclosure, wet methods, and clearance monitoring as per removal code — escalate to supervisor.",
    commonMistakes: [
      "Specifying RPE without fit-test program mention",
      "Wrong cartridge type for contaminant",
      "Treating cloth masks as respiratory protection",
      "No plan to confirm control effectiveness",
    ],
    summary: "Engineering and admin first; RPE with fit-tested program when needed; confirm with monitoring.",
    sessionPlan: "80-minute weekday session: 20 min hierarchy refresh; 25 min RPE overview; 20 min silica/asbestos control cases; 15 min quiz.",
  },
  {
    id: "w3-fri",
    dayDate: "2026-08-07",
    week: 3,
    dayLabel: "Week 3 — Friday",
    title: "Health Monitoring and Professional Boundaries",
    topicIds: ["health_monitoring", "consulting_practice", "hazardous_chemicals"],
    objectives: [
      "Explain health monitoring vs air monitoring vs health surveillance",
      "Identify when WHS laws require health monitoring for hazardous chemicals",
      "Describe registered medical practitioner (RMP) role and worker consent",
      "Maintain consultant scope — recommend, do not diagnose",
    ],
    explanation: `Health monitoring is medical surveillance of workers to detect harm from work-related exposure to hazardous substances. It is distinct from air monitoring (environmental measurement) and from general workplace health promotion. The WHS Regulation and hazardous chemicals code specify substances and circumstances where health monitoring may be required — typically where valid techniques exist, exposure risk remains after controls, and monitoring benefits worker health outcomes.

A registered medical practitioner with appropriate expertise supervises health monitoring programs. Workers must give informed consent. Results are personal medical information — consultants do not receive or interpret individual results unless legally authorised. Your role: flag when monitoring may be required, document exposure scenarios, and recommend the PCBU engage an RMP — not conduct spirometry in the car park.

Registered medical practitioner requirement (RMP) is a common exam topic. Never conflate fit testing with health monitoring. Never tell a worker they have silicosis based on air data. Escalate suspected occupational illness through the PCBU and medical channels.`,
    terminology: [
      { term: "Health monitoring", definition: "Medical monitoring program for workers exposed to specified hazardous substances." },
      { term: "RMP", definition: "Registered medical practitioner — required to supervise health monitoring under WHS laws." },
      { term: "Biological monitoring", definition: "Measurement of substances or metabolites in body fluids — subset of health monitoring." },
      { term: "Health surveillance", definition: "Broader term sometimes used colloquially; in WHS context align to regulated health monitoring." },
    ],
    officialReadings: [
      { title: "Managing risks of hazardous chemicals in the workplace Code of Practice 2021", note: "Health monitoring triggers and process" },
      { title: "Work Health and Safety Regulation 2011 (Qld)", note: "Health monitoring provisions for hazardous chemicals" },
    ],
    consultingRelevance: "Graduates who blur monitoring types create legal and privacy risks; clear recommendations protect workers and the firm.",
    workedExample: "Fictional solvent exposure persists above controls at PackRight Ltd after engineering upgrades. You recommend PCBU consult RMP for health monitoring per hazardous chemicals code, document air results as supporting exposure scenario only, and exclude medical interpretation from your report.",
    scenarioPrompt: "Worker asks you to explain their blood test results during site visit. Response?",
    scenarioModel: "Decline to interpret medical results. Explain you are not their treating doctor or supervising RMP. Advise them to discuss results with the monitoring physician or their GP. Notify PCBU only through appropriate channels if your role includes program coordination — not clinical advice.",
    commonMistakes: [
      "Offering to 'interpret' health monitoring results",
      "Skipping RMP requirement in recommendations",
      "Using air monitoring alone to clear medical risk",
      "Sharing worker medical data in client reports",
    ],
    summary: "Health monitoring is RMP-led medical program; consultants recommend when triggered — air monitoring supports but does not replace it.",
    sessionPlan: "80-minute weekday session: 25 min definitions; 20 min regulatory triggers; 20 min boundaries role-play; 15 min quiz.",
  },
  {
    id: "w3-sat",
    dayDate: "2026-08-08",
    week: 3,
    dayLabel: "Week 3 — Saturday",
    title: "Fieldwork Discipline and Report Quality Assurance",
    topicIds: ["fieldwork", "reporting", "consulting_practice"],
    objectives: [
      "Apply field note standards, photo logs, and version control",
      "Run QA checklist on draft hazmat and monitoring reports",
      "Identify common report failures before client issue",
      "Prepare files for supervisor review efficiently",
    ],
    explanation: `Fieldwork discipline separates defensible consulting from anecdote. Every visit produces contemporaneous notes: date, personnel, weather, areas accessed/inaccessible, observations, instrument IDs, and client representatives present. Photos are indexed to locations — not a camera roll dump. Samples link to CoC line items. Changes after the visit are tracked; never silently edit field notes post hoc without audit trail.

Report QA checks include: scope and limitations stated upfront; PCBU identified; legislation referenced by title not invented sections; tables match appendix photos; sample IDs consistent lab-to-report; exposure comparisons use correct WES for date; recommendations follow hierarchy; fictional scenarios labelled; spelling of asbestos types and chemical names verified.

This workshop uses a flawed draft report for fictional Horizon Childcare extension — you mark errors and produce a QA memo. Supervisors reward graduates who submit clean first drafts.`,
    terminology: [
      { term: "QA checklist", definition: "Structured review ensuring report accuracy, consistency, and compliance with firm templates." },
      { term: "Limitations section", definition: "Explicit statement of what was not inspected, sampled, or verified." },
      { term: "Contemporaneous notes", definition: "Records made at time of observation — strongest evidential weight." },
    ],
    officialReadings: [
      { title: "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)", note: "Reporting context for asbestos findings" },
      { title: "Safe Work Australia — Workplace exposure standards for airborne contaminants", note: "Verify standard cited in monitoring reports" },
    ],
    consultingRelevance: "QA saves partner rework and protects professional reputation — treat it as billable skill, not admin annoyance.",
    workedExample: "Draft cites 'WEL exceeded' for August monitoring — QA flags error; correct to WES comparison with WEL transition footnote. Sample photo Room 3 mislabelled as Room 5 — fix before issue.",
    scenarioPrompt: "Client pressures you to remove limitations section 'for simplicity.' Action?",
    scenarioModel: "Refuse removal. Limitations manage scope and liability; explain they protect the client too by clarifying what was assessed. Offer plain-language summary if readability is concern; retain technical limitations in report body.",
    commonMistakes: [
      "Photo appendix without captions or room IDs",
      "Conclusions copied from prior jobs",
      "Wrong exposure standard year",
      "Missing supervisor review signature on first issue",
    ],
    summary: "Strong field notes + systematic QA = credible deliverables. Never drop limitations under client pressure.",
    sessionPlan: "Weekend workshop (2–3 hours): 30 min field standards; 90 min QA exercise on flawed draft; 30 min revise checklist and quiz.",
  },
  {
    id: "w3-sun",
    dayDate: "2026-08-09",
    week: 3,
    dayLabel: "Week 3 — Sunday",
    title: "Full Mock Project Assessment Day",
    topicIds: [
      "whs_legal_framework",
      "risk_management",
      "hazardous_chemicals",
      "asbestos",
      "other_hazmat",
      "occupational_hygiene",
      "air_monitoring",
      "silica",
      "health_monitoring",
      "fieldwork",
      "reporting",
      "consulting_practice",
    ],
    objectives: [
      "Complete integrated mock consulting project under timed conditions",
      "Demonstrate scope review, inspection planning, and report drafting",
      "Apply WES comparisons and QLD WHS framework correctly",
      "Pass knowledge test and supervisor question oral prep",
    ],
    explanation: `Final assessment day simulates a supervised consulting package for fictional Westgate Logistics Hub refurbishment. You will work through scope clarification, document review, inspection plan, sample schedule, CoC draft, lab reconciliation, findings/limitations, and framework explanation — plus a 100-question knowledge test and five supervisor-style questions.

This integrates three weeks: QLD WHS hierarchy and duties; asbestos registers and licensing; hazchem and silica codes; ARECC and air monitoring with WES at August 2026; health monitoring boundaries; fieldwork and QA. All businesses and results are fictional training constructs. Verify live legal requirements before real client work.

Use the MOCK_PROJECT checklist to track deliverables. Pace yourself: scope and gaps first, then plan, then technical outputs, then review. Supervisor questions probe reasoning, not memorised acronyms.`,
    terminology: [
      { term: "Mock project", definition: "Capstone simulation combining curriculum tasks — not a live client engagement." },
      { term: "Supervisor question", definition: "Oral-style prompt testing judgement, scope, and escalation — typical of graduate onboarding." },
    ],
    officialReadings: [
      { title: "Work Health and Safety Act 2011 (Qld)", note: "Framework explanation task" },
      { title: "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)", note: "Register and survey elements" },
      { title: "Safe Work Australia — Workplace exposure standards for airborne contaminants", note: "Monitoring comparison task" },
    ],
    consultingRelevance: "Demonstrates readiness for supervised site attendance and draft report production.",
    workedExample: "Morning: complete scope gap table for Westgate. Afternoon: draft inspection plan and two-page findings outline with limitations. Evening: timed quiz bank and record supervisor question practice answers.",
    scenarioPrompt: "Mock capstone: Westgate client claims prior oral clearance for all hazmat. How integrate into your project?",
    scenarioModel: "Document claim in file notes; request written prior reports/registers; do not rely on oral clearance; include gap in scope review; plan verification sampling/monitoring as needed; explain PCBU duty for current information before refurbishment.",
    commonMistakes: [
      "Rushing to sampling before scope sign-off",
      "Omitting WES date in monitoring section",
      "Treating mock as low-effort because fictional",
      "Skipping supervisor question prep",
    ],
    summary: "Capstone integrates QLD WHS, hazmat, hygiene, monitoring, reporting — complete MOCK_PROJECT checklist and knowledge test.",
    sessionPlan: "Full-day capstone (6–8 hours): scope and plan block; technical deliverables; 100-question test; five supervisor questions; self-review against checklist.",
  },
];

/** Consulting-depth overlays applied on top of base lesson shells. */
export const LESSONS: LessonSeed[] = applyDeepLessons(LESSONS_BASE);

export const QUIZ_BANK: QuizQuestionSeed[] = [
  {
    "id": "q-w1m-01",
    "lessonId": "w1-mon",
    "topicId": "whs_legal_framework",
    "prompt": "In Queensland, which instrument sets the broad primary WHS duties?",
    "choices": [
      "Work Health and Safety Regulation 2011 (Qld)",
      "Work Health and Safety Act 2011 (Qld)",
      "Company safety procedure",
      "Australian Standard only"
    ],
    "correctIndex": 1,
    "explanation": "The Act establishes primary duties; the Regulation adds detail.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1m-02",
    "lessonId": "w1-mon",
    "topicId": "whs_legal_framework",
    "prompt": "Correct hierarchy order (highest first)?",
    "choices": [
      "Standards → Act → Codes → Regulation",
      "Act → Regulation → Codes → Standards → Procedures",
      "Procedures → Act → Regulation",
      "Codes → Act → Standards"
    ],
    "correctIndex": 1,
    "explanation": "Act is highest; procedures sit at the bottom of the stack.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1m-03",
    "lessonId": "w1-mon",
    "topicId": "whs_legal_framework",
    "prompt": "Approved codes of practice in Queensland are:",
    "choices": [
      "Legally binding statutes",
      "Not relevant to PCBUs",
      "Practical guidance admissible to show what is known about a matter",
      "Optional only with no legal role"
    ],
    "correctIndex": 2,
    "explanation": "Codes are not law but may be used in proceedings on reasonably practicable measures.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1m-04",
    "lessonId": "w1-mon",
    "topicId": "consulting_practice",
    "prompt": "Before site work, a graduate consultant should first confirm:",
    "choices": [
      "Social media strategy",
      "PCBU identity and written scope",
      "Cheapest PPE supplier",
      "Client's preferred font for reports"
    ],
    "correctIndex": 1,
    "explanation": "Scope and duty holder clarity underpin defensible consulting.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1m-05",
    "lessonId": "w1-mon",
    "topicId": "whs_legal_framework",
    "prompt": "Queensland WHS regulator is:",
    "choices": [
      "EPA Queensland only",
      "Workplace Health and Safety Queensland",
      "Safe Work Australia directly enforces QLD sites",
      "Local council"
    ],
    "correctIndex": 1,
    "explanation": "WHSQ administers QLD WHS laws.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1m-06",
    "lessonId": "w1-mon",
    "topicId": "whs_legal_framework",
    "prompt": "'Reasonably practicable' means:",
    "choices": [
      "Only cheapest option",
      "Eliminating all risk regardless of cost",
      "Weighing likelihood/severity against cost and difficulty of measures",
      "Whatever the client prefers"
    ],
    "correctIndex": 2,
    "explanation": "It is a balanced legal test, not absolute zero risk.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1m-07",
    "lessonId": "w1-mon",
    "topicId": "consulting_practice",
    "prompt": "A consultant presenting advice should:",
    "choices": [
      "State jurisdiction and distinguish law from procedure",
      "Never document assumptions",
      "Issue statutory notices",
      "Replace the PCBU"
    ],
    "correctIndex": 0,
    "explanation": "Clarity on jurisdiction and source type prevents client confusion.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1m-08",
    "lessonId": "w1-mon",
    "topicId": "whs_legal_framework",
    "prompt": "Safe Work Australia model laws in Queensland:",
    "choices": [
      "Automatically apply without QLD adoption",
      "Are adopted/maintained as QLD Act and Regulation",
      "Replace all codes",
      "Only apply to mining"
    ],
    "correctIndex": 1,
    "explanation": "QLD has its own adopted versions.",
    "sourceHint": "Safe Work Australia — Model WHS Act and Regulation"
  },
  {
    "id": "q-w1m-09",
    "lessonId": "w1-mon",
    "topicId": "consulting_practice",
    "prompt": "Licensed asbestos removal is an example of:",
    "choices": [
      "Scope a general consultant performs without licence",
      "Work requiring separate licensing beyond advisory inspection",
      "Optional good practice only",
      "Local council approval only"
    ],
    "correctIndex": 1,
    "explanation": "Consultants identify; licensed removers perform removal.",
    "sourceHint": "Work Health and Safety Regulation 2011 (Qld)"
  },
  {
    "id": "q-w1m-10",
    "lessonId": "w1-mon",
    "topicId": "whs_legal_framework",
    "prompt": "Company procedures sit:",
    "choices": [
      "Above the Act",
      "Equal to Regulation always",
      "Below legislation, codes, and standards in hierarchy",
      "Outside WHS system"
    ],
    "correctIndex": 2,
    "explanation": "Procedures implement but do not override law.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1t-01",
    "lessonId": "w1-tue",
    "topicId": "whs_legal_framework",
    "prompt": "Primary duty holder under the WHS Act is the:",
    "choices": [
      "Worker only",
      "PCBU",
      "Consultant",
      "Equipment supplier only"
    ],
    "correctIndex": 1,
    "explanation": "PCBU holds the primary duty so far as reasonably practicable.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1t-02",
    "lessonId": "w1-tue",
    "topicId": "whs_legal_framework",
    "prompt": "Officers must exercise:",
    "choices": [
      "Due diligence",
      "Only financial audit",
      "No WHS duties",
      "Worker representation only"
    ],
    "correctIndex": 0,
    "explanation": "Officer due diligence supports PCBU compliance.",
    "sourceHint": "Safe Work Australia — Interpretive Guideline: The health and safety duty of an officer"
  },
  {
    "id": "q-w1t-03",
    "lessonId": "w1-tue",
    "topicId": "whs_legal_framework",
    "prompt": "Workers must:",
    "choices": [
      "Ignore site rules if inconvenient",
      "Take reasonable care and follow reasonable instructions",
      "Absorb PCBU liability",
      "Consult regulator before every task"
    ],
    "correctIndex": 1,
    "explanation": "Worker duties include reasonable care and cooperation.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1t-04",
    "lessonId": "w1-tue",
    "topicId": "consulting_practice",
    "prompt": "Consultants on site are typically:",
    "choices": [
      "Exempt from all duties",
      "Other persons at the workplace with duties",
      "The PCBU automatically",
      "HSRs by default"
    ],
    "correctIndex": 1,
    "explanation": "Consultants must follow directions and take reasonable care.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1t-05",
    "lessonId": "w1-tue",
    "topicId": "whs_legal_framework",
    "prompt": "Consultation with workers is:",
    "choices": [
      "Optional courtesy",
      "Required when identifying hazards and deciding controls",
      "Only for unions",
      "Consultant-only task"
    ],
    "correctIndex": 1,
    "explanation": "Consultation is a legal requirement for affected workers.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1t-06",
    "lessonId": "w1-tue",
    "topicId": "whs_legal_framework",
    "prompt": "HSRs are:",
    "choices": [
      "Appointed by management only",
      "Elected by workers in a work group",
      "Always external consultants",
      "Optional in all workplaces"
    ],
    "correctIndex": 1,
    "explanation": "HSRs represent workers where elected.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1t-07",
    "lessonId": "w1-tue",
    "topicId": "consulting_practice",
    "prompt": "If a consultant observes imminent danger, they should:",
    "choices": [
      "Post on social media first",
      "Engage PCBU/site supervision through agreed channels",
      "Physically remove workers without notice",
      "Leave without telling anyone"
    ],
    "correctIndex": 1,
    "explanation": "Escalate through PCBU; do not assume enforcement role.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1t-08",
    "lessonId": "w1-tue",
    "topicId": "whs_legal_framework",
    "prompt": "Due diligence cannot be:",
    "choices": [
      "Supported by training records",
      "Fully delegated to a consultant absorbing officer liability",
      "Demonstrated with resource allocation",
      "Shown by hazard knowledge"
    ],
    "correctIndex": 1,
    "explanation": "Officers retain personal due diligence duties.",
    "sourceHint": "Safe Work Australia — Interpretive Guideline: The health and safety duty of an officer"
  },
  {
    "id": "q-w1t-09",
    "lessonId": "w1-tue",
    "topicId": "consulting_practice",
    "prompt": "Skipping site induction because you are a consultant is:",
    "choices": [
      "Acceptable if experienced",
      "Non-compliant with your duties as an other person",
      "Required by law",
      "Only wrong on mining sites"
    ],
    "correctIndex": 1,
    "explanation": "Induction is part of taking reasonable care.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1t-10",
    "lessonId": "w1-tue",
    "topicId": "whs_legal_framework",
    "prompt": "Upstream duties apply to:",
    "choices": [
      "Designers, manufacturers, importers, suppliers",
      "Visitors only",
      "Consultants only",
      "Retail customers"
    ],
    "correctIndex": 0,
    "explanation": "Upstream parties must ensure products/plant are safe when used as intended.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1w-01",
    "lessonId": "w1-wed",
    "topicId": "risk_management",
    "prompt": "First step in the risk management process is:",
    "choices": [
      "Buy PPE",
      "Identify hazards",
      "Issue invoice",
      "Archive register"
    ],
    "correctIndex": 1,
    "explanation": "Identification precedes assessment and control.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1w-02",
    "lessonId": "w1-wed",
    "topicId": "risk_management",
    "prompt": "Top of hierarchy of controls is:",
    "choices": [
      "PPE",
      "Administrative controls",
      "Elimination",
      "Signage only"
    ],
    "correctIndex": 2,
    "explanation": "Elimination is preferred where reasonably practicable.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1w-03",
    "lessonId": "w1-wed",
    "topicId": "risk_management",
    "prompt": "Residual risk is:",
    "choices": [
      "Risk before any controls",
      "Risk remaining after controls applied",
      "Only financial risk",
      "Always zero after PPE"
    ],
    "correctIndex": 1,
    "explanation": "Residual risk must be communicated and reviewed.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1w-04",
    "lessonId": "w1-wed",
    "topicId": "consulting_practice",
    "prompt": "Inaccessible roof spaces should be:",
    "choices": [
      "Rated low risk by default",
      "Documented as not assessed with limitations",
      "Omitted from report",
      "Assumed asbestos-free"
    ],
    "correctIndex": 1,
    "explanation": "Honest limitations prevent false assurance.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1w-05",
    "lessonId": "w1-wed",
    "topicId": "risk_management",
    "prompt": "ALARP means:",
    "choices": [
      "As low as reasonably practicable",
      "All legal actions removed permanently",
      "Automatic low risk approval",
      "Avoid legal and regulatory problems"
    ],
    "correctIndex": 0,
    "explanation": "ALARP guides proportionate risk reduction.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1w-06",
    "lessonId": "w1-wed",
    "topicId": "risk_management",
    "prompt": "Over-reliance on PPE alone for asbestos disturbance is:",
    "choices": [
      "Best practice always",
      "Misaligned with hierarchy — higher controls should be considered",
      "Required by consultants",
      "Illegal to mention"
    ],
    "correctIndex": 1,
    "explanation": "PPE is last resort; isolation/engineering often needed.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w1w-07",
    "lessonId": "w1-wed",
    "topicId": "consulting_practice",
    "prompt": "Engagement risk includes:",
    "choices": [
      "Scope creep and unverified registers",
      "Font selection",
      "Coffee quality",
      "Parking cost only"
    ],
    "correctIndex": 0,
    "explanation": "Document limitations when information is incomplete.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1w-08",
    "lessonId": "w1-wed",
    "topicId": "risk_management",
    "prompt": "Risk assessment with incomplete info should:",
    "choices": [
      "Fabricate data",
      "State assumptions and recommend further investigation",
      "Always conclude safe",
      "Skip client communication"
    ],
    "correctIndex": 1,
    "explanation": "Proportionate assessment beats false certainty.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1w-09",
    "lessonId": "w1-wed",
    "topicId": "risk_management",
    "prompt": "Review of controls is:",
    "choices": [
      "Unnecessary after first report",
      "Part of the ongoing risk management cycle",
      "Only for regulators",
      "Client optional only"
    ],
    "correctIndex": 1,
    "explanation": "Controls must be reviewed for effectiveness.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1w-10",
    "lessonId": "w1-wed",
    "topicId": "consulting_practice",
    "prompt": "Likelihood × consequence matrices in reports should:",
    "choices": [
      "Replace legal duties",
      "Support structured thinking with site-specific narrative",
      "Never be used",
      "Guarantee compliance"
    ],
    "correctIndex": 1,
    "explanation": "Matrices aid thinking but need context.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1h-01",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "GHS is used for:",
    "choices": [
      "Building structural design",
      "Classification and labelling of hazardous chemicals",
      "Noise measurement",
      "Asbestos fibre counting"
    ],
    "correctIndex": 1,
    "explanation": "GHS standardises chemical hazard communication.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1h-02",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "SDS must be:",
    "choices": [
      "Available for hazardous chemicals used at the workplace",
      "Optional if staff experienced",
      "Replaced by verbal advice",
      "Kept secret from workers"
    ],
    "correctIndex": 0,
    "explanation": "Workers need access to current SDS.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1h-03",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "A hazardous chemicals register should:",
    "choices": [
      "List products with identifiers and SDS access",
      "Only include explosives",
      "Exclude decanted liquids",
      "Never be updated"
    ],
    "correctIndex": 0,
    "explanation": "Registers track products and support risk assessment.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1h-04",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "Unlabelled decanted containers are:",
    "choices": [
      "Fine if staff know contents",
      "A compliance and exposure gap",
      "Exempt under GHS",
      "Only a problem outdoors"
    ],
    "correctIndex": 1,
    "explanation": "Decanted containers generally require labelling.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1h-05",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "Manifest quantities relate to:",
    "choices": [
      "Thresholds triggering additional WHS obligations",
      "Office paper storage",
      "Asbestos area only",
      "Worker hours"
    ],
    "correctIndex": 0,
    "explanation": "Higher stored quantities may trigger manifest/placard duties.",
    "sourceHint": "Work Health and Safety Regulation 2011 (Qld)"
  },
  {
    "id": "q-w1h-06",
    "lessonId": "w1-thu",
    "topicId": "risk_management",
    "prompt": "Missing SDS for a stored chemical indicates:",
    "choices": [
      "Automatic non-hazardous status",
      "Uncontrolled information gap requiring action",
      "No further steps",
      "Consultant can invent hazards"
    ],
    "correctIndex": 1,
    "explanation": "Obtain SDS before assuming safe use/storage.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1h-07",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "SDS review frequency is typically:",
    "choices": [
      "Never",
      "Every five years or when formulation changes",
      "Daily",
      "Only after incidents"
    ],
    "correctIndex": 1,
    "explanation": "Outdated SDS mislead controls.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1h-08",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "Register reconciliation requires:",
    "choices": [
      "Physical walk-through comparing containers to entries",
      "Email confirmation only",
      "Deleting unmatched lines silently",
      "Ignoring store rooms"
    ],
    "correctIndex": 0,
    "explanation": "Physical verification finds shadow chemicals.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1h-09",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "GHS pictograms on labels indicate:",
    "choices": [
      "Hazard classes",
      "Company logo",
      "Expiry date only",
      "Consultant name"
    ],
    "correctIndex": 0,
    "explanation": "Pictograms communicate hazard types quickly.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1h-10",
    "lessonId": "w1-thu",
    "topicId": "hazardous_chemicals",
    "prompt": "Household cleaners on industrial sites:",
    "choices": [
      "Are always non-hazardous",
      "Still require assessment via SDS/label",
      "Exempt from all WHS rules",
      "Cannot be in registers"
    ],
    "correctIndex": 1,
    "explanation": "Many cleaners are classified hazardous chemicals.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1f-01",
    "lessonId": "w1-fri",
    "topicId": "hazardous_chemicals",
    "prompt": "Hazard differs from exposure because:",
    "choices": [
      "They are identical terms",
      "Hazard is intrinsic; exposure is contact over time",
      "Exposure is always zero indoors",
      "Hazard only applies to gases"
    ],
    "correctIndex": 1,
    "explanation": "Risk links hazard, exposure, and context.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1f-02",
    "lessonId": "w1-fri",
    "topicId": "occupational_hygiene",
    "prompt": "Primary occupational hygiene focus routes often include:",
    "choices": [
      "Inhalation and dermal where relevant",
      "Only ingestion at restaurants",
      "Only noise",
      "Only radiation"
    ],
    "correctIndex": 0,
    "explanation": "Hygiene quantifies environmental contact.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w1f-03",
    "lessonId": "w1-fri",
    "topicId": "health_monitoring",
    "prompt": "Health monitoring is:",
    "choices": [
      "The same as air monitoring",
      "Medical monitoring supervised by RMP",
      "Optional gossip",
      "Performed by any consultant"
    ],
    "correctIndex": 1,
    "explanation": "Health monitoring is medical and RMP-led.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1f-04",
    "lessonId": "w1-fri",
    "topicId": "hazardous_chemicals",
    "prompt": "Chronic health effects:",
    "choices": [
      "Always appear in minutes",
      "Develop over longer exposure periods",
      "Never occur from dust",
      "Only from acids"
    ],
    "correctIndex": 1,
    "explanation": "Silicosis and mesothelioma illustrate latency.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w1f-05",
    "lessonId": "w1-fri",
    "topicId": "health_monitoring",
    "prompt": "Consultants should NOT:",
    "choices": [
      "Diagnose illness from air results",
      "Recommend RMP engagement when triggered",
      "Document exposure scenarios",
      "Flag monitoring triggers"
    ],
    "correctIndex": 0,
    "explanation": "Medical diagnosis is outside consultant scope.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1f-06",
    "lessonId": "w1-fri",
    "topicId": "occupational_hygiene",
    "prompt": "TWA is used to:",
    "choices": [
      "Average exposure over a standard period for comparison to standards",
      "Measure peak noise only",
      "Replace SDS",
      "Certify buildings"
    ],
    "correctIndex": 0,
    "explanation": "TWA supports standard comparison.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w1f-07",
    "lessonId": "w1-fri",
    "topicId": "hazardous_chemicals",
    "prompt": "Carcinogens in SDS require:",
    "choices": [
      "Casual handling",
      "Stricter control and careful communication",
      "No documentation",
      "Automatic exemption"
    ],
    "correctIndex": 1,
    "explanation": "Carcinogens need rigorous controls even at low exposure.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1f-08",
    "lessonId": "w1-fri",
    "topicId": "health_monitoring",
    "prompt": "Air monitoring supports health monitoring by:",
    "choices": [
      "Replacing blood tests",
      "Documenting exposure scenarios — not replacing medical assessment",
      "Guaranteeing worker health",
      "Eliminating RMP need"
    ],
    "correctIndex": 1,
    "explanation": "Air data informs but does not replace medical programs.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1f-09",
    "lessonId": "w1-fri",
    "topicId": "hazardous_chemicals",
    "prompt": "LD50 alone is:",
    "choices": [
      "Sufficient for all chronic workplace decisions",
      "Not sufficient alone for chronic inhalation risk decisions",
      "Required on every label",
      "Measured on every site visit"
    ],
    "correctIndex": 1,
    "explanation": "Chronic routes need broader toxicology.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1f-10",
    "lessonId": "w1-fri",
    "topicId": "occupational_hygiene",
    "prompt": "Sensitisers in SDS may trigger:",
    "choices": [
      "No special consideration",
      "Respiratory protection and possible health monitoring if exposure continues",
      "Automatic site closure",
      "Only cosmetic concerns"
    ],
    "correctIndex": 1,
    "explanation": "Sensitisation can occur at low levels.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w2m-01",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "Friable asbestos:",
    "choices": [
      "Cannot release fibres",
      "Can be crumbled by hand pressure when dry",
      "Is always safe in situ",
      "Means any paint coating"
    ],
    "correctIndex": 1,
    "explanation": "Friability affects fibre release potential.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2m-02",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "Class A licence is required for:",
    "choices": [
      "All painting work",
      "Friable asbestos removal",
      "Office cleaning",
      "Register updates only"
    ],
    "correctIndex": 1,
    "explanation": "Friable removal needs Class A licence in QLD.",
    "sourceHint": "Work Health and Safety Regulation 2011 (Qld)"
  },
  {
    "id": "q-w2m-03",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "Non-friable removal over 10 m² in Queensland requires:",
    "choices": [
      "DIY only",
      "Licensed asbestos removal business",
      "No controls",
      "Consultant removal"
    ],
    "correctIndex": 1,
    "explanation": "Area threshold triggers licensing.",
    "sourceHint": "Work Health and Safety Regulation 2011 (Qld)"
  },
  {
    "id": "q-w2m-04",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "ACM means:",
    "choices": [
      "Asbestos-containing material",
      "Approved construction method",
      "Air contamination measure",
      "Automatic clearance mark"
    ],
    "correctIndex": 0,
    "explanation": "ACM is any material containing asbestos.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2m-05",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "Consultants generally:",
    "choices": [
      "Perform licensed removal without licence",
      "Identify and recommend — removal by licensed parties",
      "Issue statutory penalties",
      "Waive licensing rules"
    ],
    "correctIndex": 1,
    "explanation": "Stay within identification/advisory scope.",
    "sourceHint": "Work Health and Safety Regulation 2011 (Qld)"
  },
  {
    "id": "q-w2m-06",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "Asbestos codes in Queensland were varied in:",
    "choices": [
      "January 2023",
      "1990",
      "Never",
      "2026 only for silica"
    ],
    "correctIndex": 0,
    "explanation": "Use codes varied Jan 2023.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2m-07",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "Mesothelioma is associated with:",
    "choices": [
      "Asbestos exposure with long latency",
      "Instant sunburn",
      "Low noise",
      "Fresh paint only"
    ],
    "correctIndex": 0,
    "explanation": "Serious disease linked to asbestos fibres.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2m-08",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "Disturbance includes:",
    "choices": [
      "Drilling, cutting, breakage generating fibres",
      "Reading the register",
      "Closed-door meetings",
      "Photographing intact sheet from distance"
    ],
    "correctIndex": 0,
    "explanation": "Mechanical disturbance increases release.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2m-09",
    "lessonId": "w2-mon",
    "topicId": "asbestos",
    "prompt": "Asbestos cement sheeting is typically:",
    "choices": [
      "Non-friable when intact but hazardous if disturbed",
      "Always friable",
      "Never ACM",
      "Exempt from registers"
    ],
    "correctIndex": 0,
    "explanation": "Bonded products still require management.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2m-10",
    "lessonId": "w2-mon",
    "topicId": "whs_legal_framework",
    "prompt": "Pre-1990 buildings in QLD:",
    "choices": [
      "Never contain asbestos",
      "May contain asbestos — identification required",
      "Are automatically demolished",
      "Exempt from WHS"
    ],
    "correctIndex": 1,
    "explanation": "Era increases likelihood — verify with survey.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-01",
    "lessonId": "w2-tue",
    "topicId": "asbestos",
    "prompt": "An asbestos register must:",
    "choices": [
      "Be maintained where asbestos is identified or assumed at workplace",
      "Only exist for mines",
      "Never include photos",
      "Replace AMP always"
    ],
    "correctIndex": 0,
    "explanation": "Registers record ACM locations and condition.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-02",
    "lessonId": "w2-tue",
    "topicId": "asbestos",
    "prompt": "An AMP is required:",
    "choices": [
      "Where asbestos has been identified",
      "Never for commercial buildings",
      "Only after removal only",
      "Only if client requests"
    ],
    "correctIndex": 0,
    "explanation": "AMP documents ongoing management.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-03",
    "lessonId": "w2-tue",
    "topicId": "asbestos",
    "prompt": "Pre-refurbishment survey is:",
    "choices": [
      "Always identical to management survey",
      "More intrusive — locates ACM that refurbishment may disturb",
      "Optional if register exists from 1990",
      "Only for friable"
    ],
    "correctIndex": 1,
    "explanation": "Refurbishment needs adequate information for planned disturbance.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-04",
    "lessonId": "w2-tue",
    "topicId": "reporting",
    "prompt": "Vague register locations like 'throughout building' are:",
    "choices": [
      "Best practice",
      "Inadequate for targeted control and refurbishment planning",
      "Required by law",
      "Consultant preference"
    ],
    "correctIndex": 1,
    "explanation": "Specificity supports safe work.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-05",
    "lessonId": "w2-tue",
    "topicId": "asbestos",
    "prompt": "Presumed ACM should:",
    "choices": [
      "Be ignored",
      "Be flagged until verified or managed as ACM",
      "Auto-delete from register",
      "Mean no controls"
    ],
    "correctIndex": 1,
    "explanation": "Presumption protects until testing proves otherwise.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-06",
    "lessonId": "w2-tue",
    "topicId": "consulting_practice",
    "prompt": "Register review compares:",
    "choices": [
      "Only cover page",
      "Documented ACM info to planned disturbance scope",
      "Client budget only",
      "Worker ages"
    ],
    "correctIndex": 1,
    "explanation": "Scope mismatch drives survey recommendations.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-07",
    "lessonId": "w2-tue",
    "topicId": "asbestos",
    "prompt": "After damage from roof leak, register should:",
    "choices": [
      "Stay unchanged forever",
      "Be updated after reassessment",
      "Be destroyed",
      "Move to AMP only"
    ],
    "correctIndex": 1,
    "explanation": "Condition changes trigger review.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-08",
    "lessonId": "w2-tue",
    "topicId": "asbestos",
    "prompt": "Management survey supports:",
    "choices": [
      "Ongoing occupancy and minor works — may not suffice for major refurbishment",
      "Automatic demolition clearance always",
      "No register updates",
      "Only residential"
    ],
    "correctIndex": 0,
    "explanation": "Match survey level to project.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-09",
    "lessonId": "w2-tue",
    "topicId": "reporting",
    "prompt": "Register review memo is:",
    "choices": [
      "Same as licensed clearance certificate",
      "Consultant summary of adequacy and gaps",
      "Legally binding removal approval",
      "Worker medical record"
    ],
    "correctIndex": 1,
    "explanation": "Memos advise; they do not replace surveys.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2t-10",
    "lessonId": "w2-tue",
    "topicId": "asbestos",
    "prompt": "AMP should reference:",
    "choices": [
      "Roles, inspection frequency, disturbance procedures",
      "Only coffee roster",
      "Unrelated financial data",
      "Nothing — oral only"
    ],
    "correctIndex": 0,
    "explanation": "AMP operationalises register information.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2w-01",
    "lessonId": "w2-wed",
    "topicId": "asbestos",
    "prompt": "Chain of custody ensures:",
    "choices": [
      "Sample traceability from collection to lab",
      "Faster invoicing only",
      "No lab needed",
      "Automatic negative results"
    ],
    "correctIndex": 0,
    "explanation": "Custody integrity supports defensibility.",
    "sourceHint": "AS 4964 Method for the qualitative identification of asbestos in bulk samples"
  },
  {
    "id": "q-w2w-02",
    "lessonId": "w2-wed",
    "topicId": "fieldwork",
    "prompt": "Bulk sampling should:",
    "choices": [
      "Minimise disturbance and be authorised",
      "Take largest piece possible always",
      "Never be documented",
      "Replace register without lab"
    ],
    "correctIndex": 0,
    "explanation": "Controlled sampling reduces fibre release.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2w-03",
    "lessonId": "w2-wed",
    "topicId": "asbestos",
    "prompt": "NATA accreditation indicates:",
    "choices": [
      "Laboratory quality system for testing",
      "Consultant licensing",
      "Removal licensing",
      "Automatic safe air"
    ],
    "correctIndex": 0,
    "explanation": "Use accredited labs for analysis.",
    "sourceHint": "AS 4964 Method for the qualitative identification of asbestos in bulk samples"
  },
  {
    "id": "q-w2w-04",
    "lessonId": "w2-wed",
    "topicId": "asbestos",
    "prompt": "PLM is commonly used for:",
    "choices": [
      "Bulk asbestos identification",
      "Noise measurement",
      "Lead blood levels",
      "SDS writing"
    ],
    "correctIndex": 0,
    "explanation": "PLM is standard bulk technique.",
    "sourceHint": "AS 4964 Method for the qualitative identification of asbestos in bulk samples"
  },
  {
    "id": "q-w2w-05",
    "lessonId": "w2-wed",
    "topicId": "fieldwork",
    "prompt": "CoC location IDs should:",
    "choices": [
      "Match site plan/room references",
      "Be random numbers only",
      "Omit dates",
      "Never include collector name"
    ],
    "correctIndex": 0,
    "explanation": "Traceability requires consistent IDs.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2w-06",
    "lessonId": "w2-wed",
    "topicId": "asbestos",
    "prompt": "Register updates with lab results should occur:",
    "choices": [
      "After verified results linked to correct sample locations",
      "Before sampling",
      "Never",
      "Based on guesses"
    ],
    "correctIndex": 0,
    "explanation": "Wrong-location results corrupt registers.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2w-07",
    "lessonId": "w2-wed",
    "topicId": "consulting_practice",
    "prompt": "Licensed assessor/sampler roles:",
    "choices": [
      "May differ from graduate consultant — know firm boundaries",
      "Are always optional",
      "Replace PCBU duties",
      "Eliminate CoC need"
    ],
    "correctIndex": 0,
    "explanation": "Roles vary by firm and licence.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2w-08",
    "lessonId": "w2-wed",
    "topicId": "air_monitoring",
    "prompt": "Air monitoring during sampling may be:",
    "choices": [
      "Required depending on scope and procedure",
      "Never used",
      "Only for water quality",
      "Replacing bulk analysis"
    ],
    "correctIndex": 0,
    "explanation": "Monitoring may support disturbance assessment.",
    "sourceHint": "How to Safely Remove Asbestos Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2w-09",
    "lessonId": "w2-wed",
    "topicId": "fieldwork",
    "prompt": "Wrong-room sample result requires:",
    "choices": [
      "Re-sample and investigate CoC error",
      "Hide error",
      "Delete register",
      "Instant clearance"
    ],
    "correctIndex": 0,
    "explanation": "Corrective action and documentation required.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2w-10",
    "lessonId": "w2-wed",
    "topicId": "asbestos",
    "prompt": "Analyst certificate differs from clearance certificate because:",
    "choices": [
      "Analyst reports material identification; clearance confirms area safe after removal process",
      "They are identical",
      "Neither exists in QLD",
      "Consultants issue both always"
    ],
    "correctIndex": 0,
    "explanation": "Do not conflate lab analysis with clearance.",
    "sourceHint": "How to Safely Remove Asbestos Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2h-01",
    "lessonId": "w2-thu",
    "topicId": "other_hazmat",
    "prompt": "Lead-based paint is a concern when:",
    "choices": [
      "Disturbed during sanding or deteriorating",
      "Never in old buildings",
      "Only outdoors in rain",
      "Always safe if painted"
    ],
    "correctIndex": 0,
    "explanation": "Disturbance creates exposure pathways.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w2h-02",
    "lessonId": "w2-thu",
    "topicId": "other_hazmat",
    "prompt": "PCBs may be found in:",
    "choices": [
      "Older electrical capacitors and some ballasts",
      "Modern LED only fixtures always",
      "Fresh concrete only",
      "Grass lawns"
    ],
    "correctIndex": 0,
    "explanation": "Electrical plant rooms need checking.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w2h-03",
    "lessonId": "w2-thu",
    "topicId": "other_hazmat",
    "prompt": "SMF insulation:",
    "choices": [
      "Is asbestos",
      "Is synthetic mineral fibre — not asbestos but may irritate",
      "Never needs control",
      "Only found in water"
    ],
    "correctIndex": 1,
    "explanation": "Use precise terminology.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w2h-04",
    "lessonId": "w2-thu",
    "topicId": "other_hazmat",
    "prompt": "ODS concerns relate to:",
    "choices": [
      "Refrigerants requiring specialist recovery",
      "Office desks",
      "Asbestos registers only",
      "Silica only"
    ],
    "correctIndex": 0,
    "explanation": "Environmental and WHS handling applies.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w2h-05",
    "lessonId": "w2-thu",
    "topicId": "risk_management",
    "prompt": "Holistic hazmat inspection includes:",
    "choices": [
      "Asbestos, lead, PCB, SMF, ODS as scope dictates",
      "Asbestos only always",
      "Only SDS review",
      "Only noise"
    ],
    "correctIndex": 0,
    "explanation": "Pre-refurbishment needs broad lens.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w2h-06",
    "lessonId": "w2-thu",
    "topicId": "other_hazmat",
    "prompt": "Dry sanding old paint without lead plan is:",
    "choices": [
      "Acceptable",
      "High risk for lead exposure",
      "Required",
      "Only cosmetic issue"
    ],
    "correctIndex": 1,
    "explanation": "Lead management plans may be needed.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w2h-07",
    "lessonId": "w2-thu",
    "topicId": "reporting",
    "prompt": "PCB equipment should be:",
    "choices": [
      "Flagged for specialist assessment — not opened by unqualified staff",
      "Drained on site by consultant",
      "Ignored if old",
      "Buried on site"
    ],
    "correctIndex": 0,
    "explanation": "Specialist handling required.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w2h-08",
    "lessonId": "w2-thu",
    "topicId": "other_hazmat",
    "prompt": "Calling all insulation 'asbestos' is:",
    "choices": [
      "Accurate always",
      "A common mistake — identify material properly",
      "Required by code",
      "Helpful shorthand"
    ],
    "correctIndex": 1,
    "explanation": "Misclassification drives wrong controls.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2h-09",
    "lessonId": "w2-thu",
    "topicId": "other_hazmat",
    "prompt": "1920s heritage paint disturbance needs:",
    "choices": [
      "Lead consideration in recommendations",
      "Automatic asbestos clearance",
      "No documentation",
      "Only silica focus"
    ],
    "correctIndex": 0,
    "explanation": "Era suggests LBP likelihood.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w2h-10",
    "lessonId": "w2-thu",
    "topicId": "consulting_practice",
    "prompt": "Specialist environmental consultants may be needed for:",
    "choices": [
      "Large PCB oil volumes or complex ODS recovery",
      "Every photo taken",
      "Font choice",
      "Parking"
    ],
    "correctIndex": 0,
    "explanation": "Know escalation limits.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w2f-01",
    "lessonId": "w2-fri",
    "topicId": "silica",
    "prompt": "RCS causes:",
    "choices": [
      "Silicosis and serious lung disease",
      "Only temporary itch",
      "No health effects",
      "Hearing loss primarily"
    ],
    "correctIndex": 0,
    "explanation": "RCS is a critical occupational hazard.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w2f-02",
    "lessonId": "w2-fri",
    "topicId": "silica",
    "prompt": "Silica code commenced:",
    "choices": [
      "1 May 2023",
      "1 January 1990",
      "1 December 2026",
      "Never in Australia"
    ],
    "correctIndex": 0,
    "explanation": "Use post-commencement guidance.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w2f-03",
    "lessonId": "w2-fri",
    "topicId": "silica",
    "prompt": "Engineered stone benchtops:",
    "choices": [
      "Have high crystalline silica — high risk when dry-cut",
      "Are silica-free always",
      "Need no controls",
      "Only outdoor issue"
    ],
    "correctIndex": 0,
    "explanation": "Dry cutting engineered stone is high risk.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w2f-04",
    "lessonId": "w2-fri",
    "topicId": "occupational_hygiene",
    "prompt": "At August 2026 curriculum start, compare silica air results primarily to:",
    "choices": [
      "WES values",
      "WEL values as current mandatory comparison",
      "No standard exists",
      "Client guess"
    ],
    "correctIndex": 0,
    "explanation": "WES applies; WEL from 1 Dec 2026.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w2f-05",
    "lessonId": "w2-fri",
    "topicId": "silica",
    "prompt": "WEL commencement date is:",
    "choices": [
      "1 December 2026",
      "1 May 2023",
      "1 July 2020",
      "Already replaced WES in 2020"
    ],
    "correctIndex": 0,
    "explanation": "Note transition in reports.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w2f-06",
    "lessonId": "w2-fri",
    "topicId": "risk_management",
    "prompt": "Silica controls should prioritise:",
    "choices": [
      "Wet methods, extraction, then RPE — not RPE alone for dry cutting",
      "RPE only",
      "No controls indoors",
      "Signage only"
    ],
    "correctIndex": 0,
    "explanation": "Hierarchy applies to silica.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w2f-07",
    "lessonId": "w2-fri",
    "topicId": "silica",
    "prompt": "Visual inspection alone proving 'silica-free' is:",
    "choices": [
      "Inadequate for disturbance tasks",
      "Always sufficient",
      "Legally binding clearance",
      "Required by silica code"
    ],
    "correctIndex": 0,
    "explanation": "Task-based assessment needed.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w2f-08",
    "lessonId": "w2-fri",
    "topicId": "silica",
    "prompt": "Concrete jackhammering during fit-out:",
    "choices": [
      "May generate RCS — flag in hazmat/hygiene reports",
      "Never produces silica",
      "Only asbestos concern",
      "Exempt indoors"
    ],
    "correctIndex": 0,
    "explanation": "Many refurbishment tasks generate silica.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w2f-09",
    "lessonId": "w2-fri",
    "topicId": "air_monitoring",
    "prompt": "Baseline silica monitoring may be used to:",
    "choices": [
      "Verify control effectiveness around generating tasks",
      "Diagnose silicosis",
      "Replace SWMS",
      "Eliminate licensing"
    ],
    "correctIndex": 0,
    "explanation": "Monitoring confirms controls.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w2f-10",
    "lessonId": "w2-fri",
    "topicId": "silica",
    "prompt": "Pre-2023 silica summaries for current QLD advice are:",
    "choices": [
      "Potentially outdated — use current codes",
      "Always current",
      "Illegal to update",
      "Only for mining"
    ],
    "correctIndex": 0,
    "explanation": "Check code commencement and variations.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w3m-01",
    "lessonId": "w3-mon",
    "topicId": "occupational_hygiene",
    "prompt": "ARECC stands for:",
    "choices": [
      "Anticipate, Recognise, Evaluate, Control, Confirm",
      "Automatic Removal of Every Chemical Contaminant",
      "Annual Register Entry Compliance Check",
      "Asbestos Removal Engineered Control Code"
    ],
    "correctIndex": 0,
    "explanation": "Core hygiene framework.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3m-02",
    "lessonId": "w3-mon",
    "topicId": "occupational_hygiene",
    "prompt": "Occupational hygiene focuses on:",
    "choices": [
      "Workplace environmental agents causing illness/discomfort",
      "HR payroll",
      "Building aesthetics",
      "Tax compliance"
    ],
    "correctIndex": 0,
    "explanation": "Hygiene evaluates environmental exposures.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3m-03",
    "lessonId": "w3-mon",
    "topicId": "consulting_practice",
    "prompt": "Graduate consultants often initially support hygiene by:",
    "choices": [
      "Planning monitoring and thorough field documentation",
      "Signing medical certificates",
      "Issuing WEL law changes",
      "Removing asbestos"
    ],
    "correctIndex": 0,
    "explanation": "Support role before leading complex eval.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3m-04",
    "lessonId": "w3-mon",
    "topicId": "occupational_hygiene",
    "prompt": "Qualitative assessment:",
    "choices": [
      "Precedes or complements quantitative monitoring",
      "Replaces all measurements always",
      "Is illegal",
      "Only for noise"
    ],
    "correctIndex": 0,
    "explanation": "Judgement before meters where appropriate.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3m-05",
    "lessonId": "w3-mon",
    "topicId": "air_monitoring",
    "prompt": "Deploying pumps without exposure scenario is:",
    "choices": [
      "Poor practice — define tasks, duration, controls first",
      "Best practice always",
      "Required by clients only",
      "Unnecessary step"
    ],
    "correctIndex": 0,
    "explanation": "ARECC requires scenario definition.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3m-06",
    "lessonId": "w3-mon",
    "topicId": "occupational_hygiene",
    "prompt": "Confirm step in ARECC means:",
    "choices": [
      "Verify control effectiveness via monitoring/review",
      "Confirm invoice paid",
      "Confirm lunch order",
      "Skip documentation"
    ],
    "correctIndex": 0,
    "explanation": "Confirmation closes the loop.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3m-07",
    "lessonId": "w3-mon",
    "topicId": "consulting_practice",
    "prompt": "COH-level sign-off without qualification is:",
    "choices": [
      "Inappropriate",
      "Required of all graduates day one",
      "Same as HSR",
      "Automatic"
    ],
    "correctIndex": 0,
    "explanation": "Respect professional boundaries.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3m-08",
    "lessonId": "w3-mon",
    "topicId": "occupational_hygiene",
    "prompt": "Exposure scenario includes:",
    "choices": [
      "Tasks, frequency, duration, workers, ventilation, controls",
      "Only weather",
      "Only brand logos",
      "Only register date"
    ],
    "correctIndex": 0,
    "explanation": "Scenario drives sampling design.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3m-09",
    "lessonId": "w3-mon",
    "topicId": "occupational_hygiene",
    "prompt": "Anticipate step asks:",
    "choices": [
      "What hazards could arise before exposure occurs?",
      "How to invoice faster?",
      "Which font?",
      "Who wins trivia?"
    ],
    "correctIndex": 0,
    "explanation": "Proactive hazard thinking.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3m-10",
    "lessonId": "w3-mon",
    "topicId": "air_monitoring",
    "prompt": "One sample alone often represents:",
    "choices": [
      "Screening snapshot — not always full-shift certainty",
      "Lifetime exposure guarantee",
      "Medical diagnosis",
      "Legal clearance always"
    ],
    "correctIndex": 0,
    "explanation": "Interpret with context and n.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-01",
    "lessonId": "w3-tue",
    "topicId": "occupational_hygiene",
    "prompt": "TWA typically averages exposure over:",
    "choices": [
      "An 8-hour shift unless specified otherwise",
      "15 minutes only",
      "One second",
      "One year"
    ],
    "correctIndex": 0,
    "explanation": "Match averaging period to standard.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-02",
    "lessonId": "w3-tue",
    "topicId": "occupational_hygiene",
    "prompt": "STEL commonly refers to:",
    "choices": [
      "15-minute short-term limit",
      "8-hour average only",
      "Peak noise only",
      "Blood lead level"
    ],
    "correctIndex": 0,
    "explanation": "STEL addresses short peaks.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-03",
    "lessonId": "w3-tue",
    "topicId": "occupational_hygiene",
    "prompt": "At August 2026, primary comparison value is:",
    "choices": [
      "WES",
      "WEL already mandatory for all comparisons",
      "No values exist",
      "Client internal only"
    ],
    "correctIndex": 0,
    "explanation": "WEL starts 1 December 2026.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-04",
    "lessonId": "w3-tue",
    "topicId": "occupational_hygiene",
    "prompt": "WEL commencement:",
    "choices": [
      "1 December 2026",
      "1 May 2023",
      "Already in 2011 Act",
      "Never scheduled"
    ],
    "correctIndex": 0,
    "explanation": "Document transition in reports.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-05",
    "lessonId": "w3-tue",
    "topicId": "air_monitoring",
    "prompt": "Comparing 15-minute data to TWA without justification is:",
    "choices": [
      "Incorrect methodology",
      "Always valid",
      "Required",
      "Only issue for noise"
    ],
    "correctIndex": 0,
    "explanation": "Match statistic to limit type.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-06",
    "lessonId": "w3-tue",
    "topicId": "occupational_hygiene",
    "prompt": "Peak limitations apply to:",
    "choices": [
      "Some substances' instantaneous/very short excursions",
      "All substances identically",
      "Office chairs",
      "Registers only"
    ],
    "correctIndex": 0,
    "explanation": "Check substance-specific rows.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-07",
    "lessonId": "w3-tue",
    "topicId": "reporting",
    "prompt": "Reports should state:",
    "choices": [
      "Which standard and assessment date used for comparison",
      "No date needed",
      "Only client opinion",
      "Invented section numbers as facts"
    ],
    "correctIndex": 0,
    "explanation": "Transparency on standard currency.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-08",
    "lessonId": "w3-tue",
    "topicId": "occupational_hygiene",
    "prompt": "Result exceeds WES but below future WEL in Aug 2026 — recommend:",
    "choices": [
      "Controls to achieve sustainable compliance; note upcoming WEL",
      "Do nothing because WEL higher",
      "Delete data",
      "Medical diagnosis"
    ],
    "correctIndex": 0,
    "explanation": "Current WES still matters in Aug 2026.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-09",
    "lessonId": "w3-tue",
    "topicId": "air_monitoring",
    "prompt": "Sampling uncertainty means:",
    "choices": [
      "Single samples need cautious interpretation",
      "Ignore all results",
      "Always exact compliance proof",
      "Only lab issue never field"
    ],
    "correctIndex": 0,
    "explanation": "Professional judgement required.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3t-10",
    "lessonId": "w3-tue",
    "topicId": "silica",
    "prompt": "Silica monitoring in August 2026 should reference:",
    "choices": [
      "WES for comparison with WEL transition note",
      "Only 1990 guidance",
      "No standards",
      "WEL as already legally current without note"
    ],
    "correctIndex": 0,
    "explanation": "Correct temporal reference.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3w-01",
    "lessonId": "w3-wed",
    "topicId": "air_monitoring",
    "prompt": "Personal samples measure:",
    "choices": [
      "Worker breathing zone exposure",
      "Only outside weather",
      "Soil lead only",
      "Register completeness"
    ],
    "correctIndex": 0,
    "explanation": "Preferred for inhalation exposure vs TWA.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3w-02",
    "lessonId": "w3-wed",
    "topicId": "air_monitoring",
    "prompt": "Static samples measure:",
    "choices": [
      "Area concentration in a zone",
      "Blood pressure",
      "Worker medical status",
      "SDS version"
    ],
    "correctIndex": 0,
    "explanation": "Useful for area mapping/supporting data.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3w-03",
    "lessonId": "w3-wed",
    "topicId": "fieldwork",
    "prompt": "Pump calibration records are:",
    "choices": [
      "Essential for defensible volume measurement",
      "Optional decoration",
      "Only for asbestos bulk",
      "Client secret"
    ],
    "correctIndex": 0,
    "explanation": "Pre/post calibration standard practice.",
    "sourceHint": "AS 3640 Workplace atmospheres — Method for sampling and gravimetric determination of respirable dust"
  },
  {
    "id": "q-w3w-04",
    "lessonId": "w3-wed",
    "topicId": "air_monitoring",
    "prompt": "Activity logs during monitoring should capture:",
    "choices": [
      "Tasks, ventilation, adjacent generating work",
      "Lunch preferences only",
      "Nothing",
      "Only photos of cars"
    ],
    "correctIndex": 0,
    "explanation": "Context drives interpretation.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3w-05",
    "lessonId": "w3-wed",
    "topicId": "air_monitoring",
    "prompt": "Single personal sample during partial shift may:",
    "choices": [
      "Under/over-represent full shift — note limitation",
      "Always prove compliance",
      "Replace medical monitoring",
      "Eliminate controls"
    ],
    "correctIndex": 0,
    "explanation": "Representativeness matters.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3w-06",
    "lessonId": "w3-wed",
    "topicId": "fieldwork",
    "prompt": "Personal pump placement should be:",
    "choices": [
      "Near breathing zone (e.g., lapel)",
      "On ankle always",
      "In site office",
      "Inside vehicle only"
    ],
    "correctIndex": 0,
    "explanation": "Location affects exposure estimate.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3w-07",
    "lessonId": "w3-wed",
    "topicId": "air_monitoring",
    "prompt": "Monitoring objectives include:",
    "choices": [
      "Baseline, clearance, control verification",
      "Marketing only",
      "Replacing registers always",
      "HR reviews"
    ],
    "correctIndex": 0,
    "explanation": "Objective shapes design.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3w-08",
    "lessonId": "w3-wed",
    "topicId": "air_monitoring",
    "prompt": "CoC applies to:",
    "choices": [
      "Air samples like bulk samples",
      "Never air samples",
      "Only invoices",
      "Only photos"
    ],
    "correctIndex": 0,
    "explanation": "Chain of custody for lab integrity.",
    "sourceHint": "AS 3640 Workplace atmospheres — Method for sampling and gravimetric determination of respirable dust"
  },
  {
    "id": "q-w3w-09",
    "lessonId": "w3-wed",
    "topicId": "occupational_hygiene",
    "prompt": "Gravimetric analysis weighs:",
    "choices": [
      "Dust collected on filters",
      "Asbestos licence",
      "Worker consent",
      "Building age only"
    ],
    "correctIndex": 0,
    "explanation": "Common for respirable dust/silica pathways.",
    "sourceHint": "AS 3640 Workplace atmospheres — Method for sampling and gravimetric determination of respirable dust"
  },
  {
    "id": "q-w3w-10",
    "lessonId": "w3-wed",
    "topicId": "fieldwork",
    "prompt": "Worker consent is needed for:",
    "choices": [
      "Personal monitoring involving worker cooperation",
      "Reading public legislation",
      "Office email",
      "Nothing ever"
    ],
    "correctIndex": 0,
    "explanation": "Ethical and practical requirement.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3h-01",
    "lessonId": "w3-thu",
    "topicId": "risk_management",
    "prompt": "LEV is an example of:",
    "choices": [
      "Engineering control",
      "PPE",
      "Elimination always",
      "Financial control"
    ],
    "correctIndex": 0,
    "explanation": "Capture at source before hierarchy bottom.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3h-02",
    "lessonId": "w3-thu",
    "topicId": "occupational_hygiene",
    "prompt": "RPE sits:",
    "choices": [
      "Last in hierarchy when exposure remains",
      "First always",
      "Outside WHS",
      "Only for visitors"
    ],
    "correctIndex": 0,
    "explanation": "PPE is last resort.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3h-03",
    "lessonId": "w3-thu",
    "topicId": "occupational_hygiene",
    "prompt": "Fit testing applies to:",
    "choices": [
      "Tight-fitting respirators in a program",
      "Loose scarves",
      "Hard hats only",
      "Safety shoes"
    ],
    "correctIndex": 0,
    "explanation": "Seal integrity requires fit test.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3h-04",
    "lessonId": "w3-thu",
    "topicId": "silica",
    "prompt": "Dry cutting engineered stone with RPE only is:",
    "choices": [
      "Insufficient — wet/LEV higher in hierarchy needed",
      "Best practice alone",
      "Exempt from silica code",
      "Consultant requirement"
    ],
    "correctIndex": 0,
    "explanation": "Silica code expects stronger controls.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w3h-05",
    "lessonId": "w3-thu",
    "topicId": "risk_management",
    "prompt": "Wet methods for silica/concrete cutting are:",
    "choices": [
      "Engineering/administrative control reducing generation",
      "Unrelated to WHS",
      "Illegal indoors",
      "Only cosmetic"
    ],
    "correctIndex": 0,
    "explanation": "Wet cutting reduces airborne dust.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w3h-06",
    "lessonId": "w3-thu",
    "topicId": "occupational_hygiene",
    "prompt": "APF relates to:",
    "choices": [
      "Respirator protection factor when program requirements met",
      "Air pressure forecast",
      "Asbestos percentage in bulk",
      "Annual profit forecast"
    ],
    "correctIndex": 0,
    "explanation": "Program must meet requirements for APF.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3h-07",
    "lessonId": "w3-thu",
    "topicId": "asbestos",
    "prompt": "RPE-only unlicensed asbestos removal is:",
    "choices": [
      "Not acceptable primary strategy — licensing and safe methods required",
      "Encouraged under 10 m² always",
      "Consultant task",
      "Exempt outdoors"
    ],
    "correctIndex": 0,
    "explanation": "Licensing thresholds still apply.",
    "sourceHint": "Work Health and Safety Regulation 2011 (Qld)"
  },
  {
    "id": "q-w3h-08",
    "lessonId": "w3-thu",
    "topicId": "air_monitoring",
    "prompt": "After installing LEV, consultants often recommend:",
    "choices": [
      "Repeat monitoring to confirm effectiveness",
      "Never check again",
      "Only visual check forever",
      "Remove SWMS"
    ],
    "correctIndex": 0,
    "explanation": "Confirm step in ARECC.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3h-09",
    "lessonId": "w3-thu",
    "topicId": "occupational_hygiene",
    "prompt": "Cloth face coverings are:",
    "choices": [
      "Not equivalent to certified RPE programs",
      "Same as P3 respirators",
      "Required fit testing always",
      "LEV substitutes"
    ],
    "correctIndex": 0,
    "explanation": "Do not confuse general masks with RPE.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3h-10",
    "lessonId": "w3-thu",
    "topicId": "risk_management",
    "prompt": "Interim RPE while engineering installed should:",
    "choices": [
      "Be documented with confirmation monitoring plan",
      "Be undocumented secret",
      "Replace engineering permanently",
      "Eliminate PCBU duties"
    ],
    "correctIndex": 0,
    "explanation": "Interim controls need review.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3f-01",
    "lessonId": "w3-fri",
    "topicId": "health_monitoring",
    "prompt": "Health monitoring requires supervision by:",
    "choices": [
      "Registered medical practitioner",
      "Any consultant",
      "Site supervisor only",
      "Worker peer"
    ],
    "correctIndex": 0,
    "explanation": "RMP requirement.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-02",
    "lessonId": "w3-fri",
    "topicId": "health_monitoring",
    "prompt": "Health monitoring differs from air monitoring because:",
    "choices": [
      "It is medical surveillance of workers",
      "It measures wind speed",
      "It replaces SDS",
      "It is identical"
    ],
    "correctIndex": 0,
    "explanation": "Distinct purposes and professionals.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-03",
    "lessonId": "w3-fri",
    "topicId": "health_monitoring",
    "prompt": "Worker health monitoring results are:",
    "choices": [
      "Personal medical information with privacy rules",
      "Public blog material",
      "Consultant property to share freely",
      "Always in asbestos register"
    ],
    "correctIndex": 0,
    "explanation": "Privacy and consent matter.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-04",
    "lessonId": "w3-fri",
    "topicId": "consulting_practice",
    "prompt": "Consultant interpreting worker blood results is:",
    "choices": [
      "Outside scope — refer to RMP/GP",
      "Required daily",
      "Same as fit testing",
      "Encouraged on site"
    ],
    "correctIndex": 0,
    "explanation": "Maintain professional boundaries.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-05",
    "lessonId": "w3-fri",
    "topicId": "health_monitoring",
    "prompt": "Biological monitoring measures:",
    "choices": [
      "Substances/metabolites in body fluids",
      "Building temperature only",
      "Asbestos in cement only",
      "Noise peaks only"
    ],
    "correctIndex": 0,
    "explanation": "Subset of health monitoring.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-06",
    "lessonId": "w3-fri",
    "topicId": "health_monitoring",
    "prompt": "Triggers for health monitoring exist when:",
    "choices": [
      "Valid techniques exist, exposure risk remains, and monitoring aids worker health outcomes",
      "Client feels like it",
      "Air always zero",
      "Never under WHS"
    ],
    "correctIndex": 0,
    "explanation": "Regulatory and practical triggers in code.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-07",
    "lessonId": "w3-fri",
    "topicId": "health_monitoring",
    "prompt": "Fit testing is:",
    "choices": [
      "Not the same as health monitoring",
      "Identical to spirometry program",
      "Optional for all chemicals",
      "Replacing RMP"
    ],
    "correctIndex": 0,
    "explanation": "RPE program vs medical monitoring.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-08",
    "lessonId": "w3-fri",
    "topicId": "consulting_practice",
    "prompt": "Recommending RMP engagement is:",
    "choices": [
      "Appropriate consultant action when triggered",
      "Illegal",
      "Same as diagnosing silicosis",
      "Only regulator role"
    ],
    "correctIndex": 0,
    "explanation": "Consultants recommend; RMP delivers.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-09",
    "lessonId": "w3-fri",
    "topicId": "health_monitoring",
    "prompt": "Air monitoring alone clearing medical risk is:",
    "choices": [
      "Incorrect — cannot replace health monitoring",
      "Always sufficient",
      "Required by RMP always",
      "QLD-specific myth only"
    ],
    "correctIndex": 0,
    "explanation": "Different tools.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3f-10",
    "lessonId": "w3-fri",
    "topicId": "health_monitoring",
    "prompt": "Worker consent for health monitoring is:",
    "choices": [
      "Required — informed consent",
      "Never needed",
      "Consultant waiver",
      "Automatic by employment"
    ],
    "correctIndex": 0,
    "explanation": "Ethical and legal requirement.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1s-01",
    "lessonId": "w1-sun",
    "topicId": "whs_legal_framework",
    "prompt": "QLD primary WHS duty holder is:",
    "choices": [
      "PCBU",
      "Consultant",
      "Customer",
      "Lab technician"
    ],
    "correctIndex": 0,
    "explanation": "PCBU holds primary duty.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1s-02",
    "lessonId": "w1-sun",
    "topicId": "whs_legal_framework",
    "prompt": "Legislative hierarchy top is:",
    "choices": [
      "Act",
      "Company procedure",
      "Toolbox talk",
      "Email"
    ],
    "correctIndex": 0,
    "explanation": "Act highest.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1s-03",
    "lessonId": "w1-sun",
    "topicId": "risk_management",
    "prompt": "First hierarchy control:",
    "choices": [
      "Elimination",
      "PPE",
      "Signage",
      "Training only"
    ],
    "correctIndex": 0,
    "explanation": "Elimination preferred.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1s-04",
    "lessonId": "w1-sun",
    "topicId": "hazardous_chemicals",
    "prompt": "SDS must be accessible for:",
    "choices": [
      "Hazardous chemicals at the workplace",
      "All furniture",
      "Only explosives",
      "Never workers"
    ],
    "correctIndex": 0,
    "explanation": "Worker access required.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1s-05",
    "lessonId": "w1-sun",
    "topicId": "consulting_practice",
    "prompt": "Consultants cannot issue statutory clearance unless:",
    "choices": [
      "Separately authorised/licensed for that specific process",
      "Client asks nicely",
      "Always",
      "Never need licence for anything"
    ],
    "correctIndex": 0,
    "explanation": "Scope limits apply.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1s-06",
    "lessonId": "w1-sun",
    "topicId": "whs_legal_framework",
    "prompt": "Officers must exercise:",
    "choices": [
      "Due diligence",
      "Only marketing diligence",
      "No duties",
      "Worker election"
    ],
    "correctIndex": 0,
    "explanation": "Officer duty non-delegable.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1s-07",
    "lessonId": "w1-sun",
    "topicId": "hazardous_chemicals",
    "prompt": "GHS provides:",
    "choices": [
      "Classification and labelling framework",
      "Asbestos removal licensing",
      "Building design",
      "Medical degrees"
    ],
    "correctIndex": 0,
    "explanation": "Chemical hazard communication.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1s-08",
    "lessonId": "w1-sun",
    "topicId": "health_monitoring",
    "prompt": "Health monitoring is led by:",
    "choices": [
      "RMP — not the air monitoring consultant",
      "Any graduate",
      "Security guard",
      "Client receptionist"
    ],
    "correctIndex": 0,
    "explanation": "Medical supervision required.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1s-09",
    "lessonId": "w1-sun",
    "topicId": "risk_management",
    "prompt": "Inaccessible areas should be:",
    "choices": [
      "Listed as limitations — not assumed safe",
      "Marked low risk",
      "Omitted",
      "Assumed compliant"
    ],
    "correctIndex": 0,
    "explanation": "Honest limitations.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1s-10",
    "lessonId": "w1-sun",
    "topicId": "hazardous_chemicals",
    "prompt": "Shadow chemicals are:",
    "choices": [
      "On site but not on register",
      "Always safe",
      "Only in labs",
      "Government issued"
    ],
    "correctIndex": 0,
    "explanation": "Common audit finding.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1s-11",
    "lessonId": "w1-sun",
    "topicId": "consulting_practice",
    "prompt": "Before site work confirm:",
    "choices": [
      "PCBU and written scope",
      "Coffee order",
      "Team sport",
      "Holiday plans"
    ],
    "correctIndex": 0,
    "explanation": "Foundation of engagement.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1s-12",
    "lessonId": "w1-sun",
    "topicId": "whs_legal_framework",
    "prompt": "Approved codes are:",
    "choices": [
      "Admissible guidance on reasonably practicable measures",
      "Useless",
      "Above the Act",
      "Optional with zero relevance"
    ],
    "correctIndex": 0,
    "explanation": "Codes have legal evidential role.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1s-13",
    "lessonId": "w1-sun",
    "topicId": "hazardous_chemicals",
    "prompt": "Decanted containers need:",
    "choices": [
      "Appropriate labelling per WHS requirements",
      "No labels ever",
      "Only colour coding",
      "Client verbal ID only"
    ],
    "correctIndex": 0,
    "explanation": "Labelling gap common.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1s-14",
    "lessonId": "w1-sun",
    "topicId": "occupational_hygiene",
    "prompt": "Air monitoring measures:",
    "choices": [
      "Airborne concentrations — not blood",
      "Blood lead only",
      "Worker happiness",
      "Profit"
    ],
    "correctIndex": 0,
    "explanation": "Environmental measurement.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w1s-15",
    "lessonId": "w1-sun",
    "topicId": "risk_management",
    "prompt": "Risk process includes review of controls:",
    "choices": [
      "True — ongoing cycle",
      "False — one-time only",
      "Only for mining",
      "Never documented"
    ],
    "correctIndex": 0,
    "explanation": "Review is essential.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w1s-16",
    "lessonId": "w1-sun",
    "topicId": "whs_legal_framework",
    "prompt": "Consultation with workers is:",
    "choices": [
      "Legally required for affected workers",
      "Optional",
      "Consultant-only duty",
      "Never for hazmat"
    ],
    "correctIndex": 0,
    "explanation": "Consultation mandatory.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1s-17",
    "lessonId": "w1-sun",
    "topicId": "hazardous_chemicals",
    "prompt": "Register reconciliation needs:",
    "choices": [
      "Physical walk-through",
      "Guesswork",
      "Delete all entries",
      "Email only"
    ],
    "correctIndex": 0,
    "explanation": "Verify on site.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1s-18",
    "lessonId": "w1-sun",
    "topicId": "consulting_practice",
    "prompt": "Jurisdiction for this curriculum is primarily:",
    "choices": [
      "Queensland",
      "France",
      "Generic international only",
      "Local council only"
    ],
    "correctIndex": 0,
    "explanation": "QLD focus.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w1s-19",
    "lessonId": "w1-sun",
    "topicId": "hazardous_chemicals",
    "prompt": "Chronic vs acute toxicity:",
    "choices": [
      "Chronic develops over time; acute quickly",
      "Same thing",
      "Only acute matters at work",
      "Only acute in SDS"
    ],
    "correctIndex": 0,
    "explanation": "Both matter in consulting.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w1s-20",
    "lessonId": "w1-sun",
    "topicId": "consulting_practice",
    "prompt": "Integrated Week 1 capstone skill is:",
    "choices": [
      "Explain framework + hazchem register method + limitations",
      "Memorise one SDS",
      "Skip documentation",
      "DIY asbestos removal"
    ],
    "correctIndex": 0,
    "explanation": "Integration goal.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w3s-01",
    "lessonId": "w3-sun",
    "topicId": "asbestos",
    "prompt": "Friable removal needs:",
    "choices": [
      "Class A licence in QLD",
      "No licence",
      "Driver licence only",
      "Consultant certificate"
    ],
    "correctIndex": 0,
    "explanation": "QLD licensing rule.",
    "sourceHint": "Work Health and Safety Regulation 2011 (Qld)"
  },
  {
    "id": "q-w3s-02",
    "lessonId": "w3-sun",
    "topicId": "silica",
    "prompt": "Silica code commenced 1 May 2023 — reports should:",
    "choices": [
      "Use current silica guidance",
      "Use 1990 leaflets only",
      "Ignore silica",
      "Only mention noise"
    ],
    "correctIndex": 0,
    "explanation": "Currency matters.",
    "sourceHint": "Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice"
  },
  {
    "id": "q-w3s-03",
    "lessonId": "w3-sun",
    "topicId": "occupational_hygiene",
    "prompt": "August 2026 monitoring compares to:",
    "choices": [
      "WES primarily",
      "WEL as already legally current without note",
      "No standards",
      "Client guess"
    ],
    "correctIndex": 0,
    "explanation": "WEL from Dec 2026.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3s-04",
    "lessonId": "w3-sun",
    "topicId": "health_monitoring",
    "prompt": "Consultant tells worker they have disease from one air sample — this is:",
    "choices": [
      "Wrong — outside scope and unsupported",
      "Best practice",
      "Required",
      "RMP task for consultant"
    ],
    "correctIndex": 0,
    "explanation": "Boundary violation.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3s-05",
    "lessonId": "w3-sun",
    "topicId": "fieldwork",
    "prompt": "Contemporaneous field notes are:",
    "choices": [
      "Strongest evidential habit",
      "Optional",
      "Replaced by memory",
      "Client-only secret"
    ],
    "correctIndex": 0,
    "explanation": "Document at time of visit.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3s-06",
    "lessonId": "w3-sun",
    "topicId": "reporting",
    "prompt": "Removing limitations section under client pressure is:",
    "choices": [
      "Unacceptable — retain limitations",
      "Required",
      "Best practice",
      "Legal requirement to remove"
    ],
    "correctIndex": 0,
    "explanation": "Protect scope integrity.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3s-07",
    "lessonId": "w3-sun",
    "topicId": "asbestos",
    "prompt": "Register review approves refurbishment without survey when gaps exist — consultant should:",
    "choices": [
      "Recommend survey — not waive PCBU duty",
      "Sign clearance",
      "Ignore scope",
      "Delete register"
    ],
    "correctIndex": 0,
    "explanation": "Do not waive survey need.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w3s-08",
    "lessonId": "w3-sun",
    "topicId": "air_monitoring",
    "prompt": "Pump calibration missing — report is:",
    "choices": [
      "Weakened — may be rejected",
      "Stronger",
      "Unrelated",
      "Only cosmetic"
    ],
    "correctIndex": 0,
    "explanation": "Calibration essential.",
    "sourceHint": "AS 3640 Workplace atmospheres — Method for sampling and gravimetric determination of respirable dust"
  },
  {
    "id": "q-w3s-09",
    "lessonId": "w3-sun",
    "topicId": "consulting_practice",
    "prompt": "Oral prior clearance for all hazmat should be:",
    "choices": [
      "Verified in writing — not relied on alone",
      "Fully sufficient always",
      "Better than registers",
      "Regulator issued always"
    ],
    "correctIndex": 0,
    "explanation": "Document evidence.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w3s-10",
    "lessonId": "w3-sun",
    "topicId": "whs_legal_framework",
    "prompt": "Mock project Westgate is:",
    "choices": [
      "Fictional training construct",
      "Live client — deploy now",
      "Regulator audit",
      "Court case"
    ],
    "correctIndex": 0,
    "explanation": "All scenarios fictional.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w3s-11",
    "lessonId": "w3-sun",
    "topicId": "risk_management",
    "prompt": "ARECC Confirm step uses:",
    "choices": [
      "Monitoring/review to verify controls",
      "Invoice only",
      "Social media",
      "Guesswork"
    ],
    "correctIndex": 0,
    "explanation": "Close the loop.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w3s-12",
    "lessonId": "w3-sun",
    "topicId": "other_hazmat",
    "prompt": "PCB capacitors marked askarel need:",
    "choices": [
      "Specialist assessment — do not open casually",
      "Immediate drilling",
      "Consultant drainage",
      "No action"
    ],
    "correctIndex": 0,
    "explanation": "Escalate appropriately.",
    "sourceHint": "Managing risks of hazardous chemicals in the workplace Code of Practice 2021"
  },
  {
    "id": "q-w3s-13",
    "lessonId": "w3-sun",
    "topicId": "asbestos",
    "prompt": "Asbestos codes varied January 2023 — use:",
    "choices": [
      "Current varied codes",
      "Pre-2023 only always",
      "US OSHA only",
      "No codes"
    ],
    "correctIndex": 0,
    "explanation": "Check currency.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w3s-14",
    "lessonId": "w3-sun",
    "topicId": "air_monitoring",
    "prompt": "CoC applies to air samples:",
    "choices": [
      "Yes — lab traceability",
      "Never",
      "Only bulk",
      "Only photos"
    ],
    "correctIndex": 0,
    "explanation": "Same custody principles.",
    "sourceHint": "AS 3640 Workplace atmospheres — Method for sampling and gravimetric determination of respirable dust"
  },
  {
    "id": "q-w3s-15",
    "lessonId": "w3-sun",
    "topicId": "consulting_practice",
    "prompt": "Supervisor questions test:",
    "choices": [
      "Judgement and reasoning",
      "Font memory only",
      "Typing speed",
      "Social media"
    ],
    "correctIndex": 0,
    "explanation": "Capstone oral prep.",
    "sourceHint": "Work Health and Safety Act 2011 (Qld)"
  },
  {
    "id": "q-w2s-01",
    "lessonId": "w2-sat",
    "topicId": "fieldwork",
    "prompt": "Inspection plan should include stop conditions:",
    "choices": [
      "True",
      "False — never stop",
      "Only for lunch",
      "Only client decides mid-air"
    ],
    "correctIndex": 0,
    "explanation": "Safety and scope stops.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  },
  {
    "id": "q-w2s-02",
    "lessonId": "w2-sat",
    "topicId": "consulting_practice",
    "prompt": "Document review before site is:",
    "choices": [
      "Essential",
      "Waste of time",
      "Illegal",
      "Only for labs"
    ],
    "correctIndex": 0,
    "explanation": "Plan from documents first.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2s-03",
    "lessonId": "w2-sun",
    "topicId": "asbestos",
    "prompt": "Register specificity requires room/location IDs:",
    "choices": [
      "True",
      "False — 'building' enough always",
      "Optional forever",
      "Only mines"
    ],
    "correctIndex": 0,
    "explanation": "Specificity supports control.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w2s-04",
    "lessonId": "w2-sun",
    "topicId": "reporting",
    "prompt": "Register review memo is not clearance for refurbishment:",
    "choices": [
      "True",
      "False — it is clearance",
      "Only if client wants",
      "Only Sundays"
    ],
    "correctIndex": 0,
    "explanation": "Different deliverables.",
    "sourceHint": "How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023)"
  },
  {
    "id": "q-w3s-16",
    "lessonId": "w3-sat",
    "topicId": "reporting",
    "prompt": "QA should catch wrong WES/WEL reference:",
    "choices": [
      "True",
      "False — dates don't matter",
      "Only spelling",
      "Never review"
    ],
    "correctIndex": 0,
    "explanation": "Standard currency check.",
    "sourceHint": "Safe Work Australia — Workplace exposure standards for airborne contaminants"
  },
  {
    "id": "q-w3s-17",
    "lessonId": "w3-sat",
    "topicId": "fieldwork",
    "prompt": "Photo appendix needs captions with room IDs:",
    "choices": [
      "True",
      "False — random gallery OK",
      "Never take photos",
      "Only selfies"
    ],
    "correctIndex": 0,
    "explanation": "Index photos to locations.",
    "sourceHint": "How to Manage Work Health and Safety Risks Code of Practice 2021"
  }
];

export const SCENARIOS: ScenarioSeed[] = [
  {
    "id": "scenario-asbestos-register",
    "title": "Asbestos Register Review — Tanaka Industrial Park B4",
    "category": "asbestos",
    "brief": "Fictional Tanaka Industrial Park Building 4 (1988) has a 2016 management survey register. Tenant fit-out will remove ceilings in Zones B and C. Review register adequacy for proposed disturbance.",
    "tasks": [
      "List metadata gaps (date, assessor, next review)",
      "Compare register locations to fit-out scope rooms",
      "Identify presumed ACM needing verification",
      "Draft three priority recommendations"
    ],
    "modelAnswer": "Register lacks room-level IDs for Level 2 ceilings targeted by fit-out. 2016 survey notes no ceiling cavity access — insufficient for planned ceiling removal. Recommend pre-refurbishment intrusive survey of Rooms 2.04–2.09 and Zone C plant corridor; update register and AMP before contractor mobilisation; do not sign off refurbishment readiness. All recommendations subject to supervisor review.",
    "sourceNotes": "Reference: How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023); Work Health and Safety Regulation 2011 (Qld).",
    "fictionalNotice": "Tanaka Industrial Park is a fictional training scenario. No real property or PCBU is represented."
  },
  {
    "id": "scenario-pre-refurb-plan",
    "title": "Pre-Refurbishment Inspection Planning — Redwood Medical Clinic",
    "category": "fieldwork",
    "brief": "Fictional Redwood Medical Clinic (1985) Levels 1–2 strip-out. Unknown ceiling linings, active clinic hours, switchroom on Level 1. Build one-day hazmat inspection plan.",
    "tasks": [
      "List documents to request before site",
      "Define access, PPE, and stop conditions",
      "Propose sampling hold points",
      "Outline deliverables and timeline"
    ],
    "modelAnswer": "Request asbestos register, AMP, floor plans, prior hazmat reports, SDS for on-site chemicals. Plan 14 clinical rooms + switchroom; PPE minimum P2 for dusty cavities; stop if clinical procedures active in zone or unsafe roof access. Hold point before three bulk samples. Deliver photo log, CoC batch, draft findings with limitations for inaccessible roof until engineered access. Coordinate after-hours access with PCBU.",
    "sourceNotes": "Reference: How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023); How to Manage Work Health and Safety Risks Code of Practice 2021.",
    "fictionalNotice": "Redwood Medical Clinic is fictional. Do not contact real clinics using this brief."
  },
  {
    "id": "scenario-hazchem-register",
    "title": "Hazardous Chemicals Register Review — Apex Fabrication",
    "category": "hazardous_chemicals",
    "brief": "Fictional Apex Fabrication Pty Ltd metal workshop. Register lists 8 products; store walk finds 15 containers including unlabelled solvent drum.",
    "tasks": [
      "Describe reconciliation method",
      "Classify findings (ghost, shadow, SDS gap)",
      "Recommend interim controls for unknown drum",
      "Draft executive summary sentence for client"
    ],
    "modelAnswer": "Reconcile line-by-line with photographed inventory. Shadow chemicals: 7 unlisted containers. SDS gap: Welding Gas Mixture A SDS 2020 — request update. Critical: 200 L drum labelled SOLVENT only — tag hold, segregate from ignition sources, identify via supplier/lab before use. Executive summary: Register materially incomplete; immediate labelling and SDS retrieval required before compliance status claimed.",
    "sourceNotes": "Reference: Managing risks of hazardous chemicals in the workplace Code of Practice 2021.",
    "fictionalNotice": "Apex Fabrication Pty Ltd is a fictional Queensland workshop scenario."
  },
  {
    "id": "scenario-silica-exposure",
    "title": "Silica Exposure Assessment — CityFit Gym Fit-Out",
    "category": "silica",
    "brief": "Fictional CityFit Gym fit-out includes jackhammer removal of concrete nib walls indoors. Client asks if 'silica-free letter' from visual walk is enough.",
    "tasks": [
      "Identify silica-generating tasks",
      "Cite applicable code commencement context",
      "Recommend controls in hierarchy order",
      "State monitoring recommendation with WES note for Aug 2026"
    ],
    "modelAnswer": "Jackhammering concrete generates RCS — visual inspection cannot clear future generating tasks. Apply Managing respirable crystalline silica code (commenced 1 May 2023): wet methods, on-tool extraction, enclosed work area, licensed contractor SWMS. Recommend personal/static monitoring representative of task with results compared to WES at assessment date; note WEL from 1 Dec 2026 for planning. Reject prior visual-only letter as insufficient for planned works.",
    "sourceNotes": "Reference: Managing the risks of respirable crystalline silica from engineered stone in the stone benchtop industry Code of Practice; Safe Work Australia — Workplace exposure standards for airborne contaminants.",
    "fictionalNotice": "CityFit Gym is fictional training context only."
  },
  {
    "id": "scenario-air-monitoring-plan",
    "title": "Air Monitoring Planning — BrewCo Solvent Wipe-Down",
    "category": "air_monitoring",
    "brief": "Fictional BrewCo bottling line uses solvent wipe-down 2× daily. Ventilation upgraded last month; PCBU wants proof of compliance.",
    "tasks": [
      "Write exposure scenario elements",
      "Choose static vs personal samples and justify",
      "List field documentation requirements",
      "Describe report comparison basis for August 2026"
    ],
    "modelAnswer": "Scenario: 2 workers, 20 min wipe-down per shift, general ventilation + local fan, acetone-class solvent per SDS. Two personal samples on operators during typical wipe-down plus one static near breathing zone; pre/post calibration; activity log every 15 min. Compare VOC results to applicable WES rows with assessment date August 2026; footnote WEL transition 1 Dec 2026. If exceedance, recommend engineering/admin before relying on RPE.",
    "sourceNotes": "Reference: Safe Work Australia — Workplace exposure standards for airborne contaminants; AS 3640 Workplace atmospheres — Method for sampling and gravimetric determination of respirable dust.",
    "fictionalNotice": "BrewCo is a fictional bottling facility."
  },
  {
    "id": "scenario-lab-reconciliation",
    "title": "Laboratory Sample Reconciliation — Portside Warehouse",
    "category": "fieldwork",
    "brief": "Fictional Portside Warehouse bulk results returned: Sample PSW-03 labelled Room 2.08 returned negative; field notes and photo show sample from Room 2.05.",
    "tasks": [
      "Immediate actions before updating register",
      "CoC investigation steps",
      "Client communication outline",
      "Corrective action documentation"
    ],
    "modelAnswer": "Do not update register with negative for 2.08. Quarantine conclusion for affected locations; notify supervisor and PCBU same day; review CoC, photos, and collector notes; arrange re-sample from correct locations with independent witness/labelling check; document non-conformance in file notes and QA log. Transparent error disclosure to client with revised turnaround estimate.",
    "sourceNotes": "Reference: AS 4964 Method for the qualitative identification of asbestos in bulk samples; How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023).",
    "fictionalNotice": "Portside Warehouse is fictional. Sample IDs are training examples only."
  },
  {
    "id": "scenario-report-qa",
    "title": "Report Quality Assurance — Horizon Childcare Draft",
    "category": "reporting",
    "brief": "Fictional Horizon Childcare extension draft report errors: cites WEL exceedance in August 2026, Room 3 photo labelled Room 5, missing limitations for roof void.",
    "tasks": [
      "List all QA errors found",
      "Correct exposure standard language",
      "Draft limitations paragraph for roof void",
      "QA memo to author with priority ranking"
    ],
    "modelAnswer": "Errors: (1) WEL used before 1 Dec 2026 — correct to WES comparison with transition note; (2) photo mislabel — fix captions and cross-refs; (3) missing limitations — add 'Roof void not accessed — safe access not provided; asbestos status unassessed in roof void.' Priority: standard/date error (high), mislabel (high), limitations (high). Return draft for correction before client issue.",
    "sourceNotes": "Reference: Safe Work Australia — Workplace exposure standards for airborne contaminants; How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023).",
    "fictionalNotice": "Horizon Childcare is a fictional client for QA training."
  },
  {
    "id": "scenario-client-scope",
    "title": "Client Scope Clarification — Harborview Offices",
    "category": "consulting_practice",
    "brief": "Fictional Harborview Offices property manager requests tomorrow walk-through with no engagement letter, unclear PCBU, and expectation of 'full compliance certificate.'",
    "tasks": [
      "List minimum information required before work",
      "Draft scoping email bullets",
      "Explain what deliverable is in/out of scope",
      "Identify escalation if client refuses documentation"
    ],
    "modelAnswer": "Require: signed engagement, identified PCBU, site access/induction plan, description of proposed works, existing registers. Email: confirm QLD jurisdiction, clarify advisory inspection vs statutory clearance, propose register review + walk-through with written findings and limitations — not compliance certificate. If refused, decline fieldwork and refer to supervisor; document refusal in file notes.",
    "sourceNotes": "Reference: Work Health and Safety Act 2011 (Qld); How to Manage Work Health and Safety Risks Code of Practice 2021.",
    "fictionalNotice": "Harborview Offices is a fictional property scenario."
  }
];

export const MOCK_PROJECT: MockProjectSeed = {
  "id": "final-mock-2026-08-09",
  "title": "Westgate Logistics Hub — Integrated Pre-Refurbishment Mock Project",
  "brief": "Fictional Westgate Logistics Hub (1995 warehouse-office, Queensland) plans Level 1 office refurbishment including ceiling removal, plant room upgrade, and external concrete cutting. Complete capstone deliverables: scope review, inspection plan, sampling schedule, CoC draft, lab reconciliation exercise, findings with limitations, WHS framework summary, 100-question knowledge test, and five supervisor question responses. All businesses, addresses, and lab results are fictional training constructs.",
  "dueDate": "2026-08-09",
  "checklist": [
    "Review engagement scope and confirm fictional PCBU (Westgate Logistics Pty Ltd)",
    "Document missing information gaps (registers, plans, prior reports, access)",
    "Prepare pre-refurbishment hazmat inspection plan with stop conditions",
    "Review building information: era, construction type, plant rooms, refurbishment zones",
    "Identify likely hazmat: asbestos ceilings, lead paint, PCB switchgear, silica from concrete works",
    "Draft sample schedule with hold points for bulk asbestos and air monitoring if required",
    "Complete chain of custody form for scheduled samples (fictional lab batch WG-2026-08)",
    "Reconcile provided fictional lab results against CoC and field notes",
    "Draft findings and limitations section suitable for supervisor review",
    "Explain Queensland WHS framework hierarchy applied to this project",
    "Complete 100-question curriculum knowledge test (minimum 80% target under supervision)",
    "Prepare written answers to five supervisor questions on judgement and escalation"
  ]
};
