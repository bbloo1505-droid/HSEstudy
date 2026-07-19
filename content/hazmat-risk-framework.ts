/**
 * Beginner HAZMAT risk framework for Associate HSE Consultant prep.
 * Educational summary — verify against Queensland WHS law, approved codes and employer procedures.
 */

export const HAZMAT_FRAMEWORK_INTRO = {
  title: "5-step HAZMAT risk framework",
  plainEnglish:
    "This is a simple way consultants think about hazardous materials jobs. You do not need to memorise every chemical. Learn the steps, the words, and what evidence each step needs.",
  beginnerNote:
    "Starting from zero is fine. Treat this as a map. On real jobs you will follow Prensa’s templates and your supervisor’s scope.",
};

export const HAZMAT_STEPS = [
  {
    n: 1,
    title: "Identify hazards",
    plainEnglish:
      "Find what might cause harm. Walk the site, read history (registers, plans, age of building), and write down suspected asbestos, lead, PCBs, chemicals and other materials.",
    actions: [
      "Site inspection and photos",
      "Historical documents and prior registers",
      "Cross-check chemicals with Safety Data Sheets (SDS)",
      "Use GHS labels/pictograms to understand hazard classes",
    ],
    consultantCare:
      "Visual recognition means ‘suspected’, not confirmed. Asbestos and many materials need laboratory analysis.",
  },
  {
    n: 2,
    title: "Evaluate risks",
    plainEnglish:
      "Hazard = what can harm. Risk = how likely harm is under real conditions, and how bad it could be. Intact sealed asbestos cement is a serious hazard but may be lower immediate risk until disturbed.",
    actions: [
      "Use a risk matrix: likelihood × consequence",
      "Define exposure pathways (how people contact the hazard)",
      "Identify receptors (workers, public, environment)",
      "Compare against applicable exposure criteria / requirements (verify current WES/WEL and codes)",
    ],
    consultantCare:
      "Do not invent numeric limits from memory or random webpages. Look up the current official source.",
  },
  {
    n: 3,
    title: "Mitigate (hierarchy of controls)",
    plainEnglish:
      "Choose controls from most effective to least effective. Masks are last, not first.",
    hierarchy: [
      {
        name: "Elimination",
        example: "Stop using a toxic solvent entirely.",
      },
      {
        name: "Substitution",
        example: "Replace a dangerous chemical with a safer alternative.",
      },
      {
        name: "Isolation",
        example: "Closed systems or physical barriers between people and the hazard.",
      },
      {
        name: "Engineering",
        example: "Exhaust ventilation, bunding, automated handling, on-tool extraction.",
      },
      {
        name: "Administration",
        example: "Training, procedures, limiting time near the hazard, permits.",
      },
      {
        name: "PPE",
        example: "Respirators, gloves, suits — only after higher controls are considered.",
      },
    ],
    consultantCare:
      "Poor recommendation: ‘use appropriate PPE’. Better: specific control + who does it + urgency + how to verify it worked.",
  },
  {
    n: 4,
    title: "Emergency planning",
    plainEnglish:
      "Plan what happens if something goes wrong: spills, exposures, fire, or discovery of unexpected ACM.",
    actions: [
      "Spill containment and clean-up approach",
      "First aid and medical escalation",
      "Evacuation / isolation of areas",
      "Placarding and emergency-services information where required",
    ],
    consultantCare:
      "Manifests/placards for dangerous goods are threshold-driven. Confirm quantities against current Regulation/ADG requirements — do not guess.",
  },
  {
    n: 5,
    title: "Monitor and review",
    plainEnglish:
      "Check whether controls still work. Update documents when the site or work changes.",
    actions: [
      "Workplace audits / inspections",
      "Air monitoring where needed (designed by a competent person)",
      "Health monitoring where legally required (does not replace controls)",
      "Keep the hazardous chemicals register and asbestos register/AMP current",
    ],
    consultantCare:
      "A lab number is not the whole answer. Always interpret with task context, method quality and limitations.",
  },
] as const;

export const SPECIALISED_SERVICES = [
  {
    title: "Dangerous goods management",
    plainEnglish:
      "Checking storage and quantities against the Australian Dangerous Goods (ADG) Code and emergency-services information requirements (for example manifests where thresholds apply).",
    note: "Confirm Queensland-adopted requirements for the specific site — model/national documents are not automatically your only source.",
  },
  {
    title: "Occupational hygiene",
    plainEnglish:
      "Measuring worker exposure to airborne contaminants (and sometimes noise, IAQ, etc.) and supporting health-monitoring programs where required.",
    note: "Personal breathing-zone sampling usually beats static/area sampling for individual exposure questions.",
  },
  {
    title: "Asbestos / HAZMAT registers and management plans",
    plainEnglish:
      "Finding and recording hazardous materials, then explaining how they will be managed — especially before demolition or refurbishment.",
    note: "Management survey ≠ refurbishment/demolition survey. Match survey intensity to the planned works.",
  },
] as const;

export const REFERENCE_BODIES = [
  {
    name: "Safe Work Australia",
    role: "National model WHS material, exposure standards/limits guidance, model codes.",
  },
  {
    name: "Workplace Health and Safety Queensland",
    role: "Queensland regulator; approved codes of practice and local enforcement context.",
  },
  {
    name: "Australasian Institute of Dangerous Goods Consultants (AIDGC)",
    role: "Professional body / practice guidance for DG consulting (not legislation).",
  },
] as const;

export const BEGINNER_VOCAB = [
  { term: "Hazard", definition: "Something that can cause harm." },
  {
    term: "Risk",
    definition: "Chance that harm will occur under real site/task conditions, and how severe it could be.",
  },
  {
    term: "SDS",
    definition: "Safety Data Sheet — product information on hazards, handling, PPE and emergencies. Does not replace a task risk assessment.",
  },
  {
    term: "GHS",
    definition: "Globally Harmonized System — shared way to classify and label chemical hazards.",
  },
  {
    term: "Exposure pathway",
    definition: "How a hazard reaches a person (inhale, skin, swallow, inject).",
  },
  {
    term: "Hierarchy of controls",
    definition: "Preferred order of control methods from eliminate (best) to PPE (last).",
  },
  {
    term: "Register",
    definition: "Living list of identified hazards/materials (e.g. asbestos or hazardous chemicals) used to manage risk.",
  },
];
