use jito_restaking_client::instructions::{InitializeNcnBuilder, InitializeOperatorBuilder};
use jito_restaking_core::{config::Config, ncn::Ncn, operator::Operator};
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
    let restaking_program_id = pubkey!("RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q");
    let rpc_client = RpcClient::new_with_commitment(
        "https://api.devnet.solana.com",
        CommitmentConfig::confirmed(),
    );

    let keypair = read_keypair_file("~/.config/solana/id.json").unwrap();

    // Initialize NCN
    initialize_ncn(&restaking_program_id, &rpc_client, &keypair);

    // Initialize Operator
    initialize_operator(&restaking_program_id, &rpc_client, &keypair);
}

fn initialize_ncn(restaking_program_id: &Pubkey, rpc_client: &RpcClient, keypair: &Keypair) {
    let base = Keypair::new();
    let ncn = Ncn::find_program_address(restaking_program_id, &base.pubkey()).0;

    let mut ix_builder = InitializeNcnBuilder::new();
    let ix = ix_builder
        .config(Config::find_program_address(restaking_program_id).0)
        .ncn(ncn)
        .admin(keypair.pubkey())
        .base(base.pubkey())
        .instruction();

    let blockhash = rpc_client.get_latest_blockhash().unwrap();
    let tx = Transaction::new_signed_with_payer(
        &[ix],
        Some(&keypair.pubkey()),
        &[keypair, &base],
        blockhash,
    );

    let result = rpc_client.send_and_confirm_transaction(&tx).unwrap();

    println!("{:?}", result);
}

fn initialize_operator(restaking_program_id: &Pubkey, rpc_client: &RpcClient, keypair: &Keypair) {
    let base = Keypair::new();
    let operator = Operator::find_program_address(restaking_program_id, &base.pubkey()).0;

    let mut ix_builder = InitializeOperatorBuilder::new();
    let ix = ix_builder
        .config(Config::find_program_address(restaking_program_id).0)
        .operator(operator)
        .admin(keypair.pubkey())
        .base(base.pubkey())
        .operator_fee_bps(1_000)
        .instruction();

    let blockhash = rpc_client.get_latest_blockhash().unwrap();
    let tx = Transaction::new_signed_with_payer(
        &[ix],
        Some(&keypair.pubkey()),
        &[keypair, &base],
        blockhash,
    );

    let result = rpc_client.send_and_confirm_transaction(&tx).unwrap();

    println!("{:?}", result);
}
