import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import FrameworksScreen from './src/screen/FrameworkScreen'; // pastikan file pathnya benar

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Frameworks"
          component={FrameworksScreen}
          options={{ title: 'Frameworks & Libraries' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
