import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const backendRoadmapData = [
  {
    title: 'Dasar-Dasar',
    items: [
      { name: 'Linux', screen: 'LinuxDetailScreen',},
      { name: 'Terminal & Shell', screen: 'TerminalShellDetailScreen',},
      { name: 'Networking', screen: 'NetworkingDetailScreen'},
    ],
  },
  {
    title: 'Bahasa Pemrograman',
    items: [
      { name: 'Node.js', screen: 'Frameworks' },
      { name: 'Python', screen: 'Python' },
      { name: 'Ruby', screen: 'Ruby' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', screen: 'MYSQLDetailScreen' },
      { name: 'PostgreSQL', screen: 'PostgreSQLDetailScreen' },
      { name: 'MongoDB', screen: 'MongoDBDetailScreen' },
    ],
  },
  {
    title: 'Tools dan Build System',
    items: [
      { name: 'Docker', screen: 'DockerDetailScreen' },
      { name: 'Kubernetes', screen: 'KubernetesDetailScreen' },
      { name: 'Nginx', screen: 'NginxDetailScreen' },
    ],
  },
  {
    title: 'Testing dan Debugging',
    items: [
      { name: 'Mocha', screen: 'MochaDetailScreen' },
      { name: 'Chai', screen: 'ChaiDetailScreen' },
    ],
  },
];

const BackendRoadmapScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {backendRoadmapData.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.subtitle}>{section.title}</Text>
          {section.items.map((item, itemIndex) => (
            <TouchableOpacity
              key={itemIndex}
              style={styles.item}
              onPress={() => navigation.navigate(item.screen, item.params || {})}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#f1f8e9',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#388E3C',
  },
});

export default BackendRoadmapScreen;
