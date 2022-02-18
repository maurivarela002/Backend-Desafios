class Productos {
    constructor() {
        this.productos = [];
    }

    agregarProducto(id, timestamp, nombre, descripcion, url, precio, stock) {
        const producto = { id: this.productos.length + 1,  timestamp: Date.now() ,nombre: nombre, descripcion: descripcion, url: url, precio: precio, stock: true };
        this.productos.push(producto);
        return this.productos[this.productos.length];
    };

    buscarProductoXid(id) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id) {
                return this.productos[i];
            };
        };
    };

    actualizarProducto(id, timestamp, nombre, descripcion, url, precio, stock) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id) {
                const producto = { id: this.productos.length + 1,  timestamp: Date.now() ,nombre: nombre, descripcion: descripcion, url: url, precio: precio, stock: true };
                this.productos.push(producto);
                return this.productos[this.productos.length - 1];
            };
        };
    };

    borrarProducto(id, timestamp, nombre, descripcion, url, precio, stock) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id) {
                const producto = { id: this.productos.length + 1,  timestamp: Date.now() ,nombre: nombre, descripcion: descripcion, url: url, precio: precio, stock: false };
                const borrar = this.productos.splice(this.productos.indexOf(producto),this.productos[i]);
                return borrar;
            };
        };
    };

    listarProductos() {
        return this.productos;
    };
};

const productos = new Productos();

export default productos;