# Prestigious Consultancy Website

The Prestigious Consultancy website presents practical support for people,
performance, and spaces across three service areas:

- **Training:** professional, energetic learning programmes.
- **Consultancy:** executive, sophisticated strategic advisory.
- **Space Finishes:** elegant, luxurious finishes for residential interiors and offices.

The site also includes a corporate events directory, event booking and
waitlist flows, service enquiry forms, contact information, and a persistent
WhatsApp reach-out button.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons

## Local Development

Install dependencies with Bun, then start the development server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available checks and production commands:

```bash
bun run lint
bunx tsc --noEmit
bun run build
bun run start
```

The project also supports the equivalent `npm run` commands defined in
`package.json`.

## Site Structure

- `/` - homepage with service tracks, featured event, reviews, and contact CTA
- `/about` - company mission, vision, and values
- `/services` - service overview
- `/services/[slug]` - service detail page and enquiry form
- `/events` - upcoming, recent, and past event directory
- `/events/[slug]` - event details, agenda, speakers, and booking/waitlist form
- `/contact` - contact details and enquiry form

## Content Management

Service content is defined in [`data/services.ts`](data/services.ts), including
positioning, descriptions, imagery, outcomes, audiences, and Space Finishes
applications. Event content is defined in [`data/events.ts`](data/events.ts).

Shared layout and navigation live in `app/layout.tsx` and
`components/navigation/`. Reusable forms and display components live in
`components/forms/` and `components/ui/`.

Images currently use remote Unsplash URLs. If a new image host is introduced,
update the allowed remote image configuration in `next.config.ts` as needed.

## Contact Configuration

The floating WhatsApp action is defined in
[`components/ui/WhatsAppButton.tsx`](components/ui/WhatsAppButton.tsx). Update
the `wa.me` number and prefilled message there when the business contact
number changes. Phone, email, and office details are currently displayed in
`components/navigation/Footer.tsx` and `app/contact/page.tsx`.