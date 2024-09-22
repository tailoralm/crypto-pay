import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class LogStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.Log);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('userId')) {
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('userId').unsigned();
        table.foreign('userId').references('id').inTable('user');
        table.string('type', 255);
        table.string('group', 255);
        table.string('description', 255);
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
      await this.insert({userId: 1, type: 'info', group: 'system', description: 'Log table created.'});
    }
  }
}
