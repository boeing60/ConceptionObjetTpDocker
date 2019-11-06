import {
    delAsync,
    getAsync,
    setAsync,
} from '../../utils/storage'
import IOrder from './orders.interface'

export default class OrderService {

    public getAll = async () => {
        return JSON.parse(await getAsync('orders'))
    }

    public getById = async (id: number) => {

        const rawOrders: string = await getAsync('orders')
        const orders: IOrder[] = JSON.parse(rawOrders) || []

        // tslint:disable-next-line: triple-equals
        const foundOrder: IOrder = orders.find((order) => order.id == id)

        if (!foundOrder) {
            return false
        } else {
            return foundOrder
        }
    }

    public create = async (orderToSave: any) => {
        const rawOrders = await getAsync('orders')
        const orders: IOrder[] = JSON.parse(rawOrders) || [] // car au début c'est vide

        const sortedOrders = orders.sort((previous: any, current: any) => {
            return current.id - previous.id
        })
        const lastId = sortedOrders.length > 0 ? sortedOrders[0].id : 0

        // Generate automatic data
        orderToSave = {
            ...orderToSave, // ... spread operator ES6
            id: lastId + 1,
            createAt: new Date(),
        }

        orders.push(orderToSave)
        await setAsync('orders', JSON.stringify(orders)) // on le mets dans la base
        return orderToSave
    }

    public update = async (updateInformations: any, id: number) => {
        const rawOrders: string = await getAsync('orders')
        const orders = JSON.parse(rawOrders) || []
        // tslint:disable-next-line: triple-equals
        const orderToUpdate = orders.find((order: any) => order.id == id)

        if (!orderToUpdate) {
            return 404
        }

        const updated = {
            ...orderToUpdate,
            ...updateInformations,
        }

        // tslint:disable-next-line: triple-equals
        const newOrders = orders.map((order: any) => order.id == updated.id ? updated : order)

        await setAsync('orders', JSON.stringify(newOrders))

        return 200
    }

    public delete = async (id: number) => {
        const rawOrders: string = await getAsync('orders')
        const orders: IOrder[] = JSON.parse(rawOrders) || []
        // tslint:disable-next-line: triple-equals
        const orderToDelete: IOrder = orders.find((order) => order.id == id)

        if (!orderToDelete) {
            return 204
        }

        const newOrders: IOrder[] = orders.filter((order) => order.id !== orderToDelete.id)
        await setAsync('orders', JSON.stringify(newOrders))

        return 200
    }

    public deleteAll = async () => {
        await delAsync('orders')
        return 200
    }
}
