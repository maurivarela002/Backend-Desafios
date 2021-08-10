const http = require("http");
function numeroAleatorio(min, max) {
  let number;
  return (number = Math.floor(min + Math.random() * (max - min + 1)));
}
const obj = {
  id: `${numeroAleatorio(1, 10)}`,
  title: "Producto" + `${numeroAleatorio(1, 10)}`,
  price: `${numeroAleatorio(0, 9999.99)}`,
  thumbnail: "Foto" + `${numeroAleatorio(1, 10)}`,
};
const server = http.createServer((request, response) => {
  response.end("Hola , deberias estar viendo el server!");
  response.end(JSON.stringify(obj));
});
const port = 6400;
server.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});
