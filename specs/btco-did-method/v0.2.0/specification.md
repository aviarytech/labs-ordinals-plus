## Specification

This section defines the technical specifications for creating, resolving, updating and deactivating BTCO DIDs using [[ref: Inscriptions]].

### Method Syntax and Structure

The syntax for the BTCO DID method follows the generic DID scheme with additional components:

```
did:btco:<sat-number>[/<path>][?<query>][#<fragment>]
```

Where:
- `did`: The standard DID prefix
- `btco`: The BTCO method identifier
- `<sat-number>`: The ordinal number of the satoshi (must be a positive integer between 0 and 2099999997689999)
- `/<path>` (optional): References specific parts of the DID document
- `?<query>` (optional): Provides additional parameters
- `#<fragment>` (optional): References specific sections

Example:
```
did:btco:1066296127976657
```


:::note

Previous versions supported name-based and decimal identifiers. As of v0.2.0, only the numerical ordinal format is supported for better interoperability and consistency.

:::

### DID Document Format

The DID Document MUST be a valid JSON-LD document following this structure:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/data-integrity/v2"
  ],
  "id": "did:btco:1066296127976657",
  "verificationMethod": [
    {
      "id": "did:btco:1066296127976657#0",
      "type": "Multikey",
      "controller": "did:btco:1066296127976657",
      "publicKeyMultibase": "z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
    }
  ],
  "authentication": ["did:btco:1066296127976657#0"],
  "assertionMethod": ["did:btco:1066296127976657#0"]
}
```

### DID Operations

#### Create (Register)

To create a BTCO DID:

1. Select a satoshi by its ordinal number (e.g., 1066296127976657)
   - MUST be a positive integer
   - MUST be less than or equal to 2099999997689999 (total number of satoshis)
   - MUST NOT already have a valid DID inscription
2. Generate cryptographic key pair(s)
3. Create a DID Document following the specified format
4. Create a text/plain inscription with the DID identifier
5. Include the DID Document as metadata in CBOR format
6. Register the inscription on the Bitcoin network

#### Read (Resolve)

Resolution process:

1. Parse the DID components
2. Locate the inscription on the specified satoshi
3. Verify the inscription content matches the DID
4. Decode and validate the CBOR metadata
5. Return the resolved DID Document

#### Update

To update a BTCO DID:

1. Create new DID Document
2. Sign the update using an authorized verification method
3. Create a reinscription on the same satoshi
4. Include updated DID Document as CBOR metadata

#### Deactivate

To deactivate a BTCO DID:

1. Create an inscription with content "🔥"
2. Include no metadata
3. Register as a reinscription on the target satoshi

### Cryptographic Operations

#### Supported Algorithms

The method supports multiple cryptographic suites through the Multikey verification method type:

- Ed25519 for digital signatures (z6Mk prefix)
- X25519 for key agreement (z6LS prefix)
- secp256k1 for Bitcoin compatibility (z6Mk prefix)

The Data Integrity proof suite MUST be used for all cryptographic operations. This provides:
- Standardized proof format
- Cryptographic agility
- Future-proof verification methods

#### Key Management

Implementations MUST:
- Generate secure random keys
- Support key rotation
- Implement secure key storage
- Enable key recovery mechanisms
- Use appropriate key types for different operations (signing vs encryption)

### Security Considerations

Additional security requirements:

- Validate all cryptographic proofs
- Verify inscription ownership and order
- Implement proper key management
- Follow Bitcoin network security practices
- Monitor for blockchain reorganizations
- Validate DID Document format and signatures

### Privacy Considerations

Enhanced privacy measures:

- Minimize on-chain personal data
- Use separate Bitcoin addresses for DID operations
- Consider the permanent nature of blockchain data
- Implement appropriate data protection measures
- Support privacy-preserving verification methods
- Enable selective disclosure capabilities 