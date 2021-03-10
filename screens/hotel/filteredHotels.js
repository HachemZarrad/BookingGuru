import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import Toolbar from '../../components/toolbar';
import CustomList from '../../components/customList';

import {baseUrl} from '../../constants/networking';
import Colors from '../../constants/colors';

import * as ActionTypes from '../../store/actions/actionTypes';

const FiltredHotels = ({route}) => {

    const [hotels, setHotels] = useState([]);
    const destination = route.params; 
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        fetch(`${baseUrl}hotels/filter/${destination.name}`, {method: 'get', signal: signal})
          .then((response) => response.json())
          .then((json) => setHotels(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    
          return function cleanUp(){
            controller.abort();
          }
    
      },[]);
    return(
        <View style={styles.ParentContainer}>
            <Toolbar/>
            {isLoading ? <ActivityIndicator/> : (
            <CustomList data={hotels} pressedElement='HotelDetails' service={ActionTypes.GET_HOTELS}/>

          )}
        </View>
    );
}

const styles = StyleSheet.create({
    ParentContainer: {
      backgroundColor: Colors.backgroundColor,
      alignItems: 'center',
      flex: 1,
    },
  });

export default FiltredHotels; 