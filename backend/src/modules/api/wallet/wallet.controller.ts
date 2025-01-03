import WalletStorage, {IWalletStorage} from "../../../shared/storage/tables/wallet.storage";

export default class WalletController {
    private walletStorage: WalletStorage;

    constructor(private userId: number) {
        this.walletStorage = new WalletStorage();
    }

    get(id: number) {
        return this.walletStorage.selectByUserAndId(this.userId, id);
    }

    getAll() {
        return this.walletStorage.selectByUserId(this.userId);
    }

    insert(data: IWalletStorage) {
        data.userId = this.userId;
        return this.walletStorage.insert(data);
    }

    update(data: IWalletStorage) {
        data.userId = this.userId;
        if (data.id)
            return this.walletStorage.updateById(data.id, data);
        else
            throw new Error('id not found');
    }

    delete(id: number) {
        return this.walletStorage.delete(id);
    }
}