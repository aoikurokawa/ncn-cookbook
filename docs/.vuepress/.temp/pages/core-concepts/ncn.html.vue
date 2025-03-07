<template><div><h1 id="ncn" tabindex="-1"><a class="header-anchor" href="#ncn"><span>NCN</span></a></h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<h3 id="key-functionalities-include" tabindex="-1"><a class="header-anchor" href="#key-functionalities-include"><span>Key functionalities include:</span></a></h3>
<ul>
<li>Authority Management: Designate and validate admins for various NCN operations.</li>
<li>Operator and Vault Tracking</li>
</ul>
<h2 id="key-components" tabindex="-1"><a class="header-anchor" href="#key-components"><span>Key Components</span></a></h2>
<h3 id="_1-ncn-structure" tabindex="-1"><a class="header-anchor" href="#_1-ncn-structure"><span>1. NCN Structure</span></a></h3>
<p>The NCN account structure is designed to handle various administrative and operational roles within the network:</p>
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
<td>Overall administrator of the NCN.</td>
</tr>
<tr>
<td>operator_admin</td>
<td>Pubkey</td>
<td>Admin responsible for managing operators.</td>
</tr>
<tr>
<td>vault_admin</td>
<td>Pubkey</td>
<td>Admin responsible for managing vaults.</td>
</tr>
<tr>
<td>slasher_admin</td>
<td>Pubkey</td>
<td>Admin responsible for managing slashers.</td>
</tr>
<tr>
<td>delegate_admin</td>
<td>Pubkey</td>
<td>Admin for delegating assets of NCN account.</td>
</tr>
<tr>
<td>metadata_admin</td>
<td>Pubkey</td>
<td>Admin responsible for NCN metadata updates.</td>
</tr>
<tr>
<td>weight_table_admin</td>
<td>Pubkey</td>
<td>Admin for managing asset weight tables.</td>
</tr>
<tr>
<td>ncn_program_admin</td>
<td>Pubkey</td>
<td>Admin for on-chain programs associated with the NCN.</td>
</tr>
<tr>
<td>index</td>
<td>u64</td>
<td>Index of the NCN account.</td>
</tr>
<tr>
<td>operator_count</td>
<td>u64</td>
<td>Number of operators registered with the NCN.</td>
</tr>
<tr>
<td>vault_count</td>
<td>u64</td>
<td>Number of vaults registered with the NCN.</td>
</tr>
<tr>
<td>slasher_count</td>
<td>u64</td>
<td>Number of slashers registered with the NCN.</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">PDA</p>
<div class="language-rust line-numbers-mode" data-highlighter="prismjs" data-ext="rs" data-title="rs"><pre v-pre><code><span class="line"><span class="token keyword">use</span> <span class="token namespace">jito_restaking_core<span class="token punctuation">::</span>ncn<span class="token punctuation">::</span></span><span class="token class-name">Ncn</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> program_id <span class="token operator">=</span> <span class="token namespace">jito_restaking_program<span class="token punctuation">::</span></span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> base_pubkey <span class="token operator">=</span> <span class="token macro property">pubkey!</span><span class="token punctuation">(</span><span class="token string">"base pubkey here"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> ncn_pubkey <span class="token operator">=</span> <span class="token class-name">Ncn</span><span class="token punctuation">::</span><span class="token function">find_program_address</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>program_id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>base_pubkey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2>
<ul>
<li><a href="https://docs.restaking.jito.network/restaking/00_restaking_accounts/" target="_blank" rel="noopener noreferrer">Restaking Accounts</a></li>
</ul>
</div></template>


