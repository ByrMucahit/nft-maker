require('dotenv').config;
const ethers = require('ethers');

// Get Alchemy api key
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.providers.AlchemyProvider('goerli', API_KEY);

const contract = require("../artifacts/contracts/MyNft.sol/MyNft.json");

console.log(JSON.stringify(contract.abi));

// Create a signer
const privateKey = process.env.PRIVATE_KEY;
const signer = new ethers.Wallet(process.env.Wallet, provider);

// Get contract ABI and address
const abi = contract.abi;
const contractAddress = process.env.CONTRACT_ADDRESS;


// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer);

// Get the NFT Metadata IPES URL
const tokenUri = `https://gateway.pinata.cloud/ipfs/${process.env.HASH}`;

// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT minted! Check it out at: https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT().then(() => process.exit(0)).catch((error) => {
    console.log(error);
    process.exit(1);
});