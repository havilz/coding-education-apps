import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const roadmapData = [
  {
    title: 'Dasar-Dasar',
    items: [
      { name: 'HTML', screen: 'HTML', params: { category: 'Dasar-Dasar', item: 'HTML' } },
      { name: 'CSS', screen: 'CSS', params: { category: 'Dasar-Dasar', item: 'CSS' } },
      { name: 'JavaScript', screen: 'JavaScript', params: { category: 'Dasar-Dasar', item: 'JavaScript' } },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', screen: 'Frameworks' },
      { name: 'Angular', screen: 'Frameworks' },
      { name: 'Vue.js', screen: 'Frameworks' },
    ],
  },
  {
    title: 'Tools dan Build System',
    items: [
      { name: 'Webpack', screen: 'WebpackDetailScreen' },
      { name: 'Babel', screen: 'BabelDetailScreen' },
      { name: 'NPM', screen: 'NPMDetailScreen' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Jest', screen: 'JestDetailScreen' },
      { name: 'Cypress', screen: 'CypressDetailScreen' },
    ],
  },
];

const FrontendRoadmapScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {roadmapData.map((section, index) => (
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

export default FrontendRoadmapScreen;
