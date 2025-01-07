import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import { HTMLInfo } from '../data/Basic_education/HTML';
import { CSSInfo } from '../data/Basic_education/CSS';
import { JavaScriptInfo } from '../data/Basic_education/JavaScript';

import { JavaInfo } from '../data/basic-programing-language/Java';
import { CPPInfo } from '../data/basic-programing-language/CPP';
import { CSharpInfo } from '../data/basic-programing-language/CSharp';
import { PythonInfo } from '../data/basic-programing-language/Python';
import { PHPInfo } from '../data/basic-programing-language/PHP';

const DetailScreen = ({ route, navigation }) => {
  const { category, item } = route.params;

  // Data untuk elemen yang dipilih
  let data;
  if (item === 'HTML') {
    data = HTMLInfo;
  } else if (item === 'CSS') {
    data = CSSInfo;
  } else if (item === 'JavaScript') {
    data = JavaScriptInfo;
  } else if (item === 'Java') {
    data = JavaInfo;
  } else if (item === 'C++') {
    data = CPPInfo;
  } else if (item === 'C#') {
    data = CSharpInfo;
  } else if (item === 'Python') {
    data = PythonInfo;
  } else if (item === 'PHP') {
    data = PHPInfo;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item}</Text>

      {data ? (
        <>
          <Text style={styles.subtitle}>Deskripsi:</Text>
          <Text style={styles.description}>{data.description}</Text>

          <Text style={styles.subtitle}>Kegunaan:</Text>
          {data.uses.map((use, index) => (
            <Text key={index} style={styles.listItem}>
              • {use}
            </Text>
          ))}

          <Text style={styles.subtitle}>Contoh Kode:</Text>
          <Text style={styles.code}>{data.example}</Text>

          <Text style={styles.subtitle}>Penjelasan Detail:</Text>
          <Text style={styles.description}>{data.detailedExplanation}</Text>

          {/* Link ke dokumentasi lengkap */}
          <TouchableOpacity
            style={styles.link}
            onPress={() => Linking.openURL(data.documentationLink)}
          >
            <Text style={styles.linkText}>Pelajari lebih lanjut di dokumentasi</Text>
          </TouchableOpacity>

          {/* Navigasi ke elemen terkait */}
          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate('Detail', { category, item: data.related })}
          >
            <Text style={styles.linkText}>Pelajari lebih lanjut tentang {data.related}</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.description}>Informasi untuk {item} belum tersedia.</Text>
      )}
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
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#4CAF50',
    marginBottom: 10,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    marginLeft: 10,
  },
  code: {
    fontSize: 14,
    color: '#333',
    backgroundColor: '#f4f4f4',
    padding: 10,
    marginTop: 10,
    fontFamily: 'monospace',
  },
  link: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetailScreen;
