# Swap NFT - It is a swap NFT protocol, forked from Compound, to allow users lend NFTs and earn interest on it.

## Set up

1. Install nvm: https://github.com/nvm-sh/nvm#installing-and-updating
2. Install node: `nvm install 16` (Later versions don't work well with hardhat)
3. Install yarn: `npm install --global yarn`
4. Install packages: `yarn`
5. (Highly recommended) Install the [hardhat shorthand](https://hardhat.org/guides/shorthand.html).

## Testing

The unit test suite can be run with `hh test`.

## Forking Mainnet

1. A mainnet fork can be spun up with `yarn hardhat-fork`.
2. After spinning up the mainnet fork, in another terminal run `hh run scripts/steal_assets.ts --network localhost` to give CryptoPunks and USDC to the first hardhat account.

## Mainnet Contract Deployments
- Comptroller: `0x01a9D451B037d5F2556772d11991380D86810A83`
- CompoundLens: `0xfA6cDA1e6eedBBCC9AC441c2acD6159486B5B883`
- JumpRateModelV2: `0x25D096b209211CAc9D477F83437882eE37F5AbF6`
- bEther: `0x2E35bd135942dD0b303444bEBdCE097d81B9E0f3`
- PriceOracle: `0x68986C46af1c348Dc0Cf2aE30037af57a0A6B36f`
- bUSDC: `0x4F81E4fef63cc01FA4Cc97C78F3F08c29fC9bAD1`
- bPunk: `0x4d5Cab5135271b4F73D5c2071F8a96d4eE5883d3`
