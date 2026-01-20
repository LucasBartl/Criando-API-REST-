import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions.js'
const server = fastify()

//Registrando o plugin q esta em routes
server.register(transactionsRoutes,{
  prefix:"transactions"
})


server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running ')
  })
