// import StorageAbstract from "../storage.abstract";
// import {EDatabases} from "../database.factory";
//
// export default class GrowStorage extends StorageAbstract {
//   constructor() {
//     super(EDatabases.Grow);
//   }
//
//   selectByUserAndFarmId(userId: number, farmId: number) {
//     return this.knex(this.tableName)
//         .join(EDatabases.Farm, `${this.tableName}.farmId`, '=', `${EDatabases.Farm}.id`)
//         .where({[`${EDatabases.Farm}.userId`]: userId, [`${this.tableName}.farmId`]: farmId});
//   }
//
//   async createOrUpdateThisDatabaseSchema() {
//     await this.createIfNotExists();
//     if(!await this.columnExists('farmId')) // version 1.0
//       await this.knex.schema.alterTable(this.tableName, (table) => {
//         table.integer('farmId');
//         table.foreign('farmId').references('id').inTable('farm');
//         table.integer('userId');
//         table.foreign('userId').references('id').inTable('user');
//         table.string('name', 255);
//         table.string('description', 255);
//         table.decimal('finalWeight', 5, 2);
//         table.decimal('finalDryWeight', 5, 2);
//         table.string('stage', 255);
//         table.timestamp('createdAt').notNullable().defaultTo(this.knex.fn.now());
//       });
//   }
// }
//
// export interface IGrow {
//   id: number;
//   // userId: number;
//   farmId: number;
//   name: string;
//   description: string;
//   finalWeight: number;
//   finalDryWeight: number;
//   stage: string;
//   createdAt: Date;
// }
