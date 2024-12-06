# NCN Design

It is one of typical NCN design (Onchain NCN Program), so every NCN does not have to follow this design.

## Onchain NCN Program

NCN consisits of several components:

### Pricing
Determines the relative weight of assets (supported_mints) deposited in all the Vaults associated with NCN.


### Snapshot
Determines the current status of all active NCNs and Vaults, and condenses the stake weight they each have for the current epoch in one account per operator.


### Core Logic
This is the essence of the NCN, where Node Operators post data on chain that proves they did their job, and the NCN can run actions based on those results.

### Reward payment
Based on the operators who successfully performed the last step, the NCN calculates payments for the Operators and their Vaults, and distributes payments pro-rata according to their stake weight.









## Node Operator Client

## Permissionless Cranker

