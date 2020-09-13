import { StyleSheet, Text, SafeAreaView, TouchableHighlight, ScrollView, ActivityIndicator, View  } from 'react-native';
import React from 'react';
import LocationBtn from './LocationBtn'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

/*
  Sites Screen: Displays all the nearby sites (locations). 
*/
export default class SitesScreen extends React.Component  {
  constructor(props){
    super(props)
    // get the direction (latitude and longitude from the Home Screen)
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
  } 
  
  // -------------------------when the components mounts--------------------------------------------// 
  componentDidMount() {
    this.setState({isLoading : true}, () => {
      console.log('line 30 isLoading is', this.state.isLoading)
    }) //while it's loading the location data
    this.loadLocationData() //when the component mounts, load the location data
  }

  //-------------------- get the place data and save it in a state-----------------------------//
  async loadLocationData() {
    this.setState({isLoading : true}) //while it's loading the location data
    const endpoint = "https://67f0df5dc1e6.ngrok.io";

    // change the coords to a JSON object
    let coords = JSON.stringify({
      latit: this.state.latitude,
      longi: this.state.longitude
    })
    
    await axios({
      method: 'post',
      url: endpoint,
      data: coords,
      headers: {'Content-Type': 'application/json' }
      })
      .then((response) => {
        // get the data for the locations
        //once you get data, change isLoading to false
        this.setState({isLoading: false, locationData: response.data}, () => {
          console.log('after loading the data, line 56 isLoading is',this.state.isLoading)
        }) 
      })
      .catch((response) => {
        //handle error
        this.setState({ locationData: null}) // Clear the location data we don't have any to display
        console.log(response);
      });
  }

  // ------------------------grabs the locationData from state and return location choices---------------------------//
  renderLocation() {
    // This method returns undefined or a JSX component
    if (this.state.locationData === null) { //
      // If there is no data return undefined
      return undefined
    }

    //handle success
    let data = this.state.locationData
    // loops through the response array and parses each into json data
    let parsed = data.map((json) => {
      return JSON.parse(json)
    })

    // get the place id, (unique id for each places)
    //to then use it to access the name of each place
    let places_id = parsed.map((place) => {
      return Object.keys(place.query.pages)
    })

    // loop over the parsed data and apply the keys to get
    //the title of the place
    let place_names = parsed.map((place, index) => {
      console.log(place)
      const title = place.query.pages[places_id[index]].title
      const description = place.query.pages[places_id[index]].extract
      return (
        <TouchableHighlight
          key={index}
          style={styles.location}
          // pass the data we get for each individual item to the questions screen
          onPress={() => this.props.navigation.navigate('Question', {title, description, parsed, places_id})}
        >
          <Icon.Button
            name="location-arrow"
            backgroundColor="#B90551"
            onPress={() => this.props.navigation.navigate('Question', {title, description, parsed, places_id})}
          >
            {title}
          </Icon.Button>
        {/* <LocationBtn key={item['id']} title={item.title} />   */}
        </TouchableHighlight>
      )
    })

    return (
      <View>
        <Text 
          style={styles.text}>Here are nearby tourists sites
        </Text>
        {/* holds the name of the places as a separate button */}
        <ScrollView style={styles.scroll}>
          {place_names}
        </ScrollView>
      </View>
    ) 
  }

  //------------------------conditionally renders either loading page or list of places page-----------------------//
  checkRender() {
    if (this.state.isLoading === true) {
      //return loading page
      return <ActivityIndicator size="large" color="#B90551" />
    }
    return this.renderLocation() //if data is recieved, display it
  }

  render() { 
    return (
      <SafeAreaView style={styles.safearea}>         
          {this.checkRender()}
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
