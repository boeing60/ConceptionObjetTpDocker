import IOrder from './orders.interface'
import IService from './service.interface'

export class OrderProxy implements IService {

    private service: IService

    constructor(service: IService) {
        this.service = service
    }

    public async create(cmd: any): Promise<IOrder> {
        return this.service.create(cmd)
    }

    public async delete(id: number): Promise<number> {
        return this.service.delete(id)
    }

    public async deleteAll(): Promise<number> {
        return this.service.deleteAll()
    }

    public async getById(id: number): Promise<boolean|IOrder> {
        return this.service.getById(id)
    }

    public async getAll(): Promise<IOrder[]> {
        const privateInfoContact1: any = {
                firstname: '****',
                lastname: '****',
                phone: '****',
                mail: '****',
                headOfficeAddress: {
                    postalCode: '****',
                    city: '****',
                    addressLine1: '****',
                    addressLine2: '****',
                },
        }
        const privateInfoContact2: any = {
            firstname: '****',
            lastname: '****',
            phone: '****',
            mail: '*****',
            billingAddress: {
                postalCode: '****',
                city: '****',
                addressLine1: '****',
                addressLine2: '****',
            },
            deliveryAddress: {
                postalCode: '****',
                city: '****',
                addressLine1: '****',
                addressLine2: '****',
            },
        }
        const orderArray: IOrder[] = await this.service.getAll() || [] // dans le cas où la base serait vide
        orderArray.forEach((order) => {
            order.contact = privateInfoContact2
            order.carrier.contact = privateInfoContact1
        })
        return orderArray
    }

    public async update(id: number, majInfo: any): Promise<number> {
        return this.service.update(majInfo, id)
    }

}
