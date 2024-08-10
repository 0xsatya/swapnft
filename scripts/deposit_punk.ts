import { ethers } from "hardhat";

async function main() {
  const user = (await ethers.getSigners())[0].address;
  const signer = (await ethers.getSigners())[0]
  const cPunkAddress = "0x870526b7973b56163a6997bB7C886F5E4EA53638";
  const punk = await ethers.getContractAt(
    "CryptoPunksMarket",
    "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
  );

  console.log('Deployer Address :', signer.address);
  console.log('Balnce of deployer :', await punk.balanceOf(signer.address));
  
  await punk.connect(signer).offerPunkForSaleToAddress(6529, 0, cPunkAddress);
  const cPunk = await ethers.getContractAt("CNft", cPunkAddress);
  await cPunk.connect(signer).mint([6529], [1]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
