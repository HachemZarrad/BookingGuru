import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Colors from '../constants/colors';
import Toolbar from '../components/toolbar';
import BookingButton from '../components/bookingButton';
import RatingCard from '../components/ratingCard';
import CustomImage from '../components/customImage';


const Booking = () => {
    return(
        <ScrollView>
            <View style={styles.container}>
                <Toolbar/>
                <Image 
                    source={require('../assets/expHotel.jpg')}
                    style={styles.image}/>
                <View style={styles.card}>
                    <RatingCard />
                </View>
                <View style={styles.book}>
                    <BookingButton/>
                </View>
            </View>
        </ScrollView>
    );
  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background
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
        marginTop: -30
    }
});

export default Booking;