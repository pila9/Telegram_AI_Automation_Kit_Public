# Telegram AI Automation Kit

Telegram AI Automation Kit is a public starter kit for turning Telegram bot conversations into AI-assisted business request workflows.

The current app is a frontend implementation with mock data. It demonstrates how incoming Telegram messages can become structured requests, summaries, priorities, suggested replies, logs, and dashboard follow-up without requiring live credentials.

## What It Does

- Shows a Telegram-style intake flow for customer and internal messages.
- Classifies requests by type, priority, status, and owner.
- Displays AI-assisted summaries and suggested replies.
- Provides dashboard views for requests, logs, settings, packages, and use cases.
- Keeps demo settings local to the browser session only.
- Documents the configuration shape needed for live Telegram and AI integrations.

## Key Features

- React, TypeScript, Vite, and Tailwind CSS frontend.
- Mock request data and activity logs for local demos.
- Bot flow simulator for testing intake and response paths.
- Request detail modal with status updates and suggested reply copy action.
- Settings screen for Telegram token, chat ID, AI provider, storage mode, and prompt examples.
- Public safety defaults: no committed secrets, no live API calls, and no persistent credential storage.

## Requirements

- Node.js 18 or newer.
- npm.
- A Telegram bot token from BotFather only if you build or connect a live bot backend.

## Quick Start

```bash
git clone <your-fork-url>
cd Telegram_AI_Automation_Kit_Public
npm install
cp .env.example .env.local
npm run dev
```

Fill `.env.local` with your own values only when testing live integrations. The included frontend mock works without real Telegram, AI, or storage credentials.

## Environment Variables

Use `.env.example` as the public configuration reference. It contains placeholders only:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `AI_API_KEY`
- `WEBHOOK_SECRET`

Do not commit `.env`, `.env.local`, `.env.production`, or any other file containing real credentials.

## Development Commands

These commands are defined in `package.json`:

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm run typecheck
npm run test:readiness
```

## Deployment Notes

The current project builds as a static Vite app:

```bash
npm run build
```

Deploy the generated `dist` folder to any static hosting provider. For a real Telegram bot, keep bot tokens, AI keys, webhook secrets, and storage credentials on a backend or secret-managed deployment environment. Do not expose live secrets in the browser bundle.

## Security and Privacy

- The repository should contain placeholders only, never real bot tokens or API keys.
- Demo data is synthetic and should not contain private customer information.
- The frontend does not send mock settings to Telegram, AI providers, or storage services.
- Rotate any exposed Telegram bot token immediately and update your deployment secrets.
- See `SECURITY.md` for reporting guidance.

## License

MIT License. See `LICENSE` for details.
