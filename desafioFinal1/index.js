import express from "express";
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

app.get('/api/productos', (req, res) => {
    try {
        const listProductos = productos.listarProductos();
        if (listProductos.length === 0) {
            res.send({ error: 'no hay productos cargados en memoria' });
            return;
        }
        res.send(listProductos);
    } catch (err) {
        console.log("hubo un error listando", err);
    }
})

app.get('/api/productos/:id', (req, res) => {
    try {
        const producto = productos.buscarProductoXid(req.params.id);
        if (producto) {
            res.send(producto);
            return;
        } else {
            res.send({ error: 'producto no encontrado' });
        }
    } catch (err) {
        console.log("hubo un error", err);
    }
});

app.post('/api/productos/guardar', (req, res) => {
    console.log(req);
    const producto = productos.agregarProducto(req.body.nombre, req.body.descripcion, req.body.url, req.body.precio);
    res.send(producto);
});

app.put('/api/productos/:id', (req, res) => {
    try {
        const producto = productos.actualizarProducto(req.body.nombre, req.body.descripcion, req.body.url, req.body.precio);
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

app.delete('/api/productos/:id', (req, res) => {
    const producto = productos.borrarProducto(req.params.id,req.body.nombre, req.body.descripcion, req.body.url, req.body.precio);
    res.send(producto);
});


app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});