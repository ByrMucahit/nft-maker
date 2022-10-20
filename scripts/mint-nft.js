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
const signer = new ethers.Wallet("dc66ade0ba736acbb794cc5165c97394ea27e86386665ca6df434986d1e1bb35", provider);

// Get contract ABI and address
const abi = contract.abi;
const contractAddress = '0x530cd7bD9755149F9C45ADC5790AdeA48C9B6240'


// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer);

// Get the NFT Metadata IPES URL
const tokenUri = "https://gateway.pinata.cloud/ipfs/Qmeg5bHjeVK6TWdiwSVr4ZXrk4WgDwB9qi3EJp6g5g2YTz";

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