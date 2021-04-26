import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'
import CustomHeader from '../../components/customHeader'
import CustomList from '../../components/customList'
import PlayWithData from '../../components/playWithData'

import Colors from '../../constants/colors'


const Flights = () => {

  const flights = useSelector(state => state.flights.flights)
  const isLoading = useSelector(state => state.flights.loading)

  return (
    <View style={styles.ParentContainer}>
      <CustomHeader ComponentTitle='Flights List' />
      <PlayWithData />
      {isLoading ? <ActivityIndicator /> : (
        <CustomList data={flights} pressedElement='FlightDetails' service={ActionTypes.GET_FLIGHTS} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  ParentContainer: {
    backgroundColor: Colors.background,
    alignItems: 'center',
    flex: 1,
  },
})

export default Flights