# Security Policy

## Keep Secrets Out of the Repository

Never commit Telegram bot tokens, private environment files, API keys, chat IDs, webhook secrets, session files, cookies, databases, or logs.

Use `.env.example` as the public configuration reference and keep real values in local environment files or a deployment secret manager.

## Dependency Safety

For dependency maintenance, use exact package versions and verify they were published at least 48 hours before changing `package.json` or `package-lock.json`. Do not use `@latest`, `npx`, `npm audit fix --force`, or unreviewed major upgrades for public-repo cleanup. Prefer removing unused packages over upgrading them, and use lockfile-only, ignore-scripts updates when a lockfile refresh is required.

## If a Secret Is Exposed

Rotate exposed Telegram bot tokens and other credentials immediately. Delete or invalidate any affected sessions, review recent bot activity, and update deployment secrets with the replacement values.

## Reporting Vulnerabilities

Please report security issues privately to the repository maintainer. Do not include working tokens, private keys, cookies, session files, or exploit payloads in public issues. A short description, affected area, and safe reproduction steps are enough to start the review.
