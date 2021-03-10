import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import * as ActionTypes from '../../store/actions/actionTypes';

import Toolbar from '../../components/toolbar';
import CustomList from '../../components/customList';

import { baseUrl } from '../../constants/networking';
import Colors from '../../constants/colors';


const Flights = () => {

  const [flights, setFlights] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${baseUrl}flights`, { method: 'get', signal: signal })
      .then((response) => response.json())
      .then((json) => setFlights(json))
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
        <CustomList data={flights} pressedElement='FlightDetails' service={ActionTypes.GET_FLIGHTS} />
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

export default Flights;