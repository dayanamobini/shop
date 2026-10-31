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
