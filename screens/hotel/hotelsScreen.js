import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import CustomList from '../../components/customList'
import CustomHeader from '../../components/customHeader'
import PlayWithData from '../../components/playWithData'
import FilteredData from '../../components/filteredData'
import FilteredDataTrack from '../../components/filteredDataTrack'

import Colors from '../../constants/colors'
import { HOTELS_SORTING_PROPERTIES, HOTELS_FILTERS } from '../../constants/usefulLists'

import { filterDataByInput } from '../../functions/sortingAndFilteringData'
import { sortHotelsData, filterHotelsData } from '../../functions/hotelsFunctions'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'

const KEYS_TO_FILTERS = ['name', 'address.locality']


const Hotels = ({ route }) => {

  const destination = route?.params?.destination
  const pickedFilters = route?.params?.pickedFilters

  const [searchTerm, setSearchTerm] = useState('')
  const [showFilteredHotels, setShowFilteredHotels] = useState(false)
  const [sortingProperty, setSortingProperty] = useState(HOTELS_SORTING_PROPERTIES[0])

  const hotels = useSelector(state => state.hotels.hotels)
  const loading = useSelector(state => state.hotels.loading)
  const [customizedHotelsList, setCustomizedHotelsList] = useState(filterHotelsData(hotels, HOTELS_FILTERS))

  const sortedHotels = sortHotelsData(customizedHotelsList, sortingProperty)

  const hotelsAccordingToDestination = destination ? filterDataByInput(hotels, destination, 'address.locality') : []
  const filteredHotels = filterDataByInput(hotels, searchTerm, KEYS_TO_FILTERS)

  useEffect(() => {
    if (JSON.stringify(pickedFilters) !== JSON.stringify(HOTELS_FILTERS)) setCustomizedHotelsList(filterHotelsData(hotels, pickedFilters))
  }, [pickedFilters])


  const searchBarHandler = (term) => {
    setSearchTerm(term)
    setShowFilteredHotels(true)
  }


  const backFromFilterList = () => {
    setSearchTerm('')
    setShowFilteredHotels(false)
  }

  const getSortingProperty = (property) => {
    setSortingProperty(property)
  }


  const clearUserFilters = () => {
    setCustomizedHotelsList(filterHotelsData(hotels, HOTELS_FILTERS))
  }


  return (
    <View style={styles.ParentContainer} >
      <CustomHeader
        searchBarHandler={searchBarHandler}
        backFromFilterList={backFromFilterList}
        showFilteredData={showFilteredHotels}
      />

      <PlayWithData
        sortingList={HOTELS_SORTING_PROPERTIES}
        getSortingProperty={getSortingProperty}
        filtersList={HOTELS_FILTERS}
      />

      {showFilteredHotels && filteredHotels.length !== 0 ? (
        <FilteredData data={filteredHotels} nextScreen='HotelDetails' />
      )
        : null
      }

      {loading ?
        <ActivityIndicator size="large" color='gold' /> : (
          <CustomList
            data={destination ? hotelsAccordingToDestination : sortedHotels}
            pressedElement='HotelDetails'
            service={ActionTypes.GET_HOTELS}
          />
        )}
      {customizedHotelsList.length === hotels.length ? null :
        <FilteredDataTrack
          data={customizedHotelsList}
          dataType='Hotels'
          resetFunction={clearUserFilters}
        />
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