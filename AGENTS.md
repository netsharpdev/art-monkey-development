# Repository Guidelines

Brief guide for contributing to the Art Monkey Gatsby site.

## Project Structure & Module Organization
- `src/pages`: Page entry points (`index.tsx`), one default export per file.
- `src/components`: Reusable UI (Header, Hero, Services, Portfolio, ContactMe, SEO); use subfolders for larger areas.
- `src/models`: Shared types (e.g., `PortfolioModel`); keep domain models here.
- `src/styles`: Global Sass (`artmonkey.scss`) plus partials; import styles in pages/components.
- `src/images` and `public`: Static assets; prefer `gatsby-source-filesystem` for images that need optimization.
- Root config: `gatsby-config.ts`, `tsconfig.json`, `package.json`; env loaded from `.env.<NODE_ENV>`.

## Build, Test, and Development Commands
- `npm run develop` (alias `npm start`): Gatsby dev server with hot reload.
- `npm run build`: Production build; fails on TS/GraphQL errors.
- `npm run serve`: Serve the production build locally.
- `npm run clean`: Clear Gatsby cache/public output; run after dependency or schema changes.
- `npm run typecheck`: Strict TypeScript validation without emitting files.

## Coding Style & Naming Conventions
- Language: TypeScript + React 18; keep `strict` mode satisfied.
- Formatting: Double quotes, semicolons, 2-space indentation. Align JSX attributes for clarity.
- Components: PascalCase files and components (`Portfolio`, `ContactMe`). Utilities in `camelCase`; interfaces/enums in PascalCase.
- Imports: Prefer short relative paths grouped by feature.
- Styles: SCSS modules/partials; lean on BEM-style class names and avoid global leaks.

## Testing Guidelines
- No automated tests yet; run `npm run typecheck` and `npm run build` before PRs.
- If adding tests, colocate with modules or mirror `src/` under `__tests__`, name files `<name>.test.ts[x]`, and note the runner (Jest/Vitest) in the PR.

## Commit & Pull Request Guidelines
- Commits: Short, imperative (e.g., “Extend capacity of portfolio up to 12 images”). Squash cosmetic fixes.
- PRs: Provide summary, linked issue, screenshots for UI changes, and call out Contentful schema or env changes.
- Checks: Run `npm run typecheck`, `npm run build`, and tests (when added). Mention skipped checks.

## Security & Configuration Tips
- Environment: Requires Contentful creds—set `CONTENTFUL__SPACE_ID` and `CONTENTFUL__ACCESS_TOKEN` in `.env.development`/`.env.production`; never commit `.env*`.
- Analytics: GA ID lives in `gatsby-config.ts`; do not expose tokens.
- Dependencies: Use `npm` (lockfile present). After upgrades, run `npm run clean && npm run build` to refresh caches and surface schema changes.
