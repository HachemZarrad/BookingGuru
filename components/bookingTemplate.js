import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Colors from '../constants/colors';
import Toolbar from './toolbar';
import BookingButton from './bookingButton';
import RatingCard from './ratingCard';
import { Ionicons } from '@expo/vector-icons';


const BookingTemplate = props => {
    return(
        <View style={{flex:1}}>
            <Toolbar/>
            <ScrollView>
                <View style={styles.container}>
                    <Image 
                        source={{uri: props.hotel.thumbnailUrl}}
                        style={styles.image}/>
                    <View style={styles.card}>
                        <RatingCard hotel={props.hotel}/>
                    </View>
                    <View style={styles.location}>
                        <Ionicons name="location" size={80} color="orange" />
                        <View >
                            <Text style={styles.text}>Locality: {props.hotel.address.locality}</Text>
                            <Text style={styles.text}>Postal Code: {props.hotel.address.postalCode}</Text>
                            <Text style={styles.text}>Street Address: {props.hotel.address.streetAddress}</Text>
                        </View>
                    </View>
               
                    <View style={styles.book}>
                        <BookingButton price={props.hotel.price}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
    },
    text: {
        fontWeight: 'bold'
    },
    location: {
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: -60,
        marginBottom: 20
    },
    book: {
        alignItems: 'center',
        marginBottom: 10
    },
    card: {
        marginLeft:40,
        marginTop: -70
    },
    image: {
        width: '100%',
        height: 300,
        
    }
});

export default BookingTemplate;