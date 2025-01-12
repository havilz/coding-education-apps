import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const TypeScriptDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://www.typescriptlang.org/docs/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'TypeScript' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu TypeScript?</Text>
      <Text style={styles.paragraph}>
        TypeScript adalah bahasa pemrograman sumber terbuka yang merupakan superset dari JavaScript. TypeScript menambahkan fitur tipe statis yang memungkinkan pengembang mendeteksi kesalahan lebih awal dan menulis kode yang lebih dapat dipelihara.
      </Text>

      <Text style={styles.subTitle}>Mengapa TypeScript Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Tipe Statis**: TypeScript memungkinkan Anda untuk mendefinisikan tipe data variabel, yang membantu mengurangi kesalahan terkait tipe. {'\n'}
        2. **Pemrograman Berbasis Objek**: TypeScript mendukung paradigma pemrograman berbasis objek, termasuk kelas, antarmuka, dan pewarisan. {'\n'}
        3. **Dukungan untuk JavaScript**: Karena TypeScript adalah superset dari JavaScript, kode JavaScript yang valid juga merupakan kode TypeScript yang valid.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode TypeScript: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`function factorial(n: number): number {\n`}
          {`  if (n <= 1) return 1;\n`}
          {`  return n * factorial(n - 1);\n`}
          {`}\n\n`}
          {`console.log(factorial(5));  // Output: 120`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode TypeScript: Menggunakan Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`let numbers: number[] = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];\n`}
          {`numbers.sort((a, b) => a - b);\n`}
          {`console.log(numbers);  // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam TypeScript</Text>
      <Text style={styles.paragraph}>
        TypeScript memiliki berbagai tipe data yang digunakan untuk menyimpan dan memanipulasi data. Berikut adalah tipe data utama:
      </Text>
      <Text style={styles.paragraph}>
        - **number**: Digunakan untuk menyimpan angka, baik bilangan bulat maupun desimal, contoh: {`42`} atau {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **string**: Digunakan untuk menyimpan teks, contoh: {'"Halo Dunia"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **boolean**: Nilai logika yang hanya bisa bernilai {`true`} atau {`false`}.
      </Text>
      <Text style={styles.paragraph}>
        - **array**: Koleksi data dalam urutan tertentu, contoh: {`[1, 2, 3, 4]`}.
      </Text>
      <Text style={styles.paragraph}>
        - **tuple**: Koleksi data dengan tipe berbeda pada indeks yang berbeda, contoh: {`[string, number]`} (misalnya: {`["John", 30]`}) .
      </Text>
      <Text style={styles.paragraph}>
        - **any**: Tipe yang dapat digunakan untuk menyimpan nilai dari tipe apa saja, yang menghindari pengecekan tipe.
      </Text>

      <Text style={styles.subTitle}>Library dan Framework Populer</Text>
<Text style={styles.paragraph}>
  TypeScript digunakan dalam berbagai framework dan library untuk meningkatkan produktivitas pengembangan:
</Text>
<Text style={styles.paragraph}>
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Angular' })}
  >
    Angular
  </Text>
  : Framework berbasis TypeScript untuk membangun aplikasi web. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'React' })}
  >
    React
  </Text>
  : Library JavaScript yang sering digunakan dengan TypeScript untuk membangun antarmuka pengguna. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Vue' })}
  >
    Vue
  </Text>
  : Framework progresif yang juga mendukung penggunaan TypeScript. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'NestJS' })}
  >
    NestJS
  </Text>
  : Framework backend berbasis TypeScript untuk membangun aplikasi server-side. {'\n'}
</Text>


      <Text style={styles.subTitle}>Fitur Utama TypeScript</Text>
      <Text style={styles.paragraph}>
        - **Tipe Statis**: Memberikan kontrol lebih besar atas tipe data yang digunakan. {'\n'}
        - **Antarmuka**: Memungkinkan Anda untuk mendefinisikan kontrak objek dan kelas yang lebih jelas. {'\n'}
        - **Dekorator**: Memungkinkan penambahan metadata pada kelas dan metode. {'\n'}
        - **Generics**: Membantu membuat fungsi dan kelas yang dapat digunakan dengan tipe data berbeda tanpa kehilangan keamanan tipe.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang TypeScript, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi TypeScript.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis TypeScript</Text>
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

export default TypeScriptDetailScreen;
