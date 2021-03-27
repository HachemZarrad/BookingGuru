import React, {useCallback, useEffect} from 'react'
import {
  StyleSheet, Text, View, Image, ActivityIndicator,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import * as hotelsActions from '../store/actions/hotels'
import * as ActionTypes from '../store/actions/actionTypes'

import Colors from '../constants/colors'


const SplashScreen = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const hotels = useSelector(state => state.hotels.hotels);
  const loading = useSelector(state => state.hotels.loading);
  const error = useSelector(state => state.hotels.error);

  const loadHotels = useCallback(() => {
      dispatch(hotelsActions.fetchHotels())
  }, [dispatch])

  useEffect(() => {
    loadHotels()
  }, [loadHotels])

  useEffect(() => {
    if(!error && !loading && hotels) navigation.navigate('HomePage')
  })

  const temp = () => {
    navigation.navigate('HomePage')
  }

  return (
    <View 
      style={styles.imageContainer}>
      <Image
        source={require('../assets/introLogo.png')}
        style={styles.image} />
      <ActivityIndicator size="large" color="#00ff00" />
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
  image: {
    // width: 345, no need for specific dimensions they ruin the image 
    // height: 235,
  }
})

export default SplashScreen
