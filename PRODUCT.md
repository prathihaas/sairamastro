# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two-wheeler buyers in Nizamabad district, Telangana — first-time buyers, farmers, students, working professionals, and families. They are researching a purchase before or instead of visiting a showroom, and branch proximity matters to them (7 branches across the district, several in villages and small towns).

Device and network reality is a hard constraint, not a nicety: budget Android phones on patchy 4G, data-conscious. Weight, render speed, and one-handed tap targets govern every decision.

Language: English leads the interface, but Telugu is mandatory on every surface — not decorative. Many buyers read Telugu first. The existing pattern (English primary line + Telugu companion line, `font-noto` / Noto Sans Telugu) is confirmed product truth, and content collections carry paired fields (`title_en`/`title_te`, `name_en`/`name_te`, `address_en`/`address_te`).

## Product Purpose

Marketing and lead-generation site for Sairam Honda, an authorized Honda (HMSI) two-wheeler dealership. Its job is to turn local search demand into **WhatsApp enquiries**.

Success is a WhatsApp chat started. Confirmed by the user as the single primary conversion — calls, branch directions, test rides, and organic reach are supporting, not the goal. Every WhatsApp link carries a `[W-SH]`-style tracking tag so the enquiry is attributable downstream; that tagging is load-bearing and must survive any redesign.

## Positioning

The largest authorized Honda two-wheeler network in Nizamabad district — 7 branches, operating since 2003 (22+ years). A single-showroom competitor cannot truthfully claim district-wide coverage, and an unauthorized seller cannot claim HMSI warranty, Honda-trained technicians, and genuine OEM parts. Proximity plus authorization is the defensible position.

## Operating Context

- The buyer's real sequence: search a model or a local query → check on-road price, EMI, and mileage → compare Honda against TVS / Hero / Bajaj / Suzuki → find the nearest branch → WhatsApp or call.
- Price, EMI, and exchange value are the dominant decision inputs. Finance is on-site (HDFC, SBI, Bajaj Finance, IDFC First); EMI and zero-down schemes are routinely the reason a visitor makes contact.
- A large hyper-local organic surface already exists: ~60 blog posts covering per-village queries (Armoor, Bodhan, Balkonda, Bheemgal, Dichpally, Nandipet, Bichkunda, and more) plus model-vs-model comparisons. This is a real acquisition channel and part of the product, not filler.
- Showroom hours: Monday–Saturday, 9 AM – 7 PM, all branches. Doorstep pickup/drop for servicing in Nizamabad city.

## Capabilities and Constraints

- Astro 4.15 static site, Tailwind 3.4, React islands available (`@astrojs/react`, `lucide-react`). Deploys via Vercel. `site: https://www.sairamhonda.com`, `trailingSlash: "always"`.
- Content collections define the data contract: `blog`, `products` (14 models), `branches` (7, with `geo` lat/lng and per-branch phone), `pages`. The blog schema is a shared Prakash Group schema — **field names must not be changed**.
- Routes: `/`, `/products/` + `[slug]`, `/branches/` + `[slug]`, `/blog/` + `[slug]`, `/service`, `/about`, `/privacy`, `/404`, `/lp/honda-nizamabad` (paid landing page, excluded from sitemap).
- Tracking is live and must not be broken: GTM `GTM-TJXW67R9`, an inline lead-source classifier that stamps WhatsApp links with traffic source, and sitemap `serialize` rules that set per-section priority/changefreq/lastmod.
- Structured data is already invested in (FAQPage, Organization, BreadcrumbList, per-branch local schema). Treat it as a shipping feature.
- **Prices are volatile.** On-road figures on product pages and in copy are "starts from" values that change with RTO, insurance, and scheme. Never invent, round, or restate a price without a current source.

## Brand Commitments

- Name: **Sairam Honda** / **సాయిరామ్ హోండా**, Nizamabad. Established 2003.
- **Honda / HMSI corporate identity is strictly binding** (user-confirmed). Colors, typography, logo lockups, and model naming follow Honda's dealer identity rules.
  - **Resolved 2026-08-08:** the user pinned **https://www.honda2wheelersindia.com** as the visual authority. Its computed values (Honda red `#CC0000`, Inter 300–700, pure-neutral grays, flat surfaces, pill CTAs) are now the system of record — see DESIGN.md.
  - **Still open:** the HMSI dealer identity manual itself has not been supplied. Where the manual and the corporate site conflict, the manual wins. The wordmark is set type, not an authorized dealer lockup.
- Contact points in use: primary phone **8886640573**, WhatsApp **9666679377**, plus a distinct phone per branch (Armoor 9052416222, Bodhan 8886022883, Dichpally 8501981831, Dharpally 9052116565, Nandipet 9052112384, Bichkunda 9052119555). These are NAP-critical — changing one is a business decision, not a design one.
- Voice: plainly factual and local. Prices, EMI figures, warranty and authorization claims are stated directly. No aspirational or lifestyle-brand language.

## Evidence on Hand

- 7 branches with real addresses, postal codes, geo coordinates, and phone numbers (`src/content/branches/`).
- 14 product entries with names, prices, mileage, and category (`src/content/products/`).
- ~60 published blog posts (`src/content/blog/`).
- Imagery: `public/images/hero.jpg`, `service-workshop.jpg`, per-product and per-blog images, `logo.png`, `og-image.jpg`.
- Existing on-site claims that are **inherited, not verified in this repo**: "1,159+ Google reviews", "22+ years", "largest Honda two-wheeler network in Nizamabad district", "EMI from ₹2,100/month", "exchange bonus up to ₹5,000". Future work must carry these forward as-is or get them re-confirmed — it must not restate them at new numbers.
- No customer testimonials, case studies, or press assets exist in the repo. Do not fabricate them.

## Product Principles

1. **The WhatsApp enquiry is the product.** Any surface that does not shorten the path to a tagged WhatsApp chat is overhead.
2. **Weight is a feature.** The buyer is on a budget Android on patchy 4G. Anything that costs render time must earn it in conversions.
3. **Telugu is not a translation layer.** Every surface ships bilingual; the Telugu line is content, and dropping it breaks the product for real users.
4. **Proximity sells.** Which of the 7 branches is nearest, and how to reach it, is a first-class piece of information, not a footer detail.
5. **Numbers are claims, not copy.** Prices, EMI, review counts, and warranty statements are business facts sourced elsewhere — never invented or adjusted to fit a layout.

## Accessibility & Inclusion

- Bilingual EN + TE on every surface (see Users). Telugu text requires Noto Sans Telugu and enough line-height to render its matras correctly.
- Low-end Android and slow-network performance are accessibility issues here, not just performance ones.
- Tap targets sized for one-handed use on small screens; the persistent WhatsApp CTA must remain reachable without obscuring content.
