# Restaking Program

The Restaking program is primarily for initializing NCNs and Operators, managing NCN authorities, and registering relationships between NCNs, Operators, and Vaults. 

## Initialize NCN

You can initialize your NCN through the restaking program:

```bash
jito-restaking-cli restaking ncn initialize
```

There are several things one can do after registering an NCN:

- Add and remove support for operators participating in the NCN operator set.
- Add and remove support for vaults.
- Add and remove support for slashers
- Delegate funds sent to the NCN from rewards, airdrops, and other sources.

## Initialize Operator

Operators are entities responsible for running NCN software.
You can initialize Operator through the restaking program:

```bash
jito-restaking-cli restaking operator initialize
```

## Initialize NcnOperatorState

NCN can have multiple Operators, each NCN <> Operator state stored on `NcnOperatorState` account. Once created, the NCN and operator can both warm-up and cooldown the state to show support for each other.

```bash

```

## Initialize NCNVaultTicket

NCN can also have multiple Vaults, this ticket represents the relationship between an NCN and a Vault. It is created by the NCN to opt in to work with a Vault.

```bash

```

## Initialize OperatorVaultTicket

Operator can associate with multiple Vaults, this ticket represents the relationship between an Operator and a Vault.

```bash
jito-restaking-cli restaking operator initialize-operator-vault-ticket
```
