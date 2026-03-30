function respuesta() {
    console.log("--- CALLBACK VS PROMESA ---\n");
    console.log("USAR CALLBACK CUANDO:");
    console.log("1. Operación simple");
    console.log("2. setTimeout o eventos");
    console.log("3. Una sola operación asíncrona\n");
    console.log("USAR PROMESA CUANDO:");
    console.log("1. Múltiples operaciones encadenadas");
    console.log("2. Necesitas manejar errores");
    console.log("3. Usas async/await");
    console.log("4. Operaciones en paralelo\n");
    console.log("EJEMPLO CALLBACK:");
    setTimeout(() => {
        console.log("  :D Callback ejecutado");
    }, 1000);
    console.log("EJEMPLO PROMESA:");
    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve("  → Promesa resuelta");
        }, 2000);
    });
    
    promesa.then(console.log);
}
respuesta();
module.exports = respuesta;