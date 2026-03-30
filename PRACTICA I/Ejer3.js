function miFuncion(numeros) {
    if (!numeros || numeros.length === 0) {
        return { pares: [], impares: [] };
    }
    const resultado = {
        pares: [],
        impares: []
    };
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            resultado.pares.push(numeros[i]);
        } else {
            resultado.impares.push(numeros[i]);
        }
    }
    return resultado;
}
let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj); // { pares: [2,4], impares: [1,3,5] }
module.exports = miFuncion;