import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import Colors from '../constants/colors';

const BookingButton = props => {
    return(
        <View style={styles.container} >
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} >
                 <Text style={styles.textButton}>Booking</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 60,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: Colors.buttonContainer
    },
   
    buttonContainer: {
       width: '40%',
       height: '90%',
       margin: 3,
       borderRadius: 10,
       backgroundColor: Colors.button,
       justifyContent: 'center',
       alignItems: 'center'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    priceContainer: {
      marginRight: 100,
      justifyContent: 'center'
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
});

export default BookingButton;