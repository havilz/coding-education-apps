import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const CharacterAndEnvironmentDesignDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.gamasutra.com/view/feature/130708/the_art_of_character_design.php');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pengenalan Desain Karakter dan Lingkungan</Text>
      <Text style={styles.paragraph}>
        Desain karakter dan lingkungan adalah bagian penting dalam pembuatan sebuah game. Karakter adalah elemen yang membawa cerita dan gameplay, sedangkan lingkungan menciptakan dunia tempat karakter berinteraksi. Keduanya harus dirancang dengan teliti agar memberikan pengalaman visual dan emosional yang kuat kepada pemain.
      </Text>

      <Text style={styles.subTitle}>Mengapa Desain Karakter dan Lingkungan Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Keterikatan Pemain**: Karakter yang menarik dan desain dunia yang mendalam akan membuat pemain merasa lebih terhubung dengan cerita dan gameplay.
      </Text>
      <Text style={styles.paragraph}>
        2. **Pengalaman Visual yang Kuat**: Desain yang baik meningkatkan pengalaman visual pemain, menciptakan atmosfer yang sesuai dengan tema game.
      </Text>
      <Text style={styles.paragraph}>
        3. **Penguatan Cerita**: Karakter dan lingkungan yang dirancang dengan baik dapat membantu memperkuat narasi dalam game, memberikan informasi dan suasana melalui elemen visual.
      </Text>

      <Text style={styles.subTitle}>Desain Karakter</Text>
      <Text style={styles.paragraph}>
        Desain karakter mencakup penciptaan penampilan visual dan kepribadian karakter dalam game. Hal ini melibatkan aspek-aspek seperti:
      </Text>

      <Text style={styles.subTitle}>1. **Penampilan Visual**</Text>
      <Text style={styles.paragraph}>
        Penampilan visual karakter harus mencerminkan peran dan kepribadian karakter tersebut. Desain pakaian, ekspresi wajah, dan postur tubuh berperan dalam menggambarkan karakter tersebut.
      </Text>

      <Text style={styles.subTitle}>2. **Animasi dan Gerakan**</Text>
      <Text style={styles.paragraph}>
        Animasi karakter adalah aspek penting dalam membuat karakter terasa hidup. Gerakan karakter, baik itu berjalan, berlari, atau berinteraksi, harus terlihat halus dan alami.
      </Text>

      <Text style={styles.subTitle}>3. **Kepribadian dan Karakteristik**</Text>
      <Text style={styles.paragraph}>
        Setiap karakter memiliki kepribadian yang dapat disampaikan melalui desain visualnya. Misalnya, karakter yang kuat dan tangguh mungkin akan memiliki pakaian berlapis baja, sementara karakter yang lincah dan cepat mungkin lebih kasual.
      </Text>

      <Text style={styles.subTitle}>Desain Lingkungan</Text>
      <Text style={styles.paragraph}>
        Desain lingkungan berfokus pada penciptaan dunia tempat karakter hidup. Ini mencakup elemen-elemen seperti:
      </Text>

      <Text style={styles.subTitle}>1. **Pemilihan Tema dan Suasana**</Text>
      <Text style={styles.paragraph}>
        Lingkungan harus mencerminkan tema dan atmosfer game. Misalnya, game horor mungkin memiliki pencahayaan redup dan desain lingkungan yang gelap dan menyeramkan, sedangkan game petualangan bisa memiliki pemandangan alam yang luas.
      </Text>

      <Text style={styles.subTitle}>2. **Detail dan Tekstur**</Text>
      <Text style={styles.paragraph}>
        Setiap elemen dalam lingkungan harus dipikirkan dengan matang. Ini termasuk detail seperti tekstur permukaan, pola cahaya, bayangan, dan elemen visual lainnya yang membentuk dunia tersebut.
      </Text>

      <Text style={styles.subTitle}>3. **Interaksi dan Navigasi**</Text>
      <Text style={styles.paragraph}>
        Desain lingkungan juga harus mempertimbangkan interaksi pemain dengan dunia tersebut. Elemen-elemen seperti pintu, tombol, dan objek yang bisa dihancurkan memungkinkan pemain untuk berinteraksi dengan dunia game.
      </Text>

      <Text style={styles.subTitle}>Contoh Karya Desain Karakter dan Lingkungan</Text>
      <Text style={styles.paragraph}>
        Desain karakter dan lingkungan yang baik akan menciptakan dunia yang hidup dan menarik. Berikut adalah contoh dari game yang memiliki desain karakter dan lingkungan yang luar biasa:
      </Text>

      <Text style={styles.subTitle}>Contoh Desain Karakter: The Witcher 3</Text>
      <Text style={styles.paragraph}>
        Dalam game *The Witcher 3*, desain karakter Geralt of Rivia sangat ikonik. Pakaian, rambut, dan ekspresi wajah Geralt menggambarkan kepribadian karakter yang keras dan penuh pengalaman. Karakter-karakter lain dalam game ini juga memiliki desain yang unik, menggambarkan latar belakang dan peran mereka dalam cerita.
      </Text>

      <Text style={styles.subTitle}>Contoh Desain Lingkungan: Red Dead Redemption 2</Text>
      <Text style={styles.paragraph}>
        Lingkungan dalam *Red Dead Redemption 2* menciptakan dunia barat liar yang sangat hidup. Dari padang rumput yang luas hingga kota-kota kecil, setiap elemen diatur dengan detail yang sangat mendalam, termasuk efek cuaca dan pencahayaan yang menciptakan suasana yang berbeda-beda.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Desain Karakter dan Lingkungan</Text>
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

export default CharacterAndEnvironmentDesignDetailScreen;
