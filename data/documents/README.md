# Official document library

Place **publicly available** official text extracts here for Source-mode retrieval.

## Required pair of files

1. `your-doc.meta.json` — metadata (see schema below)
2. `your-doc.md` or `your-doc.txt` — plain text body

Use headings (`## Section title`) and optional page markers (`[[page:12]]`) so citations can show a locator.

## Metadata schema

```json
{
  "title": "How to manage and control asbestos in the workplace",
  "jurisdiction": "Queensland",
  "regulator": "Workplace Health and Safety Queensland",
  "documentType": "approved_code_of_practice",
  "publicationYear": 2021,
  "effectiveDate": "2023-01-01",
  "version": "2021 (varied January 2023)",
  "currentStatus": "current",
  "originalSourceReference": "https://www.worksafe.qld.gov.au/…",
  "topics": ["asbestos", "registers", "management plans"],
  "reviewedAt": "2026-07-19",
  "filename": "asbestos-manage-control.md"
}
```

`documentType` must be one of:

- `legislation`
- `regulation`
- `approved_code_of_practice`
- `australian_standard`
- `regulator_guidance`
- `company_procedure` (only with written employer approval)
- `general_explanatory`

## First five core sources to download

1. Work Health and Safety Act 2011 (Queensland)
2. Work Health and Safety Regulation 2011 (Queensland)
3. How to manage and control asbestos in the workplace Code of Practice 2021 (varied 2023)
4. How to safely remove asbestos Code of Practice 2021 (varied 2023)
5. Managing risks of hazardous chemicals in the workplace (Queensland approved code) **or** Managing respirable crystalline silica dust exposure in construction and manufacturing of construction elements Code of Practice 2022

Convert PDF → plain text (copy/paste or a local PDF tool), save beside a `.meta.json`, then restart the app or call **Re-import documents**.

Do **not** add Prensa/client/internal procedures unless your employer later gives written approval.

The starter `*-primer.md` files in this folder are **general explanatory study digests**, not official legislation.
