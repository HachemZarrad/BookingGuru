import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import InputBar from './inputBar'
import Icon from './icon'

import IconLibrary from '../constants/iconLibrary'
import Colors from '../constants/colors'


const PhoneNumber = props => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.flagAndCode} onPress={() => navigation.navigate('callingCodes')}>
                <Icon library={IconLibrary.Flags} name='tunisia' />
                <Text style={styles.callingCode}>(+216)</Text>
                <Icon library={IconLibrary.AntDesign} name='caretdown' size={12} />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <InputBar
                    {...props}
                    placeholder="Phone Number"
                    leftIconLibrary={IconLibrary.MaterialIcons}
                    leftIconName='phone-android'
                    leftIconColor={Colors.buttonContainer}
                    style={styles.input}
                />
            </View>
        </View>
    )
}

export default PhoneNumber

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: Colors.toolbarColor,
    },
    flagAndCode: {
        alignItems: 'center',
        // flex: 1,
        height: '100%',
        borderRadius: 15,
        width: '30%',
        backgroundColor: 'grey'
    },
    flag: {

    },
    callingCode: {
        fontSize: 15,
        // margin: 5,
    },
    input15: {
        flex: 5,
        alignItems: 'flex-end',
        // backgroundColor: 'green',
    },
    inputContainer: {
        width: '70%',
    },
    input: {
        backgroundColor: 'green',
        width: 220,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        margin: 0,
    }
})
