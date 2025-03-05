#### Verifiable Collectible Credential

A credential type for verifying authenticity and properties of individual inscriptions.

##### Example

``` json
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

##### Required Properties

- `title`: Title of the collectible
- `creator`: BTCO DID of the creator
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

##### Verification Rules

1. The creator DID must be valid and resolvable
2. The issuer must be the creator or authorized by the creator
3. The creation date must not be in the future
4. The referenced inscription must exist and match the properties 