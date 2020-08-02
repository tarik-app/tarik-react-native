import { StyleSheet, Text, Button, SafeAreaView, TouchableHighlight, ScrollView, ActivityIndicator, View  } from 'react-native';
import React from 'react';
import LocationBtn from './LocationBtn'
import data from '../data.json'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default class SitesScreen extends React.Component  {
  // and get the data from calling the route and display it(list of locations with their data) here...
  constructor(props){
    super(props)
    const {direction} = this.props.route.params
    const {latitude, longitude} = direction
    this.state = {
      data: null,
      isLoading: true, //to check if data is still being loaded or already loaded
      latitude,
      longitude,
      locations : [],
      place_names : [],
      locationData: null,  // Used to hold data loaded from the location API/backend
    }
    console.log('sitescreen', latitude, longitude)
  } 
    
  // right before the component mounts

   
  //-------------------- get the place data and save it in a state-----------------------------//
  async loadLocationData() {
    this.setState({isLoading : true}) //while it's loading the location data
    console.log('line 34 isLoading is', this.state.isLoading)
    const endpoint = "https://89e67a83750c.ngrok.io";
    console.log('in site screen')

    // change the coords to a JSON object
    let coords = JSON.stringify({
      latit: this.state.latitude,
      longi: this.state.longitude
    })
    console.log('coords',coords)
    // console.log(coords['latitude'])
    
    console.log('direction from home screen')
  
    await axios({
      method: 'post',
      url: endpoint,
      data: coords,
      headers: {'Content-Type': 'application/json' }
      })
      .then((response) => {
        this.setState({isLoading: false, locationData: response.data}, () => {
          console.log('after loading the data, line 56 isLoading is',this.state.isLoading)
        }) //once you get data, change isLoading
      })
      .catch((response) => {
        //handle error
        this.setState({ locationData: null}) // Clear the location data we don't have any to display
        console.log(response);
      });
  }

  // ------------------------grabs the locationData from state and displays choices---------------------------//
  renderLocation() {
    // This method returns undefined or a JSX component
    if (this.state.locationData === null) { //
      // If there is no data return undefined
      return undefined
    }

    //handle success
    let data = this.state.locationData
    // // loops through the response array and parses each into json data
    let parsed = data.map((json) => {
      return JSON.parse(json)
    })

    // get the place id, (unique id for each places)
    //to then use it to access the name of each place
    let places_id = parsed.map((place) => {
      return Object.keys(place.query.pages)
    })

    // loop over the parsed data and apply the keys to get
    //the title of th place
    let place_names = parsed.map((place, index) => {
      console.log(place)
      const title = place.query.pages[places_id[index]].title
      const description = place.query.pages[places_id[index]].extract
      return (
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

    return (
      <View>
        <Text style={styles.text}>Here are nearby tourists sites</Text>
        {/* //holds the name of the places as a separate button */}
        <ScrollView style={styles.scroll}>
          {place_names}
        </ScrollView>
      </View>
    ) 
  }


  //------------------------conditionally renders either loading page or places page-----------------------//
  checkRender() {
    if (this.state.isLoading === true) {
      //return loading page
      return <ActivityIndicator size="large" color="#0000ff" />
    }
    return this.renderLocation() //if data is recieved, display it
  }

  // -------------------------when the components mounts,--------------------------------------------// 
  componentDidMount() {
    this.setState({isLoading : true}, () => {
      console.log('line 113 isLoading is', this.state.isLoading)
    }) //while it's loading the location data
    this.loadLocationData() //when the component mounts, load the location data
  }


  render(){ 
    return (
      <SafeAreaView style={styles.safearea}>
          
          {this.checkRender()}
          {/* <ScrollView style={styles.scroll}> */}
            {/* {this.state.place_names} */}
          {/* </ScrollView> */}
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
    fontWeight: "300",
    paddingLeft: '15%',
  }
})
