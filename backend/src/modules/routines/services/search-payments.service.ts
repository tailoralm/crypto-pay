import WalletStorage, { IWalletStorage } from "../../../shared/storage/tables/wallet.storage";
import * as schedule from "node-schedule";
import EtherScanService from "../../../shared/services/blockchain/etherscan/etherscan";
import PaymentIntentionStorage, {
    IPaymentIntentionStorage
} from "../../../shared/storage/tables/payment-intention.storage";

export default class SearchPaymentsService {
    private walletsToObserve: Promise<IWalletStorage[]>;
    private paymentIntentionOpen: Promise<IPaymentIntentionStorage[]>
    constructor(private walletStorage: WalletStorage, private paymentIntentionService: PaymentIntentionStorage, private etherScanService: EtherScanService) {

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
            const transactions = await this.etherScanService.getTransactionListByTimestamp(wallet.walletHash, nowMinesTwenty, nowTimestamp);
            // check this transactions with the payment intention
        }
    }

}
