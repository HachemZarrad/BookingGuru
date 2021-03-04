import React from 'react'
import { StyleSheet, View } from 'react-native';
import InputBar from '../../components/inputBar';
import BookingButton from '../../components/bookingButton';

const ReservationScreen = ({route}) => {
    const price = route.params;
    return (
        <View style={styles.square}>
            <InputBar placeholder="     First Name"></InputBar>
            <InputBar placeholder="     Last Name"></InputBar>
            <InputBar placeholder="     Email Address"></InputBar>
            <InputBar placeholder="     Country/Region"></InputBar>
            <InputBar placeholder="     Phone Number"></InputBar>
            <View style={styles.book}>
                <BookingButton  price={price} nextStep={'PickUpRoomScreen'} title={'ADD INFO'}/>
            </View>
        </View>
    )
}

export default ReservationScreen

const styles = StyleSheet.create({
    square: {
        marginTop: 40
    },
    book: {
        alignItems: 'center',
        marginTop: 40
    }
})
