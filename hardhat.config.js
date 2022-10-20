/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
const { API_URL, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/MqOgl0NpqSWxXBaydKjEl0MUXZ-YMLVT',
      accounts: [`0xdc66ade0ba736acbb794cc5165c97394ea27e86386665ca6df434986d1e1bb35`]
    }
  }
};
