import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const RDetailScreen = ({ navigation }) => {
  const openDocumentation = () => {
    Linking.openURL('https://www.r-project.org/documentation/');
  };

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { item: 'R' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu R?</Text>
      <Text style={styles.paragraph}>
        R adalah bahasa pemrograman dan lingkungan statistik yang digunakan untuk analisis data, pengolahan data, visualisasi data, dan komputasi statistik. R sangat populer di bidang statistik, riset ilmiah, dan analisis data besar.
      </Text>

      <Text style={styles.subTitle}>Mengapa R Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Statistik dan Data Analisis**: R digunakan untuk analisis data, model statistik, dan pengolahan data. {'\n'}
        2. **Visualisasi Data**: R memiliki pustaka untuk membuat grafik kompleks seperti diagram batang, histogram, dan peta. {'\n'}
        3. **Sumber Terbuka**: R adalah perangkat lunak sumber terbuka yang gratis digunakan.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode R: Menghitung Rata-Rata</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`# Membuat vektor data`}{'\n'}
          {`data <- c(10, 20, 30, 40, 50)`}{'\n\n'}
          {`# Menghitung rata-rata`}{'\n'}
          {`mean(data)`}  {/* Output: 30 */}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode R: Visualisasi Data</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`# Membuat data`}{'\n'}
          {`x <- c(1, 2, 3, 4, 5)`}{'\n'}
          {`y <- c(5, 10, 15, 20, 25)`}{'\n\n'}
          {`# Membuat plot`}{'\n'}
          {`plot(x, y)`}  {/* Output: grafik titik dengan x dan y */}
        </Text>
      </View>

      <Text style={styles.subTitle}>Tipe Data dalam R</Text>
      <Text style={styles.paragraph}>
        R memiliki berbagai tipe data yang digunakan untuk analisis data. Berikut adalah tipe data utama:
      </Text>
      <Text style={styles.paragraph}>
        - **Numeric**: Digunakan untuk menyimpan angka desimal, contoh: {`3.14`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Integer**: Digunakan untuk menyimpan angka bulat, contoh: {`42`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Character**: Digunakan untuk menyimpan teks, contoh: {'"Halo Dunia"'}.
      </Text>
      <Text style={styles.paragraph}>
        - **Logical**: Nilai yang hanya bisa bernilai {`TRUE`} atau {`FALSE`}.
      </Text>
      <Text style={styles.paragraph}>
        - **Factor**: Data kategorikal dengan level tertentu, contoh: {`factor(c("low", "medium", "high"))`}.
      </Text>

      <Text style={styles.subTitle}>Library dan Framework Populer</Text>
<Text style={styles.paragraph}>
  R memiliki berbagai framework dan pustaka yang mempermudah pengembangan dan analisis data:
</Text>
<Text style={styles.paragraph}>
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'ggplot2' })}
  >
    ggplot2
  </Text>
  : Library untuk visualisasi data dengan fleksibilitas tinggi. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'dplyr' })}
  >
    dplyr
  </Text>
  : Library untuk manipulasi data dalam bentuk tabel. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'tidyr' })}
  >
    tidyr
  </Text>
  : Library untuk transformasi data dan pembersihan data. {'\n'}
  <Text
    style={styles.link}
    onPress={() => navigation.navigate('Frameworks', { targetFramework: 'shiny' })}
  >
    shiny
  </Text>
  : Framework untuk membangun aplikasi web interaktif dengan R. {'\n'}
</Text>


      <Text style={styles.subTitle}>Fitur Utama R</Text>
      <Text style={styles.paragraph}>
        - **Statistik Deskriptif**: R dapat melakukan analisis statistik dasar seperti mean, median, dan standar deviasi. {'\n'}
        - **Model Statistik**: Membuat model regresi, analisis variansi, dan analisis cluster. {'\n'}
        - **Grafik Data**: Membuat grafik visualisasi seperti histogram, scatter plot, dan boxplot.
        - **Analisis Data Besar**: Mendukung pemrosesan data dalam skala besar dengan pustaka seperti data.table.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang R, kunjungi{' '}
        <Text style={styles.link} onPress={openDocumentation}>
          dokumentasi resmi R.
        </Text>
      </Text>

      <TouchableOpacity style={styles.quizButton} onPress={navigateToQuiz}>
        <Text style={styles.quizButtonText}>Mulai Kuis R</Text>
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

export default RDetailScreen;
