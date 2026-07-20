/**
 * Second-layer deep dives appended after primary explanation + supplements.
 * Goal: full study chapters, not skim summaries.
 */
export const DEEP_DIVE_BLOCKS: Record<string, string> = {
  "w1-mon": `
DEEP DIVE — HOW TO READ INSTRUMENTS WITHOUT DROWNING

Open the Queensland WHS Act contents and Regulation contents in your document library. Do not read cover-to-cover on day one. Instead, build a "where would I look?" index in your notebook:

- Definitions and key duty language → Act
- Hazardous chemicals process detail → Regulation + hazchem code
- Asbestos management and removal practical expectations → asbestos codes + Regulation
- General risk process and hierarchy → risks code
- Airborne contaminant criteria → Safe Work Australia workplace exposure standards document

For each consulting question this week, force yourself to name the layer before you answer. Example: "Do we need an SDS?" is Regulation/code territory more than a vibe. "Who is responsible?" starts in the Act's duty framework, then becomes a facts question about the engagement.

Write three "wrong layer" mistakes you have already made in study (or can imagine): quoting a procedure as if it were the Act; treating a code as optional when advising on reasonably practicable; citing model law for a Queensland site. Correct each mistake in writing.

End-of-lesson synthesis (200 words in your notes): explain the stack to a fictional conservation teammate who understands site safety but not consulting. If they could act on your explanation tomorrow, you are ready for Tuesday.`,

  "w1-tue": `
DEEP DIVE — CONSULTATION AND POWER ON REAL SITES

Consultation fails quietly. Contractors arrive, ceilings come down, and nobody told the people who clean the building at night. As a consultant you are often the person who notices the gap — not because you run consultation, but because your findings change how work should be done.

Build a kickoff questionnaire you will reuse:
1. Who is the PCBU for this work area?
2. Who is the principal contractor (if any)?
3. Are there HSRs for affected work groups?
4. How will findings be communicated to workers/contractors?
5. Who can stop work / isolate areas on this site?
6. What induction and permit systems apply to consultants?

Then add a personal ethics line: "I will not let politeness delete a serious risk from the file." Practise documenting an uncomfortable finding in neutral language: observation, location, immediate action taken, who was notified, time, recommended next step.

Compare officer due diligence to your Cert I experience of "the boss should make sure the system works". Officers need knowledge, resources, processes and verification — your report can inform that, never replace it. Write one paragraph you could use if a director asks you to certify their due diligence is complete.`,

  "w1-wed": `
DEEP DIVE — RESIDUAL RISK AND THE PSYCHOLOGY OF GREEN RATINGS

Clients love green. Insurers love green. Project managers love green. Your professional value is often the honest amber and red — especially "not assessed". Study how false greens are born: inaccessible areas assumed safe; PPE treated as elimination; historic registers treated as eternal truth; one lucky monitoring day treated as permanent compliance.

Create a "forbidden sentences" list for your reports:
- "No asbestos present in the building" (unless evidence truly supports and scope allows — usually it does not from a walk-through)
- "Low risk" for unentered roof space
- "PPE will ensure safety" as the only control line
- "Compliant with the Act" as a blanket close

Replace each with a precise alternative. This is not negativity; it is how consulting stays useful when something goes wrong later and the file is read cold.`,

  "w1-thu": `
DEEP DIVE — FROM MESSY STORE TO DEFENSIBLE ADVICE

Imagine you have 90 minutes on site at Apex. Allocate: 10 min brief/safety; 15 min register orientation; 40 min physical reconciliation; 15 min critical interim controls and notifications; 10 min close-out photos and questions for the client. If you blow the first 30 minutes chatting, the reconciliation suffers.

Learn to photograph like an auditor: label in frame or immediate caption; wide shot for context; close shot for label/condition; avoid faces; avoid confidential papers. Your future supervisor will trust photo-backed findings more than adjectives.

Write a model critical finding (unlabelled drum) with: location ID, description, risk rationale, interim control, recommended permanent fix, owner, timeframe language ("before further use" vs "within 30 days"). Keep emotional language out; keep urgency in the priority rating.`,

  "w1-fri": `
DEEP DIVE — MAKING TOXICOLOGY OPERATIONAL

Toxicology only matters in consulting when it changes a decision. For each of these decisions, write which toxicology idea justifies it: (1) isolate damaged ACM; (2) demand LEV for solvent wipe-down; (3) recommend RMP pathway after persistent solvent exposure; (4) reject LD50 hand-waving for chronic silica risk; (5) refuse to interpret a worker's blood results.

Build a personal "words I will not say on site": diagnose, guarantee safe, medically clear, definitely carcinogenic in this exact worker, etc. Replace with exposure, likelihood, controls, recommend, verify, escalate.

Read SDS Section 11 on one product and translate it into three consulting actions maximum. If you write twelve actions, you are copying the SDS, not consulting.`,

  "w1-sat": `
DEEP DIVE — BILLABLE QUALITY BAR FOR REGISTER REVIEWS

After you finish the Apex table, do a red-team pass:
- Which finding lacks a location ID?
- Which priority is inflated or deflated?
- Which interim control is missing for a critical item?
- Which SDS request has no owner?
- Which photo is unindexed?

Then write a 250-word client email in professional tone. Attach the table concept (described), state limitations (fictional training site / incomplete chemical identity for drum X), and ask for decisions. This email is as important as the table — clients action emails, not your private notes.`,

  "w1-sun": `
DEEP DIVE — MEMORY THAT SURVIVES SITE NOISE

Closed-book work is not school nostalgia; sites are loud and people ask fast questions. Train retrieval under mild stress: stand up, timer on, phone in another room, explain concepts aloud.

Build a "Week 1 one-pager" you could laminate mentally: stack diagram; duty holder map; hierarchy; register 8-step method; air vs health monitoring. If it does not fit on one page, you are still carrying fluff. Distil until it fits, then expand only on demand in conversation.

Set three flashcard rules for the rest of the curriculum: (1) term on front; (2) consulting example on back; (3) related instrument title on back. Definitions without examples will not hold on a dusty stairwell.`,

  "w2-mon": `
DEEP DIVE — DISTURBANCE IS THE PLOT

Most asbestos consulting stories are disturbance stories: a contractor did not know; a register was vague; someone used a grinder; a leak changed condition; a survey never opened the cavity now being stripped. Train yourself to ask "what work will touch this material?" before you ask "what does it look like?"

Walk through a fictional 1970s two-storey office in your mind: external AC, eaves, wet area linings, vinyl stairs, electrical boards, roof space dust, mastic on HVAC. For each, write condition assumptions, likely friability category, and what unsupervised maintenance might do wrong.

Licensing scenarios — write model answers in full sentences, not keywords. Supervisors hear sentences on site, not bullet fragments.`,

  "w2-tue": `
DEEP DIVE — SURVEY MATCHING AS RISK CONTROL

Wrong survey type is a control failure upstream of fibre release. Practise a decision tree:

Proposed work? → Will it open concealed spaces / remove linings / demolish? → If yes, management survey likely insufficient → recommend pre-refurbishment/demolition survey for those zones → update register/AMP after results → only then disturb.

Apply the tree to five fictional briefs (paint only; new cable tray above ceiling; full strip-out; facade cleaning; plant replacement in switchroom). Write the recommendation and the limitation if the client refuses the survey upgrade.`,

  "w2-wed": `
DEEP DIVE — DEFENSIBILITY CHAIN

A lab result is only as good as the chain behind it. Sketch the chain: authorisation → competent collection → control of dust → unique ID → photo → CoC signatures → courier → lab method → report → register update → AMP/action → contractor communication. Mark the three links most likely to break in a busy week and write a prevention habit for each.

Practise a calm client explanation when results are delayed: what you will not invent while waiting; how presumed ACM may be used for interim management; why rushing a register update is worse than waiting 48 hours.`,

  "w2-thu": `
DEEP DIVE — ONE INSPECTION TABLE, MANY MATERIALS

Design a field table with rows as locations and columns: asbestos suspect/confirmed; lead paint suspect; PCB/electrical; SMF; ODS/HVAC; photos; recommended next step; priority. Fill it for a fictional 1920s arcade + 1980s rear addition. Notice how the rear addition changes the suspicion profile — era is a tool, not a stereotype.

Write client-safe language that corrects "all insulation is asbestos" without mocking the client. Precision builds trust; condescension destroys it.`,

  "w2-fri": `
DEEP DIVE — SILICA AS A PROJECT RISK, NOT A NICHE

Translate silica into project controls a PM understands: SWMS content expectations; exclusion zones; cleaning methods that do not dry-sweep; verification monitoring triggers; worker briefing. Your report should help the PCBU brief contractors, not merely name a disease.

Write two paragraphs: (1) engineered stone fabrication context; (2) general construction RCS from concrete/brick/tile. Keep both, because clients will try to say silica is "only benchtops".`,

  "w2-sat": `
DEEP DIVE — PLANS THAT SURVIVE CONTACT WITH REALITY

Add a contingency matrix to Redwood: if X fails → do Y. Examples: ladder unsafe; clinical area busy; sampler unavailable; lab turnaround slips; client expands scope mid-visit; rain prevents external elevations. Contingencies are how graduates look senior.

Also write the "call supervisor now" list: suspected friable damage with occupants nearby; refused induction; pressure to sample without authorisation; immediate uncontrolled dust generation. Knowing when to pause is part of the plan.`,

  "w2-sun": `
DEEP DIVE — MEMOS THAT CREATE CORRECT NEXT WORK

A good register review memo sells the right next step ethically: targeted survey, not fear; update AMP, not theatre; isolate damaged zones, not endless desktop adjectives. Rewrite a weak memo sentence: "Register seems pretty good overall." into evidence-based language with zone references.

End with a personal scorecard: specificity, AMP link, disturbance match, limitations honesty, clear ask. Score your Tanaka memo 1–5 on each.`,

  "w3-mon": `
DEEP DIVE — ARECC AS A STORY YOU CAN TELL

Clients remember stories. Practise telling ARECC as a five-sentence story for BrewCo solvents without jargon overload, then again with precise terms for your supervisor. Dual register speaking is a consulting superpower.

Write a monitoring request that would be rejected (no scenario, no objective, no SEG) and then the corrected version. Keep both in notes as a before/after warning to yourself.`,

  "w3-tue": `
DEEP DIVE — 2026 TRANSITION DISCIPLINE

Make a mini briefing note for a fictional client board: what WES means now (August 2026), what changes from 1 December 2026 with WEL, and why control upgrades should not wait for confusion. One page max. No invented numbers — use "verify current table values" where digits would go if you have not looked them up yet.

Practise catching unit errors: ppm vs mg/m³. Write a checklist line that forces unit confirmation before any comparison sentence is issued.`,

  "w3-wed": `
DEEP DIVE — FIELDCRAFT FOR MONITORING DAYS

List everything that can invalidate a sample day: wrong placement, forgotten calibration, unlogged breaks, doors opened differently than normal production, LEV off for maintenance, adjacent demolition, pump fault, mislabelled cassette, missing CoC. Assign a prevention action to each.

Then write the activity log template you want to use: time, task, worker position, controls on/off, notes. Boring templates prevent dramatic report failures.`,

  "w3-thu": `
DEEP DIVE — RPE CULTURE VS RPE THEATRE

RPE theatre is handing out masks with no fit, no training, no cartridge logic, no clean-shaven rule, no maintenance. Write a paragraph that calls out RPE theatre without insulting workers who were given bad systems.

For silica and asbestos contexts, write the sentence that re-centres higher-order controls when a PM says "we'll just mask up". Keep it ready.`,

  "w3-fri": `
DEEP DIVE — PRIVACY AND TRUST

Workers may confide health fears. Your job is humane and bounded: listen, do not diagnose, point to proper medical pathways, protect privacy, notify through correct channels when the engagement requires. Write a short personal code of conduct for health information (5 bullets) and keep it.

Also write the difference between supporting a health monitoring program administratively (scheduling, exposure descriptions) and crossing into clinical territory. If unsure, escalate to supervisor before you speak.`,

  "w3-sat": `
DEEP DIVE — THE COLD READ TEST

Take any draft you produce today and cold-read it tomorrow morning as if you were a lawyer or opposing consultant. Circle every overclaim. This delayed QA catches ego errors better than same-hour review.

Build a "issue readiness" gate: if any of photo index, limitations, standard date, sample IDs, or supervisor review is missing — it does not ship. Put that gate on a sticky note.`,

  "w3-sun": `
DEEP DIVE — FROM MOCK TO 10 AUGUST HABITS

Translate capstone performance into first-week behaviours at Prensa: arrive with questions, insist on induction, write limitations without apology, date every standard, escalate early, ask for templates, never invent. Write these as a checklist you will actually tick in week one.

Finally, write a letter to yourself dated 9 August: what you know solidly, what you will still ask, and how you will stay coachable without underselling the Cert I foundation you already brought.`,
};
