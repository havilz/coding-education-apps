import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const SwiftDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://developer.apple.com/swift/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'Swift' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Swift?</Text>
      <Text style={styles.paragraph}>
        Swift adalah bahasa pemrograman yang dikembangkan oleh Apple untuk membangun aplikasi di platform Apple, termasuk iOS, macOS, watchOS, dan tvOS. Swift menawarkan sintaksis yang bersih, modern, dan lebih aman dibandingkan dengan bahasa pemrograman lain seperti Objective-C.
      </Text>

      <Text style={styles.subTitle}>Mengapa Swift Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Keamanan**: Swift dirancang dengan memperhatikan keamanan, dengan pengecekan tipe data yang lebih ketat dan pengelolaan memori otomatis. {'\n'}
        2. **Kinerja Tinggi**: Swift memiliki kinerja yang sangat baik berkat optimasi dan kemampuan kompilasi yang sangat cepat. {'\n'}
        3. **Pengembangan Aplikasi Apple**: Swift adalah bahasa utama untuk pengembangan aplikasi di ekosistem Apple, termasuk iOS dan macOS.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Swift: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`import Foundation`}{'\n\n'}
          {`func factorial(_ n: Int) -> Int {`}{'\n'}
          {`  if n == 0 {`}{'\n'}
          {`    return 1`}{'\n'}
          {`  }`}{'\n'}
          {`  return n * factorial(n - 1)`}{'\n'}
          {`}`}{'\n\n'}
          {`print(factorial(5))  // Output: 120`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode Swift: Menggunakan Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`var numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]`}{'\n'}
          {`numbers.sort()`}{'\n'}
          {`print(numbers)  // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam Swift</Text>
      <Text style={styles.paragraph}>
        Swift memiliki berbagai tipe data yang digunakan untuk menyimpan dan memanipulasi data. Berikut adalah tipe data utama:
      </Text>
      <Text style={styles.paragraph}>
        - **Int**: Digunakan untuk menyimpan angka bulat, contoh: {`42`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Double**: Digunakan untuk menyimpan angka desimal, contoh: {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **String**: Digunakan untuk menyimpan teks, contoh: {'"Halo Dunia"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **Bool**: Nilai logika yang hanya bisa bernilai {`true`} atau {`false`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Array**: Koleksi data dalam urutan, contoh: {`[1, 2, 3, 4]`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Dictionary**: Koleksi data dalam pasangan kunci-nilai, contoh: {`["name": "John", "age": 30]`}.
      </Text>

      <Text style={styles.subTitle}>Framework dan Library Populer</Text>
      <Text style={styles.paragraph}>
        Swift memiliki berbagai pustaka dan framework yang digunakan untuk membangun aplikasi modern:
      </Text>
      <Text style={styles.paragraph}>
        - **UIKit**: Framework utama untuk membangun antarmuka pengguna di iOS. {'\n'}
        - **SwiftUI**: Framework deklaratif untuk membangun antarmuka pengguna di seluruh platform Apple. {'\n'}
        - **CoreData**: Framework untuk pengelolaan data lokal dalam aplikasi. {'\n'}
        - **Alamofire**: Library untuk melakukan permintaan HTTP yang mudah dan efisien.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Swift</Text>
      <Text style={styles.paragraph}>
        - **Keamanan Tipe Data**: Swift memastikan tipe data sesuai dengan yang diharapkan, mengurangi potensi kesalahan. {'\n'}
        - **Pengelolaan Memori Otomatis**: Swift menggunakan ARC (Automatic Reference Counting) untuk mengelola memori secara otomatis. {'\n'}
        - **Sintaksis Bersih**: Swift menawarkan sintaksis yang lebih modern dan mudah dibaca. {'\n'}
        - **Interoperabilitas dengan Objective-C**: Swift dapat bekerja dengan kode Objective-C yang sudah ada.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang Swift, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi Swift.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis Swift</Text>
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

export default SwiftDetailScreen;
