import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';

const SignUpScreen = ({route}) => {
    const price = route.params;
    return (
        <View style={styles.screen}>
            <InputBar placeholder="     First Name"></InputBar>
            <InputBar placeholder="     Last Name"></InputBar>
            <InputBar placeholder="     Email Address"></InputBar>
            <InputBar placeholder="     Country/Region"></InputBar>
            <InputBar placeholder="     Phone Number"></InputBar>
            <NormalButton  title='Sign Up' style={styles.button} nextScreen='Password'/>
        </View>         
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 30
    }
})
