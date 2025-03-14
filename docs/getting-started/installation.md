# Installation

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

Check CLI has been installed:

```bash
jito-restaking-cli --help
```

## Client

We provide the Rust and TypeScript [clients code].

[clients code]: https://github.com/jito-foundation/restaking/tree/master/clients

### Rust

Powered by [Codama], there are Rust clients code `jito-restaking-client` and `jito-vault-client`.

Install like below:

```toml
[dependencies]
jito-restaking-client = { git = "https://github.com/jito-foundation/restaking.git", branch = "master" }
jito-vault-client = { git = "https://github.com/jito-foundation/restaking.git", branch = "master" }
```

[Codama]: https://github.com/codama-idl/codama

### TypeScript

IN PROGRESS

### Python

IN PROGRESS
