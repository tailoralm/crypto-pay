import StorageAbstract from "../storage.abstract";
import {EDatabases} from "../database.factory";

export default class SensorStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.Sensor);
  }

  getAllMqtt(): Promise<ISensor[]> {
    return this.knex(this.tableName).select('*').where('type', 'mqtt').then(rows => rows as ISensor[]);
  }

  selectByUserAndGrowId(userId: number, growId: number) {
    return this.knex(this.tableName)
        .join(EDatabases.Grow, `${this.tableName}.growId`, '=', `${EDatabases.Grow}.id`)
        .join(EDatabases.Farm, `${EDatabases.Grow}.farmId`, '=', `${EDatabases.Farm}.id`)
        .where({[`${EDatabases.Farm}.userId`]: userId, [`${this.tableName}.growId`]: growId});
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('name')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('farmId');
        table.foreign('farmId').references('id').inTable('farm');
        table.integer('growId').unsigned();
        table.foreign('growId').references('id').inTable('grow').onDelete('SET NULL');
        table.integer('userId');
        table.foreign('userId').references('id').inTable('user');
        table.string('name', 255).notNullable();
        table.enum('type', ['mqtt']).notNullable();
        table.string('description', 255);
        table.string('cronRule', 255);
        // table.boolean('mqttOnline').defaultTo(false);
        table.string('mqttUrl', 255);
        table.string('mqttTopic', 255);
        table.string('mqttUsername', 255);
        table.string('mqttPassword', 255);
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
      });
  }
}

export interface ISensor {
  id: number;
  farmId: number;
  growId: number;
  name: string;
  description: string;
  cronRule: string;
  // mqttOnline: boolean;
  mqttUrl: string;
  mqttTopic: string;
  mqttUsername: string;
  mqttPassword: string;
  createdAt: Date;
}
