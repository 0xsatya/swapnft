import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const { deployer } = await getNamedAccounts();
  const admin = deployer;

  let baseRatePerYear = 0;
  let multiplierPerYear = parseEther('0.125');
  let jumpMultiplierPerYear = parseEther('1.75');
  let kink = parseEther('0.7');

  await deploy('JumpRateModelV2', {
    from: deployer,
    args: [baseRatePerYear,
          multiplierPerYear,
          jumpMultiplierPerYear,
          kink,
          admin
    ],
    log: true
  });
};
export default func;
func.tags = ['InterestRate'];
