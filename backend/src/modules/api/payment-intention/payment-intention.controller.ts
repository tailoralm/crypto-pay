import PaymentIntentnionStorage, {
    IPaymentIntentionStorage
} from "../../../shared/storage/tables/payment-intention.storage";
import WalletStorage from "../../../shared/storage/tables/wallet.storage";
import {add, formatISO9075} from "date-fns";

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

    insert(data: any) {
        const paymentIntention: IPaymentIntentionStorage = {
            walletId: data.wallet,
            value: data.value,
            description: data.description,
            endDate: data.endDate,
        }
        if (!paymentIntention.endDate) {
            paymentIntention.endDate = formatISO9075(add(new Date(), {days: 1}));
        }
        return this.paymentIntentnionStorage.insert(paymentIntention);
    }

    update(data: IPaymentIntentionStorage) {
        return this.paymentIntentnionStorage.updateById(data.id, data);
    }

    delete(id: number) {
        return this.paymentIntentnionStorage.updateById(id, {status: 'CANCELED'});
    }
}
