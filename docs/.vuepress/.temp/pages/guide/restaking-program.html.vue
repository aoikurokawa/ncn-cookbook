<template><div><h1 id="restaking-program" tabindex="-1"><a class="header-anchor" href="#restaking-program"><span>Restaking Program</span></a></h1>
<p>The Restaking program is primarily for initializing NCNs and Operators, managing NCN authorities, and registering relationships between NCNs, Operators, and Vaults.</p>
<h2 id="initialize-ncn" tabindex="-1"><a class="header-anchor" href="#initialize-ncn"><span>Initialize NCN</span></a></h2>
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
<h2 id="initialize-operator" tabindex="-1"><a class="header-anchor" href="#initialize-operator"><span>Initialize Operator</span></a></h2>
<p>Operators are entities responsible for running NCN software.
You can initialize Operator through the restaking program:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking operator initialize</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="initialize-ncnoperatorstate" tabindex="-1"><a class="header-anchor" href="#initialize-ncnoperatorstate"><span>Initialize NcnOperatorState</span></a></h2>
<p>NCN can have multiple Operators, each NCN &lt;&gt; Operator state stored on <code v-pre>NcnOperatorState</code> account. Once created, the NCN and operator can both warm-up and cooldown the state to show support for each other.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="initialize-ncnvaultticket" tabindex="-1"><a class="header-anchor" href="#initialize-ncnvaultticket"><span>Initialize NCNVaultTicket</span></a></h2>
<p>NCN can also have multiple Vaults, this ticket represents the relationship between an NCN and a Vault. It is created by the NCN to opt in to work with a Vault.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="initialize-operatorvaultticket" tabindex="-1"><a class="header-anchor" href="#initialize-operatorvaultticket"><span>Initialize OperatorVaultTicket</span></a></h2>
<p>Operator can associate with multiple Vaults, this ticket represents the relationship between an Operator and a Vault.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli restaking operator initialize-operator-vault-ticket</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


