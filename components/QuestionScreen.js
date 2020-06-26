import { StyleSheet, Text, View, Button, SafeAreaView, Image } from 'react-native';
import React from 'react';

// currently displays title, description and image on the question screen
export default function QuestionScreen({ route, navigation }) {

  const {item} = route.params //parameter passed down from sites screen
  return (
      <SafeAreaView style={styles.question}>
          <Text>You chose {item.title}</Text>
          <Text>Desc: {item.description}</Text>
          <Image 
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
          <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  question : { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'blue'
  },
  image: {
    width: 60,
    height: 60
  }
})