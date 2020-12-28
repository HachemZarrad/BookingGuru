import React from 'react';
import { View, Button, StyleSheet} from 'react-native';
import BookingTemplate from '../../components/bookingTemplate';
import BookingButton from '../../components/bookingButton';

const HotelDetails = ({route}) => {
    const hotel = route.params;
    return(
            <BookingTemplate hotel={hotel} /> 
    );
}

const styles = StyleSheet.create({
    book: {
        alignItems: 'center',
        marginBottom: 10
    }
});

export default HotelDetails;