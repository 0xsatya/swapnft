/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ComptrollerG1, ComptrollerG1Interface } from "../ComptrollerG1";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "error",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "info",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "detail",
        type: "uint256",
      },
    ],
    name: "Failure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MarketEntered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MarketExited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "MarketListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCloseFactorMantissa",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCloseFactorMantissa",
        type: "uint256",
      },
    ],
    name: "NewCloseFactor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCollateralFactorMantissa",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCollateralFactorMantissa",
        type: "uint256",
      },
    ],
    name: "NewCollateralFactor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldLiquidationIncentiveMantissa",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newLiquidationIncentiveMantissa",
        type: "uint256",
      },
    ],
    name: "NewLiquidationIncentive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMaxAssets",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMaxAssets",
        type: "uint256",
      },
    ],
    name: "NewMaxAssets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract PriceOracle",
        name: "oldPriceOracle",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract PriceOracle",
        name: "newPriceOracle",
        type: "address",
      },
    ],
    name: "NewPriceOracle",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract Unitroller",
        name: "unitroller",
        type: "address",
      },
      {
        internalType: "contract PriceOracle",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_closeFactorMantissa",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxAssets",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "reinitializing",
        type: "bool",
      },
    ],
    name: "_become",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "newCloseFactorMantissa",
        type: "uint256",
      },
    ],
    name: "_setCloseFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newCollateralFactorMantissa",
        type: "uint256",
      },
    ],
    name: "_setCollateralFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "newLiquidationIncentiveMantissa",
        type: "uint256",
      },
    ],
    name: "_setLiquidationIncentive",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "newMaxAssets",
        type: "uint256",
      },
    ],
    name: "_setMaxAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract PriceOracle",
        name: "newOracle",
        type: "address",
      },
    ],
    name: "_setPriceOracle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "_supportMarket",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accountAssets",
    outputs: [
      {
        internalType: "contract CToken",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "borrowAllowed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "borrowVerify",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "contract CToken",
        name: "cToken",
        type: "address",
      },
    ],
    name: "checkMembership",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "closeFactorMantissa",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "comptrollerImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address[]",
        name: "cTokens",
        type: "address[]",
      },
    ],
    name: "enterMarkets",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cTokenAddress",
        type: "address",
      },
    ],
    name: "exitMarket",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAssetsIn",
    outputs: [
      {
        internalType: "contract CToken[]",
        name: "",
        type: "address[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isComptroller",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cTokenBorrowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenCollateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "liquidateBorrowAllowed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cTokenBorrowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenCollateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seizeTokens",
        type: "uint256",
      },
    ],
    name: "liquidateBorrowVerify",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "cTokenBorrowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenCollateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "liquidateCalculateSeizeNfts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "cTokenBorrowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenCollateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "liquidateCalculateSeizeTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "liquidationIncentiveMantissa",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "bool",
        name: "isListed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "collateralFactorMantissa",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "maxAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "mintAllowed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "mintTokens",
        type: "uint256",
      },
    ],
    name: "mintVerify",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract PriceOracle",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "pendingComptrollerImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "redeemer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redeemTokens",
        type: "uint256",
      },
    ],
    name: "redeemAllowed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "redeemer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "redeemTokens",
        type: "uint256",
      },
    ],
    name: "redeemVerify",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
    ],
    name: "repayBorrowAllowed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "repayAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowerIndex",
        type: "uint256",
      },
    ],
    name: "repayBorrowVerify",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cTokenCollateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenBorrowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "seizeTokens",
        type: "uint256",
      },
    ],
    name: "seizeAllowed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cTokenCollateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "cTokenBorrowed",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "seizeTokens",
        type: "uint256",
      },
    ],
    name: "seizeVerify",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "transferTokens",
        type: "uint256",
      },
    ],
    name: "transferAllowed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "transferTokens",
        type: "uint256",
      },
    ],
    name: "transferVerify",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ComptrollerG1__factory {
  static readonly abi = _abi;
  static createInterface(): ComptrollerG1Interface {
    return new utils.Interface(_abi) as ComptrollerG1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerG1 {
    return new Contract(address, _abi, signerOrProvider) as ComptrollerG1;
  }
}
