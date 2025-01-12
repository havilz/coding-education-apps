import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const categories = [
  {
    title: 'Basic Role',
    subcategories: ['Frontend Roadmap', 'Backend Roadmap'],
  },
  {
    title: 'Best Role',
    subcategories: ['Web Dev', 'Mobile Dev', 'Software Dev', 'Game Dev'],
  },
  {
    title: 'Basic Education',
    subcategories: ['HTML', 'CSS', 'JavaScript', 'OOP', 'Struktur Data'],
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
    subcategories: ['Frameworks & Libraries'],
  },
];

const Body = ({ navigation }) => {
  const renderSubcategory = ({ item, category }) => {
    // Handle specific subcategory navigation
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

    if (item === 'Backend Roadmap') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('BackendRoadmap')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Web Dev') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('WebDeveloperRoadmapScreen')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Mobile Dev') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MobileDeveloperRoadmapScreen')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Software Dev') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('SoftwareDeveloperRoadmapScreen')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Game Dev') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('GameDeveloperRoadmapScreen')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    // Handle programming languages
    if (item === 'HTML') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('HTML')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'CSS') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('CSS')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'JavaScript') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('JavaScript')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Python') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Python')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Java') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Java')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'C++') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('C++')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'C#') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('C#')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Kotlin') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Kotlin')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Ruby') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Ruby')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'PHP') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('PHP')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'R') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('R')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Go') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Go')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Swift') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Swift')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'TypeScript') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('TypeScript')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }
    
    if (item === 'OOP') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('OOPDetailScreen')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    if (item === 'Struktur Data') {
      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('DataStructureDetailScreen')}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate({ category, item })}
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
