import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import CustomPicker from './customPicker'
import InputBar from './inputBar'

const PhoneNumber = props => {
    return (
        <View style={styles.container}>
            <Image
                {...props}
                source={{uri: props.countryFlag}}
                style={styles.flag} />
            <CustomPicker 
                {...props}
                list={props.codesList}
            />
            <InputBar
                {...props}
                placeholder="Phone Number"
                leftIconLibrary={IconLibrary.MaterialIcons}
                leftIconName='phone-android'
                leftIconColor={Colors.buttonContainer}
                style={{ width: '80%' }}
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
