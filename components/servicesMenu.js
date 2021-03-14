import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ServicesMenu = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.frame}>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> navigation.navigate('Hotels',
                 {
                    screen: 'HotelsOverview',
                    params: {object : {destination: null, filter: false}},
                  })
                }>
                    <Image 
                        source={require('../assets/hotel.png')}
                        style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Food')}> 
                    <Image 
                        source={require('../assets/food.png')}
                        style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Flights')}>
                    <Image 
                        source={require('../assets/airplane.png')}
                        style={styles.image}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text>Hotel</Text>
                <Text>Food</Text>
                <Text>Flight</Text>
            </View>
            <View style={styles.container}>
              <TouchableOpacity onPress={()=> navigation.navigate('Trains')}>
                <Image 
                    source={require('../assets/train.png')}
                    style={styles.image}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Buses')}>
                <Image 
                    source={require('../assets/bus.png')}
                    style={styles.image}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Taxis')}>
                <Image 
                    source={require('../assets/taxi.png')}
                    style={styles.image}/>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text>Train</Text>
                <Text>Bus</Text>
                <Text>Taxi</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    image: {
        width: 65,
        height: 65,
    },
    container: {
        flexDirection: 'row',
        marginBottom: 6,
        // alignItems: 'center',
        justifyContent: 'space-around',
    },
    icon: {
        flexDirection: 'column'
    },
    frame: {
        height: 200,
        width: '90%',
        borderRadius: 10,
        
    }
});

export default ServicesMenu;