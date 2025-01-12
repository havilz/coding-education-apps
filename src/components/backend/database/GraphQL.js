import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const GraphQLDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://graphql.org/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu GraphQL?</Text>
      <Text style={styles.paragraph}>
        GraphQL adalah bahasa query untuk API dan lingkungan runtime yang menjalankan query tersebut dengan data Anda yang ada. 
        Dengan GraphQL, klien memiliki kontrol penuh atas data apa yang mereka ambil dari server, sehingga memungkinkan query yang lebih efisien dan fleksibel.
      </Text>

      <Text style={styles.subTitle}>Keunggulan GraphQL</Text>
      <Text style={styles.paragraph}>
        1. **Pengambilan Data yang Spesifik**: Klien dapat meminta hanya data yang mereka butuhkan, tanpa over-fetching atau under-fetching.{'\n'}
        2. **API Versi Tunggal**: Tidak seperti REST, GraphQL tidak memerlukan versi API yang berbeda; skema dapat diperbarui tanpa memutuskan kompatibilitas.{'\n'}
        3. **Efisiensi Data**: Dengan satu query, klien dapat mengambil beberapa sumber data yang terhubung secara hierarkis.{'\n'}
        4. **Tipe yang Kuat**: Skema GraphQL didasarkan pada tipe yang kuat, sehingga klien dan server memiliki kontrak eksplisit.
      </Text>

      <Text style={styles.subTitle}>Contoh Query GraphQL</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh query GraphQL dan respons untuk aplikasi pengelolaan pengguna:
      </Text>

      <Text style={styles.subTitle}>1. **Query** - Mengambil Data Pengguna</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`query {\n`}
          {`  users {\n`}
          {`    id\n`}
          {`    name\n`}
          {`    email\n`}
          {`  }\n`}
          {`}`}
        </Text>
      </View>
      <Text style={styles.paragraph}>**Respons:**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`{\n`}
          {`  "data": {\n`}
          {`    "users": [\n`}
          {`      { "id": 1, "name": "John Doe", "email": "john@example.com" },\n`}
          {`      { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }\n`}
          {`    ]\n`}
          {`  }\n`}
          {`}`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Mutation** - Menambahkan Pengguna Baru</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`mutation {\n`}
          {`  addUser(name: "Alice", email: "alice@example.com") {\n`}
          {`    id\n`}
          {`    name\n`}
          {`    email\n`}
          {`  }\n`}
          {`}`}
        </Text>
      </View>
      <Text style={styles.paragraph}>**Respons:**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`{\n`}
          {`  "data": {\n`}
          {`    "addUser": {\n`}
          {`      "id": 3,\n`}
          {`      "name": "Alice",\n`}
          {`      "email": "alice@example.com"\n`}
          {`    }\n`}
          {`  }\n`}
          {`}`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Keuntungan vs REST</Text>
      <Text style={styles.paragraph}>
        - **REST**: Setiap endpoint mengembalikan data tetap, terkadang lebih dari yang diperlukan.{'\n'}
        - **GraphQL**: Query ditentukan oleh klien, sehingga hanya data yang diperlukan yang diambil.{'\n'}
        - **Penggabungan Data**: REST memerlukan banyak permintaan untuk sumber daya terpisah, sedangkan GraphQL menggabungkan semuanya dalam satu permintaan.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi GraphQL</Text>
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

export default GraphQLDetailScreen;
