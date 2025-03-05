### Operations

#### Issuance

To issue a BTCO Verifiable Credential:

1. Create the credential JSON document following the schema
2. Sign using the issuer's BTCO DID verification method
3. Inscribe the signed credential
4. Reference the credential using the inscription's BTCO DID

#### Verification

To verify a BTCO-VM credential:

1. Resolve the credential's BTCO DID
2. Verify the DataIntegrityProof signature
3. Validate the issuer's BTCO DID control
4. Check credential status (if applicable)
5. Verify referenced inscriptions exist
6. Validate against credential type-specific rules

#### Revocation

Credentials can be revoked by:

1. Issuing a revocation credential
2. Including the revoked credential's ID
3. Signing with the original issuer's key
4. Inscribing the revocation

#### Status Checking

Status can be checked by:

1. Resolving the credential's DID
2. Checking for revocation credentials
3. Validating the revocation signature
4. Confirming revocation timestamp 