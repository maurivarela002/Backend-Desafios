class Productos {
    constructor() {
        this.productos = [];
    }

    //desafio 9
    actualizarProducto(title, price, thumbnail, id) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id) {
                const producto = { title: title, price: price, thumbnail: thumbnail, id: this.productos.length + 1 };
                this.productos.push(producto);
                return this.productos[this.productos.length - 1];
            };
        };
    };

    borrarProducto(title, price, thumbnail, id) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id) {
                const producto = { title: title, price: price, thumbnail: thumbnail, id: this.productos.length + 1 };
                const borrar = this.productos.splice(this.productos.indexOf(producto),this.productos[i]);
                return borrar;
            };
        };
    };

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