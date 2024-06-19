export default interface ICrudController {
    get(id: number): any;
    getAll(id?: number): any;
    insert(data: any): any;
    update(id: number, data: any): any;
    delete(id: number): any;
}