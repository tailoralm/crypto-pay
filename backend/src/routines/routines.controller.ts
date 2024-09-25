import * as schedule from "node-schedule";
import WalletStorage from "../shared/storage/tables/wallet.storage";
import SearchPaymentsService from "./services/search-payments.service";
import EtherScanService from "../shared/services/blockchain/scan/etherscan";
import PaymentIntentionStorage from "../shared/storage/tables/payment-intention.storage";
import MoralisService from "../shared/services/blockchain/moralis/moralis.service";
import BlockchainScanFactory from "../shared/services/blockchain/blockchain-scan.factory";

export default class RoutinesController {
  private jobs: schedule.Job[] = [];
  private walletStorage: WalletStorage;
  private paymentIntention: PaymentIntentionStorage;
  private moralisEtherService: MoralisService;
  // private searchPayments: SearchPaymentsService;


  constructor() {
    this.walletStorage = new WalletStorage();
    this.paymentIntention = new PaymentIntentionStorage();
    this.moralisEtherService = BlockchainScanFactory.createMoralisETHService();
    this.createRoutines().then(() => console.log('Routines Running!'));
  }

    async createRoutines() {
      const searchPayments = new SearchPaymentsService(this.walletStorage, this.paymentIntention, this.moralisEtherService);
      this.jobs.push(await searchPayments.run());
    }



  cancelAllJobs() {
    for (const job of this.jobs) {
      job.cancel();
    }
  }
}
