import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Linking, View } from 'react-native';
import { FrameworksInfo } from '../data/Framework-Library/Framework';

const FrameworksScreen = ({ route }) => {
  const { targetFramework } = route.params || {}; // Dapatkan parameter dari navigasi
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFrameworks, setFilteredFrameworks] = useState(FrameworksInfo);

  useEffect(() => {
    // Jika ada targetFramework, filter otomatis
    if (targetFramework) {
      const filtered = FrameworksInfo.filter((framework) =>
        framework.name.toLowerCase().includes(targetFramework.toLowerCase())
      );
      setFilteredFrameworks(filtered);
      setSearchQuery(targetFramework); // Isi input pencarian
    }
  }, [targetFramework]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredFrameworks(FrameworksInfo);
    } else {
      const filtered = FrameworksInfo.filter((framework) =>
        framework.name.toLowerCase().includes(query.toLowerCase()) ||
        framework.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFrameworks(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frameworks & Libraries</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search frameworks..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView contentContainerStyle={styles.listContainer}>
        {filteredFrameworks.map((framework, index) => (
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
        {filteredFrameworks.length === 0 && (
          <Text style={styles.noResults}>No frameworks found matching your search.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  listContainer: {
    flexGrow: 1,
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
  noResults: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
});

export default FrameworksScreen;
