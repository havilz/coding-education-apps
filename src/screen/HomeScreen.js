import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/homescreen/Header';
import Body from '../components/homescreen/Body';
import Footer from '../components/homescreen/Footer';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Body navigation={navigation} />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
