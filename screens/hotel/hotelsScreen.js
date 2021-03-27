import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, ActivityIndicator,
  ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Toolbar from '../../components/toolbar';
import CustomList from '../../components/customList';
import InputBar from '../../components/inputBar';
import Icon from '../../components/icon';

import IconLibrary from '../../constants/iconLibrary';
import Colors from '../../constants/colors';

import { Avatar, Accessory } from 'react-native-elements';


import { createFilter } from 'react-native-search-filter'
const KEYS_TO_FILTERS = ['name', 'locality'];

import * as hotelsActions from '../../store/actions/hotels';
import * as ActionTypes from '../../store/actions/actionTypes';
import { useDispatch, useSelector } from 'react-redux';


const Hotels = ({ route }) => {

  const { destination, filter } = route.params;
  const [searchTerm, setSearchTerm] = useState('');
  const [shown, showHotels] = useState(false);
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.hotels.hotels);
  const loading = useSelector(state => state.hotels.loading);
  const error = useSelector(state => state.hotels.error);
  const filteredHotels = hotels.filter(createFilter(searchTerm, KEYS_TO_FILTERS));
  const navigation = useNavigation();


  const loadHotels = useCallback(() => {
    if (filter) dispatch(hotelsActions.fetchHotelsAccordingToDestination(destination));
    dispatch(hotelsActions.fetchHotels());
  }, [dispatch, filter, destination]);

  useEffect(() => {
    loadHotels();
  }, [loadHotels]);

  const searchBarHandler = (term) => {
     setSearchTerm(term)
     showHotels(true)
  }

  return (
    <View style={styles.ParentContainer}>
      <Toolbar />
      <View style={styles.searchBar}>
        {shown ?
          <TouchableOpacity onPress={() => { showHotels(false); setSearchTerm('') }} style={styles.backButton} >
            <Icon library={IconLibrary.FontAwesome5} name="arrow-left" />
          </TouchableOpacity>
          : null
        }
        {filter ? null :
          <InputBar
            onChangeText={searchBarHandler}
            placeholder="search down here"
            keyboardType='default'
            leftIconLibrary={IconLibrary.FontAwesome}
            leftIconName='search'
            leftIconColor={Colors.buttonContainer}
            leftIconSize={20}
            value={searchTerm}
            searchBar
            style={styles.input}
          />
        }
      </View>

      {loading || !shown ? <View style={styles.spinner}>{/* <ActivityIndicator color={Colors.toolbarColor}/> */}</View> : (
        <ScrollView>
          {filteredHotels.map(hotel => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('HotelDetails', hotel)} key={hotel._id}>
                <View style={{ flexDirection: 'row', backgroundColor: '', margin: 6 }}>
                  <Avatar
                    source={{
                      uri: hotel.thumbnailUrl,
                    }}
                  >
                    <Accessory />
                  </Avatar>
                  <View style={{ marginLeft: 10 }}>
                    <Text>{hotel.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>


      )}
      {loading ? <View style={styles.spinner}><ActivityIndicator color={Colors.toolbarColor} /></View> : (
        <CustomList data={hotels} pressedElement='HotelDetails' service={ActionTypes.GET_HOTELS} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ParentContainer: {
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
    flex: 1,
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButton: {
    marginRight: 20,
  },
  searchBar: {
    // flexDirection: 'row', 
    alignItems: 'center',
    paddingBottom: 7
  },
  input: {
    // width: 200
  }
});

export default Hotels;