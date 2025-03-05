## Specification

### 1. Introduction

BTCO Verifiable Metadata (BTCO-VM) is a specification for creating, verifying, and managing metadata about Bitcoin Ordinal inscriptions using W3C Verifiable Credentials standards. This specification leverages BTCO DIDs and BTCO DID Linked Resources to provide a standardized approach for making verifiable assertions about ordinal inscriptions.

### 2. Schema Requirements

All BTCO Verifiable Metadata MUST adhere to these core requirements:

1. Conform to W3C Verifiable Credentials Data Model 2.0
2. Use BTCO DIDs for issuer and subject identifiers
3. Implement DataIntegrityProof with supported cryptosuites
4. Include required metadata properties based on credential type

#### 2.1 BTCO Context

The `https://ordinals.plus/v1` context defines BTCO-specific terms used in this specification:

```json
{
  "@context": {
    "@version": 1.1,
    "btco": "https://ordinals.plus/v1#",
    "BTCOResourceMetadata": "btco:ResourceMetadata",
    "ResourceMetadataCredential": "btco:ResourceMetadataCredential",
    "CollectionCredential": "btco:CollectionCredential",
    "VerifiableCollectible": "btco:VerifiableCollectible",
    "CuratedCollectionCredential": "btco:CuratedCollectionCredential",
    "BTCOResource": "btco:Resource",
    "BTCOCollection": "btco:Collection",
    "Collectible": "btco:Collectible",
    "CuratedCollection": "btco:CuratedCollection",
    "metadata": "btco:metadata",
    "properties": "btco:properties",
    "collectionType": "btco:collectionType",
    "resources": "btco:resources",
    "status": "btco:status",
    "statusListCredential": "btco:statusListCredential",
    "statusListIndex": "btco:statusListIndex"
  }
}
```

This context provides the vocabulary for all BTCO-specific terms used in credentials and ensures interoperability between different implementations.

### 3. Base Structure

This minimal structure serves as the foundation for all BTCO Verifiable Metadata:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "BTCOResourceMetadata"],
  "issuer": {
    "id": "did:btco:<sat-number>"
  },
  "validFrom": "<iso-8601-date>",
  "credentialSubject": {
    "id": "did:btco:<sat-number>",
    "type": "BTCOResource",
    "metadata": {
      "name": "<string>",
      "description": "<string>"
    }
  }
}
```

::: note
A formal JSON Schema for validation will be added in a future version of this specification. The structure shown above represents the minimal required fields.
:::

### 4. Integration with BTCO DID Linked Resources

BTCO Verifiable Metadata leverages BTCO DID Linked Resources to provide a comprehensive solution for metadata about ordinal inscriptions.

#### 4.1 Resource Association

Verifiable Metadata can be associated with BTCO DID Linked Resources in two ways:

1. **Self-describing Metadata**:
   - Credential describes the resource it is inscribed on
   - `credentialSubject.id` equals the DID of the containing satoshi
   - Accessible via the `/meta` endpoint of the resource

   ```
   did:btco:1954913028215432/0/meta
   ```

2. **Referential Metadata**:
   - Credential describes one or more other resources
   - `credentialSubject.id` differs from the credential's resource DID
   - Creates a verifiable link between resources

#### 4.2 Collection Metadata

Collections defined in BTCO DID Linked Resources can be enhanced with verifiable metadata:

1. **Curated Collections**:
   - Uses a Verifiable Credential to define collection membership
   - Provides authenticated curation with issuer attestation
   - Allows verification of collection integrity and provenance

2. **Heritage Collections**:
   - Can reference parent/child relationships with verified metadata
   - Enables verified provenance chains through heritage relationships

### 5. Metadata Verification

#### 5.1 Standard Verification Process

Verification of BTCO Verifiable Metadata MUST follow these standardized steps:

1. **Resolution**:
   - Resolve the metadata's BTCO DID Linked Resource using the inscription index
   - Retrieve the complete credential document

2. **Structure Validation**:
   - Validate that the credential has all required fields according to W3C VC Data Model
   - Validate that the BTCO-specific fields conform to this specification
   - Validate that timestamps are properly formatted and logical

3. **Proof Verification**:
   - For each proof in the `proof` or `proofs` array:
     - Identify the cryptosuite used
     - Resolve the verification method from the DID referenced in the proof
     - Verify the proof according to the cryptosuite's specific verification algorithm
     - All proofs MUST verify successfully, as required by W3C Data Integrity specifications

4. **Issuer Verification**:
   - Resolve the issuer's DID Document using the BTCO DID Method
   - Verify the issuer controls the satoshi by:
     - Checking that the verification method referenced in the proof belongs to the issuer's DID Document
     - Validating that the DID Document contains the verification method identifier
     - Confirming the controller property of the verification method matches the issuer's DID
   - When using the verification method, confirm that:
     - The satoshi number in the verification method MUST match the issuer's satoshi number (they are the same satoshi)
     - The inscription indexed in the verification method contains the actual verification key material
     - This ensures that the same entity that owns the satoshi also controls the verification keys

5. **Reference Validation**:
   - Validate that all DIDs referenced in the credential exist and resolve successfully
   - For indexed references to specific inscriptions, verify those inscriptions exist

6. **Type-Specific Validation**:
   - Apply credential-type-specific validation rules as defined in this specification
   - For `ResourceMetadataCredential`, verify the referenced resource properties
   - For `CollectionCredential`, verify all resources in the collection exist

7. **Status Checking**:
   - If the credential has a status property, check its current status using the status property format
   - Retrieve the status list credential referenced in the status property
   - Verify the status list credential is valid and issued by an authorized entity
   - Check the referenced index within the status list
   - Reject credentials that have been revoked

#### 5.2 DataIntegrityProof Verification

Verification of DataIntegrityProof proofs MUST follow the procedures defined in the relevant cryptosuite specifications:

- For `eddsa-jcs-2022`: Follow the [Data Integrity EdDSA Cryptosuite](https://www.w3.org/TR/vc-di-eddsa/)
- For `ecdsa-jcs-2019`: Follow the [Data Integrity ECDSA Cryptosuite](https://www.w3.org/TR/vc-di-ecdsa/)
- For other cryptosuites: Follow their respective specifications

::: note
The verification process varies by cryptosuite and includes considerations for proof options, canonicalization method, and signature verification algorithms. Implementers should refer to the specific cryptosuite specification.
:::

#### 5.3 Technical Requirements

Implementation of verification MUST:

1. Support multiple proofs (either as an array or as a single object)
2. Handle DID resolution errors gracefully
3. Report specific verification failures with clear error messages
4. Validate temporal claims (validFrom, validUntil) against current time
5. Cache DID resolution results appropriately for performance

The verification process must locate the specific inscription that contains the verification keys using the inscribed index in the verification method, while the identity of the issuer and subject are determined by the satoshi itself (without index).

### 6. Resource Identification and Referencing

BTCO-VM uses two different approaches for identifying resources, depending on the context:

1. **Identity References**:
   - The `issuer.id` always uses the non-indexed form (`did:btco:<sat-number>`) to identify the satoshi
   - This represents the persistent identity of the entity that issued the credential

2. **Resource References**:
   - For `credentialSubject.id`, the appropriate form depends on what's being described:
     - When describing a satoshi as a whole: use the non-indexed form (`did:btco:<sat-number>`)
     - When describing a specific inscription (like an image): use the indexed form (`did:btco:<sat-number>/<index>`)
     - When describing a collection: use the non-indexed form for the collection satoshi

3. **Verification References**:
   - The `verificationMethod` always uses the indexed form (`did:btco:<sat-number>/<index>#key-1`)
   - This precisely identifies which inscription contains the verification keys

This approach allows maximum flexibility and precision:

- When a credential describes a specific piece of content (like an artwork), the indexed form should be used since the content is tied to a specific inscription
- When a credential describes an identity or collection, the non-indexed form should be used since the identity persists across multiple inscriptions

::: example
A Verifiable Collectible credential about a specific artwork would use:
- `issuer.id`: `did:btco:123456` (the creator's identity)
- `credentialSubject.id`: `did:btco:789012/0` (the specific inscription containing the artwork)
- `verificationMethod`: `did:btco:123456/2#key-1` (the specific inscription containing the verification key)
:::

Implementations MUST validate these relationships and ensure claims are appropriate to the credential type.

::: note
Using the non-indexed form for identity references while using the indexed form for specific content and verification provides the best balance between stable identity and precise content addressing. This allows credentials about identities to remain valid even as resources are updated, while ensuring that references to specific content remain exact.
:::

### 7. Credential Types

#### 7.1 Resource Metadata Credential

Basic credential for describing properties of a specific inscription resource.

##### Required Properties

- `name`: Human-readable name or title of the resource
- `description`: Description of the resource
- `type`: MUST be "BTCOResource"
- Properties within `properties` object:
  - `contentType`: MIME type of the resource
  - `created`: ISO 8601 date when the resource was created

##### Optional Properties

- Additional properties within `properties` object:
  - `creator`: Name or identifier of the creator
  - `dimensions`: Size or dimensions if applicable
  - `license`: License information
  - `tags`: Array of categorization tags
  - `externalUrl`: URL to external information

##### Validation Rules

1. The `credentialSubject.id` MUST be a valid BTCO DID URL
2. If an indexed form is used, the inscription MUST exist
3. The `name` and `description` MUST NOT be empty
4. The `contentType` MUST be a valid MIME type
5. The `created` date MUST be a valid ISO 8601 date
6. The `created` date MUST NOT be in the future

##### Example

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "ResourceMetadataCredential"],
  "issuer": {
    "id": "did:btco:539864085599956"
  },
  "validFrom": "2024-03-21T12:00:00Z",
  "credentialSubject": {
    "id": "did:btco:1954913028215432/0",
    "type": "BTCOResource",
    "name": "Example Resource",
    "description": "An example resource with verified metadata",
    "properties": {
      "contentType": "image/png",
      "created": "2024-03-20T10:30:00Z",
      "creator": "Example Artist"
    }
  }
}
```

#### 7.2 Collection Credential

Credential for defining and authenticating a collection of resources.

##### Required Properties

- `name`: Name of the collection
- `description`: Description of the collection
- `type`: MUST be "BTCOCollection"
- `collectionType`: Type of collection (e.g., "curated", "heritage")
- `resources`: Array of BTCO DIDs referencing inscriptions in the collection

##### Optional Properties

- `curator`: Information about the curator
  - `name`: Name of the curator
  - `description`: Description of the curator
- `tags`: Array of categorization tags
- `criteria`: Description of collection criteria
- `created`: ISO 8601 date when the collection was created
- `updated`: ISO 8601 date when the collection was last updated

##### Validation Rules

1. The `credentialSubject.id` MUST be a valid BTCO DID
2. The `name` and `description` MUST NOT be empty
3. The `collectionType` MUST be one of the defined collection types
4. The `resources` array MUST NOT be empty
5. Each item in `resources` MUST be a valid BTCO DID URL
6. All resources referenced in the collection MUST exist
7. If `created` is present, it MUST be a valid ISO 8601 date
8. If `updated` is present, it MUST be a valid ISO 8601 date not earlier than `created`

##### Example

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "CollectionCredential"],
  "issuer": {
    "id": "did:btco:539864085599956"
  },
  "validFrom": "2024-03-21T12:00:00Z",
  "credentialSubject": {
    "id": "did:btco:539864085599956",
    "type": "BTCOCollection",
    "name": "Example Collection",
    "description": "A verified collection of resources",
    "collectionType": "curated",
    "resources": [
      "did:btco:1954913028215432/0",
      "did:btco:1923519999999991/2"
    ]
  }
}
```

#### 7.3 VerifiableCollectible Credential

A credential type for verifying authenticity and properties of individual collectible inscriptions.

##### Required Properties

- `title`: Title of the collectible
- `creator`: BTCO DID of the creator
- `type`: MUST be "Collectible"
- `creationDate`: ISO 8601 date of creation
- `properties`: Technical properties of the inscription
  - `medium`: Type of media
  - `format`: MIME type
  - `dimensions`: Size or dimensions if applicable

##### Optional Properties

- `rights`: Licensing and rights information
  - `license`: License identifier
  - `terms`: URL to full license terms
- `description`: Detailed description
- `attributes`: Additional metadata

##### Validation Rules

1. The `credentialSubject.id` MUST be a valid BTCO DID URL using the indexed form
2. The creator DID MUST be valid and resolvable
3. The issuer MUST be the creator or authorized by the creator
4. The creation date MUST NOT be in the future
5. The referenced inscription MUST exist and match the properties

##### Example

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "VerifiableCollectible"],
  "issuer": {
    "id": "did:btco:539864085599956"
  },
  "validFrom": "2024-03-21T12:00:00Z",
  "credentialSubject": {
    "id": "did:btco:1954913028215432/0",
    "type": "Collectible",
    "title": "Artifact Title",
    "creator": "did:btco:539864085599956",
    "creationDate": "2024-03-21",
    "properties": {
      "medium": "Digital",
      "format": "image/png",
      "dimensions": "3000x3000"
    },
    "rights": {
      "license": "CC BY-SA 4.0",
      "terms": "https://creativecommons.org/licenses/by-sa/4.0/"
    }
  }
}
```

#### 7.4 CuratedCollection Credential

A credential type for establishing curated collections of ordinal inscriptions.

##### Required Properties

- `name`: Collection name
- `description`: Collection description
- `type`: MUST be "CuratedCollection"
- `items`: Array of BTCO DIDs referencing inscriptions in the collection

##### Optional Properties

- `curatorDetails`: Information about the curator
  - `name`: Name of the curator
  - `statement`: Curatorial statement
- `tags`: Array of categorization tags
- `criteria`: Description of collection criteria

##### Validation Rules

1. All items in the collection MUST be valid BTCO DIDs
2. The issuer MUST control the DID at time of issuance
3. The collection MUST contain at least one item
4. The name and description MUST NOT be empty

##### Example

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "CuratedCollectionCredential"],
  "issuer": {
    "id": "did:btco:539864085599956"
  },
  "validFrom": "2024-03-21T12:00:00Z",
  "credentialSubject": {
    "id": "did:btco:539864085599956/0",
    "type": "CuratedCollection",
    "name": "Example Collection",
    "description": "A curated collection of digital artifacts",
    "items": [
      "did:btco:1954913028215432/0",
      "did:btco:1923519999999991/0"
    ],
    "curatorDetails": {
      "name": "Curator Name",
      "statement": "Curatorial statement"
    }
  }
}
```

### 8. Proof Requirements

All BTCO Verifiable Metadata MUST include at least one cryptographic proof. Proofs can be represented either as a single proof object or as an array of proof objects:

#### 8.1 Single Proof Example

```json
"proof": {
  "type": "DataIntegrityProof",
  "cryptosuite": "eddsa-jcs-2022",
  "created": "2024-03-21T12:00:00Z",
  "verificationMethod": "did:btco:539864085599956/0#key-1",
  "proofPurpose": "assertionMethod",
  "proofValue": "z..."
}
```

#### 8.2 Multiple Proofs Example

```json
"proofs": [
  {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-jcs-2022",
    "created": "2024-03-21T12:00:00Z",
    "verificationMethod": "did:btco:539864085599956/0#key-1",
    "proofPurpose": "assertionMethod",
    "proofValue": "z..."
  },
  {
    "type": "DataIntegrityProof",
    "cryptosuite": "ecdsa-jcs-2019",
    "created": "2024-03-21T12:01:00Z",
    "verificationMethod": "did:btco:539864085599956/0#key-2",
    "proofPurpose": "assertionMethod",
    "proofValue": "z..."
  }
]
```

Note that while the issuer.id and credentialSubject.id use the non-indexed form of the DID (`did:btco:<sat-number>`), the verificationMethod in the proof uses the indexed form (`did:btco:<sat-number>/<index>#key-1`) to precisely identify which inscription contains the verification keys.

#### 8.3 Proof Requirements

Each proof MUST include:

1. `type`: The type of proof, typically "DataIntegrityProof"
2. `cryptosuite`: Identifier for the specific cryptographic suite used
3. `created`: Timestamp indicating when the proof was created
4. `verificationMethod`: The specific verification method to use
5. `proofPurpose`: The purpose of the proof, typically "assertionMethod"
6. `proofValue`: The cryptographic proof value, formatted according to the cryptosuite

Implementations MUST:

1. Support verification of credentials with either a single proof object or an array of proof objects
2. Consider a credential valid only if all proofs successfully verify
3. Record which proofs were successfully verified when multiple proofs are present
4. Support the recommended `eddsa-jcs-2022` cryptosuite at minimum

Supported cryptosuites with varying levels of interoperability:

- **Recommended**:
  - `eddsa-jcs-2022` (Edwards-Curve Digital Signature Algorithm with JSON Canonicalization)

- **Also Supported**:
  - `ecdsa-jcs-2019` (Elliptic Curve Digital Signature Algorithm with JSON Canonicalization)
  - `ecdsa-rdfc-2019` (Elliptic Curve Digital Signature Algorithm with RDF Canonicalization)
  - `eddsa-rdfc-2022` (Edwards-Curve Digital Signature Algorithm with RDF Canonicalization)
  - `bbs-2023` (BBS+ Signatures with selective disclosure capabilities)

::: note
This list of supported cryptosuites is preliminary and will evolve as implementation experience grows. Implementers should prioritize support for the recommended cryptosuite (`eddsa-jcs-2022`) for maximum interoperability, while other cryptosuites may have varying levels of support across implementations.
:::

### 9. Verifiable Presentations

BTCO Verifiable Metadata can be combined and presented using W3C Verifiable Presentations.

#### 9.1 Presentation Format

A BTCO Verifiable Presentation follows this format:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiablePresentation", "BTCOPresentation"],
  "holder": {
    "id": "did:btco:<sat-number>"
  },
  "verifiableCredential": [
    {
      // First BTCO Verifiable Metadata credential
    },
    {
      // Second BTCO Verifiable Metadata credential
    }
  ],
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-jcs-2022", 
    "created": "2024-03-22T10:00:00Z",
    "verificationMethod": "did:btco:<sat-number>/<index>#key-1",
    "proofPurpose": "authentication",
    "proofValue": "z..."
  }
}
```

#### 9.2 Presentation Usage

BTCO Verifiable Presentations can be used in two ways:

1. **Inscribed Presentations**:
   - A Verifiable Presentation inscribed directly on Bitcoin
   - Accessible via a BTCO DID URL (e.g., `did:btco:1954913028215432/1`)
   - Creates a permanent record of the presentation

2. **Off-chain Presentations**:
   - Created and shared without being inscribed
   - Used for short-lived verification contexts
   - May contain time-bound proofs or domain-specific constraints

::: note
When organizing credentials, consider whether to use:
- A Verifiable Presentation (holder-centered, can include credentials from multiple issuers)
- A Collection Credential (issuer-centered, references multiple resources)

The choice depends on the use case and whether the focus is on holder presentation or issuer attestation.
:::

#### 9.3 Presentation Verification

Verification of a BTCO Verifiable Presentation requires:

1. Verifying each credential within the presentation independently
2. Verifying the presentation proof using the holder's verification method
3. Validating temporal constraints (validity period, timestamps)
4. Checking domain-specific constraints if present

### 10. Credential Issuance

The process of creating and issuing BTCO Verifiable Metadata credentials consists of several distinct steps:

#### 10.1 Issuance Process

1. **Key Generation**:
   - Generate a cryptographic key pair suitable for the chosen cryptosuite
   - EdDSA (Ed25519) keys are recommended for maximum interoperability
   - ECDSA (secp256k1) keys may be used for Bitcoin-native compatibility
   - Store private keys securely, never sharing or exposing them

2. **Credential Creation**:
   - Create a credential document following the structure for the specific credential type
   - Ensure all required fields are present and properly formatted
   - Add appropriate metadata about the subject based on credential type
   - Add a status property if revocation capability is desired

3. **Proof Generation**:
   - Create a cryptographic proof using the private key
   - Follow the cryptosuite's specific algorithms for canonicalization and signing
   - Include all required proof properties including created timestamp

4. **Inscription**:
   - Inscribe the complete credential (including proof) to Bitcoin
   - Use an appropriate inscription protocol compatible with BTCO DIDs
   - Record the inscription transaction ID and output index
   - Optionally verify the inscription was successful via a block explorer

#### 10.2 Key Management Considerations

Issuers MUST properly secure their private keys at all times:

1. Use hardware security modules (HSMs) or secure enclaves when possible
2. Never share private keys or include them in inscriptions
3. Implement appropriate organizational controls for key access
4. Consider key rotation strategies for long-term security

#### 10.3 Status Property Format

When creating a credential that supports revocation, include a status property with this format:

```json
"credentialStatus": {
  "type": "BTCOStatusList2023",
  "statusListCredential": "did:btco:<sat-number>/<index>",
  "statusListIndex": "<integer>",
  "statusPurpose": "revocation"
}
```

Where:
- `type`: Identifies the status mechanism as a BTCO Status List
- `statusListCredential`: References the DID URL of the status list credential
- `statusListIndex`: Specifies the bit position in the status list bitmap
- `statusPurpose`: Indicates this status property is for revocation

### 11. Resource Resolution

Verifiable Metadata can be resolved using BTCO DID Linked Resources resolution mechanisms:

1. **Direct Resolution**:
   - Use the `/meta` endpoint to retrieve metadata about a resource
   - Example: `did:btco:1954913028215432/0/meta`

2. **Collection Resolution**:
   - Resolve collection metadata to discover authenticated resources
   - Follow collection references to navigate related resources

3. **Presentation Resolution**:
   - Inscribed presentations can be resolved directly via their DID URL
   - Example: `did:btco:1954913028215432/1`

### 12. Status List Credential Format

BTCO Status List credentials provide a mechanism for issuers to revoke previously issued credentials.

#### 12.1 Status List Structure

A Status List credential follows this format:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "BTCOStatusList2023Credential"],
  "issuer": {
    "id": "did:btco:<sat-number>"
  },
  "validFrom": "<iso-8601-date>",
  "credentialSubject": {
    "id": "did:btco:<sat-number>/<index>",
    "type": "BTCOStatusList2023",
    "statusPurpose": "revocation",
    "encodedList": "<base64 encoded bitmap>"
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-jcs-2022",
    "created": "<iso-8601-date>",
    "verificationMethod": "<verification-method-id>",
    "proofPurpose": "assertionMethod",
    "proofValue": "<proof-value>"
  }
}
```

The `encodedList` property contains a base64-encoded bitmap where each bit represents the status of a credential. A value of `0` means the credential is still valid, while a value of `1` means the credential has been revoked.

#### 12.2 Status List Management

Issuers should follow these practices when managing status lists:

1. Create a new status list credential before issuing credentials that reference it
2. Maintain the status list by updating it when credentials need to be revoked
3. Sign updated status lists with the same key used to issue the original credentials
4. When updating a status list, inscribe the new version and reference it from now on
5. Previous versions of status lists should remain available for historical verification

#### 12.3 Status Checking

Verifiers should check status as follows:

1. Extract the `statusListCredential` and `statusListIndex` from the credential
2. Resolve the status list credential using the BTCO DID URL
3. Verify the status list credential's proof
4. Decode the `encodedList` bitmap
5. Check the bit at position `statusListIndex`
6. If the bit is `1`, the credential has been revoked and should be rejected

::: note
The revocation mechanism is an active area of research and development. The approach described here is preliminary and will evolve significantly as implementation experience grows and best practices emerge.
:::

### 13. Error Handling

Implementations MUST provide clear error messages for verification failures:

#### 13.1 Standard Error Codes

The following standard error codes SHOULD be used when reporting verification failures:

| Error Code | Description |
|------------|-------------|
| `MALFORMED_CREDENTIAL` | The credential document is not well-formed JSON or violates the schema |
| `MISSING_REQUIRED_FIELD` | A required field is missing from the credential |
| `INVALID_ISSUER` | The issuer DID cannot be resolved or is invalid |
| `INVALID_SUBJECT` | The subject DID cannot be resolved or is invalid |
| `EXPIRED_CREDENTIAL` | The credential has expired based on its validUntil property |
| `NOT_YET_VALID` | The credential is not yet valid based on its validFrom property |
| `PROOF_VERIFICATION_FAILED` | None of the proofs verify successfully |
| `CRYPTOSUITE_NOT_SUPPORTED` | The cryptosuite used in the proof is not supported |
| `REVOKED_CREDENTIAL` | The credential has been revoked according to its status |
| `STATUS_LIST_UNREACHABLE` | The status list credential could not be retrieved |
| `STATUS_CHECK_ERROR` | The status check failed for a different reason |
| `TYPE_VALIDATION_FAILED` | The credential fails type-specific validation rules |

#### 13.2 Error Response Format

When reporting errors, implementations SHOULD use this format:

```json
{
  "error": {
    "code": "<ERROR_CODE>",
    "message": "Human-readable description of the error",
    "details": {
      "property": "specific property where the error occurred",
      "context": "Additional information about the error"
    }
  }
}
```

#### 13.3 Error Handling Guidance

Implementers SHOULD:

1. Provide detailed error information without revealing sensitive data
2. Log verification failures for diagnostic purposes
3. Report multiple errors when possible rather than stopping at the first error
4. Handle errors gracefully without crashing or hanging
5. Implement appropriate fallback behavior when errors occur
6. Consider security implications when reporting error details

### 14. Test Vectors

For interoperability testing, the following test vectors are provided:

#### 14.1 Valid Credential Example

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "ResourceMetadataCredential"],
  "issuer": {
    "id": "did:btco:539864085599956"
  },
  "validFrom": "2024-03-21T12:00:00Z",
  "credentialSubject": {
    "id": "did:btco:1954913028215432/0",
    "type": "BTCOResource",
    "name": "Test Resource",
    "description": "A test resource for verification implementation",
    "properties": {
      "contentType": "image/png",
      "created": "2024-03-20T10:30:00Z",
      "creator": "Test Creator"
    }
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-jcs-2022",
    "created": "2024-03-21T12:00:00Z",
    "verificationMethod": "did:btco:539864085599956/0#key-1",
    "proofPurpose": "assertionMethod",
    "proofValue": "z5jxQLyq5DWRDCZKmNjjKLzZDwbPMVD8afRrYGECySMD9eZgAuKRrD2eiCQ87QEqPqk7f9JFDQptQSJbrXwwWobVB"
  }
}
```

#### 14.2 Invalid Credential Examples

The repository includes several invalid test vectors including:

1. Credential with invalid signature
2. Credential with expired validity period
3. Credential with revoked status
4. Credential with malformed fields
5. Credential with missing required properties

Implementers should verify their implementations correctly reject these invalid credentials.

A complete set of test vectors is available in the vectors.md file.

### 15. Implementation Considerations

1. **Privacy**:
   - Consider the immutable nature of blockchain credentials
   - Minimize inclusion of sensitive or personal data
   - Support selective disclosure where appropriate

2. **Security**:
   - Validate all cryptographic proofs
   - Ensure proper key management for issuers
   - Follow secure implementation practices

3. **Interoperability**:
   - Maintain compatibility with W3C standards
   - Support standard Verifiable Credential libraries
   - Enable cross-platform verification