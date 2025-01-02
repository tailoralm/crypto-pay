import WalletStorage from "../../../shared/storage/tables/wallet.storage";
import * as schedule from "node-schedule";
import EtherScanService from "../../../shared/services/blockchain/etherscan/etherscan";
import PaymentIntentionStorage, {
    IPaymentIntentionStorage
} from "../../../shared/storage/tables/payment-intention.storage";
import {ITransaction} from "../../../shared/services/blockchain/blockchain.interface";

export default class SearchPaymentsService {
    constructor(private walletStorage: WalletStorage, private paymentIntentionStorage: PaymentIntentionStorage, private etherScanService: EtherScanService) {

    }

    run(): Promise<schedule.Job> {
        return schedule.scheduleJob('*/15 * * * *', () => {
            return this.createJob();
        });
    }

    async createJob(){
        const nowTimestamp = (new Date()).getDate();
        const nowMinesTwenty = nowTimestamp - 1200000;
        const walletsToObserve = await this.walletStorage.getWalletsToObserve();

        for (let wallet of walletsToObserve){
            const paymentIntentionPending = await this.paymentIntentionStorage.getIsPending(wallet.id);
            if (paymentIntentionPending.length === 0) continue;

            let transactions: ITransaction[] = [];
            if(wallet.chain === 'ETH')
                transactions = await this.etherScanService.getTransactionListByTimestamp(wallet.walletHash, nowMinesTwenty, nowTimestamp);

            if (transactions.length === 0) continue;

            console.log(transactions);

            for (let transaction of transactions){
                for (let paymentIntention of paymentIntentionPending){
                    console.log(transaction);
                    console.log(paymentIntention);
                    if (transaction.value === paymentIntention.value){ //TODO: Check if the value format is the same
                        await this.paymentIntentionStorage.setAsPaid(paymentIntention.id);
                    }
                }
            }
        }
    }

}
