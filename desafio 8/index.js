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

//parte1
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

//parte2
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

//parte3
app.post('/api/productos', (req, res) => {
    const producto = productos.agregarProducto(req.body.title, req.body.price, req.body.thumbnail);
    res.send(producto);
});

//parte4
app.put('/api/productos/:id', (req, res) => {
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

//parte5
app.delete('/api/productos/:id', (req, res) => {
    const producto = productos.borrarProducto(req.body.title, req.body.price, req.body.thumbnail, req.params.id);
    res.send(producto);
});


app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});