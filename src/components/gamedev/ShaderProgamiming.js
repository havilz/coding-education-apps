import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ShaderProgrammingDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.khronos.org/opengl/wiki/Shader');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Shader Programming?</Text>
      <Text style={styles.paragraph}>
        Shader programming adalah teknik dalam grafika komputer yang digunakan untuk menulis program kecil yang dieksekusi pada GPU (Graphics Processing Unit). Program ini bertugas untuk mengontrol berbagai aspek rendering, seperti pencahayaan, warna, bayangan, dan tekstur pada objek 3D atau 2D.
      </Text>

      <Text style={styles.subTitle}>Mengapa Shader Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Peningkatan Performa**: Dengan mengeksekusi kode pada GPU, shader dapat mengolah data grafik lebih cepat daripada menggunakan CPU.
      </Text>
      <Text style={styles.paragraph}>
        2. **Visualisasi Realistis**: Shader memungkinkan pembuatan efek visual yang lebih realistis, seperti pencahayaan dinamis, bayangan, dan refleksi.
      </Text>
      <Text style={styles.paragraph}>
        3. **Fleksibilitas dalam Rendering**: Shader memberikan fleksibilitas yang lebih tinggi dalam hal pengaturan dan penyesuaian efek visual, memungkinkan pembuatan gaya grafis yang unik.
      </Text>

      <Text style={styles.subTitle}>Jenis Shader</Text>
      <Text style={styles.paragraph}>
        Ada beberapa jenis shader yang digunakan dalam grafik komputer, di antaranya:
      </Text>

      <Text style={styles.subTitle}>1. **Vertex Shader**</Text>
      <Text style={styles.paragraph}>
        Vertex shader bertugas untuk memproses data vertikal (titik) dari objek 3D. Ia melakukan transformasi seperti rotasi, translasi, dan skala, serta menghitung posisi vertikal dalam ruang layar.
      </Text>

      <Text style={styles.subTitle}>2. **Fragment (Pixel) Shader**</Text>
      <Text style={styles.paragraph}>
        Fragment shader mengontrol warna dan atribut lainnya dari setiap piksel yang akan digambar pada layar. Shader ini digunakan untuk memberikan efek pencahayaan, tekstur, atau bayangan pada objek.
      </Text>

      <Text style={styles.subTitle}>3. **Geometry Shader**</Text>
      <Text style={styles.paragraph}>
        Geometry shader berfungsi untuk menghasilkan geometri tambahan, seperti mengubah bentuk objek atau menghasilkan detail baru pada objek yang ada.
      </Text>

      <Text style={styles.subTitle}>4. **Compute Shader**</Text>
      <Text style={styles.paragraph}>
        Compute shader digunakan untuk perhitungan umum yang tidak terkait langsung dengan rendering grafis, seperti simulasi fisika atau pemrosesan data paralel.
      </Text>

      <Text style={styles.subTitle}>Contoh Kode Shader</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh kode shader sederhana untuk memberikan efek pencahayaan pada objek menggunakan GLSL (OpenGL Shading Language):
      </Text>

      <Text style={styles.subTitle}>Vertex Shader (GLSL)</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`#version 330 core\n`}
          {`layout(location = 0) in vec3 aPos; // posisi vertex\n`}
          {`uniform mat4 model; // matriks model\n`}
          {`uniform mat4 view; // matriks view\n`}
          {`uniform mat4 projection; // matriks proyeksi\n\n`}
          {`void main() {\n`}
          {`  gl_Position = projection * view * model * vec4(aPos, 1.0);\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fragment Shader (GLSL)</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`#version 330 core\n`}
          {`out vec4 FragColor; // warna fragmen\n`}
          {`uniform vec3 lightColor; // warna cahaya\n`}
          {`uniform vec3 objectColor; // warna objek\n\n`}
          {`void main() {\n`}
          {`  FragColor = vec4(lightColor * objectColor, 1.0);\n`}
          {`}\n`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama dalam Shader Programming:</Text>
      <Text style={styles.paragraph}>
        - **Pencahayaan Dinamis**: Shader digunakan untuk menghitung efek pencahayaan secara dinamis, memungkinkan interaksi cahaya dengan objek yang realistis.
      </Text>
      <Text style={styles.paragraph}>
        - **Efek Khusus**: Shader memungkinkan penciptaan efek grafis seperti bayangan, refleksi, dan transparansi.
      </Text>
      <Text style={styles.paragraph}>
        - **Tekstur**: Shader digunakan untuk mengaplikasikan tekstur pada objek 3D, memberikan tampilan yang lebih realistis.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Shader Programming</Text>
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

export default ShaderProgrammingDetailScreen;
