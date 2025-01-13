import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Animated, Image } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Nilai animasi awal

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigasi ke HomeScreen setelah 3 detik
      navigation.replace('Home');
    }, 3000);

    // Mulai animasi setelah 1,5 detik
    const fadeInTimer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1, // Nilai akhir animasi
        duration: 1000, // Durasi animasi (1 detik)
        useNativeDriver: true,
      }).start();
    }, 1500);

    return () => {
      clearTimeout(timer); // Membersihkan timer navigasi
      clearTimeout(fadeInTimer); // Membersihkan timer animasi
    };
  }, [navigation, fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Gambar Logo */}
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#4CAF50" style={styles.activityIndicator} />
      <Animated.Text
        style={[
          styles.text,
          { opacity: fadeAnim }, // Animasi opasitas
        ]}
      >
        Hallo...
      </Animated.Text>
      {/* Teks Copyright */}
      <Text style={styles.copyright}>© 2025 Programer Education</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 150, // Ukuran logo lebih besar sedikit
    height: 150, // Ukuran logo lebih besar sedikit
    marginBottom: 20,
    borderRadius: 75, // Setengah dari lebar dan tinggi untuk membuatnya lingkaran
  },
  activityIndicator: {
    marginTop: 20, // Memberikan jarak antara logo dan loading spinner
  },
  text: {
    marginTop: 30, // Memindahkan teks lebih ke bawah
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  copyright: {
    position: 'absolute',
    bottom: 20, // Menempatkan teks di bagian bawah
    fontSize: 14,
    color: '#999',
  },
});

export default LoadingScreen;
