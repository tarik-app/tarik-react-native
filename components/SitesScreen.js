import { StyleSheet, Text, Button, SafeAreaView, TouchableHighlight, ScrollView  } from 'react-native';
import React from 'react';
import LocationBtn from './LocationBtn'
import data from '../data.json'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SitesScreen({ navigation }) {

  // get the place name and map to Location btn component
  const place_name = data['data'].map((item) => {
    return (
      <TouchableHighlight
        style={styles.location}
        onPress={() => navigation.navigate('Question', {item})}
      >
        <Icon.Button
          // style={styles.location}
          // iconStyle = {styles.location}
          name="location-arrow"
          backgroundColor="#B90551"
          onPress={() => navigation.navigate('Question', {item})}
        >
          {item.title}
        </Icon.Button>
        {/* <LocationBtn key={item['id']} title={item.title} />   */}
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
    margin: 5,
    width: '100%',
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  text: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "300"
  }
})