var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'ctec-project.cvck7uksgddo.ap-southeast-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'CTECpassword1!',
    database:'gaming_review',
    //connectTimeout: 30000
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected To DB RDS');
});
module.exports = connection;
