import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const gameDeveloperRoadmapData = [
  {
    title: 'Dasar-Dasar Pemrograman',
    items: [
      { name: 'Pemrograman Dasar (C#)', screen: 'C#' },
      { name: 'Pemrograman Dasar (C++)', screen: 'C++' },
      { name: 'Struktur Data', screen: 'DataStructureDetailScreen' },
      { name: 'OOP (Object-Oriented Programming)', screen: 'OOPDetailScreen' },
      { name: 'Git', screen: 'GitDetailScreen' },
    ],
  },
  {
    title: 'Pengembangan Game',
    items: [
      { name: 'Unity3D', screen: 'UnityDetailScreen' },
      { name: 'Unreal Engine', screen: 'UnrealEngineDetailScreen' },
      { name: 'Godot Engine', screen: 'GodotDetailScreen' },
    ],
  },
  {
    title: 'Grafik dan Desain Visual',
    items: [
      { name: 'Pengenalan ke Grafik Komputer', screen: 'ComputerGraphicsIntroDetailScreen' },
      { name: 'Shader Programming', screen: 'ShaderProgrammingDetailScreen' },
      { name: 'Desain Karakter dan Lingkungan', screen: 'CharacterAndEnvironmentDesignDetailScreen' },
    ],
  },
  {
    title: 'Fungsi dan Interaktivitas dalam Game',
    items: [
      { name: 'AI dalam Game', screen: 'AIGameDetailScreen' },
      { name: 'Gameplay Mechanics', screen: 'GameplayMechanicsDetailScreen' },
      { name: 'Multiplayer & Networking', screen: 'MultiplayerNetworkingDetailScreen' },
    ],
  },
  {
    title: 'Testing dan Quality Assurance',
    items: [
      { name: 'Unit Testing (Jest)', screen: 'JestDetailScreen' },
      { name: 'Game Testing', screen: 'GameTestingDetailScreen' },
    ],
  },
  {
    title: 'Deployment dan Distribusi',
    items: [
      { name: 'Penyebaran di Platform (Steam, PlayStation, Xbox)', screen: 'GameDeploymentDetailScreen' },
      { name: 'Game Monetization', screen: 'GameMonetizationDetailScreen' },
    ],
  },
];

const GameDeveloperRoadmapScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Game Developer Roadmap</Text>
      {gameDeveloperRoadmapData.map((section, index) => (
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

export default GameDeveloperRoadmapScreen;
