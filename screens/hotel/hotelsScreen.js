import React, { useState } from 'react'
import {
  StyleSheet, View, Text, TouchableOpacity, ActivityIndicator,
  ScrollView
} from 'react-native'

import CustomList from '../../components/customList'
import InputBar from '../../components/inputBar'
import Icon from '../../components/icon'
import CustomHeader from '../../components/customHeader'
import PlayWithData from '../../components/playWithData'
import FilteredData from '../../components/filteredData'

import IconLibrary from '../../constants/iconLibrary'
import Colors from '../../constants/colors'
import { HOTELS_SORTING_PROPERTIES } from '../../constants/usefulLists'

import { filterData } from '../../functions/sortingAndFilteringData'

const KEYS_TO_FILTERS = ['name', 'locality']

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'


const Hotels = ({ route }) => {

  const destination = route?.params?.destination

  const [searchTerm, setSearchTerm] = useState('')
  const [showFileteredHotels, setShowFileterdHotels] = useState(false)

  const hotels = useSelector(state => state.hotels.hotels)
  const hotelsAccordingToDestination = hotels.filter(hotel => hotel.address.locality === destination)
  const loading = useSelector(state => state.hotels.loading)
  const filteredHotels = filterData(hotels, searchTerm, KEYS_TO_FILTERS)

  const searchBarHandler = (term) => {
    setSearchTerm(term)
    setShowFileterdHotels(true)
  }

  const backFromFilterList = () => {
    setShowFileterdHotels(false)
    setSearchTerm('')
  }

  return (
    <View style={styles.ParentContainer}>
      <CustomHeader ComponentTitle='Hotels Overview' />
      <PlayWithData sortingList={HOTELS_SORTING_PROPERTIES} />
      <View style={styles.searchBar}>
        {showFileteredHotels && filteredHotels.length !== 0 ?
          <TouchableOpacity onPress={backFromFilterList} style={styles.backButton} >
            <Icon library={IconLibrary.FontAwesome5} name="arrow-left" size={20} />
          </TouchableOpacity>
          : null
        }
        {destination ? null :
          <View style={styles.input}>
            <InputBar
              onChangeText={searchBarHandler}
              placeholder="   Search down here"
              keyboardType='default'
              rightIconLibrary={IconLibrary.FontAwesome5}
              rightIconName='search'
              rightIconSize={20}
              searchBar
            />
          </View>
        }
      </View>

      {showFileteredHotels && filteredHotels.length !== 0 ? (
        <FilteredData data={filteredHotels} nextScreen='HotelDetails' />
      )
        : null
      }

      {loading ? <View style={styles.spinner}><ActivityIndicator color={Colors.toolbarColor} /></View> : (
        <CustomList
          data={destination ? hotelsAccordingToDestination : hotels}
          pressedElement='HotelDetails'
          service={ActionTypes.GET_HOTELS}
        />
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
    padding: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: 60,
    paddingTop: 5,
  },
  input: {
    width: '98%',
    alignItems: 'center'
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