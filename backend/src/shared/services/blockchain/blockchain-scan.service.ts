const API_KEY = 'E6Q1G219Q2GBDF7HG12S43QENFMJI3FF39';
import Axios from 'axios';
import {IBlockchainScan, ITransaction, ITransactionToken} from './blockchain.interface';

export default class BlockchainScanService implements IBlockchainScan {

    constructor(private API_KEY: string, private BASE_URL: string) {

    }

    async getPrice(): Promise<number> {
        const response = api.stats.ethprice();
        return response.result;
    }

    async getBalance(account: string): Promise<number> {
        const response = await api.account.balance(account);
        return response.result;
    }

    async getTokenBalance(account: string, tokenName: string, contract: string): Promise<number> {
        const response = await api.account.tokenbalance(account, tokenName, contract);
        return response.result;
    }

    async getTransactionByHash(hash: string): Promise<ITransaction> {
        const response = api.proxy.eth_getTransactionByHash(hash);
        return response.result;
    }

    async getNumberBlockByTimestamp(timestamp: number): Promise<number> {
        const unixTimestamp = parseInt((timestamp / 1000).toFixed(0));
        return Axios.get(
            `https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${unixTimestamp}&closest=before&apikey=${API_KEY}`
        ).then(response => response.data.result);
    }

    async getTransactionListByTimestamp(address: string, start: number, end: number): Promise<ITransaction[]> {
        const startBlock = await this.getNumberBlockByTimestamp(start);
        const endBlock = await this.getNumberBlockByTimestamp(end);
        return await this.getTransactionList(address, startBlock, endBlock);
    }

    async getTransactionList(address: string, startBlock: number, endBlock: number): Promise<ITransaction[]> {
        const response = await api.account.txlist(address, startBlock, endBlock);
        const result = response.result.map((result: ITransaction) => {
            return {
                ...result,
                value: result.value / 1000000000000000000,
            };
        });
        return result;
    }

    async getTransactionTokenListByTimestamp(
        address: string,
        contract: string,
        start: number,
        end: number
    ): Promise<ITransactionToken[]> {
        const startBlock = await this.getNumberBlockByTimestamp(start);
        const endBlock = await this.getNumberBlockByTimestamp(end);
        return await this.getTransactionTokenList(address, contract, startBlock, endBlock);
    }

    async getTransactionTokenList(
        address: string,
        contract: string,
        startBlock: number,
        endBlock: number
    ): Promise<ITransactionToken[]> {
        const response = await api.account.tokentx(address, contract, startBlock, endBlock);
        const result = response.result.map((result: ITransactionToken) => {
            return {
                ...result,
                value: result.value / Math.pow(10, result.tokenDecimal || 0),
            };
        });
        return result;
    }
}
