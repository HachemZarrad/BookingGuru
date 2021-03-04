import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import Colors from '../../constants/colors';
import InputBar from '../../components/inputBar';
import BookingButton from '../../components/bookingButton';
import CustomPicker from '../../components/customPicker';
import Title from '../../components/title';

const PickUpRoomScreen = ({route}) => {

    const price = route.params;
    return (
        <View style={styles.container}>
            <ScrollView>
                <Title title={'Single Or Twin Room ?'}/>
                <CustomPicker firstValue={'java'} secondValue={'javascript'}/>
                <Title title={'All Inclusive Or Half Board ?'}/>
                <CustomPicker firstValue={'java'} secondValue={'javascript'}/>
                <Title title={'Any Comments ?'}/>
                <InputBar numberOfLines={4} style={{height:90 }}/>
                <BookingButton price={price} nextStep={'ValidateReservationScreen'} title={'Pick Up Plan'}/>
            </ScrollView>
        </View>
    )
}

export default PickUpRoomScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1
     },
})
