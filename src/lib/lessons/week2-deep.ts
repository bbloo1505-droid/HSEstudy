import type { DeepLessonPatch } from "./types";

/** Consulting-depth Week 2 — asbestos, other hazmat, silica. */
export const WEEK2_DEEP: Record<string, DeepLessonPatch> = {
  "w2-mon": {
    objectives: [
      "Describe common ACM product forms in Queensland buildings by era",
      "Distinguish friable vs non-friable and explain why disturbance changes risk",
      "Explain major asbestos-related diseases and latency in client-safe language",
      "Apply Queensland licensing triggers: Class A (friable) and >10 m² non-friable",
      "State consultant boundaries: identify/assess/recommend vs licensed removal",
      "Challenge DIY removal proposals with correct licensing advice",
      "Reference current asbestos codes (varied 2023) without inventing clause numbers",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Conservation and land management sometimes intersect with old buildings, dumps, pipes and legacy materials. You may already treat unknown dusty materials with caution. Asbestos consulting formalises that caution: product recognition by era, friability, licensing, registers, and strict boundaries on who may remove what.

CORE CONCEPTS IN DEPTH

Asbestos types commonly discussed: chrysotile, amosite, crocidolite (and others less often). All require controlled management when disturbance can release respirable fibres. Health outcomes include asbestosis, lung cancer and mesothelioma — often with decades of latency. That latency is why "nobody got sick today" is never proof of safe practice.

Friable asbestos: when dry, can be crumbled or reduced to powder by hand pressure — higher fibre release potential. Non-friable: bonded in a matrix (e.g. asbestos cement). Poor condition, weathering, abrasion or power tools can make bonded materials behave more like a high-release problem during work. Disturbance is the consulting keyword: drilling, cutting, grinding, breakage, demolition.

Common product forms: corrugated AC roofing/eaves, flat AC sheeting, vinyl tiles and adhesives, mastics, gaskets, some insulation and sprayed coatings (less common but critical when present), electrical backing boards, and more. Building era guides suspicion; only lab confirmation proves presence (unless presumed ACM is deliberately adopted as a conservative management approach).

QUEENSLAND LEGAL AND TECHNICAL DETAIL

Primary practical references:
- Work Health and Safety Regulation 2011 (Qld) — asbestos duties and licensing framework.
- How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023).
- How to Safely Remove Asbestos Code of Practice 2021 (varied 2023).

Licensing anchors every graduate must know:
- Friable asbestos removal → Class A licensed removalist.
- Non-friable removal exceeding 10 m² → licensed asbestos removal business.
Consultants identify, assess, recommend and support planning. Unless separately licensed, they do not remove ACM. Approved codes were varied in January 2023 — use current Queensland versions.

HOW CONSULTANTS ACTUALLY USE THIS

On day-one supervised jobs you will: recognise likely ACM, check register/AMP status, stop yourself from disturbing unknowns, photograph and locate precisely, and recommend licensed pathways. Your report language must never sound like a removal licence.

EDGE CASES AND JUDGEMENT CALLS

- "It's only eaves, DIY is fine" at 15 m² — licensing threshold applies.
- Good-condition AC roof ≠ permission for angle grinders.
- Pre-1990 does not mean every material contains asbestos; post-ban does not mean zero legacy products in all contexts — use era + product type + testing strategy.
- Intrusive sampling without training/authorisation — out of bounds.

SELF-CHECK BEFORE YOU MOVE ON

Explain friable vs non-friable, the 10 m² rule, and Class A — in under two minutes — then give one fictional client DIY refusal script.`,
    terminology: [
      { term: "ACM", definition: "Asbestos-containing material — any material containing asbestos." },
      { term: "Friable asbestos", definition: "Material that when dry can be crumbled or powdered by hand pressure." },
      { term: "Non-friable asbestos", definition: "Asbestos bonded in a matrix (e.g. cement) — still hazardous if disturbed incorrectly." },
      { term: "Class A licence", definition: "Queensland licence required for friable asbestos removal work." },
      { term: "Disturbance", definition: "Activity that can generate or release asbestos fibres." },
      { term: "Latency", definition: "Long delay between exposure and disease onset." },
      { term: "Presumed ACM", definition: "Material treated as asbestos until proven otherwise based on type/era." },
      { term: "Licensed removal business", definition: "Business licensed for asbestos removal work as required by Queensland law for the material/area." },
    ],
    consultingRelevance: `Misclassifying friability or licensing triggers pushes clients toward illegal removal and creates professional risk. This is non-negotiable fluency before unsupervised talk with contractors.`,
    workedExample: `Fictional Lakeside Units (1972): corrugated AC roofing in brittle but intact condition. Classify as non-friable ACM in good-fair condition; recommend manage in situ with maintenance protocol; prohibit grinding; note removal >10 m² requires licensed removers. Photograph elevations, mark register recommendation, and record that roof space under sheeting was not opened — limitation.`,
    scenarioModel: `Advise that non-friable removal over 10 m² requires a licensed asbestos removal business in Queensland. DIY at 15 m² is not compliant. Recommend licensed removers, update of asbestos register after works, and air monitoring/clearance processes as required by the removal plan and codes. Put advice in writing to the PCBU; notify your supervisor if they intend to proceed illegally.`,
    commonMistakes: [
      "Calling all AC 'safe' regardless of planned disturbance",
      "Ignoring the 10 m² non-friable licensing threshold",
      "Assuming pre-1990 means asbestos in every material",
      "Performing intrusive sampling without competence and authorisation",
      "Sounding like you are authorising removal in email language",
      "Using outdated pre-variation code printouts",
      "Forgetting latency when clients minimise risk",
      "Not documenting condition and location precisely",
    ],
    summary: `Know ACM forms, friability, health/latency, and QLD licensing. Consultants identify and recommend; licensed removers remove.`,
    sessionPlan: `About 2.5 hours: 20 min health/latency; 40 min friable/non-friable and products; 30 min licensing drills; 25 min case photos/notes; 25 min scenario + quiz.`,
  },

  "w2-tue": {
    objectives: [
      "Explain asbestos register and AMP purposes and currency expectations",
      "Differentiate management surveys from pre-refurbishment/demolition surveys",
      "Critique register entries for location specificity, condition and actions",
      "Match survey intensity to proposed disturbance scope",
      "Recommend re-survey after damage, leaks or building change",
      "Link register findings to AMP actions in recommendations",
      "Refuse 'register is good enough' pressure when scope exceeds coverage",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

You already understand that plans and registers only help if they match the real site. Asbestos registers are the same idea with higher stakes: wrong or vague entries become illegal disturbance waiting to happen.

CORE CONCEPTS IN DEPTH

Asbestos register: identifies or assumes ACM locations, material types, condition, and often risk/action ratings. Must be kept up to date — especially before refurbishment or demolition.

Asbestos Management Plan (AMP): how the PCBU will manage asbestos risks — roles, inspection frequency, disturbance procedures, training, emergency response. Register without a living AMP is incomplete management.

Survey types:
- Management survey — supports ongoing occupancy and minor works; limited intrusion.
- Pre-refurbishment / pre-demolition survey — more intrusive; aims to find ACM that proposed works will disturb.

A 2015 management survey that never opened ceiling cavities is not automatically adequate for a 2026 strip-out of those cavities.

Review checklist: metadata (date, author, next review); location specificity; photos/plans; condition ratings; presumed vs confirmed; AMP cross-links; comparison to proposed zones of disturbance.

QUEENSLAND LEGAL AND TECHNICAL DETAIL

Use How to Manage and Control Asbestos in the Workplace Code of Practice 2021 (varied 2023) as your practical frame with the Regulation. Do not invent clause numbers. Focus on outcomes: adequate information before work that may disturb ACM.

HOW CONSULTANTS ACTUALLY USE THIS

Register reviews are volume graduate work. Your memo should say: what is adequate, what is vague, which disturbance zones are uncovered, and what survey upgrade is recommended — without pretending your desktop review is a new survey certificate.

EDGE CASES AND JUDGEMENT CALLS

- Register updated last year but building flooded since — condition change → reassess.
- "Assumed ACM throughout" with no room IDs — not actionable for contractors.
- Client wants sign-off to avoid survey cost — explain PCBU duty and refuse false comfort.

SELF-CHECK BEFORE YOU MOVE ON

Given a fit-out plan and an old register, can you mark green (covered), amber (partial), red (not covered) zones in ten minutes?`,
    terminology: [
      { term: "Asbestos register", definition: "Document listing identified/assumed ACM with location and condition information." },
      { term: "AMP", definition: "Asbestos Management Plan — procedures for managing asbestos risks at the workplace." },
      { term: "Management survey", definition: "Survey supporting ongoing management; typically less intrusive than pre-refurbishment survey." },
      { term: "Pre-refurbishment survey", definition: "Intrusive survey before refurbishment to find ACM that may be disturbed." },
      { term: "Presumed ACM", definition: "Treated as asbestos until proven otherwise." },
      { term: "Zone of disturbance", definition: "Area affected by proposed works — must be covered by current asbestos information." },
      { term: "Register review memo", definition: "Consultant critique of register adequacy — not a new survey certificate." },
      { term: "Currency", definition: "Whether information still reflects building condition and layout today." },
    ],
    consultingRelevance: `Accurate register critique prevents illegal disturbance and creates clear upsell to proper survey — ethically and commercially.`,
    workedExample: `Fictional Metro Community Hall register lists assumed ACM ceiling tiles in Main Hall only. Kitchen extension affects an unsurveyed store. Recommend pre-refurbishment survey of store ceiling and penetrations before contractor mobilisation; update AMP actions for the project.`,
    scenarioModel: `Register is not sufficient after roof-leak damage. Recommend isolation of damaged zones, licensed inspection, register and AMP updates, and consultation with workers/contractors before repair. Document that condition change voids reliance on old ratings for the affected area.`,
    commonMistakes: [
      "Treating management survey as enough for all refurbishment",
      "Vague locations like 'throughout building'",
      "Omitting presumed ACM pending verification",
      "Failing to link register findings to AMP actions",
      "Desktop approval without comparing disturbance scope",
      "Calling a review memo a clearance",
      "Ignoring post-damage re-inspection need",
      "Copy-pasting register text as if it were your inspection",
    ],
    summary: `Registers and AMPs must be current, specific and matched to disturbance scope. Upgrade survey level when works go beyond prior access.`,
    sessionPlan: `About 2.5 hours: 25 min register/AMP; 35 min survey types; 40 min critique exercise; 20 min memo structure; 20 min quiz.`,
  },

  "w2-wed": {
    objectives: [
      "Justify bulk sampling decisions and minimising disturbance",
      "Complete chain of custody fields that survive supervisor/lab scrutiny",
      "Explain NATA lab role and PLM bulk identification at overview level",
      "Keep roles clear: planner, sampler, lab, licensed assessor, PCBU",
      "Hold register updates until results are verified and locations match",
      "Respond correctly to sample mix-ups and 'no asbestos detected' conflicts",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

You have likely collected environmental or soil samples with labels and custody thinking. Asbestos bulk sampling is the same discipline with fibre-release controls and stricter role boundaries.

CORE CONCEPTS IN DEPTH

Bulk sample: small representative piece of material for identification. Minimise dust (wetting/controls per guidance), client authorisation, competence, and repair/making-safe of sample points as required by procedure.

Chain of custody (CoC): who took what, where, when, and who held it until the lab. Location IDs must match plans and photos. Breaks in custody destroy defensibility.

Lab: NATA-accredited analysis (commonly PLM, with other techniques as needed). Results report presence/type (and sometimes estimate). Analyst certificate ≠ removal clearance certificate.

Roles: graduates may plan and reconcile long before they sample solo. Many firms use licensed asbestos assessors for sampling. Know the process either way.

HOW CONSULTANTS ACTUALLY USE THIS

Never update a register to "NAD" (no asbestos detected) if CoC room IDs disagree with your field notes. Investigate, resample, document the error.

EDGE CASES AND JUDGEMENT CALLS

- Client wants huge chunks "to be sure" — refuse destructive over-sampling.
- Pressure to guess before lab returns — use presumed ACM language if management requires interim control, but do not invent lab results.
- Air monitoring around sampling — follow firm/client procedure and supervisor direction.

SELF-CHECK BEFORE YOU MOVE ON

Fill a blank CoC from a fictional three-sample job without looking at a template. Then check you included collector, date/time, unique IDs, locations, and lab destination.`,
    terminology: [
      { term: "Chain of custody (CoC)", definition: "Documented trail of sample possession from collection through analysis." },
      { term: "Bulk sample", definition: "Physical specimen of building material for asbestos identification." },
      { term: "NATA", definition: "National Association of Testing Authorities — accreditation body for labs." },
      { term: "PLM", definition: "Polarised light microscopy — common bulk asbestos identification technique." },
      { term: "NAD", definition: "No asbestos detected — lab result that still depends on correct sample identity." },
      { term: "Licensed asbestos assessor", definition: "Competent/licensed role (as applicable) for certain asbestos assessment functions — follow QLD/firm requirements." },
      { term: "Making safe", definition: "Controls after sampling to leave the point in a stable, labelled condition per procedure." },
      { term: "Clearance certificate", definition: "Specific post-removal verification document — not the same as a bulk ID certificate." },
    ],
    consultingRelevance: `Sampling plans and CoC accuracy prevent wrong register entries and client disputes. This is reputational infrastructure.`,
    workedExample: `Fictional Portside Warehouse: three samples — vinyl adhesive, damaged ceiling texture, external fibre cement. CoC IDs match floor plan rooms; photos tagged; report draft holds conclusions until results return. Supervisor reviews plan before sampling day.`,
    scenarioModel: `Do not update register as negative. Investigate CoC vs field notes; inform supervisor and client; resample correct location with corrected labelling; document error and corrective action. Treat the original NAD as belonging to an uncertain location until resolved.`,
    commonMistakes: [
      "Large destructive samples without approval",
      "CoC IDs not matching site plan",
      "Updating register before verified results",
      "Confusing analyst certificate with clearance",
      "Sampling without competence/authorisation",
      "No photo link to sample point",
      "Guessing asbestos type from appearance alone in the client email",
      "Losing custody during courier handoff without signature",
    ],
    summary: `Justified sampling, intact CoC, NATA analysis, clear roles — results update registers only when traceable.`,
    sessionPlan: `About 2.5 hours: 20 min ethics/minimisation; 40 min CoC practical; 30 min lab result interpretation drill; 20 min roles; 20 min quiz.`,
  },

  "w2-thu": {
    objectives: [
      "Identify likely lead-paint contexts in older Queensland buildings",
      "Flag potential PCB equipment and ODS plant without DIY opening",
      "Explain SMF vs asbestos clearly to clients",
      "Integrate other hazmat into inspection plans and reports",
      "Recommend proportionate testing and specialist handlers",
      "Avoid alarmism while refusing to ignore non-asbestos hazmat",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Environmental management training often includes contaminated land thinking, chemical caution and waste concepts. Other hazardous building materials extend that mindset indoors: lead paint, PCBs in older electrical gear, SMF insulation, ODS in refrigeration.

CORE CONCEPTS IN DEPTH

Lead-based paint: common in older buildings and industrial coatings; hazard spikes when sanding, burning, dry scraping — especially where children or sensitive occupants are involved in residential conversions.

PCBs: older capacitors, switchgear, some light ballasts — persistent and regulated. Do not drill or drain. Escalate to competent electrical/environmental handlers.

SMF: glasswool/rockwool etc. — not asbestos; can irritate; still deserves controlled handling in many client procedures. Precision of language matters.

ODS: older refrigerants requiring specialist recovery — WHS and environmental overlap.

Method: era + product type → check prior reports → targeted testing when disturbance planned → hierarchy controls → specialist referral when needed.

HOW CONSULTANTS ACTUALLY USE THIS

Pre-refurbishment scopes that only say "asbestos" miss cost and health surprises. Build a simple other-hazmat column into inspection tables.

EDGE CASES AND JUDGEMENT CALLS

- Flaking paint on 1920s timber — manage as potential LBP until tested if disturbance planned.
- "Askarel" label on capacitor — PCB suspect; do not open.
- Client panic that all insulation is asbestos — educate with product logic and testing plan.

SELF-CHECK BEFORE YOU MOVE ON

Draft a one-page other-hazmat prompt list for a 1970s office refurbishment (paint, ceilings, switchroom, HVAC).`,
    terminology: [
      { term: "Lead-based paint (LBP)", definition: "Paint with elevated lead content — hazardous especially when disturbed." },
      { term: "PCB", definition: "Polychlorinated biphenyl — persistent pollutant in some older electrical equipment." },
      { term: "SMF", definition: "Synthetic mineral fibre insulation — not asbestos; still handle per procedure." },
      { term: "ODS", definition: "Ozone-depleting substances — regulated refrigerants needing specialist recovery." },
      { term: "Askarel", definition: "Trade-associated term often linked to PCB insulating liquids — treat as suspect until assessed." },
      { term: "Proportionate investigation", definition: "Testing/controls matched to disturbance likelihood and consequence — not scattergun." },
      { term: "Specialist handler", definition: "Licensed/competent contractor for PCB/ODS/lead processes beyond general inspection." },
      { term: "Integrated hazmat table", definition: "Findings table covering asbestos and other hazardous building materials together." },
    ],
    consultingRelevance: `Holistic hazmat planning prevents mid-project stoppages and shows senior-ready judgement.`,
    workedExample: `Fictional Heritage Arcade (1920s): flaking balustrade paint → probable LBP management before sanding; separate asbestos ceiling scope; switchroom capacitors flagged for PCB-capable electrical assessment; SMF ceiling batts labelled correctly as non-asbestos with handling notes.`,
    scenarioModel: `Flag potential PCB equipment; recommend assessment by electrical contractor with PCB handling capability before works; advise PCBU not to drill/open units; reference WHS and environmental obligations for PCB waste; do not test or drain yourself; document photos from safe distance and escalate to supervisor.`,
    commonMistakes: [
      "Reporting all insulation as asbestos",
      "Recommending dry sanding without lead consideration",
      "Ignoring plant rooms in hazmat scope",
      "Opening electrical equipment to 'check oil'",
      "Using unverified historical lead percentages as hard fact",
      "Alarmist client emails without a control path",
      "Omitting ODS when HVAC plant is clearly in works",
      "No separation of asbestos vs SMF in tables",
    ],
    summary: `Lead, PCB, SMF and ODS belong in inspection planning. Era, location and disturbance intent drive proportionate action.`,
    sessionPlan: `About 2.5 hours: 30 min lead; 25 min PCB/ODS; 20 min SMF language; 35 min integrated table exercise; 20 min quiz.`,
  },

  "w2-fri": {
    objectives: [
      "Explain RCS health effects and high-risk tasks beyond benchtop shops",
      "Apply the silica code (commenced 1 May 2023) at consulting overview level",
      "Flag silica-generating refurbishment tasks in inspection reports",
      "Recommend hierarchy controls: water, extraction, enclosure, then RPE",
      "State WES vs WEL timing correctly for August–December 2026",
      "Reject 'silica-free by visual inspection' letters as definitive proof",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Dust control on conservation sites (cutting, grinding, dry soils) already taught you that fine dust is not "just dirt". Respirable crystalline silica is the consulting-intensive version of that lesson — with a specific code and serious disease outcomes (silicosis and related conditions).

CORE CONCEPTS IN DEPTH

RCS is generated from engineered stone, concrete, brick, tile and some demolition tasks. Dry high-energy cutting is a classic failure mode. Engineered stone fabrication is a major regulatory focus, but construction/refurbishment jackhammering and chasing also matter for your reports.

Silica code for engineered stone industry risks commenced 1 May 2023 — use current Queensland approved code references. Controls emphasise elimination/substitution where possible, wet methods, on-tool extraction, enclosure, housekeeping that does not re-suspend dust, training, and RPE as part of a program — not as the only line.

Exposure standards: at August 2026 curriculum start, compare monitoring to WES values. WEL commence 1 December 2026 under transition. Always date-stamp which standard you used. Do not invent the numeric limit in study notes — look up the current Safe Work Australia table when writing real comparisons.

HOW CONSULTANTS ACTUALLY USE THIS

In pre-refurb reports, add a silica task flag: what generating work is planned, what contractor controls are expected, whether monitoring may be needed to verify controls.

EDGE CASES AND JUDGEMENT CALLS

- Prior consultant "silica-free" letter from walk-through only — not definitive for future tasks.
- RPE-only for dry stone cutting — reject as primary strategy.
- Applying WEL early without labelling as forward-looking — confuses compliance.

SELF-CHECK BEFORE YOU MOVE ON

Write three silica-generating tasks for a concrete nib-wall removal and a hierarchy control package for each.`,
    terminology: [
      { term: "RCS", definition: "Respirable crystalline silica — fine particles that reach deep lung tissue." },
      { term: "Engineered stone", definition: "Composite stone with high crystalline silica content — high risk when dry processed." },
      { term: "Silica code (2023)", definition: "Approved code addressing engineered stone RCS risks — commenced 1 May 2023." },
      { term: "WES", definition: "Workplace exposure standard — usual comparison basis at August 2026." },
      { term: "WEL", definition: "Workplace exposure limit — commences 1 December 2026 under transition arrangements." },
      { term: "On-tool extraction", definition: "Local exhaust attached at the tool to capture dust at source." },
      { term: "Wet method", definition: "Water suppression to reduce dust generation during cutting/grinding." },
      { term: "Silicosis", definition: "Serious lung disease associated with RCS exposure." },
    ],
    consultingRelevance: `Omitting silica from refurbishment advice is a modern blind spot regulators and clients increasingly notice.`,
    workedExample: `Fictional CityFit Gym: concrete nib wall removal. Flag RCS from jackhammering; require wet methods and on-tool extraction in contractor SWMS comments; recommend baseline/verification air monitoring if high-energy indoor methods proceed; note WES comparison for any August 2026 monitoring; footnote WEL commencement for client planning.`,
    scenarioModel: `Do not accept visual 'silica-free' as definitive. Review prior letter scope; identify planned disturbance tasks; recommend task-based silica risk assessment and controls per current code; explain visual inspection cannot prove absence of silica-generating materials or future tasks.`,
    commonMistakes: [
      "Assuming silica only applies to benchtop fabricators",
      "Citing pre-2023 guidance as current",
      "Applying WEL before 1 Dec 2026 without clear forward-looking label",
      "Recommending RPE alone for dry cutting engineered stone",
      "No SWMS/control commentary in refurb reports",
      "Inventing numeric exposure limits from memory",
      "Ignoring indoor accumulation of concrete dust",
      "Treating one historic letter as eternal clearance",
    ],
    summary: `Silica code (from 1 May 2023) drives controls for high-risk tasks. Flag generating work; hierarchy first; date-stamp WES/WEL correctly.`,
    sessionPlan: `About 2.5 hours: 25 min health/sources; 40 min code and controls; 30 min refurb task flagging; 25 min WES/WEL timeline; 20 min quiz.`,
  },

  "w2-sat": {
    objectives: [
      "Turn a client brief into a field-ready hazmat inspection plan",
      "Sequence document review, access, PPE, sampling holds and deliverables",
      "Define stop conditions and contingencies",
      "Estimate supervisor sign-off points before mobilisation",
      "Include asbestos and other hazmat in one plan",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Fieldwork planning in conservation (weather, access, safety briefings) transfers cleanly. Add consulting artefacts: engagement scope, register requests, sampling hold points, and deliverable definitions.

CORE CONCEPTS IN DEPTH

Plan contents: scope/era/works; documents to request; access logistics; personnel; PPE tier; equipment; rooms/plant/roof sequence; sampling holds; CoC/lab assumptions; stop conditions; client communication milestones; deliverables.

Fictional target: Redwood Medical Clinic refurbishment — clinical activity means stop conditions matter.

HOW CONSULTANTS ACTUALLY USE THIS

Supervisors approve plans before billing field time. Weak plans cause missed plant rooms and budget blowouts.

SELF-CHECK BEFORE YOU MOVE ON

Could a teammate execute your plan tomorrow morning without calling you?`,
    terminology: [
      { term: "Inspection plan", definition: "Structured scope, method, access, PPE and outputs for a site visit." },
      { term: "Stop condition", definition: "Predefined reason to pause fieldwork." },
      { term: "Hold point", definition: "Approval gate before a step such as intrusive sampling." },
      { term: "Mobilisation", definition: "Deploying people/equipment to site under an approved plan." },
      { term: "Contingency", definition: "Backup method when access or conditions fail." },
      { term: "Deliverable definition", definition: "Exact outputs promised — memo, register update recommendations, CoC batch, etc." },
    ],
    consultingRelevance: `Planning skill is how graduates become trusted on complex sites quickly.`,
    workedExample: `Redwood 1985 clinic, strip-out Levels 1–2: request register/AMP/floor plans; sequence public areas after hours if needed; three bulk samples at hold point; PCB check in switchroom; lead note on external timber; roof access contingent on safe ladder/EW.`,
    scenarioModel: `Invoke roof stop condition; document limitation; complete accessible areas; notify client same day; recommend engineered access; update plan and discuss fee variation for remobilisation; do not invent roof findings.`,
    commonMistakes: [
      "No document review before site",
      "PPE underestimated",
      "Sampling without hold point",
      "Omitting plant room/external elevations",
      "No stop conditions",
      "Plan only in your head",
      "Ignoring clinical/operational constraints",
      "Deliverables undefined",
    ],
    summary: `Inspection plan = scope + documents + access + PPE + holds + deliverables + stop conditions.`,
    sessionPlan: `About 3 hours: 30 min brief analysis; 90 min draft plan; 30 min peer critique; 30 min revise + short quiz.`,
  },

  "w2-sun": {
    objectives: [
      "Perform a structured asbestos register review against fit-out scope",
      "Draft a supervisor-ready review memo with priorities",
      "Cross-check AMP and disturbance zones",
      "Practise refusing false 'good enough' sign-off",
      "Prepare Week 3 hygiene transition notes",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Document critique skills from environmental reporting help here. Today is deliberate practice on fictional Tanaka Industrial Park Building 4.

CORE CONCEPTS IN DEPTH

Method: executive summary → metadata → line-by-line specificity → presumed ACM logic → AMP link → disturbance gap list → recommendations → limitations (desktop review only).

Speak clearly: a register review memo is not a survey and not a clearance.

SELF-CHECK BEFORE YOU MOVE ON

Read your memo aloud. Remove any sentence that sounds like you inspected the ceiling cavities if you only read PDFs.`,
    terminology: [
      { term: "Register review memo", definition: "Desktop/structured critique of asbestos information adequacy." },
      { term: "Disturbance gap", definition: "Proposed work area not covered by current asbestos information." },
      { term: "Specificity failure", definition: "Register locations too vague for contractors to use." },
      { term: "AMP cross-check", definition: "Verifying register actions appear in management plan procedures." },
      { term: "False sign-off", definition: "Client request for comfort language that exceeds evidence." },
    ],
    consultingRelevance: `This is core graduate output quality — concise, scoped, escalation-friendly.`,
    workedExample: `Register entry 'Level 2 — generic ceiling' vs fit-out Rooms 2.04–2.09: recommend intrusive survey of those rooms; note AMP inspection frequency may also be outdated.`,
    scenarioModel: `Explain review ≠ clearance for refurbishment. Document gaps vs disturbance scope. Recommend pre-refurbishment survey for uncovered zones. PCBU retains duty for adequate asbestos information — consultant does not waive survey need to save cost.`,
    commonMistakes: [
      "Approving registers without scope comparison",
      "Skipping AMP",
      "Copy-pasting register as findings",
      "Promising legal compliance",
      "No priority ranking",
      "Sounding like a site survey when desktop-only",
    ],
    summary: `Compare documented ACM info to planned disturbance — gaps drive survey and update recommendations.`,
    sessionPlan: `About 3 hours: 20 min method; 80 min review exercise; 40 min memo; 40 min quiz + Week 3 preview.`,
  },
};
