import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import React, { Component, useState } from 'react';
// import WS from 'react-native-websocket'

// import Geolocation from '@react-native-community/geolocation';

export default function HomeScreen({ navigation }) {
  [direction, setDirection] = useState({latitude:0, longitude:0})
  return (

      <SafeAreaView style={styles.home}>
        <View style={styles.logo}>
          <Image 
            style={styles.image}
            source= {require('../assets/tarik-location-logo.png')}
          />
          <Text style={styles.logotext}>ታሪክ</Text>
        </View>

        <Text style={styles.text}>Learn as you go</Text>
        {/* button play */}
        {/* when play is clicked, activate websocket,  */}

        <TouchableHighlight style = {styles.playBtn} onPress= {() => {
          // if (navigator.geolocation) {
            // navigator.geolocation.watchPosition(this.showPosition);
              navigator.geolocation.getCurrentPosition((position) => {
                // if (position.coords.latitude !== this.state.latitude || position.coords.longitude !== this.state.longitude) {
                // console.log(position.coords.latitude)
                // console.log(position.coords.longitude)
                // {latitude: position.coords.latitude, longitude: position.coords.longitude}
                // const location = JSON.stringify(position)
                setDirection({latitude: position.coords.latitude, longitude: position.coords.longitude})
                // console.log(this.state.longitude)
                // console.log(this.state.latitude)
                // console.log('home screen direction')
                
                }   
              )
            // } else { 
            //   console.log('what the heck')
            //   return "Geolocation is not supported by this browser.";
            // }
          console.log(direction)

          navigation.navigate('Sites', {direction})}
        }> 
          <Text style = {styles.btnText}>
           PLAY
          </Text>
        </TouchableHighlight >
      </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  home : { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f2e1e8'
  },
  text : {
    fontSize: 20,
    fontWeight: '200'
  },
  playBtn : {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 40,
    width: 210,
    height: 90,
    backgroundColor: '#B90551',
    alignItems: 'center', 
  },
  btnText : {
    color: 'white',
    fontSize: 20
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70
  },
  logotext: {
    fontSize: 60 ,
    fontWeight: '300'
  },
  container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
  }
})



// import { Alert, TouchableOpacity } from 'react-native';

// export class Location extends Component {
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
