/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ComptrollerErrorReporterInterface extends utils.Interface {
  functions: {};

  events: {
    "Failure(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Failure"): EventFragment;
}

export type FailureEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { error: BigNumber; info: BigNumber; detail: BigNumber }
>;

export type FailureEventFilter = TypedEventFilter<FailureEvent>;

export interface ComptrollerErrorReporter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComptrollerErrorReporterInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "Failure(uint256,uint256,uint256)"(
      error?: null,
      info?: null,
      detail?: null
    ): FailureEventFilter;
    Failure(error?: null, info?: null, detail?: null): FailureEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
