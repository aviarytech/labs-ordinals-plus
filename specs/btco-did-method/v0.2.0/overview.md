## Overview

The BTCO DID Method provides decentralized identifiers using Bitcoin's blockchain and ordinal theory. It leverages Bitcoin's security and network effects while maintaining full compliance with the W3C DID Core Specification.

### How It Works

The method assigns DIDs to specific satoshis using their ordinal numbers. The DID Document and related data are stored as inscriptions on these satoshis, enabling:

1. **Creation**: Register a DID by inscribing it on an unused satoshi
2. **Resolution**: Retrieve the DID Document by reading the inscription
3. **Updates**: Modify the DID Document through reinscriptions
4. **Deactivation**: Mark a DID as inactive using a special reinscription

### Key Features

* Zero counterparty risk through direct Bitcoin blockchain usage
* Standard DID operations via ordinal inscriptions
* Flexible cryptographic key management
* Integration with BTCO DID Linked Resources
* Support for verifiable credentials and digital identity management

### Purpose

The primary purpose of this method is to:
- Provide a secure and decentralized identity solution without relying on additional networks
- Enable verifiable credential issuance and verification
- Support digital identity management directly on Bitcoin
- Leverage Bitcoin's immutability for identity persistence 