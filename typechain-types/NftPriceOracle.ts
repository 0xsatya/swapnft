/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface NftPriceOracleInterface extends utils.Interface {
  functions: {
    "getUnderlyingPrice(address)": FunctionFragment;
    "isNftPriceOracle()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getUnderlyingPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isNftPriceOracle",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isNftPriceOracle",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NftPriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NftPriceOracleInterface;

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
    getUnderlyingPrice(
      cNft: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isNftPriceOracle(overrides?: CallOverrides): Promise<[boolean]>;
  };

  getUnderlyingPrice(
    cNft: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isNftPriceOracle(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getUnderlyingPrice(
      cNft: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isNftPriceOracle(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getUnderlyingPrice(
      cNft: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isNftPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getUnderlyingPrice(
      cNft: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isNftPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
