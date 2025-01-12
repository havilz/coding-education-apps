import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const CloudPlatformsDetailScreen = () => {
  const openAWSDocumentation = () => {
    Linking.openURL('https://aws.amazon.com/documentation/');
  };

  const openGCPDocumentation = () => {
    Linking.openURL('https://cloud.google.com/docs');
  };

  const openAzureDocumentation = () => {
    Linking.openURL('https://learn.microsoft.com/en-us/azure/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Penyedia Layanan Cloud: AWS, GCP, dan Azure</Text>
      
      <Text style={styles.paragraph}>
        Layanan cloud memungkinkan pengembang untuk menggunakan infrastruktur, platform, dan perangkat lunak yang dikelola oleh penyedia pihak ketiga. Tiga penyedia layanan cloud terbesar adalah **Amazon Web Services (AWS)**, **Google Cloud Platform (GCP)**, dan **Microsoft Azure**. Ketiganya menawarkan berbagai layanan yang memungkinkan pengguna untuk membangun aplikasi yang skalabel dan aman.
      </Text>

      <Text style={styles.subTitle}>Amazon Web Services (AWS)</Text>
      <Text style={styles.paragraph}>
        **Amazon Web Services (AWS)** adalah penyedia layanan cloud terbesar yang menawarkan berbagai layanan komputasi, penyimpanan, jaringan, analitik, kecerdasan buatan (AI), dan banyak lagi. AWS dirancang untuk memenuhi kebutuhan bisnis dari berbagai skala, mulai dari perusahaan besar hingga startup kecil.
      </Text>

      <Text style={styles.subTitle}>Layanan Utama AWS:</Text>
      <Text style={styles.paragraph}>
        - **EC2 (Elastic Compute Cloud)**: Layanan komputasi yang memungkinkan pengguna untuk menyewa server virtual di cloud.
      </Text>
      <Text style={styles.paragraph}>
        - **S3 (Simple Storage Service)**: Layanan penyimpanan objek untuk menyimpan data dalam jumlah besar dengan keandalan tinggi.
      </Text>
      <Text style={styles.paragraph}>
        - **RDS (Relational Database Service)**: Layanan database yang dikelola yang mendukung MySQL, PostgreSQL, dan lainnya.
      </Text>
      <Text style={styles.paragraph}>
        - **Lambda**: Layanan komputasi tanpa server untuk menjalankan kode tanpa perlu mengelola server.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openAWSDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi AWS</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Google Cloud Platform (GCP)</Text>
      <Text style={styles.paragraph}>
        **Google Cloud Platform (GCP)** adalah penyedia layanan cloud yang terkenal dengan kecanggihan analitik data dan kecerdasan buatan. GCP menawarkan infrastruktur dan platform yang dibangun untuk mendukung aplikasi berbasis data besar, machine learning (ML), dan banyak lagi.
      </Text>

      <Text style={styles.subTitle}>Layanan Utama GCP:</Text>
      <Text style={styles.paragraph}>
        - **Compute Engine**: Layanan komputasi yang memungkinkan pengguna untuk menjalankan mesin virtual di cloud.
      </Text>
      <Text style={styles.paragraph}>
        - **Cloud Storage**: Layanan penyimpanan objek yang memungkinkan penyimpanan dan pengambilan data dalam jumlah besar.
      </Text>
      <Text style={styles.paragraph}>
        - **BigQuery**: Layanan analitik data besar yang memungkinkan pengguna untuk menjalankan kueri SQL pada data besar dengan sangat cepat.
      </Text>
      <Text style={styles.paragraph}>
        - **App Engine**: Platform sebagai layanan (PaaS) untuk mengembangkan dan menyebarkan aplikasi tanpa mengelola infrastruktur.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openGCPDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi GCP</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Microsoft Azure</Text>
      <Text style={styles.paragraph}>
        **Microsoft Azure** adalah platform cloud yang menawarkan berbagai layanan komputasi, penyimpanan, analitik, dan jaringan. Azure mendukung banyak alat pengembangan dan sering digunakan oleh perusahaan yang telah mengadopsi produk Microsoft lainnya.
      </Text>

      <Text style={styles.subTitle}>Layanan Utama Azure:</Text>
      <Text style={styles.paragraph}>
        - **Virtual Machines**: Layanan untuk membuat dan mengelola mesin virtual di cloud.
      </Text>
      <Text style={styles.paragraph}>
        - **Azure Blob Storage**: Penyimpanan objek yang memungkinkan pengguna untuk menyimpan data tidak terstruktur.
      </Text>
      <Text style={styles.paragraph}>
        - **Azure SQL Database**: Layanan database terkelola berbasis SQL yang menawarkan skalabilitas dan keamanan tinggi.
      </Text>
      <Text style={styles.paragraph}>
        - **Azure Functions**: Layanan komputasi tanpa server yang memungkinkan pengguna menjalankan kode di cloud tanpa mengelola infrastruktur.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openAzureDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Azure</Text>
      </TouchableOpacity>

      <Text style={styles.subTitle}>Perbandingan Layanan Cloud:</Text>
      <Text style={styles.paragraph}>
        Ketiga penyedia layanan cloud ini memiliki fitur yang sangat mirip, tetapi ada beberapa perbedaan utama:
      </Text>
      <Text style={styles.paragraph}>
        - **AWS**: Lebih cocok untuk aplikasi yang memerlukan infrastruktur yang fleksibel dan skalabilitas tinggi.
      </Text>
      <Text style={styles.paragraph}>
        - **GCP**: Lebih unggul dalam hal analitik data besar dan layanan terkait kecerdasan buatan (AI).
      </Text>
      <Text style={styles.paragraph}>
        - **Azure**: Terbaik untuk perusahaan yang sudah menggunakan produk Microsoft dan ingin mengintegrasikannya dengan cloud.
      </Text>

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

export default CloudPlatformsDetailScreen;
