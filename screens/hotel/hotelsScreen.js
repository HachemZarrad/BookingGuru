import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'

import CustomList from '../../components/customList'
import CustomHeader from '../../components/customHeader'
import PlayWithData from '../../components/playWithData'
import FilteredData from '../../components/filteredData'

import Colors from '../../constants/colors'
import { HOTELS_SORTING_PROPERTIES, HOTELS_FILTERS } from '../../constants/usefulLists'

import { filterDataByInput, sortHotelsData, filterHotelsData } from '../../functions/sortingAndFilteringData'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'

const KEYS_TO_FILTERS = ['name', 'address.locality']


const Hotels = ({ route }) => {

  const destination = route?.params?.destination
  const pickedFilters = route?.params?.pickedFilters

  const [searchTerm, setSearchTerm] = useState('')
  const [showFileteredHotels, setShowFileterdHotels] = useState(false)
  const [sortingProperty, setSortingProperty] = useState(HOTELS_SORTING_PROPERTIES[0])

  const hotels = useSelector(state => state.hotels.hotels)
  const loading = useSelector(state => state.hotels.loading)
  const customizedHotelsList = pickedFilters ? filterHotelsData(pickedFilters, hotels) : []

  const sortedHotels = customizedHotelsList.length === 0 ?
    sortHotelsData(hotels, sortingProperty) :
    sortHotelsData(customizedHotelsList, sortingProperty)

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
        filtersList={HOTELS_FILTERS}
      />

      {showFileteredHotels && filteredHotels.length !== 0 ? (
        <FilteredData data={filteredHotels} nextScreen='HotelDetails' />
      )
        : null
      }

      {loading || sortedHotels?.length < hotels.length ?
        <ActivityIndicator size="large" color='gold' /> : (
          <CustomList
            data={destination ? hotelsAccordingToDestination : sortedHotels}
            pressedElement='HotelDetails'
            service={ActionTypes.GET_HOTELS}
          />
        )}
        {
          <View style={{backgroundColor: 'red'}}><Text>Result: {customizedHotelsList.length} Hotels</Text></View>
        }
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