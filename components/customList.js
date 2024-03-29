import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import * as ActionTypes from '../store/actions/actionTypes';

import HotelStars from './hotelStars';
import Icon from './icon';

import IconLibrary from '../constants/iconLibrary';
import Colors from '../constants/colors';


const DisplayAccordingToService = ({ service, item }) => {
  switch (service) {
    case (ActionTypes.GET_HOTELS):
      return (
        <View style={styles.container}>
          <Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.hotelName}>{item.name}</Text>
            <HotelStars rating={item.starRating} />
            <Text style={styles.text}>Price: ${item.price}</Text>
          </View>
        </View>
      );
    case (ActionTypes.GET_FOOD):
      return <View></View>
    case (ActionTypes.GET_FLIGHTS):
      return (
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.bold}>{item.destination}</Text>
            <Text style={styles.bold}>Airport: {item.name}</Text>
          </View>
        </View>
      )
    case (ActionTypes.GET_TRAINS):
      return (
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.stationName}>{item.name}</Text>
            <Text style={styles.text}>Accuracy: {item.accuracy}</Text>
            <Text style={styles.text}>Distance: {item.distance} miles</Text>
          </View>
        </View>
      )
    case (ActionTypes.GET_TAXIS):
      return (
        <View style={styles.container}>
          <Image source={require('../assets/taxiPic.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.bold}>Distance: {item.distance_desc}</Text>
            <Text style={styles.bold}>Duration: {item.duration}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      )
    case (ActionTypes.GET_BUSES):
      return (
        <View style={styles.container}>
          <Image source={require('../assets/busPic.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.directionName}>{item.direction}</Text>
            <Text style={styles.text}>Line: {item.line}</Text>
            <Text style={styles.text}>Expected Departure Date: {item.expected_departure_date}</Text>
            <Text style={styles.text}>Aimed Departure Time: {item.aimed_departure_time}</Text>
            <Text style={styles.directionName}>Operator Name: {item.operator_name}</Text>
          </View>
        </View>
      )
    case (ActionTypes.GET_COUNTRIES):
      return (
        <View style={styles.country}>
          <View style={styles.flag}>
            <Icon library={IconLibrary.Flags} name={item.country_name.toLowerCase()} />
            <Text style={styles.countryName}>{item.country_name.replace(/-/g, ' ')}</Text>
          </View>
          <Text style={styles.calllingCode}>{item.dialling_code}</Text>
        </View>
      )
    default:
      return <View></View>
  }
}

const CustomList = props => {

  const navigation = useNavigation();
  const { pressedElement, service } = props

  const handleItemClick = (pressedElement, item) => {
    navigation.navigate(pressedElement, item)
  }

  return (
    <View style={{ flex: 1 }}>
      {props.data.length === 0 ? <View><Text>No Data Matches Your Filters</Text></View> : 
      <FlatList
        {...props}
        keyExtractor={({ _id }) => _id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemClick(pressedElement, item)}>
            <DisplayAccordingToService item={item} service={service} />
          </TouchableOpacity>
        )}
      />
      }
    </View>
  )
}

export default CustomList

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 260
  },
  container: {
    flexDirection: 'row',
    height: 250,
    backgroundColor: 'white',
    margin: 5,
    width: 340,
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 180
  },
  text: {
    fontSize: 17
  },
  directionName: { //for buses
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 180
  },
  bold: { //for flights
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 180
  },
  stationName: { //for trains
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 180
  },
  textContainer: {
    margin: 10,
    justifyContent: 'center'
  },
  country: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 0.4
  },
  flag: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
  countryName: {
    marginLeft: 10,
  }
})
