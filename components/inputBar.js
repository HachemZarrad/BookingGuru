import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Colors from '../constants/colors';

const inputBar = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <TextInput {...props}  placeholderTextColor="black" style={{...styles.inputBar, ...props.style}}></TextInput>
        </View>
    )
}

export default inputBar

const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 50,
        backgroundColor: 'white', 
        borderRadius: 20, 
        borderWidth: 4,
        margin: 5,
        borderColor: Colors.toolbarColor, 
    }
})
