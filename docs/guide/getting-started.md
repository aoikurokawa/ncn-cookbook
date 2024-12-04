# Getting Started

To integrate with Jito Restaking, we should register NCN, multiple operators, and vault.
To interact with onchain program, we provide the Rust and Typescript [clients code].
In this cookbook, we try to interact with Jito restaking program by CLI.

[clients code]: https://github.com/jito-foundation/restaking/tree/master/clients

## Install CLI

Clone the Jito Restaking Repo:

```bash
git clone git@github.com:jito-foundation/restaking.git
cd restaking
```

Build:

```bash
cargo build --release
```

Install the CLI:

```bash
cargo install --path ./cli --bin jito-restaking-cli
```

Check CLI has benn isntalled:

```bash
jito-restaking-cli --help
```
