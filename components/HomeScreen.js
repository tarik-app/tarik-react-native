import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
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
    alignItems: 'baseline'
  },
  image: {
    width: 70,
    height: 70
  },
  logotext: {
    fontSize: 60 ,
    fontWeight: '300'
  }
})