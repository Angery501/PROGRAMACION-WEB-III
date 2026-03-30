function obtenerUsuarioCallback(callback) {
    setTimeout(() => {
        const usuario = { id: 1, nombre: "Juan Pérez" };
        callback(null, usuario);
    }, 1000);
}

function convertirCallbackAPromesa() {
    return new Promise((resolve, reject) => {
        obtenerUsuarioCallback((error, usuario) => {
            if (error) {
                reject(error);
            } else {
                resolve(usuario);
            }
        });
    });
}

convertirCallbackAPromesa()
    .then((usuario) => {
        console.log("Usuario obtenido:", usuario);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

module.exports = { obtenerUsuarioCallback, convertirCallbackAPromesa };