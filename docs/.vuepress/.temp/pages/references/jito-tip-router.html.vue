<template><div><h1 id="jito-tip-router-program" tabindex="-1"><a class="header-anchor" href="#jito-tip-router-program"><span>Jito Tip Router Program</span></a></h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2>
<h3 id="current-process" tabindex="-1"><a class="header-anchor" href="#current-process"><span>Current Process</span></a></h3>
<ul>
<li>Each validator has a unique tip distribution account, owned by the <a href="https://github.com/jito-foundation/jito-programs/blob/master/mev-programs/programs/tip-distribution/src/lib.rs" target="_blank" rel="noopener noreferrer">Jito Tip Distribution Program</a>, where SOL is collected for a given epoch.</li>
<li>At the end of the epoch, an off-chain process takes place which produces a merkle tree and merkle root for each validator’s tip distribution account.
<ul>
<li>Validators can run this process themselves or delegate it to another party.</li>
<li>The merkle tree is intended to distribute any SOL in the account to the validator based on their MEV commission rate. Remaining funds are sent to stakers’ stake accounts pro-rata.</li>
</ul>
</li>
<li>After the merkle root has been uploaded, merkle proofs are uploaded on-chain and the program will transfer SOL from the tip distribution account to the validator’s vote account and stake accounts.</li>
</ul>
<h3 id="problem" tabindex="-1"><a class="header-anchor" href="#problem"><span>Problem</span></a></h3>
<ul>
<li>Merkle root upload authority is permissioned with opt-in from each Jito-Solana validator. This mechanism creates a single point of potential failure with adverse impacts on network stakeholders and lacks transparency on the calculation.</li>
</ul>
<h3 id="solution" tabindex="-1"><a class="header-anchor" href="#solution"><span>Solution</span></a></h3>
<p>The TipRouter NCN will leverage Jito (Re)staking to empower a set of node operators to come to consensus on the correct merkle root for tip distribution.</p>
<p>The mechanism of the TipRouter NCN is detailed below:</p>
<ul>
<li>Validators can delegate the merkle root upload authority to a program derived address owned by the NCN, giving it permission <a href="https://github.com/jito-foundation/jito-tip-router/blob/022fee74773170b76d1f8aad8c8edc71fd387e05/program/src/set_merkle_root.rs#L61-L80" target="_blank" rel="noopener noreferrer">to upload merkle roots</a>.</li>
<li>After the epoch rollover, node operators will compute a 'meta merkle root' — a merkle root derived from a new merkle tree containing all validator merkle trees — and upload it on-chain. This change reduces the number of votes required, as operators now vote on the meta merkle root instead of casting individual votes for each validator.</li>
</ul>
<p><img src="@source/references/images/cast_vote.png" alt=""></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Inside of Stake Meta:</p>
<ul>
<li>validator_vote_account: The account representing the validator's voting authority.</li>
<li>validator_node_pubkey: The public key of the validator node.</li>
<li>maybe_tip_distribution_meta: Metadata related to tip distribution, if applicable.
<ul>
<li>merkle_root_upload_authority: The authority responsible for uploading the merkle root.</li>
<li>tip_distribution_pubkey: The public key owned by the Jito Tip Distribution Program.</li>
<li>total_tips: The total amount of tips in the <a href="https://github.com/jito-foundation/jito-programs/blob/6bf84c19db9208a16e226074c666c965f5429d88/mev-programs/programs/tip-distribution/src/state.rs#L29-L54" target="_blank" rel="noopener noreferrer"><code v-pre>TipDistributionAccount</code></a></li>
<li>validator_fee_bps: The validator's cut of tips from <a href="https://github.com/jito-foundation/jito-programs/blob/6bf84c19db9208a16e226074c666c965f5429d88/mev-programs/programs/tip-distribution/src/state.rs#L29-L54" target="_blank" rel="noopener noreferrer"><code v-pre>TipDistributionAccount</code></a>, calculated from the on-chain commission fee bps.</li>
</ul>
</li>
<li>delegations: Delegations to this validator.
<ul>
<li>stake_account_pubkey: The public key of the stake account.</li>
<li>staker_pubkey: The public key of the staker.</li>
<li>withdrawer_pubkey: The public key authorized to withdraw from the stake account.</li>
<li>lamports_delegated: Lamports delegated by the stake account</li>
</ul>
</li>
<li>total_delegated: The total amount of delegations to the validator.</li>
<li>commission: The validator's delegation commission rate as a percentage between 0-100.</li>
</ul>
</div>
<ul>
<li>After each vote, consensus of node operators will be checked. After ⅔ of stake agrees on a merkle root for a given validator, a cross program invocation will take place to upload the merkle root to the validator’s tip distribution account.</li>
<li>Operators can change their vote until consensus is reached, then they can not change their vote. Once consensus is reached, any operators who have not voted have a fixed window of slots to submit their vote in order to be eligible for rewards.</li>
</ul>
<p><img src="@source/references/images/upload.png" alt=""></p>
<h2 id="ncn-program" tabindex="-1"><a class="header-anchor" href="#ncn-program"><span>NCN Program</span></a></h2>
<p>Following the <RouteLink to="/building-ncn/ncn-design.html#onchain-ncn-program">NCN design section</RouteLink>, Jito Tip Router consists of:</p>
<ul>
<li>Pricing</li>
<li>Snapshot</li>
<li>Core Logic</li>
<li>Reward Payment</li>
</ul>
<p><img src="@source/references/images/overview.png" alt=""></p>
<h3 id="pricing" tabindex="-1"><a class="header-anchor" href="#pricing"><span>Pricing</span></a></h3>
<p><strong>Permissionless Cranker</strong>:</p>
<p>Prepare several accounts like <code v-pre>TrackedMints</code> and <code v-pre>WeightTable</code>.</p>
<ul>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_tracked_mints.rs" target="_blank" rel="noopener noreferrer">Initialize TrackedMints account</a></li>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/register_mint.rs" target="_blank" rel="noopener noreferrer">Register Mint</a></li>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_weight_table.rs" target="_blank" rel="noopener noreferrer">Initialize WeightTable account</a></li>
</ul>
<p><strong>NCN Admin</strong>:</p>
<p>NCN admin update <em>weight</em> of supported token on Tip Router NCN.</p>
<ul>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/admin_update_weight_table.rs" target="_blank" rel="noopener noreferrer">Update WeightTable account</a></li>
</ul>
<p><img src="@source/references/images/pricing.png" alt=""></p>
<h3 id="snapshots-operator-vault" tabindex="-1"><a class="header-anchor" href="#snapshots-operator-vault"><span>Snapshots (Operator + Vault)</span></a></h3>
<p>Take snapshots of Operator and Vault per epoch.</p>
<p><strong>Permissionless Cranker</strong>:</p>
<p>Aggregate all information of operators and vaults associated with NCN</p>
<ul>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_epoch_snapshot.rs" target="_blank" rel="noopener noreferrer">Initialize EpochSnapshot account</a></li>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_operator_snapshot.rs" target="_blank" rel="noopener noreferrer">Initiazize OperatorSnapshot account</a></li>
</ul>
<p><img src="@source/references/images/snapshot.png" alt=""></p>
<h3 id="core-logic-consensus" tabindex="-1"><a class="header-anchor" href="#core-logic-consensus"><span>Core Logic (Consensus)</span></a></h3>
<p><strong>Permissionless Cranker</strong>:</p>
<p>Prepare Ballot Box, all votes would be collected here.</p>
<ul>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/initialize_ballot_box.rs" target="_blank" rel="noopener noreferrer">Initialize Ballot Box</a></li>
</ul>
<p>After consensus reached with more than 2/3, cranker can upload the merkle tree of each validator.</p>
<ul>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/set_merkle_root.rs" target="_blank" rel="noopener noreferrer">Set Merkle Root</a></li>
</ul>
<p><strong>Operator</strong>:</p>
<p>Each operator calculate the merkle tree to produce merkle root then cast vote with produced merkle root.</p>
<ul>
<li><a href="https://github.com/jito-foundation/jito-tip-router/blob/master/program/src/cast_vote.rs" target="_blank" rel="noopener noreferrer">Cast Vote</a></li>
</ul>
<p><img src="@source/references/images/core_logic.png" alt=""></p>
<h3 id="reward-payment" tabindex="-1"><a class="header-anchor" href="#reward-payment"><span>Reward Payment</span></a></h3>
<p>IN PROGRESS</p>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2>
<ul>
<li><a href="https://forum.jito.network/t/jip-8-adopt-tiprouter-ncn-protocol-development/413" target="_blank" rel="noopener noreferrer">JIP-8: Adopt TipRouter NCN (Protocol Development)</a></li>
<li><a href="https://github.com/jito-foundation/jito-tip-router/tree/master" target="_blank" rel="noopener noreferrer">Jito Tip Router Repo</a></li>
</ul>
</div></template>


