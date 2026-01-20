import fastify from 'fastify'
import { config, db } from './database.js'
import { randomUUID } from 'node:crypto'

const server = fastify()

server.get('/tasks', async () => {
  const transations = await db('transactions').select('*')
  return transations

})

server.post('/tasks', async () => {
  //Inserindo dados dentros da tabela transactios
  const transations = await db('transactions').insert({
    id: randomUUID(),
    title: 'Transação de teste ',
    amount: 1000,
  }).returning('*')
  return transations
})

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running ')
  })
