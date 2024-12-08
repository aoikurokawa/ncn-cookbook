use jito_vault_client::instructions::{CreateTokenMetadataBuilder, InitializeVaultBuilder};
use jito_vault_core::{config::Config, vault::Vault};
use solana_rpc_client::rpc_client::RpcClient;
use solana_sdk::{
    commitment_config::CommitmentConfig,
    pubkey,
    pubkey::Pubkey,
    signature::{read_keypair_file, Keypair},
    signer::Signer,
    transaction::Transaction,
};

fn main() {
    let vault_program_id = pubkey!("Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8");
    let rpc_client = RpcClient::new_with_commitment(
        "https://api.devnet.solana.com",
        CommitmentConfig::confirmed(),
    );

    let keypair = read_keypair_file("~/.config/solana/id.json").unwrap();

    // Initialize Vault
    let pubkeys = initialize_vault(&vault_program_id, &rpc_client, &keypair);

    // Create Token Metadata
    create_token_metadata(&rpc_client, &keypair, pubkeys);
}

fn initialize_vault(
    vault_program_id: &Pubkey,
    rpc_client: &RpcClient,
    keypair: &Keypair,
) -> (Pubkey, Pubkey) {
    let base = Keypair::new();
    let vault = Vault::find_program_address(vault_program_id, &base.pubkey()).0;

    let vrt_mint = Keypair::new();
    let token_mint = pubkey!("HSkJ5428nHAvWsWA1AjeFuh79STnuUMvs4APoyAZXbkK");

    let mut ix_builder = InitializeVaultBuilder::new();
    let ix = ix_builder
        .config(Config::find_program_address(vault_program_id).0)
        .vault(vault)
        .vrt_mint(vrt_mint.pubkey())
        .token_mint(token_mint)
        .admin(keypair.pubkey())
        .base(base.pubkey())
        .deposit_fee_bps(1_000)
        .withdrawal_fee_bps(1_000)
        .reward_fee_bps(1_000)
        .decimals(9)
        .instruction();

    let blockhash = rpc_client.get_latest_blockhash().unwrap();
    let tx = Transaction::new_signed_with_payer(
        &[ix],
        Some(&keypair.pubkey()),
        &[keypair, &base, &vrt_mint],
        blockhash,
    );

    let result = rpc_client.send_and_confirm_transaction(&tx).unwrap();

    println!("{:?}", result);

    (vault, vrt_mint.pubkey())
}

fn create_token_metadata(rpc_client: &RpcClient, keypair: &Keypair, pubkeys: (Pubkey, Pubkey)) {
    let inline_mpl_token_metadata_id = pubkey!("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
    let metadata = Pubkey::find_program_address(
        &[
            b"metadata",
            inline_mpl_token_metadata_id.as_ref(),
            pubkeys.1.as_ref(),
        ],
        &inline_mpl_token_metadata_id,
    )
    .0;

    let mut ix_builder = CreateTokenMetadataBuilder::new();
    let ix = ix_builder
        .vault(pubkeys.0)
        .admin(keypair.pubkey())
        .vrt_mint(pubkeys.1)
        .payer(keypair.pubkey())
        .metadata(metadata)
        .name(String::from("Hello"))
        .symbol(String::from("HLO"))
        .uri(String::from("https://..."))
        .instruction();

    let blockhash = rpc_client.get_latest_blockhash().unwrap();
    let tx =
        Transaction::new_signed_with_payer(&[ix], Some(&keypair.pubkey()), &[keypair], blockhash);

    let result = rpc_client.send_and_confirm_transaction(&tx).unwrap();

    println!("{:?}", result);
}
