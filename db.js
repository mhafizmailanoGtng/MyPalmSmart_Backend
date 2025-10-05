const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'mysql-3cc9be3b-mhafizmailano16-b8b4.j.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_YsvrnHudKQRKnzBKdEQ',
  database: 'user',
  port: 16044,

});

module.exports = pool.promise();