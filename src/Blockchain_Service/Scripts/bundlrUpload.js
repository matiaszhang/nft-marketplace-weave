const WeaveDB = require("weavedb-sdk");
const Bundlr = require("@bundlr-network/client");
const fs = require("fs").promises;
const dotenv = require("dotenv");
dotenv.config();

async function uploadFileWithDB() {
  const db = new WeaveDB({ contractTxId: "9QG_4AHNo6sOuHQaH8h-7NVJpmZ3LWnStnDJrssDdUg" });
  await db.init();
  const privateKey = "9fc6c5e95660934f29a742c5e43f536a387a1077e40e8c1127892f927a1d105e";
  const currency = "matic";

  const bundlr = new Bundlr("http://devnet.bundlr.network", currency, privateKey, {
    providerUrl: "https://rpc-mumbai.maticvigil.com",
  });

  const fileToUpload = "/Users/mac/WeaveNft_Marketplace/public/images/addNft.png";
  const tags = [{ name: "Content-Type", value: "png" }];

  try {
    const { size } = await fs.stat(fileToUpload);
    const price = await bundlr.getPrice(size);
    console.log(`Uploading ${size} bytes costs ${bundlr.utils.fromAtomic(price)} ${currency}`);
    await bundlr.fund(price);
    
    const response = await bundlr.uploadFile(fileToUpload, tags);
    const res = await db.upsert({ bundlrId: response.id }, "nft_collection");
    
    console.log(res);
    console.log(`File uploaded ==> https://arweave.net/${response.id}`);
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
}

uploadFileWithDB();
