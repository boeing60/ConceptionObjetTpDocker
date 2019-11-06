import {
    delAsync,
    getAsync,
    setAsync,
} from '../../utils/storage'
import IOrder from './orders.interface'

export default class Order {

    public getData = async () => {
        return await getAsync('orders')
    }

    public setData = async (data: IOrder) => {
        setAsync('orders', JSON.stringify(data))
    }

}
