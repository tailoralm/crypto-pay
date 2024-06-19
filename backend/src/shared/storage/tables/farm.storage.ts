import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class FarmStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.Farm);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('userId')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('userId');
        table.foreign('userId').references('id').inTable('user');
        table.string('name', 255).notNullable();
        table.string('description', 255).notNullable();
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
  }
}

export interface IFarm {
    id: number;
    userId: number;
    name: string;
    description: string;
    createdAt: Date;
}