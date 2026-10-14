# GeoLand Prime

**Real-estate discovery and land-evidence workflow prototype for Telangana.**

> **Reference mode:** Property cards, prices, parcel shapes, survey references, verification statuses, coordinates, audit events, and proximity measurements shown here are illustrative sample data. GeoLand Prime does not connect to Google Maps or to an official Telangana government verification API. It does not confirm title, ownership, encumbrances, legal status, or cadastral boundaries.

## Demo frontend

Static frontend uses HTML, CSS and JavaScript and needs no build step or API key. GitHub Actions deploys the root frontend to GitHub Pages when changes are pushed to `main`.

Expected URL: https://kandisaikishore.github.io/GeoLand-Prime/

If this is the first deployment, open **Settings → Pages** in the repository and choose **GitHub Actions** as the build/deployment source. The published URL becomes available after the workflow completes.

## Run locally

```bash
python -m http.server 8080
```

Open http://localhost:8080 and use **GIS & sources** to view reference GIS and source due-diligence workflows.

## Features

- Property discovery, filtering, sample property detail and evidence-status views.
- Buyer, owner, broker, developer and auditor demo workspaces.
- Sample trust centre and exportable demo verification report.
- GIS/source reference view and basic GeoJSON validation utilities.
- Explicit reference-only notices instead of claiming live map or official verification integrations.

## Layout

- `index.html`, `styles.css`, `app.js`, `integrations.js`: static GitHub Pages frontend.
- `backend/`: optional FastAPI/PostGIS integration scaffolding for future authorized service connections.
- `.github/workflows/pages.yml`: CI deployment workflow for GitHub Pages.

## Optional backend scaffold

GitHub Pages hosts only the static frontend. It does not run FastAPI or PostgreSQL. The optional scaffold under `backend/` can be developed and deployed separately on a Python-capable host; see `backend/` for API code, SQL schema, requirements, and environment examples. Official-source adapters should only be enabled with documented, authorized API access and a validated data contract.

## Official reference

- Telangana Bhu Bharati portal: https://bhubharati.telangana.gov.in/homePage

This link is provided for manual reference only. Verify documents directly with authorized official sources and qualified professionals before making property decisions.
