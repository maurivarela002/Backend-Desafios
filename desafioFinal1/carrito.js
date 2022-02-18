class Carrito {
    constructor() {
        this.carrito = [];
    }

    agregarProducto(title, price, thumbnail) {
        const Carrito = { title: title, price: price, thumbnail: thumbnail, id: this.carrito.length + 1 };
        this.carrito.push(producto);
        return this.carrito[this.carrito.length];
    };

    buscarProductoXid(id) {
        for (let i = 0; i < this.carrito.length; i++) {
            if (this.carrito[i].id == id) {
                return this.carrito[i];
            };
        };
    };

    listarProductos() {
        return this.carrito;
    };
};

const carrito = new Carrito();

export default carrito;