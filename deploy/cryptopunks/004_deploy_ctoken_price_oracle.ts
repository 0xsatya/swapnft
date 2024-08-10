import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {deployName} from './utils';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, execute, get } = deployments;

  const { deployer } = await getNamedAccounts();

  const deployResult = await deploy(deployName('PriceOracle'), {
    from: deployer,
    contract: 'PriceOracleImplementation',
    log: true,
    args: [
      (await get(deployName('CEther'))).address,
    ],
  });
  await execute(deployName('Comptroller'), { from: deployer, log: true }, '_setPriceOracle', deployResult.address);
};
export default func;
