import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import InputBar from '../../components/inputBar';
import CustomButton from '../../components/customButton';

const LoginScreen = () => {
    return (
        <View style={styles.screen}>
            <InputBar/>
            <InputBar/>
            <CustomButton/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
    },
    inputBar: {
        backgroundColor: 'white', 
        width: '75%', 
        height: 50,
        margin: 10,
        borderRadius: 20, 
        borderWidth: 4,
        borderColor: 'black', 
    }   
})
