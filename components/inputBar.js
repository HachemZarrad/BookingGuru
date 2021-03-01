import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Colors from '../constants/colors';

const inputBar = props => {
    return (
        <View>
            <TextInput {...props}  placeholderTextColor="black" style={{...styles.inputBar, ...props.style}}></TextInput>
        </View>
    )
}

export default inputBar

const styles = StyleSheet.create({
    inputBar: {
        width: 300,
        height: 50,
        backgroundColor: 'white', 
        borderRadius: 20, 
        borderWidth: 4,
        borderColor: Colors.toolbarColor, 
        marginLeft: 30, 
        marginTop: 10
    }
})
