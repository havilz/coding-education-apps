import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const PostgreSQLDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.postgresql.org/docs/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu PostgreSQL?</Text>
      <Text style={styles.paragraph}>
        PostgreSQL adalah sistem manajemen basis data relasional (RDBMS) open-source yang sangat kuat dan dapat diandalkan. PostgreSQL mendukung berbagai fitur canggih seperti transaksi ACID, replikasi, dan penyimpanan data yang dapat diperluas, menjadikannya pilihan yang populer untuk aplikasi yang memerlukan keandalan dan skalabilitas tinggi.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan PostgreSQL?</Text>
      <Text style={styles.paragraph}>
        1. **Open-Source**: PostgreSQL adalah perangkat lunak gratis yang dapat dimodifikasi dan digunakan sesuai kebutuhan.
      </Text>
      <Text style={styles.paragraph}>
        2. **Fitur Lengkap**: PostgreSQL mendukung berbagai fitur canggih seperti transaksi ACID, JSON, dan penyimpanan data terstruktur dan tidak terstruktur.
      </Text>
      <Text style={styles.paragraph}>
        3. **Kinerja Tinggi**: PostgreSQL menawarkan kinerja yang sangat baik, terutama dalam menangani data dalam jumlah besar dan aplikasi dengan beban tinggi.
      </Text>
      <Text style={styles.paragraph}>
        4. **Kompatibilitas**: Mendukung berbagai bahasa pemrograman dan platform, serta dapat dijalankan di berbagai sistem operasi.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode SQL untuk Sistem CRUD</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh kode SQL untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada basis data PostgreSQL:
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

      <Text style={styles.subTitle}>Fitur Utama PostgreSQL:</Text>
      <Text style={styles.paragraph}>
        - **ACID Compliance**: PostgreSQL memastikan integritas transaksi melalui dukungan ACID (Atomicity, Consistency, Isolation, Durability).
      </Text>
      <Text style={styles.paragraph}>
        - **JSON Support**: Menyediakan kemampuan untuk menangani data dalam format JSON untuk aplikasi modern.
      </Text>
      <Text style={styles.paragraph}>
        - **Replikasi**: Mendukung replikasi master-slave dan master-master untuk meningkatkan ketersediaan dan skalabilitas.
      </Text>
      <Text style={styles.paragraph}>
        - **Ekstensi**: PostgreSQL memungkinkan penambahan ekstensi untuk meningkatkan fungsionalitas, seperti PostGIS untuk data geospasial.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi PostgreSQL</Text>
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

export default PostgreSQLDetailScreen;
