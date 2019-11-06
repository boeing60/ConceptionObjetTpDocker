import {
  Request,
  Response,
  Router,
} from 'express'

import IOrder from './orders.interface'
import OrderService from './orders.service'

export default class OrdersController {
  private path = '/orders'
  private pathId = '/orders/:id'
  private router = Router()
  private service =  new OrderService()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    // initialise le chemin par lequel sera appelé cette classe puis lui dit quel fonction utiliser
    this.router.get(this.path, this.getAll)
    this.router.get(this.pathId, this.getById)
    this.router.post(this.path, this.create)
    this.router.put(this.pathId, this.update)
    this.router.delete(this.pathId, this.delete)
    this.router.delete(this.path, this.deleteAll)
  }

  public getAll = async (request: Request, response: Response) => {
    response.json(await this.service.getAll()).status(200)
  }

  public getById = async (request: Request, response: Response) => {
    const id = Number(request.params.id) // car la payload du GET est un string
        // et vu qu'on a précisé dans ts que c'était un int, il faut le forcer en int
    const result = await this.service.getById(id)
    if (result === false) {
      response.sendStatus(204)
    } else {
      response.json(result)
    }
  }

  public create = async (request: Request, response: Response) => {
    const orderToSave = request.body
    response.status(201).json(await this.service.create(orderToSave))
  }

  public update = async (request: Request, response: Response) => {
    const updateInformations: IOrder = request.body
    const id = Number(request.params.id)
    response.sendStatus(await this.service.update(updateInformations, id))
  }

  public delete = async (request: Request, response: Response) => {
    const id = Number(request.params.id)
    response.sendStatus(await this.service.delete(id))
  }

  public deleteAll = async (request: Request, response: Response) => {
    response.sendStatus(await this.service.deleteAll())
  }
}
