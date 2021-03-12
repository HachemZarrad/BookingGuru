import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Title from '../../components/title';
import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';

const PasswordScreen = () => {
    return (
        <View>
            <Title title='Create a password according to our security standars'/>
            <Text>Password</Text>
            <InputBar/>
            <Text>Confirm Password</Text>
            <InputBar/>
            <NormalButton title='Register'/>

        </View>
    )
}

export default PasswordScreen

const styles = StyleSheet.create({})
