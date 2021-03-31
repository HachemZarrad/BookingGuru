import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import * as ActionTypes from '../../store/actions/actionTypes';

import CustomHeader from '../../components/customHeader';
import CustomList from '../../components/customList';
import PlayWithData from '../../components/playWithData'

import Colors from '../../constants/colors';


const Food = () => {

  const [food, setFood] = useState([]);
  const [isLoading, setLoading] = useState(true);


  return (
    <View style={styles.ParentContainer}>
      <CustomHeader ComponentTitle='Restaurants Overview'/>
      <PlayWithData/>
      {isLoading ? <ActivityIndicator /> : (
        <CustomList data={food} pressedElement='DishDetails' service={ActionTypes.GET_FOOD} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ParentContainer: {
    backgroundColor: Colors.background,
    alignItems: 'center',
    flex: 1,
  },
});

export default Food;