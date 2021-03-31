import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector } from 'react-redux'

import CustomList from '../../components/customList'
import CustomHeader from '../../components/customHeader'

import Colors from '../../constants/colors'


const Taxis = () => {

  const taxis = useSelector(state => state.taxis.taxis)
  const isLoading = useSelector(state => state.taxis.loading)


  return (
    <View style={styles.ParentContainer}>
      <CustomHeader ComponentTitle='Available Taxi List'/>
      {isLoading ? <ActivityIndicator /> : (
      <CustomList data={taxis} pressedElement='TaxiDetails' service={ActionTypes.GET_TAXIS} />
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

export default Taxis