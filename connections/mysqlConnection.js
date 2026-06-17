const mysql = require('mysql');

async function connectDB() {
    const cinnetion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: 'testdb'
    })
    console.log('Connected to MySQL');
}