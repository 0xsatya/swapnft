/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "ERC1155Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Upgradeable__factory>;
    getContractFactory(
      name: "IERC1155MetadataURIUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURIUpgradeable__factory>;
    getContractFactory(
      name: "IERC1155ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "IERC1155Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Upgradeable__factory>;
    getContractFactory(
      name: "ERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "BaseJumpRateModelV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseJumpRateModelV2__factory>;
    getContractFactory(
      name: "CDaiDelegate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CDaiDelegate__factory>;
    getContractFactory(
      name: "DaiJoinLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DaiJoinLike__factory>;
    getContractFactory(
      name: "GemLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GemLike__factory>;
    getContractFactory(
      name: "PotLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PotLike__factory>;
    getContractFactory(
      name: "VatLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VatLike__factory>;
    getContractFactory(
      name: "CErc20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CErc20__factory>;
    getContractFactory(
      name: "CompLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompLike__factory>;
    getContractFactory(
      name: "CErc20Delegate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CErc20Delegate__factory>;
    getContractFactory(
      name: "CErc20Delegator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CErc20Delegator__factory>;
    getContractFactory(
      name: "CErc20Immutable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CErc20Immutable__factory>;
    getContractFactory(
      name: "CEther",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CEther__factory>;
    getContractFactory(
      name: "CNft",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CNft__factory>;
    getContractFactory(
      name: "CNftInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CNftInterface__factory>;
    getContractFactory(
      name: "CNftInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CNftInterface__factory>;
    getContractFactory(
      name: "CNftStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CNftStorage__factory>;
    getContractFactory(
      name: "Comptroller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Comptroller__factory>;
    getContractFactory(
      name: "ComptrollerG1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerG1__factory>;
    getContractFactory(
      name: "ComptrollerG2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerG2__factory>;
    getContractFactory(
      name: "ComptrollerG3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerG3__factory>;
    getContractFactory(
      name: "ComptrollerG4",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerG4__factory>;
    getContractFactory(
      name: "ComptrollerG5",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerG5__factory>;
    getContractFactory(
      name: "ComptrollerG6",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerG6__factory>;
    getContractFactory(
      name: "ComptrollerG7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerG7__factory>;
    getContractFactory(
      name: "ComptrollerInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerInterface__factory>;
    getContractFactory(
      name: "ComptrollerInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerInterface__factory>;
    getContractFactory(
      name: "ComptrollerNftStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerNftStorage__factory>;
    getContractFactory(
      name: "ComptrollerV1Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerV1Storage__factory>;
    getContractFactory(
      name: "ComptrollerV2Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerV2Storage__factory>;
    getContractFactory(
      name: "ComptrollerV3Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerV3Storage__factory>;
    getContractFactory(
      name: "ComptrollerV4Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerV4Storage__factory>;
    getContractFactory(
      name: "ComptrollerV5Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerV5Storage__factory>;
    getContractFactory(
      name: "UnitrollerAdminStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UnitrollerAdminStorage__factory>;
    getContractFactory(
      name: "CToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CToken__factory>;
    getContractFactory(
      name: "CDelegateInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CDelegateInterface__factory>;
    getContractFactory(
      name: "CDelegationStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CDelegationStorage__factory>;
    getContractFactory(
      name: "CDelegatorInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CDelegatorInterface__factory>;
    getContractFactory(
      name: "CErc20Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CErc20Interface__factory>;
    getContractFactory(
      name: "CErc20Storage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CErc20Storage__factory>;
    getContractFactory(
      name: "CTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CTokenInterface__factory>;
    getContractFactory(
      name: "CTokenStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CTokenStorage__factory>;
    getContractFactory(
      name: "DAIInterestRateModelV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAIInterestRateModelV3__factory>;
    getContractFactory(
      name: "JugLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.JugLike__factory>;
    getContractFactory(
      name: "PotLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PotLike__factory>;
    getContractFactory(
      name: "EIP20Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP20Interface__factory>;
    getContractFactory(
      name: "EIP20NonStandardInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP20NonStandardInterface__factory>;
    getContractFactory(
      name: "ERC1155Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Enumerable__factory>;
    getContractFactory(
      name: "IERC1155Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Enumerable__factory>;
    getContractFactory(
      name: "ComptrollerErrorReporter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerErrorReporter__factory>;
    getContractFactory(
      name: "TokenErrorReporter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenErrorReporter__factory>;
    getContractFactory(
      name: "Comp",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Comp__factory>;
    getContractFactory(
      name: "CompInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompInterface__factory>;
    getContractFactory(
      name: "GovernorAlpha",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorAlpha__factory>;
    getContractFactory(
      name: "TimelockInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockInterface__factory>;
    getContractFactory(
      name: "GovernorBravoDelegate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegate__factory>;
    getContractFactory(
      name: "GovernorBravoDelegator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegator__factory>;
    getContractFactory(
      name: "CompInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompInterface__factory>;
    getContractFactory(
      name: "GovernorAlpha",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorAlpha__factory>;
    getContractFactory(
      name: "GovernorBravoDelegateStorageV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegateStorageV1__factory>;
    getContractFactory(
      name: "GovernorBravoDelegatorStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoDelegatorStorage__factory>;
    getContractFactory(
      name: "GovernorBravoEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoEvents__factory>;
    getContractFactory(
      name: "TimelockInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockInterface__factory>;
    getContractFactory(
      name: "InterestRateModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InterestRateModel__factory>;
    getContractFactory(
      name: "JumpRateModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.JumpRateModel__factory>;
    getContractFactory(
      name: "JumpRateModelV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.JumpRateModelV2__factory>;
    getContractFactory(
      name: "LegacyInterestRateModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LegacyInterestRateModel__factory>;
    getContractFactory(
      name: "LegacyJumpRateModelV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LegacyJumpRateModelV2__factory>;
    getContractFactory(
      name: "CompoundLens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CompoundLens__factory>;
    getContractFactory(
      name: "ComptrollerLensInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComptrollerLensInterface__factory>;
    getContractFactory(
      name: "GovernorBravoInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorBravoInterface__factory>;
    getContractFactory(
      name: "Maximillion",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Maximillion__factory>;
    getContractFactory(
      name: "Counter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Counter__factory>;
    getContractFactory(
      name: "CryptoPunksMarket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CryptoPunksMarket__factory>;
    getContractFactory(
      name: "ERC1155Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Mock__factory>;
    getContractFactory(
      name: "ERC20Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Mock__factory>;
    getContractFactory(
      name: "ERC721Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Mock__factory>;
    getContractFactory(
      name: "NftPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NftPriceOracle__factory>;
    getContractFactory(
      name: "PriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceOracle__factory>;
    getContractFactory(
      name: "ChainlinkFeed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkFeed__factory>;
    getContractFactory(
      name: "PriceOracleImplementation",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceOracleImplementation__factory>;
    getContractFactory(
      name: "Reservoir",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Reservoir__factory>;
    getContractFactory(
      name: "SimpleNftPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleNftPriceOracle__factory>;
    getContractFactory(
      name: "SimplePriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimplePriceOracle__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "Unitroller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Unitroller__factory>;
    getContractFactory(
      name: "WhitePaperInterestRateModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WhitePaperInterestRateModel__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "ERC1155Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Upgradeable>;
    getContractAt(
      name: "IERC1155MetadataURIUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURIUpgradeable>;
    getContractAt(
      name: "IERC1155ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155ReceiverUpgradeable>;
    getContractAt(
      name: "IERC1155Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Upgradeable>;
    getContractAt(
      name: "ERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "BaseJumpRateModelV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseJumpRateModelV2>;
    getContractAt(
      name: "CDaiDelegate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CDaiDelegate>;
    getContractAt(
      name: "DaiJoinLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DaiJoinLike>;
    getContractAt(
      name: "GemLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GemLike>;
    getContractAt(
      name: "PotLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PotLike>;
    getContractAt(
      name: "VatLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VatLike>;
    getContractAt(
      name: "CErc20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CErc20>;
    getContractAt(
      name: "CompLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompLike>;
    getContractAt(
      name: "CErc20Delegate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CErc20Delegate>;
    getContractAt(
      name: "CErc20Delegator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CErc20Delegator>;
    getContractAt(
      name: "CErc20Immutable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CErc20Immutable>;
    getContractAt(
      name: "CEther",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CEther>;
    getContractAt(
      name: "CNft",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CNft>;
    getContractAt(
      name: "CNftInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CNftInterface>;
    getContractAt(
      name: "CNftInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CNftInterface>;
    getContractAt(
      name: "CNftStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CNftStorage>;
    getContractAt(
      name: "Comptroller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Comptroller>;
    getContractAt(
      name: "ComptrollerG1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerG1>;
    getContractAt(
      name: "ComptrollerG2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerG2>;
    getContractAt(
      name: "ComptrollerG3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerG3>;
    getContractAt(
      name: "ComptrollerG4",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerG4>;
    getContractAt(
      name: "ComptrollerG5",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerG5>;
    getContractAt(
      name: "ComptrollerG6",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerG6>;
    getContractAt(
      name: "ComptrollerG7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerG7>;
    getContractAt(
      name: "ComptrollerInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerInterface>;
    getContractAt(
      name: "ComptrollerInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerInterface>;
    getContractAt(
      name: "ComptrollerNftStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerNftStorage>;
    getContractAt(
      name: "ComptrollerV1Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerV1Storage>;
    getContractAt(
      name: "ComptrollerV2Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerV2Storage>;
    getContractAt(
      name: "ComptrollerV3Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerV3Storage>;
    getContractAt(
      name: "ComptrollerV4Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerV4Storage>;
    getContractAt(
      name: "ComptrollerV5Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerV5Storage>;
    getContractAt(
      name: "UnitrollerAdminStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UnitrollerAdminStorage>;
    getContractAt(
      name: "CToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CToken>;
    getContractAt(
      name: "CDelegateInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CDelegateInterface>;
    getContractAt(
      name: "CDelegationStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CDelegationStorage>;
    getContractAt(
      name: "CDelegatorInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CDelegatorInterface>;
    getContractAt(
      name: "CErc20Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CErc20Interface>;
    getContractAt(
      name: "CErc20Storage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CErc20Storage>;
    getContractAt(
      name: "CTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CTokenInterface>;
    getContractAt(
      name: "CTokenStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CTokenStorage>;
    getContractAt(
      name: "DAIInterestRateModelV3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAIInterestRateModelV3>;
    getContractAt(
      name: "JugLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.JugLike>;
    getContractAt(
      name: "PotLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PotLike>;
    getContractAt(
      name: "EIP20Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP20Interface>;
    getContractAt(
      name: "EIP20NonStandardInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP20NonStandardInterface>;
    getContractAt(
      name: "ERC1155Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Enumerable>;
    getContractAt(
      name: "IERC1155Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Enumerable>;
    getContractAt(
      name: "ComptrollerErrorReporter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerErrorReporter>;
    getContractAt(
      name: "TokenErrorReporter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenErrorReporter>;
    getContractAt(
      name: "Comp",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Comp>;
    getContractAt(
      name: "CompInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompInterface>;
    getContractAt(
      name: "GovernorAlpha",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorAlpha>;
    getContractAt(
      name: "TimelockInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockInterface>;
    getContractAt(
      name: "GovernorBravoDelegate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoDelegate>;
    getContractAt(
      name: "GovernorBravoDelegator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoDelegator>;
    getContractAt(
      name: "CompInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompInterface>;
    getContractAt(
      name: "GovernorAlpha",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorAlpha>;
    getContractAt(
      name: "GovernorBravoDelegateStorageV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoDelegateStorageV1>;
    getContractAt(
      name: "GovernorBravoDelegatorStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoDelegatorStorage>;
    getContractAt(
      name: "GovernorBravoEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoEvents>;
    getContractAt(
      name: "TimelockInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockInterface>;
    getContractAt(
      name: "InterestRateModel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.InterestRateModel>;
    getContractAt(
      name: "JumpRateModel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.JumpRateModel>;
    getContractAt(
      name: "JumpRateModelV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.JumpRateModelV2>;
    getContractAt(
      name: "LegacyInterestRateModel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LegacyInterestRateModel>;
    getContractAt(
      name: "LegacyJumpRateModelV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LegacyJumpRateModelV2>;
    getContractAt(
      name: "CompoundLens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CompoundLens>;
    getContractAt(
      name: "ComptrollerLensInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ComptrollerLensInterface>;
    getContractAt(
      name: "GovernorBravoInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorBravoInterface>;
    getContractAt(
      name: "Maximillion",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Maximillion>;
    getContractAt(
      name: "Counter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Counter>;
    getContractAt(
      name: "CryptoPunksMarket",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CryptoPunksMarket>;
    getContractAt(
      name: "ERC1155Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Mock>;
    getContractAt(
      name: "ERC20Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Mock>;
    getContractAt(
      name: "ERC721Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Mock>;
    getContractAt(
      name: "NftPriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NftPriceOracle>;
    getContractAt(
      name: "PriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceOracle>;
    getContractAt(
      name: "ChainlinkFeed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkFeed>;
    getContractAt(
      name: "PriceOracleImplementation",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceOracleImplementation>;
    getContractAt(
      name: "Reservoir",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Reservoir>;
    getContractAt(
      name: "SimpleNftPriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleNftPriceOracle>;
    getContractAt(
      name: "SimplePriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimplePriceOracle>;
    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;
    getContractAt(
      name: "Unitroller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Unitroller>;
    getContractAt(
      name: "WhitePaperInterestRateModel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WhitePaperInterestRateModel>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
