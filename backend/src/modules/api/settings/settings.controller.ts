import UserStorage, { IUserStorage } from "../../../shared/storage/tables/user.storage";

export default class SettingsController{
    userStorage: UserStorage;
    constructor(private userId: number) {
        this.userStorage = new UserStorage();
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


}
