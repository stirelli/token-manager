import { ethers } from 'ethers';
import { Wallet } from './types';

export type JsonRpcSigner = ethers.providers.JsonRpcSigner;
type Web3Provider = ethers.providers.Web3Provider;

export async function buildWallet(): Promise<Wallet> {
  const provider: Web3Provider = new ethers.providers.Web3Provider((window as any).ethereum, 'any');
  await provider.send('eth_requestAccounts', []);
  const accounts: string[] = await provider.listAccounts();
  return {
    address: accounts[0]
  };
}
