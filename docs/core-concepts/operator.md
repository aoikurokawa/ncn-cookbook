# Operator

## Overview

### The Operator Account:

- Stores global metadata for a specific operator.
- Tracks the relationship between the operator and other NCN components (e.g. Vaults, NCNs).
- Manages administrative roles, including adding/removing support for NCNs and Vaults.

### Key functionalities include:

1. Admin Role Management: Allows for delegating responsibilities to specialized admin roles.
2. Operator Fee Management: Tracks fees charged by operators.
3. NCN and Vault Indexing: Maintains counts of linked NCNs and Vaults for efficient indexing.

## Key Components

1. Operator Structure

| Field               | Type   | Description                                           |
| ------------------- | ------ | ----------------------------------------------------- |
| base                | Pubkey | The base account used as a PDA seed.                  |
| admin               | Pubkey | Overall administrator of the operator.                |
| ncn_admin           | Pubkey | Admin responsible for managing NCNs.                  |
| vault_admin         | Pubkey | Admin responsible for managing Vaults.                |
| delegate_admin      | Pubkey | Admin for delegating asssets from the operator.       |
| metadata_admin      | Pubkey | Admin authorized to update operator metadata.         |
| voter               | Pubkey | Pubkey used to sign transactions for NCN interaction. |
| index               | u64    | Index of the operator account.                        |
| ncn_count           | u64    | Number of NCNs associated with the operator.          |
| vault_count         | u64    | Number of Vaults associated with the operator.        |
| operator_fee_bps    | u64    | Operator fee in basis points.                         |
