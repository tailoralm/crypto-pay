import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class PaymentIntentionStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.PaymentIntention);
  }

  getIsPending(walletId: number): Promise<IPaymentIntentionStorage[]> {
      return this.knex(this.tableName).select().where({walletId: walletId, status: 'PENDING'});
  }

  updateById(id: number, data: IPaymentIntentionStorage) {
      return super.updateById(id, data);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('walletId')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('walletId');
        table.foreign('walletId').references('id').inTable(EDatabases.Wallet);
        table.decimal('value', 8,8).notNullable();
        table.string('status', ).defaultTo('PENDING');
        table.string('description', 255).notNullable();
        table.timestamp('endDate').notNullable().defaultTo(this.knex.raw('CURRENT_TIMESTAMP + INTERVAL 1 DAY'));
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
  }
}

export type EStatus = 'PAID' | 'PENDING' | 'CANCELED' | 'ERROR';

export interface IPaymentIntentionStorage {
    id?: number;
    walletId?: number;
    value?: number;
    status?: EStatus;
    description?: string;
    endDate?: number;
    createdAt?: number;
}