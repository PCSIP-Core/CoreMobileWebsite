# Core Mobile — Design System

A reusable brand & UI design system for **Core Mobile, Inc. (CMI)** — `coremobile.ai` / `coremobileinc.com`. It packages the brand's logos, color palette, typography, iconography, visual foundations, content voice, and branded UI-kit components so any design agent can produce on-brand Core Mobile interfaces, decks, and assets.

---

## 1. Company & product context

**Core Mobile, Inc.** is a Silicon Valley (Campbell, CA; founded 2011, ~45 people, Citrix-backed) company building **Native-AI healthcare technology**. The thesis: *increase the capacity of hospitals and care systems without adding staff or beds*, while reducing clinician burnout and improving patient outcomes.

The platform is a **patented Clinical AI Workflow & Optimization platform** with national **Authority to Operate (ATO)** and **HIPAA + FISMA** compliance — which makes "secure / compliant / federal-grade" a core part of the brand story, not a footnote.

Capability areas seen across CMI's public material:
- **Clinical scheduling & workflow optimization** (perioperative / OR throughput)
- **Ambient AI** + **video monitoring** with sentinel-event detection
- **Telehealth** & **patient engagement**
- **Real-time patient & asset tracking** (RTLS / IoT)
- **Predictive analytics** & ML-driven operational insight
- **EHR/EMR integration** ("data bus") into protected healthcare networks

Named product surfaces referenced publicly (CMI's "Corey" family):
- **CoreyHealth** & **CoreyPatient** — mobile apps (patient + provider)
- **CoreyPeriop** — perioperative / OR workflow system

Reported outcomes CMI markets: +5–20% patient throughput, up to 95% OR utilization, 5–40% fewer cancellations/delays, 500–600% 3-yr ROI. Use numbers like these as the *style* of proof points the brand leans on (concrete, percentage-based, outcome-framed).

> ⚠️ **What I had vs. didn't have.** This system was built from the two source files below — the official logos and the 2025 color palette. **No product codebase, Figma file, or screenshots of the live product were provided.** The brand foundations (color, type, logo, iconography, voice) are therefore authoritative; the **UI kits are brand-accurate, illustrative recreations** of plausible Core Mobile surfaces — not pixel copies of shipping screens. See the bold ask at the end of this file.

---

## 2. Sources

| Source | What it gave us | Access |
|---|---|---|
| `uploads/Core Mobile AI - Long.jpg` | Full-color horizontal logo (teal on white) | in project → `assets/logo-long-*` |
| `uploads/Core Mobile AI - Long - White.png` | Reversed (white) horizontal logo, transparent | in project |
| `uploads/Core Mobile AI - Compact - White.png` | Reversed stacked/compact logo, transparent | in project |
| `uploads/Core Mobile Color Palette 2025.pdf` | "CMI Brand Guidelines VS_01.00" — 5 primary + 10 secondary named colors w/ HEX & RGB | parsed → `colors_and_type.css` |
| Public web (coremobileinc.com, press, profiles) | Company/product context above | external |

If you have the rest of the brand book (`CMI Brand Guidelines VS_01.00`), the real product Figma, or the marketing-site / app codebase, drop them in and re-run — the UI kits can then be made pixel-exact.

---

## 3. Index / manifest

Root files:
- **`README.md`** — this file.
- **`colors_and_type.css`** — all design tokens as CSS custom properties (palette, teal scale, neutrals, semantic, radii, shadows, spacing, type). **Load first.**
- **`SKILL.md`** — Agent-Skills front-matter so this folder works as a downloadable Claude skill.
- **`assets/`** — logos (teal + white, long + compact), favicon/app glyph. See [Iconography](#7-iconography).
- **`preview/`** — small HTML specimen cards that populate the Design System tab (colors, type, components, logos…).
- **`ui_kits/`** — branded UI-kit recreations, one folder per product surface:
  - `ui_kits/clinical-console/` — the **CoreOS clinical operations console** (web dashboard: OR/throughput, live monitoring, analytics).
  - `ui_kits/coreypatient-app/` — the **CoreyPatient** mobile app (patient-facing).
- **`slides/`** — *(none — no deck template was provided).* 

---

## 4. Content fundamentals (voice & copy)

How Core Mobile writes:

- **Register:** confident, clinical, enterprise-credible. This is healthcare sold to hospital executives, clinicians, and federal buyers — so copy is precise and proof-driven, never cute.
- **Person:** speaks as **"we"** about the company ("We harness artificial intelligence to…"), and addresses the customer as **"you / your facility / your teams."** Patient-facing app copy is warmer and more direct second-person ("Your surgery is scheduled for…").
- **Outcome-first sentences.** Lead with the result, then the mechanism: *"Increase hospital capacity — without adding staff or beds."* Quantify whenever possible (percentages, time saved, ROI).
- **Casing:** Title Case for product names and nav; sentence case for body and UI labels. The wordmark is all-caps (**COREMOBILE AI**) but that's lockup styling, not a copy rule — don't set paragraphs in all-caps. Short uppercase **eyebrows/labels** with letter-spacing are on-brand (see `.cm-eyebrow`).
- **Vocabulary:** "AI-Native / Native AI," "clinical workflow," "throughput," "capacity," "care coordination," "ambient," "real-time," "predictive," "interoperable," "compliant," "Authority to Operate (ATO)," "HIPAA," "FISMA." Capitalize **AI** and acronyms (EHR, EMR, OR, RTLS, IoT, PACU, ED).
- **Compliance is a feature, say it plainly.** Badges/lines like "HIPAA & FISMA compliant" and "National ATO" belong near primary CTAs and in footers.
- **Tone guardrails:** no hype-slang, no exclamation overload, **no emoji** in product or marketing surfaces. Avoid fear-based copy about patients; frame around enabling clinicians and systems.
- **Examples (on-brand):**
  - Eyebrow → H1: `FOUNDATIONAL CLINICAL AI` → *"Connected care, coordinated in real time."*
  - Proof point: *"Up to 95% OR utilization. 5–20% more throughput. No new beds."*
  - CTA pair: **"Request a demo"** / *"Watch the 2-min overview."*
  - App nudge (CoreyPatient): *"You're checked in. Your care team has been notified."*

---

## 5. Visual foundations

**Overall vibe:** clean, clinical, trustworthy, modern-medical. Lots of white space, a single confident **teal** as the hero color, crisp cards, and restrained use of warm pastel accents. Think "FDA-grade software that still feels human," not consumer-flashy.

**Color usage**
- **Eastern Blue teal `#008895` is the hero** — primary buttons, active states, links, key data, brand gradient. Use the `--teal-*` scale for depth.
- The **logo gradient** sweeps teal → teal-green (`#007E8C → #3AAE9F`, see `--grad-brand`). Use it sparingly: hero panels, the brandmark, an occasional KPI highlight — never behind body text.
- **Neutrals do the heavy lifting.** Slate ink anchored on **Big Stone `#333A45`** for text; near-white canvas `#F7F9FA`; white cards. Most of any screen is neutral; teal is the spark.
- **Secondary pastels (blush, sweet-pink, chantilly, khaki, tacao, periwinkle, etc.) are accents only** — chart series, illustration, category tags, status. Per the brand book they must **never** be used on primary brand-identity assets (logo lockups, hero brand panels).
- **Clinical status mapping:** success/stable = green-teal; info = Tory Blue; warning = amber (from Tacao); critical/alert = Blush red. Keep these consistent across products — clinicians read color as signal.

**Typography** (see also `colors_and_type.css`)
- **Display/headings:** *Poppins* — geometric, rounded, friendly-but-serious; the **nearest Google Fonts match to the COREMOBILE wordmark** (heavy geometric sans with circular O's). ⚠️ *Substitution flag: the actual logo letterforms may be a custom/licensed face; swap Poppins for the licensed brand font if you have it.*
- **UI & body:** *Public Sans* — a neutral, legal/government-grade open sans. Deliberately chosen because CMI's identity is federal-ATO healthcare; it reads as official and is highly legible at small sizes in dense clinical UIs.
- **Data / IDs / vitals:** *IBM Plex Mono* with tabular numerals — for MRNs, room numbers, timestamps, vitals, and any aligned numeric column.
- Scale tops out around 44px display for web; on 1920-wide layouts go larger. Minimum body 15px; dense table text no smaller than 12–13px.

**Spacing & layout**
- 4px base grid (`--sp-*`). Comfortable, airy density for marketing; tighter, information-dense for clinical consoles (but never cramped — 44px min touch targets on mobile/tablet, important since clinicians use gloved tablets).
- Fixed app chrome: left nav rail + top bar on the console; bottom tab bar on the patient app.

**Cards, borders, elevation**
- Cards = white, **`--r-lg` (14px)** radius, hairline `--border` (#DEE1E5), soft `--shadow-sm`/`--shadow-md`. Avoid heavy/dark shadows. No "rounded card + single colored left-border" cliché.
- Corner radii: controls/inputs `--r-md` (10px); buttons `--r-md`; pills/tags/avatars `--r-pill`; large surfaces `--r-xl`.
- Borders are thin and cool-grey; rely on shadow + radius for separation, not heavy outlines.

**Backgrounds & texture**
- Predominantly **flat** white / near-white. Hero or section moments may use the **teal gradient** or a very subtle concentric-ring motif echoing the logo's target glyph (low-opacity, decorative). No photographic noise/grain. No busy patterns. Imagery, when used, skews **clean clinical photography** with cool-neutral grading and teal accents — keep it calm and bright, not dramatic.

**Motion**
- Purposeful and quick. Ease-out, 150–240ms for UI transitions; gentle fades and 4–8px rises for entrance. Live/monitoring elements may use a slow pulse on the **`--vitals`** accent. No bouncy/playful springs, no infinite decorative loops in clinical views (alarm fatigue is real).

**Interaction states**
- **Hover:** brand buttons darken one step (`--brand` → `--brand-hover`); ghost/secondary get a `--brand-tint` fill; cards lift from `--shadow-sm` to `--shadow-md`.
- **Press:** darken another step (`--brand-press`) + ~1px nudge; no large scale changes.
- **Focus:** 3px teal focus **ring** (`--ring`) — visible and accessible; never remove outlines in clinical software.
- **Disabled:** drop to `--ink-300` text on `--ink-100`, no shadow.
- **Transparency/blur:** used sparingly — sticky bars and modals over content may use a light backdrop blur with an 85–92% white veil; otherwise prefer solid surfaces for clinical legibility.

---

## 6. Color palette reference

**Primary (5)** — brand identity assets:
| Name | Hex | RGB |
|---|---|---|
| Quartz | `#CDDBF2` | 205, 219, 242 |
| Sky Blue | `#76C0EF` | 118, 192, 239 |
| Khaki | `#F2DB94` | 242, 219, 148 |
| Tacao | `#F7BA7E` | 247, 186, 126 |
| **Eastern Blue** (hero teal) | `#008895` | 0, 136, 149 |

**Secondary (10)** — accents only, never on primary identity:
| Name | Hex | RGB |
|---|---|---|
| Blush | `#B74B59` | 183, 75, 89 |
| Sweet Pink | `#EB9485` | 235, 148, 133 |
| Pot Pourri | `#EFDACE` | 239, 218, 206 |
| Chantilly | `#E5B0CB` | 229, 176, 203 |
| Grey Chateau | `#9A9FA5` | 154, 159, 165 |
| Tory Blue | `#3A5B92` | 58, 91, 146 |
| Charlotte | `#93D1E2` | 147, 209, 226 |
| Puerto Rico | `#47AD9E` | 71, 173, 158 |
| Jordy Blue | `#858FEA` | 133, 143, 234 |
| Big Stone | `#333A45` | 51, 58, 69 |

---

## 7. Iconography

- **Icon system: Font Awesome.** CMI's own web stack lists Font Awesome (alongside Bootstrap), so Font Awesome is the canonical icon set for Core Mobile UIs. Use **Font Awesome 6 (free, solid + regular)** via CDN. Prefer the **solid** style for nav/actions and **regular** for secondary/outline contexts. Keep icons monochrome — `--fg-2` at rest, `--brand` when active.
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css">
  ```
  Healthcare-relevant glyphs in regular use: `fa-heart-pulse`, `fa-user-doctor`, `fa-hospital`, `fa-bed`, `fa-calendar-check`, `fa-video`, `fa-bell`, `fa-shield-halved`, `fa-chart-line`, `fa-location-dot`, `fa-notes-medical`.
- **Brandmark glyph:** the logo's **"target + pointing hand"** mark sits inside the **O of CORE** — concentric rings (precision / focus / "core") with a hand reaching the bullseye (reach / mobility / action). It's the one piece of bespoke iconography; use the supplied logo files rather than redrawing it. A subtle concentric-ring motif derived from it is acceptable as decorative texture.
- **Emoji:** not used in product or marketing.
- **Unicode-as-icon:** avoid; use Font Awesome instead. Tabular figures (IBM Plex Mono) cover numeric "iconography" like trend arrows ▲▼ in data tables where a real icon is overkill.
- **No hand-drawn SVG icons.** Don't invent icon art — use Font Awesome or copy real brand assets.

---

## 8. Caveats & how to make this perfect

See the closing message — short version: foundations are solid; the **UI kits are illustrative** because no product code/Figma/screenshots were provided, and **Poppins is a stand-in** for the logo font. Provide those and this becomes pixel-exact.
