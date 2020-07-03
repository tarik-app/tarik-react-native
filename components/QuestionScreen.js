import { StyleSheet, Text, Button, SafeAreaView, Image, ScrollView  } from 'react-native';
import React, {useState} from 'react';
import data from '../data.json'
import { CheckBox } from 'react-native-elements'

// currently displays title, description and image on the question screen
export default function QuestionScreen({ route, navigation }) {
  const [check, setCheck] = useState(1); 

  const {item} = route.params //parameter passed down from sites screen
  //loop over data description and make checkboxes
  const choices = data['data'].map((item) => {
    return(
      <CheckBox
        title={item.description}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        // to make only one item checked...
        checked={check === item.description}
        onPress = {() => setCheck(item.description)}
      />
    )
  })

  return (
      <SafeAreaView style={styles.question}>
          <Text>You have picked {item.title}!</Text>
          <Text>What is this site known for?</Text>
          <ScrollView>
            {choices}
          </ScrollView>
          <Button title='Submit Answer' onPress= {() => navigation.navigate('Answer', {answer: item.description === check})}/>
          {/* <Image 
            style={styles.image}
            source={{
              uri: item.image,
            }}
          /> */}
          <Button title='Go to Home' onPress={() => navigation.navigate('Tarik')} />
          
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  question : { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f2e1e8'
    // borderWidth: 3,
    // borderColor: 'blue'
  },
  image: {
    width: 60,
    height: 60
  }
})