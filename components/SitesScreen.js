import { StyleSheet, Text, Button, SafeAreaView, TouchableHighlight, ScrollView  } from 'react-native';
import React from 'react';
import LocationBtn from './LocationBtn'
import data from '../data.json'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default class SitesScreen extends React.Component  {
  // and get the data from calling the route and display it(list of locations with their data) here...
  constructor(props){
    super(props)
    this.state = {
      data: null,
      isLoading: false,
      latitude: 0,
      longitude: 0,
      locations : [],
      place_names : []
    }
    const {direction} = this.props.route.params
  } //props.navigation
    // ({ navigation })
    
  // right before the component mounts

   
  

  // get the place name and map to Location btn component
  async componentDidMount() {
     // get current position and save it in state
    //  if (navigator.geolocation) {
    //   // navigator.geolocation.watchPosition(this.showPosition);
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       if (position.coords.latitude !== this.state.latitude || position.coords.longitude !== this.state.longitude) {
    //         console.log(position.coords.latitude)
    //         console.log(position.coords.longitude)
    //         this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude})
    //         console.log(this.state.longitude)
    //         console.log(this.state.latitude)
    //       }   
    //     });
    //   } else { 
    //     console.log('what the heck')
    //     return "Geolocation is not supported by this browser.";
    //   }

    const endpoint = "https://41b53c281efe.ngrok.io/location";
    console.log('in site screen')
   
    
    // const {direction} = this.props.route.params
    // change the coords to a JSON object
    // let coords = JSON.stringify(direction)
    let latitude = direction.latitude
    let longitude = direction.longitude
    let coords = JSON.stringify({
      latit: latitude,
      longi: longitude
    })
    // console.log(coords)
    // console.log(coords['latitude'])
    
    console.log('direction from home screen')
    // console.log(direction)
    // console.log('line 41 lat and long')
    // console.log(this.state.latitude)
    // console.log(this.state.longitude)
    await axios({
      method: 'post',
      url: endpoint,
      data: coords,
      headers: {'Content-Type': 'application/json' }
      })
      .then((response) => {
        //handle success
        let data = response.data
        // // loops through the response array and parses each into json data
        let parsed = data.map((json) => {
          return JSON.parse(json)
        })

        // get the place id, (unique id for each places)
        //to then use it to access the name of each place
        let places_id = parsed.map((place) => {
          return Object.keys(place.query.pages)
        })
       
        // console.log(parsed)
        // console.log(places_id)

        // loop over the parsed data and apply the keys to get
        //the title of th place
        let place_names = parsed.map((place, index) => {
          const title = place.query.pages[places_id[index]].title
          const description = place.query.pages[places_id[index]].extract
          return (
            // <Text>{title}</Text>
            <TouchableHighlight
              style={styles.location}
              onPress={() => this.props.navigation.navigate('Question', {title, description, parsed, places_id})}
              // pass the data we get for each individual item to the questions page
            >
              <Icon.Button
                // style={styles.location}
                // iconStyle = {styles.location}
                name="location-arrow"
                backgroundColor="#B90551"
                onPress={() => this.props.navigation.navigate('Question', {title, description, parsed, places_id})}
              >
                {title}
              </Icon.Button>
            {/* <LocationBtn key={item['id']} title={item.title} />   */}
            </TouchableHighlight>
          
        )})

        //update state of place names
        this.setState({place_names: place_names})
        

      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });



  }

  // componentWillUnmount() {

  // }

  // showPosition = (position) => {
  //   //to protect from infinite loop of calling state
  //   if (position.coords.latitude !== this.state.latitude || position.coords.longitude !== this.state.longitude) {
  //     console.log(position.coords.latitude)
  //     console.log(position.coords.longitude)
  //     this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude})
  //     console.log(this.state.longitude)
  //     console.log(this.state.latitude)
  //   }     
  // }

  // const place_names = data['data'].map((item) => {
  //   return (
  //     <TouchableHighlight
  //       style={styles.location}
  //       onPress={() => navigation.navigate('Question', {item})}
  //       // pass the data we get for each individual item to the questions page
  //     >
  //       <Icon.Button
  //         // style={styles.location}
  //         // iconStyle = {styles.location}
  //         name="location-arrow"
  //         backgroundColor="#B90551"
  //         onPress={() => navigation.navigate('Question', {item})}
  //       >
  //         {item.title}
  //       </Icon.Button>
  //       {/* <LocationBtn key={item['id']} title={item.title} />   */}
  //     </TouchableHighlight>
  //   )
  // })

  render(){
    return (
      <SafeAreaView style={styles.safearea}>
          <Text style={styles.text}>Here are nearby tourists sites</Text>
          <ScrollView style={styles.scroll}>
            {this.state.place_names}
          </ScrollView>
      </SafeAreaView>
    );
  }
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