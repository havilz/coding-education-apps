import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NPMDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.npmjs.com/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu NPM?</Text>
      <Text style={styles.paragraph}>
        NPM (Node Package Manager) adalah package manager untuk JavaScript yang digunakan untuk mengelola dependensi dalam proyek aplikasi. NPM merupakan bagian dari instalasi Node.js dan menyediakan ekosistem luas untuk pengembangan JavaScript.
      </Text>
      
      <Text style={styles.subTitle}>Mengapa Menggunakan NPM?</Text>
      <Text style={styles.paragraph}>
        1. **Manajemen Dependensi**: Mengelola pustaka dan modul yang digunakan dalam proyek Anda dengan mudah.
      </Text>
      <Text style={styles.paragraph}>
        2. **Ekosistem Luas**: Akses ke lebih dari satu juta paket open-source di registry NPM.
      </Text>
      <Text style={styles.paragraph}>
        3. **Automasi Skrip**: Membantu menjalankan skrip untuk proses pengembangan seperti testing, build, atau linting.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama NPM:</Text>
      <Text style={styles.paragraph}>
        - **Registry NPM**: Tempat untuk menemukan dan berbagi pustaka JavaScript.
      </Text>
      <Text style={styles.paragraph}>
        - **Package.json**: File konfigurasi proyek yang berisi informasi dependensi dan skrip proyek.
      </Text>
      <Text style={styles.paragraph}>
        - **Command Line Interface (CLI)**: Memungkinkan Anda untuk menginstal, memperbarui, dan menghapus paket langsung dari terminal.
      </Text>

      <Text style={styles.subTitle}>Bagaimana NPM Bekerja?</Text>
      <Text style={styles.paragraph}>
        1. **Instalasi Paket**: Anda dapat menginstal pustaka baru dengan perintah seperti `npm install -Nama Paket-`.
      </Text>
      <Text style={styles.paragraph}>
        2. **Manajemen Versi**: NPM memastikan bahwa versi yang diinstal sesuai dengan spesifikasi dalam file `package.json`.
      </Text>
      <Text style={styles.paragraph}>
        3. **Publikasi Paket**: Pengembang dapat membuat dan mempublikasikan paket mereka sendiri ke registry NPM.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi NPM</Text>
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
  button: {
    backgroundColor: '#2196F3',
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

export default NPMDetailScreen;
