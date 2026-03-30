function paso1() {
    return new Promise((resolve) => setTimeout(() => resolve(1), 1000));
}
function paso2(numero) {
    return new Promise((resolve) => setTimeout(() => resolve(numero + 2), 1000));
}
function paso3(numero) {
    return new Promise((resolve) => setTimeout(() => resolve(numero * 3), 1000));
}
function paso4(numero) {
    return new Promise((resolve) => setTimeout(() => resolve(numero - 4), 1000));
}
paso1()
    .then(resultado => {
        console.log("Paso 1:", resultado);
        return paso2(resultado);
    })
    .then(resultado => {
        console.log("Paso 2:", resultado);
        return paso3(resultado);
    })
    .then(resultado => {
        console.log("Paso 3:", resultado);
        return paso4(resultado);
    })
    .then(resultadoFinal => {
        console.log("Resultado final:", resultadoFinal);
    });
module.exports = { paso1, paso2, paso3, paso4 };