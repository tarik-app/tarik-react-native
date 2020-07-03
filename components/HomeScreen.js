import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (

      <SafeAreaView style={styles.home}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Image 
          style={styles.image}
          source= {require('../assets/tarik-logo.png')}
        />

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
    backgroundColor: '#f2e1e8'
  },
  welcome : {
    fontSize: 30,
    fontWeight: '300'
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