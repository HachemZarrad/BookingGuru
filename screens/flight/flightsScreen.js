import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'
import Toolbar from '../../components/toolbar'
import CustomList from '../../components/customList'

import Colors from '../../constants/colors'


const Flights = () => {

  const flights = useSelector(state => state.flights.flights)
  const isLoading = useSelector(state => state.flights.loading)

  return (
    <View style={styles.ParentContainer}>
      <Toolbar />
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