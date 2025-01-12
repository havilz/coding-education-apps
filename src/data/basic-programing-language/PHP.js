import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const PHPDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://www.php.net/docs.php');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'PHP' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu PHP?</Text>
      <Text style={styles.paragraph}>
        PHP (Hypertext Preprocessor) adalah bahasa pemrograman server-side yang digunakan untuk pengembangan aplikasi web dinamis. PHP dapat disematkan langsung ke dalam HTML dan digunakan untuk menghasilkan konten web secara dinamis, seperti pengolahan form, database, dan pengelolaan sesi.
      </Text>

      <Text style={styles.subTitle}>Mengapa PHP Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Pengembangan Web Dinamis**: PHP memungkinkan pengembang untuk membuat aplikasi web dinamis dengan menggabungkan HTML dan skrip server-side. {'\n'}
        2. **Keterhubungan dengan Database**: PHP mendukung konektivitas yang mudah dengan berbagai sistem manajemen basis data seperti MySQL dan PostgreSQL. {'\n'}
        3. **Open Source**: PHP adalah perangkat lunak sumber terbuka yang dapat digunakan secara gratis.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode PHP: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`<?php\n`}
          {`function factorial($n) {\n`}
          {`  if ($n <= 1) return 1;\n`}
          {`  return $n * factorial($n - 1);\n`}
          {`}\n\n`}
          {`echo factorial(5);  // Output: 120\n`}
          {`?>`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode PHP: Menggunakan Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`<?php\n`}
          {`$numbers = array(3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5);\n`}
          {`sort($numbers);\n`}
          {`print_r($numbers);  // Output: Array ( [0] => 1 [1] => 1 [2] => 2 [3] => 3 [4] => 3 [5] => 4 [6] => 5 [7] => 5 [8] => 5 [9] => 6 [10] => 9 )\n`}
          {`?>`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam PHP</Text>
      <Text style={styles.paragraph}>
        PHP memiliki berbagai tipe data yang digunakan untuk menyimpan dan memanipulasi data. Berikut adalah tipe data utama:
      </Text>
      <Text style={styles.paragraph}>
        - **String**: Digunakan untuk menyimpan teks, contohnya: {'"Halo Dunia!"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **Integer**: Digunakan untuk menyimpan angka bulat, contohnya: {`42`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Float**: Digunakan untuk menyimpan angka desimal, contohnya: {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Boolean**: Nilai logika yang hanya bisa bernilai {`true`} atau {`false`} .
      </Text>
      <Text style={styles.paragraph}>
        - **Array**: Koleksi data yang terurut, contohnya: {`array(1, 2, 3)`}.
      </Text>

      <Text style={styles.subTitle}>Library dan Framework Populer</Text>
<Text style={styles.paragraph}>
  PHP memiliki berbagai pustaka dan framework yang digunakan dalam pengembangan:
</Text>
<Text style={styles.paragraph}>
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Laravel' })}
  >
    Laravel
  </Text>
  : Framework PHP yang sangat populer untuk aplikasi web modern. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Symfony' })}
  >
    Symfony
  </Text>
  : Framework PHP yang digunakan untuk membangun aplikasi enterprise. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'CodeIgniter' })}
  >
    CodeIgniter
  </Text>
  : Framework PHP ringan untuk aplikasi web kecil hingga menengah.
</Text>


      <Text style={styles.subTitle}>Fitur Utama PHP</Text>
      <Text style={styles.paragraph}>
        - **Pengelolaan Form**: PHP memudahkan untuk memproses form HTML dan mengirimkan data ke server. {'\n'}
        - **Koneksi Database**: PHP memungkinkan pengembang untuk membuat aplikasi web yang berinteraksi dengan database MySQL dan lainnya. {'\n'}
        - **Pemrograman Berorientasi Objek**: PHP mendukung paradigma pemrograman berorientasi objek untuk aplikasi yang lebih terstruktur.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang PHP, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi PHP.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis PHP</Text>
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

export default PHPDetailScreen;
