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
  JumpRateModelV2,
  JumpRateModelV2Interface,
} from "../JumpRateModelV2";

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
      {
        internalType: "uint256",
        name: "jumpMultiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "kink_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "jumpMultiplierPerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "kink",
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
    name: "jumpMultiplierPerBlock",
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
    name: "kink",
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
    inputs: [],
    name: "owner",
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
        internalType: "uint256",
        name: "baseRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jumpMultiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "kink_",
        type: "uint256",
      },
    ],
    name: "updateJumpRateModel",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50604051610a62380380610a62833981810160405260a081101561003357600080fd5b508051602082015160408301516060840151608090940151600080546001600160a01b0319166001600160a01b03831617905592939192909190848484848461007e8585858561008d565b505050505050505050506102bc565b6100a7622014808561017060201b6105bc1790919060201c565b6002556100f66100c562201480836101c1602090811b61056317901c565b6100e4670de0b6b3a7640000866101c160201b6105631790919060201c565b61017060201b6105bc1790919060201c565b6001556101118262201480610170602090811b6105bc17901c565b60038190556004829055600254600154604080519283526020830191909152818101929092526060810183905290517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d9181900360800190a150505050565b60006101b883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061021a60201b60201c565b90505b92915050565b6000826101d0575060006101bb565b828202828482816101dd57fe5b04146101b85760405162461bcd60e51b8152600401808060200182810382526021815260200180610a416021913960400191505060405180910390fd5b600081836102a65760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561026b578181015183820152602001610253565b50505050905090810190601f1680156102985780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816102b257fe5b0495945050505050565b610776806102cb6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80638da5cb5b116100715780638da5cb5b14610167578063a385fb961461018b578063b816881614610193578063b9f9850a146101c2578063f14039de146101ca578063fd2da339146101d2576100a9565b806315f24053146100ae5780632037f3e7146100e95780632191f92a1461011a5780636e71e2d8146101365780638726bb891461015f575b600080fd5b6100d7600480360360608110156100c457600080fd5b50803590602081013590604001356101da565b60408051918252519081900360200190f35b610118600480360360808110156100ff57600080fd5b50803590602081013590604081013590606001356101f1565b005b61012261024c565b604080519115158252519081900360200190f35b6100d76004803603606081101561014c57600080fd5b5080359060208101359060400135610251565b6100d76102a7565b61016f6102ad565b604080516001600160a01b039092168252519081900360200190f35b6100d76102bc565b6100d7600480360360808110156101a957600080fd5b50803590602081013590604081013590606001356102c3565b6100d7610342565b6100d7610348565b6100d761034e565b60006101e7848484610354565b90505b9392505050565b6000546001600160a01b0316331461023a5760405162461bcd60e51b815260040180806020018281038252602681526020018061071c6026913960400191505060405180910390fd5b6102468484848461041d565b50505050565b600181565b600082610260575060006101ea565b6101e761028383610277878763ffffffff6104be16565b9063ffffffff61052116565b61029b85670de0b6b3a764000063ffffffff61056316565b9063ffffffff6105bc16565b60015481565b6000546001600160a01b031681565b6220148081565b6000806102de670de0b6b3a76400008463ffffffff61052116565b905060006102ed878787610354565b9050600061030d670de0b6b3a764000061029b848663ffffffff61056316565b9050610336670de0b6b3a764000061029b8361032a8c8c8c610251565b9063ffffffff61056316565b98975050505050505050565b60035481565b60025481565b60045481565b600080610362858585610251565b905060045481116103a8576103a0600254610394670de0b6b3a764000061029b6001548661056390919063ffffffff16565b9063ffffffff6104be16565b9150506101ea565b60006103d3600254610394670de0b6b3a764000061029b60015460045461056390919063ffffffff16565b905060006103ec6004548461052190919063ffffffff16565b905061041382610394670de0b6b3a764000061029b6003548661056390919063ffffffff16565b93505050506101ea565b610430846220148063ffffffff6105bc16565b600255610449610283622014808363ffffffff61056316565b60015561045f826220148063ffffffff6105bc16565b60038190556004829055600254600154604080519283526020830191909152818101929092526060810183905290517f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d9181900360800190a150505050565b600082820183811015610518576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600061051883836040518060400160405280601f81526020017f536166654d6174683a207375627472616374696f6e20756e646572666c6f77008152506105fe565b6000826105725750600061051b565b8282028284828161057f57fe5b04146105185760405162461bcd60e51b81526004018080602001828103825260218152602001806106fb6021913960400191505060405180910390fd5b600061051883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610695565b6000818484111561068d5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561065257818101518382015260200161063a565b50505050905090810190601f16801561067f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836106e45760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561065257818101518382015260200161063a565b5060008385816106f057fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f776f6e6c7920746865206f776e6572206d61792063616c6c20746869732066756e6374696f6e2ea265627a7a72315820bf3a0985459c7ed60c8d343d4a1b214dbf4c26a030239149fdda36fd7f8585c264736f6c63430005100032536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77";

type JumpRateModelV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JumpRateModelV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JumpRateModelV2__factory extends ContractFactory {
  constructor(...args: JumpRateModelV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    jumpMultiplierPerYear: BigNumberish,
    kink_: BigNumberish,
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JumpRateModelV2> {
    return super.deploy(
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink_,
      owner_,
      overrides || {}
    ) as Promise<JumpRateModelV2>;
  }
  getDeployTransaction(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    jumpMultiplierPerYear: BigNumberish,
    kink_: BigNumberish,
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink_,
      owner_,
      overrides || {}
    );
  }
  attach(address: string): JumpRateModelV2 {
    return super.attach(address) as JumpRateModelV2;
  }
  connect(signer: Signer): JumpRateModelV2__factory {
    return super.connect(signer) as JumpRateModelV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JumpRateModelV2Interface {
    return new utils.Interface(_abi) as JumpRateModelV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JumpRateModelV2 {
    return new Contract(address, _abi, signerOrProvider) as JumpRateModelV2;
  }
}
