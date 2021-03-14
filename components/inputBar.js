import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

import Icon from './icon'

import Colors from '../constants/colors'

const InputBar = props => {
    return (
        <View style={{ ...styles.container, ...props.style }}>
            <Icon
                library={props.leftIconLibrary} 
                name={props.leftIconName}
                color={props.leftIconColor} 
                size={props.leftIconSize} 
                style={styles.leftIcon} 
            />
            <TextInput {...props} placeholderTextColor="black" style={{ ...styles.inputBar, ...props.style }}></TextInput>
            <Icon 
                library={props.rightIconLibrary} 
                name={props.rightIconName}
                color={props.rightIconColor} 
                size={props.rightIconSize} 
                style={styles.rightIcon} 
            />
        </View>
    )
}

export default InputBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 4,
        margin: 5,
        borderColor: Colors.toolbarColor,
    },
    inputBar: {
        flex: 1
    },
    leftIcon: {
        margin: 5
    },
    rightIcon: {
         marginRight: 5
    }
})
