# Travel Website — Reusable Client Template

This repository is the reference implementation for future travel website builds.

## Standard stack
- React 18 + Vite
- Lucide icons
- Responsive custom CSS and motion
- No database required for the standard marketing/enquiry experience

## Standard visual structure
1. Header with brand identity, navigation and primary enquiry action.
2. Full-viewport cinematic hero (video or image) with clear headline and calls to action.
3. Destination catalogue with clickable destination cards.
4. Destination detail modal with image, region, summary and enquiry/booking action.
5. Featured tour package cards.
6. Horizontal package discovery strip.
7. Flight search section (when the client offers flight assistance).
8. Service highlights.
9. Travel enquiry form routed to the client's WhatsApp/contact channel.
10. Closing call to action and complete footer with contact information.

## Client-specific configuration
- `src/config.js`: brand, tagline, hero copy/video, theme tokens, phone, WhatsApp, email, address, website, airport defaults, navigation and optional sections.
- `src/data.js`: destination and package content, descriptions, durations, routes and image assets.
- `index.html`: document title, description, theme color and font imports.
- `src/styles.css`: shared visual system. Use CSS variables for theme adaptation. Avoid unnecessary override piles.

## Build workflow for a new client
1. Collect the client's official name, logo, tagline, phone/WhatsApp, email, address, website and social links.
2. Collect the actual destinations, packages, routes, durations, descriptions, inclusions, exclusions and booking terms.
3. Collect approved photographs/video and brand colors. Prefer client-owned assets or properly licensed image sources.
4. Update `src/config.js`, `src/data.js` and `index.html`. Keep the overall component structure and design language consistent.
5. Adapt section visibility to the client's real services. Do not show flight search unless the business provides flight assistance.
6. Make all destination cards clickable. Detail views must include a concise description and an enquiry/booking CTA.
7. Route enquiry actions to the client's verified contact details. Never leave Relax Holidays details in another client's site.
8. Check all phone, WhatsApp, email, address, external links, image URLs and form fields.
9. Test desktop, tablet and mobile layouts. Run the production build and fix all errors before delivery.

## Important behavior and truthfulness
- Flight results currently open Google Flights with the entered route, dates, passenger count and cabin. This is external search, not an embedded live-fare API or ticketing engine.
- WhatsApp forms send enquiries only. They do not confirm, charge for or issue a booking.
- Do not invent package prices, ratings, testimonials, travel dates, availability, licences or guarantees.
- Use only client-provided or verifiable business details.
- Do not expose flight-provider API secrets in browser code. Embedded live fares and ticketing require a provider agreement and a secure server-side integration.

## Local development
```bash
npm install
npm run dev
```

Production build:
```bash
npm run build
```

## Standard trigger instruction
When the user says **"travel website build"**, use this repository as the design and structure reference. Keep the same overall website experience and responsive behavior. Replace every brand, content, image, theme, contact, package, destination and service detail with the new client's verified information. Do not copy Relax Holidays details into another client's website.
