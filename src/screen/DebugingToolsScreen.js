import React from 'react';
import { ScrollView, Text, StyleSheet, View, Linking, TouchableOpacity } from 'react-native';

const DebuggingToolsScreen = () => {
  const handleDocumentationPress = () => {
    Linking.openURL('https://developer.chrome.com/docs/devtools/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Debugging Tools?</Text>
      <Text style={styles.paragraph}>
        Debugging tools adalah alat yang membantu pengembang untuk menemukan dan memperbaiki bug dalam kode. Debugging tools dapat digunakan untuk melacak eksekusi kode, memeriksa nilai variabel, dan mengidentifikasi masalah yang terjadi selama runtime.
      </Text>

      <Text style={styles.subTitle}>Contoh Debugging Tools Populer</Text>
      <Text style={styles.paragraph}>
        - **Chrome DevTools**: Alat debugging bawaan browser Google Chrome.{'\n'}
        - **React Developer Tools**: Ekstensi untuk debugging aplikasi React.{'\n'}
        - **Redux DevTools**: Alat debugging untuk memantau state dalam aplikasi Redux.{'\n'}
        - **Visual Studio Code Debugger**: Debugger bawaan di editor Visual Studio Code.{'\n'}
        - **Postman**: Alat untuk debugging dan menguji API.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Debugging Tools</Text>
      <Text style={styles.paragraph}>
        - **Breakpoint**: Menghentikan eksekusi kode pada titik tertentu untuk memeriksa nilai variabel.{'\n'}
        - **Call Stack**: Melihat urutan pemanggilan fungsi yang menyebabkan error.{'\n'}
        - **Network Monitoring**: Memantau request dan response jaringan.{'\n'}
        - **Profiling**: Menganalisis performa aplikasi.
      </Text>

      <Text style={styles.subTitle}>Pengantar Chrome DevTools</Text>
      <Text style={styles.paragraph}>
        **Chrome DevTools** adalah alat debugging bawaan di Google Chrome yang memungkinkan pengembang untuk memeriksa DOM, memantau jaringan, menjalankan JavaScript, dan menganalisis performa aplikasi web.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Chrome DevTools</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`// Langkah Menggunakan Chrome DevTools\n`}
          {`1. Buka situs web yang ingin Anda debug.\n`}
          {`2. Klik kanan pada elemen apa pun dan pilih "Inspect".\n`}
          {`3. Gunakan tab "Elements" untuk memeriksa HTML dan CSS.\n`}
          {`4. Gunakan tab "Console" untuk menjalankan perintah JavaScript.\n`}
          {`5. Gunakan tab "Network" untuk memantau permintaan jaringan.`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Pengantar React Developer Tools</Text>
      <Text style={styles.paragraph}>
        **React Developer Tools** adalah ekstensi browser untuk memeriksa struktur komponen React, memantau state dan props, serta menganalisis rendering.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan React Developer Tools</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`// Langkah Menggunakan React Developer Tools\n`}
          {`1. Instal ekstensi "React Developer Tools" di browser Anda.\n`}
          {`2. Buka situs web berbasis React.\n`}
          {`3. Buka DevTools dan pilih tab "React".\n`}
          {`4. Telusuri struktur komponen dan periksa state atau props.`}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleDocumentationPress}>
        <Text style={styles.buttonText}>Buka Dokumentasi Debugging Tools</Text>
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

export default DebuggingToolsScreen;
