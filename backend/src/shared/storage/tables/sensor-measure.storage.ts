import StorageAbstract from "../storage.abstract";
import TempHumSensorModel from "../../io-connectors/tuya/models/temp-hum-sensor.model";
import {EDatabases} from "../database.factory";

export default class SensorMeasureStorage extends StorageAbstract {
  constructor() {
    super(EDatabases.Sensor_measure);
  }

  async createOrUpdateThisDatabaseSchema() {
    await this.createIfNotExists();
    if(!await this.columnExists('sensorId')) // version 1.0
      await this.knex.schema.alterTable(this.tableName, (table) => {
        table.integer('sensorId');
        table.foreign('sensorId').references('id').inTable('sensor');
        table.integer('userId');
        table.foreign('userId').references('id').inTable('user');
        table.decimal('humidity', 5, 2);
        table.decimal('temperature', 5, 2);
        table.decimal('soilHumidity', 5, 2);
        table.decimal('pumpedWater', 5, 2);
        table.boolean('light');
        table.string('sensorId', 255);
        table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
        table.string('tempUnit', 1).notNullable().defaultTo('C');
      });
  }
}

export interface ISensorMeasure {
    id?: number;
    sensorId?: number;
    userId?: number;
    humidity: number;
    temperature: number;
    soilHumidity: number;
    pumpedWater?: number;
    light?: boolean;
    createdAt?: Date;
    tempUnit?: string;
}