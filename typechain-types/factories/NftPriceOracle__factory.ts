/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  NftPriceOracle,
  NftPriceOracleInterface,
} from "../NftPriceOracle";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "contract CNftInterface",
        name: "cNft",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
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
    name: "isNftPriceOracle",
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
];

export class NftPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): NftPriceOracleInterface {
    return new utils.Interface(_abi) as NftPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NftPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as NftPriceOracle;
  }
}
