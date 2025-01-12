import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const GameDeploymentDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.unity.com/Manual/Publishing.html');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Penyebaran Game di Platform</Text>
      <Text style={styles.paragraph}>
        **Penyebaran di platform** adalah proses mengirimkan game dari pengembangan ke platform distribusi seperti PC, konsol, atau perangkat mobile. Tujuan dari proses ini adalah untuk memastikan game berjalan dengan baik di berbagai perangkat dan dapat diakses oleh pemain di seluruh dunia.
      </Text>

      <Text style={styles.subTitle}>Mengapa Penyebaran Game di Platform Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Kompatibilitas Platform**: Game harus dapat berjalan dengan baik di berbagai platform, seperti PC, konsol (PlayStation, Xbox, Nintendo), dan perangkat mobile (Android/iOS).
      </Text>
      <Text style={styles.paragraph}>
        2. **Distribusi dan Aksesibilitas**: Proses penyebaran memastikan game dapat diunduh dan dimainkan oleh audiens yang lebih luas melalui berbagai toko aplikasi dan platform distribusi seperti Steam, PlayStation Store, atau Google Play Store.
      </Text>
      <Text style={styles.paragraph}>
        3. **Optimalisasi dan Kinerja**: Sebelum game dipublikasikan, pengembang harus memastikan game berjalan lancar dengan performa optimal pada setiap platform yang disasar.
      </Text>

      <Text style={styles.subTitle}>Langkah-Langkah dalam Penyebaran Game</Text>
      <Text style={styles.paragraph}>
        Berikut adalah langkah-langkah umum yang dilakukan dalam proses penyebaran game di platform:
      </Text>

      <Text style={styles.subTitle}>1. **Optimalisasi untuk Platform Tertentu**</Text>
      <Text style={styles.paragraph}>
        Sebelum penyebaran, pengembang harus memastikan bahwa game telah dioptimalkan untuk platform yang dituju. Ini mencakup pengaturan grafik, kontrol, dan pengaturan performa yang sesuai dengan karakteristik platform tersebut (misalnya, konsol, PC, atau mobile).
      </Text>

      <Text style={styles.subTitle}>2. **Menguji Kompatibilitas dan Kinerja**</Text>
      <Text style={styles.paragraph}>
        Pengujian kompatibilitas dan kinerja sangat penting untuk memastikan bahwa game berjalan lancar pada perangkat dengan spesifikasi berbeda, tanpa lag atau bug yang mengganggu gameplay.
      </Text>

      <Text style={styles.subTitle}>3. **Persiapan dan Pengemasan Game**</Text>
      <Text style={styles.paragraph}>
        Pada tahap ini, game akan dikemas dalam format yang dapat dipahami oleh platform distribusi. Misalnya, game untuk Steam akan dikemas dalam format yang sesuai dengan Steamworks SDK, atau game untuk Android akan dikemas dalam file APK.
      </Text>

      <Text style={styles.subTitle}>4. **Pengiriman ke Platform Distribusi**</Text>
      <Text style={styles.paragraph}>
        Setelah game siap, pengembang akan mengirimkan game tersebut ke platform distribusi seperti Steam, Epic Games Store, Google Play Store, App Store, atau PlayStation Store. Setiap platform memiliki persyaratan dan prosedur tertentu untuk pengiriman game.
      </Text>

      <Text style={styles.subTitle}>5. **Proses Peninjauan dan Persetujuan**</Text>
      <Text style={styles.paragraph}>
        Platform seperti Google Play Store dan App Store biasanya melakukan proses peninjauan game untuk memastikan game memenuhi pedoman dan standar kualitas mereka. Jika game lolos peninjauan, maka game akan dipublikasikan dan tersedia untuk diunduh oleh pengguna.
      </Text>

      <Text style={styles.subTitle}>6. **Pemeliharaan dan Pembaruan**</Text>
      <Text style={styles.paragraph}>
        Setelah game dirilis, pengembang perlu melakukan pemeliharaan untuk menangani bug yang ditemukan oleh pemain dan merilis pembaruan konten baru, patch, atau fitur tambahan untuk menjaga pemain tetap tertarik.
      </Text>

      <Text style={styles.subTitle}>Platform yang Umum Digunakan untuk Penyebaran Game</Text>
      <Text style={styles.paragraph}>
        Beberapa platform distribusi yang populer digunakan untuk penyebaran game antara lain:
      </Text>

      <Text style={styles.subTitle}>1. **Steam**</Text>
      <Text style={styles.paragraph}>
        Steam adalah salah satu platform terbesar untuk distribusi game di PC. Pengembang dapat mengirimkan game mereka ke Steam dengan menggunakan Steamworks SDK dan mengikuti pedoman distribusi yang ditetapkan oleh Steam.
      </Text>

      <Text style={styles.subTitle}>2. **Epic Games Store**</Text>
      <Text style={styles.paragraph}>
        Epic Games Store menawarkan platform distribusi untuk game PC. Mereka juga menyediakan dukungan untuk pengembang dengan keuntungan finansial yang lebih besar dari penjualan game.
      </Text>

      <Text style={styles.subTitle}>3. **Google Play Store dan App Store**</Text>
      <Text style={styles.paragraph}>
        Untuk game mobile, pengembang dapat mendistribusikan game mereka melalui Google Play Store (Android) dan App Store (iOS). Setiap platform memiliki persyaratan pengiriman yang ketat untuk memastikan kualitas dan keamanan aplikasi.
      </Text>

      <Text style={styles.subTitle}>4. **PlayStation Store, Xbox Store, dan Nintendo eShop**</Text>
      <Text style={styles.paragraph}>
        Platform konsol seperti PlayStation, Xbox, dan Nintendo menyediakan toko mereka masing-masing untuk pengiriman game. Setiap platform memiliki persyaratan teknis dan persetujuan sebelum game dapat dipublikasikan di toko mereka.
      </Text>

      <Text style={styles.subTitle}>5. **Itch.io**</Text>
      <Text style={styles.paragraph}>
        Itch.io adalah platform distribusi game indie yang memungkinkan pengembang untuk mendistribusikan game mereka secara langsung kepada pemain, dengan kontrol penuh atas harga dan konten game.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Penyebaran Game</Text>
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

export default GameDeploymentDetailScreen;
