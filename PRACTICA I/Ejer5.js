function miFuncion(cadena) {
    if (!cadena) {
        return false;
    }
    const textoLimpio = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoInvertido = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoInvertido;
}
let band = miFuncion("oruro");
console.log(band); // true
let band2 = miFuncion("hola");
console.log(band2); // false
module.exports = miFuncion;