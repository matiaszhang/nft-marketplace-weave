const Bundlr = require("@bundlr-network/client");
const privateKey = "9fc6c5e95660934f29a742c5e43f536a387a1077e40e8c1127892f927a1d105e";
const bundlr = new Bundlr.default("http://node1.bundlr.network", "matic", privateKey);

const price = 0.5; // Amount in MATIC
const atomicUnits = price * 10 ** 18; // Convert to atomic units
const fundAmountAtomic = bundlr.utils.toAtomic(atomicUnits);
// Fund the node
const fundTx = await bundlr.fund(fundAmountAtomic);

let atomicBalance = await bundlr.getLoadedBalance();
console.log(`node balance (atomic units) = ${atomicBalance}`);
 
// Convert balance to an easier to read format
let convertedBalance = bundlr.utils.unitConverter(atomicBalance);
console.log(`node balance (converted) = ${convertedBalance}`);


async function performOperations() {
  try {
    let response = await bundlr.fund(price);
    console.log("Funding response:", response);

    let atomicBalance = await bundlr.getLoadedBalance();
    console.log(`Node balance (atomic units): ${atomicBalance}`);

    const dataToUpload = "Hello, world!";
    response = await bundlr.upload(dataToUpload);
    console.log(`Data uploaded: https://arweave.net/${response.id}`);
  } catch (error) {
    console.log("Error:", error);
  }
}

performOperations();
