require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://sepolia.infura.io/v3/a76d2a46d9c041f59d6f26f028c51563",
      accounts: ["33767d3faa80cedc0a262c3f4f206bcec29b7cd8c15c6d7718d5a3588c718ee0"],
    },
  },
  paths: {
    // artifacts: './artifacts',
    sources: "./contracts",
    
  },
};