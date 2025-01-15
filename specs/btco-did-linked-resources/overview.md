## Overview

The Bitcoin Ordinals DID Linked Resources extension provides a standardized mechanism for creating, managing, and resolving [[ref: DID Linked Resource]]s that are cryptographically linked to BTC Ordinals DIDs. This specification builds upon the core BTC Ordinals DID Method to enable robust resource management capabilities directly on the Bitcoin network through ordinal inscriptions.

### Purpose

The primary purpose of this extension is to establish a reliable and standardized way to:
- Associate various types of resources (schemas, frameworks, images) with DIDs
- Ensure cryptographic verification of resource authenticity
- Enable versioning and management of linked resources
- Provide consistent [[ref: Resource Resolution]] methods for accessing resources

### Resource Management

Resources are managed through a series of ordinal inscriptions that contain:
1. A unique resource identifier
2. Resource metadata (type, version, checksums)
3. The resource content itself or secure references to external storage

Each resource is uniquely identified using:
- Collection ID (the associated DID)
- Resource ID (the inscription ID)
- Resource Name
- Resource Type
- Optional Version information

### Key Features

1. **Immutable Storage**: Resources are permanently stored using BTC ordinal inscriptions
2. **Cryptographic Verification**: Resources include checksums and can be signed using DID verification methods
3. **Versioning Support**: Resources can be versioned with clear links between versions
4. **Flexible Resource Types**: Support for various resource types including:
   - Credential Schemas
   - Status Lists
   - Visual Representations
   - Governance Frameworks
   - Configuration Documents

### Resource Resolution

Resources can be resolved through:
1. Direct ordinal inscription lookup
2. DID-relative resource identifiers
3. Alternative URI references (when provided)

### Implementation Considerations

When implementing this specification, developers should consider:
- BTC network inscription size limitations (~190 KB max)
- External storage requirements for larger resources
- Proper cryptographic validation of resources
- Version management strategies
- Resource type standardization

This extension aims to provide a robust foundation for managing DID-linked resources while maintaining the security and immutability guarantees of the Bitcoin network through ordinal inscriptions.
