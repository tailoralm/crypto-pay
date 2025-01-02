import PaymentIntentnionStorage, {IPaymentIntentionStorage} from "../../../shared/storage/tables/payment-intention.storage";
import WalletStorage from "../../../shared/storage/tables/wallet.storage";

export default class PaymentIntentionController {
    private paymentIntentnionStorage: PaymentIntentnionStorage;
    private walletStorage: WalletStorage;

    constructor(private userId: number) {
        this.paymentIntentnionStorage = new PaymentIntentnionStorage();
        this.walletStorage = new WalletStorage();
    }

    get(id: number) {
        return this.paymentIntentnionStorage.selectByUserAndId(this.userId, id);
    }

    getAll() {
        return this.paymentIntentnionStorage.selectByUserId(this.userId);
    }

    insert(data: IPaymentIntentionStorage) {
        return this.paymentIntentnionStorage.insert(data);
    }

    update(data: IPaymentIntentionStorage) {
        return this.paymentIntentnionStorage.updateById(data.id, data);
    }

    delete(id: number) {
        return this.paymentIntentnionStorage.updateById(id, { status: 'CANCELED' });
    }
}
