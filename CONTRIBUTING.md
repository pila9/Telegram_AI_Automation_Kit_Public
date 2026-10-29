# Contributing

Thank you for helping improve Telegram AI Automation Kit.

## Development

1. Fork the repository and create a branch for your change.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to a local environment file if you are testing live integrations.
4. Run the relevant checks before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run build
npm run test:readiness
```

## Guidelines

- Keep the mock frontend usable without real Telegram or AI credentials.
- Do not commit real tokens, private environment files, logs, databases, session files, or local caches.
- Keep new configuration documented in `.env.example` with placeholder values only.
- Prefer focused changes that preserve the existing user workflow.

## Pull Requests

Include a short summary, validation commands run, and any remaining limitations. If your change adds a live integration, document how secrets are provided without committing them.
