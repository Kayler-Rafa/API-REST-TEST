const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults()
const router = jsonServer.router('db.json')

const PORT = 3000;

server.use(middlewares)
server.use(router)

server.listen(PORT, () =>{
  console.log('rodando na porta: ' + PORT)
})