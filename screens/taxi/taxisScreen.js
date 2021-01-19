import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity,
    ActivityIndicator, Image} from 'react-native';
import Toolbar from '../../components/toolbar';
import { baseUrl } from '../../constants/networking';
import Colors from '../../constants/colors';

const Taxis = () => {

    const [taxis, setTaxis] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        fetch(`${baseUrl}taxis`, {method: 'get', signal: signal})
          .then((response) => response.json())
          .then((json) => setTaxis(json))
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
              data={taxis}
              keyExtractor={({ _id }) => _id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Image source={require('../../assets/taxiPic.jpg')} style={styles.image}/> 
                        <View style={styles.textContainer}>
                          <Text style={styles.bold}>Distance: {item.distance_desc}</Text>
                          <Text style={styles.bold}>Duration: {item.duration}</Text>
                          <Text style={styles.text}>{item.text}</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 100,
    marginBottom: 10
  },
  text: {
    fontSize: 17,
    marginRight: 160
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

export default Taxis; 