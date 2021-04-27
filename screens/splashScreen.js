import React, { useCallback, useEffect, useReducer } from 'react'
import {
  StyleSheet, Text, View, Image, ActivityIndicator,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import Colors from '../constants/colors'

import { fetchHotels } from '../store/actions/hotels'
import { fetchDestinations } from '../store/actions/popularDestinations'
import { fetchFlights } from '../store/actions/flights'
import { fetchTrains } from '../store/actions/trains'
import { fetchBuses } from '../store/actions/buses'
import { fetchTaxis } from '../store/actions/taxis'
import { fetchCountriesAndCallingCodes } from '../store/actions/countriesAndCodes'
// import { fetchFood } from '../store/actions/food'

import reducer from '../constants/splashScreenReducer'
import Actions from '../constants/splashScreenActions'


/**
 * TODO: -Add internet connection checker from netlify community package.
 *  -Once ready load restaurants and food data here as well.
 * 
 * FIXME: Nothing to fix for the moment.
 * @returns Initial Data
 */

const SplashScreen = () => {

  const navigation = useNavigation()
  const reduxDispatch = useDispatch()

  const [dataState, dispatch] = useReducer(reducer, {
    hotelsLoading: false,
    hotelsError: null,
    destinationsLoading: false,
    destinationsError: null,
    flightsLoading: false,
    flightsError: null,
    trainsLoading: false,
    trainsError: null,
    busesLoading: false,
    busesError: null,
    taxisLoading: false,
    taxisError: null,
    countries_CodesLoading: false,
    countries_CodesError: null,
  })


  const dataLoading = dataState.hotelsLoading && dataState.destinationsLoading && dataState.flightsLoading && dataState.trainsLoading && dataState.busesLoading && dataState.taxisLoading && dataState.countries_CodesLoading
  const dataError = !!dataState.hotelsError || !!dataState.destinationsError || !!dataState.flightsError || !!dataState.trainsError || !!dataState.busesError || !!dataState.taxisError || !!dataState.countries_CodesError

  console.log({ dataLoading, dataError })

  const fetchData = async (action, loadingType, errorType) => {
    dispatch({ type: errorType, payload: null })
    dispatch({ type: loadingType, payload: true })
    try {
      await reduxDispatch(action())
    }
    catch (error) {
      dispatch({ type: errorType, payload: error.message })
      dispatch({ type: loadingType, payload: false })
    }
  }

  const loadData = useCallback(() => {
    fetchData(fetchHotels, Actions.HOTELS_LOADING, Actions.HOTELS_ERROR)
    fetchData(fetchDestinations, Actions.DESTINATIONS_LOADING, Actions.DESTINATIONS_ERROR)
    fetchData(fetchFlights, Actions.FLIGHTS_LOADING, Actions.FLIGHTS_ERROR)
    fetchData(fetchTrains, Actions.TRAINS_LOADING, Actions.TRAINS_ERROR)
    fetchData(fetchBuses, Actions.BUSES_LOADING, Actions.BUSES_ERROR)
    fetchData(fetchTaxis, Actions.TAXIS_LOADING, Actions.TAXIS_ERROR)
    fetchData(fetchCountriesAndCallingCodes, Actions.COUNTRIES_CODES_LOADING, Actions.COUNTRIES_CODES_ERROR)
  }, [reduxDispatch])

  useEffect(() => {
    loadData()
  }, [loadData])

  useEffect(() => {
    if (!dataLoading && !dataError) setTimeout(() => { navigation.navigate('HomePage') }, 0)
  }, [dataLoading, dataError])

  return (
    <View
      style={styles.imageContainer}>
      <Image
        source={require('../assets/introLogo.png')}
        style={styles.image} />
      {dataError ? <Text style={styles.text}>Please check your internet connection</Text> :
        <View>
          <ActivityIndicator style={styles.spinner} size="large" color='gold' />
          <Text style={styles.text}>Loading Our Services</Text>
        </View>
      }
    </View>
  )

}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.toolbarColor
  },
  spinner: {

  },
  text: {
    fontSize: 18
  },
  image: {
    // width: 345, no need for specific dimensions they ruin the image 
    // height: 235,
  }
})

export default SplashScreen
