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
    ('Dzakariya', 'Cimahi Selatan', '31-Januari-2005', 'DKV'),
    ('Rahmat Hidayat', 'Cimahi Utara', '20-Januari-2005', 'Elektro'),
    ('Fauzia Firdaus', 'Parongpong', '28-Februari-2005', 'Elektro'),
    ('Nada Nisrina', 'Cilamu', '15-Maret-2005', 'DKV'),
    ('Septi Firyal', 'Cimareme', '11-Oktober-2005', 'Elektro');
    
SELECT * 
	FROM dt_siswa;
