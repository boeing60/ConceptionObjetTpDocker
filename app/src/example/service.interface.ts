import IOrder from './orders.interface'

export default interface IService {
    delete(id: number): Promise<number>

    deleteAll(): Promise<number>

    getById(id: number): Promise<boolean|IOrder>

    getAll(): Promise<IOrder[]>

    update(updateInformations: any, id: number): Promise<number>

    create(orderToSave: any): Promise<any>
}
