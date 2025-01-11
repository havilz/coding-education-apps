import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const TerminalShellDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.shellcheck.net/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Terminal & Shell?</Text>
      <Text style={styles.paragraph}>
        Terminal adalah antarmuka teks yang memungkinkan pengguna untuk berinteraksi dengan komputer menggunakan perintah-perintah berbasis teks. Shell adalah program yang menjalankan perintah-perintah tersebut di dalam terminal, memberikan akses untuk mengontrol sistem operasi secara langsung.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Terminal & Shell?</Text>
      <Text style={styles.paragraph}>
        1. **Efisiensi**: Banyak tugas yang bisa diselesaikan lebih cepat menggunakan perintah teks dibandingkan dengan GUI (Graphical User Interface).
      </Text>
      <Text style={styles.paragraph}>
        2. **Kontrol Penuh**: Dengan shell, pengguna dapat mengakses dan mengelola hampir seluruh aspek sistem operasi.
      </Text>
      <Text style={styles.paragraph}>
        3. **Automasi**: Perintah dapat digabungkan menjadi skrip untuk mengotomatisasi tugas-tugas rutin.
      </Text>
      <Text style={styles.paragraph}>
        4. **Pemrograman**: Terminal sering digunakan dalam pengembangan perangkat lunak, memungkinkan akses ke alat pengembangan dan manajemen proyek.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Terminal & Shell:</Text>
      <Text style={styles.paragraph}>
        - **Command Line Interface (CLI)**: Pengguna mengetikkan perintah di terminal untuk mengeksekusi berbagai tugas.
      </Text>
      <Text style={styles.paragraph}>
        - **Skrip Shell**: Program yang berisi serangkaian perintah yang dieksekusi oleh shell secara otomatis.
      </Text>
      <Text style={styles.paragraph}>
        - **Pipes dan Redirection**: Menghubungkan output dari satu perintah ke input perintah lainnya.
      </Text>
      <Text style={styles.paragraph}>
        - **Environment Variables**: Variabel yang menyimpan informasi sistem, seperti direktori kerja saat ini.
      </Text>

      <Text style={styles.subTitle}>Perintah Umum dalam Terminal:</Text>
      <Text style={styles.paragraph}>
        1. **ls**: Menampilkan daftar file dan direktori dalam folder saat ini.
      </Text>
      <Text style={styles.paragraph}>
        2. **cd**: Mengubah direktori saat ini.
      </Text>
      <Text style={styles.paragraph}>
        3. **mkdir**: Membuat direktori baru.
      </Text>
      <Text style={styles.paragraph}>
        4. **rm**: Menghapus file atau direktori.
      </Text>

      <Text style={styles.subTitle}>Bagaimana Shell Digunakan?</Text>
      <Text style={styles.paragraph}>
        1. **Pengguna Developer**: Banyak developer menggunakan terminal untuk menulis, menguji, dan menjalankan kode.
      </Text>
      <Text style={styles.paragraph}>
        2. **Administrator Sistem**: Admin sistem menggunakan shell untuk mengelola dan memelihara server atau perangkat keras.
      </Text>
      <Text style={styles.paragraph}>
        3. **Automasi Tugas**: Dengan skrip shell, berbagai tugas rutin dapat diautomasi untuk efisiensi yang lebih baik.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Shell</Text>
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

export default TerminalShellDetailScreen;
