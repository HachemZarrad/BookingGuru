import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Title from '../../components/title';
import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const PasswordScreen = () => {
    return (
        <View>
            <Title title='Create a password according to our security standars'/>
            <Text>Password</Text>
            <InputBar/>
            <Caution type='password' bingo={true} style={styles.caution} caution='Only your email is required for the moment but please consider
                filling other fields to get full advantage of our services. Once registred you can alter those details in settings section'/>
            <View  style={{flexDirection: 'row'}}>
                <Feather name="x-circle" size={24} color="black" style={styles.icon} />
                <Text numberOfLines={1} style={styles.caution} >Your password must be at least 10 characters</Text>
            </View>
            <View  style={{flexDirection: 'row'}}>
                <Feather name="x-circle" size={24} color="black" style={styles.icon} />
                <Text numberOfLines={1} style={styles.caution} >Your password must be at least 10 characters</Text>
            </View>
            <View  style={{flexDirection: 'row'}}>
                <Feather name="x-circle" size={24} color="black" style={styles.icon} />
                <Text numberOfLines={1} style={styles.caution} >Your password must be at least 10 characters</Text>
            </View>
            <View  style={{flexDirection: 'row'}}>
                <Feather name="x-circle" size={24} color="black" style={styles.icon} />
                <Text numberOfLines={1} style={styles.caution} >Your password must be at least 10 characters</Text>
            </View>
            <Text>Confirm Password</Text>
            <InputBar/>
            <NormalButton title='Register'/>

        </View>
    )
}

export default PasswordScreen

const styles = StyleSheet.create({})
