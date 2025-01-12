import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const QuizScreen = ({ route, navigation }) => {
  const { item } = route.params; // The category selected by the user
  const [currentQuestion, setCurrentQuestion] = useState(0); // Current question index
  const [score, setScore] = useState(0); // User score
  const [isQuizFinished, setIsQuizFinished] = useState(false); // Flag to check if quiz is finished
  const [hasStarted, setHasStarted] = useState(false); // Flag to check if quiz has started

  // Quiz data for each category
  const quizData = {
    JavaScript: [
      { question: 'Apa itu JavaScript?', options: ['Bahasa Pemrograman', 'Editor teks'], answer: 'Bahasa Pemrograman' },
      { question: 'Apa itu DOM?', options: ['Document Object Model', 'Data Object Model'], answer: 'Document Object Model' },
      { question: 'Apa itu event listener?', options: ['Fungsi untuk menangani event', 'Fungsi untuk menampilkan data'], answer: 'Fungsi untuk menangani event' },
    ],
    JavaScript: [
      { question: 'Apa itu JavaScript?', options: ['Bahasa markup', 'Bahasa pemrograman'], answer: 'Bahasa pemrograman' },
      { question: 'Apa fungsi DOM dalam JavaScript?', options: ['Memanipulasi elemen HTML', 'Menjalankan backend'], answer: 'Memanipulasi elemen HTML' },
      { question: 'Apa itu Closure dalam JavaScript?', options: ['Fungsi dalam fungsi', 'Penutupan aplikasi'], answer: 'Fungsi dalam fungsi' },
      { question: 'Apa itu hoisting di JavaScript?', options: ['Penempatan deklarasi ke atas', 'Penghapusan variabel'], answer: 'Penempatan deklarasi ke atas' },
      { question: 'Apa itu event loop di JavaScript?', options: ['Proses menangani callback', 'Proses eksekusi kode'], answer: 'Proses menangani callback' },
      { question: 'Bagaimana cara mendeklarasikan variabel di JavaScript?', options: ['var, let, const', 'dim, let'], answer: 'var, let, const' },
      { question: 'Apa itu async/await?', options: ['Untuk menangani asynchronous code', 'Untuk menangani DOM'], answer: 'Untuk menangani asynchronous code' },
      { question: 'Apa itu callback function?', options: ['Fungsi yang dipanggil setelah selesai', 'Fungsi yang dipanggil pertama kali'], answer: 'Fungsi yang dipanggil setelah selesai' },
      { question: 'Apa itu arrow function?', options: ['Fungsi dengan syntax yang lebih ringkas', 'Fungsi untuk array'], answer: 'Fungsi dengan syntax yang lebih ringkas' },
      { question: 'Apa perbedaan let dan var?', options: ['Scope berbeda', 'Tidak ada perbedaan'], answer: 'Scope berbeda' },
    ],
    Python: [
      { question: 'Apa ekstensi file Python?', options: ['.py', '.java'], answer: '.py' },
      { question: 'Apa itu PEP 8?', options: ['Framework', 'Gaya penulisan kode'], answer: 'Gaya penulisan kode' },
      { question: 'Fungsi apa untuk mencetak di Python?', options: ['print()', 'console.log()'], answer: 'print()' },
      { question: 'Apa itu list comprehension?', options: ['Cara membuat list dengan ekspresi', 'Metode untuk menambah list'], answer: 'Cara membuat list dengan ekspresi' },
      { question: 'Bagaimana cara mendeklarasikan variabel di Python?', options: ['Dengan menggunakan tanda sama dengan (=)', 'Dengan menggunakan var'], answer: 'Dengan menggunakan tanda sama dengan (=)' },
      { question: 'Apa itu lambda function?', options: ['Fungsi tanpa nama', 'Fungsi dengan nama'], answer: 'Fungsi tanpa nama' },
      { question: 'Bagaimana cara mengimport modul di Python?', options: ['import nama_modul', 'include nama_modul'], answer: 'import nama_modul' },
      { question: 'Apa itu exception handling?', options: ['Penanganan kesalahan dalam program', 'Proses membuat program berjalan lebih cepat'], answer: 'Penanganan kesalahan dalam program' },
      { question: 'Apa itu tuple di Python?', options: ['Struktur data yang tidak dapat diubah', 'Struktur data yang dapat diubah'], answer: 'Struktur data yang tidak dapat diubah' },
      { question: 'Bagaimana cara mendeklarasikan fungsi di Python?', options: ['def nama_fungsi()', 'function nama_fungsi()'], answer: 'def nama_fungsi()' },
    ],
    HTML: [
      { question: 'Tag apa untuk hyperlink?', options: ['<a>', '<link>'], answer: '<a>' },
      { question: 'Apa itu atribut dalam HTML?', options: ['Properti tambahan', 'Komponen visual'], answer: 'Properti tambahan' },
      { question: 'Tag apa untuk heading terbesar?', options: ['<h1>', '<h6>'], answer: '<h1>' },
      { question: 'Tag apa untuk menampilkan gambar?', options: ['<img>', '<image>'], answer: '<img>' },
      { question: 'Apa itu doctype?', options: ['Deklarasi jenis dokumen', 'Menunjukkan versi HTML'], answer: 'Deklarasi jenis dokumen' },
      { question: 'Tag mana yang digunakan untuk paragraf?', options: ['<p>', '<text>'], answer: '<p>' },
      { question: 'Apa perbedaan tag <div> dan <span>?', options: ['<div> untuk blok, <span> untuk inline', 'Tidak ada perbedaan'], answer: '<div> untuk blok, <span> untuk inline' },
      { question: 'Tag apa untuk membuat tabel?', options: ['<table>', '<tabel>'], answer: '<table>' },
      { question: 'Tag apa untuk form input?', options: ['<input>', '<form>'], answer: '<input>' },
      { question: 'Apa itu HTML5?', options: ['Versi terbaru HTML', 'Bahasa pemrograman'], answer: 'Versi terbaru HTML' },
    ],
    CSS: [
      { question: 'Apa kepanjangan dari CSS?', options: ['Cascading Style Sheets', 'Color Syntax'], answer: 'Cascading Style Sheets' },
      { question: 'Bagaimana menambahkan warna latar belakang?', options: ['background-color', 'color'], answer: 'background-color' },
      { question: 'Properti apa untuk margin?', options: ['margin', 'padding'], answer: 'margin' },
      { question: 'Bagaimana cara mengatur font-size di CSS?', options: ['font-size', 'text-size'], answer: 'font-size' },
      { question: 'Apa itu flexbox?', options: ['Model layout untuk posisi elemen', 'Propertis untuk margin'], answer: 'Model layout untuk posisi elemen' },
      { question: 'Apa perbedaan antara padding dan margin?', options: ['Padding di dalam elemen, margin di luar elemen', 'Tidak ada perbedaan'], answer: 'Padding di dalam elemen, margin di luar elemen' },
      { question: 'Bagaimana cara menambahkan border di CSS?', options: ['border', 'outline'], answer: 'border' },
      { question: 'Bagaimana cara menyembunyikan elemen di CSS?', options: ['display: none', 'visibility: hidden'], answer: 'display: none' },
      { question: 'Apa itu CSS Grid?', options: ['Teknik layout berbasis grid', 'Sistem manajemen konten'], answer: 'Teknik layout berbasis grid' },
      { question: 'Bagaimana cara menampilkan teks tebal di CSS?', options: ['font-weight: bold', 'font-style: bold'], answer: 'font-weight: bold' },
    ],
    Java: [
      { question: 'Apa itu JVM?', options: ['Java Virtual Machine', 'Java Very Modern'], answer: 'Java Virtual Machine' },
      { question: 'Apa ekstensi file untuk program Java?', options: ['.java', '.jav'], answer: '.java' },
      { question: 'Apa itu method main di Java?', options: ['Metode utama untuk program', 'Metode untuk inisialisasi objek'], answer: 'Metode utama untuk program' },
      { question: 'Apa itu class di Java?', options: ['Template untuk objek', 'Sistem pengelolaan memori'], answer: 'Template untuk objek' },
      { question: 'Apa itu inheritance di Java?', options: ['Pewarisan properti dan metode', 'Pengelolaan memori otomatis'], answer: 'Pewarisan properti dan metode' },
      { question: 'Apa itu exception handling?', options: ['Menangani kesalahan saat program berjalan', 'Mendeklarasikan variabel'], answer: 'Menangani kesalahan saat program berjalan' },
      { question: 'Apa itu constructor di Java?', options: ['Metode untuk membuat objek', 'Metode untuk menghancurkan objek'], answer: 'Metode untuk membuat objek' },
      { question: 'Apa itu polymorphism di Java?', options: ['Kemampuan untuk memiliki banyak bentuk', 'Sistem untuk menangani memori'], answer: 'Kemampuan untuk memiliki banyak bentuk' },
      { question: 'Apa itu interface di Java?', options: ['Kontrak untuk implementasi kelas', 'Sistem penanganan memori'], answer: 'Kontrak untuk implementasi kelas' },
      { question: 'Apa itu package di Java?', options: ['Kelompok kelas yang saling terkait', 'Sistem pengelolaan data'], answer: 'Kelompok kelas yang saling terkait' },
    ],    
    CPP: [
      { question: 'Apa yang dimaksud dengan C++?', options: ['Bahasa pemrograman berorientasi objek', 'Bahasa markup'], answer: 'Bahasa pemrograman berorientasi objek' },
      { question: 'Apa itu header file di C++?', options: ['File eksternal', 'File sumber kode'], answer: 'File eksternal' },
      { question: 'Apa keyword yang digunakan untuk mendeklarasikan pointer?', options: ['*', '&'], answer: '*' },
      { question: 'Apa itu class di C++?', options: ['Template untuk objek', 'Struktur data dasar'], answer: 'Template untuk objek' },
      { question: 'Apa itu polymorphism di C++?', options: ['Kemampuan objek untuk memiliki banyak bentuk', 'Penyusunan kode untuk lebih efisien'], answer: 'Kemampuan objek untuk memiliki banyak bentuk' },
      { question: 'Apa itu destructor di C++?', options: ['Metode untuk menghancurkan objek', 'Metode untuk menginisialisasi objek'], answer: 'Metode untuk menghancurkan objek' },
      { question: 'Apa perbedaan antara "new" dan "delete" di C++?', options: ['"new" untuk alokasi memori, "delete" untuk dealokasi', '"new" dan "delete" tidak memiliki perbedaan'], answer: '"new" untuk alokasi memori, "delete" untuk dealokasi' },
      { question: 'Apa itu inheritance di C++?', options: ['Pewarisan properti dan metode dari kelas induk', 'Pengelolaan memori otomatis'], answer: 'Pewarisan properti dan metode dari kelas induk' },
      { question: 'Apa itu exception handling di C++?', options: ['Menangani kesalahan dalam eksekusi program', 'Mendeklarasikan variabel'], answer: 'Menangani kesalahan dalam eksekusi program' },
      { question: 'Apa itu namespace di C++?', options: ['Penyusun nama untuk mencegah konflik nama', 'Tipe data baru'], answer: 'Penyusun nama untuk mencegah konflik nama' },
    ],
    CSharp: [
      { question: 'Apa itu C#?', options: ['Bahasa pemrograman berbasis objek', 'Bahasa markup'], answer: 'Bahasa pemrograman berbasis objek' },
      { question: 'Apa itu .NET?', options: ['Framework untuk aplikasi C#', 'Framework untuk JavaScript'], answer: 'Framework untuk aplikasi C#' },
      { question: 'Apa itu garbage collection di C#?', options: ['Pengumpulan sampah otomatis', 'Pemrosesan manual'], answer: 'Pengumpulan sampah otomatis' },
      { question: 'Apa itu class di C#?', options: ['Template untuk objek', 'Struktur data dasar'], answer: 'Template untuk objek' },
      { question: 'Apa itu LINQ di C#?', options: ['Bahasa kueri untuk manipulasi data', 'Jenis tipe data'], answer: 'Bahasa kueri untuk manipulasi data' },
      { question: 'Apa itu event di C#?', options: ['Cara untuk mendeteksi perubahan status', 'Penggunaan variabel global'], answer: 'Cara untuk mendeteksi perubahan status' },
      { question: 'Apa perbedaan antara "ref" dan "out" di C#?', options: ['"ref" untuk parameter yang sudah diinisialisasi, "out" untuk parameter yang belum diinisialisasi', '"ref" dan "out" tidak ada perbedaan'], answer: '"ref" untuk parameter yang sudah diinisialisasi, "out" untuk parameter yang belum diinisialisasi' },
      { question: 'Apa itu async/await di C#?', options: ['Fitur untuk menangani operasi asinkron', 'Penyimpanan data sementara'], answer: 'Fitur untuk menangani operasi asinkron' },
      { question: 'Apa itu interface di C#?', options: ['Kumpulan metode yang harus diimplementasikan', 'Tipe data untuk objek'], answer: 'Kumpulan metode yang harus diimplementasikan' },
      { question: 'Apa itu nullable type di C#?', options: ['Tipe data yang bisa menyimpan nilai null', 'Tipe data khusus untuk string'], answer: 'Tipe data yang bisa menyimpan nilai null' },
    ],    
    PHP: [
      { question: 'Apa itu PHP?', options: ['Bahasa pemrograman server-side', 'Bahasa markup'], answer: 'Bahasa pemrograman server-side' },
      { question: 'Fungsi untuk menampilkan data di PHP?', options: ['echo()', 'print()'], answer: 'echo()' },
      { question: 'Bagaimana cara menghubungkan PHP dengan MySQL?', options: ['mysql_connect()', 'mysqli_connect()'], answer: 'mysqli_connect()' },
      { question: 'Apa itu session di PHP?', options: ['Menyimpan data pengguna sementara', 'Menyimpan data pengguna permanen'], answer: 'Menyimpan data pengguna sementara' },
      { question: 'Apa itu $_POST di PHP?', options: ['Superglobal untuk pengiriman data melalui form', 'Superglobal untuk cookies'], answer: 'Superglobal untuk pengiriman data melalui form' },
      { question: 'Bagaimana cara mengupload file di PHP?', options: ['Menggunakan fungsi move_uploaded_file()', 'Menggunakan fungsi upload_file()'], answer: 'Menggunakan fungsi move_uploaded_file()' },
      { question: 'Apa itu include() di PHP?', options: ['Fungsi untuk menyertakan file PHP lain', 'Fungsi untuk menghapus file'], answer: 'Fungsi untuk menyertakan file PHP lain' },
      { question: 'Apa itu $_SESSION di PHP?', options: ['Menyimpan data untuk sesi pengguna', 'Menyimpan data dalam variabel lokal'], answer: 'Menyimpan data untuk sesi pengguna' },
      { question: 'Bagaimana cara menangani error di PHP?', options: ['Menggunakan fungsi try-catch', 'Menggunakan fungsi error_log()'], answer: 'Menggunakan fungsi try-catch' },
      { question: 'Apa itu PDO di PHP?', options: ['Object-oriented way untuk akses database', 'Bahasa pemrograman baru'], answer: 'Object-oriented way untuk akses database' },
    ],    
    Ruby: [
      { question: 'Apa itu Ruby?', options: ['Bahasa pemrograman dinamis', 'Bahasa markup'], answer: 'Bahasa pemrograman dinamis' },
      { question: 'Apa ekstensi file Ruby?', options: ['.rb', '.ruby'], answer: '.rb' },
      { question: 'Apa itu Gem di Ruby?', options: ['Library atau paket', 'Fungsi built-in'], answer: 'Library atau paket' },
      { question: 'Apa keyword untuk mendeklarasikan variabel di Ruby?', options: ['let', 'var'], answer: 'let' },
      { question: 'Bagaimana cara mendefinisikan fungsi di Ruby?', options: ['def', 'function'], answer: 'def' },
      { question: 'Apa itu Rails di Ruby?', options: ['Framework untuk aplikasi web', 'Library untuk aplikasi desktop'], answer: 'Framework untuk aplikasi web' },
      { question: 'Apa yang dimaksud dengan block di Ruby?', options: ['Fungsi tanpa nama', 'Tipe data baru'], answer: 'Fungsi tanpa nama' },
      { question: 'Apa tipe data default untuk bilangan desimal di Ruby?', options: ['Float', 'Integer'], answer: 'Float' },
      { question: 'Bagaimana cara menangani error di Ruby?', options: ['Dengan begin-rescue', 'Dengan try-catch'], answer: 'Dengan begin-rescue' },
      { question: 'Apa itu Symbol di Ruby?', options: ['Tipe data yang efisien untuk kunci hash', 'Fungsi built-in untuk manipulasi string'], answer: 'Tipe data yang efisien untuk kunci hash' },
    ],    
    Go: [
      { question: 'Apa itu Go?', options: ['Bahasa pemrograman statically typed', 'Bahasa scripting'], answer: 'Bahasa pemrograman statically typed' },
      { question: 'Apa itu goroutine?', options: ['Unit eksekusi ringan', 'Thread utama'], answer: 'Unit eksekusi ringan' },
      { question: 'Apa package yang digunakan untuk HTTP di Go?', options: ['http', 'net/http'], answer: 'net/http' },
      { question: 'Apa keyword yang digunakan untuk mendeklarasikan variabel di Go?', options: ['var', 'let'], answer: 'var' },
      { question: 'Bagaimana cara mendeklarasikan konstanta di Go?', options: ['const', 'constant'], answer: 'const' },
      { question: 'Apa itu channel di Go?', options: ['Fasilitas komunikasi antar goroutine', 'Fungsi untuk menangani error'], answer: 'Fasilitas komunikasi antar goroutine' },
      { question: 'Bagaimana cara menangani error di Go?', options: ['Dengan defer', 'Dengan pengecekan error secara eksplisit'], answer: 'Dengan pengecekan error secara eksplisit' },
      { question: 'Apa yang dimaksud dengan interface di Go?', options: ['Tipe data untuk mendefinisikan metode', 'Tipe data untuk objek'], answer: 'Tipe data untuk mendefinisikan metode' },
      { question: 'Apa itu Go module?', options: ['Sistem manajemen dependensi di Go', 'Framework untuk aplikasi web'], answer: 'Sistem manajemen dependensi di Go' },
      { question: 'Apa perbedaan antara array dan slice di Go?', options: ['Array memiliki ukuran tetap, slice dinamis', 'Array lebih efisien dalam memori dibandingkan slice'], answer: 'Array memiliki ukuran tetap, slice dinamis' },
    ],    
    R: [
      { question: 'Apa itu R?', options: ['Bahasa pemrograman statistik', 'Bahasa pemrograman berbasis objek'], answer: 'Bahasa pemrograman statistik' },
      { question: 'Apa fungsi untuk membuat vektor di R?', options: ['c()', 'vector()'], answer: 'c()' },
      { question: 'Apa itu data frame di R?', options: ['Struktur data dua dimensi', 'Array'], answer: 'Struktur data dua dimensi' },
      { question: 'Apa fungsi untuk menghitung rata-rata di R?', options: ['mean()', 'avg()'], answer: 'mean()' },
      { question: 'Bagaimana cara membaca file CSV di R?', options: ['read.csv()', 'load.csv()'], answer: 'read.csv()' },
      { question: 'Apa itu faktor di R?', options: ['Tipe data untuk kategori', 'Tipe data untuk angka'], answer: 'Tipe data untuk kategori' },
      { question: 'Bagaimana cara menggabungkan dua vektor di R?', options: ['concat()', 'c()'], answer: 'c()' },
      { question: 'Apa itu package di R?', options: ['Kumpulan fungsi dan data', 'Variabel untuk menyimpan data'], answer: 'Kumpulan fungsi dan data' },
      { question: 'Apa itu plot di R?', options: ['Grafik untuk visualisasi data', 'Tabel untuk menyimpan data'], answer: 'Grafik untuk visualisasi data' },
      { question: 'Apa itu NA di R?', options: ['Nilai kosong atau hilang', 'Nilai nol'], answer: 'Nilai kosong atau hilang' },
    ],    
    Swift: [
      { question: 'Apa itu Swift?', options: ['Bahasa pemrograman untuk iOS dan macOS', 'Bahasa markup'], answer: 'Bahasa pemrograman untuk iOS dan macOS' },
      { question: 'Apa keyword yang digunakan untuk mendeklarasikan konstanta?', options: ['let', 'var'], answer: 'let' },
      { question: 'Bagaimana cara mendeklarasikan fungsi di Swift?', options: ['func', 'function'], answer: 'func' },
      { question: 'Apa itu optionals di Swift?', options: ['Nilai yang bisa bernilai nil', 'Nilai yang selalu ada'], answer: 'Nilai yang bisa bernilai nil' },
      { question: 'Apa yang dimaksud dengan closure di Swift?', options: ['Fungsi yang bisa disimpan dalam variabel', 'Fungsi hanya untuk input-output'], answer: 'Fungsi yang bisa disimpan dalam variabel' },
      { question: 'Apa itu tuple di Swift?', options: ['Tipe data yang menyimpan beberapa nilai', 'Array dengan tipe data yang sama'], answer: 'Tipe data yang menyimpan beberapa nilai' },
      { question: 'Apa yang digunakan untuk mendeklarasikan variabel di Swift?', options: ['let', 'var'], answer: 'var' },
      { question: 'Bagaimana cara menangani error di Swift?', options: ['throw', 'catch'], answer: 'throw' },
      { question: 'Apa itu class di Swift?', options: ['Blueprint untuk membuat objek', 'Tipe data untuk fungsi'], answer: 'Blueprint untuk membuat objek' },
      { question: 'Apa itu protocol di Swift?', options: ['Deklarasi metode yang harus diimplementasikan', 'Tipe data untuk variabel'], answer: 'Deklarasi metode yang harus diimplementasikan' },
    ],    
    Kotlin: [
      { question: 'Apa itu Kotlin?', options: ['Bahasa pemrograman berbasis JVM', 'Bahasa markup'], answer: 'Bahasa pemrograman berbasis JVM' },
      { question: 'Apa fungsi dari keyword "val" di Kotlin?', options: ['Untuk mendeklarasikan variabel tetap', 'Untuk mendeklarasikan variabel mutable'], answer: 'Untuk mendeklarasikan variabel tetap' },
      { question: 'Apakah Kotlin mendukung pemrograman fungsional?', options: ['Ya', 'Tidak'], answer: 'Ya' },
      { question: 'Apa keyword untuk mendeklarasikan variabel yang dapat diubah?', options: ['val', 'var'], answer: 'var' },
      { question: 'Apa itu extension function di Kotlin?', options: ['Menambah fungsi pada kelas tanpa mengubah kode sumber', 'Fungsi untuk menambahkan kelas baru'], answer: 'Menambah fungsi pada kelas tanpa mengubah kode sumber' },
      { question: 'Apa itu sealed class di Kotlin?', options: ['Kelas yang hanya bisa diwariskan dalam satu file', 'Kelas dengan konstruktor private'], answer: 'Kelas yang hanya bisa diwariskan dalam satu file' },
      { question: 'Bagaimana cara mendeklarasikan fungsi di Kotlin?', options: ['fun', 'function'], answer: 'fun' },
      { question: 'Apa itu data class di Kotlin?', options: ['Kelas untuk menyimpan data', 'Kelas dengan metode tambahan'], answer: 'Kelas untuk menyimpan data' },
      { question: 'Apakah Kotlin mendukung null safety?', options: ['Ya', 'Tidak'], answer: 'Ya' },
      { question: 'Apa itu Lambda Expression di Kotlin?', options: ['Fungsi tanpa nama', 'Fungsi dengan parameter tetap'], answer: 'Fungsi tanpa nama' },
    ],
    TypeScript: [
      { question: 'Apa itu TypeScript?', options: ['Superset dari JavaScript', 'Bahasa pemrograman lain'], answer: 'Superset dari JavaScript' },
      { question: 'Bagaimana mendeklarasikan tipe data di TypeScript?', options: ['Tipe diikuti variabel', 'Tipe variabel pertama'], answer: 'Tipe diikuti variabel' },
      { question: 'Apakah TypeScript dapat di-transpile menjadi JavaScript?', options: ['Ya', 'Tidak'], answer: 'Ya' },
      { question: 'Apa keuntungan menggunakan TypeScript?', options: ['Memiliki tipe statis', 'Lebih cepat dari JavaScript'], answer: 'Memiliki tipe statis' },
      { question: 'Apa itu interface di TypeScript?', options: ['Menentukan kontrak untuk objek', 'Tipe data dasar'], answer: 'Menentukan kontrak untuk objek' },
      { question: 'Apa itu enum di TypeScript?', options: ['Tipe data untuk nilai tetap', 'Tipe data untuk array'], answer: 'Tipe data untuk nilai tetap' },
      { question: 'Bagaimana cara mendeklarasikan variabel dengan tipe data array di TypeScript?', options: ['let arr: type[]', 'let arr: array<type>'], answer: 'let arr: type[]' },
      { question: 'Apa yang dimaksud dengan type assertion di TypeScript?', options: ['Menentukan tipe variabel secara eksplisit', 'Mengubah nilai variabel'], answer: 'Menentukan tipe variabel secara eksplisit' },
      { question: 'Apakah TypeScript kompatibel dengan JavaScript?', options: ['Ya', 'Tidak'], answer: 'Ya' },
      { question: 'Apa itu generics di TypeScript?', options: ['Tipe data yang dapat digunakan kembali', 'Tipe data untuk array'], answer: 'Tipe data yang dapat digunakan kembali' },
    ],
    NodeJS: [
      { question: 'Apa itu Node.js?', options: ['Platform berbasis JavaScript untuk server-side', 'Framework untuk front-end'], answer: 'Platform berbasis JavaScript untuk server-side' },
      { question: 'Apa package manager untuk Node.js?', options: ['npm', 'pip'], answer: 'npm' },
      { question: 'Bagaimana cara membuat server HTTP di Node.js?', options: ['http.createServer()', 'server.create()'], answer: 'http.createServer()' },
      { question: 'Apa itu npm?', options: ['Package manager untuk Node.js', 'Database untuk aplikasi Node.js'], answer: 'Package manager untuk Node.js' },
      { question: 'Apa itu Express.js?', options: ['Framework untuk membangun aplikasi web di Node.js', 'Database untuk aplikasi Node.js'], answer: 'Framework untuk membangun aplikasi web di Node.js' },
      { question: 'Bagaimana cara menginstal package di Node.js?', options: ['npm install <package>', 'npm add <package>'], answer: 'npm install <package>' },
      { question: 'Apa itu middleware di Node.js?', options: ['Fungsi yang dapat menangani permintaan dan respons', 'Fungsi untuk mengatur database'], answer: 'Fungsi yang dapat menangani permintaan dan respons' },
      { question: 'Apa itu callback function di Node.js?', options: ['Fungsi yang dipanggil setelah proses selesai', 'Fungsi yang dipanggil setiap saat'], answer: 'Fungsi yang dipanggil setelah proses selesai' },
      { question: 'Apa itu asynchronous programming di Node.js?', options: ['Pemrograman yang memungkinkan proses berjalan paralel', 'Pemrograman yang mengharuskan proses berjalan satu per satu'], answer: 'Pemrograman yang memungkinkan proses berjalan paralel' },
      { question: 'Apa itu Event Loop di Node.js?', options: ['Sistem yang mengatur antrian eksekusi kode', 'Pengatur aliran data'], answer: 'Sistem yang mengatur antrian eksekusi kode' },
    ],
  };

  const questions = quizData[item] || []; // Get the quiz questions based on the selected category

  // Save the quiz result to AsyncStorage
  const saveQuizResult = async (score) => {
    try {
      const existingResults = await AsyncStorage.getItem('quizResults');
      let results = existingResults ? JSON.parse(existingResults) : [];

      const newResult = {
        date: new Date().toLocaleString(),
        score: score,
        item: item, // Save the category name
      };

      results.push(newResult);
      await AsyncStorage.setItem('quizResults', JSON.stringify(results));
    } catch (error) {
      console.error('Failed to save quiz result:', error);
    }
  };

  // Handle the answer selection
  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 10); // Increase score for correct answer
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1); // Move to the next question
    } else {
      setIsQuizFinished(true); // Mark quiz as finished
      setHasStarted(false);
      saveQuizResult(score); // Save the score
    }
  };

  // Reset the quiz to start again
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
    setHasStarted(true);
  };

  return (
    <View style={styles.container}>
      {isQuizFinished ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Kuis selesai!</Text>
          <Text style={styles.scoreText}>Skor Anda: {score}/{questions.length * 10}</Text>
          <Text style={styles.message}>
            {score === questions.length * 10 ? 'Luar biasa! Anda menguasai topik ini!' : 'Bagus! Cobalah lagi untuk hasil yang lebih baik.'}
          </Text>
          <TouchableOpacity style={styles.resetButton} onPress={resetQuiz}>
            <Text style={styles.resetButtonText}>Mulai Lagi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Kembali ke Materi</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.question}>{currentQuestion + 1}. {questions[currentQuestion]?.question}</Text>
          {questions[currentQuestion]?.options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleAnswer(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#EDEDED',
  },
  quizContainer: {
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  question: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 15,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  resultContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  resultText: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#4CAF50',
  },
  scoreText: {
    fontSize: 22,
    marginBottom: 10,
    color: '#FF5722',
    fontWeight: '600',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  resetButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  backButton: {
    backgroundColor: '#3F51B5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15,
  },
  backButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
});

export default QuizScreen;
