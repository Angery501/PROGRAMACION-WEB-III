function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: "Juan Pérez" });
        }, 1000);
    });
}
function obtenerPedidos(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Laptop", "Mouse", "Teclado"]);
        }, 1000);
    });
}
function obtenerDetalles(pedido) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ producto: pedido, precio: 100 });
        }, 1000);
    });
}
function conPromesas() {
    console.log("--- VERSIÓN CON PROMESAS ---");
    
    obtenerUsuario()
        .then((usuario) => {
            console.log("Usuario:", usuario.nombre);
            return obtenerPedidos(usuario);
        })
        .then((pedidos) => {
            console.log("Pedidos:", pedidos);
            return obtenerDetalles(pedidos[0]);
        })
        .then((detalle) => {
            console.log("Detalle:", detalle);
            return detalle;
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}
async function conAsyncAwait() {
    console.log("--- ASYNC/AWAIT ---");
    
    try {
        const usuario = await obtenerUsuario();
        console.log("Usuario:", usuario.nombre);
        const pedidos = await obtenerPedidos(usuario);
        console.log("Pedidos:", pedidos);
        const detalle = await obtenerDetalles(pedidos[0]);
        console.log("Detalle:", detalle);
        return detalle;
    } catch (error) {
        console.log("Error:", error);
    }
}
conPromesas();
setTimeout(() => {
    conAsyncAwait();
}, 4000);
module.exports = { conPromesas, conAsyncAwait };