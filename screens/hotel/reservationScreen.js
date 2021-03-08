import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import InputBar from '../../components/inputBar';
import CustomButton from '../../components/customButton';

const ReservationScreen = ({route}) => {
    const price = route.params;
    return (
        <View style={styles.screen}>
                <InputBar placeholder="     First Name"></InputBar>
                <InputBar placeholder="     Last Name"></InputBar>
                <InputBar placeholder="     Email Address"></InputBar>
                <InputBar placeholder="     Country/Region"></InputBar>
                <InputBar placeholder="     Phone Number"></InputBar>
                <CustomButton  price={price} nextStep={'PickUpRoomScreen'} title={'ADD INFO'} style={{marginTop: 10}}/>
        </View>         
    )
}

export default ReservationScreen

const styles = StyleSheet.create({
    screen: {
        marginTop: 40,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    }
})
