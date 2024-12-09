<template><div><h1 id="pricing" tabindex="-1"><a class="header-anchor" href="#pricing"><span>Pricing</span></a></h1>
<h2 id="tracked-mints" tabindex="-1"><a class="header-anchor" href="#tracked-mints"><span>Tracked Mints</span></a></h2>
<p>Register all vault's <a href="https://github.com/jito-foundation/restaking/blob/406903e569da657035a2ca71ad16f8a930db6940/vault_core/src/vault.rs#L45" target="_blank" rel="noopener noreferrer">support token</a> mint account that is associated with NCN.
Permissionless Cranker can <a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_tracked_mints.rs" target="_blank" rel="noopener noreferrer">initialize</a> and <a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/register_mint.rs" target="_blank" rel="noopener noreferrer">register</a> through Jito Tip Router Program.</p>
<h3 id="trackedmints" tabindex="-1"><a class="header-anchor" href="#trackedmints"><span>TrackedMints</span></a></h3>
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
<h3 id="mintentry" tabindex="-1"><a class="header-anchor" href="#mintentry"><span>MintEntry</span></a></h3>
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
<h2 id="weight-table" tabindex="-1"><a class="header-anchor" href="#weight-table"><span>Weight Table</span></a></h2>
<p>Determines the relative weight of assets (supported_mints) deposited in all the Vaults associated with NCN.
Permissionless Cranker can initialize <code v-pre>WeightTable</code> each epoch through <a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_weight_table.rs" target="_blank" rel="noopener noreferrer"><code v-pre>initialize_weight_table</code></a> instruction on Jito Tip Router Program and NCN admin update it.</p>
<h3 id="weighttable" tabindex="-1"><a class="header-anchor" href="#weighttable"><span>WeightTable</span></a></h3>
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
<h3 id="weightentry" tabindex="-1"><a class="header-anchor" href="#weightentry"><span>WeightEntry</span></a></h3>
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
</div></template>


