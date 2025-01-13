import React from 'react';
import { View, StyleSheet } from 'react-native';
import Body from '../components/homescreen/Body';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Body navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
