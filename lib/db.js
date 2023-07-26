//db: mysql
var mysql = require('mysql2');
var db = mysql.createConnection({  //접속 정보 등록
    host: '127.0.0.1',
    user: 'root',
    password: '20195268',
    database: 'login'
});
db.connect(); //연결

module.exports = db;