function miPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje de éxito después de 3 segundos");
        }, 3000);
    });
}
miPromesa().then((mensaje) => {
    console.log(mensaje);
});
module.exports = miPromesa;