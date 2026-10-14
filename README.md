# GeoLand Prime

**Real-estate discovery and land-evidence workflow prototype focused on Telangana.**

> **Reference mode:** Sample property records, values, parcel drawings and verification statuses are illustrative only. Google Maps is intentionally omitted. No official Telangana government verification API is connected, and this app does not prove title, ownership, encumbrance status, legal status or cadastral boundaries.

## GitHub Pages deployment

The static frontend is deployed using GitHub Actions on pushes to `main`.

Expected URL: <https://kandisaikishore.github.io/GeoLand-Prime/>

Workflow runs: <https://github.com/kandisaikishore/GeoLand-Prime/actions>

If Pages has not been enabled for the repository yet, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source. The website is live only after the workflow succeeds and Pages is enabled.

## Run locally

```bash
python -m http.server 8080
```

Open <http://localhost:8080>. Select **GIS & sources** to see the schematic reference map, example GeoJSON checks and a manual due-diligence checklist.

## Prototype features

- Property search and sample property details.
- Buyer, owner, broker, developer and auditor demo role switcher.
- Trust-centre due diligence checklist and downloadable sample JSON.
- Illustrative GIS / parcel boundary view and basic GeoJSON structure checks.
- Sample fee calculator with explicit rate caveats.
- Clear notices that sample content and statuses are not official results.

## Important limitations

- All listings and parcel boundaries are fictitious examples; no actual land inventory is represented.
- The GIS picture is schematic, not to scale and not a cadastral map.
- GeoJSON checks are structural checks only; they do not establish survey accuracy or legal ownership.
- Telangana Bhu Bharati and any registration, EC, prohibited-land, identity or survey services are not connected. Open the portal yourself for manual reference: <https://bhubharati.telangana.gov.in/homePage>.
- User actions are browser-local and are not production records. Authentication, server database, notifications, payment services and legal verification are not configured.

This repository currently contains the static reference-mode frontend. Backend integration scaffolding is intentionally not published here until it can be committed as complete, tested source files.
