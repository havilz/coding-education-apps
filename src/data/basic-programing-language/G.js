import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const GoDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://golang.org/doc/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'Go' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Go?</Text>
      <Text style={styles.paragraph}>
        Go (atau Golang) adalah bahasa pemrograman yang dikembangkan oleh Google. Go dirancang untuk mengatasi masalah yang umum dihadapi oleh pemrograman modern, seperti efisiensi, kesederhanaan, dan konkurensi. Go sangat populer dalam pengembangan aplikasi backend dan sistem terdistribusi.
      </Text>

      <Text style={styles.subTitle}>Mengapa Go Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Performa Tinggi**: Go memiliki kinerja yang hampir setara dengan bahasa pemrograman tingkat rendah seperti C atau C++, namun tetap mempertahankan kesederhanaan. {'\n'}
        2. **Concurrency**: Go memiliki fitur unggul dalam menangani banyak tugas secara bersamaan (concurrency) menggunakan goroutines. {'\n'}
        3. **Kompilasi Cepat**: Go sangat cepat dalam hal kompilasi, membuat proses pengembangan menjadi lebih efisien.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Go: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`package main`}{'\n'}
          {`import "fmt"`}{'\n\n'}
          {`func factorial(n int) int {`}{'\n'}
          {`  if n == 0 {`}{'\n'}
          {`    return 1`}{'\n'}
          {`  }`}{'\n'}
          {`  return n * factorial(n-1)`}{'\n'}
          {`}`}{'\n\n'}
          {`func main() {`}{'\n'}
          {`  fmt.Println(factorial(5))  // Output: 120`}{'\n'}
          {`}`} 
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode Go: Menggunakan Goroutine</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`package main`}{'\n'}
          {`import ("fmt" "time")`}{'\n\n'}
          {`func greet() {`}{'\n'}
          {`  fmt.Println("Hello from Goroutine!")`}{'\n'}
          {`}`}{'\n\n'}
          {`func main() {`}{'\n'}
          {`  go greet()`}{'\n'}
          {`  time.Sleep(1 * time.Second)`}{'\n'}
          {`}`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam Go</Text>
      <Text style={styles.paragraph}>
        Go memiliki berbagai tipe data yang digunakan untuk menyimpan dan memanipulasi data. Berikut adalah tipe data utama:
      </Text>
      <Text style={styles.paragraph}>
        - **int**: Digunakan untuk menyimpan angka bulat, contoh: {`42`}.
      </Text>
      <Text style={styles.paragraph}>
        - **float64**: Digunakan untuk menyimpan angka desimal, contoh: {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **string**: Digunakan untuk menyimpan teks, contoh: {'"Halo Dunia"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **bool**: Nilai logika yang hanya bisa bernilai {`true`} atau {`false`}.
      </Text>
      <Text style={styles.paragraph}>
        - **array**: Koleksi data dengan ukuran tetap, contoh: {`[1, 2, 3]`}.
      </Text>
      <Text style={styles.paragraph}>
        - **slice**: Koleksi data dengan ukuran yang bisa berubah, contoh: {`[]int{1, 2, 3, 4}`}.
      </Text>

      <Text style={styles.subTitle}>Framework dan Library Populer</Text>
<Text style={styles.paragraph}>
  Go memiliki berbagai pustaka dan framework yang digunakan untuk membangun aplikasi modern:
</Text>
<Text style={styles.paragraph}>
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Gin' })}
  >
    Gin
  </Text>
  : Framework web Go yang ringan dan cepat. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Gorilla' })}
  >
    Gorilla
  </Text>
  : Library untuk membangun aplikasi web dengan Go. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'Go-Kit' })}
  >
    Go-Kit
  </Text>
  : Toolkit untuk membangun aplikasi mikroservis di Go. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'gRPC' })}
  >
    gRPC
  </Text>
  : Framework untuk komunikasi antar layanan yang efisien.
</Text>


      <Text style={styles.subTitle}>Fitur Utama Go</Text>
      <Text style={styles.paragraph}>
        - **Concurrency**: Menangani banyak tugas secara bersamaan dengan goroutines. {'\n'}
        - **Garbage Collection**: Memiliki sistem pengumpulan sampah untuk manajemen memori otomatis. {'\n'}
        - **Sederhana dan Efisien**: Sintaksis Go mudah dipahami dan mengutamakan kesederhanaan. {'\n'}
        - **Kompilasi Cepat**: Proses kompilasi yang sangat cepat, cocok untuk pengembangan yang efisien.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang Go, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi Go.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis Go</Text>
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

export default GoDetailScreen;
