import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BookingButton from '../../components/bookingButton';



const ValidateReservationScreen = ({route}) => {
    const price = route.params;
    return (
        <View>
            <Text>Here's the thing</Text>
            <BookingButton price={price} nextStep={'ValidateReservationScreen'} title={'Validate'}/>
        </View>
    )
}

export default ValidateReservationScreen

const styles = StyleSheet.create({})
