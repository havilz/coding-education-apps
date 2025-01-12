import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const DataStructureDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://en.wikipedia.org/wiki/Data_structure');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Struktur Data?</Text>
      <Text style={styles.paragraph}>
        Struktur Data adalah cara penyimpanan dan pengorganisasian data dalam komputer sehingga dapat digunakan secara efisien. Struktur data sangat penting dalam pengembangan perangkat lunak, karena mereka membantu dalam penyelesaian masalah yang kompleks dengan cara yang lebih optimal.
      </Text>

      <Text style={styles.subTitle}>Jenis-Jenis Struktur Data</Text>
      <Text style={styles.paragraph}>
        1. **Struktur Data Linear**: Elemen data disusun secara berurutan. Contoh: Array, Linked List, Stack, Queue.
      </Text>
      <Text style={styles.paragraph}>
        2. **Struktur Data Non-Linear**: Elemen data disusun dalam format hierarkis atau jaringan. Contoh: Tree, Graph.
      </Text>

      <Text style={styles.subTitle}>Struktur Data Linear</Text>
      <Text style={styles.paragraph}>
        - **Array**: Struktur data yang menyimpan elemen dalam blok memori yang berurutan.
      </Text>
      <Text style={styles.paragraph}>
        - **Stack**: Struktur data dengan prinsip Last In, First Out (LIFO).
      </Text>
      <Text style={styles.paragraph}>
        - **Queue**: Struktur data dengan prinsip First In, First Out (FIFO).
      </Text>
      <Text style={styles.paragraph}>
        - **Linked List**: Kumpulan node yang saling terhubung, di mana setiap node berisi data dan pointer ke node berikutnya.
      </Text>

      <Text style={styles.subTitle}>Struktur Data Non-Linear</Text>
      <Text style={styles.paragraph}>
        - **Tree**: Struktur data hierarkis yang dimulai dari node akar dan memiliki cabang ke node lain.
      </Text>
      <Text style={styles.paragraph}>
        - **Graph**: Kumpulan node (vertices) yang saling terhubung dengan sisi (edges), yang bisa memiliki arah atau tidak.
      </Text>

      <Text style={styles.subTitle}>Keuntungan Menggunakan Struktur Data</Text>
      <Text style={styles.paragraph}>
        - **Efisiensi**: Membantu mengelola data lebih cepat dan hemat memori.
      </Text>
      <Text style={styles.paragraph}>
        - **Organisasi Data**: Memungkinkan pengorganisasian data yang kompleks secara sistematis.
      </Text>
      <Text style={styles.paragraph}>
        - **Penyelesaian Masalah**: Banyak algoritma bergantung pada struktur data yang baik untuk efisiensi optimal.
      </Text>

      <Text style={styles.subTitle}>Contoh Implementasi Array</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`// Membuat Array di JavaScript\n`}
          {`const fruits = ['Apple', 'Banana', 'Cherry'];\n`}
          {`console.log(fruits[0]); // Output: Apple`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Implementasi Linked List</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`class Node {\n`}
          {`  constructor(value) {\n`}
          {`    this.value = value;\n`}
          {`    this.next = null;\n`}
          {`  }\n`}
          {`}\n\n`}
          {`class LinkedList {\n`}
          {`  constructor() {\n`}
          {`    this.head = null;\n`}
          {`  }\n`}
          {`  add(value) {\n`}
          {`    const newNode = new Node(value);\n`}
          {`    if (!this.head) {\n`}
          {`      this.head = newNode;\n`}
          {`    } else {\n`}
          {`      let current = this.head;\n`}
          {`      while (current.next) {\n`}
          {`        current = current.next;\n`}
          {`      }\n`}
          {`      current.next = newNode;\n`}
          {`    }\n`}
          {`  }\n`}
          {`}`}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Baca Selengkapnya tentang Struktur Data</Text>
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

export default DataStructureDetailScreen;
