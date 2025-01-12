import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ComputerGraphicsIntroDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://en.wikipedia.org/wiki/Computer_graphics');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Grafik Komputer?</Text>
      <Text style={styles.paragraph}>
        Grafik komputer adalah bidang dalam ilmu komputer yang berfokus pada penciptaan dan manipulasi gambar serta visualisasi objek menggunakan komputer. Grafik komputer mencakup berbagai teknik dan algoritma untuk membuat gambar 2D dan 3D, serta penggunaan gambar dalam aplikasi interaktif, game, animasi, dan desain grafis.
      </Text>

      <Text style={styles.subTitle}>Mengapa Grafik Komputer Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Desain Visual**: Grafik komputer memungkinkan pembuatan desain visual yang digunakan dalam berbagai bidang seperti film, game, iklan, dan produk multimedia.
      </Text>
      <Text style={styles.paragraph}>
        2. **Simulasi dan Visualisasi**: Digunakan untuk simulasi ilmiah dan visualisasi data, grafik komputer membantu memahami konsep yang kompleks, misalnya dalam penggambaran fenomena alam atau data medis.
      </Text>
      <Text style={styles.paragraph}>
        3. **Interaksi Pengguna**: Dalam aplikasi interaktif seperti game dan perangkat lunak desain, grafik komputer memberikan pengalaman visual yang menarik dan mempermudah interaksi dengan pengguna.
      </Text>

      <Text style={styles.subTitle}>Jenis Grafik Komputer</Text>
      <Text style={styles.paragraph}>
        Grafik komputer dapat dibagi menjadi dua kategori utama:
      </Text>

      <Text style={styles.subTitle}>1. **Grafik 2D**</Text>
      <Text style={styles.paragraph}>
        Grafik 2D mencakup gambar dan desain yang memiliki dua dimensi: panjang dan lebar. Grafik ini digunakan dalam desain grafis, ilustrasi, serta antarmuka pengguna.
      </Text>

      <Text style={styles.subTitle}>2. **Grafik 3D**</Text>
      <Text style={styles.paragraph}>
        Grafik 3D melibatkan pembuatan objek tiga dimensi yang memiliki kedalaman selain panjang dan lebar. Ini banyak digunakan dalam pembuatan animasi, video game, arsitektur, dan film.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Grafik Komputer:</Text>
      <Text style={styles.paragraph}>
        - **Rendering**: Proses menghasilkan gambar atau visual dari model 3D menggunakan algoritma seperti ray tracing atau rasterization.
      </Text>
      <Text style={styles.paragraph}>
        - **Transformasi Geometri**: Teknik yang digunakan untuk mengubah posisi objek dalam ruang 3D, misalnya dengan rotasi, skala, dan translasi.
      </Text>
      <Text style={styles.paragraph}>
        - **Shading**: Teknik yang digunakan untuk memberikan efek pencahayaan pada objek dalam grafik 3D, menghasilkan tampilan realistis atau artistik.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Grafik Komputer:</Text>
      <Text style={styles.paragraph}>
        Grafik komputer digunakan dalam berbagai bidang, antara lain:
      </Text>
      <Text style={styles.paragraph}>
        - **Game**: Penggunaan grafik 3D untuk menciptakan dunia virtual dan karakter dalam video game.
      </Text>
      <Text style={styles.paragraph}>
        - **Film dan Animasi**: Pembuatan efek visual (VFX) dan animasi karakter dalam film menggunakan teknik rendering 3D.
      </Text>
      <Text style={styles.paragraph}>
        - **Desain Arsitektur**: Visualisasi desain bangunan dan struktur dalam format 3D untuk perencanaan dan presentasi.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Grafik Komputer</Text>
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

export default ComputerGraphicsIntroDetailScreen;
