import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {parseEther} from 'ethers/lib/utils';
import {deployName} from './utils';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { execute, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const cEtherAddress = (await get(deployName("CEther"))).address;
  const cUSDCAddress = (await get(deployName("CUSDC"))).address;

  await execute(
    deployName("Comptroller"),
    { from: deployer, log: true },
    "_setBorrowCapGuardian",
    deployer
  );

  await execute(
    deployName("Comptroller"),
    { from: deployer, log: true },
    "_setMarketBorrowCaps",
    [cEtherAddress, cUSDCAddress],
    [parseEther("1000"), "2500000000000"]
  );
};
export default func;
