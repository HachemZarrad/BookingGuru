import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import * as ActionTypes from '../../store/actions/actionTypes';

import Toolbar from '../../components/toolbar';
import CustomList from '../../components/customList';

import { baseUrl } from '../../constants/networking';
import Colors from '../../constants/colors';


const Food = () => {

  const [food, setFood] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${baseUrl}hotels`, { method: 'get', signal: signal })
      .then((response) => response.json())
      .then((json) => setFood(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

    return function cleanUp() {
      console.log('Now aborting');
      // Abort.
      controller.abort()
    }

  }, []);
  return (
    <View style={styles.ParentContainer}>
      <Toolbar />
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