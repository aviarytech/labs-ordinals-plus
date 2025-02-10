## Test Vectors

### Valid DIDs
```
did:btco:0
did:btco:2099999997689999
did:btco:1066296127976657
```

### Invalid DIDs
```
did:btco:bwtowpglzpd              # Invalid: Uses name format (v0.1.0)
did:btco:53585.3880634312         # Invalid: Uses decimal format (v0.1.0)
did:btco:-1                       # Invalid: Negative number
did:btco:2099999997690000        # Invalid: Exceeds maximum satoshi number
did:btco:1.5                     # Invalid: Not an integer
did:btco:abc123                  # Invalid: Not a number
```

### Example DID Document
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