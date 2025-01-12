import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const mobileDeveloperRoadmapData = [
  {
    title: 'Dasar-Dasar',
    items: [
      { name: 'Pemrograman Dasar (Java)', screen: 'Java' },
      { name: 'Pemrograman Dasar (Kotlin)', screen: 'Kotlin' },
      { name: 'OOP (Object-Oriented Programming)', screen: 'OOPDetailScreen' },
      { name: 'Git', screen: 'GitDetailScreen' },
    ],
  },
  {
    title: 'Platform Pengembangan',
    items: [
      { name: 'Android (Java/Kotlin)', screen: 'AndroidDetailScreen' },
      { name: 'iOS (Swift)', screen: 'IOSDetailScreen' },
    ],
  },
  {
    title: 'Framework Cross-Platform',
    items: [
      { name: 'React Native', screen: 'Frameworks' },
      { name: 'Flutter', screen: 'Frameworks' },
    ],
  },
  {
    title: 'Backend dan API',
    items: [
      { name: 'RESTful API', screen: 'RESTfulAPIDetailScreen' },
      { name: 'GraphQL', screen: 'GraphQLDetailScreen' },
      { name: 'Firebase', screen: 'FirebaseDetailScreen' },
    ],
  },
  {
    title: 'Testing dan Debugging',
    items: [
      { name: 'Unit Testing (Jest/Mockito)', screen: 'UnitTestingDetailScreen' },
      { name: 'Debugging Tools', screen: 'DebuggingToolsScreen' },
    ],
  },
  {
    title: 'Deployment dan Store',
    items: [
      { name: 'Play Store (Android)', screen: 'AndroidDetailScreen' },
      { name: 'App Store (iOS)', screen: 'IOSDetailScreen' },
    ],
  },
];

const MobileDeveloperRoadmapScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mobile Developer Roadmap</Text>
      {mobileDeveloperRoadmapData.map((section, index) => (
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


export default MobileDeveloperRoadmapScreen;
