import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';
import FrameworksScreen from './src/screen/FrameworkScreen';
import QuizScreen from './src/screen/QuizScreen';

//basic-education import 
import HTMLDetailScreen from './src/data/Basic_education/HTML';
import CSSDetailScreen from './src/data/Basic_education/CSS';
import JavaScriptDetailScreen from './src/data/Basic_education/JavaScript';

//best progaming import
import CppDetailScreen from './src/data/basic-programing-language/CPP';
import CSharpDetailScreen from './src/data/basic-programing-language/CSharp';
import PythonDetailScreen from './src/data/basic-programing-language/Python';
import KotlinDetailScreen from './src/data/basic-programing-language/Kotlin';
import JavaDetailScreen from './src/data/basic-programing-language/Java';
import RubyDetailScreen from './src/data/basic-programing-language/Ruby';
import PHPDetailScreen from './src/data/basic-programing-language/PHP';
import RDetailScreen from './src/data/basic-programing-language/R';
import GoDetailScreen from './src/data/basic-programing-language/G';
import SwiftDetailScreen from './src/data/basic-programing-language/Swift';
import TypeScriptDetailScreen from './src/data/basic-programing-language/TypeScript';
import NodeJSDetailScreen from './src/data/basic-programing-language/NodeJs';

//frontend import
import FrontendRoadmapScreen from './src/screen/FrontendRoadmapScreen'; 
import WebpackDetailScreen from './src/components/frontend/WebpackDetailScreen';
import BabelDetailScreen from './src/components/frontend/BabelDetailScreen';
import NPMDetailScreen from './src/components/frontend/NPMDetail';
import JestDetailScreen from './src/components/frontend/JestDetailScreen';
import CypressDetailScreen from './src/components/frontend/CypressDetailScreen';

//Backend import 
import BackendRoadmapScreen from './src/screen/BackendRoadmapScreen';
import LinuxDetailScreen from './src/components/backend/dasar-dasar/LinuxDetailScreen';
import TerminalShellDetailScreen from './src/components/backend/dasar-dasar/TerminalDetailScreen';
import NetworkingDetailScreen from './src/components/backend/dasar-dasar/NetworkingDetailScreen';
import MySQLDetailScreen from './src/components/backend/database/MYSQL';
import PostgreSQLDetailScreen from './src/components/backend/database/PostgreSQL';
import MongoDBDetailScreen from './src/components/backend/database/MongoDB';
import DockerDetailScreen from './src/components/backend/tools/Docker';
import KubernetesDetailScreen from './src/components/backend/tools/Kubernetes';
import NginxDetailScreen from './src/components/backend/tools/Nginx';
import MochaDetailScreen from './src/components/backend/testing/Mocha';
import ChaiDetailScreen from './src/components/backend/testing/Chai';

//Best Role import
import WebDeveloperRoadmapScreen from './src/screen/WebDeveloperScreen';

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
          name="HTML"
          component={HTMLDetailScreen}
          options={{ title: 'HTML' }}
        />
        <Stack.Screen
          name="CSS"
          component={CSSDetailScreen}
          options={{ title: 'CSS' }}
        />
        <Stack.Screen
          name="JavaScript"
          component={JavaScriptDetailScreen}
          options={{ title: 'Java Script' }}
        />
        <Stack.Screen
          name="C++"
          component={CppDetailScreen}
          options={{ title: 'CPP' }}
        />
        <Stack.Screen
          name="C#"
          component={CSharpDetailScreen}
          options={{ title: 'C Sharp' }}
        />
        <Stack.Screen
          name="Python"
          component={PythonDetailScreen}
          options={{ title: 'Python' }}
        />
        <Stack.Screen
          name="Kotlin"
          component={KotlinDetailScreen}
          options={{ title: 'Kotlin' }}
        />
        <Stack.Screen
          name="Java"
          component={JavaDetailScreen}
          options={{ title: 'Java' }}
        />
        <Stack.Screen
          name="Ruby"
          component={RubyDetailScreen}
          options={{ title: 'Ruby' }}
        />
        <Stack.Screen
          name="PHP"
          component={PHPDetailScreen}
          options={{ title: 'PHP' }}
        />
        <Stack.Screen
          name="R"
          component={RDetailScreen}
          options={{ title: 'R' }}
        />
        <Stack.Screen
          name="Go"
          component={GoDetailScreen}
          options={{ title: 'Go' }}
        />
        <Stack.Screen
          name="Swift"
          component={SwiftDetailScreen}
          options={{ title: 'Swift' }}
        />
        <Stack.Screen
          name="TypeScript"
          component={TypeScriptDetailScreen}
          options={{ title: 'TypeScript' }}
        />
        <Stack.Screen
          name="Node.js"
          component={NodeJSDetailScreen}
          options={{ title: 'Node.js' }}
        />
        <Stack.Screen
          name="Frameworks"
          component={FrameworksScreen}
          options={{ title: 'Frameworks & Libraries' }}
        />
        <Stack.Screen
          name="FrontendRoadmap"
          component={FrontendRoadmapScreen}
          options={{ title: 'Frontend Roadmap' }}
        />
        <Stack.Screen
          name="WebpackDetailScreen"
          component={WebpackDetailScreen}
          options={{ title: 'Webpack Description' }}
        />
        <Stack.Screen
          name="BabelDetailScreen"
          component={BabelDetailScreen}
          options={{ title: 'Babel Description' }}
        />
        <Stack.Screen
          name="NPMDetailScreen"
          component={NPMDetailScreen}
          options={{ title: 'NPM Description' }}
        />
        <Stack.Screen
          name="JestDetailScreen"
          component={JestDetailScreen}
          options={{ title: 'Jest Description' }}
        />
        <Stack.Screen
          name="CypressDetailScreen"
          component={CypressDetailScreen}
          options={{ title: 'Cypress Description' }}
        />
        <Stack.Screen
          name="BackendRoadmap"
          component={BackendRoadmapScreen}
          options={{ title: 'Backeend Roadmap' }}
        />
        <Stack.Screen
          name="TerminalShellDetailScreen"
          component={TerminalShellDetailScreen}
          options={{ title: 'Terminal & Shell' }}
        />
        <Stack.Screen
          name="LinuxDetailScreen"
          component={LinuxDetailScreen}
          options={{ title: 'About Linux' }}
        />
        <Stack.Screen
          name="NetworkingDetailScreen"
          component={NetworkingDetailScreen}
          options={{ title: 'About Netwroking' }}
        />
        <Stack.Screen
          name="MYSQLDetailScreen"
          component={MySQLDetailScreen}
          options={{ title: 'About MYSQL' }}
        />
        <Stack.Screen
          name="PostgreSQLDetailScreen"
          component={PostgreSQLDetailScreen}
          options={{ title: 'About PostgreSQL' }}
        />
        <Stack.Screen
          name="MongoDBDetailScreen"
          component={MongoDBDetailScreen}
          options={{ title: 'Abot MongoDB' }}
        />
        <Stack.Screen
          name="DockerDetailScreen"
          component={DockerDetailScreen}
          options={{ title: 'Abot Docker' }}
        />
        <Stack.Screen
          name="KubernetesDetailScreen"
          component={KubernetesDetailScreen}
          options={{ title: 'Abot Kubernetes' }}
        />
        <Stack.Screen
          name="NginxDetailScreen"
          component={NginxDetailScreen}
          options={{ title: 'Abot Nginx' }}
        />
        <Stack.Screen
          name="MochaDetailScreen"
          component={MochaDetailScreen}
          options={{ title: 'Abot Mocha' }}
        />
        <Stack.Screen
          name="ChaiDetailScreen"
          component={ChaiDetailScreen}
          options={{ title: 'Abot Chai' }}
        />
        <Stack.Screen
          name="WebDeveloperRoadmapScreen"
          component={WebDeveloperRoadmapScreen}
          options={{ title: 'Web Developer roadmap' }}
        />
        <Stack.Screen
          name="Quiz" 
          component={QuizScreen}
          options={({ route }) => ({ title: `Kuis - ${route.params.item}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
