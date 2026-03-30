function tomarPrimerosDos(arreglo) {
    const [primero, segundo] = arreglo;
    return { primero, segundo };
}
const resultado = tomarPrimerosDos([10, 20, 30, 40, 50]);
console.log(resultado.primero);
console.log(resultado.segundo);
module.exports = tomarPrimerosDos;