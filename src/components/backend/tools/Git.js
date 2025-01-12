import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const GitDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://git-scm.com/doc');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Git?</Text>
      <Text style={styles.paragraph}>
        Git adalah sistem kontrol versi terdistribusi yang digunakan untuk melacak perubahan kode sumber selama pengembangan perangkat lunak. Dengan Git, pengembang dapat berkolaborasi dalam proyek secara efisien, mencatat setiap perubahan, dan mengembalikan kode ke versi sebelumnya jika diperlukan.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Git?</Text>
      <Text style={styles.paragraph}>
        1. **Kolaborasi**: Memungkinkan banyak pengembang bekerja pada kode yang sama tanpa saling mengganggu. {'\n'}
        2. **Sejarah Perubahan**: Melacak setiap perubahan kode dan mencatat siapa yang melakukan perubahan tersebut. {'\n'}
        3. **Penyimpanan Terdistribusi**: Setiap klon repositori adalah salinan penuh dari proyek, sehingga data aman bahkan jika server utama gagal.
      </Text>

      <Text style={styles.subTitle}>Perintah Dasar Git</Text>
      <Text style={styles.paragraph}>
        Berikut adalah beberapa perintah Git yang sering digunakan:
      </Text>

      <Text style={styles.subTitle}>1. **Inisialisasi Repository**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`git init\n`}
          {`# Membuat repositori Git baru di direktori saat ini.`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Menambahkan Perubahan ke Staging Area**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`git add <file>\n`}
          {`# Menambahkan file ke staging area sebelum commit.`}
        </Text>
      </View>

      <Text style={styles.subTitle}>3. **Commit Perubahan**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`git commit -m "Pesan commit"\n`}
          {`# Menyimpan perubahan dengan pesan deskriptif.`}
        </Text>
      </View>

      <Text style={styles.subTitle}>4. **Melihat Status Repository**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`git status\n`}
          {`# Menampilkan status file dalam repository.`}
        </Text>
      </View>

      <Text style={styles.subTitle}>5. **Melihat Riwayat Commit**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`git log\n`}
          {`# Menampilkan daftar commit dalam repository.`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama Git</Text>
      <Text style={styles.paragraph}>
        - **Branching dan Merging**: Membuat cabang (branch) untuk bekerja pada fitur baru tanpa memengaruhi kode utama, lalu menggabungkan perubahan ke cabang utama. {'\n'}
        - **Tagging**: Menandai versi rilis penting dari aplikasi. {'\n'}
        - **Integrasi dengan Layanan Cloud**: Bekerja dengan layanan seperti GitHub, GitLab, dan Bitbucket untuk kolaborasi online.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Git</Text>
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

export default GitDetailScreen;
