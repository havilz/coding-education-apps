import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const JavaDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.oracle.com/javase/8/docs/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'Java' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Java?</Text>
      <Text style={styles.paragraph}>
        Java adalah bahasa pemrograman berorientasi objek yang dikembangkan oleh Sun Microsystems dan sekarang dimiliki oleh Oracle. Java dapat dijalankan di berbagai platform dan digunakan dalam pengembangan aplikasi web, aplikasi Android, perangkat lunak desktop, dan banyak lagi.
      </Text>

      <Text style={styles.subTitle}>Mengapa Java Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Portabilitas**: Java mendukung prinsip "Write Once, Run Anywhere" yang memungkinkan aplikasi Java berjalan di berbagai platform tanpa perubahan kode. {'\n'}
        2. **Pengembangan Aplikasi Android**: Java adalah bahasa utama untuk mengembangkan aplikasi Android. {'\n'}
        3. **Ekosistem Besar**: Java memiliki pustaka yang sangat luas dan dukungan komunitas yang besar.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Java: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`public class Main {\n`}
          {`  public static void main(String[] args) {\n`}
          {`    System.out.println(factorial(5));  // Output: 120\n`}
          {`  }\n\n`}
          {`  public static int factorial(int n) {\n`}
          {`    if (n <= 1) return 1;\n`}
          {`    return n * factorial(n - 1);\n`}
          {`  }\n`}
          {`}`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode Java: Menggunakan Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`int[] numbers = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};\n`}
          {`Arrays.sort(numbers);\n`}
          {`System.out.println(Arrays.toString(numbers));  // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam Java</Text>
      <Text style={styles.paragraph}>
        Java memiliki berbagai tipe data yang digunakan untuk menyimpan dan memanipulasi data. Berikut adalah tipe data utama:
      </Text>
      <Text style={styles.paragraph}>
        - **String**: Digunakan untuk menyimpan teks, contohnya: {'"Halo Dunia!"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **int**: Digunakan untuk menyimpan angka bulat, contohnya: {`42`}.
      </Text>
      <Text style={styles.paragraph}>
        - **double**: Digunakan untuk menyimpan angka desimal, contohnya: {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **boolean**: Nilai logika yang hanya bisa bernilai {`true`} atau {`false`} .
      </Text>
      <Text style={styles.paragraph}>
        - **Array**: Koleksi data yang terurut, contohnya: {`[1, 2, 3]`}.
      </Text>

      <Text style={styles.subTitle}>Framework dan Library Populer</Text>
<Text style={styles.paragraph}>
  Java memiliki berbagai framework dan pustaka yang mempermudah pengembangan aplikasi:
</Text>
<Text style={styles.paragraph}>
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Spring' })}
  >
    Spring
  </Text>
  : Framework untuk membangun aplikasi enterprise dengan Java. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Hibernate' })}
  >
    Hibernate
  </Text>
  : Framework untuk mempermudah pemetaan objek-relasional (ORM). {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'JavaFX' })}
  >
    JavaFX
  </Text>
  : Framework untuk pengembangan aplikasi desktop berbasis Java.
</Text>


      <Text style={styles.subTitle}>Fitur Utama Java</Text>
      <Text style={styles.paragraph}>
        - **Penyimpanan Objek**: Java adalah bahasa berorientasi objek, yang memungkinkan pengembangan aplikasi yang lebih terstruktur dan dapat dikelola. {'\n'}
        - **Multithreading**: Java mendukung multithreading, memungkinkan eksekusi paralel dalam aplikasi. {'\n'}
        - **Garbage Collection**: Java secara otomatis mengelola memori dan menghapus objek yang tidak digunakan.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang Java, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi Java.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis Java</Text>
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

export default JavaDetailScreen;
