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
        onPress={() => navigation.navigate('Question', {item})}
      >
        <LocationBtn key={item['id']} title={item.title} />  
     </TouchableHighlight>
    )
  })

  return (
      <SafeAreaView style={styles.safearea}>
          <Text style={styles.text}>Here are nearby tourists sites</Text>
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
    backgroundColor: '#f2e1e8'
  },
  scroll: {
    flex: 1,
    padding: 10,
    width: '100%',
    backgroundColor: '#f2e1e8'
  },
  location: {
    padding: 20,
    backgroundColor: '#B90551',
    margin: 1,
    width: '100%'
  },
  text: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "300"
  }
})