import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    ActivityIndicator, Image} from 'react-native';
import Toolbar from '../../components/toolbar';
import { baseUrl } from '../../constants/networking';
import Colors from '../../constants/colors';

const Buses = () => {

    const [buses, setBuses] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        fetch(`${baseUrl}buses`, {method: 'get', signal: signal})
          .then((response) => response.json())
          .then((json) => setBuses(json))
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
              data={buses}
              keyExtractor={({ _id }) => _id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Image source={require('../../assets/busPic.jpg')} style={styles.image}/> 
                        <View style={styles.textContainer}>
                        <Text style={styles.directionName}>{item.direction}</Text>
                        <Text style={styles.text}>Line: {item.line}</Text>
                        <Text style={styles.text}>Expected Departure Date: {item.expected_departure_date}</Text>
                        <Text style={styles.text}>Aimed Departure Time: {item.aimed_departure_time}</Text>
                        <Text style={styles.directionName}>Operator Name: {item.operator_name}</Text>
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
  directionName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 180
  },
  text: {
    fontSize: 15
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

export default Buses; 