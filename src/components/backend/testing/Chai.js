import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ChaiDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.chaijs.com/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Chai?</Text>
      <Text style={styles.paragraph}>
        Chai adalah pustaka assertion yang digunakan bersama Mocha untuk menulis pengujian dalam JavaScript. Chai menyediakan berbagai metode assertion yang dapat digunakan untuk memverifikasi hasil dalam pengujian, seperti `assert`, `expect`, dan `should`. Pustaka ini mendukung gaya penulisan yang fleksibel dan sangat populer di komunitas pengembang.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Chai?</Text>
      <Text style={styles.paragraph}>
        1. **Kemudahan Penggunaan**: Chai menyediakan API yang sangat mudah digunakan dengan gaya penulisan yang intuitif.
      </Text>
      <Text style={styles.paragraph}>
        2. **Fleksibilitas**: Chai mendukung beberapa gaya assertion, seperti `assert`, `expect`, dan `should`, sehingga pengguna dapat memilih gaya yang sesuai dengan preferensi mereka.
      </Text>
      <Text style={styles.paragraph}>
        3. **Ekosistem yang Kuat**: Chai sering digunakan bersama dengan Mocha, memberikan pengujian yang kuat dan fleksibel di ekosistem JavaScript.
      </Text>
      <Text style={styles.paragraph}>
        4. **Dukungan Lengkap untuk Pengujian**: Dengan berbagai jenis assertion dan plugin yang tersedia, Chai mendukung hampir semua kebutuhan pengujian.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Chai:</Text>
      <Text style={styles.paragraph}>
        - **Assertion yang Fleksibel**: Menyediakan tiga gaya assertion utama: `assert`, `expect`, dan `should`.
      </Text>
      <Text style={styles.paragraph}>
        - **Plugin**: Chai mendukung berbagai plugin untuk memperluas fungsionalitasnya, seperti `chai-http` untuk pengujian API dan `chai-as-promised` untuk pengujian promise.
      </Text>
      <Text style={styles.paragraph}>
        - **Integrasi dengan Mocha**: Chai sering digunakan bersama Mocha untuk pengujian unit dan integrasi di aplikasi JavaScript.
      </Text>
      <Text style={styles.paragraph}>
        - **Gaya Penulisan yang Mudah Dipahami**: Dengan sintaksis yang alami, Chai membuat pengujian lebih mudah dibaca dan dipahami.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Chai</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh penggunaan Chai dengan Mocha untuk melakukan pengujian:
      </Text>

      <Text style={styles.subTitle}>1. **Menggunakan Gaya Assertion `assert`**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const assert = require('chai').assert;\n`}
          {`describe('Test Assertion', function() {\n`}
          {`  it('should return true', function() {\n`}
          {`    assert.isTrue(true);\n`}
          {`  });\n`}
          {`});\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Menggunakan Gaya Assertion `expect`**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const expect = require('chai').expect;\n`}
          {`describe('Test Expect', function() {\n`}
          {`  it('should return 5', function() {\n`}
          {`    expect(2 + 3).to.equal(5);\n`}
          {`  });\n`}
          {`});\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>3. **Menggunakan Gaya Assertion `should`**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const chai = require('chai');\n`}
          {`chai.should();\n`}
          {`describe('Test Should', function() {\n`}
          {`  it('should return true', function() {\n`}
          {`    true.should.be.true;\n`}
          {`  });\n`}
          {`});\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Lain dari Chai:</Text>
      <Text style={styles.paragraph}>
        - **chai-http**: Untuk pengujian API dengan membuat permintaan HTTP dan memverifikasi respons.
      </Text>
      <Text style={styles.paragraph}>
        - **chai-as-promised**: Untuk pengujian promise dengan menggunakan sintaksis `chai` yang lebih bersih.
      </Text>
      <Text style={styles.paragraph}>
        - **chai-spies**: Untuk memeriksa apakah fungsi tertentu telah dipanggil.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Chai</Text>
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

export default ChaiDetailScreen;
