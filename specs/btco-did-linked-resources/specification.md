## Specification

This section defines the technical specifications for creating, managing and resolving [[ref: DID Linked Resources]] using [[ref: Inscriptions]]. Resources are identified by their [[ref: Resource Identifier]] which is a sat number using [[ref: Ordinal Theory]] combined with the index of the [[ref: Inscription]] on the sat. Every BTC [[ref: Inscription]] can be accessed as a [[ref: DID Linked Resource]]. This means the nearly 100 million inscriptions as of writing this document can already be accessed as [[ref: DID Linked Resources]].

### Resource Identification

A resource can be identified by the DID and the index of the inscription on the sat.

```
did:btco:1954913028215432/0
```

All resources have information associated with them which can be accessed as `application/json` by appending `/info` to the resource identifier.

```
did:btco:1954913028215432/0/info
```

Some resources might have metadata associated with them which can be accessed by appending `/meta` to the resource identifier. If the metadata is a valid [[ref: Verifiable Credential (VC)]] or [[ref: Verifiable Presentation (VP)]], it will be returned as `application/vc` or `application/vp` respectively. If verification fails, it will fallback to `application/json`.

```
did:btco:1923519999999999/0/meta
```

### Resource Collections

There are multiple ways to reference a collection of resources.

#### DID Collections

A [[ref: DID Collection]] links multiple resources to a specific satoshi through reinscriptions. The collection is identified by the DID, with individual resources referenced by their inscription index on that sat.

```
did:btco:539864085599956
```

Resources are referenced by the [[ref: Resource Identifier]] of the resource.

```
did:btco:539864085599956/4
```

#### Heritage Collection

A [[ref: Heritage Collection]] or "parent/child" relationship links child resources to parent resources by inclusion in the new resources inscription transaction. The collection identifier of this format is the DID of the parent resource combined with `/heritage`.

```
did:btco:1869283761600463/heritage
```

Child resources can be referenced by their index on the parent resource with the `/child` suffix.

```
did:btco:1869283761600463/child/0
```

A child resource can have multiple parent resources. To reference a specific parent, append `/parent` followed by the parent's index number to the child's DID. For example, `/parent/0` refers to the first parent resource.

```
did:btco:1929458825916894/parent/0
```

::: todo

TODO: do child inscriptions link to a resource identifier (e.g. `did:btco:1929458825916894/0/child/0`) or a collection identifier (e.g. `did:btco:1929458825916894/child/0`)?

:::

#### Controller Collection

A [[ref: Controller Collection]] links resources through the wallet address currently holding the resource. This collection is mutable, meaning that the resources can be added or removed from the collection by the controller.The collection identifier of this format is the DID of a resource combined with `/controller`.

```
did:btco:539864085599956/controller
```

::: warning Controller Collection Not Implementable with Recursive Endpoints

The controller collection is not yet implementable using recursive endpoints, which means resources cannot directly resolve these collections.

:::

#### Attested Collection

An [[ref: Attested Collection]] links resources through a [[ref: Verifiable Credential (VC)]] that includes a list of resources in a collection. This VC is written to the blockchain as metadata to a [[ref: DID Linked Resource]]. The collection identifier of this format is the DID of this resource combined with `/meta`.

```
did:btco:539864085599956/0/meta
```

The [[ref: Verifiable Credential (VC)]] MUST be a valid VC that can be verified by a third party.

##### Attested Collection Credential Schema

The Verifiable Credential for an attested collection MUST conform to the following schema:

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "ResourceCollectionCredential"],
  "issuer": {
    "id": "did:btco:539864085599956/0"
  },
  "validFrom": "2024-02-21T12:00:00Z",
  "credentialSubject": {
    "id": "did:btco:539864085599956/0",
    "type": "ResourceCollection",
    "name": "My Art Collection",
    "description": "A curated collection of digital art pieces",
    "resources": [
      "did:btco:1954913028215432/0",
      "did:btco:1923519999999999/0",
      "did:btco:1923519999999999/0",
      "did:btco:1923519999999999/0",
      "did:btco:1923519999999999/0"
    ]
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-jcs-2022",
    "created": "2024-02-21T12:00:00Z",
    "verificationMethod": "did:btco:539864085599956/0#key-1",
    "proofPurpose": "assertionMethod",
    "proofValue": "zQeVbY4oey5q2M3X..."
  }
}
```

The credential MUST include:
- Standard W3C Verifiable Credentials context
- Ordinals Plus collection context
- `ResourceCollectionCredential` type
- Issuer DID (the resource containing this VC)
- Valid from date
- Collection details in credentialSubject
- At least one resource in the resources array
- Valid proof section with signature

Optional fields include:
- Collection name and description

### Resource Metadata Schema

Resource metadata MUST follow this schema:

```json
{
  "id": "did:btco:123/0",
  "type": "ResourceMetadata",
  "created": "2024-02-21T12:00:00Z",
  "contentType": "application/json",
  "contentLength": 1234,
  "contentDigest": "sha256-abc123...",
  "controller": "did:btco:789",
  "version": "1.0",
  "previousVersion": "did:btco:123/1",
  "nextVersion": "did:btco:123/2",
  "tags": ["schema", "v1"],
  "attributes": {
    "schema": {
      "type": "CredentialSchema",
      "version": "1.0"
    }
  }
}
```

### Resource Resolution

Resources can be resolved using the recursive endpoints provided by the Ordinals protocol. These endpoints return JSON-formatted responses and can be used to resolve resources, their metadata, and their relationships.

#### Resource Content Resolution

To resolve resource content, using the sat number and index:

```
did:btco:1954913028215432/0
```

<tab-panels selected-index="0">
  <nav>
    <button type="button">Pseudocode</button>
    <button type="button">JavaScript</button>
  </nav>
  <section>

```text
FUNCTION resolveResourceRelative(resourceId):
  1. Parse DID and index from resourceId
  2. Validate DID format
  3. Get sat number from DID
  4. Query ordinal indexer for inscriptions on sat
  5. Return inscription at specified index
```

  </section>
  <section>

```javascript
[[insert: ./specs/btco-did-linked-resources/functions/resolveResourceRelative.js]]
```

  </section>
</tab-panels>

#### Resource Details Resolution

To resolve resource details, using either resource identifier format:

<tab-panels selected-index="0">
  <nav>
    <button type="button">Pseudocode</button>
    <button type="button">JavaScript</button>
  </nav>
  <section>

```text
FUNCTION resolveResourceDetails(resourceId):
  1. Parse resource identifier components
  2. Validate resource identifier format
  3. Query ordinal indexer for inscription details
  4. Return details if found, error if not
```

  </section>
  <section>

```javascript
[[insert: ./specs/btco-did-linked-resources/functions/resolveResourceDetails.js]]
```

  </section>
</tab-panels>

#### Metadata Resolution

To resolve resource metadata, using either resource identifier format:

<tab-panels selected-index="0">
  <nav>
    <button type="button">Pseudocode</button>
    <button type="button">JavaScript</button>
  </nav>
  <section>

```text
FUNCTION resolveResourceMetadata(resourceId):
  1. Parse resource identifier components
  2. Validate metadata request format
  3. Query ordinal indexer for metadata
  4. Decode and validate metadata format
  5. Return metadata if found, error if not
```

  </section>
  <section>

```javascript
[[insert: ./specs/btco-did-linked-resources/functions/resolveResourceMetadata.js]]
```

  </section>
</tab-panels>

#### Collection Resolution

Collections can be resolved in two ways:

1. **Parent/Child Collections**

<tab-panels selected-index="0">
  <nav>
    <button type="button">Pseudocode</button>
    <button type="button">JavaScript</button>
  </nav>
  <section>

```text
FUNCTION resolveChildCollection(collectionId):
  1. Parse collection identifier components
  2. Validate collection format
  3. Query ordinal indexer for child inscriptions
  4. Filter and sort child resources
  5. Return collection if found, error if not
```

  </section>
  <section>

```javascript
[[insert: ./specs/btco-did-linked-resources/functions/resolveHeritageCollection.js]]
```

  </section>
</tab-panels>

2. **Reinscription Collections**

<tab-panels selected-index="0">
  <nav>
    <button type="button">Pseudocode</button>
    <button type="button">JavaScript</button>
  </nav>
  <section>

```text
FUNCTION resolveReinscriptionCollection(collectionId):
  1. Parse collection identifier components
  2. Validate collection format
  3. Query ordinal indexer for sat inscriptions
  4. Sort inscriptions by timestamp
  5. Return collection if found, error if not
```

  </section>
  <section>

```javascript
[[insert: ./specs/btco-did-linked-resources/functions/resolveSatCollection.js]]
```

  </section>
</tab-panels>

### Resource Parameters

#### Inscription Parameters

When creating a resource through [[ref: Inscription]], the following parameters are derived from the inscription itself:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| resourceUri | String | The DID URL for the resource | `did:btco:1954913028215432/1` |
| resourceCollectionId | String | The DID that identifies the collection | `did:btco:1954913028215432` |
| resourceId | String | The [[ref: Resource Identifier]] that uniquely identifies the resource | `did:btco:1954913028215432/1` |
| resourceName | String | The inscription ID of the resource | `412c9fa7c3cfee496c3afd6c1b3aa89951eb0f24d42486141d255f8bb2d8a751i0` |
| mediaType | String | The media type of the resource | `text/plain;charset=utf-8`, `application/json`, `image/png` |
| created | String | The timestamp of the inscription, as XML date-time | `2024-03-14T12:00:00Z` |
| previousVersionId | String | For reinscriptions, the previous resource identifier (if any) | `did:btco:1954913028215432/0` |
| nextVersionId | String | For reinscriptions, the next resource identifier (if any) | `did:btco:1954913028215432/2` |
| alsoKnownAs | String[] | Alternative URIs | `did:btco:1954913028215432/0/child/0` |

#### Resource Parameters

When resolving a resource, implementations MUST return the following parameters:

| Parameter | Description | Example |
|-----------|-------------|---------|
| resourceType | The content type of the resource | `text/plain;charset=utf-8`, `application/json`, `image/png` |

Example response:

    {
      "resourceUri": "did:btco:1954913028215432/0",
      "resourceCollectionId": "did:btco:1954913028215432",
      "resourceId": "did:btco:1954913028215432/0",
      "resourceName": "412c9fa7c3cfee496c3afd6c1b3aa89951eb0f24d42486141d255f8bb2d8a751i0",
      "mediaType": "image/png",
      "created": "2024-03-14T12:00:00Z",
      "resourceType": "image/png",
      "alsoKnownAs": ["did:btco:1954913028215432/0/child/0", "did:btco:1954913028215432/0/controller/0"],
      "previousVersionId": "did:btco:1954913028215432/0",
      "nextVersionId": "did:btco:1954913028215432/0"
    }

### Content Types and Resolution

Resource content types are determined by the content type of the inscription. As of the drafting of this document, the following content types are the most common:

| Content Type | Count |
|--------------|-------|
| text/plain;charset=utf-8 | 43,899,040 |
| text/plain | 27,974,656 |
| image/png | 1,471,939 |
| text/html;charset=utf-8 | 1,045,547 |
| application/json | 723,811 |
| model/gltf-binary | 665,722 |
| image/webp | 482,627 |
| image/svg+xml | 304,825 |
| image/jpeg | 248,928 |
| text/html | 221,676 |

When resolving a resource, implementations MUST:

1. Return the content with the exact content-type specified in the inscription
2. Not attempt to transform or negotiate the content type
3. Include appropriate content-type headers in HTTP responses

For `/meta`, `/info` and collection endpoints that return structured data about resources (rather than the resource content itself), implementations MUST return `application/json` with standard JSON responses.

#### Pagination

Collection endpoints may return paginated results. The specific pagination implementation details will be defined in a future version of this specification.

### Collection Pagination

Collection endpoints MUST support pagination using:

```json
{
  "resources": [
    "did:btco:123/0",
    "did:btco:456/1"
  ],
  "pagination": {
    "next": "did:btco:789/0",
    "prev": "did:btco:111/0",
    "limit": 10,
    "total": 45
  }
}
```

Query parameters:
- `limit`: Maximum resources per page (default 10, max 100)
- `cursor`: Opaque cursor for pagination
- `order`: Sort order ("asc" or "desc", default "desc")

### Canonicalization

When cryptographic proofs or comparisons are required, implementations MUST use JSON Canonicalization Scheme (JCS) as defined in RFC 8785 for consistent serialization of JSON data structures.

### Security Considerations

Implementations MUST:

- Use HTTPS for all resource endpoint communications
- Validate resource integrity using cryptographic proofs when available  
- Verify the relationship between DIDs and their linked resources
- Implement rate limiting and other API security best practices

### Privacy Considerations

Implementations SHOULD:

- Minimize collection and storage of personally identifiable information
- Support encryption of sensitive resource data
- Consider privacy implications of resources and their metadata

### Error Handling

Resolution errors MUST return a JSON response with:

```json
{
  "error": "<ErrorCode>",
  "message": "Human readable message",
  "details": {
    // Additional context
  }
}
```

Standard error codes:
- `ResourceNotFound`: Resource does not exist
- `InvalidIdentifier`: Malformed resource identifier  
- `ContentTypeUnsupported`: Unsupported content type
- `MetadataInvalid`: Invalid or malformed metadata
- `CollectionEmpty`: Collection contains no resources
- `ResolutionTimeout`: Resolution exceeded time limit

### Caching Guidelines

Implementations SHOULD:

- Cache resource content with appropriate cache headers
- Use ETags for cache validation
- Include Last-Modified timestamps
- Implement cache invalidation on updates
- Support conditional requests (If-None-Match, If-Modified-Since)

Example cache headers:
```http
Cache-Control: public, max-age=3600
ETag: "abc123"
Last-Modified: Wed, 21 Feb 2024 12:00:00 GMT
```

Cache invalidation events:
- New inscription on resource satoshi
- Block reorganization affecting inscriptions
- Controller change (UTXO spent)
