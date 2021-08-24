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

async function actualizamosProductos() {
    app.put("/api/productos/actualizar/:id", async (req, res) => {
        try {
            const productosleer = await fs.promises.readFile("productos.txt", "utf-8");
            const array = JSON.parse(productosleer);

            for (let i = 0; i < array.length; i++) {
                if (array[i].id == req.params.id) {
                    const bodyPut = JSON.stringify(req.body);
                    const index = array[i].findIndex((idElemento) => idElemento === req.params.id)
                    console.log(index);
                    const elementoActualizado =  array[index] = bodyPut;
                    // console.log(elementoActualizado);
                    // await fs.promises.writeFile("productos.txt", pepe);
                    return;
                }
            }
        } catch (err) {
            console.log("hubo un error", err);
        }
    });
}

async function borrasXId() {
    app.delete("/api/productos/borrar/:id", async (req, res) => {
        try {
            const productosleer = await fs.promises.readFile("productos.txt", "utf-8");
            const array = JSON.parse(productosleer);

            for (let i = 0; i < array.length; i++) {
                if (array[i].id == req.params.id) {
                    console.log(array[i]);
                    const borraxID = array.pop(array[i])
                    await fs.promises.unlink("productos.txt", JSON.stringify(borraxID, null, "\t"));
                    res.send({ item: array[i] });
                    return;
                }
            }
        } catch (err) {
            console.log("hubo un error", err);
        }
    });
}

await actualizamosProductos()

await borrasXId()


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})