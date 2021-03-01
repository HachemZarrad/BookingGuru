import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    ActivityIndicator, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Toolbar from '../../components/toolbar';
import HotelStars from '../../components/hotelStars';
import InputBar from '../../components/inputBar';
import Colors from '../../constants/colors';

import { Avatar, Accessory } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import  { createFilter } from 'react-native-search-filter'
const KEYS_TO_FILTERS = ['name', 'locality'];

import * as hotelsActions from '../../store/actions/hotels';
import { useDispatch, useSelector } from 'react-redux';


const Hotels = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [shown, showHotels] = useState(false);
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.hotels.hotels);
  const loading = useSelector(state => state.hotels.loading);
  const error = useSelector(state => state.hotels.error); 
  const filteredHotels = hotels.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
  const navigation = useNavigation();

    
    const loadHotels = useCallback(() => {
        dispatch(hotelsActions.fetchHotels())
    },[dispatch]);
    
    useEffect(() => {
        loadHotels();
    },[loadHotels]);

    // const loadFavorites = useCallback(() => {
    //     dispatch(favoritesActions.getFavorites())
    // },[dispatch]);
  
    // useEffect(() => {
    //     loadFavorites();
    // },[loadFavorites]);
  

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
            <InputBar
              onChangeText={(term) => { setSearchTerm(term); showHotels(true) }} 
              placeholder = "     search down here" 
              value = {searchTerm}>
            </InputBar>
          </View>

          {loading || !shown ? <View style={styles.spinner}><ActivityIndicator color={Colors.toolbarColor}/></View> : (
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
            {loading || shown ? <View style={styles.spinner}><ActivityIndicator color={Colors.toolbarColor}/></View> : (
            <FlatList
              style={{marginBottom:60}}
              data={hotels}
              keyExtractor={({ _id }) => _id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('HotelDetails',  item)}>
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
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Hotels; 