import IAddress from './address.interface'

export default interface IContact {
    firstname: string
    lastname: string
    phone: string
    mail: string
    billingAddress: IAddress
    deliveryAddress: IAddress
    headOfficeAddress: IAddress
}
