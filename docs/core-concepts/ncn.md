# NCN

## Overview

Key functionalities include:

1. Authority Management: Designate and validate admins for various NCN operations.
2. Operator and Vault Tracking


## Key Components

1. NCN Structure

The NCN account structure is designed to handle various administrative and operational roles within the network:

| Field               | Type   | Description                                          |
| ------------------- | ------ | ---------------------------------------------------- |
| base                | Pubkey | The base account used as a PDA seed.                 |
| admin               | Pubkey | Overall administrator of the NCN.                    |
| operator_admin      | Pubkey | Admin responsible for managing operators.            |
| vault_admin         | Pubkey | Admin responsible for managing vaults.               |
| slasher_admin       | Pubkey | Admin responsible for managing slashers.             |
| delegate_admin      | Pubkey | Admin for delegating assets of NCN account.          |
| metadata_admin      | Pubkey | Admin responsible for NCN metadata updates.          |
| weight_table_admin  | Pubkey | Admin for managing asset weight tables.              |
| ncn_program_admin   | Pubkey | Admin for on-chain programs associated with the NCN. |
| index               | u64    | Index of the NCN account.                            |
| operator_count      | u64    | Number of operators registered with the NCN.         |
| vault_count         | u64    | Number of vaults registered with the NCN.            |
| slasher_count       | u64    | Number of slashers registered with the NCN.          |