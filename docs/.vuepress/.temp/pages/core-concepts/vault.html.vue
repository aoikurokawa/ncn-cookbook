<template><div><h1 id="vault" tabindex="-1"><a class="header-anchor" href="#vault"><span>Vault</span></a></h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<h3 id="the-vault-account" tabindex="-1"><a class="header-anchor" href="#the-vault-account"><span>The Vault Account:</span></a></h3>
<ul>
<li>Serves as the repository for supported token and VRT (Vault Receipt Token).</li>
<li>Tracks the state of tokens deposits, withdrawals, and delegate assets.</li>
<li>Manages a set of administrative roles, responsible for different aspects of vault operations.</li>
</ul>
<h3 id="key-functionalities-include" tabindex="-1"><a class="header-anchor" href="#key-functionalities-include"><span>Key functionalities include:</span></a></h3>
<ul>
<li>Token Management: Handles deposits, withdrawals, and minting/burning of VRT tokens with fee calculations and slippage protection.</li>
<li>Fee Management: Supports dynamic fee adjustments (deposit, withdrawal, reward) with built-in validation and limits.</li>
<li>Delegation Management: Tracks and manages the delegation of assets to operators, ensuring sufficient reserves for withdrawals.</li>
<li>State Tracking: Maintains a detailed record of vault activity, including cooldowns, ready-to-claim amounts, and delegation states.</li>
<li>Administrative Role Management: Assigns and verifies various admin roles (e.g., delegation admin, fee admin) for secure and efficient operations.</li>
</ul>
<h2 id="key-components" tabindex="-1"><a class="header-anchor" href="#key-components"><span>Key Components</span></a></h2>
<h3 id="_1-vault-structure" tabindex="-1"><a class="header-anchor" href="#_1-vault-structure"><span>1. Vault Structure</span></a></h3>
<h4 id="general-information" tabindex="-1"><a class="header-anchor" href="#general-information"><span>General Information</span></a></h4>
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
<td>base</td>
<td>Pubkey</td>
<td>The base account used as a PDA seed.</td>
</tr>
</tbody>
</table>
<h4 id="token-information-and-accounting" tabindex="-1"><a class="header-anchor" href="#token-information-and-accounting"><span>Token Information and Accounting</span></a></h4>
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
<td>vrt_mint</td>
<td>Pubkey</td>
<td>The pubkey of VRT's mint account.</td>
</tr>
<tr>
<td>supported_mint</td>
<td>Pubkey</td>
<td>The pubkey of supported_mint's mint account.</td>
</tr>
<tr>
<td>vrt_supply</td>
<td>u64</td>
<td>The total number of VRT in circulation.</td>
</tr>
<tr>
<td>tokens_deposited</td>
<td>u64</td>
<td>The total number of tokens deposited.</td>
</tr>
<tr>
<td>deposit_capacity</td>
<td>u64</td>
<td>The total number of tokens deposited.</td>
</tr>
<tr>
<td>delegation_state</td>
<td>DelegationState</td>
<td>Rolled-up stake state for all operators in the set.</td>
</tr>
<tr>
<td>additional_asssets_need_unstaking</td>
<td>u64</td>
<td>The amount of additional assets that need unstaking to fulfill VRT withdrawals.</td>
</tr>
<tr>
<td>vrt_enqueued_for_cooldown_amount</td>
<td>u64</td>
<td>The amount of VRT tokens in VaultStakerWithdrawalTickets enqueued for cooldown.</td>
</tr>
<tr>
<td>additional_asssets_need_unstaking</td>
<td>u64</td>
<td>The amount of VRT tokens cooling down.</td>
</tr>
<tr>
<td>vrt_ready_to_claim_amount</td>
<td>u64</td>
<td>The amount of VRT tokens ready to claim.</td>
</tr>
</tbody>
</table>
<h4 id="admins" tabindex="-1"><a class="header-anchor" href="#admins"><span>Admins</span></a></h4>
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
<td>admin</td>
<td>Pubkey</td>
<td>Vault admin.</td>
</tr>
<tr>
<td>delegation_admin</td>
<td>Pubkey</td>
<td>The delegation admin responsible for adding and removing delegations from operators.</td>
</tr>
<tr>
<td>operator_admin</td>
<td>Pubkey</td>
<td>The operator admin responsible for adding and removing operators.</td>
</tr>
<tr>
<td>ncn_admin</td>
<td>Pubkey</td>
<td>The node consensus network admin responsible for adding and removing support for NCNs.</td>
</tr>
<tr>
<td>slasher_admin</td>
<td>Pubkey</td>
<td>The admin responsible for adding and removing slashers.</td>
</tr>
<tr>
<td>capacity_admin</td>
<td>Pubkey</td>
<td>The admin responsible for setting the capacity.</td>
</tr>
<tr>
<td>fee_admin</td>
<td>Pubkey</td>
<td>The admin responsible for setting the fees.</td>
</tr>
<tr>
<td>delegate_asset_admin</td>
<td>Pubkey</td>
<td>The delegate_admin responsible for delegating assets.</td>
</tr>
<tr>
<td>fee_wallet</td>
<td>Pubkey</td>
<td>Fee wallet account.</td>
</tr>
<tr>
<td>mint_burn_admin</td>
<td>Pubkey</td>
<td>Optional mint signer.</td>
</tr>
<tr>
<td>metadata_admin</td>
<td>Pubkey</td>
<td>Authority to update the vault's metadata.</td>
</tr>
</tbody>
</table>
<h4 id="indexing-and-counters" tabindex="-1"><a class="header-anchor" href="#indexing-and-counters"><span>Indexing and Counters</span></a></h4>
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
<td>vault_index</td>
<td>u64</td>
<td>The index of the vault in the vault list.</td>
</tr>
<tr>
<td>ncn_count</td>
<td>u64</td>
<td>Number of VaultNcnTicket accounts tracked by this vault.</td>
</tr>
<tr>
<td>operator_count</td>
<td>u64</td>
<td>Number of VaultOperatorDelegation accounts tracked by this vault.</td>
</tr>
<tr>
<td>slasher_count</td>
<td>u64</td>
<td>Number of VaultNcnSlasherTicket accounts tracked by this vault.</td>
</tr>
<tr>
<td>last_fee_change_slot</td>
<td>u64</td>
<td>The slot of the last fee change.</td>
</tr>
<tr>
<td>last_full_state_update_slot</td>
<td>u64</td>
<td>The slot of the last time the delegations were updated.</td>
</tr>
<tr>
<td>deposit_fee_bps</td>
<td>u16</td>
<td>The deposit fee in basis points.</td>
</tr>
<tr>
<td>withdrawal_fee_bps</td>
<td>u16</td>
<td>The withdrawal fee in basis points.</td>
</tr>
<tr>
<td>next_withdrawal_fee_bps</td>
<td>u16</td>
<td>The next epoch's withdrawal fee in basis points.</td>
</tr>
<tr>
<td>reward_fee_bps</td>
<td>u16</td>
<td>Fee for each epoch.</td>
</tr>
<tr>
<td>program_fee_bps</td>
<td>u16</td>
<td>The program fee in basis points.</td>
</tr>
<tr>
<td>is_paused</td>
<td>bool</td>
<td>Pause flag.</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">PDA</p>
<div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre v-pre><code><span class="line"><span class="token keyword">use</span> <span class="token namespace">jito_vault_core<span class="token punctuation">::</span>vault<span class="token punctuation">::</span></span><span class="token class-name">Vault</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> program_id <span class="token operator">=</span> <span class="token namespace">jito_vault_program<span class="token punctuation">::</span></span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> base_pubkey <span class="token operator">=</span> <span class="token macro property">pubkey!</span><span class="token punctuation">(</span><span class="token string">"base pubkey here"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> vault_pubkey <span class="token operator">=</span> <span class="token class-name">Vault</span><span class="token punctuation">::</span><span class="token function">find_program_address</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>program_id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>base_pubkey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2>
<ul>
<li><a href="https://docs.restaking.jito.network/vault/00_vault_accounts/" target="_blank" rel="noopener noreferrer">Vault Accounts</a></li>
</ul>
</div></template>


