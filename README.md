# ksprashu.dev

Personal home of **Prashanth Subrahmanyam**: a static [Astro](https://astro.build) site on GitHub Pages, with DNS on Cloudflare.
No server, no API keys, nothing to patch.

## How it stays fresh

A GitHub Actions workflow (`.github/workflows/site.yml`) runs **daily at 06:47 IST**, on every push, and on demand
(*Actions → Build & deploy → Run workflow*). It:

1. pulls the latest **Medium** posts, **GitHub** repos and the **YouTube** talks playlist into `data/feeds/*.json`,
2. commits those snapshots if anything changed (so a feed outage never breaks the site),
3. builds and deploys to GitHub Pages.

## Editing content

Everything hand-written lives in `/data`. Edit on github.com and the site redeploys in ~1 minute.

| File | What it controls |
|---|---|
| `data/profile.yaml` | name, role, one-line thesis, intro, social links |
| `data/now.md` | the "Now" section |
| `data/talks.yaml` | talks & keynotes (newest first) |
| `data/journey.yaml` | career timeline (keep in sync with LinkedIn) |
| `data/impact.yaml` | "Beyond work" builds |
| `data/featured-repos.yaml` | pinned GitHub repos (stars refresh automatically) |
| `public/headshot.jpg` | portrait (falls back to GitHub avatar) |

## Local dev

```bash
npm install
npm run feeds   # optional: refresh data/feeds
npm run dev     # http://localhost:4321
```
