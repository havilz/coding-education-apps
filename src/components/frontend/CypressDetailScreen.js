import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const CypressDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.cypress.io/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Cypress?</Text>
      <Text style={styles.paragraph}>
        Cypress adalah alat pengujian untuk aplikasi web modern yang dirancang untuk memudahkan pengujian end-to-end, integrasi, dan unit testing. Cypress populer untuk pengujian front-end yang interaktif.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Cypress:</Text>
      <Text style={styles.paragraph}>
        1. **Real-time Reloads**: Menyediakan feedback langsung selama pengujian berjalan.
      </Text>
      <Text style={styles.paragraph}>
        2. **Automatic Waiting**: Cypress secara otomatis menunggu elemen tersedia sebelum melakukan aksi.
      </Text>
      <Text style={styles.paragraph}>
        3. **Debugging yang Mudah**: Alat debugging interaktif dengan error messages yang jelas.
      </Text>
      <Text style={styles.paragraph}>
        4. **Integrasi CI/CD**: Dapat diintegrasikan dengan pipeline pengembangan untuk pengujian otomatis.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Cypress?</Text>
      <Text style={styles.paragraph}>
        - Sangat cocok untuk pengujian front-end yang kompleks.
      </Text>
      <Text style={styles.paragraph}>
        - Mudah digunakan bahkan untuk pemula.
      </Text>
      <Text style={styles.paragraph}>
        - Dukungan komunitas yang luas dan banyak integrasi dengan framework lainnya.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Cypress</Text>
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

export default CypressDetailScreen;
