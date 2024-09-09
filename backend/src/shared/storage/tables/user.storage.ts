import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class UserStorage extends StorageAbstract {
  constructor() {
    super( EDatabases.User);
  }

  inactivateUser(userId) {
    return this.updateById(userId, { active: 0 });
  }

  insert(data: IUserStorage) {
    return super.insert(data);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('username')) {
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.string('username', 255).notNullable();
        table.string('password', 255).notNullable();
        table.string('fullname', 255);
        table.string('email', 255);
        table.string('phone', 255);
        table.string('wallet', 255);
        table.string('privateKey', 255);
        table.string('secretKey', 255);
        table.integer('active', 1).defaultTo(1);
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
      await this.insert({ id: 1, username: 'admin', password: 'admin'});
    }
  }
}

export interface IUserStorage {
  id?: number;
  username?: string;
  password?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  wallet?: string;
  privateKey?: string;
  secretKey?: string;
  active?: number;
  createdAt?: number;
}
