import React, { useReducer } from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'

import { useSelector } from 'react-redux'

import InputBar from '../../components/inputBar'
import CustomPicker from '../../components/customPicker'
import CustomDatePicker from '../../components/customDatePicker'
import NormalButton from '../../components/normalButton'
import Caution from '../../components/caution'
import PhoneNumber from '../../components/phoneNumber'

import Colors from '../../constants/colors'
import IconLibrary from '../../constants/iconLibrary'
import Actions from '../../constants/signUpActions'
import signUpReducer from '../../constants/signUpReducer'



const SignUpScreen = ({ route }) => {

    const [state, dispatch] = useReducer(signUpReducer, {
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        country: '',
        PhoneNumber: '',
    })


    const getInput = (input, validity, type) => {
        dispatch({type: type, payload: input})
        if(type === "GET_EMAIL") dispatch({type: Actions.GET_EMAIL_VALIDITY, payload: validity})
    }
    

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
                        returnKeyType="next"
                        default=''
                        error='FirstName must be at least three characters long'
                        maxLength={3}

                    />
                    <InputBar
                        placeholder="Last Name"
                        checkInput
                        leftIconLibrary={IconLibrary.Entypo}
                        leftIconName='user'
                        keyboardType='default'
                        returnKeyType="next"
                        default=''
                        error='LastName must be at least three characters long'
                        minLength={3}
                    />

                    <InputBar
                        placeholder="Email Address"
                        checkInput
                        email
                        required
                        // validity={}
                        returnKeyType="next"
                        error="Please enter a valid email address."
                        default=''
                        keyboardType='default'
                        leftIconLibrary={IconLibrary.MaterialIcons}
                        leftIconName='email'
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
