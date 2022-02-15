const socket = io.connect();
console.log('aaaaaaaaaaaaaa');

const input = document.querySelector('input');
document.querySelector('button').addEventListener('click', () => {
  console.log('boton presionado');
  socket.emit('mensaje', input.value);
});

socket.on('mensajes', msjs =>{
  const mensajeHTML = msjs
  .map(msj => `SocketId: ${msj.socketid} => Mensaje ${msj.mensaje}`)
  .join('<br>')
  document.querySelector('p').innerHTML = mensajeHTML;
  console.log('mensajito');
})

//parte1 put
app.put('/api/productos/actualizar/:id', (req, res) => {
  try {
      const producto = productos.actualizarProducto(req.body.title, req.body.price, req.body.thumbnail, req.params.id);
      if (producto) {
          res.send(producto);
          return;
      } else {
          res.send({ error: 'producto no actualizado' });
      }
  } catch (err) {
      console.log("hubo un error al actualizar", err);
  }
});

//parte3
app.delete('/api/productos/eliminar/:id', (req, res) => {
  const producto = productos.borrarProducto(req.body.title, req.body.price, req.body.thumbnail, req.params.id);
  res.send(producto);
});

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
