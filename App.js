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




// import React, { Component } from 'react';
// import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// export default class App extends Component {
// 	state = {
// 		location: null
// 	};

// 	findCoordinates = () => {
// 		navigator.geolocation.getCurrentPosition(
// 			position => {
// 				const location = JSON.stringify(position);

// 				this.setState({ location });
// 			},
// 			error => Alert.alert(error.message),
// 			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
// 		);
// 	};

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<TouchableOpacity onPress={this.findCoordinates}>
// 					<Text style={styles.welcome}>Find My Coords?</Text>
// 					<Text>Location: {this.state.location}</Text>
// 				</TouchableOpacity>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF'
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10
//   }
// })