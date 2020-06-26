import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (

      <SafeAreaView style={styles.home}>
          <Text>Welcome to Tarik</Text>
          <Button title='Play Game' onPress= {() => navigation.navigate('Sites')}/>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  home : { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'blue'
  }
})