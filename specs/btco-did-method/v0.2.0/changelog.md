## Version Changelog

### v0.2.0 (Current)

#### Breaking Changes
1. **Identifier Format**: The method-specific identifier now only accepts ordinal numbers. Name-based identifiers (e.g., "bwtowpglzpd") and decimal formats (e.g., "53585.3880634312") are no longer supported. This change ensures consistent identifier resolution and improved interoperability.

2. **Migration**: DIDs created using name-based or decimal identifiers in v0.1.0 should be migrated to numerical ordinal format. The migration process involves:
   - Creating a new DID using the ordinal number format
   - Transferring control to the new DID
   - Deactivating the old DID

### v0.1.0
- Initial specification release
- Supported multiple identifier formats (ordinal numbers, names, and decimals)
- Basic DID operations and verification methods 