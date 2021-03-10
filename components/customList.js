import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import * as ActionTypes from '../store/actions/actionTypes';
import HotelStars from './hotelStars';


const DisplayAccordingToService = ({service,item}) => {
    switch(service){
        case(ActionTypes.GET_HOTELS):
           return (
             <View style={styles.container}>
                <Image source={{uri: item.thumbnailUrl}} style={styles.image}/> 
                <View style={styles.textContainer}>
                    <Text style={styles.hotelName}>{item.name}</Text>
                    <HotelStars rating={item.starRating}/>
                    <Text style={styles.text}>Price: ${item.price}</Text>
                </View>
             </View>
         );
         case(ActionTypes.GET_FOOD):
            return <View></View>
         case(ActionTypes.GET_FLIGHTS):
            return(
                <View style={styles.container}>
                    <Image source={{uri: item.image}} style={styles.image}/> 
                    <View style={styles.textContainer}>
                      <Text style={styles.bold}>{item.destination}</Text>
                      <Text style={styles.bold}>Airport: {item.name}</Text>
                    </View>
                </View>
            )
         case(ActionTypes.GET_TRAINS):
            return(
                <View style={styles.container}>
                    <Image source={{uri: item.image}} style={styles.image}/> 
                    <View style={styles.textContainer}>
                    <Text style={styles.stationName}>{item.name}</Text>
                    <Text style={styles.text}>Accuracy: {item.accuracy}</Text>
                    <Text style={styles.text}>Distance: {item.distance} miles</Text>
                    </View>
                </View>
            )
         case(ActionTypes.GET_TAXIS):
            return(
                <View style={styles.container}>
                    <Image source={require('../assets/taxiPic.jpg')} style={styles.image}/> 
                    <View style={styles.textContainer}>
                      <Text style={styles.bold}>Distance: {item.distance_desc}</Text>
                      <Text style={styles.bold}>Duration: {item.duration}</Text>
                      <Text style={styles.text}>{item.text}</Text>
                    </View>
                </View>
            )
         case(ActionTypes.GET_BUSES):
            return( 
                <View style={styles.container}>
                    <Image source={require('../assets/busPic.jpg')} style={styles.image}/> 
                    <View style={styles.textContainer}>
                        <Text style={styles.directionName}>{item.direction}</Text>
                        <Text style={styles.text}>Line: {item.line}</Text>
                        <Text style={styles.text}>Expected Departure Date: {item.expected_departure_date}</Text>
                        <Text style={styles.text}>Aimed Departure Time: {item.aimed_departure_time}</Text>
                        <Text style={styles.directionName}>Operator Name: {item.operator_name}</Text>
                    </View>
                </View>
        )
         default:
             return <View></View>
    }
}

const CustomList = props => {
    const navigation = useNavigation();
    return (
        <View>
            <FlatList
              {...props}
              style={{marginBottom:60}}
              keyExtractor={({ _id }) => _id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate(props.pressedElement,  item)}>
                    <DisplayAccordingToService item={item} service={props.service}/>                    
                </TouchableOpacity>
              )}
            />
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
        margin: 10,
        width: 340, 
        borderRadius: 10,
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
    ParentContainer: {
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      },
    textContainer: {
        margin: 10,
        justifyContent: 'center'
      },
})
