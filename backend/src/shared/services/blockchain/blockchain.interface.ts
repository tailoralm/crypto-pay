
export interface IBlockchainScan {
  getPrice(): Promise<number>;
  getBalance(account: string): Promise<number>;
  getTokenBalance(account: string, tokenName: string, contract: string): Promise<number>;
  getTransactionByHash(hash: string): Promise<ITransaction>;
  getNumberBlockByTimestamp(timestamp: number): Promise<number>;
  getTransactionListByTimestamp(address: string, start: number, end: number): Promise<ITransaction[]>;
  getTransactionList(address: string, startBlock: number, endBlock: number): Promise<ITransaction[]>;
  getTransactionTokenListByTimestamp(address: string, contract: string, start: number, end: number ): Promise<ITransactionToken[]>;
  getTransactionTokenList( address: string, contract: string, startBlock: number, endBlock: number ): Promise<ITransactionToken[]>
}
export interface ITransaction {
  blockNumber: number;
  timeStamp: number;
  hash: string;
  blockHash: string;
  from: string;
  to: string;
  value: number;
  gas: number;
  gasPrice: number;
  confirmations: number;
}

export interface ITransactionToken extends ITransaction {
  tokenDecimal: number;
  contractAddress: string;
  tokenName: string;
  tokenSymbol: string;
}
