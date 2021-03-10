import React, { useState, useEffect } from 'react';
import {StyleSheet, View,ActivityIndicator} from 'react-native';

import * as ActionTypes from '../../store/actions/actionTypes';
import Toolbar from '../../components/toolbar';
import CustomList from '../../components/customList';

import { baseUrl } from '../../constants/networking';
import Colors from '../../constants/colors';

const Trains = () => {

  const [trains, setTrains] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${baseUrl}trains`, { method: 'get', signal: signal })
      .then((response) => response.json())
      .then((json) => setTrains(json))
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
      <CustomList data={trains} pressedElement='TrainDetails' service={ActionTypes.GET_TRAINS} />

      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ParentContainer: {
    backgroundColor: Colors.background,
    justifyContent: 'center'
  },
});


export default Trains;