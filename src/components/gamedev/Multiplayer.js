import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const MultiplayerNetworkingDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.unity.com/MultiplayerNetworking');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pengenalan Multiplayer & Networking dalam Game</Text>
      <Text style={styles.paragraph}>
        **Multiplayer dan networking** dalam game merujuk pada kemampuan untuk menghubungkan beberapa pemain dalam sebuah permainan yang sama secara bersamaan melalui jaringan. Sistem ini memungkinkan pemain untuk berinteraksi satu sama lain, baik dalam bentuk kompetisi, kolaborasi, atau hanya sekedar bermain bersama dalam dunia game yang terhubung secara online.
      </Text>

      <Text style={styles.subTitle}>Mengapa Multiplayer & Networking Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Interaksi Sosial**: Multiplayer memungkinkan pemain untuk berinteraksi dengan orang lain, menciptakan pengalaman sosial yang menarik dan menghibur.
      </Text>
      <Text style={styles.paragraph}>
        2. **Skala dan Daya Tarik**: Game multiplayer sering kali memiliki daya tarik yang lebih besar karena mereka menawarkan lebih banyak peluang untuk kompetisi, kerja tim, dan pengalaman dinamis.
      </Text>
      <Text style={styles.paragraph}>
        3. **Peningkatan Replayability**: Game multiplayer menawarkan replayability yang lebih tinggi karena pengalaman permainan dapat bervariasi dari satu sesi ke sesi lainnya.
      </Text>

      <Text style={styles.subTitle}>Jenis-Jenis Multiplayer</Text>
      <Text style={styles.paragraph}>
        Multiplayer game dapat dibagi ke dalam beberapa kategori berdasarkan cara pemain berinteraksi dalam permainan:
      </Text>

      <Text style={styles.subTitle}>1. **Local Multiplayer (LAN)**</Text>
      <Text style={styles.paragraph}>
        Local multiplayer mengacu pada permainan yang dimainkan oleh beberapa pemain yang terhubung melalui jaringan lokal (LAN) atau bahkan menggunakan satu perangkat yang sama.
      </Text>

      <Text style={styles.subTitle}>2. **Online Multiplayer**</Text>
      <Text style={styles.paragraph}>
        Online multiplayer memungkinkan pemain untuk terhubung melalui internet, memainkan permainan yang sama dari lokasi yang berbeda, dan berinteraksi secara real-time.
      </Text>

      <Text style={styles.subTitle}>3. **Cooperative Multiplayer**</Text>
      <Text style={styles.paragraph}>
        Cooperative multiplayer adalah mode di mana pemain bekerja bersama untuk mencapai tujuan bersama, seperti yang terlihat dalam game petualangan atau RPG yang memiliki elemen kolaboratif.
      </Text>

      <Text style={styles.subTitle}>4. **Competitive Multiplayer**</Text>
      <Text style={styles.paragraph}>
        Dalam competitive multiplayer, pemain saling bersaing satu sama lain, seperti dalam game battle royale atau game olahraga.
      </Text>

      <Text style={styles.subTitle}>5. **Massively Multiplayer Online (MMO)**</Text>
      <Text style={styles.paragraph}>
        MMO adalah game yang memungkinkan ribuan pemain untuk bermain bersama dalam dunia yang sama, seperti yang terlihat dalam game seperti *World of Warcraft* atau *Final Fantasy XIV*.
      </Text>

      <Text style={styles.subTitle}>Networking dalam Game</Text>
      <Text style={styles.paragraph}>
        Networking dalam game merujuk pada teknologi yang digunakan untuk menghubungkan pemain melalui jaringan. Ada beberapa aspek yang perlu dipertimbangkan dalam membuat game multiplayer:
      </Text>

      <Text style={styles.subTitle}>1. **Client-Server Architecture**</Text>
      <Text style={styles.paragraph}>
        Dalam arsitektur client-server, pemain (klien) mengirimkan data ke server yang mengelola status permainan dan kemudian mengirimkan pembaruan kembali ke klien. Server bertanggung jawab untuk memastikan bahwa permainan tetap sinkron dan aman.
      </Text>

      <Text style={styles.subTitle}>2. **Peer-to-Peer (P2P) Networking**</Text>
      <Text style={styles.paragraph}>
        Dalam arsitektur P2P, setiap pemain bertindak sebagai klien dan server. Setiap pemain terhubung langsung dengan pemain lainnya untuk mentransfer data, mengurangi kebutuhan untuk server pusat.
      </Text>

      <Text style={styles.subTitle}>3. **Latency dan Lag**</Text>
      <Text style={styles.paragraph}>
        Latency merujuk pada keterlambatan yang terjadi saat data dikirim antara pemain dan server. Lag adalah efek yang terlihat ketika latensi tinggi menyebabkan pengalaman bermain yang terhambat, misalnya saat gerakan karakter tertunda.
      </Text>

      <Text style={styles.subTitle}>4. **Syncing dan State Management**</Text>
      <Text style={styles.paragraph}>
        Untuk memastikan pengalaman yang lancar, semua pemain harus melihat status permainan yang konsisten. State management adalah cara data permainan dikelola di server dan disinkronkan dengan klien untuk memastikan semua pemain melihat dunia permainan yang sama.
      </Text>

      <Text style={styles.subTitle}>Protokol dalam Game Networking</Text>
      <Text style={styles.paragraph}>
        Berbagai protokol digunakan untuk mendukung komunikasi dalam game multiplayer, seperti:
      </Text>

      <Text style={styles.subTitle}>1. **TCP (Transmission Control Protocol)**</Text>
      <Text style={styles.paragraph}>
        TCP adalah protokol yang digunakan untuk mentransfer data secara terjamin dan reliabel, memastikan bahwa data yang dikirimkan sampai dengan benar. Biasanya digunakan dalam game dengan kebutuhan data yang lebih penting, seperti pertukaran status permainan.
      </Text>

      <Text style={styles.subTitle}>2. **UDP (User Datagram Protocol)**</Text>
      <Text style={styles.paragraph}>
        UDP adalah protokol yang lebih cepat dibandingkan TCP, namun tanpa jaminan pengiriman data. Ini sering digunakan dalam game aksi cepat, di mana kecepatan lebih penting daripada keakuratan sempurna.
      </Text>

      <Text style={styles.subTitle}>Contoh Implementasi Multiplayer</Text>
      <Text style={styles.paragraph}>
        Untuk mengimplementasikan multiplayer dalam game, pengembang dapat menggunakan berbagai platform dan framework yang menawarkan solusi siap pakai untuk komunikasi jaringan:
      </Text>

      <Text style={styles.subTitle}>1. **Unity Multiplayer**</Text>
      <Text style={styles.paragraph}>
        Unity menyediakan sistem multiplayer built-in yang memungkinkan pengembang untuk membuat game multiplayer berbasis client-server atau P2P dengan fitur-fitur seperti matchmaking dan real-time synchronization.
      </Text>

      <Text style={styles.subTitle}>2. **Unreal Engine Networking**</Text>
      <Text style={styles.paragraph}>
        Unreal Engine menawarkan fitur networking yang kuat, termasuk sistem dedicated server, replicator untuk menyinkronkan objek antara server dan klien, serta solusi untuk menangani latency dan optimisasi.
      </Text>

      <Text style={styles.subTitle}>3. **Photon Engine**</Text>
      <Text style={styles.paragraph}>
        Photon Engine adalah salah satu layanan pihak ketiga yang sering digunakan untuk mengembangkan game multiplayer, dengan fokus pada kecepatan, skalabilitas, dan kemudahan integrasi dalam berbagai platform.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Multiplayer & Networking</Text>
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

export default MultiplayerNetworkingDetailScreen;
