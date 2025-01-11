import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const KubernetesDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://kubernetes.io/docs/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Apa itu Kubernetes?</Text>
      <Text style={styles.paragraph}>
        Kubernetes adalah platform open-source yang digunakan untuk mengotomatisasi proses deployment, scaling, dan pengelolaan aplikasi kontainer. Kubernetes dirancang untuk menjalankan aplikasi dalam skala besar dengan menyediakan orkestrasi kontainer yang memungkinkan manajemen aplikasi yang kompleks secara efisien. 
        Kubernetes mendukung berbagai jenis container seperti Docker dan container lainnya, serta menyediakan berbagai fitur untuk meningkatkan ketahanan dan skalabilitas aplikasi.
      </Text>

      <Text style={styles.subTitle}>Mengapa Menggunakan Kubernetes?</Text>
      <Text style={styles.paragraph}>
        1. **Pengelolaan Kontainer yang Efisien**: Kubernetes memungkinkan otomatisasi dalam mengelola kontainer, seperti melakukan scaling dan pengaturan jaringan.
      </Text>
      <Text style={styles.paragraph}>
        2. **Skalabilitas**: Kubernetes memudahkan untuk menskalakan aplikasi secara horizontal dengan menambahkan lebih banyak instansi aplikasi (pods).
      </Text>
      <Text style={styles.paragraph}>
        3. **Resiliensi & Keandalan**: Kubernetes dapat memastikan aplikasi tetap berjalan meskipun ada kegagalan dengan fitur seperti auto-healing dan load balancing.
      </Text>
      <Text style={styles.paragraph}>
        4. **Multi-Cloud dan Hybrid-Cloud**: Kubernetes memungkinkan aplikasi dijalankan di berbagai penyedia cloud atau infrastruktur lokal secara bersamaan.
      </Text>

      <Text style={styles.subTitle}>Komponen Utama Kubernetes:</Text>
      <Text style={styles.paragraph}>
        - **Pods**: Unit terkecil dalam Kubernetes yang dapat menjalankan satu atau beberapa kontainer.
      </Text>
      <Text style={styles.paragraph}>
        - **Nodes**: Mesin fisik atau virtual tempat pods berjalan. Setiap node memiliki agen yang mengelola komunikasi dengan master Kubernetes.
      </Text>
      <Text style={styles.paragraph}>
        - **Deployments**: Mengelola dan mengatur jumlah replika pods yang dijalankan di dalam cluster.
      </Text>
      <Text style={styles.paragraph}>
        - **Services**: Menyediakan cara untuk mendefinisikan dan mengakses aplikasi yang berjalan dalam pod.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan Kubernetes</Text>
      <Text style={styles.paragraph}>
        Berikut adalah contoh YAML untuk mendefinisikan Deployment di Kubernetes dan ekspos pod sebagai service:
      </Text>

      <Text style={styles.subTitle}>1. **Deployment YAML**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`apiVersion: apps/v1\n`}
          {`kind: Deployment\n`}
          {`metadata:\n`}
          {`  name: my-app\n`}
          {`spec:\n`}
          {`  replicas: 3\n`}
          {`  selector:\n`}
          {`    matchLabels:\n`}
          {`      app: my-app\n`}
          {`  template:\n`}
          {`    metadata:\n`}
          {`      labels:\n`}
          {`        app: my-app\n`}
          {`    spec:\n`}
          {`      containers:\n`}
          {`      - name: my-container\n`}
          {`        image: my-app-image\n`}
          {`        ports:\n`}
          {`        - containerPort: 80`}
        </Text>
      </View>

      <Text style={styles.subTitle}>2. **Service YAML**</Text>
      <View style={styles.codeCard}>
        <Text style={styles.code}>
          {`apiVersion: v1\n`}
          {`kind: Service\n`}
          {`metadata:\n`}
          {`  name: my-app-service\n`}
          {`spec:\n`}
          {`  selector:\n`}
          {`    app: my-app\n`}
          {`  ports:\n`}
          {`  - protocol: TCP\n`}
          {`    port: 80\n`}
          {`    targetPort: 80\n`}
          {`  type: LoadBalancer`}
        </Text>
      </View>

      <Text style={styles.subTitle}>Fitur Utama Kubernetes:</Text>
      <Text style={styles.paragraph}>
        - **Automasi Scaling dan Deployment**: Kubernetes dapat mengatur jumlah instance aplikasi secara otomatis, berdasarkan beban yang diterima.
      </Text>
      <Text style={styles.paragraph}>
        - **Auto-healing**: Pods yang gagal atau tidak berfungsi dengan benar akan secara otomatis diganti dengan yang baru.
      </Text>
      <Text style={styles.paragraph}>
        - **Load Balancing**: Kubernetes menyediakan mekanisme untuk mendistribusikan lalu lintas aplikasi secara merata di antara pods.
      </Text>
      <Text style={styles.paragraph}>
        - **Resource Management**: Kubernetes memungkinkan pengelolaan sumber daya (CPU, memori) dengan alokasi dan pembatasan yang tepat.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Kubernetes</Text>
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

export default KubernetesDetailScreen;
