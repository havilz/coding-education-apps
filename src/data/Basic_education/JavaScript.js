export const JavaScriptInfo = {
  description: 'JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web interaktif.',
  uses: [
    'Menangani interaktivitas di halaman web.',
    'Membuat animasi dan efek dinamis.',
    'Dipadukan dengan HTML untuk struktur dan CSS untuk styling.',
    'Digunakan dalam framework seperti React untuk membangun aplikasi web.',
  ],
  related: 'React',
  documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  example: `
    <script>
      const button = document.querySelector('button');
      button.addEventListener('click', () => {
        alert('Tombol diklik!');
      });
    </script>
  `,
  detailedExplanation: `
    JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web lebih interaktif. Dengan JavaScript, Anda dapat menambahkan fungsi seperti validasi form, animasi, dan kontrol pengguna lainnya. 
    JavaScript juga penting dalam pengembangan aplikasi menggunakan framework seperti **React**, yang memungkinkan pembuatan antarmuka pengguna dinamis dengan pengelolaan state dan efek samping.
    
    1. **Variabel**: Digunakan untuk menyimpan data, seperti \`let\`, \`const\`, dan \`var\`.
    
    2. **Fungsi**: Blok kode yang dapat dipanggil berulang kali, misalnya:
    \`\`\`
    function greet() {
      alert('Halo, dunia!');
    }
    \`\`\`
    
    3. **DOM Manipulation**: JavaScript digunakan untuk mengubah elemen HTML di halaman, seperti menambah konten atau mendengarkan peristiwa pengguna.
    
    4. **Event Handling**: JavaScript dapat menangani peristiwa pengguna, seperti klik atau input teks.
    
    5. **Asynchronous Programming**: JavaScript mendukung operasi asinkron dengan **Promises**, **async/await**, yang memungkinkan pengambilan data tanpa memblokir proses lainnya.

    JavaScript memberikan fungsionalitas yang sangat penting dalam pengembangan web modern, dan sangat erat kaitannya dengan framework seperti **React**, yang memungkinkan pengelolaan state, rendering ulang komponen, dan pengelolaan efek samping dengan lebih efisien.
  `,
};
