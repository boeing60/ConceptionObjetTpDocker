import {
    delAsync,
    getAsync,
    setAsync,
} from '../../utils/storage'
import IOrder from './orders.interface'

export default class Order {

    private base: string

    constructor(base: string) {
        this.base = base
    }

    public getData = async () => {
        return await getAsync(this.base)
    }

    public setData = async (data: IOrder[]) => {
        await setAsync(this.base, JSON.stringify(data))
    }

    public delAllData = async () => {
        await delAsync(this.base)
    }
}
