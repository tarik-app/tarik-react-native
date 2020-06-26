import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView  } from 'react-native';

export default function LocationBtn({title}) {
  return(
      <Text>{title}</Text>
  )
}

const styles = StyleSheet.create({
  location: {
    padding: 20,
    backgroundColor: 'tomato',
    margin: 1,
    width: '100%'
  }
})
