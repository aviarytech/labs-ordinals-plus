## Specification

This section defines the technical specifications for creating, managing and resolving [[ref: DID Linked Resource]]s using BTC Ordinal inscriptions. Resources are identified by their [[ref: Resource Identifier]] and can be linked directly to a sat number using Ordinal Theory and thus a DID. Every ordinal inscription can be accessed as a DID linked resource. This means the nearly 100 million inscriptions as of writing this document can already be accessed as DID linked resources.

### Resource Identification

A resource can be identified by the DID and the index of the inscription on the sat.

```
did:btco:1954913028215432/0
```

All resources have information associated with them which can be accessed as a DID linked resource by appending `/inscription` to the resource identifier.

```
did:btco:1954913028215432/0/inscription
```

Some resources might have metadata associated with them which can be accessed as a DID linked resource by appending `/metadata` to the resource identifier.

```
did:btco:1923519999999999/0/metadata
```

### Resource Collections

There are currently three known collection types a resource can be referenced by:

#### Heritage Collection

The first is a [[ref: Heritage Collection]] or "parent/child" relationship where a child resource is linked to a parent resource. The collection identifier of this format is the DID of the parent resource combined with `/heritage`.

```
did:btco:1869283761600463/heritage
```

Child resources can be referenced by their index on the parent resource with the `/child` suffix.

```
did:btco:1869283761600463/child/0
```

Parent resources can be referenced by their index on the child resource with the `/parent` suffix

```
did:btco:1929458825916894/parent/0
```

#### Sat Collection

The second is a [[ref: Sat Collection]] where resources are linked to a specific satoshi. Resources are written to the sat and can be referenced by the sat number effectively "overwriting" the previous version. The collection identifier of this format is the DID of a resource combined with `/sat`.

```
did:btco:539864085599956/sat
```

Reinscription resources are referenced by the relative format resource identifier.

```
did:btco:539864085599956/4
```

#### Controller Collection

The third is a [[ref: Controller Collection]] where resources are linked through the wallet address currently holding the resource. The collection identifier of this format is the DID of a resource combined with `/controller`.

```
did:btco:539864085599956/controller
```

::: warning Controller Collection Not Implementable with Recursive Endpoints

The controller collection is not yet implementable using recursive endpoints, which means resources cannot directly resolve these collections.

:::

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

#### Pagination

Collection endpoints may return paginated results. The specific pagination implementation details will be defined in a future version of this specification.
