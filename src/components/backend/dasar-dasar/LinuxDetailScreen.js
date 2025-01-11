import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const LinuxDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.linux.org/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Linux?</Text>
      <Text style={styles.paragraph}>
        Linux adalah sistem operasi berbasis Unix yang open-source dan gratis untuk digunakan. Linux digunakan secara luas di server, perangkat keras embedded, dan perangkat desktop. 
        Linux menawarkan fleksibilitas, keamanan, dan stabilitas yang menjadikannya pilihan populer bagi pengembang dan administrator sistem.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Linux?</Text>
      <Text style={styles.paragraph}>
        1. **Open-Source**: Kode sumbernya tersedia secara bebas, memungkinkan pengguna untuk mempelajari, memodifikasi, dan mendistribusikan sistem.
      </Text>
      <Text style={styles.paragraph}>
        2. **Stabil dan Andal**: Cocok untuk server yang membutuhkan uptime tinggi.
      </Text>
      <Text style={styles.paragraph}>
        3. **Keamanan**: Linux memiliki sistem izin pengguna yang kuat untuk mencegah akses yang tidak sah.
      </Text>
      <Text style={styles.paragraph}>
        4. **Komunitas Besar**: Dukungan komunitas yang luas membuat masalah cepat terselesaikan.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Linux:</Text>
      <Text style={styles.paragraph}>
        - **Multi-User**: Mendukung banyak pengguna dalam waktu bersamaan tanpa konflik.
      </Text>
      <Text style={styles.paragraph}>
        - **Shell dan Command Line**: Linux memiliki antarmuka command-line yang kuat untuk kontrol sistem yang lebih baik.
      </Text>
      <Text style={styles.paragraph}>
        - **File System**: Linux memiliki sistem file hierarkis yang terorganisasi dengan baik.
      </Text>
      <Text style={styles.paragraph}>
        - **Kernel**: Kernel Linux adalah inti sistem operasi yang bertanggung jawab untuk manajemen perangkat keras.
      </Text>

      <Text style={styles.subTitle}>Bagaimana Linux Digunakan?</Text>
      <Text style={styles.paragraph}>
        1. **Server**: Digunakan untuk menjalankan server web, server aplikasi, dan layanan lainnya.
      </Text>
      <Text style={styles.paragraph}>
        2. **Desktop**: Banyak distribusi seperti Ubuntu dan Fedora dirancang untuk penggunaan desktop.
      </Text>
      <Text style={styles.paragraph}>
        3. **Perangkat Embedded**: Linux digunakan dalam perangkat seperti router, TV pintar, dan sistem kendaraan.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Linux</Text>
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

export default LinuxDetailScreen;
