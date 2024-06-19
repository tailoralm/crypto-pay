import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class LogStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.Log);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('userId')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('userId');
        table.foreign('userId').references('id').inTable('user');
        table.string('type', 255);
        table.string('group', 255);
        table.string('description', 255);
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
  }
}
