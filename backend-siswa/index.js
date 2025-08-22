const express = require('express');
const connection = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// CREATE - Tambah siswa
app.post('/siswa', (req, res) => {
    const { nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;

    const sql = 'INSERT INTO dt_siswa (nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa) VALUES (?, ?, ?, ?)';
    connection.query(sql, [nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Gagal menambahkan data siswa' });
        } else {
            res.send({ message: 'Data siswa berhasil ditambahkan!', id: result.insertId });
        }
    });
});

// READ - Ambil semua data siswa
app.get('/siswa', (req, res) => {
    const sql = 'SELECT * FROM dt_siswa';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Gagal mengambil data siswa' });
        } else {
            res.send(results);
        }
    });
});

// UPDATE - Perbarui data siswa berdasarkan kode_siswa
app.put('/siswa/:kode_siswa', (req, res) => {
    const { nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa } = req.body;
    const { kode_siswa } = req.params;

    const sql = 'UPDATE dt_siswa SET nama_siswa = ?, alamat_siswa = ?, tgl_siswa = ?, jurusan_siswa = ? WHERE kode_siswa = ?';
    connection.query(sql, [nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa, kode_siswa], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Gagal memperbarui data siswa' });
        } else {
            res.send({ message: 'Data siswa berhasil diperbarui!' });
        }
    });
});

// DELETE - Hapus siswa berdasarkan kode_siswa
app.delete('/siswa/:kode_siswa', (req, res) => {
    const { kode_siswa } = req.params;

    const sql = 'DELETE FROM dt_siswa WHERE kode_siswa = ?';
    connection.query(sql, [kode_siswa], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Gagal menghapus data siswa' });
        } else {
            res.send({ message: 'Data siswa berhasil dihapus!' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server backend berjalan di http://localhost:${port}`);
});
