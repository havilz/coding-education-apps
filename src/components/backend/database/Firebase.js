import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const FirebaseDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://firebase.google.com/docs');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Firebase?</Text>
      <Text style={styles.paragraph}>
        Firebase adalah platform pengembangan aplikasi yang dibuat oleh Google untuk membantu pengembang membuat, meningkatkan, dan menskalakan aplikasi mereka. Firebase menyediakan berbagai layanan backend seperti autentikasi, basis data real-time, analitik, dan hosting.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama Firebase</Text>
      <Text style={styles.paragraph}>
        1. **Realtime Database**: Firebase menyediakan basis data real-time yang memungkinkan sinkronisasi data secara langsung antara klien dan server.{'\n'}
        2. **Firestore**: Database cloud modern dengan kemampuan pencarian dan kueri canggih.{'\n'}
        3. **Autentikasi**: Firebase Authentication mendukung metode login populer seperti email, Google, Facebook, dan lainnya.{'\n'}
        4. **Cloud Storage**: Untuk menyimpan file seperti gambar, video, dan dokumen di cloud.{'\n'}
        5. **Hosting**: Firebase Hosting menawarkan hosting yang cepat, aman, dan mudah digunakan untuk aplikasi web dan konten statis.{'\n'}
        6. **Cloud Functions**: Menjalankan logika serverless untuk merespons peristiwa atau permintaan API.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Firebase</Text>
      <Text style={styles.paragraph}>Berikut adalah beberapa contoh kode penggunaan Firebase:</Text>

      <Text style={styles.subTitle}>1. **Menginisialisasi Firebase**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`import firebase from 'firebase/app';\n`}
          {`import 'firebase/auth';\n`}
          {`import 'firebase/firestore';\n\n`}
          {`const firebaseConfig = {\n`}
          {`  apiKey: 'YOUR_API_KEY',\n`}
          {`  authDomain: 'YOUR_AUTH_DOMAIN',\n`}
          {`  projectId: 'YOUR_PROJECT_ID',\n`}
          {`  storageBucket: 'YOUR_STORAGE_BUCKET',\n`}
          {`  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',\n`}
          {`  appId: 'YOUR_APP_ID',\n`}
          {`};\n\n`}
          {`if (!firebase.apps.length) {\n`}
          {`  firebase.initializeApp(firebaseConfig);\n`}
          {`}`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Autentikasi Pengguna**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`firebase.auth().signInWithEmailAndPassword(email, password)\n`}
          {`  .then((userCredential) => {\n`}
          {`    console.log('User signed in:', userCredential.user);\n`}
          {`  })\n`}
          {`  .catch((error) => {\n`}
          {`    console.error('Error signing in:', error);\n`}
          {`  });`}
        </Text>
      </View>

      <Text style={styles.subTitle}>3. **Menyimpan Data di Firestore**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`const db = firebase.firestore();\n`}
          {`db.collection('users').add({\n`}
          {`  name: 'John Doe',\n`}
          {`  email: 'johndoe@example.com',\n`}
          {`})\n`}
          {`  .then((docRef) => {\n`}
          {`    console.log('Document written with ID:', docRef.id);\n`}
          {`  })\n`}
          {`  .catch((error) => {\n`}
          {`    console.error('Error adding document:', error);\n`}
          {`  });`}
        </Text>
      </View>

      <Text style={styles.subTitle}>4. **Membaca Data dari Firestore**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`db.collection('users').get()\n`}
          {`  .then((querySnapshot) => {\n`}
          {`    querySnapshot.forEach((doc) => {\n`}
          {`      console.log(doc.id, ' => ', doc.data());\n`}
          {`    });\n`}
          {`  })\n`}
          {`  .catch((error) => {\n`}
          {`    console.error('Error fetching documents:', error);\n`}
          {`  });`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Keunggulan Firebase</Text>
      <Text style={styles.paragraph}>
        - **Integrasi Mudah**: Firebase dapat digunakan langsung dengan SDK yang tersedia untuk berbagai platform.{'\n'}
        - **Reaksi Real-Time**: Fitur basis data real-time memudahkan pengembangan aplikasi interaktif.{'\n'}
        - **Skalabilitas**: Firebase mendukung aplikasi dari skala kecil hingga besar.{'\n'}
        - **Multiplatform**: Firebase mendukung aplikasi berbasis web, iOS, dan Android.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Firebase</Text>
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

export default FirebaseDetailScreen;
