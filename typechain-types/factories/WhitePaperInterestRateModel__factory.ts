/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WhitePaperInterestRateModel,
  WhitePaperInterestRateModelInterface,
} from "../WhitePaperInterestRateModel";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "baseRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multiplierPerYear",
        type: "uint256",
      },
    ],
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
        name: "baseRatePerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "multiplierPerBlock",
        type: "uint256",
      },
    ],
    name: "NewInterestParams",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "baseRatePerBlock",
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
    name: "blocksPerYear",
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
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "getBorrowRate",
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
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactorMantissa",
        type: "uint256",
      },
    ],
    name: "getSupplyRate",
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
    name: "isInterestRateModel",
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
    name: "multiplierPerBlock",
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
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "utilizationRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106da3803806106da8339818101604052604081101561003357600080fd5b508051602091820151909161005690839062201480906102ee6100bc821b17901c565b60015561007181622014806100bc602090811b6102ee17901c565b600081905560015460408051918252602082019290925281517ff35fa19c15e9ba782633a5df62a98b20217151addc68e3ff2cd623a48d37ec27929181900390910190a150506101ad565b600061010483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061010b60201b60201c565b9392505050565b600081836101975760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561015c578181015183820152602001610144565b50505050905090810190601f1680156101895780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816101a357fe5b0495945050505050565b61051e806101bc6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638726bb891161005b5780638726bb8914610102578063a385fb961461010a578063b816881614610112578063f14039de146101415761007d565b806315f24053146100825780632191f92a146100bd5780636e71e2d8146100d9575b600080fd5b6100ab6004803603606081101561009857600080fd5b5080359060208101359060400135610149565b60408051918252519081900360200190f35b6100c56101a3565b604080519115158252519081900360200190f35b6100ab600480360360608110156100ef57600080fd5b50803590602081013590604001356101a8565b6100ab6101fa565b6100ab610200565b6100ab6004803603608081101561012857600080fd5b5080359060208101359060408101359060600135610207565b6100ab610286565b6000806101578585856101a8565b905061019860015461018c670de0b6b3a76400006101806000548661028c90919063ffffffff16565b9063ffffffff6102ee16565b9063ffffffff61033016565b9150505b9392505050565b600181565b6000826101b75750600061019c565b6101f26101da836101ce878763ffffffff61033016565b9063ffffffff61038a16565b61018085670de0b6b3a764000063ffffffff61028c16565b949350505050565b60005481565b6220148081565b600080610222670de0b6b3a76400008463ffffffff61038a16565b90506000610231878787610149565b90506000610251670de0b6b3a7640000610180848663ffffffff61028c16565b905061027a670de0b6b3a76400006101808361026e8c8c8c6101a8565b9063ffffffff61028c16565b98975050505050505050565b60015481565b60008261029b575060006102e8565b828202828482816102a857fe5b04146102e55760405162461bcd60e51b81526004018080602001828103825260218152602001806104c96021913960400191505060405180910390fd5b90505b92915050565b60006102e583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506103cc565b6000828201838110156102e5576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60006102e583836040518060400160405280601f81526020017f536166654d6174683a207375627472616374696f6e20756e646572666c6f770081525061046e565b600081836104585760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561041d578181015183820152602001610405565b50505050905090810190601f16801561044a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161046457fe5b0495945050505050565b600081848411156104c05760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561041d578181015183820152602001610405565b50505090039056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a265627a7a7231582092b1c738ce267719ac08ca45dc4880e4714d22473fc8a0b193dae3a2f1fcdd6a64736f6c63430005100032";

type WhitePaperInterestRateModelConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WhitePaperInterestRateModelConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WhitePaperInterestRateModel__factory extends ContractFactory {
  constructor(...args: WhitePaperInterestRateModelConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WhitePaperInterestRateModel> {
    return super.deploy(
      baseRatePerYear,
      multiplierPerYear,
      overrides || {}
    ) as Promise<WhitePaperInterestRateModel>;
  }
  getDeployTransaction(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      baseRatePerYear,
      multiplierPerYear,
      overrides || {}
    );
  }
  attach(address: string): WhitePaperInterestRateModel {
    return super.attach(address) as WhitePaperInterestRateModel;
  }
  connect(signer: Signer): WhitePaperInterestRateModel__factory {
    return super.connect(signer) as WhitePaperInterestRateModel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitePaperInterestRateModelInterface {
    return new utils.Interface(_abi) as WhitePaperInterestRateModelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WhitePaperInterestRateModel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as WhitePaperInterestRateModel;
  }
}
