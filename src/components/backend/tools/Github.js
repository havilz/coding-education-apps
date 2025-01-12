import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const GitHubDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://docs.github.com/en');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu GitHub?</Text>
      <Text style={styles.paragraph}>
        GitHub adalah platform hosting berbasis cloud untuk kontrol versi dan kolaborasi. GitHub memungkinkan pengembang untuk menyimpan, mengelola, dan berbagi kode sumber mereka, serta bekerja bersama dalam proyek perangkat lunak menggunakan Git.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan GitHub?</Text>
      <Text style={styles.paragraph}>
        1. **Kolaborasi Mudah**: Memungkinkan pengembang bekerja bersama secara efisien dengan fitur seperti pull request dan code review. {'\n'}
        2. **Manajemen Versi**: Semua perubahan kode dilacak, memungkinkan rollback atau melihat riwayat proyek. {'\n'}
        3. **Integrasi CI/CD**: Mendukung integrasi dengan alat otomatisasi untuk pengujian, build, dan deployment. {'\n'}
        4. **Proyek Open Source**: Banyak proyek open source di-hosting di GitHub, memudahkan pengembang untuk berkontribusi.
      </Text>

      <Text style={styles.subTitle}>Fitur Utama GitHub</Text>
      <Text style={styles.paragraph}>
        - **Repository**: Penyimpanan kode proyek yang dapat diakses oleh individu atau tim. {'\n'}
        - **Issue Tracking**: Sistem untuk melacak bug, fitur yang diinginkan, dan pekerjaan lain dalam proyek. {'\n'}
        - **Pull Requests**: Memungkinkan kolaborator mengusulkan perubahan ke kode dan meminta tinjauan. {'\n'}
        - **Actions**: Alat otomatisasi untuk pipeline CI/CD. {'\n'}
        - **Pages**: Hosting untuk situs web statis dari repositori. {'\n'}
        - **Wiki**: Dokumentasi untuk proyek langsung dalam repositori.
      </Text>

      <Text style={styles.subTitle}>Perintah Dasar GitHub</Text>
      <Text style={styles.paragraph}>
        Berikut adalah beberapa langkah umum untuk menggunakan GitHub:
      </Text>

      <Text style={styles.subTitle}>1. **Membuat Repository**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`# Membuat repositori baru melalui CLI\n`}
          {`git init\n`}
          {`git remote add origin https://github.com/username/repository.git\n`}
          {`git push -u origin main`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Clone Repository**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`git clone https://github.com/username/repository.git\n`}
          {`# Mengunduh repositori ke direktori lokal.`}
        </Text>
      </View>

      <Text style={styles.subTitle}>3. **Mengirim Perubahan ke GitHub**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`git add .\n`}
          {`git commit -m "Pesan commit"\n`}
          {`git push origin main`}
        </Text>
      </View>

      <Text style={styles.subTitle}>4. **Menarik Perubahan dari GitHub**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`git pull origin main\n`}
          {`# Menggabungkan perubahan dari GitHub ke lokal.`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Keunggulan GitHub</Text>
      <Text style={styles.paragraph}>
        - **Kolaborasi Global**: Pengembang dari seluruh dunia dapat bekerja sama di proyek open source. {'\n'}
        - **Integrasi Ekosistem**: Mendukung banyak alat pengembang seperti Jira, Slack, dan Docker. {'\n'}
        - **Keamanan**: Menyediakan fitur seperti branch protection, dependabot untuk keamanan kode, dan enkripsi data. {'\n'}
        - **GitHub Copilot**: Asisten pengkodean berbasis AI untuk meningkatkan produktivitas.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi GitHub</Text>
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
    backgroundColor: '#0366d6',
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

export default GitHubDetailScreen;
