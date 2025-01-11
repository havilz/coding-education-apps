import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const MongoDBDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.mongodb.com/docs/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu MongoDB?</Text>
      <Text style={styles.paragraph}>
        MongoDB adalah sistem manajemen basis data NoSQL yang berbasis dokumen, open-source, dan dapat diskalakan. MongoDB menyimpan data dalam format JSON (atau BSON - Binary JSON), yang memungkinkan penyimpanan data tidak terstruktur dan fleksibel. MongoDB sering digunakan dalam aplikasi yang membutuhkan skalabilitas tinggi dan pemrosesan data besar.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan MongoDB?</Text>
      <Text style={styles.paragraph}>
        1. **Skalabilitas Tinggi**: MongoDB dirancang untuk menangani volume data yang sangat besar dengan cepat dan efisien.
      </Text>
      <Text style={styles.paragraph}>
        2. **Fleksibilitas**: Dengan menggunakan dokumen BSON, MongoDB dapat menyimpan data tidak terstruktur atau semi-terstruktur.
      </Text>
      <Text style={styles.paragraph}>
        3. **Mudah Digunakan**: MongoDB menggunakan format data JSON yang lebih alami dan mudah dipahami bagi pengembang.
      </Text>
      <Text style={styles.paragraph}>
        4. **Replikasi dan Sharding**: Mendukung replikasi untuk redundansi data dan sharding untuk membagi data di beberapa server.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode CRUD dengan MongoDB</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh kode CRUD untuk menggunakan MongoDB dengan Node.js dan Mongoose (ORM untuk MongoDB):
      </Text>

      <Text style={styles.subTitle}>1. **Create** - Menambah Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const mongoose = require('mongoose');\n\n`}
          {`const User = mongoose.model('User', new mongoose.Schema({ name: String, email: String, age: Number }));\n\n`}
          {`const newUser = new User({ name: 'John Doe', email: 'johndoe@example.com', age: 30 });\n`}
          {`newUser.save().then(() => console.log('User created!'));`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Read** - Mengambil Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`User.find({ age: { $gt: 25 } }).then(users => console.log(users));`}
        </Text>
      </View>

      <Text style={styles.subTitle}>3. **Update** - Memperbarui Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`User.updateOne({ name: 'John Doe' }, { $set: { age: 31 } }).then(() => console.log('User updated!'));`}
        </Text>
      </View>

      <Text style={styles.subTitle}>4. **Delete** - Menghapus Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`User.deleteOne({ name: 'John Doe' }).then(() => console.log('User deleted!'));`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama MongoDB:</Text>
      <Text style={styles.paragraph}>
        - **NoSQL**: MongoDB adalah database NoSQL yang menyimpan data dalam format dokumen BSON yang fleksibel dan terstruktur.
      </Text>
      <Text style={styles.paragraph}>
        - **Skalabilitas Horizontal**: MongoDB mendukung sharding untuk membagi data ke beberapa server, yang memungkinkan skalabilitas tinggi.
      </Text>
      <Text style={styles.paragraph}>
        - **Replikasi**: MongoDB memungkinkan replikasi data untuk meningkatkan ketersediaan dan ketahanan data.
      </Text>
      <Text style={styles.paragraph}>
        - **Indeksasi**: MongoDB mendukung indeksasi untuk mempercepat pencarian data dan query.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi MongoDB</Text>
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

export default MongoDBDetailScreen;
