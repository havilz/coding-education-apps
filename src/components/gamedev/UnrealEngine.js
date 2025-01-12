import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const UnrealEngineDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.unrealengine.com/en-US/GettingStarted/index.html');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Unreal Engine?</Text>
      <Text style={styles.paragraph}>
        Unreal Engine adalah salah satu engine pengembangan game yang paling kuat dan sering digunakan untuk membuat game 3D dengan kualitas visual yang tinggi. 
        Unreal Engine mendukung berbagai platform, termasuk PC, konsol, mobile, dan VR. Engine ini dikenal dengan sistem rendering grafis yang sangat canggih dan tools pemrograman visual bernama Blueprints.
      </Text>

      <Text style={styles.subTitle}>Mengapa Unreal Engine Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Grafis Realistis**: Unreal Engine menawarkan kualitas grafis yang sangat tinggi, memungkinkan pembuatan game dengan detail visual yang luar biasa.
      </Text>
      <Text style={styles.paragraph}>
        2. **Blueprints (Pemrograman Visual)**: Unreal Engine memiliki sistem pemrograman visual bernama Blueprints, yang memungkinkan pengembang untuk membuat gameplay tanpa menulis kode secara langsung.
      </Text>
      <Text style={styles.paragraph}>
        3. **Kinerja Tinggi**: Unreal Engine sangat dioptimalkan untuk kinerja, cocok untuk membuat game AAA dan aplikasi VR dengan framerate yang mulus.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama dalam Unreal Engine</Text>
      <Text style={styles.paragraph}>
        Unreal Engine memiliki berbagai fitur canggih untuk pengembangan game:
      </Text>

      <Text style={styles.subTitle}>1. **Rendering dan Visualisasi**</Text>
      <Text style={styles.paragraph}>
        Unreal Engine mendukung rendering real-time dengan pencahayaan dan bayangan dinamis, memungkinkan pengembang untuk menciptakan visual yang sangat realistis.
      </Text>

      <Text style={styles.subTitle}>2. **Blueprints: Pemrograman Visual**</Text>
      <Text style={styles.paragraph}>
        Blueprints adalah sistem pemrograman visual yang memungkinkan developer membuat logika permainan tanpa menulis kode. Ini cocok untuk pemula dan mempercepat pengembangan.
      </Text>

      <Text style={styles.subTitle}>3. **Kualitas Suara dan Musik**</Text>
      <Text style={styles.paragraph}>
        Unreal Engine dilengkapi dengan fitur audio canggih, termasuk pengaturan suara 3D, efek suara dinamis, dan pemrograman suara dalam dunia game.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Unreal Engine: Skrip C++ untuk Gerakan Karakter</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`#include "GameFramework/Actor.h"\n`}
          {`#include "MyCharacter.generated.h"\n\n`}
          {`UCLASS()\n`}
          {`class AMyCharacter : public AActor {\n`}
          {`  GENERATED_BODY()\n\n`}
          {`public:\n`}
          {`  AMyCharacter();\n\n`}
          {`protected:\n`}
          {`  virtual void BeginPlay() override;\n\n`}
          {`public:\n`}
          {`  virtual void Tick(float DeltaTime) override;\n`}
          {`  void MoveForward(float Value);\n`}
          {`};\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama Unreal Engine:</Text>
      <Text style={styles.paragraph}>
        - **Cross-Platform**: Unreal Engine mendukung berbagai platform, termasuk PC, konsol, perangkat mobile, dan VR.
      </Text>
      <Text style={styles.paragraph}>
        - **Toolset Lengkap**: Unreal Engine memiliki toolset lengkap untuk membuat lingkungan game, karakter, animasi, serta sistem scripting dan fisika.
      </Text>
      <Text style={styles.paragraph}>
        - **Marketplace**: Unreal Engine menyediakan Marketplace untuk membeli atau mendownload berbagai asset dan plugin yang dapat digunakan dalam pengembangan game.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Unreal Engine</Text>
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

export default UnrealEngineDetailScreen;
