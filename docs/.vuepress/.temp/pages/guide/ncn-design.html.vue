<template><div><h1 id="ncn-design" tabindex="-1"><a class="header-anchor" href="#ncn-design"><span>NCN Design</span></a></h1>
<p>It is one of typical NCN design (Onchain NCN Program), so every NCN does not have to follow this design.</p>
<h2 id="onchain-ncn-program" tabindex="-1"><a class="header-anchor" href="#onchain-ncn-program"><span>Onchain NCN Program</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>NCN consisits of several components:</p>
<ul>
<li>Pricing</li>
<li>Snapshot</li>
<li>Core Logic</li>
<li>Reward Payment</li>
</ul>
</div>
<h3 id="pricing" tabindex="-1"><a class="header-anchor" href="#pricing"><span>Pricing</span></a></h3>
<h4 id="tracked-mints" tabindex="-1"><a class="header-anchor" href="#tracked-mints"><span>Tracked Mints</span></a></h4>
<p>Register all vault's <a href="https://github.com/jito-foundation/restaking/blob/406903e569da657035a2ca71ad16f8a930db6940/vault_core/src/vault.rs#L45" target="_blank" rel="noopener noreferrer">support token</a> mint account that is associated with NCN.
Permissionless Cranker can <a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_tracked_mints.rs" target="_blank" rel="noopener noreferrer">initialize</a> and <a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/register_mint.rs" target="_blank" rel="noopener noreferrer">register</a> through Jito Tip Router Program.</p>
<h5 id="trackedmints" tabindex="-1"><a class="header-anchor" href="#trackedmints"><span>TrackedMints</span></a></h5>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>ncn</td>
<td>Pubkey</td>
<td>NCN account pubkey.</td>
</tr>
<tr>
<td>st_mint_list</td>
<td>[MintEntry; 16]</td>
<td>The list of support token mint account pubkey.</td>
</tr>
</tbody>
</table>
<h5 id="mintentry" tabindex="-1"><a class="header-anchor" href="#mintentry"><span>MintEntry</span></a></h5>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>st_mint</td>
<td>Pubkey</td>
<td>The mint account of support token.</td>
</tr>
<tr>
<td>vault_index</td>
<td>u64</td>
<td>The index of vault.</td>
</tr>
</tbody>
</table>
<h4 id="weight-table" tabindex="-1"><a class="header-anchor" href="#weight-table"><span>Weight Table</span></a></h4>
<p>Determines the relative weight of assets (supported_mints) deposited in all the Vaults associated with NCN.
Permissionless Cranker can initialize <code v-pre>WeightTable</code> each epoch through <a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_weight_table.rs" target="_blank" rel="noopener noreferrer"><code v-pre>initialize_weight_table</code></a> instruction on Jito Tip Router Program and NCN admin update it.</p>
<h5 id="weighttable" tabindex="-1"><a class="header-anchor" href="#weighttable"><span>WeightTable</span></a></h5>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>ncn</td>
<td>Pubkey</td>
<td>NCN account pubkey.</td>
</tr>
<tr>
<td>ncn_epoch</td>
<td>u64</td>
<td>The NCN epoch for which the weight table is valid.</td>
</tr>
<tr>
<td>slot_created</td>
<td>u64</td>
<td>Slot weight table was created.</td>
</tr>
<tr>
<td>table</td>
<td>[WeightEntry; 32]</td>
<td>The weight table.</td>
</tr>
</tbody>
</table>
<h5 id="weightentry" tabindex="-1"><a class="header-anchor" href="#weightentry"><span>WeightEntry</span></a></h5>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>mint</td>
<td>Pubkey</td>
<td>The supported mint account pubkey in the vault.</td>
</tr>
<tr>
<td>weight</td>
<td>u128</td>
<td>Usually price of the asset.</td>
</tr>
<tr>
<td>slot_set</td>
<td>u64</td>
<td>The slot that weight entry is set.</td>
</tr>
<tr>
<td>slot_updated</td>
<td>u64</td>
<td>The slot that weight entry is updated.</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Weight is flexible, if NCNs want to give one asset more &quot;weight&quot; over others, they can increase its value relative to the others.</p>
</div>
<h3 id="snapshot" tabindex="-1"><a class="header-anchor" href="#snapshot"><span>Snapshot</span></a></h3>
<p>Determines the current status of all active NCNs and Vaults, and condenses the stake weight they each have for the current epoch in one account per operator.</p>
<h4 id="epoch-snapshot" tabindex="-1"><a class="header-anchor" href="#epoch-snapshot"><span>Epoch Snapshot</span></a></h4>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>ncn</td>
<td>Pubkey</td>
<td>NCN account pubkey.</td>
</tr>
<tr>
<td>ncn_epoch</td>
<td>u64</td>
<td>The NCN epoch for which the Epoch snapshot is valid.</td>
</tr>
<tr>
<td>slot_created</td>
<td>u64</td>
<td>The slot that epoch snapshot is created.</td>
</tr>
<tr>
<td>slot_finalized</td>
<td>u64</td>
<td>The slot that epoch snapshot is finalized.</td>
</tr>
<tr>
<td>ncn_fees</td>
<td>u64</td>
<td>The fees of NCN.</td>
</tr>
<tr>
<td>operator_count</td>
<td>u64</td>
<td>The count of operator in this epoch.</td>
</tr>
<tr>
<td>vault_count</td>
<td>u64</td>
<td>The count of vault in this epoch.</td>
</tr>
<tr>
<td>operators_registered</td>
<td>u64</td>
<td>The count of operator that registered in this epoch.</td>
</tr>
<tr>
<td>valid_operator_vault_delegation</td>
<td>u64</td>
<td>The count of operator delegation is registered.</td>
</tr>
<tr>
<td>stake_weight</td>
<td>u128</td>
<td>Counted as each delegate gets added.</td>
</tr>
</tbody>
</table>
<h4 id="operator-snapshot" tabindex="-1"><a class="header-anchor" href="#operator-snapshot"><span>Operator Snapshot</span></a></h4>
<h5 id="operatorsnapshot" tabindex="-1"><a class="header-anchor" href="#operatorsnapshot"><span>OperatorSnapshot</span></a></h5>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>operator</td>
<td>Pubkey</td>
<td>NCN account pubkey.</td>
</tr>
<tr>
<td>ncn</td>
<td>Pubkey</td>
<td>The NCN epoch for which the Epoch snapshot is valid.</td>
</tr>
<tr>
<td>ncn_epoch</td>
<td>u64</td>
<td>The NCN epoch for which the Epoch snapshot is valid.</td>
</tr>
<tr>
<td>slot_created</td>
<td>u64</td>
<td>The slot that epoch snapshot is created.</td>
</tr>
<tr>
<td>slot_finalized</td>
<td>u64</td>
<td>The slot that epoch snapshot is finalized.</td>
</tr>
<tr>
<td>is_active</td>
<td>bool</td>
<td>The fees of NCN.</td>
</tr>
<tr>
<td>ncn_operator_index</td>
<td>u64</td>
<td>The count of operator in this epoch.</td>
</tr>
<tr>
<td>operator_index</td>
<td>u16</td>
<td>The count of vault in this epoch.</td>
</tr>
<tr>
<td>operator_fee_bps</td>
<td>u64</td>
<td>The count of operator that registered in this epoch.</td>
</tr>
<tr>
<td>vault_operator_delegation_count</td>
<td>u64</td>
<td>The count of operator delegation.</td>
</tr>
<tr>
<td>vault_operator_delegations_registered</td>
<td>u64</td>
<td>The count of operator delegation is registered.</td>
</tr>
<tr>
<td>valid_operator_vault_delegations</td>
<td>u64</td>
<td>Valid operator delegation.</td>
</tr>
<tr>
<td>stake_weight</td>
<td>u128</td>
<td>The stake weight of the operator.</td>
</tr>
<tr>
<td>vault_operator_stake_weight</td>
<td>[VaultOperatorStakeWeight; 32]</td>
<td>The vault &lt;&gt; operator stake weight.</td>
</tr>
</tbody>
</table>
<h5 id="vaultoperatorstakeweight" tabindex="-1"><a class="header-anchor" href="#vaultoperatorstakeweight"><span>VaultOperatorStakeWeight</span></a></h5>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>vault</td>
<td>Pubkey</td>
<td>Vault account pubkey.</td>
</tr>
<tr>
<td>stake_weight</td>
<td>u128</td>
<td>The stake weight of this operator associated with vault.</td>
</tr>
<tr>
<td>vault_index</td>
<td>u64</td>
<td>The index of vault.</td>
</tr>
</tbody>
</table>
<h3 id="core-logic" tabindex="-1"><a class="header-anchor" href="#core-logic"><span>Core Logic</span></a></h3>
<p>This is the essence of the NCN, where Node Operators post data on chain that proves they did their job, and the NCN can run actions based on those results.</p>
<h4 id="keeper" tabindex="-1"><a class="header-anchor" href="#keeper"><span>Keeper</span></a></h4>
<p>Keeper can publish some data into on-chain with consensus.</p>
<h3 id="rewards-payment" tabindex="-1"><a class="header-anchor" href="#rewards-payment"><span>Rewards Payment</span></a></h3>
<p>Based on the operators who successfully performed the last step, the NCN calculates payments for the Operators and their Vaults, and distributes payments pro-rata according to their stake weight.</p>
<p>In progress</p>
<h2 id="node-operator-client" tabindex="-1"><a class="header-anchor" href="#node-operator-client"><span>Node Operator Client</span></a></h2>
<p>This is the core off-chain logic of the NCN. It will run some arbitrary computation, and post some data on chain to a custom instruction, signing the transaction with the operator keypair.</p>
<p>Sample Node Operator Client:</p>
<ul>
<li><a href="https://github.com/jito-foundation/jito-solana/blob/837300fa58cb450e041443bafc6e21a7ee8f15b7/tip-distributor/src/bin/merkle-root-uploader.rs" target="_blank" rel="noopener noreferrer">solana-merkle-root-uploader</a></li>
<li><a href="https://github.com/jito-foundation/stakenet/blob/master/keepers/stakenet-keeper/src/main.rs" target="_blank" rel="noopener noreferrer">stakenet-keeper</a></li>
</ul>
<h2 id="permissionless-cranker" tabindex="-1"><a class="header-anchor" href="#permissionless-cranker"><span>Permissionless Cranker</span></a></h2>
<p>For all of the permissionless operations that need to occur on a regular cycle, we need a client that is continually executing instructions.</p>
</div></template>


