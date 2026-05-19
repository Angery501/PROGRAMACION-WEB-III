const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica2'
});
connection.connect((err) => {
    if(err){
        console.log('Error de conexión');
    }else{
        console.log('Conectado a MySQL');
    }
});
module.exports = connection;