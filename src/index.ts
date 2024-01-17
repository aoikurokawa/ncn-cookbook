import { initializeKeypair } from "./initializeKeypair";
import { Metaplex, toMetaplexFile } from "@metaplex-foundation/js";
import * as web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";
import * as fs from "fs";
import { DataV2, createCreateMetadataAccountV2Instruction } from "@metaplex-foundation/mpl-token-metadata";

async function createNewMint(
  connection: web3.Connection,
  payer: web3.Keypair,
  mintAuthority: web3.PublicKey,
  freezeAuthority: web3.PublicKey,
  decimals: number
): Promise<web3.PublicKey> {
  const tokenMint = await token.createMint(
    connection,
    payer,
    mintAuthority,
    freezeAuthority,
    decimals
  );

  console.log(`The token mint account address is ${tokenMint}`);
  console.log(
    `Token Mint: https://explorer.solana.com/address/${tokenMint}?cluster=devnet`
  );

  return tokenMint;
}

async function createTokenAccount(
  connection: web3.Connection,
  payer: web3.Keypair,
  mint: web3.PublicKey,
  owner: web3.PublicKey
): Promise<token.Account> {
  const tokenAccount = await token.getOrCreateAssociatedTokenAccount(
    connection,
    payer,
    mint,
    owner
  );

  console.log(
    `The Account: https://explorer.solana.com/address/${tokenAccount.address}?cluster=devnet`
  );

  return tokenAccount;
}

async function mintTokens(
  connection: web3.Connection,
  payer: web3.Keypair,
  mint: web3.PublicKey,
  destionation: web3.PublicKey,
  authority: web3.Keypair,
  amount: number
) {
  const mintInfo = await token.getMint(connection, mint);

  const transactionSignature = await token.mintTo(
    connection,
    payer,
    mint,
    destionation,
    authority,
    amount * 10 ** mintInfo.decimals
  );

  console.log(
    `Mint Token Transaction: https://explorer.solana.com/address/${transactionSignature}?cluster=devnet`
  );
}

async function createTokenMetadata(
  connection: web3.Connection,
  metaplex: Metaplex,
  mint: web3.PublicKey,
  user: web3.Keypair,
  name: string,
  symbol: string,
  description: string,
) {
  const buffer = fs.readFileSync("assets/pizza.png");

  const file = toMetaplexFile(buffer, "pizza.png");

  const imageUri = await metaplex.storage().upload(file);
  console.log("image uri:", imageUri);

  const { uri } = await metaplex.nfts().uploadMetadata({
    name,
    description,
    image: imageUri,
  });

  console.log("metadata uri:", uri);

  const metadataPDA = metaplex.nfts().pdas().metadata({ mint });

  const tokenMetadata = {
    name,
    symbol,
    uri,
    sellerFeeBasisPoints: 0,
    creators: null,
    collection: null,
    uses: null,
  } as DataV2;

  const transaction = new web3.Transaction().add(
    createCreateMetadataAccountV2Instruction(
      {
        metadata: metadataPDA,
        mint,
        mintAuthority: user.publicKey,
        payer: user.publicKey,
        updateAuthority: user.publicKey,
      },
    )
  );

  const transactionSignature = await web3.sendAndConfirmTransaction(connection, transaction, [user]);

  console.log(`Create Metadata Account: https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`);
}

async function main() {
  const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
  const user = await initializeKeypair(connection);

  console.log("PublicKey: ", user.publicKey.toBase58());

  // const mint = await createNewMint(
  //   connection,
  //   user,
  //   user.publicKey,
  //   user.publicKey,
  //   2
  // );

  const mint = new web3.PublicKey("6u55jwAdY2YDrZuoL9bhLWuBnQiGUhpmpuhPXxsNei5y");

  const tokenAccount = await createTokenAccount(
    connection,
    user,
    mint,
    user.publicKey
  );

  await mintTokens(connection, user, mint, tokenAccount.address, user, 100);
}

main()
  .then(() => {
    console.log("Finished successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
