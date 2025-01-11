import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const JavaScriptDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://developer.mozilla.org/en-US/docs/Web/JavaScript');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'JavaScript' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu JavaScript?</Text>
      <Text style={styles.paragraph}>
        JavaScript adalah bahasa pemrograman tingkat tinggi yang digunakan untuk membuat halaman web lebih interaktif dan dinamis. JavaScript berjalan di browser web dan dapat digunakan untuk membuat animasi, validasi formulir, manipulasi DOM, dan banyak lagi.
      </Text>

      <Text style={styles.subTitle}>Mengapa JavaScript Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Interaktivitas**: JavaScript memungkinkan Anda menambahkan fitur interaktif seperti tombol yang dapat diklik, pop-up, dan efek animasi. {'\n'}
        2. **Berbasis Klien**: Sebagian besar eksekusi JavaScript terjadi di sisi klien, sehingga meminimalkan beban server. {'\n'}
        3. **Ekosistem Luas**: JavaScript memiliki komunitas besar, pustaka, dan framework yang mempermudah pengembangan aplikasi modern.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode JavaScript: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`function factorial(n) {\n`}
          {`  if (n <= 1) return 1;\n`}
          {`  return n * factorial(n - 1);\n`}
          {`}\n\n`}
          {`console.log(factorial(5));  // Output: 120`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode JavaScript: Menggunakan Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];\n`}
          {`numbers.sort((a, b) => a - b);\n`}
          {`console.log(numbers);  // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam JavaScript</Text>
      <Text style={styles.paragraph}>
        JavaScript memiliki berbagai tipe data yang digunakan untuk menyimpan dan memanipulasi data. Berikut adalah tipe data utama:
      </Text>
      <Text style={styles.paragraph}>
        - **String**: Digunakan untuk menyimpan teks, contohnya: {'"Halo Dunia!"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **Number**: Digunakan untuk menyimpan angka, baik bilangan bulat maupun desimal, contohnya: {`42`} atau {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Boolean**: Nilai logika yang hanya bisa bernilai {`true`} atau {`false`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Array**: Koleksi data dalam bentuk daftar, contohnya: {`[1, 2, 3, 4]`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Object**: Struktur data kompleks yang menyimpan data dalam pasangan kunci-nilai, contohnya: {`{ name: "John", age: 30 }`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Null**: Nilai kosong yang secara eksplisit diatur oleh pengguna.
      </Text>
      <Text style={styles.paragraph}>
        - **Undefined**: Nilai yang diberikan kepada variabel yang belum diinisialisasi.
      </Text>

      <Text style={styles.subTitle}>Framework dan Library Populer</Text>
      <Text style={styles.paragraph}>
        JavaScript memiliki berbagai framework dan library yang mempermudah pengembangan aplikasi:
      </Text>
      <Text style={styles.paragraph}>
        - **React.js**: Library untuk membangun antarmuka pengguna. {'\n'}
        - **Vue.js**: Framework progresif untuk membangun antarmuka pengguna yang interaktif. {'\n'}
        - **Angular**: Framework lengkap untuk membangun aplikasi web modern. {'\n'}
        - **Node.js**: Platform JavaScript sisi server. {'\n'}
        - **jQuery**: Library untuk manipulasi DOM yang sederhana dan cepat.
      </Text>
      <Text style={styles.paragraph}>
        Untuk mempelajari tentang Framework yang digunakan, Anda dapat mengunjungi halaman berikut:{'\n'}
        - <Text style={styles.link} onPress={() => navigation.navigate('Frameworks')}>Pelajari lebih lanjut tentang Frameworks</Text>{'\n'}
      </Text>

      <Text style={styles.subTitle}>Fitur Utama JavaScript</Text>
      <Text style={styles.paragraph}>
        - **DOM Manipulation**: Mengubah struktur halaman secara langsung melalui DOM. {'\n'}
        - **Event Handling**: Menangani interaksi pengguna dengan elemen halaman. {'\n'}
        - **Asynchronous Programming**: Mendukung operasi asynchronous seperti AJAX dan Fetch API. {'\n'}
        - **Interoperability**: Dapat digunakan dengan teknologi web lainnya.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang JavaScript, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi JavaScript di MDN.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis JavaScript</Text>
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

export default JavaScriptDetailScreen;
