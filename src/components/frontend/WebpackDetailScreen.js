import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const WebpackDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://webpack.js.org/guides/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Webpack?</Text>
      <Text style={styles.paragraph}>
        Webpack adalah sebuah module bundler untuk aplikasi JavaScript modern. Webpack membantu mengelola dependensi aplikasi, mengoptimalkan kinerja, dan meningkatkan pengalaman pengembang. Dengan Webpack, Anda dapat menggabungkan berbagai modul JavaScript, CSS, gambar, dan file lainnya menjadi bundle yang efisien untuk digunakan di produksi.
      </Text>
      
      <Text style={styles.subTitle}>Mengapa Menggunakan Webpack?</Text>
      <Text style={styles.paragraph}>
        1. **Pengelolaan Modul**: Webpack secara otomatis mengelola dan menggabungkan file-file Anda, termasuk JavaScript, CSS, gambar, dan lainnya.
      </Text>
      <Text style={styles.paragraph}>
        2. **Optimasi**: Mendukung fitur seperti minifikasi kode, penghapusan kode mati (dead code elimination), dan tree-shaking untuk menghasilkan bundle yang kecil dan cepat.
      </Text>
      <Text style={styles.paragraph}>
        3. **Pengalaman Pengembang**: Dengan fitur seperti Hot Module Replacement (HMR), pengembang dapat melihat perubahan secara real-time tanpa memuat ulang aplikasi.
      </Text>
      <Text style={styles.paragraph}>
        4. **Fleksibilitas**: Mendukung berbagai jenis file dan bahasa (JavaScript, TypeScript, CSS/SCSS, dan lainnya) melalui loader dan plugin.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Webpack:</Text>
      <Text style={styles.paragraph}>
        - **Entry Point**: Titik masuk utama aplikasi yang digunakan untuk membangun dependency graph.
      </Text>
      <Text style={styles.paragraph}>
        - **Output**: Mengatur bagaimana dan di mana bundle akan dihasilkan.
      </Text>
      <Text style={styles.paragraph}>
        - **Loaders**: Memungkinkan pengolahan file non-JavaScript seperti CSS, gambar, dan TypeScript sebelum ditambahkan ke bundle.
      </Text>
      <Text style={styles.paragraph}>
        - **Plugins**: Memberikan cara untuk memperluas fungsionalitas Webpack, seperti optimasi, penghapusan file duplikat, dan sebagainya.
      </Text>
      <Text style={styles.paragraph}>
        - **Dev Server**: Menyediakan server lokal untuk pengembangan dengan fitur Hot Module Replacement.
      </Text>

      <Text style={styles.subTitle}>Cara Kerja Webpack:</Text>
      <Text style={styles.paragraph}>
        1. **Dependency Graph**: Webpack membuat graf dependensi dari file entry point dan memetakan semua dependensi yang dibutuhkan.
      </Text>
      <Text style={styles.paragraph}>
        2. **Processing**: Menggunakan loader untuk memproses berbagai jenis file (CSS, gambar, atau JavaScript ES6+).
      </Text>
      <Text style={styles.paragraph}>
        3. **Bundling**: Menggabungkan semua modul menjadi bundle yang efisien untuk digunakan di produksi.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Webpack</Text>
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

export default WebpackDetailScreen;
