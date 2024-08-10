/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ComptrollerV3StorageInterface extends utils.Interface {
  functions: {
    "_borrowGuardianPaused()": FunctionFragment;
    "_mintGuardianPaused()": FunctionFragment;
    "accountAssets(address,uint256)": FunctionFragment;
    "admin()": FunctionFragment;
    "allMarkets(uint256)": FunctionFragment;
    "borrowGuardianPaused(address)": FunctionFragment;
    "closeFactorMantissa()": FunctionFragment;
    "compAccrued(address)": FunctionFragment;
    "compBorrowState(address)": FunctionFragment;
    "compBorrowerIndex(address,address)": FunctionFragment;
    "compRate()": FunctionFragment;
    "compSpeeds(address)": FunctionFragment;
    "compSupplierIndex(address,address)": FunctionFragment;
    "compSupplyState(address)": FunctionFragment;
    "comptrollerImplementation()": FunctionFragment;
    "liquidationIncentiveMantissa()": FunctionFragment;
    "markets(address)": FunctionFragment;
    "maxAssets()": FunctionFragment;
    "mintGuardianPaused(address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "pauseGuardian()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "pendingComptrollerImplementation()": FunctionFragment;
    "seizeGuardianPaused()": FunctionFragment;
    "transferGuardianPaused()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_borrowGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_mintGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accountAssets",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allMarkets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowGuardianPaused",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "closeFactorMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "compAccrued", values: [string]): string;
  encodeFunctionData(
    functionFragment: "compBorrowState",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "compBorrowerIndex",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "compRate", values?: undefined): string;
  encodeFunctionData(functionFragment: "compSpeeds", values: [string]): string;
  encodeFunctionData(
    functionFragment: "compSupplierIndex",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "compSupplyState",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "comptrollerImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationIncentiveMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "markets", values: [string]): string;
  encodeFunctionData(functionFragment: "maxAssets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintGuardianPaused",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pauseGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingComptrollerImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seizeGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferGuardianPaused",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_borrowGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_mintGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allMarkets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeFactorMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compAccrued",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compBorrowState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compBorrowerIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "compSpeeds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "compSupplierIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compSupplyState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "comptrollerImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationIncentiveMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxAssets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingComptrollerImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seizeGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferGuardianPaused",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ComptrollerV3Storage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComptrollerV3StorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _borrowGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    _mintGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    accountAssets(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    allMarkets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    borrowGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    compAccrued(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    compBorrowState(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

    compBorrowerIndex(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    compRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    compSpeeds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    compSupplierIndex(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    compSupplyState(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;

    liquidationIncentiveMantissa(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    markets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, boolean] & {
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
        isComped: boolean;
      }
    >;

    maxAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    pauseGuardian(overrides?: CallOverrides): Promise<[string]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<[string]>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    transferGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;
  };

  _borrowGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  _mintGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  accountAssets(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  admin(overrides?: CallOverrides): Promise<string>;

  allMarkets(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  borrowGuardianPaused(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  compAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  compBorrowState(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

  compBorrowerIndex(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  compRate(overrides?: CallOverrides): Promise<BigNumber>;

  compSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  compSupplierIndex(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  compSupplyState(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

  comptrollerImplementation(overrides?: CallOverrides): Promise<string>;

  liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  markets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, boolean] & {
      isListed: boolean;
      collateralFactorMantissa: BigNumber;
      isComped: boolean;
    }
  >;

  maxAssets(overrides?: CallOverrides): Promise<BigNumber>;

  mintGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  oracle(overrides?: CallOverrides): Promise<string>;

  pauseGuardian(overrides?: CallOverrides): Promise<string>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;

  seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  transferGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    _borrowGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    _mintGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    accountAssets(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    admin(overrides?: CallOverrides): Promise<string>;

    allMarkets(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    borrowGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    compAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    compBorrowState(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

    compBorrowerIndex(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compRate(overrides?: CallOverrides): Promise<BigNumber>;

    compSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    compSupplierIndex(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compSupplyState(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;

    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    markets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, boolean] & {
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
        isComped: boolean;
      }
    >;

    maxAssets(overrides?: CallOverrides): Promise<BigNumber>;

    mintGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oracle(overrides?: CallOverrides): Promise<string>;

    pauseGuardian(overrides?: CallOverrides): Promise<string>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<string>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    transferGuardianPaused(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    _borrowGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    _mintGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    accountAssets(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    allMarkets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    compAccrued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    compBorrowState(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compBorrowerIndex(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compRate(overrides?: CallOverrides): Promise<BigNumber>;

    compSpeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    compSupplierIndex(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    compSupplyState(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    markets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxAssets(overrides?: CallOverrides): Promise<BigNumber>;

    mintGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    pauseGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    transferGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _borrowGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _mintGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accountAssets(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allMarkets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeFactorMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compAccrued(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compBorrowState(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compBorrowerIndex(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    compSpeeds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compSupplierIndex(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    compSupplyState(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    comptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidationIncentiveMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    markets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauseGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    seizeGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
