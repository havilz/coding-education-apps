import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const webDeveloperRoadmapData = [
  {
    title: 'Dasar-Dasar',
    items: [
      { name: 'HTML', screen: 'HTML' },
      { name: 'CSS', screen: 'CSS' },
      { name: 'JavaScript', screen: 'JavaScript' },
    ],
  },
  {
    title: 'Framework dan Libraries',
    items: [
      { name: 'React', screen: 'Frameworks' },
      { name: 'Vue.js', screen: 'Frameworks' },
      { name: 'Angular', screen: 'Frameworks' },
    ],
  },
  {
    title: 'Version Control dan Deployment',
    items: [
      { name: 'Git', screen: 'GitDetailScreen' },
      { name: 'GitHub', screen: 'GitHubDetailScreen' },
    ],
  },
  {
    title: 'Backend dan Database',
    items: [
      { name: 'Node.js', screen: 'NodeJSDetailScreen' },
      { name: 'Python', screen: 'Python' },
      { name: 'MySQL', screen: 'MYSQLDetailScreen' },
      { name: 'PostgreSQL', screen: 'PostgreSQLDetailScreen' },
    ],
  },
  {
    title: 'Testing dan Debugging',
    items: [
      { name: 'Mocha', screen: 'MochaDetailScreen' },
      { name: 'Chai', screen: 'ChaiDetailScreen' },
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
];

const WebDeveloperRoadmapScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Web Developer Roadmap</Text>
      {webDeveloperRoadmapData.map((section, index) => (
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
    color: '#388E3C',
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#388E3C',
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

export default WebDeveloperRoadmapScreen;
