import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const HTMLDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://developer.mozilla.org/en-US/docs/Web/HTML');
  };

  const navigateToCSS = () => {
    navigation.navigate('CSSDetailScreen');
  };

  const navigateToJavaScript = () => {
    navigation.navigate('JavaScriptDetailScreen');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'HTML' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu HTML?</Text>
      <Text style={styles.paragraph}>
        HTML (HyperText Markup Language) adalah bahasa markup standar yang digunakan untuk mendeskripsikan struktur dan konten halaman web. HTML memungkinkan Anda untuk membuat elemen-elemen seperti heading, paragraf, tabel, gambar, tautan, dan banyak lagi. Setiap elemen HTML ditandai menggunakan tag, seperti `p` untuk paragraf atau `img` untuk gambar.
      </Text>

      <Text style={styles.subTitle}>Mengapa HTML Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Fondasi Web**: HTML adalah dasar dari semua halaman web, memberikan struktur untuk konten.
      </Text>
      <Text style={styles.paragraph}>
        2. **Mudah Dipelajari**: Sintaks HTML sederhana dan intuitif, menjadikannya pilihan ideal untuk pemula.
      </Text>
      <Text style={styles.paragraph}>
        3. **Dukungan Universal**: Semua browser mendukung HTML, menjadikannya bahasa markup yang universal.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode HTML</Text>
      <View style={styles.codeCard}>
        <Text style={styles.codeText}>
          {`<!DOCTYPE html>`}
        </Text>
        <Text style={styles.codeText}>
          {`<html>`}
        </Text>
        <Text style={styles.codeText}>
          {`  <head>`}
        </Text>
        <Text style={styles.codeText}>
          {`    <title>Judul Halaman</title>`}
        </Text>
        <Text style={styles.codeText}>
          {`  </head>`}
        </Text>
        <Text style={styles.codeText}>
          {`  <body>`}
        </Text>
        <Text style={styles.codeText}>
          {`    <h1>Halo Dunia!</h1>`}
        </Text>
        <Text style={styles.codeText}>
          {`    <p>Ini adalah paragraf pertama saya.</p>`}
        </Text>
        <Text style={styles.codeText}>
          {`  </body>`}
        </Text>
        <Text style={styles.codeText}>
          {`</html>`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Hubungan HTML dengan CSS</Text>
      <Text style={styles.paragraph}>
        HTML memberikan struktur konten, sementara **CSS** (Cascading Style Sheets) digunakan untuk mengatur tampilan dan gaya konten tersebut. Dengan CSS, Anda dapat mengubah warna, ukuran font, tata letak, dan elemen visual lainnya dari halaman HTML. 
        {'\n\n'}
        <Text style={styles.link} onPress={navigateToCSS}>
          Pelajari lebih lanjut tentang CSS di sini.
        </Text>
      </Text>

      <Text style={styles.subTitle}>Hubungan HTML dengan JavaScript</Text>
      <Text style={styles.paragraph}>
        HTML dan **JavaScript** bekerja bersama untuk menambahkan interaktivitas ke halaman web. JavaScript memungkinkan Anda untuk membuat elemen dinamis seperti tombol yang merespons klik, animasi, dan validasi form. Dengan HTML sebagai dasar, JavaScript memungkinkan halaman web menjadi lebih hidup dan fungsional.
        {'\n\n'}
        <Text style={styles.link} onPress={navigateToJavaScript}>
          Pelajari lebih lanjut tentang JavaScript di sini.
        </Text>
      </Text>

      <Text style={styles.subTitle}>Fitur Utama HTML</Text>
      <Text style={styles.paragraph}>
        - **Elemen Semantik**: Elemen seperti `header`, `footer`, dan `section` membantu memberikan konteks yang lebih jelas pada konten.
      </Text>
      <Text style={styles.paragraph}>
        - **Formulir**: HTML mendukung form untuk input data pengguna dengan elemen seperti `input`, `textarea`, dan `button`.
      </Text>
      <Text style={styles.paragraph}>
        - **Multimedia**: HTML mendukung elemen multimedia seperti `img` untuk gambar, `audio` untuk audio, dan `video` untuk video.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang HTML, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi HTML di MDN.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis HTML</Text>
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

export default HTMLDetailScreen;
