import React from 'react'
import { StyleSheet, View} from 'react-native';

import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

const SignUpScreen = () => {
    return (
        <View style={styles.screen}>
            <Caution style={styles.caution} caution='Only your email is required for the moment but please consider
                filling other fields to get full advantage of our services. Once registred you can alter those details in settings section'/>
            <View style={styles.form}>
                <InputBar placeholder="     First Name"></InputBar>
                <InputBar placeholder="     Last Name"></InputBar>
                <InputBar placeholder="     Email Address"></InputBar>
                <InputBar placeholder="     Country/Region"></InputBar>
                <InputBar placeholder="     Phone Number"></InputBar>
                <NormalButton  title='Sign Up' style={styles.button} nextScreen='Password'/>
            </View>
        </View>         
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    screen: {
        flex:1,
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 30
    },
    caution: {
        marginBottom: 20,
    }
})
