import React, { useReducer, useEffect, useCallback } from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'

import InputBar from '../../components/inputBar'
import CustomPicker from '../../components/customPicker'
import CustomDatePicker from '../../components/customDatePicker'
import NormalButton from '../../components/normalButton'
import Caution from '../../components/caution'
import PhoneNumber from '../../components/phoneNumber'

import Colors from '../../constants/colors'
import IconLibrary from '../../constants/iconLibrary'
import { GENDER } from '../../constants/usefulLists'
import { useSelector } from 'react-redux'


// const Actions = {

// }

// const reducer = (state, action) => {
// }

const SignUpScreen = ({ route }) => {

    // const [state, dispatch] = useReducer(reducer, {})
    const selectedCode = route.params
    const countriesAndCodes = useSelector(state => state.countriesAndCodes.countriesAndCodes)
    countriesAndCodes.sort()
    const countries = []
    countriesAndCodes.map(country => {
        countries.push(country.country_name)
    })

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            keyboardVerticalOffset={10}
        >
            <Caution type='standard' style={{ container: styles.caution }} caution='Only your email is required for the moment but please consider
                filling other fields to get full advantage of our services. Once registered you can alter those details in settings section.'/>
            <ScrollView >
                <View style={styles.form}>
                    <InputBar
                        placeholder="First Name"
                        checkInput
                        leftIconLibrary={IconLibrary.Entypo}
                        leftIconName='user'
                        keyboardType='default'
                        default=''
                        error='Firstname must be at least three characters long'
                        minLength={3}

                    />
                    <InputBar
                        placeholder="Last Name"
                        checkInput
                        leftIconLibrary={IconLibrary.Entypo}
                        leftIconName='user'
                        keyboardType='default'
                        default=''
                        error='Lastname must be at least three characters long'
                        minLength={3}
                    />

                    <InputBar
                        placeholder="Email Address"
                        checkInput
                        leftIconLibrary={IconLibrary.MaterialIcons}
                        leftIconName='email'
                        required
                        email
                        error="Please enter a valid email address."
                        rightIconLibrary={IconLibrary.Foundation}
                        rightIconSize={15}
                        rightIconName='asterisk'
                        rightIconColor='red'
                    />

                    <CustomDatePicker mode='date' title='Date Of Birth' />

                    <CustomPicker
                        list={countries}
                        prompt='Country'
                        iconLibrary={IconLibrary.MaterialIcons}
                        iconName='place'
                        iconColor={Colors.buttonContainer}
                    />
                    <PhoneNumber flag={selectedCode?.country_name.toLowerCase()} callingCode={selectedCode?.dialling_code} />
                    <CustomPicker
                        list={GENDER}
                        prompt='Gender'
                        iconLibrary={IconLibrary.FontAwesome}
                        iconName='intersex'
                        iconColor={Colors.buttonContainer}
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
        marginTop: 10,
    },
    button: {
        alignSelf: 'center',
        marginVertical: 10,
    },
})
