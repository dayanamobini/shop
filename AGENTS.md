# DreamDécor — working notes

Premium home-décor storefront built with React 19 + TypeScript + Vite. No backend:
cart, wishlist and recently-viewed live in `localStorage`, catalogue data is in
`src/data/products.ts`, imagery comes from the Unsplash CDN (`src/data/images.ts`).

## Run it

```sh
docker compose -f docker-compose.base44.yml up -d
```

- Web entry point: http://localhost:3000 (Vite dev server, HMR).
- Dependencies install into the `node_modules` volume on every container start
  (`npm ci`), so lockfile changes are picked up without rebuilding the image.
- When `BASE44_PREVIEW_MODE=1` (supplied by the sandbox), `vite.config.ts` enables
  filesystem polling for reliable HMR on the bind mount and allows the sandbox
  hostname. Without the flag the config is untouched.

## Checks

```sh
docker compose -f docker-compose.base44.yml exec -T web sh -lc "npx tsc -b"
docker compose -f docker-compose.base44.yml exec -T web sh -lc "npm run build"
docker compose -f docker-compose.base44.yml exec -T web sh -lc "npm run lint"
```

## Structure

- `src/styles/` — design tokens + shared UI (`base.css`), header/overlays/footer
  (`layout.css`), home sections (`home.css`), shop/product/cart/checkout/editorial
  pages (`pages.css`).
- `src/components/home/` — one component per homepage section.
- `src/components/product/` — product card, grid, carousel.
- `src/components/layout/` — header, mega menu, search overlay, mini cart, mobile
  menu, footer.
- `src/pages/` — route-level pages. Routing is a small history-API router in
  `src/lib/hooks.ts` (`navigate`, `usePath`, `useSearch`, `useParams`).
- `src/store/StoreContext.tsx` — cart, wishlist, recently viewed, drawers, toasts.

## Notes

- Product imagery is remote; keep `src/data/images.ts` and the `photos` tuples in
  `src/data/products.ts` in sync when swapping photography.
- Checkout is a demonstration flow: it validates the form and shows an order
  confirmation, but takes no payment and stores nothing.

## Persian / RTL notes

- The storefront is Persian and RTL: `<html lang="fa" dir="rtl">`. Typography uses
  Vazirmatn (UI/body) and Markazi Text (display headings), loaded from Google Fonts
  in `index.html`.
- CSS uses logical properties (`inset-inline-*`, `margin-inline-*`,
  `padding-inline-*`, `border-inline-*`) so layouts mirror automatically. Prefer
  them over physical `left`/`right` in new rules.
- Never add `letter-spacing` to Persian copy — it breaks the connected script.
- Directional icons (`arrow-right`, `chevron-*`, `return`, `arrow-up-right`) are
  mirrored in `Icon.tsx` via `.icon--flip`; the carousel flips its scroll delta for RTL.
- Full-screen overlays are anchored with `right: 0; width: 100vw` instead of
  `inset: 0`: in RTL the fixed containing block can include the classic scrollbar
  gutter and would push the overlay off-screen.
- Prices are stored in Toman; `money()` / `faNum()` in `src/lib/format.ts` render
  Persian digits. Catalogue keys (`Category`, `CollectionId`, badges) stay English
  and are displayed through `src/data/labels.ts`.
