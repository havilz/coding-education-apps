import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NetworkingDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.cloudflare.com/learning/networking/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Networking?</Text>
      <Text style={styles.paragraph}>
        Networking adalah proses menghubungkan komputer dan perangkat lain untuk berbagi data dan sumber daya. Dalam konteks internet, ini merujuk pada komunikasi antara server, klien, dan berbagai perangkat di jaringan.
      </Text>

      <Text style={styles.subTitle}>Mengapa Networking Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Komunikasi**: Memungkinkan perangkat untuk berkomunikasi satu sama lain, baik dalam satu lokasi atau di seluruh dunia.
      </Text>
      <Text style={styles.paragraph}>
        2. **Berbagi Sumber Daya**: Perangkat dapat berbagi file, aplikasi, dan akses ke perangkat keras lainnya melalui jaringan.
      </Text>
      <Text style={styles.paragraph}>
        3. **Keamanan**: Mengatur akses ke data dan perangkat yang saling terhubung dengan mekanisme keamanan untuk melindungi dari ancaman.
      </Text>
      <Text style={styles.paragraph}>
        4. **Skalabilitas**: Dengan jaringan yang tepat, organisasi dapat menambah perangkat atau lokasi tanpa mengubah infrastruktur secara besar-besaran.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Networking:</Text>
      <Text style={styles.paragraph}>
        - **Protokol Jaringan**: Protokol seperti TCP/IP digunakan untuk mengatur komunikasi antara perangkat di jaringan.
      </Text>
      <Text style={styles.paragraph}>
        - **Alamat IP**: Alamat unik yang digunakan untuk mengidentifikasi perangkat di jaringan.
      </Text>
      <Text style={styles.paragraph}>
        - **Switching dan Routing**: Mengarahkan data ke perangkat yang tepat melalui jaringan.
      </Text>
      <Text style={styles.paragraph}>
        - **Keamanan Jaringan**: Firewall, enkripsi, dan otentikasi digunakan untuk melindungi data dan mencegah akses yang tidak sah.
      </Text>

      <Text style={styles.subTitle}>Jenis-jenis Jaringan:</Text>
      <Text style={styles.paragraph}>
        1. **LAN (Local Area Network)**: Jaringan lokal yang menghubungkan perangkat dalam area terbatas seperti rumah atau kantor.
      </Text>
      <Text style={styles.paragraph}>
        2. **WAN (Wide Area Network)**: Jaringan yang mencakup area yang lebih luas, sering digunakan untuk menghubungkan beberapa kantor di lokasi yang berbeda.
      </Text>
      <Text style={styles.paragraph}>
        3. **MAN (Metropolitan Area Network)**: Jaringan yang menghubungkan area yang lebih besar daripada LAN, tetapi lebih kecil dari WAN, seperti kota atau kampus.
      </Text>
      <Text style={styles.paragraph}>
        4. **VPN (Virtual Private Network)**: Jaringan pribadi yang digunakan untuk mengakses internet secara aman dan pribadi melalui koneksi publik.
      </Text>

      <Text style={styles.subTitle}>Protokol yang Digunakan dalam Networking:</Text>
      <Text style={styles.paragraph}>
        1. **TCP/IP**: Protokol yang digunakan untuk menghubungkan perangkat di jaringan.
      </Text>
      <Text style={styles.paragraph}>
        2. **HTTP/HTTPS**: Protokol yang digunakan untuk komunikasi web antara klien dan server.
      </Text>
      <Text style={styles.paragraph}>
        3. **FTP**: Protokol untuk mentransfer file antar perangkat di jaringan.
      </Text>
      <Text style={styles.paragraph}>
        4. **DNS**: Sistem yang mengubah nama domain menjadi alamat IP yang dapat dibaca komputer.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Networking</Text>
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

export default NetworkingDetailScreen;
