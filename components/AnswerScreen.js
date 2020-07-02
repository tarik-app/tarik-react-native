import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';

export default function AnswerScreen({ navigation, route }) {
  const {answer} = route.params
  const answerText = answer ? 'Correct': 'Incorrect'
  const answerStyle = answer ? {color: 'blue'} : {color: 'green'}
  return (

      <SafeAreaView>
          <Text>Answer Page</Text>
          <Text style={answerStyle}>{answerText}</Text>
          <Button title='Go Home' onPress= {() => navigation.navigate('Home')}/>
      </SafeAreaView>

  );
}