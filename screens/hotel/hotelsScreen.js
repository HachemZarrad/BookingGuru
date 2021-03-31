import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, ActivityIndicator,
  ScrollView
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import CustomList from '../../components/customList'
import InputBar from '../../components/inputBar'
import Icon from '../../components/icon'
import CustomHeader from '../../components/customHeader'
import Toolbar from '../../components/toolbar'

import IconLibrary from '../../constants/iconLibrary'
import Colors from '../../constants/colors'

import { Avatar, Accessory } from 'react-native-elements'


import { createFilter } from 'react-native-search-filter'
const KEYS_TO_FILTERS = ['name', 'locality']

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'


const Hotels = ({ route }) => {

  const navigation = useNavigation()
  const destination = route?.params?.destination

  const [searchTerm, setSearchTerm] = useState('')
  const [shown, showHotels] = useState(false)

  const hotels = useSelector(state => state.hotels.hotels)
  const hotelsAccordingToDestination = hotels.filter(hotel => hotel.address.locality === destination)
  const loading = useSelector(state => state.hotels.loading)
  const filteredHotels = hotels.filter(createFilter(searchTerm, KEYS_TO_FILTERS))


  const searchBarHandler = (term) => {
    setSearchTerm(term)
    showHotels(true)
  }

  const backFromFilterList = () => {
    showHotels(false)
    setSearchTerm('')
  }

  return (
    <View style={styles.ParentContainer}>
      <CustomHeader ComponentTitle='Hotels Overview' />
      <View style={styles.searchBar}>
        {shown ?
          <TouchableOpacity onPress={backFromFilterList} style={styles.backButton} >
            <Icon library={IconLibrary.FontAwesome5} name="arrow-left" />
          </TouchableOpacity>
          : null
        }
        {destination ? null :
          <InputBar
            onChangeText={searchBarHandler}
            placeholder="search down here"
            keyboardType='default'
            leftIconLibrary={IconLibrary.FontAwesome}
            leftIconName='search'
            leftIconColor={Colors.buttonContainer}
            leftIconSize={20}
            searchBar
            style={styles.input}
          />
        }
      </View>

      {loading || !shown ? null : (
        <ScrollView>
          {filteredHotels.map(hotel => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('HotelDetails', hotel)} key={hotel._id}>
                <View style={styles.filteredList}>
                  <Avatar
                    source={{
                      uri: hotel.thumbnailUrl,
                    }}
                  >
                    <Accessory />
                  </Avatar>
                  <View style={styles.hotelName}>
                    <Text>{hotel.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>


      )}
      {loading ? <View style={styles.spinner}><ActivityIndicator color={Colors.toolbarColor} /></View> : (
        <CustomList data={destination ? hotelsAccordingToDestination : hotels}
          pressedElement='HotelDetails'
          service={ActionTypes.GET_HOTELS} />
      )}
    </View>
  )
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
    // marginRight: 20,
    alignSelf: 'flex-start'
  },
  searchBar: {
    // flexDirection: 'row', 
    alignItems: 'center',
    paddingBottom: 7
  },
  input: {
    // width: 200
  },
  filteredList: {
    flexDirection: 'row',
    margin: 6,
  },
  hotelName: {
    marginLeft: 10,
  }





})

export default Hotels