/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV3Storage,
  ComptrollerV3StorageInterface,
} from "../ComptrollerV3Storage";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "_borrowGuardianPaused",
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
    name: "_mintGuardianPaused",
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
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allMarkets",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "borrowGuardianPaused",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compAccrued",
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
    name: "compBorrowState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compBorrowerIndex",
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
    name: "compRate",
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
    name: "compSpeeds",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSupplierIndex",
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
    name: "compSupplyState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
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
      {
        internalType: "bool",
        name: "isComped",
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
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintGuardianPaused",
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
    name: "pauseGuardian",
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
    constant: true,
    inputs: [],
    name: "seizeGuardianPaused",
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
    name: "transferGuardianPaused",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50610668806100206000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638e8f294b116100de578063ca0af04311610097578063dcfbc0c711610071578063dcfbc0c714610403578063e6653f3d1461040b578063e875544614610413578063f851a4401461041b57610173565b8063ca0af04314610383578063cc7ebdc4146103b1578063dce15449146103d757610173565b80638e8f294b146102ed57806394b2294b14610335578063aa9007541461033d578063ac0b0bb714610345578063b21be7fd1461034d578063bb82aa5e1461037b57610173565b80636b79c38d116101305780636b79c38d1461021d5780636d154ea51461026b578063731f0c2b146102915780637dc0d1d0146102b757806387f76303146102bf5780638c57804e146102c757610173565b80631d7b33d71461017857806324a3d622146101b057806326782247146101d45780633c94786f146101dc5780634ada90af146101f857806352d84d1e14610200575b600080fd5b61019e6004803603602081101561018e57600080fd5b50356001600160a01b0316610423565b60408051918252519081900360200190f35b6101b8610435565b604080516001600160a01b039092168252519081900360200190f35b6101b8610444565b6101e4610453565b604080519115158252519081900360200190f35b61019e610463565b6101b86004803603602081101561021657600080fd5b5035610469565b6102436004803603602081101561023357600080fd5b50356001600160a01b0316610490565b604080516001600160e01b03909316835263ffffffff90911660208301528051918290030190f35b6101e46004803603602081101561028157600080fd5b50356001600160a01b03166104ba565b6101e4600480360360208110156102a757600080fd5b50356001600160a01b03166104cf565b6101b86104e4565b6101e46104f3565b610243600480360360208110156102dd57600080fd5b50356001600160a01b0316610503565b6103136004803603602081101561030357600080fd5b50356001600160a01b031661052d565b6040805193151584526020840192909252151582820152519081900360600190f35b61019e610553565b61019e610559565b6101e461055f565b61019e6004803603604081101561036357600080fd5b506001600160a01b038135811691602001351661056f565b6101b861058c565b61019e6004803603604081101561039957600080fd5b506001600160a01b038135811691602001351661059b565b61019e600480360360208110156103c757600080fd5b50356001600160a01b03166105b8565b6101b8600480360360408110156103ed57600080fd5b506001600160a01b0381351690602001356105ca565b6101b86105ff565b6101e461060e565b61019e61061e565b6101b8610624565b600f6020526000908152604090205481565b600a546001600160a01b031681565b6001546001600160a01b031681565b600a54600160a01b900460ff1681565b60065481565b600d818154811061047657fe5b6000918252602090912001546001600160a01b0316905081565b6010602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b600c6020526000908152604090205460ff1681565b600b6020526000908152604090205460ff1681565b6004546001600160a01b031681565b600a54600160b01b900460ff1681565b6011602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b60096020526000908152604090208054600182015460039092015460ff91821692911683565b60075481565b600e5481565b600a54600160b81b900460ff1681565b601260209081526000928352604080842090915290825290205481565b6002546001600160a01b031681565b601360209081526000928352604080842090915290825290205481565b60146020526000908152604090205481565b600860205281600052604060002081815481106105e357fe5b6000918252602090912001546001600160a01b03169150829050565b6003546001600160a01b031681565b600a54600160a81b900460ff1681565b60055481565b6000546001600160a01b03168156fea265627a7a72315820961c29d0d3a100cc564aa3a976218877a7b41779bfe8a1d2cabef56d94ac70f764736f6c63430005100032";

type ComptrollerV3StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ComptrollerV3StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ComptrollerV3Storage__factory extends ContractFactory {
  constructor(...args: ComptrollerV3StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ComptrollerV3Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV3Storage>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ComptrollerV3Storage {
    return super.attach(address) as ComptrollerV3Storage;
  }
  connect(signer: Signer): ComptrollerV3Storage__factory {
    return super.connect(signer) as ComptrollerV3Storage__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV3StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV3StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV3Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV3Storage;
  }
}
