import { StyleSheet, Text, View, Button, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (

      <SafeAreaView style={styles.home}>
        <Text style={styles.welcome}>Welcome!</Text>

        {/* button play */}
        <TouchableHighlight style = {styles.playBtn} onPress= {() => navigation.navigate('Sites')}> 
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
    // borderWidth: 3,
    backgroundColor: '#F1E7EB'
  },
  welcome : {
    fontSize: 30
  },
  playBtn : {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 40,
    width: 130,
    height: 60,
    backgroundColor: '#B90551',
    alignItems: 'center', 
  },
  btnText : {
    color: 'white',
    fontSize: 20
  }
})