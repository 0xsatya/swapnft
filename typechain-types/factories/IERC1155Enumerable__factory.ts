/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC1155Enumerable,
  IERC1155EnumerableInterface,
} from "../IERC1155Enumerable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "tokensByAccount",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IERC1155Enumerable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155EnumerableInterface {
    return new utils.Interface(_abi) as IERC1155EnumerableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155Enumerable {
    return new Contract(address, _abi, signerOrProvider) as IERC1155Enumerable;
  }
}
