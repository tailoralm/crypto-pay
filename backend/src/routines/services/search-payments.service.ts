import WalletStorage, { IWalletStorage } from "../../shared/storage/tables/wallet.storage";
import * as schedule from "node-schedule";
import EtherScanService from "../../shared/services/blockchain/scan/etherscan";
import PaymentIntentionStorage, {
    IPaymentIntentionStorage
} from "../../shared/storage/tables/payment-intention.storage";
import {ITransaction} from "../../shared/services/blockchain/blockchain.interface";
import MoralisService from "../../shared/services/blockchain/moralis/moralis.service";
import {ETokenContractsETH, TokenContracts} from "../../shared/services/blockchain/tokensContracts.enum";
import {Erc20Transaction} from "@moralisweb3/common-evm-utils";

export default class SearchPaymentsService {
    // private walletsToObserve: Promise<IWalletStorage[]>;
    // private paymentIntentionOpen: Promise<IPaymentIntentionStorage[]>
    constructor(private walletStorage: WalletStorage, private paymentIntentionStorage: PaymentIntentionStorage, private moralisEtherService: MoralisService) {

    }

    run(): Promise<schedule.Job> {
        return schedule.scheduleJob('*/15 * * * *', () => {
            return this.createJob();
        });
    }

    async createJob(){
        const endTime = new Date();
        const startTime = new Date(endTime.getTime() - 60 * 60000) //1h ago
        const walletsToObserve = await this.walletStorage.getWalletsToObserve();

        for (let wallet of walletsToObserve){
            const paymentIntentionPending = await this.paymentIntentionStorage.getIsPending(wallet.id);
            if (paymentIntentionPending.length === 0) continue;

            let transactions: Erc20Transaction[] = [];
            if(wallet.chain === 'ETH') {
                const contracts = Object.values(ETokenContractsETH);
                transactions = await this.moralisEtherService.getTransactionTokenList(wallet.walletHash, contracts, startTime, endTime);
            }

            if (transactions.length === 0) continue;

            console.log(transactions);

            for (let transaction of transactions){
                for (let paymentIntention of paymentIntentionPending){
                    if (transaction.value === paymentIntention.value){ //TODO: check if the transaction is the same type
                        await this.paymentIntentionStorage.setAsPaid(paymentIntention.id);
                    }
                }
            }
        }
    }

}
