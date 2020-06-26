import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';

export default function QuestionScreen({ navigation }) {
  return (
      <SafeAreaView style={styles.question}>
          <Text>Question Page</Text>
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
  }
})