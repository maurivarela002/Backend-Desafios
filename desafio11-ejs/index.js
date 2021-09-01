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

//desafio 9
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


const ENGINE_NAME = "ejs";

app.engine(
  ENGINE_NAME,
  handlebars({
    extname: ".ejs",
    layoutsDir: __dirname + "/views",
    defaultLayout: "main.ejs",
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
      res.render("main.ejs", {
        listaDeProductos: listaDeProductos
      });
});