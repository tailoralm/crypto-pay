import * as schedule from "node-schedule";
import WalletStorage from "../shared/storage/tables/wallet.storage";
import SearchPaymentsService from "./services/search-payments.service";
import EtherScanService from "../shared/services/blockchain/scan/etherscan";
import PaymentIntentionStorage from "../shared/storage/tables/payment-intention.storage";

export default class RoutinesController {
  private jobs: schedule.Job[] = [];
  private walletStorage: WalletStorage;
  private paymentIntention: PaymentIntentionStorage;
  private etherScanService: EtherScanService;
  // private searchPayments: SearchPaymentsService;


  constructor() {
    this.walletStorage = new WalletStorage();
    this.paymentIntention = new PaymentIntentionStorage();
    this.etherScanService = new EtherScanService();
    this.createRoutines().then(() => console.log('Routines Running!'));
  }

    async createRoutines() {
      const searchPayments = new SearchPaymentsService(this.walletStorage, this.paymentIntention, this.etherScanService);
      this.jobs.push(await searchPayments.run());
    }



  cancelAllJobs() {
    for (const job of this.jobs) {
      job.cancel();
    }
  }
}
