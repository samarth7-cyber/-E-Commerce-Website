# Basecamp — Outdoor Gear E-Commerce Storefront

A fully responsive e-commerce front end built with React, React Router, and Tailwind CSS. Basecamp is a fictional outdoor-gear brand used as the subject matter for this project — the goal was to build a store that feels considered end-to-end: browsing, filtering, product detail, cart, and checkout, with a design system that isn't a generic template.

> This is a portfolio / demo project. No real payments are processed and no backend is connected — cart state persists to `localStorage` and checkout is simulated.

## Live Demo

_Add your deployed link here once you deploy (see "Deploying" below), e.g. `https://your-vercel-url.vercel.app`._

## Features

- **Product catalog** — 12 products across 5 categories, driven by a typed mock data layer that's easy to swap for a real API.
- **Browsing & discovery** — category pages, live search, price-range filtering, and multiple sort orders (price, rating, featured).
- **Product detail pages** — image gallery, color selection, quantity stepper, specs table, and related-product recommendations.
- **Shopping cart** — add/update/remove line items, persisted across page reloads via `localStorage`, with a live item-count badge in the nav.
- **Checkout flow** — shipping + payment form with client-side validation, order summary, free-shipping threshold logic, and a confirmation page.
- **Responsive design** — mobile-first layout with a collapsible nav, down to small phone widths.
- **Accessibility basics** — semantic form labels, `aria-live` regions for quantity changes, visible focus states, `prefers-reduced-motion` support.

## Tech Stack

| Layer | Choice |
|---|---|
| UI library | React 18 |
| Routing | React Router v6 |
| Styling | Tailwind CSS |
| State management | React Context + `useReducer` (cart) |
| Icons | lucide-react |
| Build tool | Vite |

No backend, database, or payment processor is wired up — this is intentionally a front-end-focused project. See [Next Steps](#next-steps-if-extending-this-project) for how it could grow into a full-stack app.

## Project Structure

```
basecamp-ecommerce/
├── src/
│   ├── components/       # Reusable UI: Navbar, Footer, ProductCard, StarRating, Toast, Newsletter
│   ├── context/           # CartContext (add/update/remove items, persisted to localStorage)
│   ├── data/               # Mock product catalog + category list
│   ├── pages/               # Route-level views: Home, Shop, ProductDetail, Cart, Checkout, OrderConfirmation, NotFound
│   ├── App.jsx               # Route definitions
│   ├── main.jsx               # App entry point
│   └── index.css               # Tailwind layers + design tokens
├── tailwind.config.js    # Color palette, fonts, custom utilities
├── vite.config.js
└── package.json
```

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/basecamp-ecommerce.git
cd basecamp-ecommerce

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Other scripts

```bash
npm run build     # Production build to /dist
npm run preview   # Preview the production build locally
```

## Deploying

This is a static Vite app, so it deploys anywhere that serves static files:

- **Vercel:** import the repo at [vercel.com/new](https://vercel.com/new) — it auto-detects Vite, no config needed.
- **Netlify:** `npm run build`, then set publish directory to `dist`.
- **GitHub Pages:** run `npm run build` and deploy the `dist/` folder with a tool like `gh-pages`.

## Design Notes

The visual identity leans into the subject rather than a generic storefront look: a topographic contour pattern in the hero, a "trail blaze" marker motif for category labels, a warm moss/amber/ink palette, and a serif display face (Fraunces) paired with Inter for body text and JetBrains Mono for prices and SKUs — evoking gear labels and trail maps without being literal about it.

## Next Steps (if extending this project)

Ideas for taking this further, useful to mention in an interview:

- Connect to a real backend (Node/Express + PostgreSQL, or a headless CMS like Shopify/Sanity) for persistent inventory and orders.
- Add user authentication and order history.
- Integrate a real payment processor (Stripe Checkout or Elements).
- Add automated tests (React Testing Library for components, Playwright/Cypress for checkout flow end-to-end).
- Add product reviews with user-submitted ratings.

## License

This project is open source and available under the [MIT License](LICENSE).
