import fs from "fs";
import path from "path";
import { PDFParse } from "pdf-parse";
import { ensureSeeded } from "../src/lib/seed";
import { importLocalDocuments } from "../src/lib/documents";

type Spec = {
  src: string;
  slug: string;
  meta: {
    title: string;
    jurisdiction: string;
    regulator: string;
    documentType:
      | "legislation"
      | "regulation"
      | "approved_code_of_practice"
      | "australian_standard"
      | "regulator_guidance"
      | "company_procedure"
      | "general_explanatory";
    publicationYear: number;
    effectiveDate?: string;
    version: string;
    currentStatus: "current" | "superseded" | "pending";
    originalSourceReference: string;
    topics: string[];
    reviewedAt: string;
  };
};

const DOWNLOADS = "C:\\Users\\bbloo\\Downloads";
const OUT = path.join(process.cwd(), "data", "documents");

const SPECS: Spec[] = [
  {
    src: path.join(DOWNLOADS, "act-2011-018.pdf"),
    slug: "whs-act-2011-qld",
    meta: {
      title: "Work Health and Safety Act 2011 (Queensland)",
      jurisdiction: "Queensland",
      regulator: "Queensland Parliament / Office of the Queensland Parliamentary Counsel",
      documentType: "legislation",
      publicationYear: 2011,
      effectiveDate: "2011-01-01",
      version: "Act No. 18 of 2011 (as downloaded 2026-07-19)",
      currentStatus: "current",
      originalSourceReference: "legislation.qld.gov.au — act-2011-018.pdf",
      topics: ["whs", "duties", "PCBU", "consultation", "reasonably practicable"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(DOWNLOADS, "sl-2011-0240.pdf"),
    slug: "whs-regulation-2011-qld",
    meta: {
      title: "Work Health and Safety Regulation 2011 (Queensland)",
      jurisdiction: "Queensland",
      regulator: "Queensland Parliament / Office of the Queensland Parliamentary Counsel",
      documentType: "regulation",
      publicationYear: 2011,
      effectiveDate: "2011-01-01",
      version: "SL 2011 No. 240 (as downloaded 2026-07-19)",
      currentStatus: "current",
      originalSourceReference: "legislation.qld.gov.au — sl-2011-0240.pdf",
      topics: ["whs", "hazardous chemicals", "asbestos", "risk management", "health monitoring"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(DOWNLOADS, "how-to-manage-control-asbestos-in-the-workplace-cop-2021.pdf"),
    slug: "asbestos-manage-control-cop-2021-qld",
    meta: {
      title: "How to manage and control asbestos in the workplace Code of Practice 2021",
      jurisdiction: "Queensland",
      regulator: "Workplace Health and Safety Queensland",
      documentType: "approved_code_of_practice",
      publicationYear: 2021,
      effectiveDate: "2023-01-01",
      version: "2021 (varied January 2023) — confirm cover page on import",
      currentStatus: "current",
      originalSourceReference:
        "worksafe.qld.gov.au — how-to-manage-control-asbestos-in-the-workplace-cop-2021.pdf",
      topics: ["asbestos", "registers", "management plans", "surveys", "PACM"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(DOWNLOADS, "how-to-safely-remove-asbestos-cop-2021.pdf"),
    slug: "asbestos-remove-cop-2021-qld",
    meta: {
      title: "How to safely remove asbestos Code of Practice 2021",
      jurisdiction: "Queensland",
      regulator: "Workplace Health and Safety Queensland",
      documentType: "approved_code_of_practice",
      publicationYear: 2021,
      effectiveDate: "2023-01-01",
      version: "2021 (varied January 2023) — confirm cover page on import",
      currentStatus: "current",
      originalSourceReference:
        "worksafe.qld.gov.au — how-to-safely-remove-asbestos-cop-2021.pdf",
      topics: ["asbestos", "removal", "licensing", "air monitoring", "clearance"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(DOWNLOADS, "managing-risks-of-hazardous-chemicals-cop-2021.pdf"),
    slug: "hazardous-chemicals-cop-2021-qld",
    meta: {
      title: "Managing risks of hazardous chemicals in the workplace Code of Practice 2021",
      jurisdiction: "Queensland",
      regulator: "Workplace Health and Safety Queensland",
      documentType: "approved_code_of_practice",
      publicationYear: 2021,
      effectiveDate: "2021-01-01",
      version: "2021 (as downloaded 2026-07-19)",
      currentStatus: "current",
      originalSourceReference:
        "worksafe.qld.gov.au — managing-risks-of-hazardous-chemicals-cop-2021.pdf",
      topics: ["hazardous chemicals", "GHS", "SDS", "registers", "exposure standards", "controls"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(DOWNLOADS, "rcs-construction-manufacturing-construction-elements-cop-2022.pdf"),
    slug: "silica-rcs-cop-2022-qld",
    meta: {
      title:
        "Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022",
      jurisdiction: "Queensland",
      regulator: "Workplace Health and Safety Queensland",
      documentType: "approved_code_of_practice",
      publicationYear: 2022,
      effectiveDate: "2023-05-01",
      version: "2022 (commenced 1 May 2023)",
      currentStatus: "current",
      originalSourceReference:
        "worksafe.qld.gov.au — rcs-construction-manufacturing-construction-elements-cop-2022.pdf",
      topics: ["silica", "RCS", "dust", "construction", "controls", "air monitoring"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(DOWNLOADS, "how-to-manage-work-health-and-safety-risks-cop-2021.pdf"),
    slug: "manage-whs-risks-cop-2021-qld",
    meta: {
      title: "How to manage work health and safety risks Code of Practice 2021",
      jurisdiction: "Queensland",
      regulator: "Workplace Health and Safety Queensland",
      documentType: "approved_code_of_practice",
      publicationYear: 2021,
      version: "2021 (as downloaded 2026-07-19)",
      currentStatus: "current",
      originalSourceReference:
        "worksafe.qld.gov.au — how-to-manage-work-health-and-safety-risks-cop-2021.pdf",
      topics: ["risk management", "hierarchy of controls", "hazard identification", "risk assessment"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(DOWNLOADS, "whs-consultation-cooperation-coordination-cop-2021.pdf"),
    slug: "whs-consultation-cop-2021-qld",
    meta: {
      title:
        "Work health and safety consultation, cooperation and coordination Code of Practice 2021",
      jurisdiction: "Queensland",
      regulator: "Workplace Health and Safety Queensland",
      documentType: "approved_code_of_practice",
      publicationYear: 2021,
      version: "2021 (as downloaded 2026-07-19)",
      currentStatus: "current",
      originalSourceReference:
        "worksafe.qld.gov.au — whs-consultation-cooperation-coordination-cop-2021.pdf",
      topics: ["consultation", "cooperation", "coordination", "HSRs", "duty holders"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(DOWNLOADS, "Labelling-of-workplace-hazardous-chemicals-COP.pdf"),
    slug: "labelling-hazardous-chemicals-cop-qld",
    meta: {
      title: "Labelling of workplace hazardous chemicals Code of Practice",
      jurisdiction: "Queensland",
      regulator: "Workplace Health and Safety Queensland",
      documentType: "approved_code_of_practice",
      publicationYear: 2021,
      version: "as downloaded 2026-07-19 — confirm cover version",
      currentStatus: "current",
      originalSourceReference:
        "worksafe.qld.gov.au — Labelling-of-workplace-hazardous-chemicals-COP.pdf",
      topics: ["hazardous chemicals", "labels", "GHS", "containers"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(
      DOWNLOADS,
      "model_code_of_practice_preparation_safety_data_sheets_for_hazardous_chemicals.pdf",
    ),
    slug: "preparation-sds-model-cop",
    meta: {
      title: "Preparation of safety data sheets for hazardous chemicals — Model Code of Practice",
      jurisdiction: "Australia (model)",
      regulator: "Safe Work Australia",
      documentType: "approved_code_of_practice",
      publicationYear: 2020,
      version: "Model COP — confirm Queensland adoption/currency before citing as QLD requirement",
      currentStatus: "current",
      originalSourceReference:
        "safeworkaustralia.gov.au — model_code_of_practice_preparation_safety_data_sheets_for_hazardous_chemicals.pdf",
      topics: ["SDS", "hazardous chemicals", "GHS", "labels"],
      reviewedAt: "2026-07-19",
    },
  },
  {
    src: path.join(
      DOWNLOADS,
      "model_code_of_practice-managing_noise_and_preventing_hearing_loss_at_work-nov24.pdf",
    ),
    slug: "noise-hearing-loss-model-cop-nov24",
    meta: {
      title: "Managing noise and preventing hearing loss at work — Model Code of Practice",
      jurisdiction: "Australia (model)",
      regulator: "Safe Work Australia",
      documentType: "approved_code_of_practice",
      publicationYear: 2024,
      version: "November 2024 model — confirm Queensland adoption/currency before citing as QLD requirement",
      currentStatus: "current",
      originalSourceReference:
        "safeworkaustralia.gov.au — model_code_of_practice-managing_noise_and_preventing_hearing_loss_at_work-nov24.pdf",
      topics: ["noise", "hearing loss", "audiometry", "controls", "exposure"],
      reviewedAt: "2026-07-19",
    },
  },
];

/** Site-specific / client files — never auto-import without written employer approval. */
const EXCLUDED = ["bundamba-asbestos-management-plan.pdf"];

function toMarkdown(
  pages: { num: number; text: string }[],
  title: string,
): string {
  const body = pages
    .map((p) => {
      const cleaned = p.text
        .replace(/\r/g, "")
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
      return `## Page ${p.num}\n\n[[page:${p.num}]]\n\n${cleaned}`;
    })
    .join("\n\n");

  return `# ${title}\n\n> Extracted locally from official PDF for HSE Launchpad Source mode.\n> Verify critical citations against the original PDF page numbers.\n\n${body}\n`;
}

async function main() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const onlyNew = process.argv.includes("--new");
  console.log("Excluded (not imported):", EXCLUDED.join(", "));

  for (const spec of SPECS) {
    if (!fs.existsSync(spec.src)) {
      console.error("MISSING:", spec.src);
      continue;
    }

    const mdName = `${spec.slug}.md`;
    const mdPath = path.join(OUT, mdName);
    if (onlyNew && fs.existsSync(mdPath)) {
      console.log(`SKIP existing ${spec.slug}`);
      continue;
    }

    // Keep a local PDF copy for reference (gitignored)
    const pdfDest = path.join(OUT, `${spec.slug}.pdf`);
    fs.copyFileSync(spec.src, pdfDest);

    const buf = fs.readFileSync(spec.src);
    const parser = new PDFParse({ data: new Uint8Array(buf) });
    const data = await parser.getText();
    await parser.destroy();

    let pages = (data.pages ?? []).map((p) => ({
      num: p.num,
      text: p.text || "",
    }));
    if (!pages.length && data.text) {
      pages = [{ num: 1, text: data.text }];
    }

    fs.writeFileSync(mdPath, toMarkdown(pages, spec.meta.title), "utf8");

    const meta = {
      ...spec.meta,
      filename: mdName,
      publicationDate: `${spec.meta.publicationYear}-01-01`,
    };
    fs.writeFileSync(
      path.join(OUT, `${spec.slug}.meta.json`),
      JSON.stringify(meta, null, 2),
      "utf8",
    );

    const chars = pages.reduce((n, p) => n + p.text.length, 0);
    console.log(`OK ${spec.slug}: ${pages.length} pages, ${chars} chars`);
  }

  ensureSeeded();
  const result = importLocalDocuments();
  console.log("IMPORT", result);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
