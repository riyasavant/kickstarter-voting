import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),

    // Replace with your contract address that was deployed
    '0xa8A452f4db23afe330C8a24Dd253040987B339dA'
)

export default instance;