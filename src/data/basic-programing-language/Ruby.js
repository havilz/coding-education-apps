import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const RubyDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://www.ruby-lang.org/en/documentation/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'Ruby' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Ruby?</Text>
      <Text style={styles.paragraph}>
        Ruby adalah bahasa pemrograman yang berorientasi objek dan dinamis, dibuat oleh Yukihiro "Matz" Matsumoto. Ruby dirancang untuk menjadi bahasa yang mudah dipahami dan menekankan produktivitas pengembang. Ruby sering digunakan untuk pengembangan web, terutama dengan framework Ruby on Rails.
      </Text>

      <Text style={styles.subTitle}>Mengapa Ruby Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Bahasa Dinamis**: Ruby memungkinkan perubahan objek saat runtime. {'\n'}
        2. **Sintaks Sederhana**: Ruby memiliki sintaks yang sangat sederhana dan mudah dibaca, menjadikannya sangat ramah bagi pemula. {'\n'}
        3. **Framework Ruby on Rails**: Ruby terkenal karena framework Ruby on Rails yang memungkinkan pengembangan aplikasi web dengan cepat.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Ruby: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`def factorial(n)\n`}
          {`  return 1 if n <= 1\n`}
          {`  n * factorial(n - 1)\n`}
          {`end\n\n`}
          {`puts factorial(5)  # Output: 120`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode Ruby: Menggunakan Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]\n`}
          {`numbers.sort!}\n`}
          {`puts numbers  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam Ruby</Text>
      <Text style={styles.paragraph}>
        Ruby memiliki berbagai tipe data yang digunakan untuk menyimpan dan memanipulasi data. Berikut adalah tipe data utama:
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
        - **Array**: Koleksi data yang terurut, contohnya: {`[1, 2, 3]`}.
      </Text>

      <Text style={styles.subTitle}>Library dan Framework Populer</Text>
<Text style={styles.paragraph}>
  Ruby memiliki berbagai pustaka dan framework yang digunakan dalam pengembangan:
</Text>
<Text style={styles.paragraph}>
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Ruby on Rails' })}
  >
    Ruby on Rails
  </Text>
  : Framework web yang memungkinkan pengembangan aplikasi web secara cepat dan efisien. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Sinatra' })}
  >
    Sinatra
  </Text>
  : Framework web sederhana untuk aplikasi web kecil. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'RSpec' })}
  >
    RSpec
  </Text>
  : Framework testing untuk aplikasi Ruby.
</Text>


      <Text style={styles.subTitle}>Fitur Utama Ruby</Text>
      <Text style={styles.paragraph}>
        - **Semua Objek**: Di Ruby, hampir segala sesuatu adalah objek, memungkinkan Anda untuk memanfaatkan kemampuan penuh dari pemrograman berorientasi objek. {'\n'}
        - **Duck Typing**: Ruby menggunakan konsep duck typing, yang berarti Anda tidak perlu mendeklarasikan tipe objek secara eksplisit. {'\n'}
        - **Garbage Collection**: Ruby memiliki pengelolaan memori otomatis, yang menghapus objek yang tidak lagi digunakan.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang Ruby, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi Ruby.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis Ruby</Text>
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

export default RubyDetailScreen;
