import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const BabelDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://babeljs.io/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Babel?</Text>
      <Text style={styles.paragraph}>
        Babel adalah sebuah transpiler JavaScript yang digunakan untuk mengonversi kode JavaScript modern (ES6 dan seterusnya) ke versi JavaScript yang lebih lama agar dapat berjalan di lingkungan yang tidak mendukung fitur terbaru JavaScript. Babel memungkinkan Anda untuk menggunakan fitur terbaru JavaScript tanpa khawatir tentang kompatibilitas browser.
      </Text>
      
      <Text style={styles.subTitle}>Mengapa Menggunakan Babel?</Text>
      <Text style={styles.paragraph}>
        1. **Kompatibilitas Browser**: Memastikan kode dapat berjalan di browser yang lebih lama dengan mendukung sintaks ES5.
      </Text>
      <Text style={styles.paragraph}>
        2. **Mendukung Sintaks Baru**: Menggunakan fitur terbaru JavaScript sebelum didukung secara luas oleh browser.
      </Text>
      <Text style={styles.paragraph}>
        3. **Transformasi Kode**: Mengonversi kode modular, seperti import/export, ke format yang dapat dipahami oleh browser.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Babel:</Text>
      <Text style={styles.paragraph}>
        - **Preset**: Koleksi plugin Babel yang telah dikonfigurasi sebelumnya untuk melakukan transformasi tertentu. Contoh: `@babel/preset-env`.
      </Text>
      <Text style={styles.paragraph}>
        - **Plugin**: Plugin memungkinkan Anda untuk menambahkan transformasi khusus, seperti mendukung JSX atau TypeScript.
      </Text>
      <Text style={styles.paragraph}>
        - **Source Maps**: Membantu debugging dengan memetakan kode yang ditranspilasi ke kode sumber asli.
      </Text>

      <Text style={styles.subTitle}>Bagaimana Babel Bekerja?</Text>
      <Text style={styles.paragraph}>
        1. **Parsing**: Babel mem-parsing kode JavaScript ke dalam bentuk abstrak yang dikenal sebagai Abstract Syntax Tree (AST).
      </Text>
      <Text style={styles.paragraph}>
        2. **Transformasi**: AST diubah menggunakan plugin dan preset untuk menghasilkan kode JavaScript yang kompatibel.
      </Text>
      <Text style={styles.paragraph}>
        3. **Generasi Kode**: AST yang telah diubah diubah kembali menjadi kode JavaScript yang dapat dijalankan.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Babel</Text>
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

export default BabelDetailScreen;
