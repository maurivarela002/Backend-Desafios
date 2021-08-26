import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import productos from "./productos.js";

const __dirname = path.resolve();
const port = 8080;
const app = express();
const server = app.listen(port, () => {
  console.log(`Puerto ${port} levantado!`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

server.on("error", (error) => {
  console.error(error);
});

const ENGINE_NAME = "hbs";

app.engine(ENGINE_NAME, handlebars({ extname: 'hbs', defaultLayout: __dirname + '/views/main', layoutDir: __dirname + '/views/layouts/index' }));
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", ENGINE_NAME);

app.post('/api/productos/guardar', (req, res) => {
  try {
    const productoGuardado = productos.agregarProducto(req.body.title, req.body.price, req.body.thumbnail);
    console.log(productoGuardado);
    res.send(productoGuardado);
  } catch (err) {
    console.log("hubo un error pusheando", err);
  }

});

app.get('/api/productos/vista', (req, res) => {
  const listaDeProductos = productos.listarProductos();
  const i = listaDeProductos.length -1;
  const TitleProd = listaDeProductos[i].title;
  const PriceProd = listaDeProductos[i].price;
  const ThumbnailProd = listaDeProductos[i].thumbnail;

  res.render("main.hbs", {
    title: TitleProd,
    price: PriceProd,
    thumbnail: ThumbnailProd
  });
});