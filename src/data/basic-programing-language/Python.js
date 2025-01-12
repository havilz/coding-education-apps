import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const PythonDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.python.org/3/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'Python' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Python?</Text>
      <Text style={styles.paragraph}>
        Python adalah bahasa pemrograman tingkat tinggi yang digunakan untuk pengembangan web, analisis data, kecerdasan buatan, dan banyak lagi. Python terkenal karena sintaksis yang sederhana dan mudah dipahami.
      </Text>

      <Text style={styles.subTitle}>Mengapa Python Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Sederhana dan Mudah Dipelajari**: Python dirancang untuk kemudahan penggunaan. {'\n'}
        2. **Komunitas Besar**: Python memiliki komunitas yang aktif dan banyak pustaka yang dapat digunakan. {'\n'}
        3. **Penerapan Luas**: Digunakan dalam berbagai bidang seperti pengembangan web, analisis data, pembelajaran mesin, dan lain-lain.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Python: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`def factorial(n):\n`}
          {`    if n <= 1:\n`}
          {`        return 1\n`}
          {`    return n * factorial(n - 1)\n\n`}
          {`print(factorial(5))  # Output: 120`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode Python: Menggunakan List</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]\n`}
          {`numbers.sort()  # Sorting the list\n`}
          {`print(numbers)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam Python</Text>
      <Text style={styles.paragraph}>
        Python memiliki berbagai tipe data seperti:
      </Text>
      <Text style={styles.paragraph}>
        - **String**: Untuk menyimpan teks, contoh: {'"Halo Dunia!"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **Integer**: Untuk menyimpan bilangan bulat, contoh: {`42`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Float**: Untuk menyimpan angka desimal, contoh: {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Boolean**: Nilai {`True`} atau {`False`} untuk logika.
      </Text>
      <Text style={styles.paragraph}>
        - **List**: Koleksi terurut, contoh: {`[1, 2, 3, 4]`}.
      </Text>

      <Text style={styles.subTitle}>Library dan Framework Populer</Text>
<Text style={styles.paragraph}>
  Beberapa pustaka populer di Python:
</Text>
<Text style={styles.paragraph}>
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Django' })}
  >
    Django
  </Text>
  : Framework web yang digunakan untuk membangun aplikasi web secara cepat dan efisien. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Flask' })}
  >
    Flask
  </Text>
  : Framework mikro yang digunakan untuk aplikasi web lebih kecil dan sederhana. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Pandas' })}
  >
    Pandas
  </Text>
  : Library untuk analisis data dan manipulasi struktur data.
</Text>

<Text style={styles.subTitle}>Fitur Utama Python</Text>
<Text style={styles.paragraph}>
  - **Kemudahan Pembelajaran**: Python memiliki sintaksis yang jelas dan mudah dipahami. {'\n'}
  - **Portabilitas**: Python dapat dijalankan di berbagai platform. {'\n'}
  - **Pustaka Standard**: Python dilengkapi dengan pustaka standar yang kaya untuk banyak aplikasi.
</Text>


      <Text style={styles.subTitle}>Fitur Utama Python</Text>
      <Text style={styles.paragraph}>
        - **Kemudahan Pembelajaran**: Python memiliki sintaksis yang jelas dan mudah dipahami. {'\n'}
        - **Portabilitas**: Python dapat dijalankan di berbagai platform. {'\n'}
        - **Pustaka Standard**: Python dilengkapi dengan pustaka standar yang kaya untuk banyak aplikasi.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang Python, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi Python.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis Python</Text>
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

export default PythonDetailScreen;
