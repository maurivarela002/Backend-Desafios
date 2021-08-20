import express from 'express';
import path from 'path';
const __dirname = path.resolve();
import fs from 'fs';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 8080;
app.listen(port, () => {
    console.log(`Puerto ${port} levantado!`)
});

//parte1
app.get("/api/productos/listar", (req, res) => {
    let leerArchivo = fs.readFileSync("productos.txt", "utf-8");
    const productosToArray = JSON.parse(leerArchivo);
    res.status(200).json(productosToArray)
})

// parte2
app.get('/api/productos/listar/:id', async (req, res) => {
    try {
        const productosleer = await fs.promises.readFile("productos.txt", "utf-8");
        const array = JSON.parse(productosleer);
        for (let i = 0; i < array.length; i++) {
            if (array[i].id == req.params.id) {
                console.log(array[i]);
                res.send({ item: array[i] });
                return;
            }
        }
        res.send({ error: 'producto no encontrado' });
    } catch (err) {
        console.log("hubo un error", err);
    }
});

async function guardamosProductos(body) {
    try {
        const productosleer = await fs.promises.readFile("productos.txt", "utf-8");
        const array = JSON.parse(productosleer);

        const newProducto =
        {
            "title": body.Title,
            "price": body.Price,
            "thumbnail": body.Thumbnail,
            "id": array.length + 1
        };
        array.push(newProducto);
        await fs.promises.writeFile("productos.txt", JSON.stringify(array, null, "\t")
        );
    } catch (err) {
        console.log("hubo un error", err)
    };
}

app.post("/api/productos/guardar", async (req, res) => {
    await guardamosProductos(req.body)
    res.send(req.body)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})