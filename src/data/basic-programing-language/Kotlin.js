import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const KotlinDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://kotlinlang.org/docs/home.html');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'Kotlin' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Kotlin?</Text>
      <Text style={styles.paragraph}>
        Kotlin adalah bahasa pemrograman statis yang dapat dijalankan di Java Virtual Machine (JVM) dan digunakan untuk mengembangkan aplikasi Android, aplikasi desktop, dan aplikasi web. Kotlin dirancang untuk interoperabilitas penuh dengan Java dan menawarkan sintaksis yang lebih bersih dan lebih ekspresif.
      </Text>

      <Text style={styles.subTitle}>Mengapa Kotlin Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Interoperabilitas dengan Java**: Kotlin dapat bekerja langsung dengan kode Java, memungkinkan pengembang untuk memanfaatkan pustaka dan framework Java yang ada. {'\n'}
        2. **Sintaksis yang Lebih Bersih**: Kotlin menawarkan sintaksis yang lebih sederhana dan lebih mudah dibaca dibandingkan dengan Java. {'\n'}
        3. **Pengembangan Aplikasi Android**: Kotlin telah menjadi bahasa utama untuk pengembangan aplikasi Android di Android Studio.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Kotlin: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`fun factorial(n: Int): Int {\n`}
          {`  if (n <= 1) return 1\n`}
          {`  return n * factorial(n - 1)\n`}
          {`}\n\n`}
          {`println(factorial(5))  // Output: 120`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode Kotlin: Menggunakan List</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`val numbers = listOf(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5)\n`}
          {`val sortedNumbers = numbers.sorted()\n`}
          {`println(sortedNumbers)  // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam Kotlin</Text>
      <Text style={styles.paragraph}>
        Kotlin memiliki berbagai tipe data untuk menyimpan dan memanipulasi data. Berikut adalah tipe data utama:
      </Text>
      <Text style={styles.paragraph}>
        - **String**: Digunakan untuk menyimpan teks, contohnya: {'"Halo Dunia!"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **Int**: Digunakan untuk menyimpan angka bulat, contohnya: {`42`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Double**: Digunakan untuk menyimpan angka desimal, contohnya: {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Boolean**: Nilai logika yang hanya bisa bernilai {`true`} atau {`false`} .
      </Text>
      <Text style={styles.paragraph}>
        - **List**: Koleksi data yang terurut, contohnya: {`listOf(1, 2, 3)`}.
      </Text>

      <Text style={styles.subTitle}>Framework dan Library Populer</Text>
      <Text style={styles.paragraph}>
        Kotlin memiliki berbagai framework dan pustaka yang mempermudah pengembangan aplikasi:
      </Text>
      <Text style={styles.paragraph}>
        - **Ktor**: Framework untuk membuat aplikasi web dengan Kotlin. {'\n'}
        - **Exposed**: Framework ORM untuk bekerja dengan database. {'\n'}
        - **Anko**: Library untuk pengembangan UI Android dengan Kotlin.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Kotlin</Text>
      <Text style={styles.paragraph}>
        - **Null Safety**: Kotlin dirancang untuk menghindari null pointer exception dengan menggunakan sistem tipe yang lebih aman. {'\n'}
        - **Extensibility**: Kotlin memungkinkan pengembang untuk menambah fungsi pada kelas yang sudah ada tanpa mengubahnya. {'\n'}
        - **Coroutines**: Memudahkan pengelolaan operasi asynchronous.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang Kotlin, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi Kotlin.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis Kotlin</Text>
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

export default KotlinDetailScreen;
