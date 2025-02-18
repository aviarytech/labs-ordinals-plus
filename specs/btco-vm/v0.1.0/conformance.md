# Conformance

A conformant implementation MUST:

1. Follow the W3C Verifiable Credentials Data Model 2.0
2. Support the required cryptographic suites
3. Implement proper DID resolution
4. Validate credentials according to type-specific rules
5. Handle revocation appropriately
6. Process inscription metadata correctly
7. Verify all cryptographic proofs
8. Check issuer control of DIDs
9. Support selective disclosure when possible
10. Implement proper error handling

## Test Suite

Implementations SHOULD provide test vectors for:

1. Credential issuance
2. Signature verification
3. Revocation handling
4. DID resolution
5. Type-specific validation

## References

1. W3C Verifiable Credentials Data Model 2.0
2. BTCO DID Method Specification
3. BTCO DID Linked Resources
4. Bitcoin Ordinals Protocol 