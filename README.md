---
title: SDLC SIG (Meta / Governance)
outline: deep
lastUpdated: true
---

# SDLC SIG — HyperCore One
*Software Delivery Lifecycle (SDLC)*

> We set the rules, the rails, and the rewards for engineering at HyperCore One.

## Contact & Meetings
- **Matrix:** `#sig-sdlc:hc1.chat`
- **Chair:** @georgezgeorgez:hc1.chat
- **Meetings:** Ad-hoc

## Scope & Mandate

### Org-Wide Strategy & Direction
- Set engineering direction and create/retire SIGs to execute it.
- Own the cross-SIG roadmap: collect initiatives, sequence them, surface dependencies, resolve priority conflicts.

### Standardization for Developer Velocity
- Maintain the org-wide ADR catalog (binding across repos).
- Define a minimal SDLC baseline across planning, development, review, release, and operations.
- Set dependency-management policy and accountability for timely updates.
- Provide shared implementation aids (e.g., CI actions, templates).

### Incentive & Contribution Frameworks
- Set principles and guardrails for decentralized incentives and contributions (non-custodial, opt-in, non-binding).
- Provide reference implementations and specs for these frameworks (self-hostable, fork-friendly).

## Owned Repos

| Repo | Purpose |
|---|---|
| [`hypercore-one/meta`](https://github.com/hypercore-one/meta) | Org-wide docs, ADRs, governance (source of truth for cross-repo decisions) |
| [`hypercore-one/sig-sdlc`](https://github.com/hypercore-one/sig-sdlc) | SDLC SIG docs (this page and SIG-specific materials) |
| [`hypercore-one/incubator`](https://github.com/hypercore-one/incubator) | Incentives app (incubator/pledges) implementing pillar pledges & proposal flow |

## Active Initiatives
> Full list: **[/initiatives](/initiatives)**

| ID | Title | Description |
|---:|---|---|
| SDLC-001 | [Incubator MVP (Nostr Pledges)](/initiatives/sdlc-001) | Off-chain proposal discovery and pillar pledging prior to on-chain Accelerator-Z submissions. |
