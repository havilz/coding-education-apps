export const PHPInfo = {
  description: 'PHP adalah bahasa server-side populer yang digunakan untuk pengembangan situs web dinamis dan aplikasi berbasis web.',
  uses: [
    'Mengembangkan aplikasi web dengan framework seperti Laravel dan Symfony.',
    'Pembuatan CMS seperti WordPress dan Drupal.',
    'Integrasi backend dengan database seperti MySQL dan PostgreSQL.',
    'Otomasi tugas melalui script server-side.',
    'Membuat API RESTful untuk aplikasi web modern.',
  ],
  related: 'Frameworks & Libraries',
  documentationLink: 'https://www.w3schools.com/php/',
  example: `
    <?php
    function salam($nama) {
        return "Halo, $nama!";
    }

    echo salam("Dunia"); // Output: Halo, Dunia!
    ?>
  `,
  detailedExplanation: `
    PHP adalah bahasa pemrograman dinamis dengan sintaks sederhana, membuatnya cocok untuk pengembangan web.
    - **Fitur Utama**:
      - Dukungan bawaan untuk manipulasi string, array, dan file.
      - Ekosistem library dan framework yang luas, termasuk Composer untuk manajemen dependensi.
    - **Keunggulan**:
      - Mudah dipelajari dan digunakan.
      - Performanya baik untuk aplikasi skala kecil hingga menengah.
    - **Kekurangan**:
      Tidak ideal untuk aplikasi besar tanpa penerapan arsitektur yang baik.
  `,
};
