import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NginxDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://nginx.org/en/docs/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Nginx?</Text>
      <Text style={styles.paragraph}>
        Nginx adalah server web dan reverse proxy yang sangat cepat dan efisien. Selain berfungsi sebagai server web, Nginx juga dapat digunakan sebagai load balancer, proxy untuk aplikasi web, dan HTTP cache. Nginx dikenal karena kemampuannya dalam menangani banyak koneksi secara bersamaan dan memiliki performa yang sangat baik.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Nginx?</Text>
      <Text style={styles.paragraph}>
        1. **Kinerja Tinggi**: Nginx dapat menangani ribuan koneksi secara bersamaan dengan penggunaan memori yang minimal.
      </Text>
      <Text style={styles.paragraph}>
        2. **Skalabilitas**: Dapat menangani load yang tinggi dengan distribusi traffic secara merata.
      </Text>
      <Text style={styles.paragraph}>
        3. **Rekursi dan Load Balancing**: Nginx dapat digunakan untuk mendistribusikan lalu lintas aplikasi ke berbagai server, sehingga meningkatkan ketersediaan dan keandalan aplikasi.
      </Text>
      <Text style={styles.paragraph}>
        4. **Keamanan**: Dilengkapi dengan fitur keamanan seperti SSL/TLS, proteksi terhadap DDoS, dan kontrol akses berbasis IP.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Nginx:</Text>
      <Text style={styles.paragraph}>
        - **Reverse Proxy**: Nginx dapat diterapkan sebagai reverse proxy yang mendistribusikan lalu lintas ke server backend.
      </Text>
      <Text style={styles.paragraph}>
        - **Load Balancing**: Mendistribusikan lalu lintas secara merata ke beberapa server untuk meningkatkan ketersediaan dan kinerja.
      </Text>
      <Text style={styles.paragraph}>
        - **Web Server**: Sebagai server HTTP yang mengelola dan menyajikan konten statis dan dinamis.
      </Text>
      <Text style={styles.paragraph}>
        - **Caching**: Dapat meng-cache konten untuk meningkatkan waktu muat dan mengurangi beban pada server backend.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Nginx</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh konfigurasi dasar Nginx untuk mengatur server web dan reverse proxy.
      </Text>

      <Text style={styles.subTitle}>1. **Konfigurasi Server Web**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`server {\n`}
          {`  listen 80;\n`}
          {`  server_name example.com;\n`}
          {`  location / {\n`}
          {`    root /var/www/html;\n`}
          {`    index index.html;\n`}
          {`  }\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Konfigurasi Reverse Proxy**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`server {\n`}
          {`  listen 80;\n`}
          {`  server_name example.com;\n`}
          {`  location / {\n`}
          {`    proxy_pass http://localhost:3000;\n`}
          {`    proxy_set_header Host $host;\n`}
          {`    proxy_set_header X-Real-IP $remote_addr;\n`}
          {`    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n`}
          {`  }\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Lain dari Nginx:</Text>
      <Text style={styles.paragraph}>
        - **SSL/TLS**: Nginx mendukung enkripsi menggunakan SSL/TLS untuk melindungi komunikasi antara server dan klien.
      </Text>
      <Text style={styles.paragraph}>
        - **Static Content Serving**: Nginx dapat melayani konten statis seperti gambar, CSS, dan JavaScript dengan sangat efisien.
      </Text>
      <Text style={styles.paragraph}>
        - **Rate Limiting**: Fitur untuk membatasi jumlah permintaan yang diterima oleh server, yang dapat membantu mencegah serangan DDoS.
      </Text>
      <Text style={styles.paragraph}>
        - **WebSocket Support**: Nginx juga dapat digunakan untuk mengelola koneksi WebSocket.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Nginx</Text>
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

export default NginxDetailScreen;
