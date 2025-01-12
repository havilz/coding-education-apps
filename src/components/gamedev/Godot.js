import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const GodotDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.godotengine.org/en/stable/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Godot Engine?</Text>
      <Text style={styles.paragraph}>
        Godot Engine adalah sebuah game engine open-source yang sangat fleksibel dan ringan, ideal untuk pengembangan game 2D dan 3D. 
        Engine ini mendukung pemrograman dengan bahasa scripting seperti GDScript, C#, dan VisualScript, dan dilengkapi dengan berbagai fitur canggih untuk pengembangan game.
      </Text>

      <Text style={styles.subTitle}>Mengapa Godot Engine Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Open Source dan Gratis**: Godot adalah proyek open-source yang memungkinkan siapa saja untuk menggunakannya tanpa biaya, dan memodifikasi engine sesuai kebutuhan.
      </Text>
      <Text style={styles.paragraph}>
        2. **Kemampuan 2D dan 3D**: Godot menawarkan dukungan kuat untuk pengembangan game 2D dan 3D dengan banyak fitur built-in untuk keduanya.
      </Text>
      <Text style={styles.paragraph}>
        3. **Pemrograman dengan GDScript**: GDScript adalah bahasa scripting yang ringan dan mudah digunakan, dikhususkan untuk Godot, memungkinkan pengembangan game yang cepat.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama dalam Godot Engine</Text>
      <Text style={styles.paragraph}>
        Godot menawarkan berbagai fitur unggulan untuk pengembangan game:
      </Text>

      <Text style={styles.subTitle}>1. **Editor Visual**</Text>
      <Text style={styles.paragraph}>
        Editor Godot sangat intuitif dan memungkinkan pengembang untuk membuat dan mengelola scene secara visual dengan mudah.
      </Text>

      <Text style={styles.subTitle}>2. **Scene System**</Text>
      <Text style={styles.paragraph}>
        Godot menggunakan sistem scene yang memungkinkan pengembang untuk menyusun objek dan elemen game dalam sebuah scene. Setiap scene bisa berupa game level, karakter, atau bahkan UI.
      </Text>

      <Text style={styles.subTitle}>3. **Cross-Platform**</Text>
      <Text style={styles.paragraph}>
        Game yang dikembangkan di Godot dapat dijalankan di berbagai platform, seperti Windows, macOS, Linux, iOS, Android, dan Web.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Godot: Skrip GDScript untuk Gerakan Karakter</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`extends KinematicBody2D\n\n`}
          {`var speed = 200\n\n`}
          {`func _process(delta):\n`}
          {`  var velocity = Vector2()\n`}
          {`  if Input.is_action_pressed("ui_right"): velocity.x += 1\n`}
          {`  if Input.is_action_pressed("ui_left"): velocity.x -= 1\n`}
          {`  if Input.is_action_pressed("ui_down"): velocity.y += 1\n`}
          {`  if Input.is_action_pressed("ui_up"): velocity.y -= 1\n\n`}
          {`  velocity = velocity.normalized() * speed\n`}
          {`  move_and_slide(velocity)\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama Godot Engine:</Text>
      <Text style={styles.paragraph}>
        - **Pemrograman dengan GDScript**: Bahasa pemrograman yang dibuat khusus untuk Godot, memberikan kontrol penuh atas pengembangan game.
      </Text>
      <Text style={styles.paragraph}>
        - **VisualScript**: Sebuah sistem pemrograman visual untuk pengguna yang lebih suka membuat logika game tanpa menulis kode.
      </Text>
      <Text style={styles.paragraph}>
        - **Ekosistem Game 2D yang Kuat**: Godot memiliki banyak fitur untuk pengembangan game 2D seperti animasi, tilemaps, dan sistem partikel.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Godot Engine</Text>
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

export default GodotDetailScreen;
