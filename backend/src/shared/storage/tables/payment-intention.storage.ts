import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class PaymentIntentnionStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.PaymentIntention);
  }

    updateById(id: number, data: IPaymentIntention) {
      return super.updateById(id, data);
    }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('userId')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('userId');
        table.foreign('userId').references('id').inTable('user');
        table.float('value', 10, 2).notNullable();
        table.string('coin', 255).notNullable();
        table.string('description', 255).notNullable();
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
  }
}

export interface IPaymentIntention {
    id?: number;
    userId?: number;
    value?: number;
    contract?: string;
    description?: string;
    active?: number;
    createdAt?: Date;
}