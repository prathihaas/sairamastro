# Sairam Honda — SEO Action Plan
**Generated:** 2026-05-04 | Based on Full Audit  
**Current Score:** 59/100 | **Projected After All Fixes:** 82/100

---

## Priority Legend

- **Critical** — Blocks ranking or has immediate business impact. Fix today.
- **High** — Significantly impacts traffic and rankings. Fix within 1 week.
- **Medium** — Meaningful optimization opportunity. Fix within 1 month.
- **Low** — Incremental improvement. Schedule in backlog.

---

## CRITICAL — Fix Immediately

### C1. Fix 13 product page meta descriptions
**File:** `src/content/products/*.md` (all except shine-100.md)  
**Issue:** All 13 product pages use the boilerplate pattern "Check latest price, mileage and features of Honda [Model]." — no location, no price, no CTA.  
**Impact:** Direct CTR suppression on commercial queries. Duplicate meta description warnings in GSC.  
**Fix:** Update `seo_description` in each product frontmatter following the shine-100 pattern:

```
# activa-125.md
seo_description: "Honda Activa 125 on-road price in Nizamabad starts from ₹95,000. Best-selling 125cc scooter. EMI from ₹2,600/month, free test ride at Sairam Honda. Call 8886640573."

# sp-160.md
seo_description: "Honda SP 160 on-road price in Nizamabad starts from ₹1,18,000. 160cc commuter sport, 45 kmpl. Easy EMI, test ride available at Sairam Honda. Call 8886640573."

# activa-110.md
seo_description: "Honda Activa 110 on-road price in Nizamabad from ₹77,000. 55 kmpl mileage, silent start. Lowest EMI from ₹2,100/month at Sairam Honda — 7 branches."

# shine-125.md
seo_description: "Honda Shine 125 on-road price in Nizamabad from ₹84,000. 60 kmpl mileage, powerful 125cc engine. Book free test ride at Sairam Honda. EMI from ₹2,300/month."

# sp-125.md
seo_description: "Honda SP 125 on-road price in Nizamabad from ₹96,000. 125cc sporty commuter, 60+ kmpl. Available at all 7 Sairam Honda branches. EMI from ₹2,600/month."

# unicorn.md
seo_description: "Honda Unicorn on-road price in Nizamabad from ₹1,08,000. Premium 160cc commuter with CBS. Free test ride, EMI from ₹2,900/month at Sairam Honda."

# dio-125.md
seo_description: "Honda Dio 125 on-road price in Nizamabad from ₹88,000. Sporty scooter, 125cc, smart key. EMI from ₹2,400/month, test ride at Sairam Honda. Call 8886640573."

# dio-110.md
seo_description: "Honda Dio 110 on-road price in Nizamabad from ₹74,000. Stylish 110cc scooter. Best EMI offers, free test ride at Sairam Honda — 7 branches across district."

# livo.md
seo_description: "Honda Livo on-road price in Nizamabad from ₹80,000. Economical 110cc commuter, 65 kmpl. Easy EMI, test ride available at Sairam Honda. Call 8886640573."

# hornet-2-0.md
seo_description: "Honda Hornet 2.0 on-road price in Nizamabad from ₹1,35,000. 184cc street sport, LED DRL, disc brakes. EMI from ₹3,600/month at Sairam Honda."

# cb200x.md
seo_description: "Honda CB200X on-road price in Nizamabad from ₹1,50,000. 184cc adventure street, dual-purpose. EMI from ₹4,000/month at Sairam Honda — authorized dealer."

# cbhornet125.md
seo_description: "Honda CB Hornet 125 on-road price in Nizamabad from ₹90,000. Sporty 125cc with LED lighting. Easy EMI, free test ride at Sairam Honda. Call 8886640573."

# shine-100-dx.md
seo_description: "Honda Shine 100 DX on-road price in Nizamabad from ₹76,000. 65 kmpl mileage, DX variant with extra features. EMI from ₹2,100/month at Sairam Honda."
```

---

### C2. Expand product page body content for 12 thin products
**Files:** `src/content/products/*.md` (all except shine-100.md)  
**Issue:** 12 product pages have 12–20 lines of content — effectively empty. Google cannot rank "Honda [Model] price Nizamabad" with placeholder content.  
**Impact:** Highest-value commercial pages are unrankable for purchase-intent queries.  
**Fix:** Expand each product `.md` to include (use shine-100.md as the template):

For each product, add these sections:
```markdown
## [Model Name] — Key Specifications

| Feature | Detail |
|---------|--------|
| Engine | [cc, Single/Twin, BSVI] |
| Mileage | [X] kmpl (ARAI certified) |
| On-Road Price Nizamabad | ₹[X] onwards |
| EMI | Starting ₹[X]/month |

## Why Choose [Model] in Nizamabad?

[2–3 sentences with local context: daily commute, village roads, petrol savings, specific mandal names]

## Key Features

- **[Feature 1]** — [benefit in local context]
- **[Feature 2]** — [benefit]  
- **[Feature 3]** — [benefit]
- **[Feature 4]** — [benefit]
- **[Feature 5]** — [benefit]

## [Model] EMI in Nizamabad

Get [Model] on easy EMI starting from **₹[X]/month**. Zero down payment on select schemes. [WhatsApp link] for instant EMI calculation.

## Available at All Sairam Honda Branches

[Model] is available at all 7 Sairam Honda branches — [branch links to all 7].

Also consider: [cross-links to 2–3 related models]
```

Priority order for expansion: sp-160, activa-125, unicorn, sp-125, shine-125, hornet-2-0, dio-125, cb200x, then remaining.

---

### C3. Remove duplicate AutoDealer schema blocks from homepage
**File:** `src/pages/index.astro`  
**Issue:** Homepage has 3 AutoDealer JSON-LD blocks (SEOHead.astro global + organizationSchema + inline AggregateRating block)  
**Fix (two changes):**

1. Pass `noOrgSchema={true}` to Layout to suppress SEOHead's global AutoDealer:
```astro
<Layout title={seo_title} description={seo_description} preloadImage={hero_image} noOrgSchema={true}>
```

2. Remove the standalone AggregateRating-only AutoDealer block (lines 427–439 in index.astro) and merge `aggregateRating` into the existing `organizationSchema` object:
```js
const organizationSchema = {
  // ... existing fields ...
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.0",
    "reviewCount": "1159",
    "bestRating": "5",
    "worstRating": "1"
  },
  // ... rest of schema ...
};
```

---

### C4. Self-host the hero image
**File:** `src/content/pages/home.md` line 7  
**Issue:** `hero_image: "https://images.financialexpressdigital.com/2017/07/honda-activa-6g-1.jpg"` — LCP element loaded from external news site domain.  
**Fix:**
1. Download a high-quality Honda Activa showroom image (1200×630px) to `public/images/hero-honda-showroom.jpg`
2. Update home.md: `hero_image: "/images/hero-honda-showroom.jpg"`
3. Use an actual photo of the Sairam Honda Nizamabad showroom if available — more authentic for E-E-A-T

---

## HIGH — Fix Within 1 Week

### H1. Add Nizamabad branch body content
**File:** `src/content/branches/nizamabad.md`  
**Issue:** 12 lines — only frontmatter, no body content. Most important branch page has zero unique content.  
**Fix:** Add body content (minimum 300 words) covering:
- Showroom location details (Hyderabad Road, Near Collectorate)
- Vehicle range available at this branch
- Service facilities specific to Nizamabad main
- Nearby landmarks and how to find the showroom
- Local area context (Nizamabad city, surrounding mandals served)
- Customer testimonials from Nizamabad buyers

Also add seo_title and seo_description to frontmatter:
```yaml
seo_title: "Honda Showroom Nizamabad Main | Sairam Honda | ☎ 8886640573"
seo_description: "Sairam Honda Nizamabad main showroom at Hyderabad Road, Near Collectorate. Authorized Honda dealer — Activa, Shine, Unicorn, SP 160. Free test ride. Call 8886640573."
```

---

### H2. Add Armoor branch body content
**File:** `src/content/branches/armoor.md`  
**Issue:** 14 lines — only frontmatter + SEO fields, no body content.  
**Fix:** Add 200–300 words covering the Armoor branch specifically:
- Mahalakshmi Complex, Perkit Road location details
- Towns and villages served by Armoor branch (Banswada, Pitlam, Kammarpally area)
- Specific Honda models popular in Armoor region
- Any Armoor-specific offers or services

---

### H3. Add a custom 404 page
**File:** Create `src/pages/404.astro`  
**Issue:** No 404 page — Vercel default error page shown on all 404s.  
**Fix:** Create a branded 404 page:
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Page Not Found | Sairam Honda" description="Page not found. Visit Sairam Honda for Honda bikes, scooters, and authorized service in Nizamabad.">
  <main class="max-w-3xl mx-auto px-4 py-32 text-center">
    <h1 class="text-6xl font-black text-red-600 mb-4">404</h1>
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
    <p class="text-gray-600 mb-8">The page you're looking for doesn't exist. Find your nearest Honda showroom below.</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <a href="/" class="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition">Go to Homepage</a>
      <a href="/products" class="border-2 border-red-600 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition">View All Bikes</a>
      <a href="tel:+918886640573" class="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition">Call Us</a>
    </div>
  </main>
</Layout>
```

---

### H4. Fix products listing page title and description
**File:** `src/pages/products/index.astro` line 10  
**Issue:** `title="All Models | Sairam Honda"` and `description="View all Honda bikes and scooters available in Nizamabad"` — weak, generic, no keyword value.  
**Fix:**
```astro
<Layout 
  title="Honda Bikes & Scooters in Nizamabad | All Models | Sairam Honda"
  description="Browse 14 Honda models in Nizamabad — Activa 125, Activa 110, Shine 125, SP 160, Unicorn, Dio & more. Best on-road price, EMI from ₹2,100/month. 7 branches. Call 8886640573."
>
```

---

### H5. Replace competitor workshop image in homepage service section
**File:** `src/pages/index.astro` (service section, approx line 352)  
**Issue:** `src="https://yashhonda.com/wp-content/uploads/2020/05/workshop-min-1024x382-1.png"` — using a competitor dealership's workshop image.  
**Fix:**
1. Take an actual photo of the Sairam Honda service bay or download a licensed stock image
2. Save to `public/images/honda-service-workshop.jpg`
3. Update the img src to `"/images/honda-service-workshop.jpg"`

---

### H6. Self-host all 14 product images
**Files:** `src/content/products/*.md`  
**Issue:** All product images use `honda2wheelersindia.com/_next/image?...&dpl=dpl_728CMBuAWhxxXpRhsKF8rQRumgJq`. The `dpl` hash changes on every Honda website deployment, breaking all product images site-wide.  
**Fix:**
1. Download official Honda product images from Honda India's press kit or product pages
2. Save to `public/images/products/[model-slug].jpg` (recommend 800×600px JPEG)
3. Update each product `.md` `featured_image` field to local path:
   ```yaml
   featured_image: "/images/products/activa-125.jpg"
   ```

---

### H7. Add Content-Security-Policy header
**File:** `vercel.json`  
**Issue:** No CSP header — site loads GTM, Google Fonts, WhatsApp deep links, Maps iframes.  
**Fix:** Add to the headers array in vercel.json:
```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src https://maps.google.com https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com"
}
```

---

### H8. Fix service page phone number inconsistency (NAP)
**File:** `src/pages/service.astro` (lines 91–92)  
**Issue:** Service page primary phone CTA routes to `9666679377` (WhatsApp number), not `8886640573` (main showroom number). Creates NAP inconsistency across pages.  
**Fix:** Update the service page Call CTA to use the main number:
```astro
<a href="tel:+918886640573" ...>📞 Call: 8886640573</a>
```
Keep WhatsApp link separate for service booking.

---

## MEDIUM — Fix Within 1 Month

### M1. Add /branches/ index page
**File:** Create `src/pages/branches/index.astro`  
**Issue:** No standalone branches listing page — nav links to `/#branches` anchor. Branch breadcrumbs reference an anchor, not a real URL.  
**Impact:** Missing "Honda dealers Nizamabad district" keyword opportunity; weak breadcrumb structure.  
**Fix:** Create an index page at `/branches/` listing all 7 branches with links to individual pages. Update Header nav "Branches" link from `/#branches` to `/branches`.

---

### M2. Fix trailing slash consistency
**File:** `astro.config.mjs`  
**Issue:** Service page has hardcoded trailing slash canonical; other pages vary.  
**Fix:** Add to `astro.config.mjs`:
```js
export default defineConfig({
  site: "https://www.sairamhonda.com",
  trailingSlash: "always",
  // ...
});
```

---

### M3. Update blog Article schema dateModified field
**File:** `src/pages/blog/[slug].astro`  
**Issue:** `dateModified` always equals `datePublished` — Google never sees content as updated.  
**Fix:**
1. Add `date_modified` field to blog collection schema in `src/content/config.ts`:
   ```ts
   date_modified: z.coerce.date().optional(),
   ```
2. Update `[slug].astro` article schema:
   ```js
   "dateModified": (date_modified ?? date).toISOString(),
   ```
3. When updating a blog post's prices or content, add `date_modified: "YYYY-MM-DD"` to its frontmatter.

---

### M4. Add schema validation for branch seo_title and seo_description
**File:** `src/content/config.ts`  
**Issue:** Branches collection Zod schema doesn't validate `seo_title` and `seo_description`, causing silent fallbacks.  
**Fix:** Add fields to the branches collection schema:
```ts
const branches = defineCollection({
  schema: z.object({
    // existing fields...
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  })
});
```

---

### M5. Fix geo-duplicate blog posts to have unique content
**Files:** Multiple blog posts in `src/content/blog/`  
**Issue:** Location-swapped posts (armoor/balkonda/bheemgal variants of the same comparison) risk programmatic content quality flags.  
**Fix:** For each set of geo-variant posts, ensure at least 30% unique content per variant:
- Mention specific competitor dealers in that town/mandal
- Include local road/commute context specific to that area
- Use different FAQ questions for each location variant
- Reference different nearby villages and connecting roads

Sets to review:
- honda-activa-6g-vs-tvs-jupiter-[armoor/balkonda/bheemgal]
- honda-shine-100-vs-hero-splendor-[armoor/balkonda/bheemgal]
- honda-sp-125-vs-bajaj-pulsar-125-[armoor/balkonda/bheemgal]
- honda-dio-125-vs-suzuki-access-125-[armoor/balkonda/bheemgal]

---

### M6. Add /service link from product pages
**File:** `src/pages/products/[slug].astro`  
**Issue:** Product pages cross-link to other products and branches but never link to /service — missing conversion opportunity and crawl equity flow.  
**Fix:** Add a service section to the product page template:
```astro
<div class="mt-8 bg-gray-50 rounded-xl p-5">
  <h3 class="font-bold text-gray-900 mb-2">Authorized Honda Service in Nizamabad</h3>
  <p class="text-gray-600 text-sm mb-3">Sairam Honda offers Honda-authorized service at all 7 branches. Your warranty stays valid with genuine Honda parts and certified technicians.</p>
  <a href="/service" class="text-red-600 font-bold text-sm hover:underline">Learn about service & AMC packages →</a>
</div>
```

---

### M7. Fix Google Maps links to use Place IDs
**Files:** `src/content/branches/*.md` (map_link field)  
**Issue:** All map_link values use Google Maps search queries instead of Place IDs. Search-based links can show the wrong listing.  
**Fix:** For each branch, find the Google Business Profile URL/Place ID and update map_link to:
```
https://maps.google.com/?cid=PLACE_ID_NUMBER
```
Or use: `https://www.google.com/maps/place/?q=place_id:PLACE_ID`

To find Place IDs: Google Maps → search for each branch → right-click → "What's here?" → note the CID from the URL.

---

### M8. Fix phone number format consistency
**Files:** Site-wide  
**Issue:** Main phone appears in 3 formats across the site.  
**Fix:** Standardize all mentions to `+91 8886640573` (country code, space, 10 digits). Update:
- Schema markup: `+91-8886640573` → `+91 8886640573`
- All tel: href attributes to `tel:+918886640573` (no spaces in href)
- All display text to `+91 8886640573`

---

### M9. Add ItemList schema to products listing page
**File:** `src/pages/products/index.astro`  
**Issue:** No JSON-LD on the products listing page.  
**Fix:** Add:
```js
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Honda Bikes & Scooters at Sairam Honda Nizamabad",
  "description": "Full Honda two-wheeler lineup available at Sairam Honda, Nizamabad",
  "url": "https://www.sairamhonda.com/products",
  "itemListElement": products.map((p, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `https://www.sairamhonda.com/products/${p.slug}`,
    "name": p.data.name_en
  }))
};
```

---

### M10. Extend footer with branch links
**File:** `src/components/Footer.astro`  
**Issue:** Footer only links to 4 pages — no branches, no individual products.  
**Fix:** Add a "Branches" column to the footer grid:
```astro
<div>
  <h4 class="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Our Branches</h4>
  <ul class="space-y-2 text-sm text-gray-600">
    <li><a href="/branches/nizamabad" class="hover:text-red-600">Nizamabad</a></li>
    <li><a href="/branches/armoor" class="hover:text-red-600">Armoor</a></li>
    <li><a href="/branches/bodhan" class="hover:text-red-600">Bodhan</a></li>
    <li><a href="/branches/dichpally" class="hover:text-red-600">Dichpally</a></li>
    <li><a href="/branches/dharpally" class="hover:text-red-600">Dharpally</a></li>
    <li><a href="/branches/nandipet" class="hover:text-red-600">Nandipet</a></li>
    <li><a href="/branches/bichkunda" class="hover:text-red-600">Bichkunda</a></li>
  </ul>
</div>
```

---

## LOW — Backlog / Nice-to-Have

### L1. Replace MotorizedBicycle with Vehicle schema type
**File:** `src/pages/products/[slug].astro`  
**Issue:** `["Product", "MotorizedBicycle"]` — MotorizedBicycle is not a Google-recognized type.  
**Fix:** Change to `["Product", "Vehicle"]`.

### L2. Add privacy policy page
**Issue:** Site collects user data via WhatsApp/GTM — DPDP Act compliance.  
**Fix:** Create `src/pages/privacy.astro` with a basic privacy policy covering: data collected, how used, third-party tools (Google Analytics, WhatsApp), user rights.

### L3. Remove unused React integration
**File:** `astro.config.mjs`  
**Issue:** `react()` integration imported but no React components exist.  
**Fix:** Remove the `react` import and the `react()` call from `astro.config.mjs`.

### L4. Improve blog thumbnail uniqueness
**Issue:** Same category images reused across many blog posts (honda-bikes-guide-2026.jpg etc.)  
**Fix:** Create at least 3–4 unique thumbnail images per article cluster. Even simple text-on-background Canva images with the article title make each post visually distinct on the blog listing page.

### L5. Add article author Person schema
**File:** `src/pages/blog/[slug].astro`  
**Issue:** Author is Organization — Google prefers Person for articles.  
**Fix:** Create staff profile pages (e.g., `/about/team/`) and update article schema to use Person with a profile URL.

### L6. Self-host Google Fonts
**File:** `src/layouts/Layout.astro`  
**Issue:** Two font families loaded from Google CDN — 2 external requests per page.  
**Fix:** Download Inter and Noto Sans Telugu font files, add to `public/fonts/`, and use `@font-face` declarations in global CSS with `font-display: swap`.

### L7. Update llms.txt with review excerpts
**File:** `public/llms.txt`  
**Issue:** No customer review text for AI assistants to cite.  
**Fix:** Add a `## Customer Reviews` section with 5 real review excerpts from Google:
```markdown
## Customer Reviews
> "Good experience from Sairam Honda. Staff is very helpful and the service was smooth." — B Naveen
> "Excellent and good service at Sairam Honda Nizamabad. Highly recommended." — Ravindra Reddy
> "Nice and good service. Hassle-free process." — Pradeep
```

### L8. Add product lazy loading attribute
**File:** `src/components/ProductCard.astro`  
**Issue:** Product grid images have no `loading` attribute.  
**Fix:** Add `loading="lazy"` to the product card image element (below-fold products on listing page).

### L9. Fix H2 Telugu name on product pages
**File:** `src/pages/products/[slug].astro`  
**Issue:** Telugu product name displayed using `<h2>` tag — semantic mismatch.  
**Fix:** Change `<h2>` to `<p lang="te">` for the Telugu name display.

### L10. Investigate and confirm sairamastro.in domain status
**Issue:** The codebase directory and audit URL reference `sairamastro.in` but DNS is not configured. If this domain was ever live and indexed, equity is stranded.  
**Action:** Check Google Search Console for any indexed `sairamastro.in` pages. If found, configure DNS to point to the server and add a 301 redirect rule to `www.sairamhonda.com`.

---

## Implementation Roadmap

### Week 1 (Critical + Quick High)
- [ ] C1: Fix 13 product meta descriptions (30 min)
- [ ] C3: Fix duplicate AutoDealer schemas on homepage (15 min)
- [ ] C4: Self-host hero image (30 min)
- [ ] H1: Add Nizamabad branch body content + SEO fields (45 min)
- [ ] H2: Add Armoor branch body content (30 min)
- [ ] H3: Create 404 page (20 min)
- [ ] H4: Fix products listing title + description (5 min)
- [ ] H5: Replace competitor workshop image (20 min)
- [ ] H8: Fix service page phone number (5 min)

**Estimated time: ~3.5 hours | Score impact: +10–12 points**

### Week 2 (High)
- [ ] C2: Expand product content — top 6 (activa-125, sp-160, unicorn, sp-125, shine-125, hornet-2-0) (3 hours)
- [ ] H6: Self-host product images (1 hour)
- [ ] H7: Add CSP header (30 min)

**Estimated time: ~4.5 hours | Score impact: +8–10 points**

### Week 3 (High + Medium start)
- [ ] C2: Expand remaining 6 product pages (3 hours)
- [ ] M1: Create /branches/ index page (45 min)
- [ ] M2: Add trailing slash config (5 min)
- [ ] M3: Update blog dateModified schema (20 min)
- [ ] M9: Add ItemList schema to products page (20 min)

**Estimated time: ~4.5 hours | Score impact: +6–8 points**

### Month 1 (Medium)
- [ ] M4: Add schema validation for branch fields
- [ ] M5: Differentiate geo-duplicate blog content
- [ ] M6: Add /service link from product pages
- [ ] M7: Fix Google Maps Place IDs
- [ ] M8: Standardize phone number format
- [ ] M10: Extend footer with branch links

**Estimated time: ~5 hours | Score impact: +4–5 points**

### Backlog (Low)
- [ ] L1–L10 as time permits

---

## Score Projection By Phase

| After Phase | Projected Score |
|-------------|----------------|
| Baseline | 59/100 |
| Week 1 | 69/100 |
| Week 2 | 77/100 |
| Week 3 | 81/100 |
| Month 1 | 82/100 |
| Backlog complete | 85/100 |
