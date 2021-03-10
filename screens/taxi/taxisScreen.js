import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as ActionTypes from '../../store/actions/actionTypes';


import CustomList from '../../components/customList';
import Toolbar from '../../components/toolbar';

import { baseUrl } from '../../constants/networking';
import Colors from '../../constants/colors';


const Taxis = () => {

  const [taxis, setTaxis] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${baseUrl}taxis`, { method: 'get', signal: signal })
      .then((response) => response.json())
      .then((json) => setTaxis(json))
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
      <CustomList data={taxis} pressedElement='TaxiDetails' service={ActionTypes.GET_TAXIS} />
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

export default Taxis;