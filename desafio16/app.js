function producto (id, nombre, precio, stock){
    return {id, nombre, precio, stock}
};

let carrito = [];
function agregarProducto (id, nombre, precio, stock, cantidad){
    let productoCarrito = producto(id, nombre, precio, stock);
    productoCarrito.cantidad = cantidad;
    carrito.push(productoCarrito);
    return carrito;
}

function eliminarProducto (id){
    const nuevoCarrito = carrito.filter(producto => {
        if (producto.id !== id){
            return producto;
        }
    })
    carrito = nuevoCarrito;
    return carrito;
}

function obtenerDetalle(){
    let precioDetalladoProducto = carrito.map(producto=> {
        let precioProducto = producto.precio * producto.cantidad
        let detalle = {producto, precioProducto}
        return detalle
    });
    return precioDetalladoProducto
};

function obtenerPrecioTotal(){
    let precioTotalProducto = carrito.map(x => x.precio * x.cantidad)

    return precioTotalProducto.reduce((prev, current)=> prev + current);
}