import StorageAbstract from "../storage.abstract";
import { EDatabases } from "../database.factory";

export default class WalletStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.Wallet);
  }

  async getWalletsToObserve(): Promise<IWalletStorage[]> {
      return this.knex(this.tableName).select().where({observe: 1});
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('userId')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('userId').unsigned();
        table.foreign('userId').references('id').inTable('user');
        table.string('walletHash', 255);
        table.string('chain', 50);
        table.string('chainHash', 255);
        table.integer('observe', 1).defaultTo(1);
        table.decimal('value', 16, 8);
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
  }
}

export interface IWalletStorage {
    id?: number;
    userId?: number;
    walletHash?: string;
    chain?: string;
    chainHash?: string;
    observe?: number;
    value?: number;
    createdAt?: number;
}
