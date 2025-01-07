import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contact: roadmap@app.com</Text>
      <Text style={styles.text}>Email: support@roadmap.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Footer;
