# Vault Program

The Vault program is for creating and managing VRTs, and allowing users to deposit and withdraw their assets. Managing VRTs involves registering relationships with Vaults and NCNs, managing delegations with Operators, and setting fees.

## Vault

### Initialize Vault

You can create new Vault through the vault program:

```bash
jito-restaking-cli vault vault initialize <TOKEN_MINT> <DEPOSIT_FEE_BPS> <WITHDRAWAL_FEE_BPS> <REWARD_FEE_BPS> <DECIMALS>
```

Arguments

- TOKEN_MINT: The token which is allowed to be deposited into the vault
- DEPOSIT_FEE_BPS: The deposit fee in basis points
- WITHDRAWAL_FEE_BPS: The withdrawal fee in basis points
- REWARD_FEE_BPS: The reward fee in basis points
- DECIMALS: The decimals of the token

### Create Token Metadata

Creates token metadata for the VRT:

```bash
jito-restaking-cli vault vault create-token-metadata <VAULT> <NAME> <SYMBOL> <URI>
```

Arguments

- VAULT: The vault pubkey
- NAME: The name of the token
- SYMBOL: The symbol of the token
- URI: The URI for the token metadata

### Initialize Operator Delegation

Sets up the delegations for an operator:

```bash
jito-restaking-cli vault vault initialize-operator-delegation <VAULT> <OPERATOR>
```

Arguments:

- VAULT: Vault account pubkey
- OPERATOR: Operator account pubkey

### Cooldown Operator Delegation

Cooldown delegation for an operator:

```bash
jito-restaking-cli vault vault cooldown-operator-delegation <VAULT> <OPERATOR> <AMOUNT>
```

Arguments:

- VAULT: Vault account pubkey
- OPERATOR: Operator account pubkey
- AMOUNT: Amount to cooldown

