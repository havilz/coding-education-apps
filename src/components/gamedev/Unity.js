import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const UnityDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.unity.com/unity/3DGameKit');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Unity3D?</Text>
      <Text style={styles.paragraph}>
        Unity3D adalah salah satu engine pengembangan game yang paling populer, yang digunakan untuk membuat permainan 2D dan 3D. Unity menyediakan berbagai fitur, seperti sistem fisika, pencahayaan, dan animasi yang memudahkan developer untuk membangun game secara cepat dan efisien.
      </Text>

      <Text style={styles.subTitle}>Mengapa Unity3D Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Cross-Platform**: Unity memungkinkan pengembang untuk membangun game untuk berbagai platform, termasuk PC, konsol, mobile, dan VR.
      </Text>
      <Text style={styles.paragraph}>
        2. **Mudah untuk Dipelajari**: Unity menyediakan antarmuka pengguna yang intuitif dan banyak tutorial serta dokumentasi yang membantu pemula.
      </Text>
      <Text style={styles.paragraph}>
        3. **Asset Store**: Unity memiliki Asset Store yang menyediakan berbagai macam sumber daya, seperti model 3D, tekstur, dan skrip yang siap pakai.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama dalam Unity3D</Text>
      <Text style={styles.paragraph}>
        Unity3D memiliki berbagai fitur hebat untuk pengembangan game:
      </Text>

      <Text style={styles.subTitle}>1. **Sistem Fisika**</Text>
      <Text style={styles.paragraph}>
        Unity memiliki sistem fisika yang memungkinkan objek dalam game berinteraksi secara realistis dengan gravitasi, tabrakan, dan pergerakan.
      </Text>

      <Text style={styles.subTitle}>2. **Grafik 3D dan 2D**</Text>
      <Text style={styles.paragraph}>
        Unity mendukung pengembangan game 2D dan 3D dengan sistem pencahayaan, efek visual, dan model animasi yang sangat fleksibel.
      </Text>

      <Text style={styles.subTitle}>3. **Skrip dan Pemrograman C#**</Text>
      <Text style={styles.paragraph}>
        Pengembang dapat menulis skrip game menggunakan bahasa C# untuk mengendalikan perilaku objek dalam permainan.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Unity3D: Skrip C# untuk Gerakan Karakter</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`using UnityEngine;\n\n`}
          {`public class PlayerMovement : MonoBehaviour {\n`}
          {`  public float speed = 5f;\n\n`}
          {`  void Update() {\n`}
          {`    float move = Input.GetAxis("Horizontal") * speed * Time.deltaTime;\n`}
          {`    transform.Translate(move, 0, 0);\n`}
          {`  }\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama Unity3D:</Text>
      <Text style={styles.paragraph}>
        - **Visualisasi Game Real-Time**: Unity memungkinkan pengembang untuk melihat perubahan game dalam waktu nyata tanpa harus menunggu proses build.
      </Text>
      <Text style={styles.paragraph}>
        - **Penyebaran ke Berbagai Platform**: Unity memungkinkan game untuk dideploy ke berbagai platform, termasuk PC, perangkat mobile, VR, dan konsol.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Unity3D</Text>
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

export default UnityDetailScreen;
