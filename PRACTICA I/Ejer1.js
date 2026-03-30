function miFuncion(texto) {
    const resultado = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    if (!texto) {
        return resultado;
    }
    const textoLower = texto.toLowerCase();
    for (let i = 0; i < textoLower.length; i++) {
        const caracter = textoLower[i];
        switch (caracter) {
            case 'a':
                resultado.a++;
                break;
            case 'e':
                resultado.e++;
                break;
            case 'i':
                resultado.i++;
                break;
            case 'o':
                resultado.o++;
                break;
            case 'u':
                resultado.u++;
                break;
            default:
                break;
        }
    }   
    return resultado;
}
let obj = miFuncion("euforia");
console.log(obj); // { a: 1, e: 1, i: 1, o: 1, u: 1 }
module.exports = miFuncion;