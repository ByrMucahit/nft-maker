const { ethers } = require("hardhat");

async function main() {

    const MyNFT = await ethers.getContractFactory("MyNft");

    const myNft = await MyNFT.deploy();

    console.log("Contract deployed to address:", myNft.address);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});