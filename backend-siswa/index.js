const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let siswa = [];

// CREATE
app.post('/siswa', (req, res) => {
    siswa.push(req.body);
    res.send({ message: 'Data siswa ditambahkan!' });
});

// READ
app.get('/siswa', (req, res) => {
    res.send(siswa);
});

// UPDATE
app.put('/siswa/:kode', (req, res) => {
    const index = siswa.findIndex(s => s.kode === req.params.kode);
    if (index !== -1) {
        siswa[index] = req.body;
        res.send({ message: 'Data siswa diperbarui!' });
    } else {
        res.status(404).send({ message: 'Data tidak ditemukan' });
    }
});

// DELETE
app.delete('/siswa/:kode', (req, res) => {
    siswa = siswa.filter(s => s.kode !== req.params.kode);
    res.send({ message: 'Data siswa dihapus!' });
});

app.listen(port, () => {
    console.log('Server berjalan di http://localhost:${port}');
});