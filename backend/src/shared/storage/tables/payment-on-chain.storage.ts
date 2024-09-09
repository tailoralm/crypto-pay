import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class PaymentOnChainStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.PaymentOnChain);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('walletId')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('walletId').unsigned();
        table.foreign('walletId').references('id').inTable(EDatabases.Wallet);
        table.decimal('value', 16,8).notNullable();
        table.string('transactionHash', 255 );
        table.string('fromWalletHash', 255 );
        table.string('toWalletHash', 255 );
        table.string('chain', 255 );
        table.string('status', 255);
        table.string('description', 255);
        table.timestamp('timestamp').notNullable();
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
  }
}

export interface IPaymentOnChainStorage {
    id?: number;
    walletId?: number;
    value?: number;
    transactionHash?: string;
    fromWalletHash?: string;
    toWalletHash?: string;
    chain?: string;
    status?: string;
    description?: string;
    timestamp?: number;
    createdAt?: number;
}
