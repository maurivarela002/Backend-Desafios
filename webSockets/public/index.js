const socket = io.connect();

const formEnviarMensaje = document.getElementById('formEnviarMensaje')
formEnviarMensaje.addEventListener('submit', e => {
  e.preventDefault()
  const mensaje = {
    author: formEnviarMensaje[0].value,
    text: formEnviarMensaje[1].value
  }
  socket.emit('mensaje', mensaje);
  formEnviarMensaje.reset()
  formEnviarMensaje[0].focus()
})

socket.on('mensajes', msjs =>{
 const mensajeHTML = msjs
 .map(msj => `SocketId: ${msj.socketid} - Author: ${msj.author} - Mensaje: ${msj.text}`)
 .join('<br>')
 document.getElementById('insertMessages').innerHTML = mensajeHTML
})

// productos
const formAgregarProducto = document.getElementById('formAgregarProducto')
formAgregarProducto.addEventListener('submit', e => {
  e.preventDefault()
  const producto = {
    title: formAgregarProducto[0].value,
    price: formAgregarProducto[1].value,
    thumbnail: formAgregarProducto[2].value
  }
  socket.emit('newProduct', producto);
  formAgregarProducto.reset()
  formAgregarProducto[0].focus()
})

socket.on('productos', productos => {
 let htmlProductos = productos.map(e => `
  <li>${e.title} - $ ${e.price} - ${e.thumbnail}</li>
 `).join(' ')
 document.getElementById('insertProducts').innerHTML = htmlProductos
})
