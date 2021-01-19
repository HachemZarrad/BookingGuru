import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    ActivityIndicator, Image, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Toolbar from '../../components/toolbar';
import { baseUrl } from '../../constants/networking';
import HotelStars from '../../components/hotelStars';
import Colors from '../../constants/colors';

import { Avatar, Accessory } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import  { createFilter } from 'react-native-search-filter'
const KEYS_TO_FILTERS = ['name', 'locality'];


const Hotels = () => {

    const [hotels, setHotels] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [shown, showHotels] = useState(false);
    const filteredHotels = hotels.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
    const navigation = useNavigation();
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        fetch(`${baseUrl}hotels`, {method: 'get', signal: signal})
          .then((response) => response.json())
          .then((json) => setHotels(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    
          return function cleanUp(){
            console.log('Now aborting');
            // Abort.
            controller.abort()
          }
    
      },[]);
    return(
        <View style={styles.ParentContainer}>
            <Toolbar/>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 7}}>
            {shown ?
              <TouchableOpacity onPress={() => {showHotels(false); setSearchTerm('')}} >
                <Icon name="arrow-left" size={22} color="#000000"/>
              </TouchableOpacity>
              : null
            }
            <TextInput
              onChangeText={(term) => { setSearchTerm(term); showHotels(true) }} 
              placeholder = "search down here" style = {{width: 300, height:50,
               borderRadius: 20, backgroundColor: 'white', marginLeft: 30, marginTop: 10,
              backgroundColor: 'white', borderColor: Colors.toolbarColor, borderWidth: 4}}
              value = {searchTerm}>
            </TextInput>
          </View>

          {isLoading || !shown ? <ActivityIndicator/> : (
          <ScrollView>
          {filteredHotels.map(hotel => {
            return (
              <TouchableOpacity onPress={()=> navigation.navigate('HotelDetails', hotel)} key={hotel._id}>
                <View style={{flexDirection: 'row',  backgroundColor: '', margin: 6}}>
                  <Avatar
                      source={{
                        uri: hotel.thumbnailUrl,
                      }}
                      >
                    <Accessory />
                  </Avatar>
                  <View style={{marginLeft: 10}}>
                    <Text>{hotel.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

            
          )}
            {isLoading || shown ? <ActivityIndicator style={{borderColor: Colors.Toolbar}}/> : (
            <FlatList
              style={{marginBottom:60}}
              data={hotels}
              keyExtractor={({ _id }) => _id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('HotelDetails', item)}>
                    <View style={styles.container}>
                        <Image source={{uri: item.thumbnailUrl}} style={styles.image}/> 
                        <View style={styles.textContainer}>
                        <Text style={styles.hotelName}>{item.name}</Text>
                        <HotelStars rating={item.starRating}/>
                        <Text style={styles.text}>Price: ${item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
    );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 260
  },
  stars:{
    
  },
  container: {
    flexDirection: 'row',
    height: 250, 
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 10,
    width: 340, 
    borderRadius: 10,
    overflow: 'hidden'
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
  ParentContainer: {
    backgroundColor: '#e6e6e6',
    justifyContent: 'center'
  },
  textContainer: {
    margin: 10,
    justifyContent: 'center'
  }
});

export default Hotels; 