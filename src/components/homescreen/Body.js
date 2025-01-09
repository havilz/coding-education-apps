import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const categories = [
  {
    title: 'Basic Role',
    subcategories: ['Frontend Roadmap', 'Backend'],
  },
  {
    title: 'Best Role',
    subcategories: ['Web Dev', 'Mobile Dev', 'Software Dev', 'Game Dev', 'Cyber Security'],
  },
  {
    title: 'Basic Education',
    subcategories: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Best Programming Language',
    subcategories: [
      'Java', 
      'C++', 
      'C#', 
      'Python', 
      'PHP',
      'Ruby',
      'Swift',
      'Go',
      'R',
      'Kotlin',
      'TypeScript',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    subcategories: ['Frameworks & Libraries',],
  },
];

const Body = ({ navigation }) => {
  const renderSubcategory = ({ item, category }) => {
    if (item === 'Frameworks & Libraries') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Frameworks')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Frontend Roadmap') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('FrontendRoadmap')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Detail', { category, item })}
      >
        <Text style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderCategory = ({ item }) => (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <FlatList
        data={item.subcategories}
        renderItem={({ item }) => renderSubcategory({ item, category: item.title })}
        keyExtractor={(subItem, index) => `${item.title}-${index}`}
      />
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={(item, index) => `${item.title}-${index}`}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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

export default Body;
