<template><div><h1 id="ncn-design" tabindex="-1"><a class="header-anchor" href="#ncn-design"><span>NCN Design</span></a></h1>
<p>It is one of typical NCN design, so every NCN does not have to follow this design.</p>
<h2 id="onchain-ncn-program" tabindex="-1"><a class="header-anchor" href="#onchain-ncn-program"><span>Onchain NCN Program</span></a></h2>
<p>NCN Program consisits of several components:</p>
<ul>
<li><RouteLink to="/building-ncn/pricing.html">Pricing</RouteLink></li>
<li><RouteLink to="/building-ncn/snapshot.html">Snapshot</RouteLink></li>
<li><RouteLink to="/building-ncn/core-logic.html">Core Logic</RouteLink></li>
<li><RouteLink to="/building-ncn/reward-payments.html">Reward Payment</RouteLink></li>
</ul>
<h2 id="operator-client" tabindex="-1"><a class="header-anchor" href="#operator-client"><span>Operator Client</span></a></h2>
<p>This is the core off-chain logic of the NCN. It will run some arbitrary computation, and post some data on chain to a custom instruction, signing the transaction with the operator keypair.</p>
<p>Sample Node Operator Client:</p>
<ul>
<li><a href="https://github.com/jito-foundation/jito-solana/blob/837300fa58cb450e041443bafc6e21a7ee8f15b7/tip-distributor/src/bin/merkle-root-uploader.rs" target="_blank" rel="noopener noreferrer">solana-merkle-root-uploader</a></li>
<li><a href="https://github.com/jito-foundation/stakenet/blob/master/keepers/stakenet-keeper/src/main.rs" target="_blank" rel="noopener noreferrer">stakenet-keeper</a></li>
</ul>
<h2 id="permissionless-cranker" tabindex="-1"><a class="header-anchor" href="#permissionless-cranker"><span>Permissionless Cranker</span></a></h2>
<p>For all of the permissionless operations that need to occur on a regular cycle, we need a client that is continually executing instructions.</p>
</div></template>


