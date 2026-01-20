import fastify from 'fastify'
import { config, db } from './database.js'

const server = fastify()

server.get('/task', async () => {
  const tables = await db('sqlite_schema').select('*')
  return tables
})

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running ')
  })
