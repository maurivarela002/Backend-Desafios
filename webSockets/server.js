const express = require("express");
const { Server:HttpServer } = require('http');
const { Server:IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const socketio = new IOServer(httpServer);

const mensajes = [];
const productController = require('./productos');

app.use(express.static('public'));

socketio.on('connection', socket => { 
  console.log('Nuevo Cliente conectado!');
   
  socket.emit('mensajes', mensajes);

  socket.on('mensaje', data => {
  mensajes.push({socketid: socket.id, ...data});
  socketio.sockets.emit('mensajes', mensajes);
  })

  // productos
  socket.emit('productos', productController.listarProductos());

  socket.on('newProduct', producto => {
   // guardo el producto
   productController.agregarProducto(producto.title, producto.price, producto.thumbnail)

   // envío la lista de productos actualizada al front con sockets
   socketio.sockets.emit('productos', productController.listarProductos());
  })
})


const PORT = 8080;
const server = httpServer.listen(PORT, () => {
  console.log(`Puerto ${PORT} levantado!`);
 });

server.on('error',err => console.error(err));