# Rust Client

## Jito Restaking Client

Through `jito-restaking-client`, you can handle the operation of NCN and Operator such as registering, making relationship with Vault.

**Example**:

Initializing NCN:

@[code{29-52}](../../code/restaking/src/main.rs)

Initializing Operator:

@[code{54-78}](../../code/restaking/src/main.rs)

## Jito Vault Client

Through `jito-vault-client`, you can handle the operation of Vault such as minting VRT, withdrawing.

**Example**:

Initializing Vault:

@[code{29-67}](../../code/vault/src/main.rs)

Create Token Metadata:

@[code{69-100}](../../code/vault/src/main.rs)
