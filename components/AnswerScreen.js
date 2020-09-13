import { StyleSheet, Text, View, Button, SafeAreaView, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';

/*
Answer Screen: Holds the logic of the answer screen.
Displays Correct or Incorrect based on your guess on Question Screen.
Also displays correct answer and description.
*/

export default function AnswerScreen({ navigation, route }) {
  const {answer, desc} = route.params
  const answerText = answer ? 'Correct': 'Incorrect'
  const answerStyle = answer ? {color: 'green'} : {color: 'red'}
  return (

      <SafeAreaView style={styles.container}>
          <Text style={[answerStyle, styles.answer]} >That's {answerText}!</Text>
          <Text style={styles.title}>Site Description:</Text>
          <ScrollView style={styles.descContainer}>
            <Text style={styles.description}> {desc}</Text>
          </ScrollView>
          <TouchableHighlight
            style={styles.homeBtn}
            onPress= {() => navigation.navigate('Tarik')}
          >
            <Text style={styles.homeTxt}>
              Go Home
            </Text>
          </TouchableHighlight>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#f2e1e8',
    height: '100%'
  },
  answer: {
    fontSize: 30,
    marginTop: 30
  },
  homeBtn : {
    marginTop: 15,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    width: 150,
    height: 70,
    backgroundColor: '#B90551',
    alignItems: 'center', 
  },
  homeTxt: {
    color: '#fff',
    fontSize: 20
  },
  title: {
    color: '#B90551',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10
  },
  descContainer: {
    height: 300,
    width: 300,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#B90551'
  },
  description: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    margin: 10,
    color: '#fff'
  }
})
