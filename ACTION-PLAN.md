# Sairam Honda — SEO Action Plan
**Generated:** 2026-05-03 | Based on Full Audit

---

## ✅ COMPLETED (Fixed in This Session)

| # | Fix | File | Impact |
|---|-----|------|--------|
| C1 | Armoor branch fake phone `+91 98765 12345` → `+91 90524 16222` | service.astro:62 | Critical trust/conversion |
| C2 | "Honda cars" → "Honda two-wheelers" in schema description | SEOHead.astro | Schema accuracy |
| C3 | All "Since 2008" → "Since 2003" (22+ years) | service.astro, lp/honda-nizamabad.astro | Brand consistency |
| C4 | 7 shared branch map links → unique geo-coordinates per branch | branches/*.md | Local UX + SEO |
| C5 | Security headers added (X-Frame-Options, CSP, Referrer-Policy etc.) | vercel.json | Technical security |
| C6 | `/sitemap.xml` → `/sitemap-index.xml` redirect | vercel.json | Crawlability |
| C7 | Created `public/llms.txt` for AI crawlers | public/llms.txt | GEO / AI Search |
| C8 | Product schema: `@type: MotorizedBicycle`, `@id`, dynamic `priceValidUntil`, BreadcrumbList | products/[slug].astro | Schema richness |
| C9 | Branch schema: `@id`, `description`, `image`, `parentOrganization` with `@id` | branches/[slug].astro | Local entity graph |
| C10 | Global AutoDealer schema `@id` added for cross-page entity linking | SEOHead.astro | Schema coherence |
| C11 | Sitemap `lastmod: now` removed from stable pages — only homepage gets build date | astro.config.mjs | Crawl budget |
| C12 | LP URL in schema fixed: `sairamastro.com` → `sairamhonda.com` | lp/honda-nizamabad.astro | Schema accuracy |

---

## 🔴 CRITICAL — Fix This Week

### CR-1: Add meta descriptions to 5 branch pages
**What**: Armoor, Dichpally, Dharpally, Nandipet, Bichkunda branch `.md` files have no `seo_description` frontmatter field → fallback to generic. Bodhan already has one.  
**Files**: `src/content/branches/armoor.md`, `dichpally.md`, `dharpally.md`, `nandipet.md`, `bichkunda.md`  
**Fix**: Add `seo_description` frontmatter to each, e.g.:  
```yaml
seo_description: "Authorised Honda dealer in Armoor, Nizamabad district. Activa 125, Shine, SP 160 at best price. Easy EMI, test ride, exchange. Call +91 90524 16222."
```

### CR-2: Add `foundingDate` to AutoDealer schema
**What**: Schema doesn't declare `"foundingDate": "2003"` — AI assistants and rich results rely on this.  
**File**: `src/components/SEOHead.astro`  
**Fix**: Add `"foundingDate": "2003"` after the `description` field in the schema object.

### CR-3: Verify and claim all 7 GBP profiles
**What**: Only Nizamabad GBP is confirmed (1,159 reviews). Branch GBPs may be unclaimed — if so, competitors' listings appear instead.  
**Action**: Search Google for "Sairam Honda Armoor", "Sairam Honda Bodhan" etc. — claim any unclaimed profiles. Use the branch phone numbers from the branch `.md` files.

---

## 🟠 HIGH — Fix Within 2 Weeks

### H-1: Add `seo_title` frontmatter to branch pages without it
**What**: Armoor, Dichpally, Dharpally, Nandipet, Bichkunda don't have `seo_title` → falls back to generic.  
**Fix**: Add alongside `seo_description` above. Include phone number in title for CTR:  
`"Honda Dealer Armoor | Sairam Honda | ☎ 90524 16222"`

### H-2: Remove AutoDealer schema from product and blog pages
**What**: SEOHead.astro injects AutoDealer schema on EVERY page including product and blog pages. This creates confusing schema context for Googlebot on non-dealer pages.  
**File**: `src/layouts/Layout.astro` or `src/components/SEOHead.astro`  
**Fix**: Pass a prop like `showDealerSchema={true}` and only inject on homepage, service, and branch pages. Product pages should only have Product schema; blog pages should only have Article schema.

### H-3: Add `aggregateRating` to branch schemas
**What**: No per-branch star ratings → no star display in local pack results.  
**File**: `src/pages/branches/[slug].astro`  
**Fix**: Add rating data to each branch `.md` frontmatter if per-branch Google reviews are available, then reference it in the schema:  
```json
"aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.2", "reviewCount": "87", "bestRating": "5", "worstRating": "1" }
```

### H-4: Fix Google Fonts to use `font-display=swap`
**What**: Fonts block rendering (LCP impact).  
**File**: `src/layouts/Layout.astro:36`  
**Fix**: Change Google Fonts URL to add `&display=swap`:  
`?family=Inter:wght@400;600;800&family=Noto+Sans+Telugu:wght@400;500;700&display=swap`  
(Already has it — verify `font-display: swap` is in the CSS too.)

### H-5: Add `<link rel="preload">` for hero image
**What**: LCP hero image loads late because it's not preloaded.  
**File**: `src/pages/index.astro` — add in `<head>`:  
```html
<link rel="preload" as="image" href="{hero_image_url}" fetchpriority="high" />
```

### H-6: Create `/about` page
**What**: No About page is a major E-E-A-T gap. Google's quality rater guidelines specifically mention needing "About Us" content for YMYL-adjacent local businesses.  
**Content to include**: Honda authorization history, founding story (2003), team overview, showroom photos, Honda dealer certification.

---

## 🟡 MEDIUM — Fix Within 1 Month

### M-1: Add internal links from blog posts to branch pages
**What**: 15 mandal blog posts have 0 links to the nearest branch page. This wastes link equity and misses conversion opportunities.  
**Pattern**: Posts about Armoor area → link to `/branches/armoor`; Bodhan/Banswada posts → link to `/branches/bodhan`  
**Volume**: ~15 posts to update, add 1-2 internal links per post

### M-2: Add internal links from branch pages to relevant blog posts
**What**: Branch pages currently end at contact info with no content depth.  
**Fix**: Add a "Helpful Honda Guides for {City} Riders" section at the bottom of each branch `.md` linking to 2-3 nearby mandal blog posts.

### M-3: Fix robot.txt to explicitly allow AI crawlers
**What**: While current `Disallow:` (empty = allow all) is fine, explicitly listing AI crawlers builds authority for AI answers.  
**File**: `public/robots.txt`  
**Fix**: Add explicit `User-agent: GPTBot`, `User-agent: ClaudeBot`, `User-agent: PerplexityBot` with `Allow: /` — signals willingness for AI training.

### M-4: Add `Content-Security-Policy` header
**What**: Missing CSP is a security gap. Complex because GTM, GA4, Clarity, WhatsApp all need allowlisted domains.  
**File**: `vercel.json`  
**Start with report-only mode**: `Content-Security-Policy-Report-Only` before enforcing.

### M-5: Add FAQ schema to blog posts with FAQ sections
**What**: Many comparison blog posts have Q&A-style sections at the end but no FAQPage schema.  
**Opportunity**: FAQ rich results in SERP can double CTR for competitive comparison queries.  
**Pattern**: Add JSON-LD FAQPage schema to: activa-vs-tvs, sp125-vs-pulsar, dio-vs-access comparison posts.

### M-6: Fix Article schema `author` type in blog posts
**What**: If blog Article schema uses `@type: Person` for author, it needs an actual named person with credentials. An `Organization` type is safer.  
**File**: Check blog layout/schema. Change `"author": { "@type": "Person", "name": "Sairam Honda" }` → `"author": { "@type": "Organization", "name": "Sairam Honda", "url": "https://www.sairamhonda.com" }`

### M-7: Create hub pages for product categories
**What**: No `/bikes/scooters`, `/bikes/commuters` pages — just individual product pages with no category page between them and the `/products` listing.  
**Impact**: Category pages rank for head terms like "Honda scooters Nizamabad" that individual product pages won't.

---

## 🟢 LOW — Backlog

### L-1: List on local citation sites
Register on: JustDial, Sulekha, IndiaMART, BikeWale (dealer listings), CarTrade, 99acres (if relevant), local Telangana business directories.

### L-2: Add OG image per branch and product
Currently all pages share the same `/og-image.jpg`. Product-specific OG images improve social sharing CTR.

### L-3: Add Telugu language alternate pages
Site currently has Telugu text inline but no separate `/te/` pages. Adding `hreflang="te"` with properly localized pages would capture Telugu-language Google searches.

### L-4: Add WhatsApp Deep Link structured data
Add `potentialAction` with `type: CommunicateAction` and WhatsApp URL to the AutoDealer schema.

### L-5: Create `/finance` standalone page
EMI information is scattered across product pages and LP. A dedicated `/finance` page ranking for "Honda bike EMI Nizamabad" queries would capture middle-funnel intent.

### L-6: Add Review schema to homepage testimonials
If the homepage has customer quotes/testimonials, wrap them in `Review` schema or at minimum `AggregateRating` on the main AutoDealer entity.

---

## Priority Matrix

```
HIGH IMPACT + LOW EFFORT (Do First):
- CR-1: Branch meta descriptions (5 files, 15 min)
- CR-2: foundingDate in schema (1 line)
- M-3: robots.txt AI crawler allowlist (5 lines)

HIGH IMPACT + MEDIUM EFFORT:
- CR-3: Claim all 7 GBPs (manual Google work)
- H-2: Remove AutoDealer schema from product/blog pages
- H-3: aggregateRating on branch schemas
- M-1: Internal links from blog posts to branches (15 posts)
- H-6: Create /about page

MEDIUM IMPACT + LOW EFFORT:
- H-4: font-display swap verification
- H-5: Hero image preload
- M-5: FAQ schema on blog comparison posts

LONGER TERM:
- M-7: Category hub pages
- L-3: Telugu language pages
- L-5: /finance page
```
