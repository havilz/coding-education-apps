import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const CSharpDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://learn.microsoft.com/en-us/dotnet/csharp/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'C#' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu C#?</Text>
      <Text style={styles.paragraph}>
        C# (C-Sharp) adalah bahasa pemrograman yang dikembangkan oleh Microsoft, digunakan untuk pengembangan aplikasi di platform .NET. C# mendukung paradigma pemrograman berorientasi objek dan digunakan untuk membangun aplikasi desktop, web, dan mobile.
      </Text>

      <Text style={styles.subTitle}>Mengapa C# Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Pemrograman Berorientasi Objek**: C# mendukung paradigma OOP dengan fitur seperti enkapsulasi, pewarisan, dan polimorfisme. {'\n'}
        2. **Pembangunan Aplikasi Modern**: Digunakan untuk membangun aplikasi di berbagai platform seperti Windows, Android, dan iOS menggunakan .NET Core dan Xamarin. {'\n'}
        3. **Interoperabilitas**: C# dapat digunakan untuk integrasi dengan berbagai teknologi dan layanan.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode C#: Menghitung Faktorial</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`using System;\n\n`}
          {`class Program {\n`}
          {`    static int Factorial(int n) {\n`}
          {`        if (n <= 1) return 1;\n`}
          {`        return n * Factorial(n - 1);\n`}
          {`    }\n\n`}
          {`    static void Main() {\n`}
          {`        Console.WriteLine(Factorial(5));  // Output: 120\n`}
          {`    }\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode C#: Mencari Nilai Maksimum dalam Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`using System;\n\n`}
          {`class Program {\n`}
          {`    static void Main() {\n`}
          {`        int[] arr = {3, 1, 4, 1, 5, 9, 2};\n`}
          {`        int max = arr[0];\n`}
          {`        foreach (var num in arr) {\n`}
          {`            if (num > max) max = num;\n`}
          {`        }\n`}
          {`        Console.WriteLine("Nilai maksimum adalah: " + max);\n`}
          {`    }\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam C#</Text>
      <Text style={styles.paragraph}>
        Berikut adalah beberapa tipe data dasar dalam C#:
      </Text>
      <Text style={styles.paragraph}>
        - **int**: Untuk menyimpan bilangan bulat, contohnya: {`int x = 10;`}. {'\n'}
        - **float**: Untuk menyimpan bilangan desimal, contohnya: {`float pi = 3.14f;`}. {'\n'}
        - **double**: Mirip dengan float tetapi dengan presisi lebih tinggi. {'\n'}
        - **char**: Untuk menyimpan satu karakter, contohnya: {`char grade = 'A';`}. {'\n'}
        - **string**: Untuk menyimpan teks, contohnya: {`string name = "John";`}. {'\n'}
        - **bool**: Untuk nilai logika {`true`} atau {`false`}.
      </Text>

      <Text style={styles.subTitle}>Framework dan Library Populer</Text>
      <Text style={styles.paragraph}>
        C# memiliki berbagai framework dan library yang mempermudah pengembangan aplikasi:
      </Text>
      <Text style={styles.paragraph}>
        - **.NET Core**: Platform lintas platform untuk membangun aplikasi web dan API. {'\n'}
        - **Xamarin**: Framework untuk pengembangan aplikasi mobile untuk Android dan iOS. {'\n'}
        - **ASP.NET**: Framework untuk pengembangan aplikasi web dinamis dan API. {'\n'}
        - **Entity Framework**: ORM untuk bekerja dengan database dalam aplikasi C#.
      </Text>
      <Text style={styles.paragraph}>
        Untuk mempelajari tentang Framework yang digunakan, Anda dapat mengunjungi halaman berikut:{'\n'}
        - <Text style={styles.link} onPress={() => navigation.navigate('Frameworks')}>Pelajari lebih lanjut tentang Frameworks</Text>
      </Text>

      <Text style={styles.subTitle}>Fitur Utama C#</Text>
      <Text style={styles.paragraph}>
        - **Pemrograman Berorientasi Objek**: Mendukung semua fitur OOP, termasuk pewarisan, enkapsulasi, dan polimorfisme. {'\n'}
        - **LINQ**: Query bahasa C# untuk bekerja dengan koleksi data. {'\n'}
        - **Delegates dan Events**: Fitur untuk menangani peristiwa dan menyediakan pemrograman berbasis event. {'\n'}
        - **Garbage Collection**: Manajemen memori otomatis yang membebaskan programmer dari tugas-tugas manual.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang C#, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi C#.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis C#</Text>
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

export default CSharpDetailScreen;
