import App from './app'
import ExampleController from './src/example/example.controller'

const app = new App([
  new ExampleController(),
], 1337)

app.listen()
