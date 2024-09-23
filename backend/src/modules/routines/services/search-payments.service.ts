import WalletStorage, { IWalletStorage } from "../../../shared/storage/tables/wallet.storage";
import * as schedule from "node-schedule";
import EtherScanService from "../../../shared/services/blockchain/scan/etherscan";
import PaymentIntentionStorage, {
    IPaymentIntentionStorage
} from "../../../shared/storage/tables/payment-intention.storage";
import {ITransaction} from "../../../shared/services/blockchain/blockchain.interface";

export default class SearchPaymentsService {
    private walletsToObserve: Promise<IWalletStorage[]>;
    private paymentIntentionOpen: Promise<IPaymentIntentionStorage[]>
    constructor(private walletStorage: WalletStorage, private paymentIntentionStorage: PaymentIntentionStorage, private etherScanService: EtherScanService) {

    }

    run(): Promise<schedule.Job> {
        return schedule.scheduleJob('', () => {
            this.walletsToObserve = this.walletStorage.getWalletsToObserve();
            return this.createJob();
        });
    }

    async createJob(){
        const nowTimestamp = (new Date()).getDate();
        const nowMinesTwenty = nowTimestamp - 1200000;
        const walletsToObserve = await this.walletsToObserve;

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
                    if (transaction.value === paymentIntention.value){
                        await this.paymentIntentionStorage.setAsPaid(paymentIntention.id);
                    }
                }
            }
        }
    }

}
