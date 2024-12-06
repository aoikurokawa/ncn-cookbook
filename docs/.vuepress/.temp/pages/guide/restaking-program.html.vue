<template><div><h1 id="restaking-program" tabindex="-1"><a class="header-anchor" href="#restaking-program"><span>Restaking Program</span></a></h1>
<p>The Restaking program is primarily for initializing NCNs and Operators, managing NCN authorities, and registering relationships between NCNs, Operators, and Vaults.</p>
<h2 id="ncn" tabindex="-1"><a class="header-anchor" href="#ncn"><span>NCN</span></a></h2>
<h3 id="initialize-ncn" tabindex="-1"><a class="header-anchor" href="#initialize-ncn"><span>Initialize NCN</span></a></h3>
<p>You can initialize your NCN through the restaking program:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking ncn initialize</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>There are several things one can do after registering an NCN:</p>
<ul>
<li>Add and remove support for operators participating in the NCN operator set.</li>
<li>Add and remove support for vaults.</li>
<li>Add and remove support for slashers</li>
<li>Delegate funds sent to the NCN from rewards, airdrops, and other sources.</li>
</ul>
<h3 id="initialize-ncnoperatorstate" tabindex="-1"><a class="header-anchor" href="#initialize-ncnoperatorstate"><span>Initialize NcnOperatorState</span></a></h3>
<p>NCN can have multiple Operators, each NCN &lt;&gt; Operator state stored on <code v-pre>NcnOperatorState</code> account. Once created, the NCN and operator can both warm-up and cooldown the state to show support for each other.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking ncn initialize-ncn-operator-state <span class="token operator">&lt;</span>NCN<span class="token operator">></span> <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="ncn-warmup-cooldown-operator" tabindex="-1"><a class="header-anchor" href="#ncn-warmup-cooldown-operator"><span>Ncn warmup/cooldown Operator</span></a></h3>
<p>NCN can wamup/cooldown relationship with Operator.</p>
<p>Warmup:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking ncn ncn-warmup-operator <span class="token operator">&lt;</span>NCN<span class="token operator">></span> <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cooldown:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking ncn ncn-cooldown-operator <span class="token operator">&lt;</span>NCN<span class="token operator">></span> <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="operator-warmup-cooldown-ncn" tabindex="-1"><a class="header-anchor" href="#operator-warmup-cooldown-ncn"><span>Operator warmup/cooldown NCN</span></a></h3>
<p>Operator can wamup/cooldown relationship with NCN.</p>
<p>Warmup:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking ncn operator-warmup-ncn <span class="token operator">&lt;</span>NCN<span class="token operator">></span> <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cooldown:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking ncn operator-cooldown-ncn <span class="token operator">&lt;</span>NCN<span class="token operator">></span> <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="initialize-ncnvaultticket" tabindex="-1"><a class="header-anchor" href="#initialize-ncnvaultticket"><span>Initialize NCNVaultTicket</span></a></h3>
<p>NCN can also have multiple Vaults, this ticket represents the relationship between an NCN and a Vault. It is created by the NCN to opt in to work with a Vault.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking ncn-vault-ticket initialize <span class="token operator">&lt;</span>NCN<span class="token operator">></span> <span class="token operator">&lt;</span>VAULT<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="warmup-cooldown-ncnvaultticket" tabindex="-1"><a class="header-anchor" href="#warmup-cooldown-ncnvaultticket"><span>Warmup/Cooldown NCNVaultTicket</span></a></h3>
<p>NCN can wamup/cooldown relationship with Vault.</p>
<p>Warmup:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking ncn warmup-ncn-vault-ticket <span class="token operator">&lt;</span>NCN<span class="token operator">></span> <span class="token operator">&lt;</span>VAULT<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="operator" tabindex="-1"><a class="header-anchor" href="#operator"><span>Operator</span></a></h2>
<h3 id="initialize-operator" tabindex="-1"><a class="header-anchor" href="#initialize-operator"><span>Initialize Operator</span></a></h3>
<p>Operators are entities responsible for running NCN software.
You can initialize Operator through the restaking program:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking operator initialize <span class="token operator">&lt;</span>OPERATOR_FEE_BPS<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Argument</p>
<ul>
<li>OPERATOR_FEE_BPS: The operator fee in basis points</li>
</ul>
<h3 id="initialize-operatorvaultticket" tabindex="-1"><a class="header-anchor" href="#initialize-operatorvaultticket"><span>Initialize OperatorVaultTicket</span></a></h3>
<p>Operator can associate with multiple Vaults, this ticket represents the relationship between an Operator and a Vault.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking operator initialize-operator-vault-ticket <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span> <span class="token operator">&lt;</span>VAULT<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="warmup-cooldown-operatorvaultticket" tabindex="-1"><a class="header-anchor" href="#warmup-cooldown-operatorvaultticket"><span>Warmup/Cooldown OperatorVaultTicket</span></a></h3>
<p>Operator can warmup/cooldown relationship with Vault.</p>
<p>Wamup:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking operator warmup-operator-vault-ticket <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span> <span class="token operator">&lt;</span>VAULT<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Cooldown:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking operator cooldown-operator-vault-ticket <span class="token operator">&lt;</span>OPERATOR<span class="token operator">></span> <span class="token operator">&lt;</span>VAULT<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


