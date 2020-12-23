import React from 'react';
import {StyleSheet, View, Image, Text } from 'react-native';

const Icons = () => {
    return(
        <View style={styles.frame}>
            <View style={styles.container}>
                <Image 
                    source={require('../assets/hotel.png')}
                    style={styles.image}/>
                <Image 
                    source={require('../assets/airplane.png')}
                    style={styles.image}/>
                <Image 
                    source={require('../assets/loc1.png')}
                    style={styles.image}/>
                <Image 
                    source={require('../assets/train.png')}
                    style={styles.image}/>
            </View>
            <View style={styles.container}>
                <Text>Hotel</Text>
                <Text>Flight</Text>
                <Text>City</Text>
                <Text>Train</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    icon: {
        flexDirection: 'column'
    },
    frame: {
        width: 300,
        marginLeft: 44
    }
});

export default Icons;