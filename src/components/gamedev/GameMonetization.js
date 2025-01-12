import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const GameMonetizationDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.gamasutra.com/view/feature/130535/understanding_game_monetization.php');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Monetisasi Game</Text>
      <Text style={styles.paragraph}>
        **Monetisasi game** adalah proses menghasilkan pendapatan dari game yang dikembangkan. Hal ini melibatkan penerapan berbagai model pendapatan yang memungkinkan pengembang untuk memperoleh keuntungan dari audiens mereka.
      </Text>

      <Text style={styles.subTitle}>Mengapa Monetisasi Game Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Pendapatan Berkelanjutan**: Monetisasi memungkinkan pengembang untuk mendapatkan pendapatan dari game mereka, baik dalam jangka pendek maupun panjang.
      </Text>
      <Text style={styles.paragraph}>
        2. **Mendukung Pengembangan Lebih Lanjut**: Dengan pendapatan yang dihasilkan, pengembang dapat terus memperbarui dan menambah fitur baru ke game mereka, meningkatkan pengalaman pemain.
      </Text>
      <Text style={styles.paragraph}>
        3. **Menjaga Kelangsungan Proyek**: Tanpa model monetisasi yang efektif, game mungkin kesulitan untuk bertahan di pasar atau bahkan untuk biaya pengembangan lebih lanjut.
      </Text>

      <Text style={styles.subTitle}>Model Monetisasi Game</Text>
      <Text style={styles.paragraph}>
        Ada beberapa model monetisasi game yang bisa dipilih oleh pengembang, tergantung pada jenis game, audiens, dan platform yang digunakan.
      </Text>

      <Text style={styles.subTitle}>1. **Pembelian dalam Aplikasi (In-App Purchases)**</Text>
      <Text style={styles.paragraph}>
        Pembelian dalam aplikasi adalah model monetisasi yang paling umum di game mobile. Pemain dapat membeli item virtual, mata uang dalam game, atau konten premium, seperti skin, karakter tambahan, atau level baru.
      </Text>

      <Text style={styles.subTitle}>2. **Iklan dalam Game (In-Game Ads)**</Text>
      <Text style={styles.paragraph}>
        Iklan dalam game adalah model di mana pengembang mendapatkan pendapatan dengan menampilkan iklan kepada pemain. Tipe iklan yang umum termasuk iklan video, iklan banner, dan iklan interstitial. Pemain bisa diberi insentif untuk menonton iklan, misalnya, dengan menawarkan mata uang virtual atau item in-game sebagai imbalan.
      </Text>

      <Text style={styles.subTitle}>3. **Pembelian Game (Pay-to-Play)**</Text>
      <Text style={styles.paragraph}>
        Model ini mengharuskan pemain untuk membayar sejumlah uang untuk mengunduh dan memainkan game. Ini lebih umum di game premium yang dirilis untuk PC, konsol, atau perangkat mobile.
      </Text>

      <Text style={styles.subTitle}>4. **Langganan (Subscription Model)**</Text>
      <Text style={styles.paragraph}>
        Beberapa game menggunakan model langganan, di mana pemain membayar biaya berlangganan bulanan atau tahunan untuk akses ke konten eksklusif, fitur premium, atau pengalaman bebas iklan. Model ini populer di game MMORPG (Massively Multiplayer Online Role-Playing Games) atau game dengan pembaruan konten rutin.
      </Text>

      <Text style={styles.subTitle}>5. **Freemium**</Text>
      <Text style={styles.paragraph}>
        Model freemium memungkinkan pemain untuk mengunduh dan memainkan game secara gratis, namun dengan pembatasan tertentu. Pemain dapat memilih untuk membeli item tambahan atau upgrade untuk meningkatkan pengalaman mereka.
      </Text>

      <Text style={styles.subTitle}>6. **Crowdfunding**</Text>
      <Text style={styles.paragraph}>
        Crowdfunding adalah cara pengembang untuk mendapatkan dana dari komunitas sebelum atau selama pengembangan game. Platform seperti Kickstarter dan Indiegogo memungkinkan pengembang untuk mengumpulkan dana dari pemain yang tertarik untuk mendukung game.
      </Text>

      <Text style={styles.subTitle}>7. **Penjualan DLC dan Ekspansi**</Text>
      <Text style={styles.paragraph}>
        Setelah game dirilis, pengembang dapat terus menghasilkan pendapatan dengan menawarkan konten tambahan (DLC - Downloadable Content) atau ekspansi berbayar. Ini bisa mencakup level baru, karakter, cerita tambahan, atau mode permainan baru.
      </Text>

      <Text style={styles.subTitle}>Contoh Monetisasi di Platform</Text>
      <Text style={styles.paragraph}>
        Platform seperti **Google Play Store** dan **App Store** memungkinkan pengembang untuk mengimplementasikan model monetisasi seperti pembelian dalam aplikasi dan langganan. Di sisi lain, **Steam** dan **Epic Games Store** lebih fokus pada model pembelian langsung dan penjualan DLC.
      </Text>

      <Text style={styles.subTitle}>Strategi Monetisasi yang Efektif</Text>
      <Text style={styles.paragraph}>
        Agar monetisasi berhasil, pengembang perlu memilih model yang sesuai dengan jenis game dan audiens mereka. Penting untuk menjaga keseimbangan antara menghasilkan pendapatan dan memberikan pengalaman bermain yang menyenangkan tanpa terlalu banyak gangguan dari iklan atau pembelian dalam aplikasi yang memaksa.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Monetisasi Game</Text>
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

export default GameMonetizationDetailScreen;
