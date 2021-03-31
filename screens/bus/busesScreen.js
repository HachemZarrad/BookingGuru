import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'
import CustomList from '../../components/customList'
import CustomHeader from '../../components/customHeader'

import Colors from '../../constants/colors'



const Buses = () => {

  const buses = useSelector(state => state.buses.buses)
  const isLoading = useSelector(state => state.buses.loading)

  
  return (
    <View style={styles.ParentContainer}>
      <CustomHeader ComponentTitle='Buses List'/>
      {isLoading ? <ActivityIndicator /> : (
        <CustomList data={buses} pressedElement='BusDetails' service={ActionTypes.GET_BUSES} />

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


export default Buses