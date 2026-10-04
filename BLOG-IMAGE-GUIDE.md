# Blog Image Guide: Featured (Hero) Images

Approved style as of October 2026, used for every blog post hero on canadianoptimizer.com. Follow it for all new posts and any image redo.

## 1. Goals, in priority order
1. **Relevant to the post.** The image shows the post's literal subject, so a reader knows what the article is about before reading the title.
2. **Drives clicks.** It's a clear, inviting single idea that stands out on a category grid and as a social or YouTube preview.
3. **Trustworthy.** Rich, professional, magazine-quality, but it must look like a real photo.

## 2. Look: realistic documentary photography
- Real documentary or editorial photo, **not** AI-polished: natural light, true-to-life colour, real texture and small imperfections, ordinary everyday settings.
- **Bright** but not washed out. Avoid moody or dark grading and avoid overexposed, airy looks.
- Canadian settings and cues where natural: houses, snow, kitchens, cottages, transit, pharmacies, grocery stores.
- No glowing icons, 3D renders, clip art, illustrations or navy/abstract graphics.

## 3. Shot mix (across the site)
| Type | Share | Examples |
|---|---|---|
| Topic scenes, no people | ~40% | A bank vault (CDIC coverage), a gas pump (carbon rebate), a house exterior (mortgage insurance), a grocery aisle (grocery cards) |
| People doing the topic | ~35% | A family at the dinner table (family tax tips), a pharmacist with a customer (healthcare costs), a tradesperson in a workshop (self-employed disability insurance) |
| Hands or details | ~25% | Keys in a door (prepayment penalty), a card tapped on a terminal, coins dropped into a jar (TFSA) |

- Keep desk, laptop and paperwork shots rare, about a fifth at most, and vary them.
- Few close-up portraits. When people appear, show their **faces with natural expressions**, not just backs of heads. They must be fictional and not recognizable as any real person.
- Neighbouring posts in a category should not repeat the same composition.

## 4. Hard rules
- **Canadian currency only.** Coins must clearly read as Canadian: gold 11-sided loonies with a loon, two-tone toonies (silver ring, gold centre), and silver 5¢, 10¢ and 25¢ coins.
- **No copper pennies** (Canada stopped making them), US coins, euro coins or generic fantasy coins with fake lettering.
- **No banknotes or paper money of any kind.**
- **No text** anywhere: no titles, labels, readable screens, signs, documents or fake lettering. Cards are blank, screens are blank or unreadable.
- No brand logos, no toys, no real people.

## 5. Prompt formula
> "Realistic documentary photograph of [LITERAL POST SUBJECT, as a scene / a person doing it / hands detail], [CANADIAN SETTING]. Natural daylight, bright and true-to-life colour, real texture and small imperfections, ordinary people with natural expressions (fictional). Not AI-polished, no studio look. No text, no lettering, no logos, no banknotes. Any coins are Canadian loonies, toonies and silver coins only, no pennies."

## 6. QA before shipping
- View every new image at full size and in a contact sheet with its category neighbours.
- Reject and redo any image with text or fake lettering, banknotes, pennies or foreign coins, warped hands or faces, or a weak link to the post topic.
- Run OCR on the batch to catch stray text.

## 7. Files and performance
- **Path:** `public/images/blog/[slug].png`
- **Format:** 1024×1024, JPEG-compressed data saved under the `.png` name, under 400 KB each.
- **Cache busting:** bump `BLOG_HERO_VERSION` in `src/lib/site.ts` whenever hero images change, so `blogHeroSrc()` serves the new `?v=` URL.
- Every hero needs descriptive alt text that names the post topic.
