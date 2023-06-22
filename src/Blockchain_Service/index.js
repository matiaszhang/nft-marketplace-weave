import WeaveDb from "weavedb-sdk-node";

const db = new WeaveDb({
  wallet: ADMIN_ARWEAVE_WALLET_JSON,
  contractTxId: WeaveDD_CONTRACT_TX_ID,
});

db.initialize({
  wallet: ADMIN_ARWEAVE_WALLET_JSON,
});

async function walletIdentity() {
  const expiry = 60 * 60 * 24 + 7;
  const { identity } = await db.createTempAddess(null, expiry);
}
