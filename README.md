# workshopgowhere.com

Singapore workshop / event / class finder. Aggregates workshops, classes, and one-off events from across Singapore into one searchable interface.

> "Go where" = SG slang for "where to go" — workshopgowhere = where to go for workshops.

## Concept

Singaporeans constantly search for things to do — pottery classes, cooking workshops, art jamming, calligraphy, woodwork, parent-child sessions. The events are scattered across Eventbrite, Peatix, Klook, ActivitySG, Facebook events, individual studios. Discovery is broken.

workshopgowhere aggregates all of it. Daily-refreshed, auto-categorized, location/price/audience filtered.

## Stack

| Layer | Tech | Cost |
|---|---|---|
| Frontend | Next.js 16 + Tailwind 4 | $0 |
| Hosting | Vercel | $0 (free tier handles 100GB/mo) |
| DNS + SSL | Cloudflare | $0 |
| Domain | Namecheap / Cloudflare Registrar | ~$12/yr |
| Analytics | Google Analytics 4 | $0 |
| Ads | Google AdSense | $0 (revenue) |
| Database | Static JSON in repo, rebuilt daily | $0 |

Total bootstrap: **~$12/year**.

## Automation pipeline

### Daily content refresh (Vercel cron, $0)

1. **Scrapers** (`scripts/scrape-*.mjs`) — pull listings from:
   - Eventbrite SG (public API)
   - Peatix (HTML scrape)
   - Klook (HTML scrape — partial, behind paywall for full)
   - ActivitySG / SportSG
   - Facebook public events (limited, requires careful scraping)
   - Individual studio sites (whitelist of high-quality SG studios)

2. **Categorization** (`scripts/categorize.mjs`) — Gemini Flash API tags each listing:
   - Category: pottery, cooking, calligraphy, art, fitness, music, language, parent-child, etc.
   - Price band: free, <$30, $30-100, $100-300, $300+
   - Audience: kids, adults, couples, all-ages
   - Region: central, west, east, north, online
   - Day-of-week / time-of-day

3. **De-dup + freshness** — drop expired, dedupe across sources by title+date+venue.

4. **JSON commit** — daily git commit of `src/data/listings.json`. Vercel auto-deploys.

### Programmatic SEO

Auto-generated landing pages (built at `next build` time):
- `/category/{pottery,cooking,calligraphy,art,...}` — one per category
- `/area/{tampines,bedok,orchard,jurong,...}` — one per Singapore area
- `/audience/{kids,couples,parent-child,seniors,...}` — one per audience
- `/price/{free,under-50,under-100,...}` — one per price band
- `/weekend` — Sat+Sun listings only
- Cross-filter combos: `/area/tampines/category/pottery`, etc.

Estimated 100-200 unique landing pages from a few thousand listings. SEO ranking benefits from depth.

### Schema.org markup

Each listing emits `Event` microdata for Google rich-results in search.

## Monetization (passive only — founder doesn't contribute beyond bootstrap)

1. **AdSense** — ~30 days post-traffic, apply. Estimated $1-3 per 1k pageviews on SG traffic.
2. **Affiliate links** — Klook (3-7% commission per booking), Eventbrite (referral program). Outbound `?aff=workshopgowhere` on every listing.
3. **Premium listings (later)** — defer; manual sales effort breaks autonomy rule.

## What's NOT in v1

- User accounts / wishlists / saving (state = friction, hosting cost)
- Reviews (moderation effort, legal liability)
- Booking direct on workshopgowhere (we redirect to source for booking)
- Mobile app (web is enough for SG)
- Sponsored placements (manual sales effort)

## Ops cadence

- **Daily** (automated): scraper run, categorization, JSON commit, Vercel deploy
- **Weekly** (automated): broken-link sweep, source-health check, alert if scraper breaks
- **Monthly** (automated): GA4 traffic report email, AdSense earnings summary
- **As needed** (manual, ~1hr/year): add new scraper if you find a great source

## Status

| Phase | State |
|---|---|
| 0. Domain registered | ⏳ Ronald registering now |
| 1. Repo scaffold | ⏳ This commit |
| 2. Scrapers (Eventbrite + Peatix) | TODO |
| 3. Categorization (Gemini) | TODO |
| 4. Frontend MVP (homepage + category) | TODO |
| 5. Vercel deploy | TODO |
| 6. GA4 + AdSense | TODO |
| 7. Programmatic SEO pages | TODO |
| 8. Affiliate link insertion | TODO |
| 9. Sitemap + robots.txt | TODO |
| 10. Soft launch | TODO |
