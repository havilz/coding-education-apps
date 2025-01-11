import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const MochaDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://mochajs.org/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Mocha?</Text>
      <Text style={styles.paragraph}>
        Mocha adalah framework pengujian JavaScript yang berjalan di Node.js dan di browser. Mocha menawarkan fleksibilitas dan kemampuan untuk menguji aplikasi menggunakan berbagai teknik pengujian, seperti asinkron dan berbasis callback. Dengan Mocha, Anda dapat menulis pengujian unit, pengujian integrasi, dan pengujian fungsional.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Mocha?</Text>
      <Text style={styles.paragraph}>
        1. **Kompabilitas Asinkron**: Mocha mendukung pengujian asinkron, memungkinkan pengujian API atau aplikasi web yang memerlukan waktu untuk merespons.
      </Text>
      <Text style={styles.paragraph}>
        2. **Fleksibilitas**: Anda dapat memilih alat assertion, pelaporan, dan mocking sesuai dengan kebutuhan Anda.
      </Text>
      <Text style={styles.paragraph}>
        3. **Pengujian Berlapis**: Mocha mendukung pengujian unit dan integrasi dengan struktur pengujian yang mudah dipahami.
      </Text>
      <Text style={styles.paragraph}>
        4. **Dokumentasi yang Baik**: Mocha memiliki dokumentasi yang sangat baik dan aktif, membuatnya mudah untuk dipelajari.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Mocha:</Text>
      <Text style={styles.paragraph}>
        - **Pengujian Asinkron**: Dapat menangani pengujian yang melibatkan panggilan API atau pengujian database dengan menggunakan callback atau Promises.
      </Text>
      <Text style={styles.paragraph}>
        - **Before/After Hooks**: Dapat menambahkan logika sebelum dan sesudah pengujian untuk menyiapkan dan membersihkan kondisi pengujian.
      </Text>
      <Text style={styles.paragraph}>
        - **Assertions**: Mocha memungkinkan Anda menggunakan berbagai pustaka assertion seperti Chai untuk memverifikasi hasil pengujian.
      </Text>
      <Text style={styles.paragraph}>
        - **Pelaporan**: Mendukung berbagai format pelaporan untuk memudahkan Anda melihat hasil pengujian.
      </Text>

      <Text style={styles.subTitle}>Contoh Pengujian dengan Mocha</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh pengujian sederhana menggunakan Mocha dan Chai (sebagai pustaka assertion).
      </Text>

      <Text style={styles.subTitle}>1. **Pengujian Asinkron**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const assert = require('chai').assert;\n`}
          {`describe('Asynchronous Test', function() {\n`}
          {`  it('should return the correct sum', function(done) {\n`}
          {`    setTimeout(function() {\n`}
          {`      assert.equal(2 + 3, 5);\n`}
          {`      done();\n`}
          {`    }, 1000);\n`}
          {`  });\n`}
          {`});\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Pengujian dengan Hooks**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`describe('Hooks Example', function() {\n`}
          {`  before(function() {\n`}
          {`    console.log('Before all tests');\n`}
          {`  });\n`}
          {`  after(function() {\n`}
          {`    console.log('After all tests');\n`}
          {`  });\n`}
          {`  it('should be true', function() {\n`}
          {`    assert.isTrue(true);\n`}
          {`  });\n`}
          {`});\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Lain dari Mocha:</Text>
      <Text style={styles.paragraph}>
        - **Integrasi dengan CI/CD**: Mocha dapat diintegrasikan dengan alat Continuous Integration seperti Jenkins atau Travis CI.
      </Text>
      <Text style={styles.paragraph}>
        - **Dukungan untuk Browser**: Selain berjalan di server Node.js, Mocha juga dapat digunakan untuk pengujian di browser.
      </Text>
      <Text style={styles.paragraph}>
        - **Berbagai Reporter**: Mocha memiliki berbagai pilihan reporter untuk menyajikan hasil pengujian dengan cara yang berbeda, seperti `dot`, `spec`, atau `tap`.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Mocha</Text>
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
    backgroundColor: '#4CAF50',
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

export default MochaDetailScreen;
