import { StyleSheet, Text, Button, SafeAreaView,TouchableHighlight, ScrollView  } from 'react-native';
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
        containerStyle={styles.radiobtn}
        checkedColor='#B90551'
        // to make only one item checked...
        checked={check === item.description}
        onPress = {() => setCheck(item.description)}
      />
    )
  })

  return (
      <SafeAreaView style={styles.question}>
          <Text style={styles.placename}>You have chosen {item.title}!</Text>
          <Text style={styles.quest}>What is this site known for?</Text>
          <ScrollView>
            {choices}
          </ScrollView>
          <TouchableHighlight
            style={styles.submitBtn}
            onPress= {() => navigation.navigate('Answer', {answer: item.description === check, desc: item.description})}
          >
            <Text style={styles.submitTxt}>
              Submit
            </Text>
          </TouchableHighlight>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  question : { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#f2e1e8'
  },
  placename: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: '300'
  },
  quest: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: '300',
    color: '#B90551'
  },
  radiobtn: {
    width: 350,
    backgroundColor: '#f2e1e8',
    borderColor: 'black'
  },
  submitBtn : {
    marginLeft: 190,
    marginTop: 40,
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    width: 150,
    height: 70,
    backgroundColor: '#B90551',
    alignItems: 'center', 
  },
  submitTxt: {
    color: '#fff',
    fontSize: 20
  }
})