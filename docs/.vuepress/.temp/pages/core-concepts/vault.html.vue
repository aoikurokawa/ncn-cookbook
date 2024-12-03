<template><div><h1 id="accounts" tabindex="-1"><a class="header-anchor" href="#accounts"><span>Accounts</span></a></h1>
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
<p><img src="@source/core-concepts/account_example.jpeg" alt=""></p>
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


