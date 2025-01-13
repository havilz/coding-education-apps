import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './src/components/homescreen/LoadingScreen';
import HomeScreen from './src/screen/HomeScreen';
import FrameworksScreen from './src/screen/FrameworkScreen';
import QuizScreen from './src/screen/QuizScreen';

//basic-education import 
import HTMLDetailScreen from './src/data/Basic_education/HTML';
import CSSDetailScreen from './src/data/Basic_education/CSS';
import JavaScriptDetailScreen from './src/data/Basic_education/JavaScript';
import OOPDetailScreen from './src/screen/OOPScreen';
import DataStructureDetailScreen from './src/screen/StrukturDataScreen';

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

//frontend import
import FrontendRoadmapScreen from './src/screen/FrontendRoadmapScreen'; 
import WebpackDetailScreen from './src/components/frontend/WebpackDetailScreen';
import BabelDetailScreen from './src/components/frontend/BabelDetailScreen';
import NPMDetailScreen from './src/components/frontend/NPMDetail';
import JestDetailScreen from './src/components/frontend/JestDetailScreen';
import MockitoDetailScreen from './src/components/frontend/MockitoDetailScreen';
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

//Best Role import web developer
import WebDeveloperRoadmapScreen from './src/screen/WebDeveloperScreen';
import GitDetailScreen from './src/components/backend/tools/Git';
import GitHubDetailScreen from './src/components/backend/tools/Github';

//best role import mobile developer
import MobileDeveloperRoadmapScreen from './src/screen/MobileDeveloperScreen';
import AndroidDetailScreen from './src/screen/Android.Screen';
import IOSDetailScreen from './src/screen/IOSScreen';
import RESTfulAPIDetailScreen from './src/components/backend/database/RESTfulAPI';
import GraphQLDetailScreen from './src/components/backend/database/GraphQL';
import FirebaseDetailScreen from './src/components/backend/database/Firebase';
import UnitTestingDetailScreen from './src/screen/UnitTestingScreen';
import DebuggingToolsScreen from './src/screen/DebugingToolsScreen';

//best role import Software developer
import SoftwareDeveloperRoadmapScreen from './src/screen/SoftwareDeveloperScreen';
import DatabaseDesignDetailScreen from './src/components/backend/database/DataBaseDesign';
import IntegrationTestingDetailScreen from './src/components/backend/testing/IntegratinTesting';
import CICDDetailScreen from './src/components/backend/testing/CI/CD';
import CloudPlatformsDetailScreen from './src/components/backend/tools/AWS-GCP-Azure';

//game developer import
import GameDeveloperRoadmapScreen from './src/screen/GameDevScreen';
import UnityDetailScreen from './src/components/gamedev/Unity';
import UnrealEngineDetailScreen from './src/components/gamedev/UnrealEngine';
import GodotDetailScreen from './src/components/gamedev/Godot';
import ComputerGraphicsIntroDetailScreen from './src/components/gamedev/ComGrafik';
import ShaderProgrammingDetailScreen from './src/components/gamedev/ShaderProgamiming';
import CharacterAndEnvironmentDesignDetailScreen from './src/components/gamedev/CharDesign';
import AIGameDetailScreen from './src/components/gamedev/GameAI';
import GameplayMechanicsDetailScreen from './src/components/gamedev/GameMechanic';
import MultiplayerNetworkingDetailScreen from './src/components/gamedev/Multiplayer';
import GameTestingDetailScreen from './src/components/gamedev/GameTesting';
import GameDeploymentDetailScreen from './src/components/gamedev/GameDeploy';
import GameMonetizationDetailScreen from './src/components/gamedev/GameMonetization';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingScreen" screenOptions={{ headerShown: true}} >
        <Stack.Screen 
          name="LoadingScreen" 
          component={LoadingScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Programer Education' }} 
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
          options={{ title: 'C++' }}
        />
        <Stack.Screen
          name="C#"
          component={CSharpDetailScreen}
          options={{ title: 'C#' }}
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
          name="GitDetailScreen"
          component={GitDetailScreen}
          options={{ title: 'Git' }}
        />
        <Stack.Screen
          name="GitHubDetailScreen"
          component={GitHubDetailScreen}
          options={{ title: 'GitHub' }}
        />
        <Stack.Screen
          name="MobileDeveloperRoadmapScreen"
          component={MobileDeveloperRoadmapScreen}
          options={{ title: 'Mobule Developer Roadmap' }}
        />
        <Stack.Screen
          name="OOPDetailScreen"
          component={OOPDetailScreen}
          options={{ title: 'OOPDetailScreen' }}
        />
        <Stack.Screen
          name="DataStructureDetailScreen"
          component={DataStructureDetailScreen}
          options={{ title: 'Struktur Data' }}
        />
        <Stack.Screen
          name="AndroidDetailScreen"
          component={AndroidDetailScreen}
          options={{ title: 'Android details' }}
        />
        <Stack.Screen
          name="IOSDetailScreen"
          component={IOSDetailScreen}
          options={{ title: 'IOS details' }}
        />
        <Stack.Screen
          name="RESTfulAPIDetailScreen"
          component={RESTfulAPIDetailScreen}
          options={{ title: 'RESTfulAPI' }}
        />
        <Stack.Screen
          name="GraphQLDetailScreen"
          component={GraphQLDetailScreen}
          options={{ title: 'GraphQL' }}
        />
        <Stack.Screen
          name="FirebaseDetailScreen"
          component={FirebaseDetailScreen}
          options={{ title: 'Firebase' }}
        />
        <Stack.Screen
          name="UnitTestingDetailScreen"
          component={UnitTestingDetailScreen}
          options={{ title: 'Unit Testing' }}
        />
        <Stack.Screen
          name="MockitoDetailScreen"
          component={MockitoDetailScreen}
          options={{ title: 'Mockito Description' }}
        />
        <Stack.Screen
          name="DebuggingToolsScreen"
          component={DebuggingToolsScreen}
          options={{ title: 'DebuggingTools' }}
        />
        <Stack.Screen
          name="SoftwareDeveloperRoadmapScreen"
          component={SoftwareDeveloperRoadmapScreen}
          options={{ title: 'Software Dev roadmap' }}
        />
        <Stack.Screen
          name="DatabaseDesignDetailScreen"
          component={DatabaseDesignDetailScreen}
          options={{ title: 'Database Design' }}
        />
        <Stack.Screen
          name="IntegrationTestingDetailScreen"
          component={IntegrationTestingDetailScreen}
          options={{ title: 'Integration Testing' }}
        />
        <Stack.Screen
          name="CICDDetailScreen"
          component={CICDDetailScreen}
          options={{ title: 'CI/CD' }}
        />
        <Stack.Screen
          name="CloudPlatformsDetailScreen"
          component={CloudPlatformsDetailScreen}
          options={{ title: 'Cloud Platform' }}
        />
        <Stack.Screen
          name="GameDeveloperRoadmapScreen"
          component={GameDeveloperRoadmapScreen}
          options={{ title: 'Game Developer roadmap' }}
        />
        <Stack.Screen
          name="UnityDetailScreen"
          component={UnityDetailScreen}
          options={{ title: 'Unity description' }}
        />
        <Stack.Screen
          name="UnrealEngineDetailScreen"
          component={UnrealEngineDetailScreen}
          options={{ title: 'Unreal Engine description' }}
        />
        <Stack.Screen
          name="GodotDetailScreen"
          component={GodotDetailScreen}
          options={{ title: 'Godot description' }}
        />
        <Stack.Screen
          name="ComputerGraphicsIntroDetailScreen"
          component={ComputerGraphicsIntroDetailScreen}
          options={{ title: 'Computer Grafik description' }}
        />
        <Stack.Screen
          name="ShaderProgrammingDetailScreen"
          component={ShaderProgrammingDetailScreen}
          options={{ title: 'Shader description' }}
        />
        <Stack.Screen
          name="CharacterAndEnvironmentDesignDetailScreen"
          component={CharacterAndEnvironmentDesignDetailScreen}
          options={{ title: 'environment design ' }}
        />
        <Stack.Screen
          name="AIGameDetailScreen"
          component={AIGameDetailScreen}
          options={{ title: 'Game AI ' }}
        />
        <Stack.Screen
          name="GameplayMechanicsDetailScreen"
          component={GameplayMechanicsDetailScreen}
          options={{ title: ' Game Mechanic ' }}
        />
        <Stack.Screen
          name="MultiplayerNetworkingDetailScreen"
          component={MultiplayerNetworkingDetailScreen}
          options={{ title: ' Multi player & Networking ' }}
        />
        <Stack.Screen
          name="GameTestingDetailScreen"
          component={GameTestingDetailScreen}
          options={{ title: ' Game Testing ' }}
        />
        <Stack.Screen
          name="GameDeploymentDetailScreen"
          component={GameDeploymentDetailScreen}
          options={{ title: ' Game Deploy ' }}
        />
        <Stack.Screen
          name="GameMonetizationDetailScreen"
          component={GameMonetizationDetailScreen}
          options={{ title: ' Game Monetization ' }}
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
