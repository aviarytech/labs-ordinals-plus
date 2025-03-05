# BTCO-VM Test Vectors

This document contains test vectors for BTCO Verifiable Metadata implementations.

## Valid Credentials

### Valid Resource Metadata Credential

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

### Valid Collection Credential

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
    "name": "Test Collection",
    "description": "A test collection for verification implementation",
    "collectionType": "curated",
    "resources": [
      "did:btco:1954913028215432/0",
      "did:btco:1923519999999991/2"
    ]
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

### Valid Verifiable Collectible

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
    "title": "Test Collectible",
    "creator": "did:btco:539864085599956",
    "creationDate": "2024-03-20",
    "properties": {
      "medium": "Digital",
      "format": "image/png",
      "dimensions": "3000x3000"
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

### Valid Credential with Status Property

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
    "description": "A test resource with status property",
    "properties": {
      "contentType": "image/png",
      "created": "2024-03-20T10:30:00Z"
    }
  },
  "credentialStatus": {
    "type": "BTCOStatusList2023",
    "statusListCredential": "did:btco:987654321098765/0",
    "statusListIndex": "12",
    "statusPurpose": "revocation"
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

### Valid Status List Credential

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://ordinals.plus/v1"
  ],
  "type": ["VerifiableCredential", "BTCOStatusList2023Credential"],
  "issuer": {
    "id": "did:btco:539864085599956"
  },
  "validFrom": "2024-03-21T12:00:00Z",
  "credentialSubject": {
    "id": "did:btco:987654321098765/0",
    "type": "BTCOStatusList2023",
    "statusPurpose": "revocation",
    "encodedList": "H4sIAAAAAAAAA2NgwA8YgJiJAQmwMKAATqamJgYmZmbGBobGhkYAof0MvAQAAAA="
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

## Invalid Credentials

### Invalid Signature

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
    "description": "A test resource with invalid signature",
    "properties": {
      "contentType": "image/png",
      "created": "2024-03-20T10:30:00Z"
    }
  },
  "proof": {
    "type": "DataIntegrityProof",
    "cryptosuite": "eddsa-jcs-2022",
    "created": "2024-03-21T12:00:00Z",
    "verificationMethod": "did:btco:539864085599956/0#key-1",
    "proofPurpose": "assertionMethod",
    "proofValue": "z5jxQLyq5DWinvalidSignaturelArD2eiCQ87QEqPqk7f9JFDQptQSJbrXwwWobVB"
  }
}
```

### Expired Credential

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
  "validUntil": "2024-03-22T12:00:00Z",
  "credentialSubject": {
    "id": "did:btco:1954913028215432/0",
    "type": "BTCOResource",
    "name": "Test Resource",
    "description": "A test resource that has expired",
    "properties": {
      "contentType": "image/png",
      "created": "2024-03-20T10:30:00Z"
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

### Revoked Credential

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
    "description": "A test resource that has been revoked",
    "properties": {
      "contentType": "image/png",
      "created": "2024-03-20T10:30:00Z"
    }
  },
  "credentialStatus": {
    "type": "BTCOStatusList2023",
    "statusListCredential": "did:btco:987654321098765/0",
    "statusListIndex": "3",
    "statusPurpose": "revocation"
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

### Missing Required Fields

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
    "description": "A test resource missing required fields",
    "properties": {
      "created": "2024-03-20T10:30:00Z"
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

### Future Creation Date

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
    "description": "A test resource with future creation date",
    "properties": {
      "contentType": "image/png",
      "created": "2034-03-20T10:30:00Z"
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