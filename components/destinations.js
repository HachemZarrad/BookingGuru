import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator,
   ScrollView, TouchableOpacity} from 'react-native';
import {baseUrl} from '../constants/networking';

const Destinations = () => {

    const [destinations, setDestinations] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(`${baseUrl}destinations`, {method: 'get', signal: signal})
          .then((response) => response.json())
          .then((json) => setDestinations(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));

          return function cleanUp(){
            console.log('Now aborting');
            // Abort.
            controller.abort()
          }
    
      },[]);

      return(
        <View>
             <Text style={styles.title}>Popular Destinations</Text>
             {isLoading ? <ActivityIndicator/> : (
              <ScrollView horizontal={true} >
              {destinations.map(destination => {
                return (
                  <TouchableOpacity key={destination._id} style={styles.container}>
                    <View>
                      <Image
                          source={{
                            uri: `${destination.image}`,
                          }}
                          style={styles.image}
                  
                      />
                      <View>
                        <Text style={styles.placeName}>{destination.name}</Text>
                      </View>
                      <View>
                        <Text style={styles.country}>{destination.country}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )
              })}
              </ScrollView>
              
              )}
        </View>
      );

}

const styles = StyleSheet.create({
    image: {
      width: 120,
      height: 80,
      borderRadius: 10
    },
    title: {
      fontWeight:'bold',
      fontStyle:'italic',
      fontSize: 20,
      marginLeft: 15
    },
    placeName: {
      fontWeight:'bold',
    },
    country: {
      fontWeight: '100'
    },
    container: {
      margin: 10
    }
});

export default Destinations;