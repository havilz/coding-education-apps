import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const UnitTestingDetailScreen = ({ navigation }) => {
  const handleDocumentationPress = () => {
    Linking.openURL('https://jestjs.io/docs/getting-started');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Unit Testing?</Text>
      <Text style={styles.paragraph}>
        Unit testing adalah metode pengujian perangkat lunak yang memeriksa setiap unit atau komponen individual dari sebuah aplikasi untuk memastikan bahwa komponen tersebut bekerja sebagaimana mestinya. Unit testing biasanya dilakukan oleh pengembang selama proses pengembangan.
      </Text>

      <Text style={styles.subTitle}>Keuntungan Unit Testing</Text>
      <Text style={styles.paragraph}>
        - **Mendeteksi Bug Lebih Awal**: Membantu menemukan masalah sejak dini dalam siklus pengembangan.{'\n'}
        - **Meningkatkan Kepercayaan**: Membuktikan bahwa setiap unit aplikasi bekerja sesuai dengan spesifikasinya.{'\n'}
        - **Dokumentasi Kode**: Test case dapat bertindak sebagai dokumentasi untuk kode Anda.{'\n'}
        - **Mendukung Refactoring**: Memastikan bahwa perubahan kode tidak merusak fitur yang ada.
      </Text>

      <Text style={styles.subTitle}>Pengantar Jest</Text>
      <Text style={styles.paragraph}>
        **Jest** adalah pustaka JavaScript yang digunakan untuk unit testing. Jest mendukung pengujian untuk aplikasi React, Node.js, dan lainnya. Fitur utamanya meliputi:
      </Text>
      <Text style={styles.paragraph}>
        - **Snapshot Testing**: Membandingkan tampilan UI saat ini dengan snapshot sebelumnya.{'\n'}
        - **Mocking**: Memungkinkan Anda membuat simulasi fungsi dan modul.{'\n'}
        - **Test Runner Cepat**: Jest secara otomatis menjalankan hanya test case yang terkait dengan perubahan terbaru.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Jest</Text>
      <View style={styles.codeCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('JestDetailScreen')}
        >
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
        </TouchableOpacity>
      </View>
      <Text style={styles.paragraph}>!Tekan pada contoh kode untuk membepalajari Jest{'\n'} </Text>
      
      <Text style={styles.subTitle}>Pengantar Mockito</Text>
      <Text style={styles.paragraph}>
        **Mockito** adalah pustaka Java yang digunakan untuk membuat objek tiruan (mock) dalam pengujian unit. Ini memungkinkan Anda mensimulasikan perilaku dependensi dan memeriksa interaksinya.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Mockito</Text>
      <View style={styles.codeCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MockitoDetailScreen')}
        >
          <Text style={styles.code}>
            {`// Contoh pengujian dengan Mockito\n`}
            {`import static org.mockito.Mockito.*;\n`}
            {`import org.junit.jupiter.api.Test;\n\n`}
            {`class UserServiceTest {\n`}
            {`  @Test\n`}
            {`  void testGetUser() {\n`}
            {`    UserRepository mockRepo = mock(UserRepository.class);\n`}
            {`    when(mockRepo.findUserById(1)).thenReturn(new User("John Doe"));\n\n`}
            {`    UserService service = new UserService(mockRepo);\n`}
            {`    User user = service.getUserById(1);\n`}
            {`    assertEquals("John Doe", user.getName());\n`}
            {`  }\n`}
            {`}`}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.paragraph}>!Tekan pada contoh kode untuk membepalajari Mockito{'\n'} </Text>

      <Text style={styles.subTitle}>Perbedaan Jest dan Mockito</Text>
      <Text style={styles.paragraph}>
        - **Jest** digunakan untuk pengujian aplikasi berbasis JavaScript/TypeScript, sementara **Mockito** digunakan untuk aplikasi berbasis Java.
        - **Jest** mendukung snapshot testing, sedangkan **Mockito** fokus pada pembuatan mock untuk pengujian unit.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleDocumentationPress}>
        <Text style={styles.buttonText}>Buka Dokumentasi Unit Testing</Text>
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
  button: {
    backgroundColor: '#007ACC',
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

export default UnitTestingDetailScreen;
