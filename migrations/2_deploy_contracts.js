const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2ERC20 = artifacts.require("UniswapV2ERC20");
const UniswapV2ERC20Test = artifacts.require("UniswapV2ERC20Test"); // Add this line


module.exports = function (deployer, network, accounts) {
  deployer.deploy(UniswapV2ERC20)
    .then(() => deployer.deploy(UniswapV2ERC20Test)) // Deploy the test contract
    .then(() => deployer.deploy(UniswapV2Factory, accounts[0])) // accounts[0] as the fee setter
    .then(() => {console.log("UniswapV2ERC20Test deployed at address:", UniswapV2ERC20Test.address)})
    .then(() => {console.log("UniswapV2ERC20 deployed at address:", UniswapV2ERC20.address)})
    .then(() => {console.log("UniswapV2Factory deployed at address:", UniswapV2Factory.address)});
};
