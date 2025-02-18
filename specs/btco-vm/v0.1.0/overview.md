## Overview

### Purpose

BTCO Verifiable Credentials (BTCO-VC) enables the creation and verification of claims about Bitcoin Ordinal inscriptions. The specification leverages the W3C Verifiable Credentials Data Model 2.0 and BTCO DIDs to provide a standardized way to make verifiable assertions about ordinal inscriptions.

### Key Features

1. **Trustless Verification**
   - Leverages Bitcoin's security model
   - Uses cryptographic proofs
   - Supports decentralized verification

2. **Ordinal-Native**
   - Built on BTCO DIDs
   - Inscription-based storage
   - Bitcoin-secured credentials

3. **Credential Types**
   - Curated Collection credentials
   - Verifiable Collectible credentials
   - Extensible for future types

4. **Standards Compliance**
   - W3C Verifiable Credentials 2.0
   - DID Core specification
   - JSON-LD compatibility

### Use Cases

1. **Collection Curation**
   - Authenticate collections
   - Establish provenance
   - Track ownership history

2. **Artifact Verification**
   - Verify authenticity
   - Establish creator identity
   - Document properties

3. **Rights Management**
   - License verification
   - Usage permissions
   - Transfer restrictions

### Architecture

The BTCO-VC system consists of:

1. **Credential Schema**
   - Base credential structure
   - Type-specific extensions
   - Validation rules

2. **Issuance Process**
   - Credential creation
   - Digital signing
   - Inscription storage

3. **Verification System**
   - Proof validation
   - Status checking
   - Rules enforcement

4. **Revocation Mechanism**
   - Status tracking
   - Revocation credentials
   - Status resolution 