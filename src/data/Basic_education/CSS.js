export const CSSInfo = {
  description: 'CSS (Cascading Style Sheets) digunakan untuk mendesain dan mengatur tampilan halaman web.',
  uses: [
    'Mengatur layout dan desain halaman.',
    'Memberikan warna, font, dan gaya pada elemen.',
    'Dipadukan dengan HTML untuk struktur dan JavaScript untuk interaktivitas.',
  ],
  related: 'JavaScript',
  documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  example: `
    <style>
      body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }
      h1 {
        color: #333;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }
    </style>
  `,
  detailedExplanation: `
    CSS digunakan untuk mendesain dan menata elemen-elemen pada halaman web. Dengan CSS, Anda bisa mengatur warna, ukuran, posisi, dan berbagai gaya lain untuk elemen HTML. CSS memungkinkan halaman web menjadi lebih estetis dan mudah dibaca. Berikut adalah elemen dasar dalam CSS:
    
    1. **Selector**: Menentukan elemen HTML mana yang akan dipengaruhi oleh gaya. Misalnya, \`body\`, \`h1\`, dan \`p\` adalah selector.
    
    2. **Property**: Menentukan apa yang akan diubah dalam elemen, seperti warna, font-size, dan margin.
    
    3. **Value**: Nilai dari property, seperti \`#f0f0f0\` untuk warna latar belakang atau \`16px\` untuk ukuran font.
    
    CSS memungkinkan kontrol yang sangat fleksibel terhadap layout halaman dengan menggunakan teknik seperti **Flexbox**, **Grid**, dan **Media Queries** untuk responsivitas halaman di berbagai perangkat.
  `,
};
