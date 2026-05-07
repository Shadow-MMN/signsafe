# SignSafe

SignSafe is a pre-signature safety layer for wallets and dApps.

In plain English: it checks what a transaction really does before a user signs it, then explains the risk in a way normal people can understand.

Example:
- A site says "Connect and claim"
- The actual transaction tries to add a malicious signer or approve unlimited access
- SignSafe should flag that before the wallet signs

## What We Are Building

The first version is a browser extension. The long-term version adds an SDK so wallets and dApps can use the same safety engine directly.

Core goals:
- inspect transaction intent before signing
- decode chain-specific payloads, starting with Stellar
- score the risk of what the transaction does
- explain suspicious behavior in plain language
- create a shared base that contributors can extend through GitHub issues

## Repository Layout

```text
signsafe/
├── apps/
│   └── extension/        Browser extension MVP
├── packages/
│   ├── core/             Risk engine and shared decision logic
│   ├── parsers/          Chain-specific transaction decoding
│   ├── sdk/              Reusable developer SDK
│   └── shared/           Shared types and utilities
├── docs/                 Project notes and future documentation
├── package.json          Root workspace config
├── turbo.json            Build orchestration
├── tsconfig.base.json    Shared TypeScript config
└── .gitignore            Ignore generated and local-only files
```

## Project Docs

- [Architecture](/Users/mac/Desktop/signsafe/docs/architecture.md)
- [Roadmap](/Users/mac/Desktop/signsafe/docs/roadmap.md)
- [Contributing](/Users/mac/Desktop/signsafe/CONTRIBUTING.md)

## Current Structure

This repo is organized as a Bun workspace monorepo.

- `apps/extension` holds the user-facing browser extension.
- `packages/core` will hold the safety logic and risk rules.
- `packages/parsers` will decode Stellar transaction data first.
- `packages/sdk` will expose the same checks to external projects later.
- `packages/shared` contains common types like risk results and report shapes.

## Setup

```bash
bun install
```

Then run the workspace scripts as they are added:

```bash
bun run dev
bun run build
```

## Planned Workflow

1. Finish the browser extension MVP.
2. Implement the first Stellar transaction parser.
3. Add the first risk rules, starting with signer changes and suspicious authorization patterns.
4. Create small GitHub issues for contributors.
5. Use Drips Wave to reward contributors for merging well-defined security work.

## Contribution Style

This project should stay:

- small and specific per issue
- easy to review
- readable for contributors new to the codebase
- focused on defensive security and transaction verification

## Notes

The project was intentionally started with Bun instead of pnpm.
The repository should stay simple at the root and grow through the monorepo packages instead of piling everything into one app.
