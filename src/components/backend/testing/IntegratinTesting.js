import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const IntegrationTestingDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://jestjs.io/docs/integration-testing');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Integration Testing?</Text>
      <Text style={styles.paragraph}>
        *Integration testing* adalah jenis pengujian perangkat lunak yang dilakukan untuk memastikan bahwa berbagai komponen atau modul dalam sebuah aplikasi bekerja bersama dengan baik. 
        Pengujian ini menguji interaksi antara komponen yang berbeda untuk memastikan data mengalir dengan benar antara bagian-bagian sistem yang terintegrasi.
      </Text>

      <Text style={styles.subTitle}>Mengapa Integration Testing Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Verifikasi Interaksi Modul**: Memastikan bahwa berbagai bagian sistem berfungsi dengan baik saat bekerja bersama, misalnya API yang terhubung dengan antarmuka pengguna.
      </Text>
      <Text style={styles.paragraph}>
        2. **Mendeteksi Bug Integrasi**: Menemukan masalah yang mungkin tidak terdeteksi pada level unit testing karena integrasi antar komponen yang kompleks.
      </Text>
      <Text style={styles.paragraph}>
        3. **Keamanan Data**: Memastikan bahwa data dipertukarkan dengan benar antara komponen dan sistem eksternal, tanpa ada kebocoran atau kesalahan dalam komunikasi.
      </Text>

      <Text style={styles.subTitle}>Langkah-langkah dalam Melakukan Integration Testing</Text>
      <Text style={styles.paragraph}>
        Untuk melakukan *integration testing*, langkah-langkah berikut dapat diikuti:
      </Text>

      <Text style={styles.subTitle}>1. **Pilih Modul yang Akan Diuji**</Text>
      <Text style={styles.paragraph}>
        Tentukan komponen atau modul yang perlu diuji integrasinya, misalnya API dan antarmuka pengguna atau database dan backend.
      </Text>

      <Text style={styles.subTitle}>2. **Siapkan Lingkungan Pengujian**</Text>
      <Text style={styles.paragraph}>
        Persiapkan lingkungan pengujian yang mencakup semua dependensi seperti database, API, dan layanan eksternal yang diperlukan.
      </Text>

      <Text style={styles.subTitle}>3. **Tulis Test Cases**</Text>
      <Text style={styles.paragraph}>
        Tulis test cases yang menguji interaksi antar komponen. Pastikan untuk memverifikasi skenario positif (integrasi yang sukses) dan skenario negatif (kesalahan integrasi).
      </Text>

      <Text style={styles.subTitle}>4. **Jalankan Pengujian**</Text>
      <Text style={styles.paragraph}>
        Jalankan pengujian di lingkungan yang telah disiapkan, dan pastikan bahwa integrasi antar komponen berjalan dengan lancar.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode: Integration Testing dengan Jest</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh penggunaan Jest untuk melakukan *integration testing* pada API dan database:
      </Text>

      <Text style={styles.subTitle}>Test API dan Database Integration</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const request = require('supertest');\n`}
          {`const app = require('../app'); // aplikasi express\n`}
          {`const db = require('../db'); // koneksi database\n\n`}
          {`describe('API & Database Integration Test', () => {\n`}
          {`  beforeAll(async () => {\n`}
          {`    // Persiapkan database atau mock koneksi\n`}
          {`    await db.connect();\n`}
          {`  });\n\n`}
          {`  afterAll(async () => {\n`}
          {`    // Bersihkan database setelah pengujian\n`}
          {`    await db.disconnect();\n`}
          {`  });\n\n`}
          {`  test('should create a new user and store in database', async () => {\n`}
          {`    const response = await request(app)\n`}
          {`      .post('/users')\n`}
          {`      .send({ name: 'John Doe', email: 'john@example.com' });\n`}
          {`    expect(response.status).toBe(201);\n`}
          {`    expect(response.body.name).toBe('John Doe');\n`}
          {`    const user = await db.getUserByEmail('john@example.com');\n`}
          {`    expect(user).not.toBeNull();\n`}
          {`  });\n`}
          {`});`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama dalam Integration Testing:</Text>
      <Text style={styles.paragraph}>
        - **Automasi Pengujian**: Pengujian integrasi dapat diotomatisasi untuk menjalankan pengujian secara berkala pada setiap perubahan kode.
      </Text>
      <Text style={styles.paragraph}>
        - **Test Coverage**: Memastikan semua jalur integrasi antara modul diuji dengan mencakup berbagai skenario.
      </Text>
      <Text style={styles.paragraph}>
        - **Pengujian Lintas Platform**: Pengujian integrasi dapat digunakan untuk memverifikasi kompatibilitas aplikasi dengan berbagai platform atau perangkat.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Integration Testing</Text>
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

export default IntegrationTestingDetailScreen;
