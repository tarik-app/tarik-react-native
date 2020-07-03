import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView  } from 'react-native';

export default function LocationBtn({title}) {
  return(
      <Text style={styles.location}>{title}</Text>
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
