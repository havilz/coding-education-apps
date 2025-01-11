import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const CSSDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://developer.mozilla.org/en-US/docs/Web/CSS');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'CSS' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu CSS?</Text>
      <Text style={styles.paragraph}>
        CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendesain tampilan dan tata letak halaman web. Dengan CSS, Anda dapat mengubah warna, font, margin, dan elemen visual lainnya pada halaman web yang dibuat menggunakan HTML.
      </Text>

      <Text style={styles.subTitle}>Mengapa CSS Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Desain Visual**: CSS memungkinkan Anda membuat halaman web yang menarik secara visual.
      </Text>
      <Text style={styles.paragraph}>
        2. **Responsif**: Dengan CSS, Anda dapat membuat desain yang responsif untuk berbagai perangkat.
      </Text>
      <Text style={styles.paragraph}>
        3. **Pengaturan Konsisten**: Anda dapat menggunakan satu file CSS untuk mengatur gaya di seluruh situs web.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode CSS</Text>
      <View style={styles.codeCard}>
        <Text style={styles.codeText}>
          {`body {`}
        </Text>
        <Text style={styles.codeText}>
          {`  font-family: Arial, sans-serif;`}
        </Text>
        <Text style={styles.codeText}>
          {`  background-color: #f9f9f9;`}
        </Text>
        <Text style={styles.codeText}>
          {`  color: #333;`}
        </Text>
        <Text style={styles.codeText}>
          {`}`}
        </Text>
        <Text style={styles.codeText}>
          {`h1 {`}
        </Text>
        <Text style={styles.codeText}>
          {`  color: #FF5722;`}
        </Text>
        <Text style={styles.codeText}>
          {`}`}
        </Text>
        <Text style={styles.codeText}>
          {`p {`}
        </Text>
        <Text style={styles.codeText}>
          {`  line-height: 1.6;`}
        </Text>
        <Text style={styles.codeText}>
          {`}`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama CSS</Text>
      <Text style={styles.paragraph}>
        - **Selector**: CSS menggunakan selector untuk menentukan elemen mana yang akan diterapkan gaya.
      </Text>
      <Text style={styles.paragraph}>
        - **Box Model**: Semua elemen CSS memiliki model kotak (box model) yang terdiri dari margin, border, padding, dan konten.
      </Text>
      <Text style={styles.paragraph}>
        - **Responsiveness**: Dengan media queries, CSS memungkinkan Anda membuat desain responsif.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang CSS, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi CSS di MDN.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis CSS</Text>
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
    borderRadius: 8,
    padding: 15,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
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

export default CSSDetailScreen;
