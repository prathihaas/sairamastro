# Design

<!-- impeccable:design-schema 1 -->

## Visual authority

Honda Motorcycle & Scooter India's corporate site, **https://www.honda2wheelersindia.com**, pinned by the user as the binding reference. Every token below was read from computed styles on that site, not approximated from brand memory.

This is a dealer surface executing HMSI's identity, not an independent brand. When this file and the corporate site disagree, the corporate site wins — re-read it and update this file.

## Color

| Role | Value | Notes |
|---|---|---|
| Honda red | `#CC0000` | `red-600`. The only saturated color in the system. |
| Red hover | `#A80000` | `red-700` |
| Red tint | `#FFF5F5` / `#FFE5E5` | `red-50` / `red-100`, for quiet chips only |
| Heading ink | `#000000` | pure black, not a near-black |
| Body copy | `#707070` | `gray-600` — Honda's own body value |
| Ground | `#F7F7F7` | `gray-50` — section and footer ground |
| Hairline | `#E1E1E1` | `gray-200` — all borders are 1px |
| Surface | `#FFFFFF` | cards and header |
| WhatsApp | `#25D366` / hover `#20BD5A` | platform color, not Honda's; used only on WhatsApp actions |

Strategy is **restrained**: neutrals plus one accent. Red never carries a region — it appears on pill CTAs, the wordmark, and link hovers. On the homepage it lands on roughly the same number of elements as on Honda's own homepage (18 vs 19 backgrounds).

Tailwind's default `red` and `gray` scales are **overridden** in `tailwind.config.mjs`. Tailwind's gray is blue-tinted and reads as a different brand beside `#CC0000`; Honda's neutrals are pure. Writing `bg-red-600` or `text-gray-600` anywhere in this project therefore yields a Honda value automatically.

## Type

**Inter** (300/400/500/600/700) plus **Noto Sans Telugu** (400/500/700), both from Google Fonts.

Inter is a deliberate deviation from the usual advice against it: Honda's corporate site self-hosts Inter, so matching the pinned identity requires it. The design detector flags `overused-font` on this and the flag is **accepted, not suppressed** — the brief outranks the heuristic.

| Role | Size / line-height | Weight |
|---|---|---|
| Page heading | `text-h-lg` — 32 / 38 | 600 |
| Section heading | `text-h-md` — 28 / 32 | 600 |
| Card heading | `text-h-sm` — 20 / 28 | 600 |
| Body | 16 / 24 | 400 |
| Small | 14 | 400–600 |

Weight ceiling is **700**. `font-black` and `font-extrabold` are remapped to 700 in the config so no stray utility can reintroduce 900 — Honda never goes heavier, and 900 is the single loudest tell of a generic dealer site.

No `text-transform: uppercase` and no letter-spacing on labels. Honda computes `none` / `normal` everywhere.

**Telugu:** `.font-noto` carries `line-height: 1.55` globally. Telugu matras sit above and below the baseline and a 1.0 leading clips them; the companion line must never inherit a tight leading from its container. Minimum size 12px, minimum color `#707070` (5.3:1 on white).

## Form

- **Corners:** 24px on cards and containers (`rounded-lg` / `xl` / `2xl` all resolve to 24px), 28px on controls (`rounded-pill`). Nothing in between.
- **Controls:** pill, `px-8 py-4` for primary and `px-6 py-3` for secondary, weight 600, 16px. Red fill for Honda actions, WhatsApp green for WhatsApp actions, white with a hairline border for tertiary.
- **Elevation:** none. Every shadow scale in the config resolves to `none`, matching Honda's flat surface. The single exception is `shadow-float` on the fixed WhatsApp control, which sits above content and must read as detached.
- **Borders:** 1px, `#E1E1E1`. Cards signal hover by shifting the border to Honda red, never by lifting.
- **Header:** fixed, solid white, 78px, no rule beneath it. No backdrop blur.
- **Rhythm:** 60px section padding (`p-section`).

## Refused in this world

These were present before the realignment and were removed; do not reintroduce them:

- 900-weight headings, uppercase tracked micro-labels, and kicker/eyebrow lines above headings
- drop shadows on cards, and colored glow shadows (`rgba(220,38,38,…)`)
- background gradients
- emoji standing in for icons in controls — icons are inline SVG, 2px stroke, `currentColor`
- 4px colored `border-left` accents on headings
- Tailwind's default blue-tinted grays and default red

## Load-bearing behavior this system must not break

Design changes here sit on top of live tracking. Preserve on every edit:

- every `wa.me` link and its `[W-SH]` / `[W-HP]` tracking tag
- GTM container `GTM-TJXW67R9` and the inline lead-source classifier in `Layout.astro`
- the direction contract HTML comment as the first child of `<body>` (it must survive the production build)
- bilingual EN + TE pairing on every label

## Icons

Inline SVG, 24×24 viewBox, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, round caps and joins. The WhatsApp glyph is the one filled exception (official mark). `lucide-react` is installed and is the reference for stroke character.

## Open

- The HMSI dealer identity manual has still not been supplied. The corporate site now stands in as the authority. If the manual later contradicts anything here — particularly logo lockup and wordmark treatment — the manual wins.
- The wordmark is currently set type ("Sairam Honda" in red Inter 600), not an authorized Honda dealer lockup. Replace when the real asset is available.
