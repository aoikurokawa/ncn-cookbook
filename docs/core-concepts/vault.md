# Vault

## Overview

### The Vault Account:

- Serves as the repository for supported token and VRT (Vault Receipt Token).
- Tracks the state of tokens deposits, withdrawals, and delegate assets.
- Manages a set of administrative roles, responsible for different aspects of vault operations.

### Key functionalities include:

1. Token Management: Handles deposits, withdrawals, and minting/burning of VRT tokens with fee calculations and slippage protection.
2. Fee Management: Supports dynamic fee adjustments (deposit, withdrawal, reward) with built-in validation and limits.
3. Delegation Management: Tracks and manages the delegation of assets to operators, ensuring sufficient reserves for withdrawals.
4. State Tracking: Maintains a detailed record of vault activity, including cooldowns, ready-to-claim amounts, and delegation states.
5. Administrative Role Management: Assigns and verifies various admin roles (e.g., delegation admin, fee admin) for secure and efficient operations.


## Key Components

### 1. Vault Structure

#### General Information

| Field                             | Type            | Description                                                                            |
| --------------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| base                              | Pubkey          | The base account used as a PDA seed.                                                   |

#### Token Information and Accounting

| Field                             | Type            | Description                                                                            |
| --------------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| vrt_mint                          | Pubkey          | The pubkey of VRT's mint account.                                                      |
| supported_mint                    | Pubkey          | The pubkey of supported_mint's mint account.                                           |
| vrt_supply                        | u64             | The total number of VRT in circulation.                                                |
| tokens_deposited                  | u64             | The total number of tokens deposited.                                                  |
| deposit_capacity                  | u64             | The total number of tokens deposited.                                                  |
| delegation_state                  | DelegationState | Rolled-up stake state for all operators in the set.                                    |
| additional_asssets_need_unstaking | u64             | The amount of additional assets that need unstaking to fulfill VRT withdrawals.        |
| vrt_enqueued_for_cooldown_amount  | u64             | The amount of VRT tokens in VaultStakerWithdrawalTickets enqueued for cooldown.        |
| additional_asssets_need_unstaking | u64             | The amount of VRT tokens cooling down.                                                 |
| vrt_ready_to_claim_amount         | u64             | The amount of VRT tokens ready to claim.                                               |

#### Admins

| Field                             | Type            | Description                                                                            |
| --------------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| admin                             | Pubkey          | Vault admin.                                                                           |
| delegation_admin                  | Pubkey          | The delegation admin responsible for adding and removing delegations from operators.   |
| operator_admin                    | Pubkey          | The operator admin responsible for adding and removing operators.                      |
| ncn_admin                         | Pubkey          | The node consensus network admin responsible for adding and removing support for NCNs. |
| slasher_admin                     | Pubkey          | The admin responsible for adding and removing slashers.                                |
| capacity_admin                    | Pubkey          | The admin responsible for setting the capacity.                                        |
| fee_admin                         | Pubkey          | The admin responsible for setting the fees.                                            |
| delegate_asset_admin              | Pubkey          | The delegate_admin responsible for delegating assets.                                  |
| fee_wallet                        | Pubkey          | Fee wallet account.                                                                    |
| mint_burn_admin                   | Pubkey          | Optional mint signer.                                                                  |
| metadata_admin                    | Pubkey          | Authority to update the vault's metadata.                                              |


#### Indexing and Counters

| Field                             | Type            | Description                                                                            |
| --------------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| vault_index                       | u64             | The index of the vault in the vault list.                                              |
| ncn_count                         | u64             | Number of VaultNcnTicket accounts tracked by this vault.                               |
| operator_count                    | u64             | Number of VaultOperatorDelegation accounts tracked by this vault.                      |
| slasher_count                     | u64             | Number of VaultNcnSlasherTicket accounts tracked by this vault.                        |
| last_fee_change_slot              | u64             | The slot of the last fee change.                                                       |
| last_full_state_update_slot       | u64             | The slot of the last time the delegations were updated.                                |
| deposit_fee_bps                   | u16             | The deposit fee in basis points.                                                       |
| withdrawal_fee_bps                | u16             | The withdrawal fee in basis points.                                                    |
| next_withdrawal_fee_bps           | u16             | The next epoch's withdrawal fee in basis points.                                       |
| reward_fee_bps                    | u16             | Fee for each epoch.                                                                    |
| program_fee_bps                   | u16             | The program fee in basis points.                                                       |
| is_paused                         | bool            | Pause flag.                                                                            |


## References
- [Vault Accounts](https://docs.restaking.jito.network/vault/00_vault_accounts/)


## Accounts

Accounts within Solana are used to store state. They are an essential
building block for developing on Solana.

## Facts

::: tip Fact Sheet

- Accounts are used to store data
- Each account has a unique address
- Accounts have a max size of 10MB (10 Mega Bytes)
- PDA accounts have a max size of 10KB (10 Kilo Bytes)
- PDA accounts can be used to sign on behalf of a program
- Accounts size are fixed at creation time, but can be adjusted using [realloc](https://solanacookbook.com/references/programs.html#how-to-change-account-size)
- Account data storage is paid with rent
- Default account owner is the System Program
  :::

## Deep Dive

### Account Model

There are 3 kinds of accounts on Solana:

- Data accounts store data
- Program accounts store executable programs
- Native accounts that indicate native programs on Solana such as System, Stake, and Vote

Within data accounts, there are 2 types:

- System owned accounts
- PDA (Program Derived Address) accounts

Each account has an address (usually a public key) and an owner
(address of a program account). The full field list an account stores
is found below.

| Field      | Description                                    |
| ---------- | ---------------------------------------------- |
| lamports   | The number of lamports owned by this account   |
| owner      | The program owner of this account              |
| executable | Whether this account can process instructions  |
| data       | The raw data byte array stored by this account |
| rent_epoch | The next epoch that this account will owe rent |

There are a few important ownership rules:

- Only a data account's owner can modify its data and debit lamports
- Anyone is allowed to credit lamports to a data account
- The owner of an account may assign a new owner if the account's data is zeroed out

Program accounts do not store state.

For example, if you have a counter program that lets you increment a counter, you
must create two accounts, one account to store the program's code, and one to store
the counter.



To prevent an account from being deleted, you must pay rent.

### Rent

Storing data on accounts costs SOL to maintain, and it is funded by what is called
rent. If you maintain a minimum balance equivalent to 2 years of rent payments in an
account, your account will be exempt from paying rent. You can retrieve rent by closing
the account and sending the lamports back to your wallet.

Rent is paid during two different timings:

1. When referenced by a transaction
2. Once an epoch

A percentage of rent collected by accounts is destroyed, while the rest is distributed
to vote accounts at the end of every slot.

If the account does not have enough to pay rent, the account will be deallocated and the data
removed.

It is also important to note that new accounts must be rent exempt.

## Other Resources

- [Solana Account Model](https://solana.wiki/zh-cn/docs/account-model/#account-storage)
- [Official Documentation](https://docs.solana.com/developing/programming-model/accounts)
- [pencilflip account thread](https://twitter.com/pencilflip/status/1452402100470644739)

### Credit

This core concept is credited to Pencilflip. [Follow him on Twitter](https://twitter.com/intent/user?screen_name=pencilflip).