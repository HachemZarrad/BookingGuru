import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import InputBar from '../../components/inputBar';
import BookingButton from '../../components/bookingButton';

const ReservationScreen = ({route}) => {
    const price = route.params;
    return (
        <View style={styles.boarders}>
            <ScrollView>
                <InputBar placeholder="     First Name"></InputBar>
                <InputBar placeholder="     Last Name"></InputBar>
                <InputBar placeholder="     Email Address"></InputBar>
                <InputBar placeholder="     Country/Region"></InputBar>
                <InputBar placeholder="     Phone Number"></InputBar>
            </ScrollView>
            <BookingButton  price={price} nextStep={'PickUpRoomScreen'} title={'ADD INFO'}/>
        </View>
    )
}

export default ReservationScreen

const styles = StyleSheet.create({
    boarders: {
        marginTop: 40,
        flex: 1,
    }
})
