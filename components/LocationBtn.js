import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableHighlight, ScrollView  } from 'react-native';

export default function LocationBtn({title}) {
  return(
    <TouchableHighlight
     style={styles.location}
     onPress={() => alert(title)}
    >
      <Text>{title}</Text>
    </TouchableHighlight>
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
