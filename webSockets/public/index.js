const socket = io.connect();
console.log('aaaaaaaaaaaaaa');

const input = document.querySelector('input');
document.querySelector('button').addEventListener('click', () => {
  console.log('boton presionado');
  socket.emit('mensaje', input.value);
});

socket.on('mensaje', msjs =>{
  const mensajeHTML = msjs
  .map(msj => `SocketId: ${msj.socketid} => Mensaje ${msj.mensaje}`)
  .join('<br>')
  document.querySelector('p').innerHTML = mensajeHTML;
  console.log('mensajito');
})
