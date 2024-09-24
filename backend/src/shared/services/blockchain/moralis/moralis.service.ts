import Moralis from 'moralis';
Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
});

export default class MoralisService {
    constructor(private chain: string) {}

    async getPrice(tokenAddress: string) {
        const response = await Moralis.EvmApi.token.getTokenPrice({
            "chain": this.chain,
            "include": "percent_change",
            "address": tokenAddress,
        });

        return response.result;
    }

    async getBalance(account: string): Promise<number> {
        const response = await Moralis.EvmApi.balance.getNativeBalance({
            address: account,
            chain: '0x1',
        });
        return (Number(response?.result?.balance) || 0) / 1e18;
    }

    async getTokenBalance(account: string, contract: string): Promise<number> {
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
            address: account,
            chain: '0x1',
        });
        const token = response.raw.find((token) => token.token_address === contract);
        return token ? parseFloat(token.balance) / Math.pow(10, token.decimals) : 0; // Handle token balance
    }

    async getTransactionByHash(hash: string) {
        const response = await Moralis.EvmApi.transaction.getTransaction({
            transactionHash: hash,
            chain: '0x1',
        });
        return response.result;
    }

    async getNumberBlockByTimestamp(timestamp: number) {
        const response = await Moralis.EvmApi.block.getDateToBlock({
            date: new Date(timestamp).toISOString(),
            chain: '0x1',
        });
        return response.result;
    }


    async getTransactionList(address: string, startTime: Date, endTime: Date) {
        const response = await Moralis.EvmApi.transaction.getWalletTransactions({
            address: address,
            chain: '0x1',
            order: 'DESC',
            fromDate: startTime,
            toDate: endTime,
        });
        return response.result;
    }


    async getTransactionTokenList(
        address: string,
        contract: string,
        startDate: Date,
        endDate: Date
    ) {
        const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
            address: address,
            chain: '0x1',
            fromDate: startDate.toString(),
            toDate: endDate.toString(),
            contractAddresses: [contract],
        });
        return response.result;
    }
}
