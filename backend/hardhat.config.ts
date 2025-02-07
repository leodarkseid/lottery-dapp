import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;



const config: HardhatUserConfig = {
  solidity: "0.8.18",
  //Comment line 13 -22 if you want to test(Lottery)
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: QUICKNODE_HTTP_URL,
      accounts: [ PRIVATE_KEY],

    },
  },
};

export default config;
