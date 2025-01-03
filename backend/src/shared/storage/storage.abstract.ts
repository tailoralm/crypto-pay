import knex_db from './database';
import {Knex} from 'knex';


export default abstract class StorageAbstract {
    knex: Knex;

    protected constructor(protected tableName: string) {
        this.knex = knex_db;
    }

    async insert(data: any) {
        delete data['id'];
        return this.knex(this.tableName).insert(data);
    }

    public selectById(id: number, columns = '') {
        return this.knex(this.tableName).select(columns).where({id: id}).first();
    }

    selectByUserId(userId: number, columns = '') {
        return this.knex(this.tableName).select(columns).where({userId: userId});
    }

    selectByUserAndId(userId: number, id: number, columns = '') {
        return this.knex(this.tableName).select(columns).where({id: id, userId: userId}).first();
    }

    updateById(id: number, data: any) {
        delete data['id'];
        return this.knex(this.tableName).update(data).where({id: id});
    }

    delete(id: number) {
        return this.knex(this.tableName).delete().where({id: id});
    }

    async columnExists(column: string) {
        return this.knex(this.tableName).columnInfo().then((columnInfo) => Object.keys(columnInfo).includes(column));
    }

    async createIfNotExists() {
        const tableExists = await this.knex.schema.hasTable(this.tableName);

        if (!tableExists) {
            await this.knex.schema.createTable(this.tableName, (table) => {
                table.increments('id').primary();
            });
            console.log(`Table "${this.tableName}" created successfully.`);
        }
    }
}
