import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const AIGameDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.gamasutra.com/view/feature/130707/artificial_intelligence_in_game_.php');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pengenalan AI dalam Game</Text>
      <Text style={styles.paragraph}>
        **AI (Artificial Intelligence)** dalam game merujuk pada penggunaan algoritma dan teknik untuk menciptakan perilaku karakter atau elemen non-pemain (NPC) yang tampak cerdas dan realistis. AI digunakan untuk memberi NPC kemampuan untuk berinteraksi dengan pemain dan lingkungan game, menciptakan tantangan dan pengalaman yang lebih menarik.
      </Text>

      <Text style={styles.subTitle}>Mengapa AI dalam Game Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Interaksi Realistis**: AI memungkinkan NPC untuk berperilaku secara realistis dan bereaksi terhadap tindakan pemain, meningkatkan keterlibatan dan kepuasan pemain.
      </Text>
      <Text style={styles.paragraph}>
        2. **Tantangan dan Gameplay**: AI memainkan peran penting dalam memberikan tantangan kepada pemain. Dengan AI yang baik, musuh atau karakter dalam game dapat beradaptasi dan menawarkan pengalaman yang semakin sulit.
      </Text>
      <Text style={styles.paragraph}>
        3. **Pengalaman Dinamis**: AI menciptakan dunia yang lebih hidup dan dinamis, dengan NPC yang dapat menjalani rutinitas dan melakukan interaksi independen dengan dunia.
      </Text>

      <Text style={styles.subTitle}>Jenis-jenis AI dalam Game</Text>
      <Text style={styles.paragraph}>
        Terdapat beberapa jenis teknik AI yang digunakan dalam pengembangan game, di antaranya:
      </Text>

      <Text style={styles.subTitle}>1. **Finite State Machines (FSM)**</Text>
      <Text style={styles.paragraph}>
        FSM adalah metode yang digunakan untuk mengontrol perilaku NPC berdasarkan kondisi atau "state" tertentu. Misalnya, karakter musuh dapat memiliki status seperti "berjalan", "menyerang", atau "melarikan diri". FSM digunakan untuk menciptakan keputusan berdasarkan keadaan tertentu.
      </Text>

      <Text style={styles.subTitle}>2. **Pathfinding (Pencarian Jalur)**</Text>
      <Text style={styles.paragraph}>
        Pathfinding adalah teknik yang digunakan untuk menentukan jalur terpendek atau paling efisien antara dua titik dalam dunia game. Algoritma terkenal yang digunakan untuk pathfinding adalah **A* (A-star)**, yang memungkinkan karakter untuk bergerak secara cerdas di dunia yang kompleks.
      </Text>

      <Text style={styles.subTitle}>3. **Behavior Trees**</Text>
      <Text style={styles.paragraph}>
        **Behavior Trees** adalah struktur hierarkis yang digunakan untuk mengontrol perilaku NPC yang lebih kompleks. Berbeda dengan FSM, Behavior Trees memungkinkan pengelolaan keputusan yang lebih fleksibel dan terorganisir.
      </Text>

      <Text style={styles.subTitle}>4. **Machine Learning (Pembelajaran Mesin)**</Text>
      <Text style={styles.paragraph}>
        **Machine Learning** digunakan untuk memungkinkan NPC belajar dari pengalaman dan data yang mereka kumpulkan. Teknik ini memungkinkan NPC untuk beradaptasi dan merespons dinamika dunia game dengan cara yang lebih cerdas.
      </Text>

      <Text style={styles.subTitle}>Contoh Penggunaan AI dalam Game</Text>
      <Text style={styles.paragraph}>
        AI banyak digunakan dalam berbagai jenis game, mulai dari RPG hingga game aksi dan strategi. Berikut adalah beberapa contoh penggunaan AI dalam game:
      </Text>

      <Text style={styles.subTitle}>Contoh 1: **The Last of Us**</Text>
      <Text style={styles.paragraph}>
        Dalam game *The Last of Us*, AI digunakan untuk mengendalikan perilaku musuh dan rekan NPC. Musuh berperilaku dengan cara yang realistis, seperti bersembunyi dan melarikan diri jika mereka melihat pemain, sementara rekan NPC membantu pemain dengan memberikan informasi atau melawan musuh.
      </Text>

      <Text style={styles.subTitle}>Contoh 2: **Left 4 Dead**</Text>
      <Text style={styles.paragraph}>
        *Left 4 Dead* menggunakan sistem AI yang disebut **"Director"** yang menyesuaikan kesulitan permainan secara dinamis dengan mengontrol jumlah musuh dan kejadian dalam game berdasarkan perilaku pemain. Ini menciptakan pengalaman yang tidak dapat diprediksi dan menyenangkan.
      </Text>

      <Text style={styles.subTitle}>Contoh 3: **Chess AI (Catur)**</Text>
      <Text style={styles.paragraph}>
        Dalam permainan catur, AI seperti **Stockfish** atau **AlphaZero** menggunakan pembelajaran mesin dan algoritma pencarian untuk mengevaluasi berbagai posisi dan strategi untuk membuat keputusan terbaik.
      </Text>

      <Text style={styles.subTitle}>Tantangan dalam Menerapkan AI dalam Game</Text>
      <Text style={styles.paragraph}>
        Meskipun AI memberikan banyak manfaat, ada beberapa tantangan yang harus dihadapi pengembang game:
      </Text>
      <Text style={styles.paragraph}>
        - **Kompleksitas**: AI dapat sangat kompleks dan memerlukan banyak sumber daya komputasi, terutama untuk game yang memiliki dunia terbuka atau musuh yang sangat cerdas.
      </Text>
      <Text style={styles.paragraph}>
        - **Keamanan dan Fairness**: AI dalam game kompetitif harus dirancang dengan hati-hati untuk memastikan bahwa AI tidak memberikan keuntungan yang tidak adil.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi AI dalam Game</Text>
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

export default AIGameDetailScreen;
