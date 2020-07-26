import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView  } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LocationBtn({title}) {
  return(
      // <Text
      //  style={styles.location}>
      //    <Ionicons name="ios-navigate" size={32} /> 
      //    {title}
      //    {/* ios-navigate */}
        
      // </Text>
      // location-arrow
      // map-pin

        <Icon.Button
          name="map-o"
          backgroundColor="#B90551"
        >
          {title}
        </Icon.Button>
      
      
  )
}

const styles = StyleSheet.create({
  location: {
    margin: 1,
    width: '100%',
    color: '#fff',
    fontSize: 20
  }
})
