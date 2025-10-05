const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'mysql-3cc9be3b-mhafizmailano16-b8b4.j.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_YsvrnHudKQRKnzBKdEQ',
  database: 'defaultdb',
  port: 16044,

});

conn.connect(err => {
  if (err) {
    console.error('❌ Koneksi gagal:', err.message);
  } else {
    console.log('✅ Koneksi berhasil!');
    conn.end();
  }
});