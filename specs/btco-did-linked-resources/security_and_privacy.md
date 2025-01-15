## Security and Privacy Considerations

This section outlines the basic security and privacy considerations for implementing DID linked resources using BTC Ordinal inscriptions.

## Security Considerations

### Data Integrity
- Resources MUST maintain their original content without modification
- Any altered resources MUST be treated as invalid

Additional security requirements will be formally specified in future versions of this specification.

## Privacy Considerations

### Data Minimization
- Resources SHOULD NOT contain personally identifiable information (PII)
- If PII is necessary, it SHOULD be stored off-chain with references
- Implement data retention policies for cached resources

### Transaction Privacy
- Avoid linking multiple resources to the same address unless necessary

Additional privacy requirements will be formally specified in future versions of this specification.
