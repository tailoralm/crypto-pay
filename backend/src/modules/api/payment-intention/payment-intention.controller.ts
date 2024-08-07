import PaymentIntentnionStorage, {IPaymentIntentionStorage} from "../../../shared/storage/tables/payment-intention.storage";

export default class PaymentIntentionController {
    private paymentIntentnionStorage: PaymentIntentnionStorage;
    constructor(private userId: number) {
        this.paymentIntentnionStorage = new PaymentIntentnionStorage();
    }

    get(id: number) {
        return this.paymentIntentnionStorage.selectById(id);
    }

    getAll(id?: number) {
        return this.paymentIntentnionStorage.selectByUserId(this.userId);
    }

    insert(data: IPaymentIntentionStorage) {
        return this.paymentIntentnionStorage.insert(data);
    }

    update(id: number, data: IPaymentIntentionStorage) {
        return this.paymentIntentnionStorage.updateById(id, data);
    }

    delete(id: number) {
        return this.paymentIntentnionStorage.updateById(id, { status: 'CANCELED' });
    }
}
