<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Repository Notes

- Use Bun for dependency installation and scripts where possible.
- Keep service and event content in `data/services.ts` and `data/events.ts` rather than duplicating it in page components.
- Preserve the existing visual language: navy, gold, warm neutral surfaces, and Lucide icons.
- Reuse shared components such as `PageHero`, `FormField`, and the navigation components before adding route-specific equivalents.
- Run `bun run lint` and `bunx tsc --noEmit` after code changes when practical.
- Keep the persistent WhatsApp action available through `app/layout.tsx`; update its number and message in `components/ui/WhatsAppButton.tsx`.
