import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const DatabaseDesignDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.oracle.com/database/what-is-database-design.html');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Database Design?</Text>
      <Text style={styles.paragraph}>
        Desain basis data adalah proses mendefinisikan struktur basis data untuk menyimpan data secara efisien, mengoptimalkan kinerja, dan memfasilitasi kemudahan penggunaan serta pengelolaan data. 
        Ini melibatkan pemilihan tipe data, struktur tabel, relasi antar tabel, serta normalisasi untuk menghindari redundansi data.
      </Text>

      <Text style={styles.subTitle}>Mengapa Desain Database itu Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Efisiensi Penyimpanan**: Desain database yang baik memastikan data disimpan dengan cara yang efisien untuk menghemat ruang dan meminimalkan duplikasi.
      </Text>
      <Text style={styles.paragraph}>
        2. **Kinerja yang Optimal**: Pengorganisasian tabel dan relasi yang tepat memungkinkan pengambilan data yang lebih cepat dan meminimalkan waktu respons.
      </Text>
      <Text style={styles.paragraph}>
        3. **Skalabilitas**: Desain database yang baik memungkinkan sistem untuk berkembang seiring waktu tanpa mengorbankan kinerja atau integritas data.
      </Text>
      <Text style={styles.paragraph}>
        4. **Konsistensi Data**: Dengan desain yang tepat, kita dapat mengurangi kemungkinan kesalahan dan inkonsistensi data yang dapat menyebabkan masalah pada aplikasi.
      </Text>

      <Text style={styles.subTitle}>Langkah-Langkah dalam Desain Database</Text>
      <Text style={styles.paragraph}>
        Proses desain database terdiri dari beberapa langkah penting, termasuk:
      </Text>

      <Text style={styles.subTitle}>1. **Analisis Kebutuhan Data**</Text>
      <Text style={styles.paragraph}>
        Memahami kebutuhan aplikasi dan jenis data yang akan disimpan sangat penting dalam tahap ini. Identifikasi entitas yang relevan dan hubungan antar entitas.
      </Text>

      <Text style={styles.subTitle}>2. **Perancangan Skema (Schema Design)</Text>
      <Text style={styles.paragraph}>
        Membuat skema basis data yang mencakup tabel-tabel, kolom-kolom yang diperlukan, serta tipe data yang sesuai.
      </Text>

      <Text style={styles.subTitle}>3. **Normalisasi**</Text>
      <Text style={styles.paragraph}>
        Normalisasi adalah teknik untuk mengorganisir data dalam tabel agar mengurangi redundansi dan ketergantungan yang tidak perlu.
        Proses ini melibatkan pembuatan tabel-tabel terpisah berdasarkan entitas dan menetapkan kunci utama (primary key) serta kunci asing (foreign key) untuk menjaga integritas referensial.
      </Text>

      <Text style={styles.subTitle}>Contoh Tabel: Desain untuk Sistem Pemesanan</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh desain tabel untuk sistem pemesanan online dengan dua tabel utama: pelanggan dan pesanan.
      </Text>

      <Text style={styles.subTitle}>Tabel Pelanggan</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`CREATE TABLE Pelanggan (\n`}
          {`  pelanggan_id INT PRIMARY KEY,\n`}
          {`  nama VARCHAR(100),\n`}
          {`  email VARCHAR(100),\n`}
          {`  alamat TEXT\n`}
          {`);`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tabel Pesanan</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`CREATE TABLE Pesanan (\n`}
          {`  pesanan_id INT PRIMARY KEY,\n`}
          {`  pelanggan_id INT,\n`}
          {`  tanggal DATE,\n`}
          {`  total DECIMAL(10, 2),\n`}
          {`  FOREIGN KEY (pelanggan_id) REFERENCES Pelanggan(pelanggan_id)\n`}
          {`);`}
        </Text>
      </View>

      <Text style={styles.subTitle}>4. **Pengujian dan Penyempurnaan**</Text>
      <Text style={styles.paragraph}>
        Setelah desain selesai, penting untuk melakukan pengujian terhadap desain database untuk memastikan bahwa itu memenuhi kebutuhan aplikasi dan memiliki kinerja yang baik.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Desain Database</Text>
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

export default DatabaseDesignDetailScreen;
