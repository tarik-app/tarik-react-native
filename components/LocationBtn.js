import React from 'react'
import { StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/*
Component for displaying each location. 
Currently not being used but will be integrated soon...
*/
export default function LocationBtn({title}) {
  return(
        <Icon.Button
          name="map-o"
          backgroundColor="#B90551"
        >
          {title}
        </Icon.Button>
  )
}

const styles = StyleSheet.create({
  location: {
    margin: 1,
    width: '100%',
    color: '#fff',
    fontSize: 20
  }
})
