import IProducts from './products.interface'
import IMeasure from './unit.interface'

export default interface IPackages {
    length: IMeasure // an object
    width: IMeasure
    height: IMeasure
    weight: IMeasure
    product: IProducts []
}
