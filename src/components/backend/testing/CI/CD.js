import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const CICDDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.atlassian.com/continuous-delivery');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu CI/CD?</Text>
      <Text style={styles.paragraph}>
        **Continuous Integration (CI)** dan **Continuous Delivery/Deployment (CD)** adalah dua praktik penting dalam pengembangan perangkat lunak modern. CI/CD memungkinkan tim pengembang untuk mengotomatisasi proses pengujian dan penyebaran kode, yang meningkatkan kualitas kode dan kecepatan pengiriman perangkat lunak.
      </Text>

      <Text style={styles.subTitle}>Mengapa CI/CD Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Otomatisasi Proses**: CI/CD mengotomatisasi langkah-langkah pengujian dan penyebaran, mengurangi kemungkinan kesalahan manusia.
      </Text>
      <Text style={styles.paragraph}>
        2. **Pengiriman Lebih Cepat**: Dengan CI/CD, perubahan kode yang teruji dan disetujui dapat segera diproduksi dan diterapkan ke lingkungan produksi.
      </Text>
      <Text style={styles.paragraph}>
        3. **Meningkatkan Kualitas Kode**: Dengan otomatisasi pengujian, pengembang dapat memastikan bahwa kode yang diterapkan bebas dari bug atau masalah lainnya sebelum dirilis.
      </Text>
      <Text style={styles.paragraph}>
        4. **Kolaborasi Tim yang Lebih Baik**: CI/CD mendukung kerja tim dengan memastikan semua pengembang bekerja dengan versi kode yang sama dan dapat mengintegrasikan perubahan dengan cepat.
      </Text>

      <Text style={styles.subTitle}>Apa itu Continuous Integration (CI)?</Text>
      <Text style={styles.paragraph}>
        **Continuous Integration (CI)** adalah praktik di mana kode yang ditulis oleh pengembang secara terus-menerus digabungkan (integrasi) ke dalam repositori utama (main branch) secara otomatis. Setiap perubahan kode kemudian diuji untuk memastikan bahwa perubahan tersebut tidak merusak fungsi yang ada.
      </Text>

      <Text style={styles.subTitle}>Langkah-langkah CI:</Text>
      <Text style={styles.paragraph}>
        1. **Penggabungan Kode**: Pengembang mengirimkan (commit) perubahan kode mereka ke repositori utama setelah mereka selesai bekerja.
      </Text>
      <Text style={styles.paragraph}>
        2. **Pemeriksaan Otomatis**: Sistem CI secara otomatis menarik (pull) kode yang baru di-commit dan menjalankan serangkaian pengujian untuk memastikan kualitas kode tetap terjaga.
      </Text>
      <Text style={styles.paragraph}>
        3. **Laporan Pengujian**: Pengujian otomatis menginformasikan pengembang jika ada kesalahan atau konflik dalam kode yang baru diintegrasikan.
      </Text>

      <Text style={styles.subTitle}>Apa itu Continuous Delivery/Deployment (CD)?</Text>
      <Text style={styles.paragraph}>
        **Continuous Delivery (CD)** adalah praktik di mana setiap perubahan kode yang berhasil melalui tahap pengujian CI secara otomatis dipersiapkan untuk dirilis ke lingkungan produksi. **Continuous Deployment (CD)** lebih lanjut mengotomatiskan proses ini dengan langsung menyebarkan perubahan ke produksi tanpa intervensi manual.
      </Text>

      <Text style={styles.subTitle}>Langkah-langkah CD:</Text>
      <Text style={styles.paragraph}>
        1. **Pengujian Lengkap**: Setelah kode lolos dari tahap CI, pengujian lanjutan seperti pengujian integrasi dan pengujian pengguna dilakukan.
      </Text>
      <Text style={styles.paragraph}>
        2. **Persiapan Produksi**: Setelah pengujian selesai, kode siap untuk dipasang di server produksi. Pada tahap **Continuous Deployment**, kode langsung dipasang tanpa intervensi manual.
      </Text>
      <Text style={styles.paragraph}>
        3. **Pengiriman yang Konsisten**: Pengiriman kode ke produksi dilakukan secara konsisten dengan minimal gangguan, memungkinkan rilis fitur baru lebih cepat.
      </Text>

      <Text style={styles.subTitle}>Contoh Alur Kerja CI/CD dengan GitHub Actions</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh bagaimana alur CI/CD diimplementasikan menggunakan GitHub Actions untuk mengotomatiskan proses pengujian dan penyebaran aplikasi ke server produksi:
      </Text>

      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`name: CI/CD Pipeline\n`}
          {`on:\n`}
          {`  push:\n`}
          {`    branches:\n`}
          {`      - main\n`}
          {`\n`}
          {`jobs:\n`}
          {`  test:\n`}
          {`    runs-on: ubuntu-latest\n`}
          {`    steps:\n`}
          {`      - name: Checkout code\n`}
          {`        uses: actions/checkout@v2\n`}
          {`      - name: Set up Node.js\n`}
          {`        uses: actions/setup-node@v2\n`}
          {`        with:\n`}
          {`          node-version: '14'\n`}
          {`      - name: Install dependencies\n`}
          {`        run: npm install\n`}
          {`      - name: Run tests\n`}
          {`        run: npm test\n`}
          {`\n`}
          {`  deploy:\n`}
          {`    runs-on: ubuntu-latest\n`}
          {`    steps:\n`}
          {`      - name: Checkout code\n`}
          {`        uses: actions/checkout@v2\n`}
          {`      - name: Deploy to Production\n`}
          {`        run: npm run deploy\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama CI/CD:</Text>
      <Text style={styles.paragraph}>
        - **Otomatisasi Pengujian**: Memastikan bahwa setiap perubahan kode diuji secara otomatis sebelum diterapkan ke produksi.
      </Text>
      <Text style={styles.paragraph}>
        - **Pengiriman Cepat dan Teratur**: Memungkinkan tim untuk mengirimkan pembaruan perangkat lunak secara cepat dan lebih teratur.
      </Text>
      <Text style={styles.paragraph}>
        - **Peningkatan Kolaborasi**: Dengan mengintegrasikan dan mendeliver kode lebih sering, CI/CD membantu meningkatkan kolaborasi antar tim pengembang dan pemangku kepentingan.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi CI/CD</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    lineHeight: 24,
  },
  codeCard: {
    backgroundColor: '#f4f4f4',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CICDDetailScreen;
