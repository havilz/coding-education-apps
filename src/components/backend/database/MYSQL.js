import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const MySQLDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://dev.mysql.com/doc/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu MySQL?</Text>
      <Text style={styles.paragraph}>
        MySQL adalah sistem manajemen basis data (DBMS) yang bersifat open-source dan berbasis relasional. MySQL sering digunakan untuk menyimpan dan mengelola data aplikasi berbasis web. Dengan kemampuan untuk menangani volume data besar, MySQL merupakan pilihan utama untuk banyak aplikasi, terutama yang berbasis PHP.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan MySQL?</Text>
      <Text style={styles.paragraph}>
        1. **Open-Source**: MySQL adalah perangkat lunak bebas yang memungkinkan pengguna untuk memodifikasi dan menyesuaikan basis data sesuai kebutuhan.
      </Text>
      <Text style={styles.paragraph}>
        2. **Kecepatan dan Performa**: MySQL dioptimalkan untuk kecepatan dan kinerja yang tinggi, terutama dalam aplikasi berbasis web.
      </Text>
      <Text style={styles.paragraph}>
        3. **Kompatibilitas**: MySQL mendukung berbagai bahasa pemrograman, termasuk PHP, Java, dan Python, serta dapat berjalan pada berbagai platform seperti Windows, Linux, dan macOS.
      </Text>
      <Text style={styles.paragraph}>
        4. **Keamanan**: MySQL memiliki fitur keamanan yang baik, termasuk kontrol akses pengguna, enkripsi data, dan audit log.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode SQL untuk Sistem CRUD</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh kode SQL untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada basis data MySQL:
      </Text>

      <Text style={styles.subTitle}>1. **Create** - Menambah Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`INSERT INTO users (name, email, age) VALUES ('John Doe', 'johndoe@example.com', 30);`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Read** - Mengambil Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`SELECT * FROM users WHERE age > 25;`}
        </Text>
      </View>

      <Text style={styles.subTitle}>3. **Update** - Memperbarui Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`UPDATE users SET age = 31 WHERE name = 'John Doe';`}
        </Text>
      </View>

      <Text style={styles.subTitle}>4. **Delete** - Menghapus Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`DELETE FROM users WHERE name = 'John Doe';`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama MySQL:</Text>
      <Text style={styles.paragraph}>
        - **Query Language**: MySQL menggunakan SQL (Structured Query Language) untuk berinteraksi dengan basis data.
      </Text>
      <Text style={styles.paragraph}>
        - **Indeks**: MySQL memungkinkan pembuatan indeks untuk mempercepat pencarian data.
      </Text>
      <Text style={styles.paragraph}>
        - **Transaksi**: Mendukung transaksi untuk menjaga konsistensi dan integritas data.
      </Text>
      <Text style={styles.paragraph}>
        - **Replikasi**: MySQL mendukung replikasi untuk meningkatkan ketersediaan dan keandalan basis data.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi MySQL</Text>
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

export default MySQLDetailScreen;
