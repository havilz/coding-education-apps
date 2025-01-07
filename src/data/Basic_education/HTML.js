export const HTMLInfo = {
  description: 'HTML (HyperText Markup Language) adalah bahasa standar untuk membuat dan mendesain halaman web.',
  uses: [
    'Membuat struktur halaman web.',
    'Mendukung elemen seperti teks, gambar, tabel, dan multimedia.',
    'Dipadukan dengan CSS untuk styling dan JavaScript untuk interaktivitas.',
  ],
  related: 'CSS',
  documentationLink: 'https://developer.mozilla.org/id/docs/Web/HTML',
  example: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contoh Halaman HTML</title>
    </head>
    <body>
      <header>
        <h1>Selamat Datang di Halaman HTML</h1>
        <nav>
          <ul>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#services">Layanan</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </nav>
      </header>
    
      <section id="about">
        <h2>Tentang HTML</h2>
        <p>HTML adalah bahasa markup standar untuk membuat halaman web.</p>
      </section>
    
      <section id="services">
        <h2>Layanan Kami</h2>
        <ul>
          <li>Mendesain Halaman Web</li>
          <li>Mengembangkan Aplikasi Web</li>
          <li>Membuat Struktur Konten Web</li>
        </ul>
      </section>
    
      <section id="contact">
        <h2>Kontak Kami</h2>
        <p>Untuk informasi lebih lanjut, hubungi kami di <a href="mailto:contact@web.com">contact@web.com</a>.</p>
      </section>
    
      <footer>
        <p>&copy; 2025 Website Kami. Semua hak dilindungi.</p>
      </footer>
    </body>
    </html>
  `,
  detailedExplanation: `
    HTML adalah bahasa markup yang digunakan untuk menyusun dan menampilkan konten di web. Hal ini termasuk penempatan teks, gambar, tabel, multimedia, dan elemen-elemen lainnya pada halaman web.
    
    HTML bekerja dengan cara menggunakan berbagai tag untuk menyusun konten pada halaman. Setiap tag memiliki fungsi dan peran tertentu dalam mendesain halaman. Berikut adalah beberapa elemen dasar dalam HTML:
    
    1. **\`<html>\`**: Tag pembuka dan penutup dari dokumen HTML. Semua konten halaman web ditempatkan di dalam tag ini.
    
    2. **\`<head>\`**: Bagian yang berisi informasi metadata, seperti pengaturan karakter, pengaturan viewport, dan judul halaman.
    
    3. **\`<body>\`**: Bagian utama dari halaman, yang berisi konten seperti teks, gambar, dan elemen lainnya yang ditampilkan di browser.
    
    4. **\`<header>\` dan \`<footer>\`**: Digunakan untuk bagian atas dan bawah halaman. Header sering digunakan untuk judul dan navigasi, sementara footer digunakan untuk informasi hak cipta atau catatan lainnya.
    
    5. **\`<nav>\` dan \`<ul>\`**: Digunakan untuk membuat menu navigasi dalam bentuk daftar. \`<ul>\` adalah daftar tak terurut, dan di dalamnya terdapat item-item daftar yang dibuat dengan \`<li>\`.
    
    6. **\`<section>\`**: Digunakan untuk membagi halaman menjadi bagian-bagian terpisah.
    
    7. **\`<a>\`**: Tag untuk membuat link yang dapat diklik, baik itu untuk navigasi antar halaman atau menuju halaman lain.
    
    8. **\`<h1>\` hingga \`<h6>\`**: Digunakan untuk membuat judul atau heading dengan tingkat kepentingan yang berkurang dari \`<h1>\` hingga \`<h6>\`.
    
    9. **\`<p>\`**: Digunakan untuk menulis paragraf teks.
    
    10. **\`<img>\`**: Digunakan untuk menyisipkan gambar ke dalam halaman.
    
    11. **\`<table>\`, \`<tr>\`, \`<td>\`**: Digunakan untuk membuat tabel dan menampilkan data dalam format tabel.
    
    HTML bekerja sangat baik ketika digabungkan dengan **CSS** (Cascading Style Sheets) untuk memberikan desain dan **JavaScript** untuk memberikan interaktivitas pada halaman.
  `,
};
