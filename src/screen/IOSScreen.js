import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const IOSDetailScreen = ({ navigation }) => {
  const handleDocumentationPress = () => {
    // Buka dokumentasi iOS
    Linking.openURL('https://developer.apple.com/documentation/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu iOS?</Text>
      <Text style={styles.paragraph}>
        iOS adalah sistem operasi mobile yang dikembangkan oleh Apple Inc. dan dirancang khusus untuk perangkat mereka seperti iPhone, iPad, dan iPod Touch. iOS dikenal dengan ekosistem yang terintegrasi, keamanan yang tinggi, dan pengalaman pengguna yang mulus.
      </Text>

      <Text style={styles.subTitle}>Bahasa Pemrograman untuk iOS</Text>
      <Text style={styles.paragraph}>
        Ada dua bahasa utama yang digunakan untuk mengembangkan aplikasi iOS:
      </Text>
      <Text style={styles.paragraph}>
        - **Objective-C**: Bahasa pemrograman yang digunakan sejak awal pengembangan aplikasi iOS. Objective-C menawarkan stabilitas yang kuat dan banyak pustaka bawaan untuk pengembangan aplikasi.{'\n'}
        - **Swift**: Bahasa pemrograman modern yang diperkenalkan oleh Apple pada tahun 2014. Swift dirancang untuk menjadi lebih mudah dipelajari dan efisien dibandingkan dengan Objective-C.
      </Text>

      <Text style={styles.paragraph}>
        Untuk mempelajari lebih lanjut tentang Swift, kunjungi halaman berikut:{'\n'}
        - <Text
            style={[styles.link, { color: 'blue' }]}
            onPress={() => navigation.navigate('Swift')}
          >
            Pelajari lebih lanjut tentang Swift
          </Text>{'\n'}
      </Text>

      <Text style={styles.subTitle}>Keunggulan Swift</Text>
      <Text style={styles.paragraph}>
        Swift memiliki banyak keunggulan, seperti:
      </Text>
      <Text style={styles.paragraph}>
        - **Keamanan**: Swift memiliki fitur seperti pengamanan null (null safety) yang membantu mengurangi bug.{'\n'}
        - **Performansi Cepat**: Dibandingkan dengan Objective-C, Swift memiliki performa yang lebih cepat dalam banyak kasus.{'\n'}
        - **Sintaks Modern**: Dengan sintaks yang ringkas dan bersih, Swift lebih mudah dipahami oleh pengembang baru.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode: Hello World di Swift</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`import UIKit\n`}
          {`print("Hello, iOS World!")`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Contoh Kode: Membuka URL di Objective-C</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`NSURL *url = [NSURL URLWithString:@"https://developer.apple.com"];`}
          {`\n[[UIApplication sharedApplication] openURL:url];`}
        </Text>
      </View>

      <TouchableOpacity style={styles.documentationButton} onPress={handleDocumentationPress}>
        <Text style={styles.documentationButtonText}>Kunjungi Dokumentasi iOS</Text>
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
    textDecorationLine: 'underline',
  },
  documentationButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  documentationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IOSDetailScreen;
