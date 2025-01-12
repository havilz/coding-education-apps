import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Animated } from 'react-native';

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
      <ActivityIndicator size="large" color="#4CAF50" />
      <Animated.Text
        style={[
          styles.text,
          { opacity: fadeAnim }, // Animasi opasitas
        ]}
      >
        Hallo...
      </Animated.Text>
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
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default LoadingScreen;
