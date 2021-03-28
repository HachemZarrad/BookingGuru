import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator,
   ScrollView, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';

const Destinations = () => {
    const destinations = useSelector(state => state.popularDestinations.destinations) 
    const loading = useSelector(state => state.popularDestinations.loading) 
    
    // const [destinations, setDestinations] = useState(useSelector(state => state.popularDestinations.destinations));
    // const [isLoading, setLoading] = useState(false);
    const navigation = useNavigation();
    // const filter = true;

      return(
        <View>
             {loading ? <ActivityIndicator/> : (
              <ScrollView horizontal={true} >
              {destinations.map(destination => {
                return (
                  <TouchableOpacity key={destination._id} 
                    style={styles.container}
                    onPress={()=> navigation.navigate('Hotels',
                    {
                      screen: 'HotelsOverview',
                      params: {destination: destination.name},
                    })
                      }>
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