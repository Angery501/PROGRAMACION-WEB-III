function promesaEjemplo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ mensaje: "Operación exitosa", datos: [1, 2, 3] });
        }, 2000);
    });
}
function convertirPromesaACallback(promesa, callback) {
    promesa
        .then((resultado) => {
            callback(null, resultado);
        })
        .catch((error) => {
            callback(error, null);
        });
}
function callbackTradicional(error, resultado) {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Resultado desde callback:", resultado);
    }
}
const miPromesa = promesaEjemplo();
convertirPromesaACallback(miPromesa, callbackTradicional);
module.exports = { promesaEjemplo, convertirPromesaACallback, callbackTradicional };