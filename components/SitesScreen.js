import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableHighlight, ScrollView  } from 'react-native';
import React from 'react';
import LocationBtn from './LocationBtn'
import data from '../data.json'

export default function SitesScreen({ navigation }) {

  // get the place name and map to Location btn component
  const place_name = data['data'].map((item) => {
    return (
      <TouchableHighlight
     style={styles.location}
     onPress={() => navigation.navigate('Question')}
    >
        <LocationBtn key={item['id']}title={item['title']} />  
     </TouchableHighlight>
    )
  })

  return (
      <SafeAreaView style={styles.safearea}>
          <Text>Here are nearby tourists sites</Text>
          <ScrollView style={styles.scroll}>
            {place_name}
          </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'blue'
  },
  scroll: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 3,
    padding: 10,
    width: '100%'
  },
  location: {
    padding: 20,
    backgroundColor: 'tomato',
    margin: 1,
    width: '100%'
  }
})