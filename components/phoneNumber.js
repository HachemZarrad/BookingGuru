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
                <Icon library={IconLibrary.Flags} name={props.flag ?? 'tunisia'} />
                <Text style={styles.callingCode}>{props.callingCode ?? '(+216)'}</Text>
                <Icon library={IconLibrary.AntDesign} name='caretdown' size={8} />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                <InputBar
                    {...props}
                    placeholder="Phone Number"
                    leftIconLibrary={IconLibrary.MaterialIcons}
                    leftIconName='phone-android'
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
        margin: 5,
    },
    flagAndCode: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        width: '30%',
        backgroundColor: '#d3d3d3'
    },
    callingCode: {
        fontSize: 13,
    },
    inputContainer: {
        flex: 1,
        width: '70%',
        borderLeftColor: Colors.toolbarColor,
        borderLeftWidth: 3,
    },
    input: {
        width: '100%',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        margin: 0,
    }
})
