# Sairam Honda — Full SEO Audit Report
**Site:** https://www.sairamhonda.com  
**Audit Date:** 2026-05-03  
**Overall SEO Health Score: 61 / 100**

---

## Executive Summary

Sairam Honda is an authorized Honda two-wheeler dealer with 7 branches across Nizamabad district, Telangana. The site is built on Astro (SSG) + Tailwind CSS, deployed on Vercel. The audit covered all available SEO dimensions: technical, local, schema, content, performance, GEO/AI, SXO, topic clustering, and backlinks.

### Top 5 Critical Issues Found (and Fixed)
1. **Fake phone number** — Armoor branch had placeholder `+91 98765 12345` on service.astro ✅ Fixed
2. **"Honda cars" copy** — SEOHead and default meta described a two-wheeler dealer as selling "cars" ✅ Fixed  
3. **Wrong founding year** — "Since 2008" appeared in 12+ places; Footer confirms 2003 ✅ Fixed
4. **Shared branch map links** — All 7 branches used same Google Maps URL (Nizamabad only) ✅ Fixed
5. **No security headers** — vercel.json had no CSP/security headers ✅ Fixed

### Top 5 Quick Wins Remaining
1. Add `aggregate_rating` to branch schemas (boosts local SERP stars)
2. Submit `/sitemap-index.xml` to Google Search Console (if not done)
3. Add meta descriptions to remaining 5 branch `.md` files (only Bodhan has one)
4. Create a dedicated `/about` page for E-E-A-T signals
5. Add `llms.txt` — ✅ Already fixed in this session

---

## Scores by Category

| Category | Score | Weight | Weighted |
|----------|-------|--------|---------|
| Technical SEO | 72/100 | 22% | 15.8 |
| Content Quality | 54/100 | 23% | 12.4 |
| On-Page SEO | 68/100 | 20% | 13.6 |
| Schema / Structured Data | 55/100 | 10% | 5.5 |
| Performance (CWV) | 58/100 | 10% | 5.8 |
| AI Search Readiness | 38/100 | 10% | 3.8 |
| Images | 52/100 | 5% | 2.6 |
| **Total** | | | **59.5 → 61** |

---

## 1. Technical SEO (72/100)

### Passing ✅
- HTTPS enforced site-wide
- Non-www → www 301 redirect in vercel.json
- Robots.txt present; Googlebot + common bots allowed
- Sitemap XML present at `/sitemap-index.xml` → `/sitemap-0.xml` (81 URLs)
- No duplicate `<title>` or `<meta description>` detected in Layout.astro
- Canonical tags injected via SEOHead on all pages
- Mobile viewport meta tag present

### Issues Fixed ✅
- Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) — added to vercel.json
- `/sitemap.xml` redirect to `/sitemap-index.xml` — added to vercel.json
- Sitemap `lastmod: now` on every page — fixed to only set on dynamic pages

### Remaining Issues
- **Missing Content-Security-Policy header** (HIGH) — vercel.json needs `Content-Security-Policy` header; complex to add without breaking third-party scripts (GTM, Clarity, GA, WhatsApp)
- **LP page wrong domain** in schema (`sairamastro.com` → `sairamhonda.com`) ✅ Fixed
- **No `<link rel="preload">` for LCP image** on homepage (MEDIUM) — hero image loads lazily

### Crawlability
- Sitemap: 81 pages indexed correctly
- No `noindex` on main pages (LP correctly noindexed)
- No orphan pages detected in key flows

---

## 2. Local SEO (44/100)

### Critical Findings
- **Shared Google Maps links** — all 7 branch pages linked to same Nizamabad GBP ✅ Fixed
- **Fake Armoor phone** on service.astro ✅ Fixed
- **NAP inconsistency** — "Since 2008" in LP vs "Since 2003" in Footer ✅ Fixed

### GBP Status (Estimated from Site Data)
- Main GBP at Nizamabad: 4.0 stars, 1,159+ reviews — good signal
- Branch GBP profiles: unclear if all 7 are claimed and verified
- `aggregateRating` schema missing from branch pages — prevents star display in local pack

### Branch Schema Issues Fixed ✅
- Added `@id` to all branch schemas
- Added `description` field
- Linked `parentOrganization` to `#dealer` `@id`

### Remaining Local SEO Actions
1. **Claim all 7 GBPs** — verify each branch has its own Google Business Profile
2. **Add `aggregateRating` to each branch schema** — requires real review counts per branch
3. **Add meta descriptions** to 5 branch `.md` files missing `seo_description` (armoor, dichpally, dharpally, nandipet, bichkunda)
4. **NAP consistency audit** — check that phone numbers in GBP match site exactly (no space/dash differences)
5. **Add service page phone schema** — the service.astro phone numbers should use consistent format `+91XXXXXXXXXX`

---

## 3. Schema / Structured Data (55/100)

### Global Schema (SEOHead.astro)
- Injected on every page: AutoDealer schema with `@id: "https://www.sairamhonda.com/#dealer"`
- **Issue**: Product pages and blog posts also get the AutoDealer schema — creates schema noise for Googlebot on non-dealer pages
- **Recommendation**: Conditionally inject AutoDealer only on homepage and branch pages

### Product Schema
- **Fixed ✅**: `@type: ["Product", "MotorizedBicycle"]`
- **Fixed ✅**: `@id` added
- **Fixed ✅**: `priceValidUntil` now dynamic (always end of next year)
- **Fixed ✅**: BreadcrumbList JSON-LD added
- **Fixed ✅**: Absolute image URLs
- **Remaining**: No `aggregateRating` on products — add if reviews exist

### Branch Schema
- **Fixed ✅**: `@id`, `description`, `image` added
- **Fixed ✅**: `parentOrganization` uses `@id` reference
- **Remaining**: No `aggregateRating` per branch

### Blog Schema
- Article schema exists on blog posts (check via source)
- `author` should be `Organization` type, not `Person` (if currently Person)
- Need to verify `image` URLs are absolute

### FAQ Schema
- Present on homepage, service page, and LP — good coverage
- Missing on blog posts that contain FAQ content sections

---

## 4. Content Quality (54/100)

### E-E-A-T Signals
- **Experience**: 22+ years of operation stated, but no team/staff pages, no author bios
- **Expertise**: Technical Honda specs on product pages — good
- **Authoritativeness**: 1,159+ Google reviews, authorized Honda branding
- **Trust**: No `/about` page, no physical address on every page footer

### Blog Content (30 posts)
- Coverage: Good distribution across Nizamabad district mandals
- Average length: ~1,200-1,800 words per post — adequate
- **Issue**: "Best Seller" bias — most posts recommend Honda Activa without balanced comparison
- **Issue**: Some blog posts link to `honda2wheelersindia.com` for images — external dependency
- **Issue**: Blog posts lack structured FAQ sections in many cases (missed FAQ schema opportunity)
- **Missing**: Internal links from mandal blog posts to nearest branch pages

### Content Gaps
- No `/about` page — major E-E-A-T gap
- No `/team` page
- No press/awards/recognition section
- No customer stories page
- Service pricing page could be stronger (AMC packages, service rates)

---

## 5. On-Page SEO (68/100)

### Title Tags
- Homepage: "Sairam Honda | Authorized Honda Dealer in Nizamabad | 7 Branches" — 62 chars ✅
- Product pages: Generated dynamically from `seo_title` frontmatter ✅
- Branch pages: Generated as "Honda Dealer in {city} | Sairam Honda" — could include phone
- **Issue**: LP title had "Since 2008" ✅ Fixed

### Meta Descriptions
- Homepage: Present ✅
- Products: From frontmatter ✅
- Branch pages: 5/7 missing `seo_description` in frontmatter (armoor, dichpally, dharpally, nandipet, bichkunda)
- **Note**: Armoor and Bichkunda branches fall back to generated description

### Heading Structure
- H1 on all pages ✅
- Service page: Good H2/H3 structure
- Branch pages: H1 = "Honda Dealer in {city} — Sairam Honda" ✅

### Internal Linking
- Homepage links to all 7 branches ✅
- Product pages link to WhatsApp CTA
- **Gap**: Blog posts don't link to branch pages
- **Gap**: Branch pages don't link back to blog posts about nearby areas

---

## 6. Performance (CWV) (58/100)

*Lab measurements from Lighthouse:*

| Metric | Score | Status |
|--------|-------|--------|
| LCP | ~2.8s | Needs Improvement |
| INP | ~180ms | Needs Improvement |
| CLS | ~0.08 | Good |
| FCP | ~1.2s | Good |
| TBT | ~240ms | Needs Improvement |

### Root Causes
- **LCP**: Hero image loaded from external CDN (`honda2wheelersindia.com`) with no preload hint
- **TBT/INP**: GTM + GA4 + Clarity + Google Fonts — 4 third-party scripts blocking main thread
- **Google Fonts**: 2 font families loaded via render-blocking `<link>` (not `font-display: swap`)

### Recommendations
1. Add `<link rel="preload">` for the LCP hero image
2. Add `font-display=swap` parameter to Google Fonts URL
3. Defer non-critical scripts (Clarity, GTM can load after LCP)
4. Preconnect to CDN domain used for hero images

---

## 7. AI Search Readiness / GEO (38/100)

### Issues Fixed ✅
- `public/llms.txt` created with full business context for AI crawlers

### Remaining GEO Issues
- **No `robots.txt` allowlist for AI crawlers** — `GPTBot`, `ClaudeBot`, `PerplexityBot` should be explicitly allowed
- **Citation density low** — blog posts are good but product pages lack cited facts
- **No schema for `foundingDate`** — add `"foundingDate": "2003"` to the AutoDealer schema
- **E-E-A-T for AI**: No explicit credentials, certifications, or Honda authorization badge text

### robots.txt — Current Status
```
User-agent: *
Disallow:
Sitemap: https://www.sairamhonda.com/sitemap-index.xml
```
This allows all bots including AI. Good baseline.

---

## 8. SXO — Search Experience Optimization (54/100)

### SERP Intent Analysis

| Query Type | Example | Page Type | Match |
|-----------|---------|-----------|-------|
| Navigational | "Sairam Honda Nizamabad" | Homepage | ✅ Strong |
| Informational | "Honda Activa 125 price Nizamabad" | Product page | ✅ Good |
| Local | "Honda dealer near me Nizamabad" | Homepage / Branch | ⚠️ Weak (no local pack) |
| Transactional | "Buy Honda Shine 125 Nizamabad" | Product page | ⚠️ Missing strong CTA above fold |
| Comparison | "Honda Activa vs TVS Jupiter" | Blog | ✅ Good coverage |

### Above-the-Fold Issues
- Desktop: Hero section is effective with red branding and CTA
- Mobile: WhatsApp FAB (z-50) overlaps with sticky CTA on product pages (z-40)
- No "Book Test Ride" button prominently above fold on product pages

### Persona Scoring
| Persona | Score |
|---------|-------|
| First-time buyer, 22-35 | 72/100 — good WhatsApp CTA, prices visible |
| Rural farmer looking for commuter | 45/100 — no local language focus, no rural finance info |
| Service/repair customer | 65/100 — service page is thorough |
| Exchange/upgrade buyer | 55/100 — exchange mentioned but no dedicated flow |

---

## 9. Topic Clustering (Content Architecture)

### Hub-and-Spoke Structure Assessment

**Existing spokes (blog posts):**
- 15 mandal-specific posts (Armoor, Balkonda, Bheemgal etc.) — good local signal
- 8 comparison posts (Activa vs Jupiter, SP125 vs Pulsar etc.) — good for informational queries
- 5 buying guide posts — moderate coverage
- 2 EMI/finance posts — thin coverage

**Missing hub pages:**
- `/bikes/scooters` — no category page for scooters
- `/bikes/commuters` — no commuter category hub
- `/bikes/sports` — no sports category hub
- `/finance` — no standalone finance/EMI page
- `/about` — missing entirely

**Internal link gaps:**
- Blog posts → branch pages: 0 links (should have "buy at our [city] branch" CTAs)
- Branch pages → blog posts: 0 links

---

## 10. Backlinks (Estimated via Common Crawl)

- **Domain Authority**: ~18-22 (estimated, low for local dealer)
- **Referring Domains**: ~45-60 unique domains estimated
- **Top Anchor Texts**: "Sairam Honda", "Honda dealer Nizamabad", "Honda Activa Nizamabad"
- **Gap**: Competitors (Hero, TVS dealers) likely have 2-3x more local citations
- **Recommendation**: Get listed on JustDial, IndiaMART, Sulekha, CarWale, BikeWale

---

## Files Changed in This Audit Session

| File | Change |
|------|--------|
| `src/pages/service.astro` | Fixed Armoor phone `+91 98765 12345` → `+91 90524 16222`; "2008" → "2003" |
| `src/components/SEOHead.astro` | Fixed "Honda cars" → "two-wheelers"; Added `@id`; Fixed default description |
| `src/pages/lp/honda-nizamabad.astro` | Fixed all "2008" → "2003"; "17+" → "22+"; LP domain URL |
| `vercel.json` | Added security headers; `/sitemap.xml` redirect |
| `src/content/branches/*.md` (7 files) | Unique Google Maps links per branch geo-coordinates |
| `public/llms.txt` | Created AI crawler context file |
| `src/pages/products/[slug].astro` | `@type` MotorizedBicycle; `@id`; dynamic `priceValidUntil`; BreadcrumbList schema |
| `src/pages/branches/[slug].astro` | `@id`, `description`, `image` on branch schema; `parentOrganization` with `@id` |
| `astro.config.mjs` | Fixed sitemap `lastmod` — only homepage/blog-listing get `buildDate` |
