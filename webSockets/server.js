const express = require("express");
const { Server:HttpServer } = require('http');
const { Server:IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const socketio = new IOServer(httpServer);

const mensajes = [];

app.use(express.static('public'));

socketio.on('Connection', socket => { 
    console.log('Nuevo Cliente conectado!');
})

socketio.emit('mensajes', mensajes);

socketio.on('mensaje', data => {
    mensajes.push({socketid: socket.id, mensaje: data});
    io.sockets.emit('mensajes', mensajes);
})

const PORT = 8080;
const server = httpServer.listen(PORT, () => {
    console.log(`Puerto ${PORT} levantado!`);
  });

server.on('error',err => console.error(err));









