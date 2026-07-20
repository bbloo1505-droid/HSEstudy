import type { DeepLessonPatch } from "./types";

/** Consulting-depth Week 3 — hygiene, monitoring, controls, health monitoring, QA, capstone. */
export const WEEK3_DEEP: Record<string, DeepLessonPatch> = {
  "w3-mon": {
    objectives: [
      "Define occupational hygiene and when to involve a certified hygienist",
      "Apply ARECC end-to-end to a fictional exposure scenario",
      "Write a clear exposure scenario before proposing monitoring",
      "Separate qualitative assessment from quantitative evaluation",
      "Link ARECC to asbestos, silica, solvents and noise contexts",
      "State graduate boundaries on interpreting results",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

You already anticipate environmental hazards in outdoor work. Occupational hygiene is the structured science of workplace environmental agents — chemical, physical, biological — that can cause illness or discomfort. ARECC gives you the professional sequence.

CORE CONCEPTS IN DEPTH

ARECC:
- Anticipate — what agents could appear given process, materials, era, tasks?
- Recognise — which agents/routes are actually present or likely?
- Evaluate — qualitative judgement and/or measurement against criteria.
- Control — hierarchy of controls.
- Confirm — verify controls work (monitoring, inspection, review).

Exposure scenario: task, who, duration/frequency, controls, ventilation, adjacent generators. No scenario → no defensible monitoring plan.

Graduates often excel first at Anticipate/Recognise and field documentation; full evaluation sign-off may require COH/supervisor. Know your firm's authority matrix.

QUEENSLAND LEGAL AND TECHNICAL DETAIL

Evaluation often uses Safe Work Australia workplace exposure standards for airborne contaminants (WES at August 2026; WEL from 1 December 2026). Risk management code still frames control and review. Do not invent limits — look them up for the job date.

HOW CONSULTANTS ACTUALLY USE THIS

Monitoring proposals clients pay for must show ARECC logic in writing — especially Anticipate/Recognise and a defined scenario.

EDGE CASES AND JUDGEMENT CALLS

- Client wants pumps deployed tomorrow with no task description — refuse until scenario exists.
- One sample treated as lifetime truth — overclaim.
- Skipping controls section in a monitoring report — incomplete ARECC.

SELF-CHECK BEFORE YOU MOVE ON

Write an ARECC paragraph for a fictional solvent wipe-down task without mentioning a pump until Evaluate.`,
    terminology: [
      { term: "ARECC", definition: "Anticipate, Recognise, Evaluate, Control, Confirm — core occupational hygiene process." },
      { term: "Occupational hygienist", definition: "Professional specialising in exposure assessment and control; may hold COH certification." },
      { term: "COH", definition: "Certified Occupational Hygienist — professional certification; respect sign-off boundaries." },
      { term: "Exposure scenario", definition: "Task, people, time, controls and conditions that shape exposure." },
      { term: "Qualitative assessment", definition: "Structured non-measurement evaluation of exposure potential." },
      { term: "Quantitative evaluation", definition: "Measurement-based comparison to criteria (e.g. WES/WEL)." },
      { term: "Similar exposure group (SEG)", definition: "Workers expected to have similar exposure profiles for sampling design." },
      { term: "Confirm", definition: "Verification step — monitoring/inspection to check controls remain effective." },
    ],
    consultingRelevance: `ARECC is how you justify fees and avoid random sampling theatre.`,
    workedExample: `Fictional BrewCo bottling line solvent wipe-down 2× daily. Anticipate vapour inhalation; recognise acetone-class solvent from SDS; qualitatively review ventilation; propose personal sampling on a typical shift after scenario sign-off; recommend LEV upgrade options; confirm with repeat monitoring post-control.`,
    scenarioModel: `Do not deploy pumps yet. Define tasks, workers, duration, ventilation and existing controls via walk-through/interviews. Draft exposure scenario; design monitoring with supervisor/hygienist approval. Explain that ARECC forbids meaningful Evaluate without Recognise.`,
    commonMistakes: [
      "Monitoring without an exposure scenario",
      "Equating one sample with lifelong certainty",
      "Skipping control recommendations",
      "Claiming COH-level sign-off without authority",
      "Jumping to Confirm without Control plan",
      "Ignoring adjacent generating tasks",
      "No SEG thinking on multi-worker lines",
      "Vague objectives like 'check air quality'",
    ],
    summary: `ARECC structures hygiene work. Define scenario, evaluate against dated standards, control, confirm — respect qualification boundaries.`,
    sessionPlan: `About 2.5 hours: 20 min OH intro; 40 min ARECC deep dive; 40 min scenario writing; 20 min boundary cases; 20 min quiz.`,
  },

  "w3-tue": {
    objectives: [
      "Differentiate TWA, STEL and peak limitation concepts",
      "Apply WES at August 2026 and explain WEL from 1 December 2026",
      "Match averaging time to sampling design",
      "Report comparisons with assessment date and standard name",
      "Interpret exceedances without medical diagnosis",
      "Avoid using WEL early without clear forward-looking labelling",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Numeric criteria are familiar from environmental guidelines. Workplace exposure standards are occupational criteria for airborne contaminants — with averaging time rules that make or break a comparison.

CORE CONCEPTS IN DEPTH

- TWA: average over a reference period (commonly 8 hours) — personal full-shift design often preferred for compliance-style comparison.
- STEL: short-term (typically 15-minute) limit for peaks.
- Peak limitation: near-instantaneous maximum for some substances.

WES: workplace exposure standards — primary comparison at August 2026 curriculum start.
WEL: workplace exposure limits — commence 1 December 2026 under national transition. Document which applies to the job date. Forward planning may discuss WEL explicitly as future criteria — label it so.

Never invent the number. Open the Safe Work Australia workplace exposure standards document for the contaminant and date.

HOW CONSULTANTS ACTUALLY USE THIS

Report sentence pattern: "Personal TWA for [contaminant] on [date] was [result] compared with the WES TWA of [value] (Safe Work Australia, workplace exposure standards for airborne contaminants; accessed/verified [date]). WEL transition commencing 1 December 2026 is noted for planning."

EDGE CASES AND JUDGEMENT CALLS

- Results exceed WES but sit below a published future WEL — still act on current WES; do not dismiss.
- 15-minute data compared to TWA — invalid.
- Grab sample declared as shift compliance — invalid without context.

SELF-CHECK BEFORE YOU MOVE ON

Explain WES vs WEL timeline and TWA vs STEL to a fictional project manager in 90 seconds.`,
    terminology: [
      { term: "WES", definition: "Workplace exposure standard — reference at August 2026 curriculum start." },
      { term: "WEL", definition: "Workplace exposure limit — commences 1 December 2026 under transition." },
      { term: "TWA", definition: "Time-weighted average over a defined period (often 8 hours)." },
      { term: "STEL", definition: "Short-term exposure limit — typically 15-minute average." },
      { term: "Peak limitation", definition: "Maximum instantaneous or near-instantaneous concentration for specified substances." },
      { term: "Assessment date", definition: "Date of monitoring/comparison — determines which criteria apply." },
      { term: "Uncertainty", definition: "Sampling and analytical error bands — discuss with supervisor; do not hide." },
      { term: "Forward-looking comparison", definition: "Optional planning note against future WEL — must be labelled as such." },
    ],
    consultingRelevance: `Wrong standard or averaging period invalidates reports. This is a professional error hot spot in 2026.`,
    workedExample: `Silica monitoring 2026-08-05: report WES comparison with verified table value, note WEL from 2026-12-01 for planning, recommend continued wet methods + extraction regardless of 'near miss' results.`,
    scenarioModel: `Primary comparison to current WES with date stated. Note WEL commencement. Recommend controls for sustainable compliance under either value. Do not dismiss WES exceedance because a future WEL number looks different. Escalate numeric look-ups to verified tables — do not guess.`,
    commonMistakes: [
      "Using WEL before December 2026 without labelling",
      "Comparing 15-minute data to TWA limits",
      "Ignoring sampling uncertainty",
      "Presenting standards as memorised eternal numbers",
      "No assessment date in the comparison sentence",
      "Medical conclusions from exceedances",
      "Mixing units (mg/m³ vs ppm) silently",
      "Copying last year's standard row without re-checking",
    ],
    summary: `August 2026 → WES; WEL from 1 Dec 2026. Match TWA/STEL/peak to method. Date-stamp everything.`,
    sessionPlan: `About 2.5 hours: 30 min definitions; 40 min WES/WEL timeline drills; 40 min calculation/comparison exercises; 20 min quiz.`,
  },

  "w3-wed": {
    objectives: [
      "Design static vs personal strategies against a clear objective",
      "Select duration, numbers and SEG logic defensibly",
      "Document calibration, activity logs and environmental context",
      "Plan NATA analysis and CoC for air samples",
      "Interpret non-representative shifts cautiously",
      "Write a monitoring strategy slide/page a supervisor would approve",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Sampling design in environmental science transfers: define objective, blank/calibration discipline, representative conditions, chain of custody. Air monitoring adds breathing-zone placement and shift representativeness.

CORE CONCEPTS IN DEPTH

Objectives: baseline, control verification, task evaluation, clearance-style checks (as applicable to contaminant/process). Static samples characterise areas; personal samples characterise worker inhalation exposure — often preferred for TWA comparisons.

Strategy elements: SEGs, number of samples, duration, flow rates per method, pre/post calibration, activity log, ventilation/LEV status, weather/indoor conditions, adjacent tasks, lab method, reporting timeline.

Queensland heat/humidity affect comfort and sometimes process — schedule representative conditions where safe.

HOW CONSULTANTS ACTUALLY USE THIS

Clients reject invoices when strategy lacks objective, map and activity log. Build those three first.

EDGE CASES AND JUDGEMENT CALLS

- Worker leaves site for two hours mid-sample — discuss representativeness; do not silently claim full-shift compliance.
- Pump on belt not breathing zone — method failure.
- No calibration records — defensibility failure.

SELF-CHECK BEFORE YOU MOVE ON

Draft a one-page strategy for two cutters in a demo bay: objective, map, samples, calibration, lab, limitations.`,
    terminology: [
      { term: "Static sample", definition: "Fixed-location area sample over a defined period." },
      { term: "Personal sample", definition: "Sample in the worker breathing zone (typically lapel)." },
      { term: "Gravimetric analysis", definition: "Weighing dust on filters — common for respirable dust/silica workflows." },
      { term: "Calibration", definition: "Pre/post flow verification for volume accuracy." },
      { term: "Activity log", definition: "Time-stamped notes of tasks and conditions during monitoring." },
      { term: "Breathing zone", definition: "Zone near nose/mouth where personal samplers should sit." },
      { term: "Representativeness", definition: "How well samples reflect the exposure scenario claimed." },
      { term: "Method reference", definition: "Standard/method (e.g. AS 3640 context) guiding collection/analysis." },
    ],
    consultingRelevance: `Strategy quality is where hygiene credibility is won before results exist.`,
    workedExample: `Fictional SilicaTask demo bay: two personal samples during 4-hour monitored work, one static near LEV return, pre/post calibration logged, photos of setup, activity notes every 15 minutes, CoC to NATA lab for agreed analyte suite.`,
    scenarioModel: `Note non-representative period in report. Avoid declaring full-shift compliance. Recommend additional sampling covering full shift or task-focused STEL design per supervisor. Document break location and pump behaviour. Be transparent with the client about limitations.`,
    commonMistakes: [
      "No calibration records",
      "Personal pump not in breathing zone",
      "Ignoring concurrent generating tasks",
      "Wrong contaminant row in standards table",
      "No activity log",
      "Objective never stated",
      "Overclaiming from a single sample",
      "Missing CoC signatures",
    ],
    summary: `Objective → map static/personal → calibrate → log activity → match analysis → report limitations.`,
    sessionPlan: `About 2.5 hours: 25 min static vs personal; 45 min strategy case; 30 min field forms; 20 min failure autopsy; 20 min quiz.`,
  },

  "w3-thu": {
    objectives: [
      "Build control packages in hierarchy order for dust/vapour/fibre scenarios",
      "Explain RPE types, fit testing and program elements at consulting overview level",
      "Position RPE as interim/residual — not the default primary control",
      "Link controls to confirmation monitoring",
      "Challenge RPE-only illegal asbestos DIY proposals",
      "Note clean-shaven and heat-stress interactions in Queensland fieldwork",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

PPE-last was already good practice in Cert I. Consulting requires you to write that hierarchy so a contractor SWMS and a client board both understand it — and to know RPE program basics without becoming a respirator fitter overnight.

CORE CONCEPTS IN DEPTH

Engineering: LEV, enclosure, wet methods, substitution of process.
Administrative: permits, scheduling, exclusion zones, training, job rotation (limited).
RPE: last line when exposure remains — correct class (e.g. P2/P3 particulates; suitable cartridges for vapours), fit testing for tight-fitting devices, maintenance, training, clean-shaven rules where required, APF concept at overview level.

Confirmation: after controls change, monitor or inspect to Confirm (ARECC).

HOW CONSULTANTS ACTUALLY USE THIS

Weak report: "Wear P2."
Strong report: wet method + on-tool LEV + exclusion + RPE during transition + repeat monitoring in 30 days + RPE program requirements for the PCBU.

EDGE CASES AND JUDGEMENT CALLS

- RPE-only for asbestos non-friable removal under unlicensed DIY — reject; licensing and methods dominate.
- Cloth masks as RPE — no.
- Wrong cartridge for solvent — false protection.

SELF-CHECK BEFORE YOU MOVE ON

Rewrite a PPE-first email into a hierarchy package of five lines.`,
    terminology: [
      { term: "LEV", definition: "Local exhaust ventilation capturing contaminant at source." },
      { term: "RPE", definition: "Respiratory protective equipment — last hierarchy line when needed." },
      { term: "Fit test", definition: "Check that a tight-fitting respirator seals to the wearer." },
      { term: "APF", definition: "Assigned protection factor — performance rating when program requirements are met." },
      { term: "RPE program", definition: "PCBU system for selection, fit, training, maintenance and use of respirators." },
      { term: "Interim control", definition: "Temporary measure while higher-order controls are implemented." },
      { term: "On-tool extraction", definition: "Capture integrated at the tool." },
      { term: "False protection", definition: "Wrong or poorly fitted RPE that creates a safety illusion." },
    ],
    consultingRelevance: `Supervisors expect hierarchy narrative and confirmation plans — not mask shopping lists.`,
    workedExample: `Monitoring near WES with wet cutting only → recommend on-tool LEV upgrade, keep wet methods, RPE as backup during transition, repeat monitoring post-install, document residual risk until confirmed.`,
    scenarioModel: `Reject RPE-only DIY asbestos approach. Non-friable removal still requires competent/licensed approach per area thresholds; RPE does not replace licensing or safe methods. Recommend licensed remover, appropriate controls and clearance processes per removal code; escalate to supervisor immediately.`,
    commonMistakes: [
      "Specifying RPE without program/fit-test mention",
      "Wrong cartridge type",
      "Treating cloth masks as RPE",
      "No confirmation plan",
      "PPE-first recommendations as default",
      "Ignoring heat stress with heavy RPE in QLD summer",
      "Silent acceptance of illegal DIY removal plans",
      "No exclusion zone with dusty works",
    ],
    summary: `Engineering and admin first; RPE with a real program when needed; confirm with monitoring.`,
    sessionPlan: `About 2.5 hours: 25 min hierarchy refresh; 40 min RPE program overview; 35 min silica/asbestos control cases; 20 min rewrite drill; 20 min quiz.`,
  },

  "w3-fri": {
    objectives: [
      "Define health monitoring vs air monitoring vs casual 'health surveillance' talk",
      "Explain RMP role, consent and privacy boundaries",
      "Recommend health monitoring without performing or interpreting it",
      "Identify when to escalate suspected occupational illness through proper channels",
      "Keep medical data out of ordinary consulting reports",
      "Handle worker requests to interpret results on site",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

First aid and welfare awareness from site work is not the same as regulated health monitoring. This lesson is about professional boundaries as much as toxicology.

CORE CONCEPTS IN DEPTH

Health monitoring: medical program to detect harm from work-related exposure to certain hazardous substances — WHS Regulation and hazardous chemicals code context. Requires registered medical practitioner supervision, informed consent, and privacy.

Air monitoring: environmental/breathing-zone measurement — supports exposure scenarios; does not replace medical programs.

Biological monitoring: measuring substances/metabolites in body fluids — part of some health monitoring programs, not a graduate field trick.

Your role: flag triggers, document exposure scenarios, recommend PCBU engage RMP pathways — never diagnose, never interpret individual results casually, never put identifiable medical details in a standard hazmat report.

HOW CONSULTANTS ACTUALLY USE THIS

Useful sentence: "Based on ongoing solvent exposure after engineering controls, we recommend the PCBU obtain advice from a registered medical practitioner regarding health monitoring under the hazardous chemicals framework. This consultancy does not provide clinical assessment."

EDGE CASES AND JUDGEMENT CALLS

- Worker shows you blood results — decline interpretation; redirect to RMP/GP.
- Client asks you to run spirometry in the car park — refuse.
- Fit testing confused with health monitoring — correct the language.

SELF-CHECK BEFORE YOU MOVE ON

Role-play a 60-second refusal to interpret medical results that still sounds supportive.`,
    terminology: [
      { term: "Health monitoring", definition: "Medical monitoring program for workers exposed to specified hazardous substances." },
      { term: "RMP", definition: "Registered medical practitioner supervising health monitoring." },
      { term: "Biological monitoring", definition: "Measurement of substances/metabolites in biological samples — clinical program element." },
      { term: "Informed consent", definition: "Worker's informed agreement to participate in health monitoring." },
      { term: "Medical privacy", definition: "Controls on who may see individual health monitoring results." },
      { term: "Exposure scenario support", definition: "Consulting description of tasks/controls provided to inform PCBU/RMP decisions." },
      { term: "Fit testing", definition: "Respirator seal check — not health monitoring." },
      { term: "Clinical boundary", definition: "Line consultants must not cross into diagnosis or treatment." },
    ],
    consultingRelevance: `Boundary errors here create legal, privacy and ethical damage fast. Clean recommendations protect workers and the firm.`,
    workedExample: `Fictional PackRight Ltd: solvents still elevated after LEV tweak. Recommend RMP pathway for health monitoring; attach air results only as exposure context; exclude medical interpretation; supervisor reviews wording before issue.`,
    scenarioModel: `Decline to interpret medical results. You are not their treating doctor or supervising RMP. Advise discussion with the monitoring physician or GP. Notify PCBU only through appropriate non-clinical channels if your role includes program coordination. Document the interaction in file notes without copying results into the client report.`,
    commonMistakes: [
      "Interpreting health monitoring results",
      "Skipping RMP in recommendations",
      "Using air data alone to 'clear' medical risk",
      "Sharing worker medical data in reports",
      "Offering roadside spirometry",
      "Confusing fit testing with health monitoring",
      "Diagnosing silicosis/asbestosis from anecdotes",
      "Pressuring workers to share results with you",
    ],
    summary: `Health monitoring is RMP-led. Consultants recommend when triggered and document exposure — they do not practise medicine.`,
    sessionPlan: `About 2.5 hours: 30 min definitions; 30 min regulatory triggers overview; 40 min boundary role-play; 20 min report wording; 20 min quiz.`,
  },

  "w3-sat": {
    objectives: [
      "Apply contemporaneous field note and photo index standards",
      "Run a QA checklist on a flawed draft report",
      "Catch WES/WEL date errors and sample ID mismatches",
      "Defend limitations sections under client pressure",
      "Prepare supervisor-ready file packs",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Field notebooks and chain-of-evidence habits from environmental work are your advantage. Consulting adds firm templates, version control and client-pressure resistance.

CORE CONCEPTS IN DEPTH

Field discipline: date, people, weather, accessed/inaccessible, observations, instrument IDs, client reps, photo index, sample links, no silent post-hoc edits without audit trail.

Report QA: scope/limitations; PCBU named; instruments by title; tables match photos; sample IDs consistent; correct exposure standard for date; hierarchy recommendations; spelling of asbestos types/chemicals; supervisor review before issue.

Workshop: flawed Horizon Childcare draft — mark errors; write QA memo.

SELF-CHECK BEFORE YOU MOVE ON

List ten QA checks from memory. If you miss WES date or limitations, rewrite the list.`,
    terminology: [
      { term: "Contemporaneous notes", definition: "Records made at the time of observation." },
      { term: "Photo index", definition: "Filename-to-location/finding map." },
      { term: "QA checklist", definition: "Structured pre-issue review against firm standards." },
      { term: "Limitations section", definition: "Explicit statement of what was not assessed." },
      { term: "Version control", definition: "Tracking draft vs issued report versions." },
      { term: "File pack", definition: "Notes, photos, CoC, cal records, draft assembled for supervisor." },
    ],
    consultingRelevance: `QA is billable skill. Clean drafts get you more field trust.`,
    workedExample: `Draft cites WEL exceedance for August monitoring — QA corrects to WES with WEL footnote. Room 3 photo labelled Room 5 — fix before issue. Limitations nearly deleted for 'simplicity' — restore.`,
    scenarioModel: `Refuse removal of limitations. Explain they protect client and firm by clarifying assessment boundaries. Offer a plain-language summary box if readability is the concern; keep technical limitations in the report body. Escalate to supervisor if pressure continues.`,
    commonMistakes: [
      "Uncaptioned photo dumps",
      "Conclusions copied from prior jobs",
      "Wrong exposure standard year",
      "Missing supervisor review",
      "Silent edits to field notes",
      "Sample ID drift lab-to-report",
      "No inaccessible areas listed",
      "Dropping limitations under pressure",
    ],
    summary: `Strong notes + systematic QA = defensible deliverables. Never drop limitations to please.`,
    sessionPlan: `About 3 hours: 30 min field standards; 90 min QA on flawed draft; 30 min revise checklist; 30 min quiz.`,
  },

  "w3-sun": {
    objectives: [
      "Execute the mock project in a deliberate sequence under time pressure",
      "Integrate legal, hazmat, hygiene, monitoring and QA skills",
      "Produce scoped limitations and hierarchy recommendations",
      "Complete knowledge test and supervisor oral prep",
      "Honestly rate readiness for supervised site attendance from 10 August",
    ],
    explanation: `BRIDGE FROM WHAT YOU KNOW

Capstone day is assessment hygiene: pace, evidence, escalation, clarity. Treat fictional Westgate Logistics Hub like a real supervised package.

CORE CONCEPTS IN DEPTH

Attack order:
1. Scope clarification and PCBU/instruments
2. Document gaps (registers, AMP, SDS, prior reports)
3. Inspection plan with stop conditions
4. Sample/monitoring strategy only after scenarios exist
5. Findings/limitations/recommendations (hierarchy)
6. QA pass
7. Knowledge test + five supervisor questions

Oral prep themes: duty holders; register vs survey; WES date; health vs air monitoring; DIY asbestos refusal; inaccessible areas.

All entities fictional. Verify live law before real client work.

SELF-CHECK BEFORE YOU MOVE ON

Can you explain your Westgate reasoning without reading the page? If not, tighten your summary card tonight.`,
    terminology: [
      { term: "Mock project", definition: "Capstone simulation — not a live client engagement." },
      { term: "Supervisor question", definition: "Oral prompt testing judgement and escalation." },
      { term: "Attack order", definition: "Sequence that prevents premature sampling/reporting." },
      { term: "Readiness rating", definition: "Honest self-assessment before first supervised jobs." },
      { term: "Integration", definition: "Using Week 1–3 skills together in one package." },
    ],
    consultingRelevance: `This is your dress rehearsal for Prensa week one habits: scope first, evidence second, opinions last.`,
    workedExample: `Morning: Westgate scope gap table. Midday: inspection plan + sampling holds. Afternoon: findings outline with limitations and WES-dated monitoring note. Evening: timed quiz + spoken supervisor answers recorded once each.`,
    scenarioModel: `Document oral clearance claim; request written prior reports/registers; do not rely on oral clearance; list as information gap; plan verification as needed; remind PCBU duty for current information before refurbishment; keep tone factual not accusatory.`,
    commonMistakes: [
      "Rushing to sampling before scope sign-off",
      "Omitting WES date",
      "Treating mock as low effort",
      "Skipping oral prep",
      "No limitations",
      "PPE-only recommendations",
      "Forgetting other hazmat beyond asbestos",
      "Inventing legal section numbers under stress",
    ],
    summary: `Capstone integrates QLD WHS, hazmat, hygiene, monitoring and reporting. Scope → plan → evidence → QA → oral clarity.`,
    sessionPlan: `Full-day capstone (6–8 hours): scope/plan block; technical deliverables; 100-question test; five supervisor questions; checklist self-review and readiness notes.`,
  },
};
