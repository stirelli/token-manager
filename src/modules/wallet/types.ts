import { ethers } from 'ethers';

export type JsonRpcSigner = ethers.providers.JsonRpcSigner;
export type Web3Provider = ethers.providers.Web3Provider;
export type Contract = ethers.Contract;
export interface Wallet {
  account: string;
  network: any;
  balance: any;
}
