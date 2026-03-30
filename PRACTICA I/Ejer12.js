function validar(callback) {
    setTimeout(() => callback(true), 500);
}
function login(callback) {
    setTimeout(() => callback("token123"), 500);
}

function obtenerDatos(token, callback) {
    setTimeout(() => callback({ usuario: "Juan", email: "juan@email.com" }), 500);
}
function conCallback() {
    validar((valido) => {
        if (valido) {
            login((token) => {
                obtenerDatos(token, (datos) => {
                    console.log("Callback:", datos);
                });
            });
        }
    });
}
function validarPromesa() {
    return new Promise((resolve) => setTimeout(() => resolve(true), 500));
}
function loginPromesa() {
    return new Promise((resolve) => setTimeout(() => resolve("token123"), 500));
}
function obtenerDatosPromesa(token) {
    return new Promise((resolve) => setTimeout(() => resolve({ usuario: "Juan", email: "juan@email.com" }), 500));
}
async function conAsyncAwait() {
    const valido = await validarPromesa();
    if (valido) {
        const token = await loginPromesa();
        const datos = await obtenerDatosPromesa(token);
        console.log("Async/Await:", datos);
    }
}
conCallback();
setTimeout(() => conAsyncAwait(), 2000);
module.exports = { conCallback, conAsyncAwait };