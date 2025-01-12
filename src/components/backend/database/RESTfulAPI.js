import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const RESTfulAPIDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://restfulapi.net/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu RESTful API?</Text>
      <Text style={styles.paragraph}>
        RESTful API adalah arsitektur API yang memanfaatkan metode HTTP untuk memungkinkan komunikasi antara klien dan server. API ini menggunakan URL untuk mengidentifikasi sumber daya dan metode HTTP standar untuk operasi pada sumber daya tersebut.
      </Text>

      <Text style={styles.subTitle}>Ciri-Ciri RESTful API</Text>
      <Text style={styles.paragraph}>
        1. **Stateless**: Setiap permintaan dari klien ke server harus berisi semua informasi yang diperlukan, dan server tidak menyimpan informasi status klien.{'\n'}
        2. **CRUD Operasi**: RESTful API biasanya menggunakan metode HTTP berikut:{'\n'}
        - `GET`: Untuk mengambil data.{'\n'}
        - `POST`: Untuk membuat data baru.{'\n'}
        - `PUT`: Untuk memperbarui data yang ada.{'\n'}
        - `DELETE`: Untuk menghapus data.{'\n'}
        3. **Sumber Daya Teridentifikasi**: Setiap sumber daya diidentifikasi dengan URL unik.{'\n'}
        4. **Format Data Umum**: RESTful API mendukung format data seperti JSON dan XML untuk komunikasi antara klien dan server.
      </Text>

      <Text style={styles.subTitle}>Contoh Endpoint RESTful API</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh operasi RESTful API untuk sebuah aplikasi yang mengelola data pengguna:
      </Text>

      <Text style={styles.subTitle}>1. **GET** - Mengambil Data Pengguna</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`GET /api/users\n`}
          {`Response: [\n`}
          {`  { "id": 1, "name": "John Doe", "email": "john@example.com" },\n`}
          {`  { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }\n`}
          {`]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **POST** - Menambahkan Pengguna Baru</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`POST /api/users\n`}
          {`Body: { "name": "Alice", "email": "alice@example.com" }\n`}
          {`Response: { "id": 3, "name": "Alice", "email": "alice@example.com" }`}
        </Text>
      </View>

      <Text style={styles.subTitle}>3. **PUT** - Memperbarui Data Pengguna</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`PUT /api/users/1\n`}
          {`Body: { "name": "John Updated", "email": "john_updated@example.com" }\n`}
          {`Response: { "id": 1, "name": "John Updated", "email": "john_updated@example.com" }`}
        </Text>
      </View>

      <Text style={styles.subTitle}>4. **DELETE** - Menghapus Pengguna</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`DELETE /api/users/1\n`}
          {`Response: { "message": "User deleted successfully" }`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Keuntungan RESTful API</Text>
      <Text style={styles.paragraph}>
        - **Kesesuaian dengan HTTP**: RESTful API memanfaatkan sepenuhnya metode dan status HTTP.{'\n'}
        - **Interoperabilitas**: RESTful API mudah diakses oleh berbagai teknologi dan bahasa pemrograman.{'\n'}
        - **Efisiensi Data**: RESTful API mendukung format ringan seperti JSON yang hemat bandwidth.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi RESTful API</Text>
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
    backgroundColor: '#007ACC',
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

export default RESTfulAPIDetailScreen;
