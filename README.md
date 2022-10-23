# nft-maker

That's project was developed in development envinronment of Alchemy. That's project have transaction that makes nft over digital objects. This project divided into some required steps:

1. Create an account on alchmey dashboard, then create an app.
![alt text](https://user-images.githubusercontent.com/62469567/197407770-734e7adb-818b-491a-b9f7-3102e18c0066.png)
2. Create Metamask Wallet on the "GOERLI NETWORK". 
![alt text](https://user-images.githubusercontent.com/62469567/197407890-685e848a-9a78-435a-b3d0-7b1a83bf6b90.png)
3. Add GoerliETH from a Faucet
4. Create a Hardhat Project
* Hardhat is a development environment to compile, deploy, test, and debug smart contracts. It helps developers create dApps locally before deploying them to a live chain.

Firstly, We needed to write own contract to created instance of ethereum contract to publish into ethereum envinronment. That contract was developed by using OpenZepplin. OpenZepplin contains the implementation of the ERC721 standard, which our NFT smart contract will inherit. then, that's project connect Metamask and Alchemy Application, so we connected Metamask wallet, an Alchemy Account, and a smart contract. We created envinronment that has information of owner. We added some plugins and dependencies into hardhat config. after then, We writed deployment script for contract then contract wad deployed.

Tech Pack: Metamask, Solidity, Hardhat, Pinata and Alchemy
