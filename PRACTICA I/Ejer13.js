function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: "Juan" });
        }, 1000);
    });
}
function obtenerPedidos(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Laptop", "Mouse"]);
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
function conPromesasAnidadas() {
    console.log("=== PROMESAS ANIDADAS ===");
    obtenerUsuario()
        .then((usuario) => {
            return obtenerPedidos(usuario)
                .then((pedidos) => {
                    return obtenerDetalles(pedidos[0])
                        .then((detalle) => {
                            console.log("Resultado:", detalle);
                            return detalle;
                        });
                });
        });
}
async function conAsyncAwait() {
    console.log("=== ASYNC/AWAIT MÁS LIMPIO ===");
    const usuario = await obtenerUsuario();
    const pedidos = await obtenerPedidos(usuario);
    const detalle = await obtenerDetalles(pedidos[0]);
    console.log("Resultado:", detalle);
    return detalle;
}
conPromesasAnidadas();
setTimeout(() => {
    conAsyncAwait();
}, 3000);
module.exports = { conPromesasAnidadas, conAsyncAwait };