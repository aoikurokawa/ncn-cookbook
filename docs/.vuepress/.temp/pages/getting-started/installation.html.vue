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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


