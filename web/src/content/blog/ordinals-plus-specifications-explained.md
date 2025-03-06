---
title: "Ordinals Plus Specifications Explained"
date: "2025-03-06"
description: "A simplified overview of the three core specifications powering Ordinals Plus on Bitcoin."
tags: ["specifications", "technical", "did", "verifiable-credentials"]
---

# Ordinals Plus Specifications Explained

Ordinals Plus is built on three core specifications that work together to bring decentralized identity and verifiable credentials to Bitcoin Ordinals. Here's a simplified explanation of each specification and how they enable authentic digital assets on Bitcoin.

## BTCO DID Method

**What it is:** A way to create decentralized identifiers (DIDs) directly on Bitcoin using Ordinal inscriptions.

**Key features:**
- Creates persistent, globally unique identifiers using Bitcoin's Ordinal Theory
- Allows identifiers to be resolved to DID Documents containing verification methods and services
- Enables updates through reinscriptions on the same satoshi
- Provides deactivation mechanisms when needed
- Supports secure key management aligned with Bitcoin cryptography

**Why it matters:** This specification creates the foundation for digital identity on Bitcoin, allowing any inscription to have a verifiable, blockchain-secured identity that can be used in decentralized systems.

## BTCO Verifiable Metadata (BTCO-VM)

**What it is:** A framework for creating and verifying statements about Bitcoin Ordinal inscriptions using W3C Verifiable Credentials.

**Key features:**
- Defines credential types including Curated Collection and Verifiable Collectible
- Establishes issuance processes for credential creation
- Implements verification systems with cryptographic proof validation
- Provides revocation mechanisms for managing credential lifecycle
- Leverages Bitcoin's security model for trustless verification

**Why it matters:** This specification enables creators, organizations, and systems to make verifiable claims about digital assets, establishing provenance, authenticity, and relationships between inscriptions.

## BTCO DID Linked Resources

**What it is:** A system for connecting immutable resources (like images, schemas, or files) to BTCO DIDs.

**Key features:**
- Manages resources through Bitcoin inscriptions
- Creates a unique identification system for resources
- Supports various resource types needed for verifiable systems
- Includes version management capabilities
- Defines resolution methods for accessing resources

**Why it matters:** This specification completes the ecosystem by providing ways to link and resolve any digital resource within the verifiable credential system, ensuring all necessary components are available and authentic.

## How They Work Together

These three specifications form a complete system for creating authentic digital assets on Bitcoin:

1. **BTCO DIDs** establish the identity layer
2. **BTCO-VM** provides the verification layer 
3. **BTCO Linked Resources** supplies the resource layer

Together, they create a powerful framework that turns ordinary Ordinal inscriptions into verifiable assets with authentic provenance, cryptographic security, and decentralized verification - all powered by Bitcoin.

## Current Status

All specifications are currently in active development as part of our DIF Labs incubation. We're working towards standardization and implementation, with initial deployments planned for Bitcoin Vegas in May 2025.

Want to learn more? Check out our detailed [technical specifications](/specifications) or join our [community discussions](https://github.com/decentralized-identity/labs-ordinals-plus/discussions).