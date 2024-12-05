<template><div><h1 id="vault" tabindex="-1"><a class="header-anchor" href="#vault"><span>Vault</span></a></h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<h3 id="the-vault-account" tabindex="-1"><a class="header-anchor" href="#the-vault-account"><span>The Vault Account:</span></a></h3>
<ul>
<li>Serves as the repository for supported token and VRT (Vault Receipt Token).</li>
<li>Tracks the state of tokens deposits, withdrawals, and delegate assets.</li>
<li>Manages a set of administrative roles, responsible for different aspects of vault operations.</li>
</ul>
<h3 id="key-functionalities-include" tabindex="-1"><a class="header-anchor" href="#key-functionalities-include"><span>Key functionalities include:</span></a></h3>
<ol>
<li>Token Management: Handles deposits, withdrawals, and minting/burning of VRT tokens with fee calculations and slippage protection.</li>
<li>Fee Management: Supports dynamic fee adjustments (deposit, withdrawal, reward) with built-in validation and limits.</li>
<li>Delegation Management: Tracks and manages the delegation of assets to operators, ensuring sufficient reserves for withdrawals.</li>
<li>State Tracking: Maintains a detailed record of vault activity, including cooldowns, ready-to-claim amounts, and delegation states.</li>
<li>Administrative Role Management: Assigns and verifies various admin roles (e.g., delegation admin, fee admin) for secure and efficient operations.</li>
</ol>
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
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2>
<ul>
<li><a href="https://docs.restaking.jito.network/vault/00_vault_accounts/" target="_blank" rel="noopener noreferrer">Vault Accounts</a></li>
</ul>
<h2 id="accounts" tabindex="-1"><a class="header-anchor" href="#accounts"><span>Accounts</span></a></h2>
<p>Accounts within Solana are used to store state. They are an essential
building block for developing on Solana.</p>
<h2 id="facts" tabindex="-1"><a class="header-anchor" href="#facts"><span>Facts</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Fact Sheet</p>
<ul>
<li>Accounts are used to store data</li>
<li>Each account has a unique address</li>
<li>Accounts have a max size of 10MB (10 Mega Bytes)</li>
<li>PDA accounts have a max size of 10KB (10 Kilo Bytes)</li>
<li>PDA accounts can be used to sign on behalf of a program</li>
<li>Accounts size are fixed at creation time, but can be adjusted using <a href="https://solanacookbook.com/references/programs.html#how-to-change-account-size" target="_blank" rel="noopener noreferrer">realloc</a></li>
<li>Account data storage is paid with rent</li>
<li>Default account owner is the System Program</li>
</ul>
</div>
<h2 id="deep-dive" tabindex="-1"><a class="header-anchor" href="#deep-dive"><span>Deep Dive</span></a></h2>
<h3 id="account-model" tabindex="-1"><a class="header-anchor" href="#account-model"><span>Account Model</span></a></h3>
<p>There are 3 kinds of accounts on Solana:</p>
<ul>
<li>Data accounts store data</li>
<li>Program accounts store executable programs</li>
<li>Native accounts that indicate native programs on Solana such as System, Stake, and Vote</li>
</ul>
<p>Within data accounts, there are 2 types:</p>
<ul>
<li>System owned accounts</li>
<li>PDA (Program Derived Address) accounts</li>
</ul>
<p>Each account has an address (usually a public key) and an owner
(address of a program account). The full field list an account stores
is found below.</p>
<table>
<thead>
<tr>
<th>Field</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>lamports</td>
<td>The number of lamports owned by this account</td>
</tr>
<tr>
<td>owner</td>
<td>The program owner of this account</td>
</tr>
<tr>
<td>executable</td>
<td>Whether this account can process instructions</td>
</tr>
<tr>
<td>data</td>
<td>The raw data byte array stored by this account</td>
</tr>
<tr>
<td>rent_epoch</td>
<td>The next epoch that this account will owe rent</td>
</tr>
</tbody>
</table>
<p>There are a few important ownership rules:</p>
<ul>
<li>Only a data account's owner can modify its data and debit lamports</li>
<li>Anyone is allowed to credit lamports to a data account</li>
<li>The owner of an account may assign a new owner if the account's data is zeroed out</li>
</ul>
<p>Program accounts do not store state.</p>
<p>For example, if you have a counter program that lets you increment a counter, you
must create two accounts, one account to store the program's code, and one to store
the counter.</p>
<p>To prevent an account from being deleted, you must pay rent.</p>
<h3 id="rent" tabindex="-1"><a class="header-anchor" href="#rent"><span>Rent</span></a></h3>
<p>Storing data on accounts costs SOL to maintain, and it is funded by what is called
rent. If you maintain a minimum balance equivalent to 2 years of rent payments in an
account, your account will be exempt from paying rent. You can retrieve rent by closing
the account and sending the lamports back to your wallet.</p>
<p>Rent is paid during two different timings:</p>
<ol>
<li>When referenced by a transaction</li>
<li>Once an epoch</li>
</ol>
<p>A percentage of rent collected by accounts is destroyed, while the rest is distributed
to vote accounts at the end of every slot.</p>
<p>If the account does not have enough to pay rent, the account will be deallocated and the data
removed.</p>
<p>It is also important to note that new accounts must be rent exempt.</p>
<h2 id="other-resources" tabindex="-1"><a class="header-anchor" href="#other-resources"><span>Other Resources</span></a></h2>
<ul>
<li><a href="https://solana.wiki/zh-cn/docs/account-model/#account-storage" target="_blank" rel="noopener noreferrer">Solana Account Model</a></li>
<li><a href="https://docs.solana.com/developing/programming-model/accounts" target="_blank" rel="noopener noreferrer">Official Documentation</a></li>
<li><a href="https://twitter.com/pencilflip/status/1452402100470644739" target="_blank" rel="noopener noreferrer">pencilflip account thread</a></li>
</ul>
<h3 id="credit" tabindex="-1"><a class="header-anchor" href="#credit"><span>Credit</span></a></h3>
<p>This core concept is credited to Pencilflip. <a href="https://twitter.com/intent/user?screen_name=pencilflip" target="_blank" rel="noopener noreferrer">Follow him on Twitter</a>.</p>
</div></template>


