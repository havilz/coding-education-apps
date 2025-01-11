import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const DockerDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.docker.com/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Docker?</Text>
      <Text style={styles.paragraph}>
        Docker adalah platform open-source yang memungkinkan pengembang untuk membuat, menguji, dan menyebarkan aplikasi dalam kontainer. Kontainer memungkinkan aplikasi berjalan secara konsisten di berbagai lingkungan, baik itu di mesin lokal, server, atau cloud. Docker memungkinkan pengemasan aplikasi dan dependensinya dalam satu unit yang dapat dipindahkan dan dijalankan di mana saja.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Docker?</Text>
      <Text style={styles.paragraph}>
        1. **Portabilitas**: Aplikasi dalam kontainer dapat dijalankan di lingkungan apa pun tanpa khawatir tentang perbedaan konfigurasi.
      </Text>
      <Text style={styles.paragraph}>
        2. **Isolasi**: Setiap kontainer berjalan dalam lingkungan terisolasi, yang meminimalkan konflik antara aplikasi dan dependensinya.
      </Text>
      <Text style={styles.paragraph}>
        3. **Efisiensi**: Docker menggunakan sumber daya sistem lebih efisien dibandingkan dengan virtualisasi tradisional.
      </Text>
      <Text style={styles.paragraph}>
        4. **Skalabilitas**: Docker memungkinkan pembuatan aplikasi yang dapat diskalakan dengan mudah, mendukung berbagai arsitektur seperti microservices.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Docker</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh penggunaan Docker untuk menjalankan aplikasi berbasis Node.js menggunakan Docker:
      </Text>

      <Text style={styles.subTitle}>1. **Dockerfile**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`# Dockerfile untuk aplikasi Node.js\n`}
          {`FROM node:14\n`}
          {`WORKDIR /app\n`}
          {`COPY package*.json .\n`}
          {`RUN npm install\n`}
          {`COPY . .\n`}
          {`EXPOSE 3000\n`}
          {`CMD ["npm", "start"]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Build Docker Image**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`# Membangun Docker image\n`}
          {`docker build -t my-node-app .`}
        </Text>
      </View>

      <Text style={styles.subTitle}>3. **Run Docker Container**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`# Menjalankan aplikasi di dalam container\n`}
          {`docker run -p 3000:3000 my-node-app`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama Docker:</Text>
      <Text style={styles.paragraph}>
        - **Kontainerisasi**: Docker memungkinkan pengemasan aplikasi beserta dependensinya ke dalam kontainer yang dapat dijalankan di berbagai platform.
      </Text>
      <Text style={styles.paragraph}>
        - **Docker Hub**: Repositori untuk berbagi dan mengunduh image Docker yang siap pakai.
      </Text>
      <Text style={styles.paragraph}>
        - **Docker Compose**: Alat untuk mendefinisikan dan menjalankan aplikasi multi-kontainer.
      </Text>
      <Text style={styles.paragraph}>
        - **Docker Swarm & Kubernetes**: Orkestrasi kontainer untuk mengelola aplikasi dalam skala besar dan mengelola container secara terpusat.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Docker</Text>
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

export default DockerDetailScreen;
