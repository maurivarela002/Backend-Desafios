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

app.engine(
  ENGINE_NAME,
  handlebars({
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    defaultLayout: "index.hbs",
  })

); app.set("views", path.join(__dirname, 'views'));
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

  if (listaDeProductos.length == 0) {
    res.render("main.hbs", {
      listExists: false,
      mensaje: "No hay productos!"
    });
  } else {-
      res.render("main.hbs", {
        listExists: true,
        listaDeProductos: listaDeProductos
      });
  }
});