import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {deployName, CLOSE_FACTOR, LIQUIDATION_INCENTIVE} from './utils';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment, id?: string) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy, execute, get, save} = deployments;

  const {deployer} = await getNamedAccounts();

  const comptrollerImpl = await deploy(deployName('Comptroller_Implementation'), {
    from: deployer,
    contract: 'Comptroller',
    log: true
  });

  const unitrollerAddress = (await get(deployName('Unitroller'))).address;
  // update Comptroller ABI
  await save(deployName('Comptroller'), {
    abi: comptrollerImpl.abi,
    address: unitrollerAddress
  });

  if (comptrollerImpl.newlyDeployed) {
    await execute(deployName('Unitroller'), { from: deployer }, '_setPendingImplementation', comptrollerImpl.address);
    await execute(deployName('Comptroller_Implementation'), { from: deployer }, '_become', unitrollerAddress);
    const closeFactor = CLOSE_FACTOR;
    const liquidationIncentive = LIQUIDATION_INCENTIVE;

    await execute(deployName('Comptroller'), { from: deployer, log: true }, '_setCloseFactor', closeFactor);
    await execute(deployName('Comptroller'), { from: deployer, log: true }, '_setLiquidationIncentive', liquidationIncentive);
  }
};
export default func;
