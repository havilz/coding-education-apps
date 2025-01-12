import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const OOPDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://en.wikipedia.org/wiki/Object-oriented_programming');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu OOP?</Text>
      <Text style={styles.paragraph}>
        Object-Oriented Programming (OOP) adalah paradigma pemrograman yang berbasis pada konsep "objek". Objek dapat berisi data, dalam bentuk field (sering disebut atribut atau properti), dan kode, dalam bentuk metode (sering disebut fungsi).
      </Text>

      <Text style={styles.subTitle}>Prinsip Utama OOP</Text>
      <Text style={styles.paragraph}>
        1. **Encapsulation**: Proses menyembunyikan detail implementasi objek dan hanya menampilkan antarmuka yang diperlukan.
      </Text>
      <Text style={styles.paragraph}>
        2. **Inheritance**: Kemampuan untuk membuat kelas baru yang mewarisi properti dan metode dari kelas yang sudah ada.
      </Text>
      <Text style={styles.paragraph}>
        3. **Polymorphism**: Kemampuan objek untuk memiliki banyak bentuk tergantung pada konteks penggunaannya.
      </Text>
      <Text style={styles.paragraph}>
        4. **Abstraction**: Proses menyembunyikan detail implementasi yang kompleks dan hanya menampilkan fitur penting kepada pengguna.
      </Text>

      <Text style={styles.subTitle}>Keuntungan Menggunakan OOP</Text>
      <Text style={styles.paragraph}>
        - **Reusability**: Kode dapat digunakan kembali dengan membuat objek atau kelas baru berdasarkan yang sudah ada.
      </Text>
      <Text style={styles.paragraph}>
        - **Scalability**: Memudahkan pengelolaan proyek besar dengan membagi kode ke dalam kelas dan objek yang terorganisir.
      </Text>
      <Text style={styles.paragraph}>
        - **Maintainability**: Kode lebih mudah dipahami, di-debug, dan di-maintain karena struktur OOP yang modular.
      </Text>

      <Text style={styles.subTitle}>Contoh Implementasi OOP</Text>
      <Text style={styles.subTitle}>1. **Definisi Kelas**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`class Animal {\n`}
          {`  constructor(name, sound) {\n`}
          {`    this.name = name;\n`}
          {`    this.sound = sound;\n`}
          {`  }\n\n`}
          {`  makeSound() {\n`}
          {`    console.log(\`\${this.name} makes a \${this.sound} sound\`);\n`}
          {`  }\n`}
          {`}`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Menggunakan Objek**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const dog = new Animal('Dog', 'bark');\n`}
          {`dog.makeSound(); // Output: Dog makes a bark sound`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur OOP dalam Berbagai Bahasa</Text>
      <Text style={styles.paragraph}>
        - **Java**: Mendukung OOP sepenuhnya dengan fitur seperti class, inheritance, dan interface.
      </Text>
      <Text style={styles.paragraph}>
        - **Python**: Memungkinkan implementasi OOP dengan class, metode, dan dekorator.
      </Text>
      <Text style={styles.paragraph}>
        - **JavaScript**: Meskipun awalnya bukan OOP, ES6 memperkenalkan konsep seperti class dan inheritance.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Baca Selengkapnya tentang OOP</Text>
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
    marginBottom: 10,
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
  button: {
    backgroundColor: '#0288D1',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OOPDetailScreen;
