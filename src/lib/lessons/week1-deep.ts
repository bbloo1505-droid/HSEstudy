import type { DeepLessonPatch } from "./types";

/**
 * Consulting-depth Week 1 lessons.
 * Audience: Cert I Conservation/Ecosystem Management with some WHS —
 * bridging to Associate HSE consulting (Queensland).
 */
export const WEEK1_DEEP: Record<string, DeepLessonPatch> = {
  "w1-mon": {
    objectives: [
      "Map any WHS requirement to the correct instrument layer (Act, Regulation, approved code, standard, procedure)",
      "Explain PCBU and 'reasonably practicable' in consulting language clients understand",
      "State when an approved code of practice is more than 'optional guidance'",
      "Separate legal requirements from good practice and firm opinion in written advice",
      "Identify jurisdiction and currency checks before quoting model WHS materials",
      "Describe the consultant's role inside the framework without absorbing PCBU liability",
      "Draft a scope opening that names duty holder, instrument set, and limitations",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

In Cert I Conservation and Ecosystem Management you already used workplace health and safety language: hazard identification, PPE, site induction, safe work methods, and looking after yourself and others outdoors. That experience matters. You are not starting from a blank page.

What changes in Associate HSE consulting is the legal and professional frame. On a conservation site you were usually a worker or student following the PCBU's systems. At Prensa you will help clients understand their systems, find gaps, and recommend proportionate controls — often in buildings, industrial sites, and refurbishment projects where asbestos, chemicals, silica, and hygiene monitoring sit inside Queensland WHS law. You still take care of yourself on site. You also learn to speak precisely about who holds which duty, which instrument creates which obligation, and what your report can and cannot certify.

CORE CONCEPTS IN DEPTH

Queensland WHS law is a stack, not a single rulebook.

1. Work Health and Safety Act 2011 (Qld) — primary duties, definitions, consultation framework, offences, and regulator powers. Broad duties live here (especially the PCBU primary duty and officer due diligence).
2. Work Health and Safety Regulation 2011 (Qld) — more specific requirements for many hazards: hazardous chemicals, asbestos, high-risk work, and process details that the Act does not spell out day-to-day.
3. Approved codes of practice — practical guidance approved under the Act. They are not themselves the Act, but they are admissible evidence of what is reasonably practicable in many proceedings. Treating a code as "optional tips" is a common client misunderstanding.
4. Australian Standards and technical methods — how to sample, analyse, or design controls in a defensible technical way. They support compliance; they are not a substitute for identifying the legal duty holder.
5. Company procedures, SWMS, registers, AMPs — how a specific PCBU implements the stack. Useful and often contractually binding inside a site, but not "the law" unless they correctly reflect upstream requirements.

Safe Work Australia develops model WHS laws used across most jurisdictions. Queensland adopts and maintains its own Act and Regulation. When a client or a national template says "the model Act says…", you still check Queensland currency and any Queensland-specific variations. Always name the jurisdiction in advice.

"Reasonably practicable" is the central balancing idea. It is not "whatever is cheapest" and not "eliminate every theoretical risk regardless of cost". It weighs likelihood and degree of harm against availability, suitability, and cost of controls — at the time the decision is made. Consultants help clients reason through that balance with evidence. Consultants do not declare that a client has achieved absolute safety.

QUEENSLAND LEGAL AND TECHNICAL DETAIL

For graduate consulting, three practical distinctions prevent expensive mistakes:

- Requirement vs guidance vs opinion. A Regulation obligation is a requirement. An approved code describes a way to achieve compliance that a court may use as a benchmark. Your firm's recommended method may be good practice beyond the minimum. Label which is which in reports.
- Model vs Queensland. Do not paste model Act wording into a Queensland advice note without confirming the Queensland instrument. Prefer the Queensland Act and Regulation titles in your references.
- Enforceable duty vs consulting deliverable. The PCBU must ensure health and safety so far as is reasonably practicable. Your engagement letter defines what you will inspect, sample, or advise on. Missing areas become limitations, not silent assumptions of safety.

Workplace Health and Safety Queensland (WHSQ) is the regulator. You are not WHSQ. You do not issue improvement notices. You may recommend that a client seek legal advice or contact the regulator for specific enforcement questions, but your day job is technical advice and risk communication inside scope.

HOW CONSULTANTS ACTUALLY USE THIS

Every engagement should open with four anchors:

1. Who is the client PCBU (or how duty holders overlap — owner, principal contractor, tenant)?
2. What is the work (inspection, register review, monitoring, survey recommendation)?
3. Which instruments are in play for that work in Queensland?
4. What is out of scope (areas not accessed, licensed removal, legal opinions, medical diagnosis)?

Example consulting language: "This advice addresses hazardous chemical register adequacy for the warehouse store under the Work Health and Safety Regulation 2011 (Qld) and the Managing risks of hazardous chemicals in the workplace Code of Practice 2021. It does not constitute a legal determination of compliance, nor approval for chemical processes outside the inspected store."

That sentence is longer than a casual site chat — and that is the point. Precision protects the client and your firm.

EDGE CASES AND JUDGEMENT CALLS

- Client says "just quote the law" but means their internal checklist. Ask which outcome they need: legal obligation mapping, gap against code, or improvement against good practice.
- Multi-PCBU sites (owner + principal contractor + subcontractors). Map who controls the work area you are entering before you write recommendations aimed at the wrong duty holder.
- Pressure to start tomorrow with no engagement letter. Decline fieldwork until scope and PCBU are documented. Your Cert I habit of "don't enter without induction" upgrades to "don't advise without scope".
- National clients sending NSW or model templates. Localise to Queensland before issuing.

SELF-CHECK BEFORE YOU MOVE ON

Without notes, can you: (1) list the five layers of the stack; (2) define PCBU and reasonably practicable in two sentences each; (3) explain why approved codes matter in a dispute; (4) write a one-paragraph limitations statement for a fictional walk-through? If any answer is fuzzy, re-read that section and make flashcards tonight.`,
    terminology: [
      { term: "PCBU", definition: "Person Conducting a Business or Undertaking — primary duty holder who must ensure health and safety so far as is reasonably practicable." },
      { term: "Reasonably practicable", definition: "What could reasonably be done at the relevant time, weighing likelihood and severity of harm against availability, suitability and cost of measures." },
      { term: "Approved code of practice", definition: "Practical guidance approved under the WHS Act; admissible in proceedings as evidence of what is reasonably practicable." },
      { term: "WHSQ", definition: "Workplace Health and Safety Queensland — regulator administering and enforcing Queensland WHS laws." },
      { term: "Model WHS laws", definition: "National model instruments developed by Safe Work Australia; Queensland adopts its own Act and Regulation versions." },
      { term: "Jurisdiction", definition: "The legal territory whose WHS laws apply — for this curriculum, Queensland unless a job is explicitly elsewhere." },
      { term: "Limitation", definition: "Explicit statement of what was not inspected, sampled, or authorised — required in defensible consulting reports." },
      { term: "Upstream duty", definition: "Duties of designers, manufacturers, importers and suppliers regarding plant, substances and structures." },
    ],
    consultingRelevance: `Your first week on real jobs will not be "recite the Act". It will be clarifying who the PCBU is, what instrument set applies, and what your scope covers. Misidentifying those three items makes every later finding fragile. Clients often speak loosely ("make us compliant", "sign off the building"). Your value is translating that into a scoped Queensland WHS engagement with clear limitations.`,
    workedExample: `Fictional client: Riverside Commercial Pty Ltd, Brisbane CBD office tower (built 1981). Property manager emails: "Can you make Level 8 compliant before the fit-out starts Monday?"

Step 1 — Clarify PCBU. Building owner may be PCBU for the workplace; principal contractor may be PCBU for construction work. Ask who engages you and who controls the fit-out.

Step 2 — Translate "compliant". Compliant with what? Asbestos information before disturbance? Hazardous chemicals in a cleaner's store? Both? Get a written scope.

Step 3 — Instrument map. For asbestos information and management: WHS Act and Regulation (Qld) plus How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023). For chemicals in the cleaner's store: hazardous chemicals provisions and the hazchem code.

Step 4 — Engagement boundaries. You may review registers, inspect accessible areas, recommend pre-refurbishment survey, and list gaps. You do not "make Level 8 compliant" by walking through once, and you do not authorise unlicensed asbestos removal.

Step 5 — Opening paragraph for the file: name PCBU, jurisdiction, instruments, scope, and that advice is not a legal determination.`,
    scenarioModel: `Do not attend tomorrow without documented scope. Reply same day: thank them; explain WHS advice must be tied to an identified PCBU and written engagement; offer a short scoping call today covering jurisdiction (Queensland), building age, planned works, existing asbestos/hazchem registers, and whether the visit is advisory inspection or part of a regulated process. Provide a one-page scope template: objectives, areas, exclusions, deliverable type, and limitations. Only after the engagement letter (or equivalent written instruction) is clear do you schedule induction and site access. If they insist on "just a quick look", explain that undocumented advice still creates professional risk and poor client outcomes — offer a paid mini-scope instead of a free undocumented visit.`,
    commonMistakes: [
      "Treating company procedures as if they were the Act",
      "Quoting model WHS wording without confirming Queensland adoption",
      "Starting site work with no documented PCBU and scope",
      "Presenting guidance notes or your opinion as a legal determination",
      "Promising 'compliance' without defining the instrument and the work",
      "Assuming the property manager is automatically the PCBU",
      "Omitting limitations because the client wants a short email",
      "Skipping currency checks on codes that were varied (e.g. asbestos codes 2023)",
    ],
    summary: `Queensland WHS is a stack: Act → Regulation → approved codes → standards → procedures. Consultants clarify PCBU, jurisdiction, scope and limitations before advice. Your Cert I WHS habits (induction, care for others) remain; the new skill is precise duty-holder and instrument language.`,
    sessionPlan: `Extended weekday study (about 2.5 hours): 15 min bridge from Cert I experience and vocabulary refresh; 40 min deep read of hierarchy and reasonably practicable; 30 min skim Act/Regulation contents pages in your document library (structure only — do not try to memorise every clause); 25 min worked example write-up in your notes; 20 min scenario attempt then reveal; 20 min quiz + flashcards for weak terms.`,
  },

  "w1-tue": {
    objectives: [
      "Distinguish PCBU primary duty from officer due diligence in plain consulting language",
      "Explain worker and other-person duties and how consultants fit on site",
      "Describe consultation obligations and when HSR involvement should be checked",
      "Map escalation paths: site contact → client PCBU → your supervisor → (rarely) regulator advice channels",
      "Avoid absorbing legal liability that belongs to duty holders",
      "Handle 'consultants don't need induction' pushback professionally",
      "Identify upstream duty holders when plant, substances or structures are in scope",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

In conservation fieldwork you already practised reasonable care: follow instructions, wear PPE, look after teammates, report hazards. Under the WHS Act those behaviours sit inside worker and other-person duties. Consulting adds a second layer: you advise organisations that hold PCBU duties, and you interact with officers who must exercise due diligence. You are still obliged to take reasonable care for yourself — and you must not pretend your advice replaces the PCBU's legal role.

CORE CONCEPTS IN DEPTH

Duty holders are not a hierarchy of "importance" so much as a map of different obligations:

- PCBU — primary duty to ensure health and safety of workers and others so far as is reasonably practicable. Includes providing safe systems, plant, structures, facilities, information, training and supervision.
- Officers — must exercise due diligence to ensure the PCBU complies. Due diligence includes keeping up-to-date knowledge of WHS matters, understanding operations and hazards, ensuring resources and processes, and verifying those processes are used. Officers cannot outsource due diligence to a consultant and walk away.
- Workers — reasonable care for self and others; comply with reasonable instructions; cooperate with policies.
- Other persons at workplaces — visitors, some contractors in certain contexts, and often you on a client site: reasonable care and compliance with reasonable directions.
- Upstream duty holders — designers, manufacturers, importers, suppliers of plant, substances and structures.

Consultation is a legal requirement for PCBUs when workers are likely to be directly affected — including identifying hazards and deciding on controls. Health and safety representatives (HSRs), where elected, have defined consultation and inspection rights. On Queensland sites you should ask whether HSRs exist for the work group and whether your findings will feed into consultation — especially before refurbishment that disturbs materials or changes work methods.

HOW CONSULTANTS ACTUALLY USE THIS

In scoping meetings, write down: PCBU name, site contact, principal contractor (if any), whether HSRs should be notified, and who receives recommendations. When you find a serious uncontrolled risk, your job is usually to notify the client contact and your supervisor immediately — not to "shut the site" as if you were an inspector, and not to quietly leave it undocumented.

Useful escalation ladder for graduates:
1. Make the area safe for yourself (stop, withdraw, barrier if authorised).
2. Notify site contact / supervisor on site.
3. Notify your consulting supervisor.
4. Document time, observation, who was told, and interim controls observed.
5. PCBU decides operational stoppages; regulator engagement is a PCBU/legal decision unless imminent danger protocols in your firm say otherwise.

EDGE CASES AND JUDGEMENT CALLS

- Project manager speaking confidently is not proof they are the PCBU.
- "Other person" status does not exempt you from induction, permits, or exclusion zones.
- Advising a worker directly to refuse work without involving the PCBU can create confusion; use firm escalation protocols.
- Multiple PCBUs on one site: recommendations must name who should act.

SELF-CHECK BEFORE YOU MOVE ON

Explain in 90 seconds: PCBU vs officer vs worker vs you-as-consultant. Then list three questions you ask in every kickoff about consultation and HSRs.`,
    terminology: [
      { term: "Officer", definition: "Person who makes or participates in decisions affecting the whole or a substantial part of the business; must exercise due diligence." },
      { term: "Due diligence", definition: "Officer obligation to acquire WHS knowledge, understand hazards, ensure resources/processes, and verify they are used." },
      { term: "HSR", definition: "Health and safety representative elected by workers in a work group, with consultation and related rights under the Act." },
      { term: "Consultation", definition: "PCBU duty to consult workers likely to be directly affected by WHS matters — not optional courtesy." },
      { term: "Other person", definition: "Person at a workplace who is not a worker of that PCBU — still owes reasonable care and must follow reasonable directions." },
      { term: "Upstream duty", definition: "Duties of designers, manufacturers, importers and suppliers regarding plant, substances and structures." },
      { term: "Escalation", definition: "Structured path for raising uncontrolled risk to site contacts, consulting supervisors and the client PCBU." },
      { term: "Work group", definition: "Group of workers represented by an HSR where one is elected." },
    ],
    consultingRelevance: `Scoping that skips duty-holder and consultation questions produces reports aimed at the wrong person and fieldwork that blindsides HSRs or contractors. Supervisors notice graduates who ask these questions early.`,
    workedExample: `Fictional Northbank School refurbishment. PCBU for construction: appointed principal contractor. School P&C may retain duties for ongoing school workplace areas. You confirm in writing who engages Prensa-style consulting, who controls the strip-out area, and whether HSRs or staff consultation is required before intrusive ceiling works. You document that your role is hazmat identification support — not sign-off of the contractor WHS management plan, and not a substitute for officer due diligence.`,
    scenarioModel: `Insist on full induction and hazard briefing. Calmly explain you are an other person (or contractor) at the workplace with duties to follow reasonable directions and take reasonable care. Request emergency procedures, asbestos/no-go zones, permit requirements, and escort rules. If refused, do not proceed; notify your supervisor and the client PCBU contact in writing that access without induction is outside safe work practice. Offer to reschedule once induction is arranged. Never accept "consultants don't count" as a legal or practical exemption.`,
    commonMistakes: [
      "Assuming consultants are exempt from site rules",
      "Advising workers to stop work without involving the PCBU and your supervisor",
      "Confusing project manager authority with PCBU status",
      "Ignoring HSR/consultation questions on refurbishment jobs",
      "Writing recommendations with no named duty holder",
      "Treating officer due diligence as something your report can 'complete' for directors",
      "Skipping induction to save time",
      "Discussing serious risk only in a casual hallway chat with no file note",
    ],
    summary: `Duties are shared: PCBU (primary), officers (due diligence), workers and others (reasonable care). Consultants support compliance; they do not replace duty holders. Consultation and HSR awareness are part of professional scoping.`,
    sessionPlan: `About 2.5 hours: 20 min Cert I → consulting duty bridge; 40 min PCBU/officer/worker deep study; 25 min consultation and HSR; 25 min escalation role-play notes; 20 min scenario; 20 min quiz and flashcards.`,
  },

  "w1-wed": {
    objectives: [
      "Apply identify–assess–control–review to consulting engagements and site findings",
      "Recommend controls in hierarchy order with plain justification",
      "Document residual risk and inaccessible areas without false certainty",
      "Separate engagement risk (scope, access, pressure) from occupational risk",
      "Write risk language that clients can action without legal overclaim",
      "Challenge PPE-first proposals with higher-order alternatives",
      "Link hazmat/hygiene findings into client risk registers proportionately",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Cert I already taught hazard spotting and basic controls: eliminate where possible, isolate, use procedures, wear PPE. Consulting uses the same hierarchy — with more formal assessment, clearer residual risk language, and ruthless honesty about what you did not see.

CORE CONCEPTS IN DEPTH

Risk management process (across general code and many hazard-specific codes):
1. Identify hazards — what can harm health or safety?
2. Assess risks — who is exposed, how, how often, how severe if controls fail?
3. Control risks — hierarchy of controls.
4. Review — after change, after incident, and at planned intervals.

Hierarchy (highest to lowest preference): elimination → substitution → engineering → administrative → PPE. PPE is not "the consulting answer"; it is often an interim or residual layer while higher controls are designed.

Engagement risk is the consulting twin of occupational risk: unclear scope, inaccessible roof spaces, unverified registers, client pressure to conclude "all clear", and schedule pressure before demolition. Document these as limitations and hold points — they are part of professional risk management.

QUEENSLAND LEGAL AND TECHNICAL DETAIL

The How to manage work health and safety risks Code of Practice 2021 is your general map. Hazard-specific codes (asbestos, hazardous chemicals, silica) add detail for those agents. The Regulation imposes specific risk management duties for particular hazards. Your reports should show identifiable hazards, exposure pathways, and hierarchy-aligned recommendations — not a colour matrix with no narrative.

HOW CONSULTANTS ACTUALLY USE THIS

Good recommendation pattern:
- Hazard and location
- Who could be exposed and during which task
- Current controls observed (or absent)
- Recommended controls in hierarchy order
- Residual risk / what remains uncertain
- What must happen before work proceeds (hold point)

Bad pattern: "Use P2 masks" as the only line for damaged suspected ACM.

EDGE CASES AND JUDGEMENT CALLS

- Inaccessible areas: "not assessed" beats invented "low risk".
- Client wants every space rated green for insurance optics: refuse assumption ratings.
- Matrix scores without exposure pathway narrative: weak for consulting files.
- Temporary administrative controls can be appropriate for hours/days — say so explicitly and define the next higher-order step.

SELF-CHECK BEFORE YOU MOVE ON

Take a fictional damaged ceiling tile. Write a five-line hierarchy recommendation set. If your first line is PPE, rewrite until elimination/isolation appears first.`,
    terminology: [
      { term: "Hierarchy of controls", definition: "Preferred order: elimination, substitution, engineering, administrative, PPE." },
      { term: "Residual risk", definition: "Risk remaining after controls — must be stated and reviewed." },
      { term: "Reasonably foreseeable", definition: "Hazards and scenarios a reasonable person would anticipate in the circumstances." },
      { term: "ALARP", definition: "As low as reasonably practicable — reduce risk until further measures are grossly disproportionate to the benefit." },
      { term: "Hold point", definition: "Stage where work pauses until a condition is met (e.g. licensed assessment before disturbance)." },
      { term: "Engagement risk", definition: "Professional risk from unclear scope, access gaps, or pressure to over-conclude." },
      { term: "Exposure pathway", definition: "How a hazard reaches a person — inhalation, dermal, ingestion, etc." },
      { term: "Qualitative assessment", definition: "Structured non-measurement judgement of risk used before or instead of monitoring." },
    ],
    consultingRelevance: `Inspection plans, sampling strategies and report recommendations live or die on risk process quality. Supervisors look for hierarchy order, inaccessible-area honesty, and hold points — not decorative heat maps.`,
    workedExample: `Fictional warehouse roof leak. Damaged ceiling material is suspected ACM above a packing aisle. You stop work in the zone for your own safety, recommend barrier/isolation, notify site contact, and write: eliminate/isolate disturbance; engage licensed assessment; prohibit unlicensed removal; administrative access control; RPE only as part of a controlled assessment/removal plan — not as permission to keep packing under the damaged area. Document that adjacent aisles were not opened above ceiling level — limitation stated.`,
    scenarioModel: `Document inaccessible roof spaces explicitly as "not assessed — safe access not provided". Assess only areas you reached with evidence. Do not assign "low risk" by assumption. Recommend engineered access, prior survey retrieval, or targeted inspection when safe means exist. Explain to the client that false low ratings create liability for them and for your firm. Offer a fee variation for remobilisation with proper access equipment.`,
    commonMistakes: [
      "Jumping to PPE before higher-order controls",
      "Conflating a risk matrix colour with legal compliance",
      "Omitting inaccessible areas from the narrative",
      "Generic boilerplate with no site-specific hazards",
      "Calling something low risk because it was not inspected",
      "No hold point before likely disturbance",
      "Ignoring engagement risk (scope pressure) in file notes",
      "Recommendations with no named person/role to action them",
    ],
    summary: `Identify, assess, control, review — hierarchy first, honest residual risk, explicit gaps. PPE is rarely the whole answer.`,
    sessionPlan: `About 2.5 hours: 15 min Cert I control refresh; 40 min hierarchy deep dive with hazmat examples; 30 min writing control packages; 25 min inaccessible-area language drill; 20 min scenario; 20 min quiz.`,
  },

  "w1-thu": {
    objectives: [
      "Explain GHS label elements you will actually use on audits",
      "Navigate SDS sections to extract storage, PPE, first aid and incompatibility",
      "Run a register-to-shelf reconciliation method end to end",
      "Flag shadow chemicals, ghost entries, decants and SDS currency gaps",
      "Outline when manifest/placard thinking becomes relevant on larger sites",
      "Link register gaps to risk assessment and procurement fixes",
      "Write findings that procurement and site managers can action",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

You have handled fuels, herbicides, solvents or workshop chemicals in conservation contexts. Labels and SDS were part of safe use. Consulting asks a harder question: does the PCBU's system (register + SDS access + labelling + storage) match reality on the shelf — and can workers get the information they need?

CORE CONCEPTS IN DEPTH

GHS (Globally Harmonized System) underpins classification and labelling in Australian WHS regulations. On site you use pictograms, signal words, hazard and precautionary statements to recognise hazards quickly — you are not usually re-classifying products in a lab.

SDS (Safety Data Sheet) is the structured information pack: identity, hazards, composition, first aid, firefighting, accidental release, handling/storage, exposure controls/PPE, physical/chemical properties, stability, toxicology, ecological info, disposal, transport, regulatory info. Learn to move fast to the sections that answer consulting questions (often identity, hazards, handling/storage, exposure controls, toxicology).

Hazardous chemicals register: workplace record of hazardous chemicals with product identifiers and SDS access. Reconciliation method:
1. Obtain register and SDS library access.
2. Walk storage locations with a second person if possible.
3. Match each container to a register line (or flag shadow chemical).
4. Match each register line to a container (or flag ghost entry).
5. Check labels on decanted containers.
6. Check SDS currency and accessibility for workers.
7. Note segregation, bunding, ignition sources, and quantity triggers for further obligations.
8. Prioritise findings by toxicity, quantity, storage failure, and use frequency.

QUEENSLAND LEGAL AND TECHNICAL DETAIL

Managing risks of hazardous chemicals in the workplace Code of Practice 2021 is your practical guide alongside the WHS Regulation hazardous chemicals provisions. Larger inventories may trigger manifest and placarding obligations — know that thresholds exist and escalate to supervisor/specialist when quantities look significant. Do not invent threshold numbers from memory in client reports; verify against current Regulation schedules and firm references.

HOW CONSULTANTS ACTUALLY USE THIS

Register reviews are high-frequency billable work. Your credibility is in methodical reconciliation and proportionate recommendations: label that drum today; obtain SDS this week; redesign segregation next maintenance window; review manifest applicability with a senior if volumes are large.

EDGE CASES AND JUDGEMENT CALLS

- "Just cleaners" — still check SDS; many are hazardous.
- Trade-name only drums — photograph, isolate from misuse, obtain identity.
- Shared stores across tenants — clarify which PCBU controls the store.
- QR-code SDS libraries that do not work offline in the shed — accessibility gap.

SELF-CHECK BEFORE YOU MOVE ON

Write the eight-step reconciliation method from memory. Open one SDS from your library and find storage incompatibilities and recommended PPE in under four minutes.`,
    terminology: [
      { term: "GHS", definition: "Globally Harmonized System of Classification and Labelling of Chemicals adopted in Australian WHS regulations." },
      { term: "SDS", definition: "Safety Data Sheet — manufacturer/importer document with hazard and control information." },
      { term: "Hazardous chemicals register", definition: "Workplace record of hazardous chemicals stored or used, with identifiers and SDS access." },
      { term: "Shadow chemical", definition: "Product on site but missing from the register." },
      { term: "Ghost entry", definition: "Register line with no corresponding product found on site." },
      { term: "Decanted container", definition: "Smaller vessel filled from bulk — must be labelled appropriately." },
      { term: "Manifest quantity", definition: "Threshold quantity triggering additional WHS Regulation obligations for certain chemicals — verify current thresholds; do not guess." },
      { term: "Pictogram", definition: "GHS hazard symbol on labels and SDS communicating hazard class at a glance." },
      { term: "SDS currency", definition: "SDS should be current — typically reviewed within five years or when formulation changes." },
    ],
    consultingRelevance: `Hazchem literacy is daily consulting currency. Clients judge graduates on whether findings are specific, photographed, prioritised and actionable — not on reciting GHS theory.`,
    workedExample: `Fictional Greenleaf Maintenance Co. Register lists three degreasers. Store walk finds twelve containers including two unlabelled 20 L drums and a decanted squeeze bottle marked only "clean". You photograph, map locations, request SDS from suppliers, tag unknowns "do not use until identified", recommend interim segregation from oxidisers pending SDS, and draft a findings table: critical (unlabelled), high (no SDS), medium (decant label fix), low (SDS older than five years but product still matched).`,
    scenarioModel: `Inventory all containers; photograph labels and locations; do not accept "just cleaners" without SDS evidence. Update report scope to full store reconciliation. Recommend interim labelling and segregation until SDS obtained. Offer a revised register template for the PCBU. If any container cannot be identified, recommend supplier contact or specialist identification — not continued use.`,
    commonMistakes: [
      "Treating household cleaners as automatically non-hazardous",
      "Ignoring SDS revision dates",
      "Listing products without location and approximate quantity",
      "Missing potential manifest/placard issues on large sites",
      "Closing a review without a physical walk-through",
      "Calling a site compliant when SDS are missing",
      "Ignoring small decanted bottles in workshops and utes",
      "Inventing manifest threshold numbers from memory in the report",
    ],
    summary: `GHS and SDS underpin registers. Consulting value is shelf-to-register reconciliation, prioritised gaps, and actionable fixes — with verified thresholds when quantities are large.`,
    sessionPlan: `About 2.5 hours: 20 min GHS label drill; 40 min SDS navigation practice; 40 min reconciliation method on a fictional store list; 20 min findings table; 20 min quiz.`,
  },

  "w1-fri": {
    objectives: [
      "Separate hazard, exposure, dose and response in client-facing explanations",
      "Map exposure routes to control and monitoring choices",
      "Use SDS health information without overclaiming medical expertise",
      "Distinguish air monitoring from health monitoring and say who does each",
      "Explain acute vs chronic and why latency matters for asbestos/silica communication",
      "Flag sensitisers and carcinogens with appropriate seriousness and escalation",
      "Recommend specialist input at the right time (hygienist, RMP, supervisor)",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Outdoor and conservation work already exposed you to chemicals, dusts, bites, heat and fatigue. Toxicology for consulting is the disciplined language for how substances harm people — so you can read SDS health sections, choose between monitoring types, and avoid pretending to be a doctor.

CORE CONCEPTS IN DEPTH

- Hazard: intrinsic potential to cause harm.
- Exposure: contact over time (concentration × duration × frequency, simplified).
- Dose: amount absorbed or reaching the target.
- Response: health effect (irritation, sensitisation, disease).

High hazard + negligible exposure can be low risk. Moderate hazard + high exposure can be severe risk. Asbestos and silica show why "it looks fine today" is not the whole story — chronic disease can have long latency.

Routes: inhalation (often dominant for dusts/fibres/vapours), dermal absorption, ingestion (hand-to-mouth, poor hygiene), injection (rare, sharps). Controls and monitoring should match the route.

Air monitoring measures the environment (or breathing zone). Health monitoring is a medical program for workers, supervised by a registered medical practitioner (RMP), with consent and privacy rules. Confusing them is a classic graduate error.

QUEENSLAND LEGAL AND TECHNICAL DETAIL

Hazardous chemicals code and Regulation discuss health monitoring triggers for certain substances and circumstances. Workplace exposure standards for airborne contaminants (Safe Work Australia) support evaluation of inhalation exposure — detailed next week and in Week 3. Do not invent numerical limits; look them up for the assessment date. At August 2026 curriculum start, WES values are the usual comparison basis; WEL commence 1 December 2026 under transition — note the date when you write monitoring advice later.

HOW CONSULTANTS ACTUALLY USE THIS

When SDS Section 8 and 11 raise sensitisation or carcinogenicity, your report should: strengthen higher-order controls, consider whether exposure assessment is needed, and — if exposure may continue — recommend the PCBU take advice on health monitoring via an RMP. You provide the exposure scenario; you do not diagnose.

EDGE CASES AND JUDGEMENT CALLS

- Client asks you to "do health monitoring" while air sampling — clarify roles.
- Worker asks you to interpret blood results — decline; redirect to RMP/GP.
- Using LD50 from acute animal data to dismiss chronic inhalation risk — invalid leap.
- One air sample used to "clear" medical risk — wrong tool.

SELF-CHECK BEFORE YOU MOVE ON

In four sentences, explain hazard vs exposure vs air monitoring vs health monitoring to a fictional site manager who is in a hurry.`,
    terminology: [
      { term: "Hazard", definition: "Intrinsic potential of a substance or situation to cause harm." },
      { term: "Exposure", definition: "Contact of a person with a hazard over time." },
      { term: "Dose", definition: "Amount of substance absorbed or reaching the biological target." },
      { term: "TWA", definition: "Time-weighted average exposure over a reference period (often 8 hours) used with exposure standards." },
      { term: "Carcinogen", definition: "Agent capable of causing cancer — demands careful control and communication." },
      { term: "Sensitiser", definition: "Agent that can cause allergic hypersensitivity after exposure." },
      { term: "Health monitoring", definition: "Medical monitoring of workers for harm from work-related exposure — distinct from air monitoring." },
      { term: "RMP", definition: "Registered medical practitioner who supervises health monitoring programs." },
      { term: "Latency", definition: "Delay between exposure and clinically apparent disease — critical for asbestos and silica communication." },
    ],
    consultingRelevance: `Credible graduates connect SDS health information to pathways and the correct professional next step. Overclaiming medicine or underplaying chronic risk both damage trust.`,
    workedExample: `SDS for fictional SolvClean X notes respiratory sensitisation. You recommend LEV/ventilation review and suitable gloves, document that if exposure continues after engineering/admin controls the PCBU should obtain RMP advice on health monitoring, and explicitly state your firm is not providing clinical assessment. Air monitoring may later verify vapour controls — separate work package.`,
    scenarioModel: `Explain clearly: air monitoring measures airborne concentrations; health monitoring is a medical program under WHS laws requiring an RMP and worker consent. You may recommend the PCBU obtain health monitoring if exposure risk remains; you do not perform clinical tests or interpret medical results. Offer to document the exposure scenario for the PCBU to take to their medical provider. Escalate to your supervisor if the client pressures you to "just do the bloods".`,
    commonMistakes: [
      "Using LD50 alone to dismiss chronic inhalation risks",
      "Recommending health monitoring without mentioning RMP involvement",
      "Confusing STEL exceedances with biological exposure indices",
      "Diagnosing occupational disease from air data",
      "Interpreting a worker's medical results on site",
      "Treating air monitoring as proof that health monitoring is unnecessary in all cases",
      "Alarmist language without control pathway",
      "Inventing exposure limit numbers in conversation",
    ],
    summary: `Hazard, exposure, dose, response frame advice. Match routes to controls. Air monitoring ≠ health monitoring. Chronic latency matters. Stay in consulting scope.`,
    sessionPlan: `About 2.5 hours: 25 min concepts; 30 min routes and chronic disease examples; 30 min SDS Sections 8/11 practice; 25 min boundaries role-play; 20 min quiz; 20 min flashcards.`,
  },

  "w1-sat": {
    objectives: [
      "Execute a full fictional hazchem register review with reconciliation table",
      "Prioritise findings by toxicity, quantity, storage and frequency of use",
      "Draft supervisor-ready findings with photos, gaps and owners",
      "Prepare procurement/SDS handover notes the client can use",
      "Apply hierarchy thinking to storage and labelling fixes",
      "Practise evidence discipline (photo index, no people without consent)",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Weekend workshops turn weekday theory into muscle memory. Treat this like a supervised job: method, evidence, priorities, clear writing.

CORE CONCEPTS IN DEPTH

Workshop target: fictional Apex Fabrication Pty Ltd (Queensland metal workshop). Deliverable: reconciliation table + prioritised findings + interim controls + questions for the client.

Method reminder: register → walk store → match both ways → SDS currency → labels/decants → segregation/bunding → prioritise → draft → QA.

Priority logic (example):
- Critical: unidentified product in use area; major incompatible storage; missing SDS for frequently used toxic/flammable product.
- High: shadow chemicals; unlabelled decants; SDS inaccessible to night shift.
- Medium: ghost entries; SDS older than five years with unchanged product still verified.
- Low: minor location description improvements.

HOW CONSULTANTS ACTUALLY USE THIS

Your Saturday output should look like something a supervisor can edit into a client memo in 15 minutes — not a stream of consciousness.

SELF-CHECK BEFORE YOU MOVE ON

Can another graduate follow your findings table without asking you what "drum near door" means? If not, add location IDs.`,
    terminology: [
      { term: "Reconciliation table", definition: "Working table matching register lines to physical containers and SDS status." },
      { term: "Priority finding", definition: "Gap ranked by harm potential and urgency of fix." },
      { term: "Interim control", definition: "Short-term measure while permanent fixes are arranged." },
      { term: "Photo index", definition: "List linking photo filenames to locations and findings." },
      { term: "Handover note", definition: "Short client-facing list of procurement/SDS actions with owners." },
      { term: "QA pass", definition: "Self-review for consistency before supervisor review." },
    ],
    consultingRelevance: `Register reviews are repeatable revenue work. Speed comes from method, not from skipping the walk-through.`,
    workedExample: `Apex register lists Welding Gas Mixture A with 2020 SDS. You verify cylinder tags, request updated SDS, note segregation from oxidisers is adequate, and mark "pending SDS update" rather than "compliant". Unlabelled solvent drum becomes critical finding with interim "do not use" tag and ignition-source check.`,
    scenarioModel: `Photograph drum and context; isolate from ignition sources if indoors; tag identity unknown — do not use until SDS obtained; recommend PCBU contact supplier or arrange identification; add critical finding with interim storage controls; notify site supervisor before leaving site; file photo index entry SOLVENT-DRUM-01.`,
    commonMistakes: [
      "Desktop-only review with no walk-through",
      "Deleting register lines without client confirmation",
      "Issuing compliant when SDS missing",
      "Ignoring utes and satellite cabinets",
      "Photos without captions or IDs",
      "No interim controls for critical unknowns",
      "Mixing critical and cosmetic issues with no priority",
      "Writing findings only the author can decode",
    ],
    summary: `Workshop = document check + physical reconciliation + prioritised findings + interim controls + clear handover.`,
    sessionPlan: `Weekend block (about 3 hours): 30 min method briefing; 75 min simulated register/store audit; 45 min draft findings table; 30 min QA and quiz subset.`,
  },

  "w1-sun": {
    objectives: [
      "Closed-book recall of WHS stack, duty holders, hierarchy and hazchem method",
      "Integrate topics in a single consulting-style scenario answer",
      "Identify weak areas before asbestos week",
      "Practise timed explanation suitable for supervisor questions",
      "Update flashcards from missed quiz items",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Review days are where Cert I discipline helps: you already know how to practise procedures under time pressure. Today you prove you can explain Week 1 without leaning on the page.

CORE CONCEPTS IN DEPTH

Closed-book targets:
1. Legislative stack and why codes matter.
2. PCBU vs officer vs worker vs consultant.
3. Hierarchy with a hazchem example at each level.
4. Register reconciliation steps.
5. Air monitoring vs health monitoring in one crisp contrast.

Integrated scenario practice: client wants same-day "hazchem clearance certificate". Your answer should refuse the magic certificate, offer scoped register review, name instruments, apply hierarchy, and state limitations.

HOW CONSULTANTS ACTUALLY USE THIS

Supervisors ask short oral questions. Practise 60–90 second answers. Clarity beats jargon density.

SELF-CHECK BEFORE YOU MOVE ON

Score yourself honestly. Anything below "can teach a teammate" becomes Monday flashcard work before asbestos content lands.`,
    terminology: [
      { term: "Closed-book recall", definition: "Testing memory without notes — simulates field and supervisor questions." },
      { term: "Integrated scenario", definition: "Exercise combining multiple topics like a real job." },
      { term: "Oral drill", definition: "Timed spoken explanation practised aloud." },
      { term: "Gap list", definition: "Personal list of weak concepts for flashcards." },
      { term: "Clearance myth", definition: "Client request for a one-page 'all clear' that is not a valid substitute for scoped assessment." },
    ],
    consultingRelevance: `Week 2–3 content assumes Week 1 fluency. Weak foundations show up as hesitant site talk and fuzzy report openings.`,
    workedExample: `Timed drill (5 minutes): list hierarchy of controls with one hazchem example each. Compare to model. Second drill (90 seconds spoken): explain PCBU vs officer. Record yourself if useful.`,
    scenarioModel: `You cannot issue a generic statutory hazchem clearance unless a specific authorised process applies (it usually does not for a casual request). Offer a scoped register review and site reconciliation, written findings with limitations, hierarchy-based recommendations, and confirmation of PCBU/scope in writing. Explain certificates and clearances are specific instruments — not marketing language. Escalate fee/scope if they need rush turnaround.`,
    commonMistakes: [
      "Cramming code titles without understanding the stack",
      "Skipping duty-holder basics because they feel 'easy'",
      "Treating review day as optional",
      "Not writing a personal gap list",
      "Practising only multiple choice, never spoken answers",
      "Promising clearance language under time pressure",
    ],
    summary: `Consolidate QLD WHS stack, duties, risk hierarchy, hazchem registers — then enter asbestos week with a gap list, not vibes.`,
    sessionPlan: `About 3 hours: 30 min terminology oral drill; 50 min closed-book quiz block; 40 min integrated scenario write-up; 40 min error review + Week 2 preview + flashcards.`,
  },
};
