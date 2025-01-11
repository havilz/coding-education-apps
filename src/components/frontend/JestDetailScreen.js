import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const JestDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://jestjs.io/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Jest?</Text>
      <Text style={styles.paragraph}>
        Jest adalah sebuah framework pengujian JavaScript yang dirancang untuk membuat pengujian menjadi sederhana dan menyenangkan. Jest sangat populer untuk pengujian unit dan integrasi dalam aplikasi React dan Node.js.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Jest:</Text>
      <Text style={styles.paragraph}>
        1. **Snapshot Testing**: Memeriksa apakah tampilan UI aplikasi tidak berubah secara tidak sengaja.
      </Text>
      <Text style={styles.paragraph}>
        2. **Mocking**: Mendukung mocking untuk fungsi, modul, dan dependensi eksternal.
      </Text>
      <Text style={styles.paragraph}>
        3. **Zero Configuration**: Dapat langsung digunakan tanpa konfigurasi yang rumit.
      </Text>
      <Text style={styles.paragraph}>
        4. **Kecepatan Tinggi**: Pengujian dilakukan secara paralel untuk meningkatkan kecepatan eksekusi.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Jest?</Text>
      <Text style={styles.paragraph}>
        - Terintegrasi dengan baik dengan aplikasi React.
      </Text>
      <Text style={styles.paragraph}>
        - Dukungan komunitas yang luas dan banyak plugin tambahan.
      </Text>
      <Text style={styles.paragraph}>
        - Dokumentasi yang lengkap dan mudah dipahami.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Jest</Text>
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

export default JestDetailScreen;
