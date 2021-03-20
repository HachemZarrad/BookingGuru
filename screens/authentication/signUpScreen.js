import React, { useReducer, useEffect, useCallback } from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native';

import InputBar from '../../components/inputBar';
import CustomPicker from '../../components/customPicker';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

import Colors from '../../constants/colors';
import IconLibrary from '../../constants/iconLibrary';

import * as ActionTypes from '../../store/actions/actionTypes';
import  fetchCountriesAndCallingCodes from '../../store/actions/countriesAndCode';
import { useDispatch, useSelector } from 'react-redux';

// const Actions = {

// }

// const reducer = (state, action) => {
// }

const SignUpScreen = () => {
    // const [state, dispatch] = useReducer(reducer, {})
    const dispatch = useDispatch();
    const countriesAndCodes = useSelector(state => state.countriesAndCodes.countries);
    let countries = [];
    countriesAndCodes.map(country => {
        countries.push(country.name);
    })

    const loadCountriesAndCodes = useCallback(() => {
        dispatch(fetchCountriesAndCallingCodes());        
    },[dispatch]);

    useEffect(() => {
        loadCountriesAndCodes();
    },[loadCountriesAndCodes])

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            keyboardVerticalOffset={10}
        >
            <Caution type='standar' style={{ container: styles.caution }} caution='Only your email is required for the moment but please consider
                filling other fields to get full advantage of our services. Once registred you can alter those details in settings section.'/>
            <ScrollView >
                <View style={styles.form}>
                    <InputBar
                        placeholder="First Name"
                        leftIconLibrary={IconLibrary.Entypo}
                        leftIconName='user'
                        leftIconColor={Colors.buttonContainer}
                        keyboardType='default'
                        error='Firstname must be at least three characters long'
                        minLength={3}

                    />
                    <InputBar
                        placeholder="Last Name"
                        leftIconLibrary={IconLibrary.Entypo}
                        leftIconName='user'
                        leftIconColor={Colors.buttonContainer}
                        keyboardType='default'
                        error='Lastname must be at least three characters long'
                        minLength={3}
                    />

                    <InputBar
                        placeholder="Email Address"
                        leftIconLibrary={IconLibrary.MaterialIcons}
                        leftIconName='email'
                        required
                        email
                        error="Please enter a valid email address."
                        leftIconColor={Colors.buttonContainer}
                        rightIconLibrary={IconLibrary.Foundation}
                        rightIconSize={15}
                        rightIconName='asterisk'
                        rightIconColor='red'

                    />
                    
                    <CustomPicker
                        list={countries}
                        iconLibrary={IconLibrary.MaterialIcons}
                        iconName='place'
                        iconColor={Colors.buttonContainer}
                        
                    />
                    <InputBar
                        placeholder="Phone Number"
                        leftIconLibrary={IconLibrary.MaterialIcons}
                        leftIconName='phone-android'
                        leftIconColor={Colors.buttonContainer}
                    />
                </View>
            </ScrollView>
            <NormalButton title='Sign Up' style={styles.button} nextScreen='Password' />
        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignSelf: 'center',
        marginVertical: 10,
    },
    caution: {
        marginBottom: 20,
    }
})
