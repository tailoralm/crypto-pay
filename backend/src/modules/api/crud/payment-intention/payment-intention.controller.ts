import ICrudController from "../crud.interface";
import PaymentIntentnionStorage from "../../../../shared/storage/tables/payment-intention.storage";

export default class PaymentIntentionController implements ICrudController {
    private paymentIntentnionStorage: PaymentIntentnionStorage;
    constructor(private userId: number) {
        this.paymentIntentnionStorage = new PaymentIntentnionStorage();
        // init the storage
    }

    get(id: number) {
        return this.paymentIntentnionStorage.selectById(id);
    }

    getAll(id?: number) {
        return this.paymentIntentnionStorage.getAll();
    }

    insert(data: any) {
        return null;
    }

    update(id: number, data: any) {
        return null;
    }

    delete(id: number) {
        return this.paymentIntentnionStorage.updateById(id, { active: 0 });
    }
}