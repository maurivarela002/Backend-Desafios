class Productos {
    constructor() {
        this.productos = [];
    }

    agregarProducto(title, price, thumbnail) {
        const producto = {
            title: title,
            price: price,
            thumbnail: thumbnail,
            id: this.productos.length + 1
        };
        this.productos.push(producto);
        return this.productos[this.productos.length - 1];
    };

    listarProductos() {
        return this.productos;
    };
};

const productos = new Productos();

export default productos;