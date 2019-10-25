import App from './app'
import ExampleController from './src/example/example.controller'
import OrdersController from './src/example/orders.controller'

const app = new App([
  new OrdersController(),
], 1337)

app.listen()
