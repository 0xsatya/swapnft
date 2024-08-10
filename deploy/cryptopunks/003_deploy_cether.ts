import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {parseEther} from 'ethers/lib/utils';
import {deployName, CETHER_NAME, CETHER_SYMBOL} from './utils';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, execute } = deployments;

  const { deployer } = await getNamedAccounts();

  const interestRateAddress = (await deployments.get("JumpRateModelV2")).address;
  const comptrollerAddress = (await deployments.get(deployName("Comptroller"))).address;
  const deployResult = await deploy(deployName("CEther"), {
    from: deployer,
    contract: "CEther",
    log: true,
    args: [
      comptrollerAddress,
      interestRateAddress,
      parseEther("10000000000"),
      CETHER_NAME,
      CETHER_SYMBOL,
      8,
      deployer,
    ],
  });

  if (deployResult.newlyDeployed) {
    await execute(deployName('Comptroller'), { from: deployer, log: true }, '_supportMarket', deployResult.address);
  }
};
export default func;
func.dependencies = ['InterestRate'];
