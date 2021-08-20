const express = require('express');
const fs = require("fs");
const app = express();

//Interpreta JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 8080;

let visitasItem = 0;
let visitasItemRandom = 0;

const productos = {
    "items":
        [
            {
                "title": "Pelota1",
                "price": 400,
                "thumbnail": "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5",
                "id": 1
            },
            {
                "title": "Pelota2",
                "price": 500,
                "thumbnail": "https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/dep_0001-p.jpg?itok=5IWgPHx5",
                "id": 2
            }
        ]
};

const server = app.listen(port, () => {
    console.log(`Puerto ${port} levantado!`)
});

//productos 1
app.get("/api/items", (req, res) => {
    visitasItem++;
    const cantidad = productos.items.length
    console.log(cantidad);
    const cantidadDeProductos = { ...productos, cantidad: { cantidad } };
    res.status(200).json(cantidadDeProductos)
})

//producto random 2
app.get("/api/item-random", (req, res) => {
    visitasItemRandom++
    let leerArchivo = fs.readFileSync("productos.txt", "utf-8");
    const leerJSON = JSON.parse(leerArchivo);
    const random = () => Math.floor(Math.random() * leerJSON.length)
    const obtengo = random();
    const item = leerJSON[obtengo];
    const data = { item };
    console.log(data);
    res.status(200).json(data)
})

//veces visitadas 3
app.get("/api/visitas", (req, res) => {
    res.send({ visitas: { items: visitasItem, item: visitasItemRandom } });
});