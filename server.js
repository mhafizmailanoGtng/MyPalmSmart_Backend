const express = require('express');
const app = express(); // ← INISIALISASI
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
  const { id } = req.body;
  try {
    const [rows] = await db.query('SELECT * FROM karyawan WHERE id = ?', [id]);
    if (rows.length > 0) {
      const user = rows[0];
      res.json({
        id: user.id,
        nama: user.nama,
        peran: user.pekerjaan
      });
    } else {
      res.status(401).json({ error: 'ID tidak ditemukan' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error', detail: err.message });
  }
});

app.get('/login', async (req, res) => {
  const { id } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM karyawan WHERE id = ?', [id]);
    if (rows.length > 0) {
      const user = rows[0];
      res.json({
        id: user.id,
        nama: user.nama,
        peran: user.pekerjaan
      });
    } else {
      res.status(401).json({ error: 'ID tidak ditemukan' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error', detail: err.message });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running...');
});