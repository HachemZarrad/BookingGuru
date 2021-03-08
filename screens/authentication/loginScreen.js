import React from 'react'
import { StyleSheet, View } from 'react-native'
import InputBar from '../../components/inputBar';
import CustomButton from '../../components/customButton';
import Title from '../../components/title';

const LoginScreen = () => {
    return (
        <View style={styles.screen}>
            <Title title='Login'/>
            <InputBar placeholder='    Email'/>
            <InputBar placeholder='    Password'/>
            <CustomButton style={styles.button}/>
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
    button:{

    }   
})
