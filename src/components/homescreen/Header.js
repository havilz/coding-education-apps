import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Roadmap to Programming</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#4CAF50', // Pastikan warna latar belakang sama dengan header
  },
  container: {
    padding: 29,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Header;
