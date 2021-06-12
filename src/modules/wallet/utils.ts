import { ethers } from 'ethers';
import { Wallet, Web3Provider } from './types';
import Token from '../../contracts/Token.json';

// Token Address deployed in Ropsten
const tokenAddress = '0xB8Fa2670c93E748c451dfD108C58f36780BDFE89';

export async function createWallet(): Promise<Wallet> {
  const provider: Web3Provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const [account] = await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();

  // Create a contract based on the dummy token
  const contract = new ethers.Contract(tokenAddress, Token.abi, signer);

  // Get dummy token balance
  const balance = await contract.balanceOf(account);

  // Get network
  const network = await provider.getNetwork();

  return {
    account,
    network,
    balance
  };
}

export async function transferToken(address: string, amount: number) {
  const provider: Web3Provider = new ethers.providers.Web3Provider((window as any).ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
  const transaction = await contract.transfer(address, amount);
  await transaction.wait();
}
