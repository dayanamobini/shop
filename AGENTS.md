# Agent notes

## Stack
Vite 8 + React 19 + TypeScript, client-only. No backend, no database, no external
service credentials — nothing is needed in `/run/base44/app.env`.

## Running it (sandbox)
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
- One service, `web` (node:22), serving the repo bind-mounted at `/app` with
  `npm run dev` on host port **3000** (`0.0.0.0:3000` -> container 3000).
- `node_modules` is a named Compose volume, not the host checkout: the startup
  command runs `npm ci` from the committed `package-lock.json` inside the
  container, so a lockfile change is picked up by restarting the service
  (`docker compose -f docker-compose.base44.yml restart web`), no rebuild needed.
- `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` is forwarded bare into the service;
  Vite >= 6.1 appends it to `server.allowedHosts`, which is what lets the
  preview's proxy hostname reach the dev server. Don't hardcode the sandbox host.

## Things worth knowing
- The imported commit had `index.html` pointing at `/src/main.tsx` with **no
  `src/` directory at all**, so the app could not render. A minimal entry
  (`src/main.tsx`, `src/App.tsx`, `src/index.css`) and `public/favicon.svg`
  were added so the dev server boots and the page renders.
- Node runtime must be >= 22.12 (Vite 8 / plugin-react 6 engines); `node:22` is fine.

## Verifying
- `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/` -> `200`.
- Live source, not a build: `curl -s http://localhost:3000/` contains
  `/@vite/client` and `/src/main.tsx` (unhashed).
- Container health: `docker compose -f docker-compose.base44.yml ps`
  (healthcheck fetches `/` with Node's global `fetch`).
- Type check / lint inside the container:
  `docker compose -f docker-compose.base44.yml exec -T web npx tsc -b`
  and `... exec -T web npm run lint`.

## App structure
- `src/App.tsx` holds the route table (a tiny history router in `src/lib/router.tsx`,
  no router dependency). Routes: `/`, `/shop`, `/shop/:category`, `/product/:slug`,
  `/cart`, `/checkout`, `/account`, `/wishlist`, `/search?q=`, `/pages/:slug`.
- `src/data/catalog.ts` is the single source of truth for products, categories,
  banners, testimonials and the Instagram strip — every image URL lives there.
- `src/store/shop.tsx` keeps bag, wishlist, account, addresses and orders in a
  React context and mirrors them to `localStorage` (`deva-shop-v1`). Checkout is a
  demonstration flow: no card is charged and no order leaves the browser.
- Demo discount codes: `DEVA10` (10%), `WELCOME15` (15%).
- Styles are four stylesheets imported in `src/main.tsx`: `index.css` (tokens,
  buttons, forms), `styles/chrome.css` (header, mega menu, search, footer),
  `styles/home.css` (hero, categories, banners, testimonials, Instagram) and
  `styles/commerce.css` (product cards, shop, PDP, cart, checkout, account, modals).

## Photography
Product and editorial photography comes from Unsplash CDN URLs pinned by photo id.
Ids were checked against the live CDN and each image's actual subject was verified
in the rendered page before being assigned to a product, so **do not reorder or
reassign these ids blindly** — a wrong id shows an unrelated garment. A single
warm/desaturated CSS filter (bottom of `commerce.css`) is what unifies the set
into the ivory/taupe palette; keep it when adding images. Swap in brand
photography when it is available.
