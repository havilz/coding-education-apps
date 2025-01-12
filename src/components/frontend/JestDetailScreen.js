import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const JestDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://jestjs.io/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Jest?</Text>
      <Text style={styles.paragraph}>
        Jest adalah sebuah framework pengujian JavaScript yang dirancang untuk membuat pengujian menjadi sederhana dan menyenangkan. Jest sangat populer untuk pengujian unit dan integrasi dalam aplikasi React dan Node.js.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Jest:</Text>
      <Text style={styles.paragraph}>
        1. **Snapshot Testing**: Memeriksa apakah tampilan UI aplikasi tidak berubah secara tidak sengaja.
      </Text>
      <Text style={styles.paragraph}>
        2. **Mocking**: Mendukung mocking untuk fungsi, modul, dan dependensi eksternal.
      </Text>
      <Text style={styles.paragraph}>
        3. **Zero Configuration**: Dapat langsung digunakan tanpa konfigurasi yang rumit.
      </Text>
      <Text style={styles.paragraph}>
        4. **Kecepatan Tinggi**: Pengujian dilakukan secara paralel untuk meningkatkan kecepatan eksekusi.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Jest?</Text>
      <Text style={styles.paragraph}>
        - Terintegrasi dengan baik dengan aplikasi React.
      </Text>
      <Text style={styles.paragraph}>
        - Dukungan komunitas yang luas dan banyak plugin tambahan.
      </Text>
      <Text style={styles.paragraph}>
        - Dokumentasi yang lengkap dan mudah dipahami.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Jest</Text>

      <Text style={styles.paragraph}>**Pengujian Unit**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`// math.js\n`}
          {`function sum(a, b) {\n`}
          {`  return a + b;\n`}
          {`}\n`}
          {`module.exports = sum;\n\n`}
          {`// math.test.js\n`}
          {`const sum = require('./math');\n`}
          {`test('menambahkan 1 + 2 menjadi 3', () => {\n`}
          {`  expect(sum(1, 2)).toBe(3);\n`}
          {`});`}
        </Text>
      </View>

      <Text style={styles.paragraph}>**Mocking**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`// fetchData.test.js\n`}
          {`const fetchData = require('./fetchData');\n`}
          {`jest.mock('./fetchData', () => jest.fn());\n\n`}
          {`test('fetchData dipanggil dan mengembalikan data tiruan', async () => {\n`}
          {`  fetchData.mockResolvedValue('Data tiruan');\n`}
          {`  const data = await fetchData();\n`}
          {`  expect(data).toBe('Data tiruan');\n`}
          {`  expect(fetchData).toHaveBeenCalledTimes(1);\n`}
          {`});`}
        </Text>
      </View>

      <Text style={styles.paragraph}>**Snapshot Testing**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`import React from 'react';\n`}
          {`import renderer from 'react-test-renderer';\n`}
          {`import MyComponent from './MyComponent';\n\n`}
          {`test('MyComponent cocok dengan snapshot', () => {\n`}
          {`  const tree = renderer.create(<MyComponent />).toJSON();\n`}
          {`  expect(tree).toMatchSnapshot();\n`}
          {`});`}
        </Text>
      </View>

      <Text style={styles.paragraph}>**Pengujian Asynchronous**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`// fetchUser.test.js\n`}
          {`const fetchUser = require('./fetchUser');\n\n`}
          {`test('mengambil user dengan ID 1', async () => {\n`}
          {`  global.fetch = jest.fn(() =>\n`}
          {`    Promise.resolve({\n`}
          {`      json: () => Promise.resolve({ id: 1, name: 'John Doe' }),\n`}
          {`    })\n`}
          {`  );\n\n`}
          {`  const user = await fetchUser(1);\n`}
          {`  expect(user.name).toBe('John Doe');\n`}
          {`});`}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Jest</Text>
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
    backgroundColor: '#2196F3',
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

export default JestDetailScreen;
