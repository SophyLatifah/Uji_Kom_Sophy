const mysql = require('mysql2');

// bikin koneksi pool (lebih aman dipakai buat web app)
const db = mysql.createPool({
  host: 'localhost',                // ganti sesuai server DB kamu
    port : 3306,
  user: 'root',                     // username MySQL kamu
  password: 'Sophybisa1!',          // password MySQL
  database: 'siswa'                 // nama database
});

// cek koneksi
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed: ', err.message);
  } else {
    console.log('Database connected!');
    connection.release();
  }
});


module.exports = db;