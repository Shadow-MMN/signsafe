# SignSafe Architecture

## Overview

SignSafe is a pre-signature transaction safety layer.

The goal is simple:

1. A dApp or wallet prepares a transaction.
2. SignSafe inspects the request before the user signs.
3. The system decodes the intent, scores the risk, and explains what is actually happening.
4. The user gets a clear safe / risky / dangerous decision before any signature is sent.

## Why This Exists

Wallet drainers and malicious dApps often depend on confusion.
They make the UI look harmless while the actual transaction does something dangerous.

SignSafe is meant to catch that gap.

## Core Parts

### 1. Browser Extension

The extension is the first product layer.
It sits close to the user and intercepts transaction flows before signing.

Responsibilities:
- observe wallet interaction points
- capture transaction payloads
- send the payload to the risk engine
- present a clear warning screen to the user

Suggested stack:
- TypeScript
- React for UI
- Bun for workspace management
- Vite for extension builds

### 2. Parsers

Parsers convert chain-specific transaction data into a common internal format.

The first parser should target Stellar.

Responsibilities:
- decode transaction payloads
- extract operations
- normalize chain-specific fields into shared types

Suggested stack:
- TypeScript
- Stellar SDK

### 3. Core Risk Engine

This is the decision layer.

Responsibilities:
- classify the transaction intent
- apply risk rules
- produce a safety score
- explain the risk in plain language

Examples of early rules:
- signer changes
- high-value transfers
- suspicious authorization patterns
- trustline changes
- unknown contract or account interactions

Suggested stack:
- TypeScript
- shared types and validation utilities

### 4. SDK

The SDK is the long-term developer-facing API.
It lets wallets and dApps call the same safety logic without depending on the browser extension.

Responsibilities:
- expose a stable API
- reuse the core engine
- support future chain adapters

Suggested stack:
- TypeScript

### 5. Shared Package

The shared package holds code that multiple packages need.

Typical contents:
- result types
- risk level definitions
- common helpers
- constants

## Data Flow

```text
dApp / Wallet
   -> transaction request
   -> SignSafe extension
   -> parser
   -> risk engine
   -> human-readable result
   -> user decision
```

## Long-Term Shape

The project should grow in layers:

1. Extension MVP
2. Stellar parsing
3. Risk rules
4. SDK
5. Multi-chain adapters later

## Contributor Model

The repo is designed to be split into small GitHub issues so contributors can work on one clear task at a time.

That makes review easier and keeps the codebase clean.

