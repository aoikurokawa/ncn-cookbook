<template><div><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h1>
<h2 id="install-cli" tabindex="-1"><a class="header-anchor" href="#install-cli"><span>Install CLI</span></a></h2>
<p>Clone the Jito Restaking Repo:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">git</span> clone git@github.com:jito-foundation/restaking.git</span>
<span class="line"><span class="token builtin class-name">cd</span> restaking</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Build:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">cargo</span> build <span class="token parameter variable">--release</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Install the CLI:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">cargo</span> <span class="token function">install</span> <span class="token parameter variable">--path</span> ./cli <span class="token parameter variable">--bin</span> jito-restaking-cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Check CLI has been isntalled:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">jito-restaking-cli <span class="token parameter variable">--help</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="client" tabindex="-1"><a class="header-anchor" href="#client"><span>Client</span></a></h2>
<p>We provide the Rust and TypeScript <a href="https://github.com/jito-foundation/restaking/tree/master/clients" target="_blank" rel="noopener noreferrer">clients code</a>.</p>
<h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust"><span>Rust</span></a></h3>
<p>Powered by <a href="https://github.com/codama-idl/codama" target="_blank" rel="noopener noreferrer">Codama</a>, there are Rust clients code <code v-pre>jito-restaking-client</code> and <code v-pre>jito-vault-client</code>.</p>
<p>Install like below:</p>
<div class="language-toml line-numbers-mode" data-highlighter="prismjs" data-ext="toml" data-title="toml"><pre v-pre><code><span class="line"><span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token key property">jito-restaking-client</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">git</span> <span class="token punctuation">=</span> <span class="token string">"https://github.com/jito-foundation/restaking.git"</span><span class="token punctuation">,</span> <span class="token key property">branch</span> <span class="token punctuation">=</span> <span class="token string">"master"</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token key property">jito-vault-client</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">git</span> <span class="token punctuation">=</span> <span class="token string">"https://github.com/jito-foundation/restaking.git"</span><span class="token punctuation">,</span> <span class="token key property">branch</span> <span class="token punctuation">=</span> <span class="token string">"master"</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>TypeScript</span></a></h3>
<p>IN PROGRESS</p>
<h3 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h3>
<p>IN PROGRESS</p>
</div></template>


