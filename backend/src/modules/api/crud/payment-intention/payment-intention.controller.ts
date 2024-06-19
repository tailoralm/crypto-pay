import ICrudController from "../crud.interface";

export default class PaymentIntentionController implements ICrudController {
    constructor(private userId: number) {
        // init the storage
    }

    get(id: number) {
        return null;
    }

    getAll(id?: number) {
        return null;
    }

    insert(data: any) {
        return null;
    }

    update(id: number, data: any) {
        return null;
    }

    delete(id: number) {
        return null;
    }
}