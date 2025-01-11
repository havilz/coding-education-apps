import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const NodeJSDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://nodejs.org/en/docs/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'Node.js' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Node.js?</Text>
      <Text style={styles.paragraph}>
        Node.js adalah platform berbasis JavaScript yang digunakan untuk membangun aplikasi server-side. Node.js memungkinkan penggunaan JavaScript untuk menulis kode yang dapat berjalan di sisi server, bukan hanya di browser, menjadikannya ideal untuk membangun aplikasi web yang cepat dan skalabel.
      </Text>

      <Text style={styles.subTitle}>Mengapa Node.js Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Asynchronous**: Node.js menggunakan model I/O non-blocking yang memungkinkan eksekusi banyak permintaan secara bersamaan tanpa menunggu satu sama lain. {'\n'}
        2. **Fast and Scalable**: Node.js menggunakan V8 JavaScript engine dari Google, yang terkenal cepat dalam menjalankan kode JavaScript. {'\n'}
        3. **NPM (Node Package Manager)**: Dengan lebih dari satu juta paket, NPM mempermudah pengembangan aplikasi dengan menyediakan pustaka dan tools siap pakai.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Node.js: Server Sederhana</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const http = require('http');\n`}
          {`const server = http.createServer((req, res) => {\n`}
          {`  res.statusCode = 200;\n`}
          {`  res.setHeader('Content-Type', 'text/plain');\n`}
          {`  res.end('Hello, World!');\n`}
          {`});\n\n`}
          {`server.listen(3000, () => {\n`}
          {`  console.log('Server is running on port 3000');\n`}
          {`});`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode Node.js: Menggunakan Express</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const express = require('express');\n`}
          {`const app = express();\n\n`}
          {`app.get('/', (req, res) => {\n`}
          {`  res.send('Hello, World!');\n`}
          {`});\n\n`}
          {`app.listen(3000, () => {\n`}
          {`  console.log('Server is running on port 3000');\n`}
          {`});`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama Node.js</Text>
      <Text style={styles.paragraph}>
        - **Event-Driven**: Node.js sangat bergantung pada sistem event dan callback, memungkinkan aplikasi menangani banyak koneksi secara simultan. {'\n'}
        - **Non-Blocking I/O**: Operasi I/O dilakukan secara asinkron, yang membuatnya sangat efisien dalam menangani banyak permintaan. {'\n'}
        - **Single Threaded**: Node.js menggunakan satu thread utama untuk menjalankan aplikasi, meskipun memungkinkan untuk menangani banyak koneksi bersamaan.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang Node.js, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi Node.js.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis Node.js</Text>
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
    marginBottom: 15,
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
  link: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  quizButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  quizButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NodeJSDetailScreen;
