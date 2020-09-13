import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import React, {useState} from 'react';

/*
  Home Screen: The landing page of the game. 
  This is also where location will be grabbed from the user's phone.
*/
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
      <TouchableHighlight 
        style = {styles.playBtn} 
        onPress= {() => {
          // get the current position and update state latitude and logitude
          navigator.geolocation.getCurrentPosition((position) => {
            setDirection({latitude: position.coords.latitude, longitude: position.coords.longitude})
            console.log('in navigation async', direction)
            // send direction to the Site screen
            navigation.navigate('Sites', {direction})
          }   
          )
        }
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
