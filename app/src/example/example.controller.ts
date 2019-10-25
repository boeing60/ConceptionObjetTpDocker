import {
  Request,
  Response,
  Router,
} from 'express'

export default class ExampleController {
  public path = '/example'
  public router = Router()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAll) // initialise la route via les deux autres fonctions
  }

  public getAll = async (request: Request, response: Response) => {
    if (request.originalUrl === '/example') {
      response.json(['lol', 'clement', request.originalUrl])
    } else {
      response.json([request.originalUrl, 'test2'])
    }
  }
}
