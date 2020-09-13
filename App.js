import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen from './components/HomeScreen'
import SitesScreen from './components/SitesScreen'
import QuestionScreen from './components/QuestionScreen'
import AnswerScreen from './components/AnswerScreen'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Tarik'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f2e1e8',
          },
          headerTintColor: '#B90551',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
          },
        }}
      >
        <Stack.Screen
          name='Tarik' 
          component={HomeScreen}  
        />
        <Stack.Screen
          name='Sites' 
          component={SitesScreen}  
        />
        <Stack.Screen
          name='Question' 
          component={QuestionScreen}  
        />
        <Stack.Screen
          name='Answer' 
          component={AnswerScreen}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor: 'green'
  },
});
