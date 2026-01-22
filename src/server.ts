import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions.js'
import cookie from '@fastify/cookie'
const server = fastify()

server.register(cookie)

//Global
server.addHook('preHandler', async (req, res) => {
  console.log(`[${req.method}]${req.url}`)
})


//Plugin de rotas da transactions
server.register(transactionsRoutes, {
  prefix: "transactions"
})


server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running ')
  })
