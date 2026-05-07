# Contributing to SignSafe

Read this before requesting or working on an issue.

## What This Project Is

SignSafe is a security project.
The work here affects transaction safety, so correctness matters more than speed.

## Before You Start

1. Read the architecture doc: [docs/architecture.md](/Users/mac/Desktop/signsafe/docs/architecture.md)
2. Read the roadmap: [docs/roadmap.md](/Users/mac/Desktop/signsafe/docs/roadmap.md)
3. Make sure you understand the issue you want to work on.
4. Check whether you actually have the skills requested for that issue.

## How I Assign Work

I will pick contributors based on qualification.

That means:
- I will look at your GitHub profile
- I will check your past work
- I will review your ability to handle the issue you requested
- I will not assign work only because you asked first

## What I Expect

- Keep changes small and focused.
- Follow the scope of the issue exactly.
- Do not add unrelated refactors.
- Use AI if you want, but you are responsible for the result.
- Know what you are doing before you submit.

If a PR is careless, I will reject it.
You are accountable for the code you submit.

## Setup

```bash
bun install
```

Then inspect the repo structure:

```bash
ls
```

If the issue touches a specific package, work inside that package and keep the change local to it.

## Pull Request Rules

Include these in every PR:

- the issue number
- a short summary of what changed
- any testing you ran
- notes about edge cases or limitations

## Completion Rule

When you finish an issue:

- update the issue status with `✅`
- mention the exact issue number in your PR or comment
- explain what was tested

## Review Standard

I will always inspect your changes and test them thoroughly before merging.

That is not optional.

## Good Contribution Shape

Best contributions are:

- small
- reviewable
- well-named
- tested
- documented when needed

