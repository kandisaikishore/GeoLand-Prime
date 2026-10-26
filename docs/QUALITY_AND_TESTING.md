# Property Evidence, QA, and Deployment Guide

GeoLand Prime is a real-estate discovery and land-evidence workflow prototype focused on Telangana. The README explicitly states that sample records, values, parcel drawings, and verification statuses are illustrative. No official Telangana government verification API is connected.

## Run locally

```bash
python -m http.server 8080
```

Open `http://localhost:8080` and follow the README's source/evidence workflow. The static frontend deploys through GitHub Actions; verify the workflow and GitHub Pages configuration before claiming a deployment is live.

## Evidence and trust boundaries

- Label sample property data, parcel drawings, and values as illustrative.
- Do not claim title, ownership, encumbrance status, legal status, or cadastral boundaries have been verified by the app.
- Show source and last-updated information only when those values are actually available.
- Distinguish user-provided evidence from authoritative records.
- Do not invent government API responses or verification outcomes.

## QA matrix

Test property search/filtering, empty results, missing source metadata, malformed records, and refresh behavior. Verify that the UI never displays a “verified” status merely because source metadata is absent. Test responsive layout, keyboard access, and readable warnings for sample data.

## Deployment verification

After changes, inspect the GitHub Actions deployment run and confirm GitHub Pages is enabled. Test the published URL in a browser. A successful local preview or repository link is not evidence of a live deployment.

## Pull-request checklist

- [ ] Keep demo/illustrative status visible.
- [ ] Add tests for evidence labels and missing metadata.
- [ ] Run available static checks and deployment workflow.
- [ ] Do not imply legal advice or official land verification.
- [ ] Record which deployment checks actually ran.
