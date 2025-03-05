#### Curated Collection Credential

A credential type for establishing curated collections of ordinal inscriptions.

##### Example

``` json
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

##### Required Properties

- `name`: Collection name
- `description`: Collection description
- `items`: Array of BTCO DIDs referencing inscriptions in the collection

##### Optional Properties

- `curatorDetails`: Information about the curator
  - `name`: Name of the curator
  - `statement`: Curatorial statement
- `tags`: Array of categorization tags
- `criteria`: Description of collection criteria

##### Verification Rules

1. All items in the collection must be valid BTCO DIDs
2. The issuer must control the DID at time of issuance
3. The collection must contain at least one item
4. The name and description must not be empty 