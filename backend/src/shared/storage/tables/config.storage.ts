import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class ConfigStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.Config);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();

    if(!await this.columnExists('database_version')) {
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.decimal('database_version', 5,2);
        table.timestamp('update_date').defaultTo(this.knex.fn.now())
      });
      // await this.insert({database_version: 1.0});
    }
    // const config = await this.selectById(1, 'database_version');
    // return <number>config.database_version;
  }

  async updateDatabaseVersion(newVersion: number) {
    this.updateById({database_version: newVersion}, 1);
  }


}
