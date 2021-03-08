import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomButton from '../../components/customButton';



const ValidateReservationScreen = ({route}) => {
    const price = route.params;
    return (
        <View>
            <Text>Here's the thing</Text>
            <CustomButton price={price} nextStep={'ValidateReservationScreen'} title={'Validate'}/>
        </View>
    )
}

export default ValidateReservationScreen

const styles = StyleSheet.create({})
