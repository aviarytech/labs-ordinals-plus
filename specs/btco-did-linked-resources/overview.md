## Overview

The BTCO DID Linked Resources extension provides a standardized mechanism for creating, managing, and resolving [[ref: DID Linked Resources]] that are cryptographically linked to BTCO DIDs. This specification builds upon the core BTCO DID Method to enable robust resource management capabilities directly on the BTC network through [[ref: Ordinal Theory]] and [[ref: Inscriptions]].

### Purpose

The primary purpose of this extension is to establish a reliable and standardized way to:
- Associate various types of resources (schemas, frameworks, images) with DIDs
- Ensure cryptographic verification of resource authenticity
- Enable versioning and management of linked resources
- Provide consistent [[ref: Resource Resolution]] methods for accessing resources

All of this is achieved on [[ref: Bitcoin (BTC)]], the most secure and widely adopted blockchain network, leveraging its inherent properties of immutability and decentralization.

### Resource Management

Resources are managed through [[ref: Inscriptions]] that will result in:
1. A unique resource identifier
2. Resource details (content type, content length, timestamp)
3. The resource content itself
4. Optional resource metadata

Each resource is uniquely identified using:
- Collection ID (the associated DID)
- Resource Index (the inscription's position on the sat)

### Key Features

1. **Immutable Storage**: Resources are permanently stored using [[ref: Inscriptions]]
2. **Cryptographic Verification**: Resources include metadata that can be signed using DID verification methods
3. **Versioning Support**: Resources can be versioned with clear links between versions
4. **Flexible Resource Types**: Support for various resource types including:
   - Credential Schemas
   - Status Lists
   - Visual Representations
   - Governance Frameworks
   - Configuration Documents

### Resource Resolution

Resources can be resolved through:
1. DID-relative [resource identifiers](#resource-identification)
2. Alternative [resource collection URI references](#resource-collections)

### Implementation Considerations

When implementing this specification, developers should consider:
- BTC network inscription size limitations (~190 KB max)
- Proper cryptographic validation of resources
- Version management strategies
- Resource type standardization

This extension aims to provide a robust foundation for managing DID-linked resources while maintaining the security and immutability guarantees of the BTC network.
