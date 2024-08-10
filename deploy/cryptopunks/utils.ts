import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {parseEther} from 'ethers/lib/utils';

export const deployName = (name: string) => {
  const pathItems = __dirname.split("/");
  return pathItems[pathItems.length - 1] + "_" + name;
};

export const CLOSE_FACTOR = parseEther('1');
export const LIQUIDATION_INCENTIVE = parseEther('1.125');

export const CETHER_NAME = "Bunker Ether (CryptoPunks)";
export const CETHER_SYMBOL = "bPUNK-ETH";

export const CUSDC_NAME = "Bunker USDC (CryptoPunks)";
export const CUSDC_SYMBOL = "bPUNK-USDC";

export const UNDERLYING_NFT = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
export const NFTX_TOKEN_ADDRESS = "0x269616d549d7e8eaa82dfb17028d0b212d11232a";

// Blank deploy function so that hardhat-deploy doesn't complain.
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {}
export default func;
