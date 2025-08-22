DROP DATABASE IF EXISTS siswa;

CREATE DATABASE IF NOT EXISTS siswa;
USE siswa;

CREATE TABLE IF NOT EXISTS dt_siswa(
	kode_siswa INT AUTO_INCREMENT PRIMARY KEY,
    nama_siswa VARCHAR (30),
    alamat_siswa TEXT,
    tgl_siswa VARCHAR (50),
    jurusan_siswa VARCHAR (10)
);

INSERT INTO dt_siswa 
	(nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa) VALUES
    ('Dzakariya Rahma', 'Cimahi Selatan', '2005-02-28', 'DKV'),
    ('Rahmat Hidayat', 'Cimahi Utara', '2005-02-28' , 'Elektro'),
    ('Fauzia Firdaus', 'Parongpong', '2005-02-28' , 'Elektro'),
    ('Nada Nisrina', 'Cilame', '2005-02-28' , 'DKV'),
    ('Rizki Rahmawati', 'Baros', '2005-02-28' , 'Tata Boga'),
    ('Septi Firyal Salsabila', 'Cimareme', '2005-02-28' , 'Elektro');

SELECT * 
	FROM dt_siswa;
