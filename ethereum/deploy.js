const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(

  // Replace with your recovery phrase from metamask
  "pen lumber couch inmate defy pupil neglect river mind sweet visa art",

  // Replace with your API endpoint from infura
  "wss://rinkeby.infura.io/ws/v3/0f940dbce5a94f79878c957017f5c9a4"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
