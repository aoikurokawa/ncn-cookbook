<template><div><h1 id="operator" tabindex="-1"><a class="header-anchor" href="#operator"><span>Operator</span></a></h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<h3 id="the-operator-account" tabindex="-1"><a class="header-anchor" href="#the-operator-account"><span>The Operator Account:</span></a></h3>
<ul>
<li>Stores global metadata for a specific operator.</li>
<li>Tracks the relationship between the operator and other NCN components (e.g. Vaults, NCNs).</li>
<li>Manages administrative roles, including adding/removing support for NCNs and Vaults.</li>
</ul>
<h3 id="key-functionalities-include" tabindex="-1"><a class="header-anchor" href="#key-functionalities-include"><span>Key functionalities include:</span></a></h3>
<ul>
<li>Admin Role Management: Allows for delegating responsibilities to specialized admin roles.</li>
<li>Operator Fee Management: Tracks fees charged by operators.</li>
<li>NCN and Vault Indexing: Maintains counts of linked NCNs and Vaults for efficient indexing.</li>
</ul>
<h2 id="key-components" tabindex="-1"><a class="header-anchor" href="#key-components"><span>Key Components</span></a></h2>
<h3 id="_1-operator-structure" tabindex="-1"><a class="header-anchor" href="#_1-operator-structure"><span>1. Operator Structure</span></a></h3>
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
<tr>
<td>admin</td>
<td>Pubkey</td>
<td>Overall administrator of the operator.</td>
</tr>
<tr>
<td>ncn_admin</td>
<td>Pubkey</td>
<td>Admin responsible for managing NCNs.</td>
</tr>
<tr>
<td>vault_admin</td>
<td>Pubkey</td>
<td>Admin responsible for managing Vaults.</td>
</tr>
<tr>
<td>delegate_admin</td>
<td>Pubkey</td>
<td>Admin for delegating asssets from the operator.</td>
</tr>
<tr>
<td>metadata_admin</td>
<td>Pubkey</td>
<td>Admin authorized to update operator metadata.</td>
</tr>
<tr>
<td>voter</td>
<td>Pubkey</td>
<td>Pubkey used to sign transactions for NCN interaction.</td>
</tr>
<tr>
<td>index</td>
<td>u64</td>
<td>Index of the operator account.</td>
</tr>
<tr>
<td>ncn_count</td>
<td>u64</td>
<td>Number of NCNs associated with the operator.</td>
</tr>
<tr>
<td>vault_count</td>
<td>u64</td>
<td>Number of Vaults associated with the operator.</td>
</tr>
<tr>
<td>operator_fee_bps</td>
<td>u64</td>
<td>Operator fee in basis points.</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">PDA</p>
<div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre v-pre><code><span class="line"><span class="token keyword">use</span> <span class="token namespace">jito_restaking_core<span class="token punctuation">::</span>operator<span class="token punctuation">::</span></span><span class="token class-name">Operator</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> program_id <span class="token operator">=</span> <span class="token namespace">jito_restaking_program<span class="token punctuation">::</span></span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> base_pubkey <span class="token operator">=</span> <span class="token macro property">pubkey!</span><span class="token punctuation">(</span><span class="token string">"base pubkey here"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> operator_pubkey <span class="token operator">=</span> <span class="token class-name">Operator</span><span class="token punctuation">::</span><span class="token function">find_program_address</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>program_id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>base_pubkey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2>
<ul>
<li><a href="https://docs.restaking.jito.network/restaking/00_restaking_accounts/" target="_blank" rel="noopener noreferrer">Restaking Accounts</a></li>
</ul>
</div></template>


