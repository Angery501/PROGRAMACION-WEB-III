function miFuncion(numeros) {
    if (!numeros || numeros.length === 0) {
        return { mayor: null, menor: null };
    }
    let mayor = numeros[0];
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return {
        mayor: mayor,
        menor: menor
    };
}
let obj = miFuncion([3, 1, 5, 4, 2]);
console.log(obj); // { mayor: 5, menor: 1 }

module.exports = miFuncion;