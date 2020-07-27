import { StyleSheet, Text, Button, SafeAreaView,TouchableHighlight, ScrollView  } from 'react-native';
import React, {useState} from 'react';
import data from '../data.json'
import { CheckBox } from 'react-native-elements'

// currently displays title, description and image on the question screen
export default function QuestionScreen({ route, navigation }) {
  const [check, setCheck] = useState(1); 

  const {title, description, parsed, places_id} = route.params //parameter passed down from sites screen
  //loop over data description and make checkboxes
  
  let choices = parsed.map((place, index) => {
    const title = place.query.pages[places_id[index]].title
    const desc = place.query.pages[places_id[index]].extract
    // let question = desc.split('.')[1]
    let question = desc.split(/[\.\!]+(?!\d)\s*|\n+\s*/)[1];
    //if the description is only one sentence, 
    question === '' ? question = desc.split(/[\.\!]+(?!\d)\s*|\n+\s*/)[0] : desc.split(/[\.\!]+(?!\d)\s*|\n+\s*/)[1];

    //search the title in the question, and replace it with an empty string
    question = question.replace(title, '')

    console.log(desc.split('.')[1])
    return(
      <CheckBox
        key={`${question}-${index}`}
        title={question} //the second sentence of each description will be displayed
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        containerStyle={styles.radiobtn}
        checkedColor='#B90551'
        // to make only one item checked...
        checked={check === desc}
        onPress = {() => setCheck(desc)}
      />
    )
  })

//   choices = shuffle(choices);
// console.log(choices);

  return (
      <SafeAreaView style={styles.question}>
          <Text style={styles.placename}>You have chosen {title}!</Text>
          <Text style={styles.quest}>What is this site known for?</Text>
          <ScrollView>
            {shuffle(choices)}
          </ScrollView>
          <TouchableHighlight
            style={styles.submitBtn}
            onPress= {() => navigation.navigate('Answer', {answer: description === check, desc: description})}
          >
            <Text style={styles.submitTxt}>
              Submit
            </Text>
          </TouchableHighlight>
      </SafeAreaView>
  );
}

//-------a function to shuffle the choices for the each question, uses fisher-yates shuffle algorithm----------//
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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