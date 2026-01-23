import {server} from './app.js'

server
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running ')
  })
