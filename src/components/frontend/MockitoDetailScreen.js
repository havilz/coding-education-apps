import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const MockitoDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://site.mockito.org/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Mockito?</Text>
      <Text style={styles.paragraph}>
        Mockito adalah pustaka open-source untuk Java yang digunakan untuk membuat objek tiruan (mock) dalam pengujian unit. Dengan Mockito, Anda dapat mengisolasi unit kode yang sedang diuji dengan memalsukan dependensi dan memverifikasi interaksi mereka.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Mockito:</Text>
      <Text style={styles.paragraph}>1. **Mocking**: Membuat objek tiruan untuk menghindari ketergantungan pada implementasi asli.</Text>
      <Text style={styles.paragraph}>2. **Verification**: Memeriksa apakah metode tertentu telah dipanggil dengan parameter yang benar.</Text>
      <Text style={styles.paragraph}>3. **Stubbing**: Mengatur respons untuk metode tertentu pada objek tiruan.</Text>
      <Text style={styles.paragraph}>4. **Integration with JUnit**: Terintegrasi dengan baik dengan framework pengujian JUnit.</Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Mockito?</Text>
      <Text style={styles.paragraph}>- Mempermudah pengujian unit dengan membuat objek tiruan secara dinamis.</Text>
      <Text style={styles.paragraph}>- Mengisolasi unit kode untuk memastikan pengujian yang lebih akurat.</Text>
      <Text style={styles.paragraph}>- Mendukung pengujian berbasis perilaku dengan memverifikasi interaksi metode.</Text>

      <Text style={styles.subTitle}>Contoh Kode Mockito</Text>

      <Text style={styles.paragraph}>**Mocking dan Stubbing**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`import static org.mockito.Mockito.*;

// Kelas yang akan diuji
public class UserService {
    private UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public String getUserById(int id) {
        User user = repository.findById(id);
        return user != null ? user.getName() : "User not found";
    }
}

// Tes dengan Mockito
@Test
public void testGetUserById() {
    // Membuat mock untuk UserRepository
    UserRepository mockRepository = mock(UserRepository.class);

    // Menentukan perilaku mock
    when(mockRepository.findById(1)).thenReturn(new User(1, "John Doe"));

    // Menggunakan UserService dengan mock
    UserService service = new UserService(mockRepository);
    String result = service.getUserById(1);

    // Verifikasi
    assertEquals("John Doe", result);
    verify(mockRepository).findById(1);
}`}
        </Text>
      </View>

      <Text style={styles.paragraph}>**Verification**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`import static org.mockito.Mockito.*;

@Test
public void testVerification() {
    List<String> mockList = mock(List.class);

    // Menggunakan mock
    mockList.add("Hello");
    mockList.clear();

    // Verifikasi bahwa metode add dipanggil dengan argumen "Hello"
    verify(mockList).add("Hello");

    // Verifikasi bahwa metode clear dipanggil
    verify(mockList).clear();
}`}
        </Text>
      </View>

      <Text style={styles.paragraph}>**Menggunakan Argument Matchers**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;

@Test
public void testArgumentMatchers() {
    List<String> mockList = mock(List.class);

    // Menentukan perilaku dengan matcher
    when(mockList.get(anyInt())).thenReturn("Mocked Value");

    // Menggunakan mock
    String value = mockList.get(0);

    // Verifikasi
    assertEquals("Mocked Value", value);
    verify(mockList).get(anyInt());
}`}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Mockito</Text>
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

export default MockitoDetailScreen;
