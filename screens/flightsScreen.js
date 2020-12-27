import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    ActivityIndicator, Image} from 'react-native';
import Toolbar from '../components/toolbar';
import {baseUrl} from '../constants/networking';
import Colors from '../constants/colors';

const Flights = () => {

    const [flights, setFlights] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        fetch(`${baseUrl}flights`, {method: 'get', signal: signal})
          .then((response) => response.json())
          .then((json) => setFlights(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    
          return function cleanUp(){
            console.log('Now aborting');
            // Abort.
            controller.abort()
          }
    
      },[]);
    return(
        <View style={styles.ParentContainer}>
            <Toolbar/>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList 
              style={{marginBottom:80}}
              data={flights}
              keyExtractor={({ _id }) => _id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Image source={{uri: item.image}} style={styles.image}/> 
                        <View style={styles.textContainer}>
                          <Text style={styles.bold}>{item.destination}</Text>
                          <Text style={styles.bold}>Airport: {item.name}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
    );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 260
  },
  container: {
    flexDirection: 'row',
    height: 250, 
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 10,
    width: 340, 
    borderRadius: 10,
    overflow: 'hidden'
  },
  bold: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 180
  },
  text: {
    fontSize: 10
  },
  ParentContainer: {
    backgroundColor: Colors.background,
    justifyContent: 'center'
  },
  textContainer: {
    margin: 10,
    justifyContent: 'center'
  }
});

export default Flights; 