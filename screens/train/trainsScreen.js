import React, { useState, useEffect } from 'react'
import {StyleSheet, View,ActivityIndicator} from 'react-native'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'

import CustomHeader from '../../components/customHeader'
import CustomList from '../../components/customList'

import Colors from '../../constants/colors'

const Trains = () => {

  const trains = useSelector(state => state.trains.trains)
  const isLoading = useSelector(state => state.trains.loading)

  return (
    <View style={styles.ParentContainer}>
      <CustomHeader ComponentTitle='Available Trains List'/>
      {isLoading ? <ActivityIndicator /> : (
      <CustomList data={trains} pressedElement='TrainDetails' service={ActionTypes.GET_TRAINS} />

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


export default Trains