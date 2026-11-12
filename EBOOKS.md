# Ebooks: how the sales pages work

Everything lives in `src/data/ebooks.ts`.

| What | Where |
|---|---|
| Prices (CAD) | `PRICES_CAD`: 8 books at $29, tax guide $49, Earn More bundle $59 (vs $87 separately) |
| Stripe Payment Link per product | `CHECKOUT_URLS` (empty string = "Coming soon", button disabled) |
| Refund window shown on pages | `REFUND_DAYS` |
| Book copy (contents, who it's for, FAQs) | `EBOOKS`, `BUNDLES` |
| Blog category to book mapping | `CATEGORY_EBOOKS` / `ebookForPost()` |

## Routes

- `/ebooks/` index (in sitemap)
- `/ebooks/<slug>/` sales page per book or bundle (in sitemap, Product + FAQ + Breadcrumb schema, no ads)
- `/ebooks/<slug>/thank-you/` post-purchase page (noindex, nofollow, not in sitemap)

Slugs: tax-guide, retirement-guide, government-benefits-guide, insurance-guide, side-hustle-guide,
raise-guide, self-employed-guide, investing-guide, index-investing-guide, earn-more-bundle.

## Going live with a product

1. Create the live Stripe Payment Link (see the Stripe plan kept on the bot box, not in this repo).
   After payment: redirect to `https://canadianoptimizer.com/ebooks/<slug>/thank-you/?session_id={CHECKOUT_SESSION_ID}`.
2. Paste the Payment Link URL into `CHECKOUT_URLS['<slug>']`.
3. Add the buyer download links to the GitHub Actions repository variable `NEXT_PUBLIC_EBOOK_DOWNLOADS`
   (Settings → Secrets and variables → Actions → Variables). JSON, for example:
   `{"retirement-guide":{"folder":"https://drive.google.com/drive/folders/...","zip":"https://drive.google.com/uc?export=download&id=..."}}`
   `deploy.yml` must pass it into `npm run build` (one-time change, not yet made because the bot's GitHub
   token cannot edit workflow files). Add this under the "Build static site" step:
   ```yaml
        env:
          NEXT_PUBLIC_EBOOK_DOWNLOADS: ${{ vars.NEXT_PUBLIC_EBOOK_DOWNLOADS }}
   ```
   Until then, thank-you pages show a clearly marked placeholder; use Stripe's hosted confirmation message
   with the Drive links instead of the redirect. Never commit download links or PDFs.
4. Merge (Andrew's call), let the deploy finish, then do a test purchase.

## UTMs

- Buy buttons → Stripe: `utm_source=site&utm_medium=sales_page&utm_campaign=<slug_with_underscores>&utm_content=hero|bottom`
  plus `client_reference_id=co_<slug>_<placement>`.
- `EbookCTA` → sales page: `utm_source=site&utm_medium=cta_full|cta_compact&utm_campaign=<slug>&utm_content=<post-slug>`.

## CTAs in posts

Every post gets the end-of-post `EbookCTA` for its category automatically. To place the compact box
inside a post, add `<div id="ebook-cta"></div>` to the post HTML where it should appear.
