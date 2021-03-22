import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


import CustomPicker from './customPicker'
import InputBar from './inputBar'

import IconLibrary from '../constants/iconLibrary'
import Colors from '../constants/colors'
import countriesAndCodes from '../constants/coutriesAndCallingCodes'

const PhoneNumber = props => {
    let callingCodes = [];
    countriesAndCodes.map(callingCode => {
        callingCodes.push(callingCode.dialling_code);
    })
    return (
        <View style={styles.container}>
            <Icon name="tunisia" />
            {/* <CustomPicker 
                {...props}
                list={callingCodes}
                style={{width: 20}}
            /> */}
            <InputBar
                {...props}
                placeholder="Phone Number"
                leftIconLibrary={IconLibrary.MaterialIcons}
                leftIconName='phone-android'
                leftIconColor={Colors.buttonContainer}
                style={{ width: '90%' }}
            />
        </View>
    )
}

export default PhoneNumber

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    flag: {

    },
})
