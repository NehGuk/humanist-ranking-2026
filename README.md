# Humanist Ranking | Brazilian presidential election, 2026

This is a project by Humanistas Brasil, comparing politicians who are running for the 2026 Brazilian presidential elections against a set of humanist values — where each candidate stands on science, secular education, public health, democracy, human rights, and the protection of minorities, among other criteria.

The goal is to give voters a clear, side-by-side view of each candidate's positions, sourced from public statements, voting records, and official platforms, so people can compare candidates on substance rather than rhetoric.

## Tech stack

- **Frontend:** React + TypeScript (Vite)
- **Database:** Supabase (PostgreSQL), queried directly from the frontend
- **Storage:** Supabase Storage, for candidate photos
- **Hosting:** static deploy (Vercel/Netlify/Cloudflare Pages)

## What it does

- Lists all registered presidential candidates for the 2026 election, with party, ballot number, and photo
- Shows each candidate's stance — **in favor**, **against**, or **no stated position** — on 12 humanist criteria
- Displays a hand-curated point score (`pontos`) reflecting overall alignment with humanist values

## Humanist criteria tracked

- Support for Brazilian scientific research
- Science-based, secular education
- Promotion of public health
- Promotion of democracy
- Promotion of human rights
- Promotion of religious freedom
- Promotion of freedom of expression
- Right to legal and universal abortion
- Right to euthanasia and assisted dying
- Protection of minorities: women
- Protection of minorities: LGBTQIAPN+
- Protection of minorities: Black and Indigenous people

No separate backend server — the frontend talks to Supabase directly, with Row Level Security policies controlling access (public read, restricted write).

## Data sources

Candidate data is sourced from the Tribunal Superior Eleitoral (TSE) and the stance classifications are curated by Humanistas Brasil based on public statements, voting records, and official campaign platforms.

## About us

- [Humanistas Brasil](https://humanistas.ong.br)
- [Humanists International](https://humanists.international)

## Disclaimer

This project reflects an independent, values-based assessment and is not affiliated with, endorsed by, or representative of any political party or candidate listed.
