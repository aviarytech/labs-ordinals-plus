## Specification

This section defines the technical specifications for creating, resolving, updating and deactivating BTCO DIDs using [[ref: Inscriptions]].

### Method Syntax and Structure

The syntax for the BTCO DID method follows the generic DID scheme with the satoshi ordinal number as the method specific identifier:

```
did:btco:<sat-number>
```

Where:
- `did`: The standard DID prefix
- `btco`: The BTCO method identifier
- `<sat-number>`: The ordinal number of the satoshi (must be a positive integer between 0 and 2099999997689999)

Example:
```
did:btco:1066296127976657
```

:::note
Previous versions of this specification described support for name-based and decimal identifiers. Numerical ordinal format is now the only supported format for better interoperability with the Ordinals protocol.
:::

### DID Document Format

The DID Document MUST be a valid JSON-LD document following this structure:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/multikey/v1"
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

This example shows a basic DID Document. Additional properties defined in the [DID Core specification](https://www.w3.org/TR/did-core/) MAY be included, such as:
- `service` endpoints
- `keyAgreement` for encryption
- `capabilityInvocation` for authorization
- `capabilityDelegation` for delegation
- Additional verification methods and relationships

Key components of this example:
- The required JSON-LD contexts that provide the vocabulary for DID and cryptographic features
- A primary verification method using the `Multikey` type for flexible key representation
- Basic verification relationships (`authentication` and `assertionMethod`) referencing the verification method

:::note
Since the DID Document is stored as metadata in the inscription, it can be accessed as a DID Linked Resource using the `/meta` suffix. For example: `did:btco:1066296127976657/0/meta` will return the DID Document for the first inscription on the satoshi. See the [DID Linked Resources specification](https://identity.foundation/labs-ordinals-plus/btco-did-linked-resources/) for more details about accessing inscription content and metadata.
:::

:::note
The Multikey context (`https://w3id.org/security/multikey/v1`) provides a modern verification method type that supports multiple key formats through multibase encoding. This allows for flexible key representation while maintaining compatibility with different cryptographic algorithms.
:::

### DID Operations

#### Create (Register)

To create a BTCO DID:

1. Select a satoshi by its ordinal number (e.g., 1066296127976657)
   - MUST be a positive integer
   - MUST be less than or equal to 2099999997689999 (total number of satoshis)
   - MUST NOT already have a valid DID inscription
2. Generate cryptographic key pair(s)
3. Create a DID Document following the specified format
4. Create an inscription with any valid content
5. Include the DID Document as metadata in CBOR format
6. Register the inscription on the Bitcoin network

#### Read (Resolve)

Resolution process:

1. Parse the DID components
   - MUST be a valid BTCO DID format
   - MUST contain a valid satoshi number
2. Locate the inscription on the specified satoshi using `ord`
   - Query the satoshi's inscription history
   - Find the most recent inscription with metadata
3. Decode and validate the CBOR metadata
   - MUST contain a valid DID Document
   - Document `id` MUST match the requested DID
4. Return the resolved DID Document

Possible errors:
- `invalidDidSyntax`: DID string does not match required format
- `satoshiNotFound`: Specified satoshi number does not exist
- `noInscription`: No inscription found on the satoshi
- `invalidMetadata`: Inscription metadata is not valid CBOR
- `invalidDidDocument`: Metadata does not contain valid DID Document
- `deactivated`: DID has been deactivated

Success response format:
```json
{
  "didDocument": {
    // The resolved DID Document
  },
  "metadata": {
    "created": "<timestamp>",
    "updated": "<timestamp>",
    "deactivated": false,
    "nextVersionId": "<DID Linked Resource Identifier>",
    "versionId": "<DID Linked Resource Identifier>",
    "equivalentId": ["<alternative DID URLs>"]
  }
}
```

:::note
The `versionId` and `nextVersionId` fields use DID Linked Resource identifiers (e.g., `did:btco:1066296127976657/0`) to reference specific versions of the DID Document. This format allows direct access to historical DID Document versions through the DID Linked Resources specification.
:::

Error response format:
```json
{
  "error": "<error code>",
  "message": "<human readable message>",
  "details": {
    // Additional error context
  }
}
```

#### Update

To update a BTCO DID:

1. Create new DID Document
2. Sign the update using an authorized verification method
3. Create an inscription with any valid content
4. Include updated DID Document as CBOR metadata
5. Register as a reinscription on the target satoshi

#### Deactivate

To deactivate a BTCO DID:

1. Create a minimal DID Document containing:
```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/did-resolution/v1"
  ],
  "id": "did:btco:1066296127976657",
  "deactivated": true
}
```
2. Include this document as CBOR metadata in the inscription
3. Register as a reinscription on the target satoshi
4. The inscription content can be any valid data

:::note
The deactivated state is defined in the DID Resolution specification and will be recognized by standard DID resolvers.
:::

### Cryptographic Operations

#### Control and Key Management

The BTCO DID method ties DID control directly to Bitcoin UTXO ownership:

- The Bitcoin private key controlling the satoshi's UTXO is the ultimate controller of the DID
- Only the current UTXO owner can update or deactivate the DID by creating new inscriptions
- Control of the DID transfers automatically when the satoshi moves to a new UTXO
- Loss of the Bitcoin private key controlling the UTXO means loss of DID control

The DID Document itself can contain multiple verification methods as defined in the DID Core specification. These keys:
- Are independent from the Bitcoin key controlling the DID
- Can be updated by the UTXO owner through a new DID Document
- Can be rotated or revoked if compromised (as long as UTXO control is maintained)

:::note
While Bitcoin UTXO recovery mechanisms are outside the scope of this specification, DID Document keys can be recovered through a DID Document update by the UTXO owner.
:::

#### Supported Algorithms

The method supports multiple cryptographic suites through the Multikey verification method type:

- Ed25519 for digital signatures (z6Mk prefix)
- X25519 for key agreement (z6LS prefix)
- secp256k1 for Bitcoin compatibility (z6MW prefix)

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
- Validate DID Document format

### Privacy Considerations

Enhanced privacy measures:

- Prohibit on-chain personal data
- Use separate Bitcoin addresses for DID operations
- Consider the permanent nature of blockchain data
- Implement appropriate data protection measures
- Support privacy-preserving cryptosuites
- Enable selective disclosure capabilities

### Inscription Content

BTCO DID inscriptions can contain any valid data in their content. The DID operations (create, update, deactivate) are controlled through the inscription metadata, while the content remains unrestricted for application-specific uses.

### Inscription Requirements

This DID method relies on the Ordinals protocol and the `ord` client for inscription handling:

:::note
All inscription creation, validation, and ordering follows the Ordinals protocol as implemented by the reference `ord` client. This specification does not modify or extend the underlying inscription mechanisms.
:::

#### DID Document Storage

- The DID Document MUST be stored in the inscription metadata using CBOR encoding
- The inscription content MAY contain any valid data as defined by the Ordinals protocol
- Multiple inscriptions on the same satoshi are handled according to Ordinals protocol rules
- Size limitations and other technical constraints are inherited from the Ordinals protocol

#### Inscription Order

When resolving a DID:
- The most recent valid inscription containing DID metadata is authoritative
- Inscription order is determined by the Ordinals protocol
- Earlier inscriptions are considered historical versions of the DID Document

For detailed information about inscription mechanics, refer to the [Ordinals protocol documentation](https://docs.ordinals.com/). 