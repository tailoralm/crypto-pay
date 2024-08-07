import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class UserStorage extends StorageAbstract {
  constructor() {
    super( EDatabases.User);
  }

  inactivateUser(userId) {
    return this.updateById(userId, { active: 0 });
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('username')) // version 1.0
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
  }
}

export interface IUserStorage {
  username?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  wallet?: string;
  privateKey?: string;
  secretKey?: string;
  active?: number;
  createdAt?: number;
}
