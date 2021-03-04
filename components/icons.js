import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Title from './title';


const Icons = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.frame}>
            <Title title={'Pick Up You Plan Here'}/>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=> navigation.navigate('Hotels')}>
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
        justifyContent: 'space-around',
        marginBottom: 6
    },
    icon: {
        flexDirection: 'column'
    },
    frame: {
        height: 200,
        width: 340,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 80
      
    }
});

export default Icons;