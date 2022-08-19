var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'ctec-project.cvck7uksgddo.ap-southeast-1.rds.amazonaws.com',
    user: 'admin',
    password: 'CTECpassword1!',
    database:'gaming_review',
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected To DB RDS');
});
module.exports = connection;
