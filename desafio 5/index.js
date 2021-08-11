const http = require("http");

function numeroAleatorio(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

let obj = {
  id: `${numeroAleatorio(1, 10)}`,
  title: "Producto" + `${numeroAleatorio(1, 10)}`,
  price: `${numeroAleatorio(0, 9999.99)}`,
  thumbnail: "Foto" + `${numeroAleatorio(1, 10)}`,
};

const server = http.createServer((request, response) => {
  response.end(JSON.stringify(obj));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});
