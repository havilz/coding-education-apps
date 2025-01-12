import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const AndroidDetailScreen = ({ navigation }) => {
  const handleQuizButtonPress = () => {
    // Buka dokumentasi Android
    Linking.openURL('https://developer.android.com/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Android?</Text>
      <Text style={styles.paragraph}>
        Android adalah sistem operasi berbasis Linux yang dirancang untuk perangkat seluler seperti smartphone dan tablet. Android menyediakan platform terbuka bagi para pengembang untuk menciptakan aplikasi inovatif yang memanfaatkan sepenuhnya kemampuan perangkat keras dan perangkat lunak.
      </Text>

      <Text style={styles.subTitle}>Hubungan Android dengan Java</Text>
      <Text style={styles.paragraph}>
        Java adalah bahasa pemrograman utama yang digunakan untuk pengembangan aplikasi Android sejak awal. Hubungan antara Android dan Java dapat dijelaskan sebagai berikut:
      </Text>
      <Text style={styles.paragraph}>
        - **API Android Berbasis Java**: Sebagian besar API Android dirancang menggunakan Java, sehingga pengembang dapat memanfaatkan pustaka Java yang kaya. {'\n'}
        - **Kemudahan Adopsi**: Banyak pengembang sudah familiar dengan Java, sehingga memudahkan mereka untuk mulai mengembangkan aplikasi Android. {'\n'}
        - **Kompatibilitas**: Android Runtime (ART) dirancang untuk menjalankan bytecode Java, yang dihasilkan dari kompilasi kode sumber Java.
      </Text>
      <Text style={styles.paragraph}>
        Namun, karena Java adalah bahasa yang lebih tua, pengembang mungkin menghadapi beberapa keterbatasan, seperti verbose (terlalu panjang) dan kurangnya fitur modern seperti ekstensi fungsi dan null safety yang lebih baik.
      </Text>
      <Text style={styles.paragraph}>
        Untuk mempelajari tentang Java yang digunakan, Anda dapat mengunjungi halaman berikut:{'\n'}
        - <Text
            style={[styles.link, { color: 'blue' }]}
            onPress={() => navigation.navigate('Java')}
          >
            Pelajari lebih lanjut tentang Java
          </Text>{'\n'}
      </Text>

      <Text style={styles.subTitle}>Hubungan Android dengan Kotlin</Text>
      <Text style={styles.paragraph}>
        Kotlin adalah bahasa pemrograman modern yang diperkenalkan sebagai bahasa resmi untuk pengembangan Android oleh Google pada tahun 2017. Hubungan Android dengan Kotlin meliputi:
      </Text>
      <Text style={styles.paragraph}>
        - **Pengembangan Lebih Cepat dan Aman**: Kotlin dirancang dengan fitur seperti null safety dan ekstensi fungsi, yang membantu mengurangi bug dan membuat pengembangan lebih efisien. {'\n'}
        - **Interoperabilitas dengan Java**: Kotlin dapat bekerja bersama kode Java yang sudah ada, sehingga pengembang dapat mengadopsi Kotlin secara bertahap tanpa harus mengubah seluruh proyek. {'\n'}
        - **Dukungan Google dan Komunitas**: Kotlin didukung penuh oleh Google untuk pengembangan Android, dan komunitasnya terus berkembang pesat.
      </Text>
      <Text style={styles.paragraph}>
        Dengan Kotlin, pengembang dapat menulis kode yang lebih bersih, ringkas, dan mudah dibaca dibandingkan dengan Java.
      </Text>
      <Text style={styles.paragraph}>
        Untuk mempelajari tentang Kotlin yang digunakan, Anda dapat mengunjungi halaman berikut:{'\n'}
        - <Text
            style={[styles.link, { color: 'blue' }]}
            onPress={() => navigation.navigate('Kotlin')}
          >
            Pelajari lebih lanjut tentang Kotlin
          </Text>{'\n'}
      </Text>

      <Text style={styles.subTitle}>Java vs Kotlin untuk Android</Text>
      <Text style={styles.paragraph}>
        Meskipun keduanya dapat digunakan untuk pengembangan Android, berikut adalah perbandingannya:
      </Text>
      <Text style={styles.paragraph}>
        - **Java**: Stabil dan memiliki komunitas besar, tetapi lebih verbose dan kurang mendukung fitur modern. {'\n'}
        - **Kotlin**: Bahasa yang lebih baru dengan sintaks yang lebih modern, mendukung null safety, dan lebih efisien untuk pengembangan aplikasi Android.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode: Hello World di Kotlin</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`fun main() {\n`}
          {`  println("Hello, Android World!")\n`}
          {`}`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode: Membuat Intent di Java</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`Intent intent = new Intent(CurrentActivity.this, TargetActivity.class);\n`}
          {`startActivity(intent);`}
        </Text>
      </View>

      {/* Penambahan Penjelasan tentang Deployment dan Store */}
      <Text style={styles.subTitle}>Deployment dan Store di Android</Text>
      <Text style={styles.paragraph}>
        Setelah aplikasi Android selesai dikembangkan, langkah selanjutnya adalah meng-deploy aplikasi ke platform distribusi aplikasi, yaitu Google Play Store. Berikut adalah langkah-langkah penting dalam proses deployment:
      </Text>
      
      <Text style={styles.paragraph}>
        - **Membuat Akun Pengembang di Google Play Console**: Anda perlu mendaftar dan membuat akun pengembang di [Google Play Console](https://play.google.com/console/). Akun ini memungkinkan Anda untuk mengelola aplikasi yang akan di-upload dan diterbitkan di Play Store.
      </Text>
      
      <Text style={styles.paragraph}>
        - **Mempersiapkan Aplikasi untuk Distribusi**: Sebelum aplikasi dapat di-upload ke Google Play Store, aplikasi harus dikompilasi dalam format APK (Android Package) atau AAB (Android App Bundle). AAB lebih dianjurkan karena memungkinkan ukuran aplikasi lebih kecil untuk berbagai perangkat Android.
      </Text>
      
      <Text style={styles.paragraph}>
        - **Menguji Aplikasi**: Sebelum diterbitkan, pastikan aplikasi Anda telah diuji dengan baik di berbagai perangkat dan versi Android. Anda bisa menggunakan emulator atau perangkat fisik untuk melakukan pengujian.
      </Text>
      
      <Text style={styles.paragraph}>
        - **Meng-upload Aplikasi ke Google Play Store**: Setelah aplikasi siap, Anda dapat meng-upload file APK atau AAB ke Google Play Console. Setelah di-upload, Google akan memverifikasi aplikasi dan melakukan pemeriksaan keamanan sebelum aplikasi diterbitkan.
      </Text>
      
      <Text style={styles.paragraph}>
        - **Menambahkan Deskripsi dan Screenshots**: Pada halaman pengelolaan aplikasi di Play Console, Anda harus menyediakan deskripsi aplikasi, kategori aplikasi, dan screenshots atau video yang menunjukkan fitur aplikasi Anda.
      </Text>
      
      <Text style={styles.paragraph}>
        - **Menunggu Persetujuan**: Setelah aplikasi dikirim, Google akan memverifikasi aplikasi Anda, yang bisa memakan waktu beberapa jam hingga beberapa hari. Jika aplikasi lolos verifikasi, aplikasi akan diterbitkan di Play Store dan dapat diunduh oleh pengguna.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang proses deployment, Anda dapat mengunjungi dokumentasi resmi Android: {'\n'}
        - <Text
            style={[styles.link, { color: 'blue' }]}
            onPress={() => Linking.openURL('https://developer.android.com/studio/publish')}
          >
            Pelajari lebih lanjut tentang Deployment dan Publish di Google Play
          </Text>{'\n'}
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={handleQuizButtonPress}>
        <Text style={styles.quizButtonText}>Kunjungi Dokumentasi Android</Text>
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
    textDecorationLine: 'underline',
  },
  quizButton: {
    backgroundColor: '#007ACC',
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

export default AndroidDetailScreen;
