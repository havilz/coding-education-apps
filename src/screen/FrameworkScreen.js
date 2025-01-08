import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FrameworksInfo } from '../data/Framework-Library/Framework';

const FrameworksScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Frameworks & Libraries</Text>
      {FrameworksInfo.map((framework, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => Linking.openURL(framework.documentationLink)}>
          <Text style={styles.frameworkName}>{framework.name}</Text>
          <Text style={styles.description}>{framework.description}</Text>
          <Text style={styles.subtitle}>Kegunaan:</Text>
          {framework.uses.map((use, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {use}
            </Text>
          ))}
          <Text style={styles.subtitle}>Contoh Kode:</Text>
          <Text style={styles.code}>
            {framework.example.split('\n').map((line, idx) => (
              <Text key={idx}>{line}{'\n'}</Text>
            ))}
          </Text>
        </TouchableOpacity>
      ))}
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  frameworkName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  listItem: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  code: {
    fontSize: 14,
    backgroundColor: '#f4f4f4',
    padding: 10,
    fontFamily: 'monospace',
    marginTop: 10,
  },
});

export default FrameworksScreen;
