import React, { useCallback, useEffect, useReducer } from 'react'
import {
  StyleSheet, Text, View, Image, ActivityIndicator,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import Colors from '../constants/colors'

import { fetchHotels } from '../store/actions/hotels'
import { fetchDestinations } from '../store/actions/popularDestinations'
import { fetchFlights } from '../store/actions/flights'
import { fetchTrains } from '../store/actions/trains'
import { fetchBuses } from '../store/actions/buses'
import { fetchTaxis } from '../store/actions/taxis'
// import { fetchFood } from '../store/actions/food'
import { fetchCountriesAndCallingCodes } from '../store/actions/countriesAndCodes'

import dataFetchReducer from '../constants/splashScreenReducer'
import fetchingActions from '../constants/splashScreenActions'


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

  const [dataState, dispatch] = useReducer(dataFetchReducer, {
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
    countriesAndCodesLoading: false,
    countriesAndCodesError: null,
  })

  const hotelsLoading = useSelector(state => state.hotels.loading);
  const hotelsError = useSelector(state => state.hotels.error);

  const destinationsLoading = useSelector(state => state.popularDestinations.loading);
  const destinationsError = useSelector(state => state.popularDestinations.error);

  const flightsLoading = useSelector(state => state.flights.loading);
  const flightsError = useSelector(state => state.flights.error);

  const trainsLoading = useSelector(state => state.trains.loading);
  const trainsError = useSelector(state => state.trains.error);

  const busesLoading = useSelector(state => state.buses.loading);
  const busesError = useSelector(state => state.buses.error);

  const taxisLoading = useSelector(state => state.taxis.loading);
  const taxisError = useSelector(state => state.taxis.error);

  const countriesAndCodesLoading = useSelector(state => state.countriesAndCodes.loading);
  const countriesAndCodesError = useSelector(state => state.countriesAndCodes.error);

  const dataLoading = hotelsLoading && destinationsLoading && flightsLoading && trainsLoading && busesLoading && taxisLoading && countriesAndCodesLoading
  const dataError = hotelsError || destinationsError || flightsError || trainsError || busesError || taxisError || countriesAndCodesError

  // const foodLoading = useSelector(state => state.food.loading);
  // const foodError = useSelector(state => state.food.error);

  const fetchData = async(action, loading, error) => {
    dispatch({ type: error, payload: null })
    dispatch({ type: loading, payload: true })
    try {
      await reduxDispatch(action())
    }
    catch (error) {
      dispatch({ type: error, payload: error.message })
      dispatch({ type: loading, payload: false })
    }
  }

  const loadData = useCallback(() => {
    reduxDispatch(fetchHotels())
    reduxDispatch(fetchDestinations())
    reduxDispatch(fetchFlights())
    reduxDispatch(fetchTrains())
    reduxDispatch(fetchBuses())
    reduxDispatch(fetchTaxis())
    reduxDispatch(fetchCountriesAndCallingCodes())
    // reduxDispatch(fetchFood())
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
      {dataError ? <Text style={styles.text}>Please check your internet connection</Text>
        : <View>
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
