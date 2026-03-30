function miFuncion(frase) {
    if (!frase) {
        return "";
    }
    const arrayCaracteres = frase.split('');
    const arrayInvertido = arrayCaracteres.reverse();
    const fraseInvertida = arrayInvertido.join('');
    return fraseInvertida;
}
let cad = miFuncion("abcd");
console.log(cad);
console.log("\n---Mostrar---");
console.log('Texto "abcd":', miFuncion("abcd"));
function miFuncionCompacta(frase) {
    return !frase ? "" : frase.split('').reverse().join('');
}
let resultadoCompacto = miFuncionCompacta("abcd");
console.log("Versión compacta:", resultadoCompacto);
function miFuncionBucle(frase) {
    if (!frase) return "";
    let resultado = "";
    for (let i = frase.length - 1; i >= 0; i--) {
        resultado += frase[i];
    }
    return resultado;
}