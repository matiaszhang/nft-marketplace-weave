const bs58 = require("bs58");
const { Wallet, Contract, ethers } = require("ethers");
const privatekey =
  "9fc6c5e95660934f29a742c5e43f536a387a1077e40e8c1127892f927a1d105e";
const ipfsCid = "QmaXNxqyn977HGBJh7nw5VuFsNPdSTEKzmdsRZqk23Uvoi";

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "keyType",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "ipfsCID",
        type: "bytes",
      },
    ],
    name: "mintGrantAndBurnNext",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

function getBytesFromMultihash(multihash) {
  const decoded = bs58.decode(multihash);
  return `0x${Buffer.from(decoded).toString("hex")}`;
}

const go = async () => {
  const provider = new ethers.JsonRpcProvider(
    "https://chain-rpc.litprotocol.com/http"
  );

  const wallet = new Wallet(privatekey, provider);
  const contract = new Contract(
    "0x8F75a53F65e31DD0D2e40d0827becAaE2299D111",
    abi,
    wallet
  );

  const tx = await contract.mintGrantAndBurnNext(
    2,
    getBytesFromMultihash(ipfsCid),
    { value: "1" }
  );
  console.log(await tx.wait());
};

go();
