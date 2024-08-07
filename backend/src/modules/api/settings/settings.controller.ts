import UserStorage, { IUserStorage } from "../../../shared/storage/tables/user.storage";
import WalletStorage, { IWalletStorage } from "../../../shared/storage/tables/wallet.storage";

export default class SettingsController{
    userStorage: UserStorage;
    walletStorage: WalletStorage;
    constructor(private userId: number) {
        this.userStorage = new UserStorage();
        this.walletStorage = new WalletStorage();
    }
    delete() {
        return this.userStorage.inactivateUser(this.userId);
    }

    get() {
       return this.userStorage.selectById(this.userId);
    }

    update(data: IUserStorage) {
        return this.userStorage.updateById(this.userId, data);
    }

    insertWallet(data: IWalletStorage) {
        delete data['id'];
        data.userId = this.userId;
        return this.walletStorage.insert(data);
    }

    updateWallet(data: IWalletStorage) {
        data.userId = this.userId;
        if (data.id)
            return this.walletStorage.updateById(data.id, data);
        else
            throw new Error('id not found');
    }


}
