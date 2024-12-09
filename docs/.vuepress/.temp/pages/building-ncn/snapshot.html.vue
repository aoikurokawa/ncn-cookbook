<template><div><h1 id="snapshot" tabindex="-1"><a class="header-anchor" href="#snapshot"><span>Snapshot</span></a></h1>
<p>Determines the current status of all active NCNs and Vaults, and condenses the stake weight they each have for the current epoch in one account per operator.</p>
<h2 id="epoch-snapshot" tabindex="-1"><a class="header-anchor" href="#epoch-snapshot"><span>Epoch Snapshot</span></a></h2>
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
<h2 id="operator-snapshot" tabindex="-1"><a class="header-anchor" href="#operator-snapshot"><span>Operator Snapshot</span></a></h2>
<h3 id="operatorsnapshot" tabindex="-1"><a class="header-anchor" href="#operatorsnapshot"><span>OperatorSnapshot</span></a></h3>
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
<h3 id="vaultoperatorstakeweight" tabindex="-1"><a class="header-anchor" href="#vaultoperatorstakeweight"><span>VaultOperatorStakeWeight</span></a></h3>
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
</div></template>


