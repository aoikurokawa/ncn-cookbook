<template><div><h1 id="vault-program" tabindex="-1"><a class="header-anchor" href="#vault-program"><span>Vault Program</span></a></h1>
<p>The Vault program is for creating and managing VRTs, and allowing users to deposit and withdraw their assets. Managing VRTs involves registering relationships with Vaults and NCNs, managing delegations with Operators, and setting fees.</p>
<h2 id="vault" tabindex="-1"><a class="header-anchor" href="#vault"><span>Vault</span></a></h2>
<h3 id="initialize-vault" tabindex="-1"><a class="header-anchor" href="#initialize-vault"><span>Initialize Vault</span></a></h3>
<p>You can create new Vault through the vault program:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli vault vault initialize <span class="token operator">&lt;</span>TOKEN_MINT<span class="token operator">></span> <span class="token operator">&lt;</span>DEPOSIT_FEE_BPS<span class="token operator">></span> <span class="token operator">&lt;</span>WITHDRAWAL_FEE_BPS<span class="token operator">></span> <span class="token operator">&lt;</span>REWARD_FEE_BPS<span class="token operator">></span> <span class="token operator">&lt;</span>DECIMALS<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Arguments</p>
<ul>
<li>TOKEN_MINT: The token which is allowed to be deposited into the vault</li>
<li>DEPOSIT_FEE_BPS: The deposit fee in basis points</li>
<li>WITHDRAWAL_FEE_BPS: The withdrawal fee in basis points</li>
<li>REWARD_FEE_BPS: The reward fee in basis points</li>
<li>DECIMALS: The decimals of the token</li>
</ul>
<h3 id="create-token-metadata" tabindex="-1"><a class="header-anchor" href="#create-token-metadata"><span>Create Token Metadata</span></a></h3>
<p>Creates token metadata for the VRT:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli vault vault create-token-metadata <span class="token operator">&lt;</span>VAULT<span class="token operator">></span> <span class="token operator">&lt;</span>NAME<span class="token operator">></span> <span class="token operator">&lt;</span>SYMBOL<span class="token operator">></span> <span class="token operator">&lt;</span>URI<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Arguments</p>
<ul>
<li>VAULT: The vault pubkey</li>
<li>NAME: The name of the token</li>
<li>SYMBOL: The symbol of the token</li>
<li>URI: The URI for the token metadata</li>
</ul>
<h3 id="initialize-operator-delegation" tabindex="-1"><a class="header-anchor" href="#initialize-operator-delegation"><span>Initialize Operator Delegation</span></a></h3>
<p>Sets up the delegations for an operator:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli vault vault initialize-operator-delegation <span class="token operator">&lt;</span>VAULT<span class="token operator">></span> <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Arguments:</p>
<ul>
<li>VAULT: Vault account pubkey</li>
<li>OPERATOR: Operator account pubkey</li>
</ul>
<h3 id="cooldown-operator-delegation" tabindex="-1"><a class="header-anchor" href="#cooldown-operator-delegation"><span>Cooldown Operator Delegation</span></a></h3>
<p>Cooldown delegation for an operator:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli vault vault cooldown-operator-delegation <span class="token operator">&lt;</span>VAULT<span class="token operator">></span> <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span> <span class="token operator">&lt;</span>AMOUNT<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Arguments:</p>
<ul>
<li>VAULT: Vault account pubkey</li>
<li>OPERATOR: Operator account pubkey</li>
<li>AMOUNT: Amount to cooldown</li>
</ul>
</div></template>


