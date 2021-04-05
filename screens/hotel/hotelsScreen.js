import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, Button } from 'react-native'

import CustomList from '../../components/customList'
import CustomHeader from '../../components/customHeader'
import PlayWithData from '../../components/playWithData'
import FilteredData from '../../components/filteredData'

import Colors from '../../constants/colors'
import { HOTELS_SORTING_PROPERTIES } from '../../constants/usefulLists'

import { filterDataByInput, sortHotelsData } from '../../functions/sortingAndFilteringData'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'

const KEYS_TO_FILTERS = ['name', 'address.locality']


const Hotels = ({ route }) => {

  const destination = route?.params?.destination

  const [searchTerm, setSearchTerm] = useState('')
  const [showFileteredHotels, setShowFileterdHotels] = useState(false)
  const [sortingProperty, setSortingProperty] = useState(HOTELS_SORTING_PROPERTIES[0])

  const hotels = useSelector(state => state.hotels.hotels)
  const loading = useSelector(state => state.hotels.loading)
  const sortedHotels = sortHotelsData(hotels, sortingProperty)
  const hotelsAccordingToDestination = destination ? filterDataByInput(hotels, destination, 'address.locality') : []
  const filteredHotels = filterDataByInput(hotels, searchTerm, KEYS_TO_FILTERS)

  const searchBarHandler = (term) => {
    setSearchTerm(term)
    setShowFileterdHotels(true)
  }

  const backFromFilterList = () => {
    setSearchTerm('')
    setShowFileterdHotels(false)
  }

  const getSortingProperty = (property) => {
    setSortingProperty(property)
  }

  // useEffect(() => {
  //   setHotels(sortHotelsData(hotels, sortingProperty))
  // },[hotels, sortingProperty])


  return (
    <View style={styles.ParentContainer} >
      <CustomHeader
        searchBarHandler={searchBarHandler}
        backFromFilterList={backFromFilterList}
        showFileteredHotels={showFileteredHotels}
        searchTerm={searchTerm}
      />
    
      <PlayWithData
        sortingList={HOTELS_SORTING_PROPERTIES}
        getSortingProperty={getSortingProperty}
      />

      {showFileteredHotels && filteredHotels.length !== 0 ? (
        <FilteredData data={filteredHotels} nextScreen='HotelDetails' />
      )
        : null
      }

      {loading ? <ActivityIndicator size="large" color='gold' /> : (
        <CustomList
          data={destination ? hotelsAccordingToDestination : sortedHotels}
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

})

export default Hotels