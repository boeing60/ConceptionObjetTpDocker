import ICarrier from './carrier.interface'
import IContact from './contact.interface'
import IPackages from './packages.interface'

export default interface IOrder {
   id: number
   createdAt: Date
   packages: IPackages
   contact: IContact
   carrier: ICarrier
}
