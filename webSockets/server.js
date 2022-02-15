const express = require("express");
const { Server:HttpServer } = require('http');
const { Server:IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const socketio = new IOServer(httpServer);

const mensajes = [];

app.use(express.static('public'));

socketio.on('connection', socket => { 
    console.log('Nuevo Cliente conectado!');
    
    socket.emit('mensajes', mensajes);

    socket.on('mensaje', data => {
    mensajes.push({socketid: socket.id, mensaje: data});
    socketio.sockets.emit('mensajes', mensajes);
    })
})


const PORT = 8080;
const server = httpServer.listen(PORT, () => {
    console.log(`Puerto ${PORT} levantado!`);
  });

server.on('error',err => console.error(err));









