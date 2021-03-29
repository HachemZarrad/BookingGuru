import React, { useCallback, useEffect } from 'react'
import {
  StyleSheet, Text, View, Image, ActivityIndicator, 
} from 'react-native'


import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import Colors from '../constants/colors'

import * as hotelsActions from '../store/actions/hotels'
import * as destinationsActions from '../store/actions/popularDestinations'
import * as flightsActions from '../store/actions/flights'
import * as trainsActions from '../store/actions/trains'
import * as busesActions from '../store/actions/buses'
import * as taxisActions from '../store/actions/taxis'
// import * as FoodActions from '../store/actions/food'


const SplashScreen = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

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

  const dataLoading = hotelsLoading && destinationsLoading && flightsLoading && trainsLoading && busesLoading && taxisLoading
  const dataError = hotelsError || destinationsError || flightsError || trainsError || busesError || taxisError

  // const foodLoading = useSelector(state => state.food.loading);
  // const foodError = useSelector(state => state.food.error);


  const loadData = useCallback(() => {
    dispatch(hotelsActions.fetchHotels())
    dispatch(destinationsActions.fetchDestinations())
    dispatch(flightsActions.fetchFlights())
    dispatch(trainsActions.fetchTrains())
    dispatch(busesActions.fetchBuses())
    dispatch(taxisActions.fetchTaxis())
    // dispatch(foodActions.fetchRestaurants())
  }, [dispatch])

  useEffect(() => {
    loadData()
  }, [loadData])

  useEffect(() => {
    if (!dataLoading && !dataError) navigation.navigate('HomePage')
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
