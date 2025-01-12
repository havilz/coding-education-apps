import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const softwareDeveloperRoadmapData = [
  {
    title: 'Dasar-Dasar Pemrograman',
    items: [
      { name: 'Pemrograman Dasar (Python)', screen: 'Python' },
      { name: 'Pemrograman Dasar (Java)', screen: 'Java' },
      { name: 'Struktur Data', screen: 'DataStructureDetailScreen' },
      { name: 'OOP (Object-Oriented Programming)', screen: 'OOPDetailScreen' },
      { name: 'Git', screen: 'GitDetailScreen' },
    ],
  },
  {
    title: 'Pengembangan Backend',
    items: [
      { name: 'Node.js', screen: 'Node.js' },
      { name: 'Python (Django/Flask)', screen: 'Frameworks' },
      { name: 'Ruby on Rails', screen: 'Frameworks' },
    ],
  },
  {
    title: 'Pengembangan Frontend',
    items: [
      { name: 'HTML', screen: 'HTML' },
      { name: 'CSS', screen: 'CSS' },
      { name: 'JavaScript', screen: 'JavaScript' },
      { name: 'React.js', screen: 'Frameworks' },
      { name: 'Vue.js', screen: 'Frameworks' },
    ],
  },
  {
    title: 'Database dan Manajemen Data',
    items: [
      { name: 'SQL (MySQL)', screen: 'MYSQLDetailScreen' },
      { name: 'NoSQL (MongoDB)', screen: 'MongoDBDetailScreen' },
      { name: 'Database Design', screen: 'DatabaseDesignDetailScreen' },
    ],
  },
  {
    title: 'Testing dan Quality Assurance',
    items: [
      { name: 'Unit Testing (Jest)', screen: 'JestDetailScreen' },
      { name: 'Integration Testing', screen: 'IntegrationTestingDetailScreen' },
      { name: 'CI/CD (Continuous Integration/Continuous Deployment)', screen: 'CICDDetailScreen' },
    ],
  },
  {
    title: 'Deployment dan DevOps',
    items: [
      { name: 'Docker', screen: 'DockerDetailScreen' },
      { name: 'Kubernetes', screen: 'KubernetesDetailScreen' },
      { name: 'AWS/GCP/Azure', screen: 'CloudPlatformsDetailScreen' },
    ],
  },
];

const SoftwareDeveloperRoadmapScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Software Developer Roadmap</Text>
      {softwareDeveloperRoadmapData.map((section, index) => (
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
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#4CAF50',
  },
});


export default SoftwareDeveloperRoadmapScreen;
