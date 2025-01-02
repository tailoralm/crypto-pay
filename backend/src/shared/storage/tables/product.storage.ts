import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class ProductStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.Product);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('userId')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('userId').unsigned();;
        table.foreign('userId').references('id').inTable('user');
        table.string('name', 255);
        table.string('description', 255);
        table.string('type', 50);
        table.string('category', 50);
        table.string('subCategory', 50);
        table.decimal('value', 7, 2);
        table.integer('stock').defaultTo(1);
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
  }
}

export interface IProduct {
  id: number;
  userId: number;
  name: string;
  description: string;
  type: string;
  category: string;
  subCategory: string;
  value: number;
  stock: number;
  createdAt: Date;
}
