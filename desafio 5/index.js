let http = require("http");

function numeroAleatorio(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

let obj = {
  id: `${numeroAleatorio(1, 10)}`,
  title: "Producto" + `${numeroAleatorio(1, 10)}`,
  price: `${numeroAleatorio(0, 9999.99)}`,
  thumbnail: "Foto" + `${numeroAleatorio(1, 10)}`
};

let server = http.createServer((request, response) => {
  response.end(JSON.stringify(obj));
});

let port = 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en ${port}`);
});


//Glitch https://subdued-congruous-jackfruit.glitch.me OR https://glitch.com/edit/#!/subdued-congruous-jackfruit?path=server.js%3A1%3A0