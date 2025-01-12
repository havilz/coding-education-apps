import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const GameplayMechanicsDetailScreen = () => {
  const openDocumentation = () => {
    Linking.openURL('https://www.gamasutra.com/view/feature/130645/the_evolution_of_gameplay_mechanics.php');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pengenalan Gameplay Mechanics</Text>
      <Text style={styles.paragraph}>
        **Gameplay mechanics** adalah aturan dan sistem yang mengatur cara pemain berinteraksi dengan dunia game dan bagaimana elemen-elemen dalam game saling berhubungan. Gameplay mechanics mencakup segala sesuatu mulai dari pergerakan karakter hingga cara permainan menang atau kalah, serta cara pemain dapat berinteraksi dengan objek atau NPC di dunia game.
      </Text>

      <Text style={styles.subTitle}>Mengapa Gameplay Mechanics Penting?</Text>
      <Text style={styles.paragraph}>
        1. **Menciptakan Tantangan**: Gameplay mechanics adalah alat utama untuk menciptakan tantangan dalam game, memastikan bahwa pemain dapat merasa terlibat dan termotivasi untuk terus bermain.
      </Text>
      <Text style={styles.paragraph}>
        2. **Mengatur Interaksi Pemain**: Mechanic menentukan cara pemain berinteraksi dengan dunia, memberi mereka kontrol penuh terhadap pengalaman mereka.
      </Text>
      <Text style={styles.paragraph}>
        3. **Membentuk Identitas Game**: Gameplay mechanics juga menjadi elemen kunci dalam mendefinisikan jenis dan identitas sebuah game, apakah itu aksi, teka-teki, atau simulasi.
      </Text>

      <Text style={styles.subTitle}>Jenis-jenis Gameplay Mechanics</Text>
      <Text style={styles.paragraph}>
        Gameplay mechanics dapat dibagi menjadi berbagai kategori berdasarkan bagaimana mereka mempengaruhi interaksi pemain dengan dunia dan elemen lainnya dalam game:
      </Text>

      <Text style={styles.subTitle}>1. **Movement Mechanics**</Text>
      <Text style={styles.paragraph}>
        Movement mechanics mengacu pada bagaimana pemain bergerak di dunia game, misalnya berjalan, berlari, melompat, atau terbang. Ini adalah elemen dasar dalam banyak game, terutama dalam genre platformer atau petualangan.
      </Text>

      <Text style={styles.subTitle}>2. **Combat Mechanics**</Text>
      <Text style={styles.paragraph}>
        Combat mechanics mencakup bagaimana pemain bertarung melawan musuh. Ini dapat mencakup sistem pertarungan berbasis giliran, pertarungan real-time, atau menggunakan senjata dan sihir. Combat mechanics sering kali menentukan seberapa menarik dan menantang sebuah game aksi atau RPG.
      </Text>

      <Text style={styles.subTitle}>3. **Puzzle Mechanics**</Text>
      <Text style={styles.paragraph}>
        Puzzle mechanics digunakan dalam game yang berfokus pada pemecahan teka-teki dan tantangan kognitif. Ini melibatkan mekanisme di mana pemain harus berpikir dan mencari solusi untuk masalah yang dihadapi dalam game.
      </Text>

      <Text style={styles.subTitle}>4. **Resource Management Mechanics**</Text>
      <Text style={styles.paragraph}>
        Resource management mechanics melibatkan pengelolaan sumber daya dalam game, seperti uang, makanan, bahan bangunan, atau energi. Pemain perlu membuat keputusan tentang bagaimana menggunakan sumber daya yang terbatas untuk mencapai tujuan dalam game.
      </Text>

      <Text style={styles.subTitle}>5. **Progression Mechanics**</Text>
      <Text style={styles.paragraph}>
        Progression mechanics mengatur bagaimana pemain bergerak maju dalam game, seperti sistem level, pengalaman, atau pengembangan karakter. Ini juga mencakup sistem pencapaian, misalnya membuka kemampuan baru atau mendapatkan peralatan yang lebih kuat.
      </Text>

      <Text style={styles.subTitle}>6. **Economy Mechanics**</Text>
      <Text style={styles.paragraph}>
        Dalam game dengan elemen ekonomi, mekanik ekonomi merujuk pada cara sistem perdagangan dan transaksi dilakukan, misalnya dalam game RPG dengan sistem beli/jual barang, atau game strategi yang melibatkan pengelolaan sumber daya.
      </Text>

      <Text style={styles.subTitle}>Contoh Gameplay Mechanics dalam Game Populer</Text>
      <Text style={styles.paragraph}>
        Banyak game yang menggabungkan berbagai jenis gameplay mechanics untuk menciptakan pengalaman yang dinamis dan menarik:
      </Text>

      <Text style={styles.subTitle}>Contoh 1: **Super Mario Bros**</Text>
      <Text style={styles.paragraph}>
        Dalam *Super Mario Bros*, movement mechanics dan puzzle mechanics digabungkan untuk menciptakan pengalaman platformer yang sangat ikonik. Pemain dapat bergerak, melompat, dan menghindari rintangan, sambil memecahkan teka-teki untuk menemukan item dan jalan keluar.
      </Text>

      <Text style={styles.subTitle}>Contoh 2: **The Witcher 3: Wild Hunt**</Text>
      <Text style={styles.paragraph}>
        Dalam *The Witcher 3*, combat mechanics, resource management mechanics, dan progression mechanics digabungkan dalam dunia terbuka. Pemain bertarung melawan musuh, mengumpulkan bahan-bahan, dan mengembangkan kemampuan untuk melanjutkan cerita.
      </Text>

      <Text style={styles.subTitle}>Contoh 3: **Civilization VI**</Text>
      <Text style={styles.paragraph}>
        Dalam *Civilization VI*, gameplay mechanics mencakup ekonomi, strategi, dan manajemen sumber daya, di mana pemain memimpin peradaban dan membuat keputusan tentang penelitian, diplomasi, dan pertempuran.
      </Text>

      <Text style={styles.subTitle}>Mengembangkan Gameplay Mechanics dalam Game</Text>
      <Text style={styles.paragraph}>
        Mengembangkan gameplay mechanics memerlukan pertimbangan dan pengujian yang hati-hati. Pengembang harus berpikir tentang bagaimana mekanik yang mereka pilih akan berinteraksi satu sama lain dan bagaimana mereka akan mempengaruhi pengalaman pemain secara keseluruhan.
      </Text>

      <Text style={styles.paragraph}>
        Beberapa langkah dalam mengembangkan gameplay mechanics meliputi:
      </Text>
      <Text style={styles.paragraph}>
        1. **Desain dan Eksperimen**: Tentukan mekanik yang akan diterapkan, lalu eksperimen untuk melihat bagaimana mereka bekerja bersama dalam game.
      </Text>
      <Text style={styles.paragraph}>
        2. **Uji Coba dan Penyesuaian**: Uji mekanik dengan pemain dan sesuaikan berdasarkan umpan balik untuk menciptakan pengalaman yang menyenangkan.
      </Text>
      <Text style={styles.paragraph}>
        3. **Iterasi dan Penyempurnaan**: Gameplay mechanics harus terus ditingkatkan dan disempurnakan untuk memastikan mereka memberikan pengalaman yang imersif dan menantang.
      </Text>

      <TouchableOpacity style={styles.button} onPress={openDocumentation}>
        <Text style={styles.buttonText}>Buka Dokumentasi Gameplay Mechanics</Text>
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

export default GameplayMechanicsDetailScreen;
