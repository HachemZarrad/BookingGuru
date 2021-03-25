import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import InputBar from './inputBar'
import Icon from './icon'

import IconLibrary from '../constants/iconLibrary'
import Colors from '../constants/colors'


const PhoneNumber = props => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.flagAndCode} onPress={() => navigation.navigate('callingCodes')}>
                <View style={styles.kkk}>
                    <Text style={styles.callingCode}>(+216)</Text>
                    <Icon library={IconLibrary.Flags} name='tunisia' />
                </View>
                <Icon library={IconLibrary.AntDesign} name='caretdown' size={12} />
            </TouchableOpacity>
            <View style={styles.input}>
                <InputBar
                    {...props}
                    placeholder="Phone Number"
                    leftIconLibrary={IconLibrary.MaterialIcons}
                    leftIconName='phone-android'
                    leftIconColor={Colors.buttonContainer}
                    style={{ width: '100%' }}
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
        alignItems: 'center',
        // justifyContent: 'space-around'
    },
    flagAndCode: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        // borderBottomWidth: 2,
        // borderBottomColor: Colors.toolbarColor,
        flex: 0.4
    },
    flag: {

    },
    callingCode: {
        fontSize: 15,
        margin: 5,
    },
    input: {
        flex: 0.8,
        // alignItems: 'flex-end',
        // backgroundColor: 'green',
        alignItems: 'center'
    }
})
