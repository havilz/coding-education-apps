import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const CppDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://cplusplus.com/doc/tutorial/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'C++' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu C++?</Text>
      <Text style={styles.paragraph}>
        C++ adalah bahasa pemrograman tingkat menengah yang dirancang untuk pemrograman sistem dan aplikasi. C++ mendukung paradigma pemrograman prosedural, berorientasi objek, dan generic.
      </Text>

      <Text style={styles.subTitle}>Mengapa C++ Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Performa Tinggi**: C++ digunakan untuk membuat aplikasi yang membutuhkan performa tinggi seperti game, sistem operasi, dan perangkat lunak server. {'\n'}
        2. **Pemrograman Berorientasi Objek**: Mendukung konsep seperti enkapsulasi, pewarisan, dan polimorfisme. {'\n'}
        3. **Kompatibilitas Luas**: C++ dapat digunakan pada berbagai platform dan memiliki kompatibilitas yang baik dengan C.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode C++: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`// Fungsi untuk menghitung faktorial dalam C++\n`}
          {`#include <iostream>\n`}
          {`using namespace std;\n\n`}
          {`int factorial(int n) {\n`}
          {`    if (n <= 1) return 1;\n`}
          {`    return n * factorial(n - 1);\n`}
          {`}\n\n`}
          {`int main() {\n`}
          {`    cout << factorial(5) << endl;  // Output: 120\n`}
          {`    return 0;\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode C++: Mencari Nilai Maksimum dalam Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`// Menemukan nilai maksimum dalam array C++\n`}
          {`#include <iostream>\n`}
          {`using namespace std;\n\n`}
          {`int main() {\n`}
          {`    int arr[] = {3, 1, 4, 1, 5, 9, 2};\n`}
          {`    int max = arr[0];\n`}
          {`    for(int i = 1; i < 7; i++) {\n`}
          {`        if(arr[i] > max) {\n`}
          {`            max = arr[i];\n`}
          {`        }\n`}
          {`    }\n`}
          {`    cout << "Nilai maksimum adalah: " << max << endl;\n`}
          {`    return 0;\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam C++</Text>
      <Text style={styles.paragraph}>
        Berikut adalah beberapa tipe data dasar dalam C++:
      </Text>
      <Text style={styles.paragraph}>
        - **int**: Untuk menyimpan bilangan bulat, contohnya: {`int x = 10;`}. {'\n'}
        - **float**: Untuk menyimpan bilangan desimal, contohnya: {`float pi = 3.14;`}. {'\n'}
        - **double**: Mirip dengan float tetapi dengan presisi lebih tinggi. {'\n'}
        - **char**: Untuk menyimpan satu karakter, contohnya: {`char grade = 'A';`}. {'\n'}
        - **string**: Untuk menyimpan teks, contohnya: {`std::string name = "John";`}. {'\n'}
        - **bool**: Untuk nilai logika {`true`} atau {`false`}.
      </Text>

      <Text style={styles.subTitle}>Library dan Framework Populer</Text>
      <Text style={styles.paragraph}>
        C++ memiliki banyak library dan framework yang digunakan dalam pengembangan:
      </Text>
      <Text style={styles.paragraph}>
        - **STL (Standard Template Library)**: Koleksi struktur data dan algoritma. {'\n'}
        - **Qt**: Framework untuk membangun aplikasi GUI. {'\n'}
        - **Boost**: Library tambahan yang memperluas kemampuan standar C++. {'\n'}
        - **OpenCV**: Library untuk pengolahan gambar dan video. {'\n'}
        - **Unreal Engine**: Digunakan untuk pengembangan game tingkat lanjut.
      </Text>
      <Text style={styles.paragraph}>
        Untuk mempelajari tentang Framework yang digunakan, Anda dapat mengunjungi halaman berikut:{'\n'}
        - <Text style={styles.link} onPress={() => navigation.navigate('Frameworks')}>Pelajari lebih lanjut tentang Frameworks</Text>
      </Text>

      <Text style={styles.subTitle}>Fitur Utama C++</Text>
      <Text style={styles.paragraph}>
        - **Manajemen Memori**: Dukungan untuk alokasi dan dealokasi memori secara manual menggunakan pointer. {'\n'}
        - **Ekstensi C**: Mendukung fitur dari bahasa C sekaligus memperluasnya dengan OOP. {'\n'}
        - **Template**: Membuat kode generik untuk struktur data dan fungsi. {'\n'}
        - **Portabilitas**: Program C++ dapat dijalankan di berbagai platform dengan sedikit atau tanpa modifikasi.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang C++, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi C++.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis C++</Text>
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

export default CppDetailScreen;
