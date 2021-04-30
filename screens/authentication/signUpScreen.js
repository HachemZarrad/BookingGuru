import React, { useReducer } from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native'

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

    const navigation = useNavigation()

    const [state, dispatch] = useReducer(signUpReducer, {
        firstName: '',
        firstNameValidity: false,
        lastName: '',
        lastNameValidity: false,
        email: '',
        emailValidity: false,
        birthDate: '',
        country: '',
        phoneNumber: '',
        phoneNumberValidity: false
    })

    const selectedCode = route.params
    const countriesAndCodes = useSelector(state => state.countriesAndCodes.countriesAndCodes)
    countriesAndCodes.sort()
    const countries = []
    countriesAndCodes.map(country => {
        countries.push(country.country_name)
    })


    const getInput = (input, validity, type, validityType) => {
        dispatch({ type: type, payload: input })
        dispatch({ type: validityType, payload: validity })
    }

    const confirm = () => {
        navigation.navigate('Password')
    }

    const alert = () => {
        Alert.alert("Invalid Input!!", 'Some fields are missing or poorly filled in, are you sure you wanna proceed ?'
            , [
                {
                    text: "No",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => confirm() }
            ]);
    }

    const validInputs = () => {
        const nonRequiredInputsState = state.firstNameValidity || state.lastNameValidity || state.phoneNumber
        if (!nonRequiredInputsState) alert()
        else confirm()
    }


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
                        onInputChange={(text, validity) => getInput(text, validity, Actions.GET_FIRST_NAME, Actions.FIRST_NAME_VALIDITY)}
                        minLength={3}
                        error='FirstName must be at least three characters long'
                        returnKeyType="next"
                        keyboardType='default'
                        default=''
                        leftIconLibrary={IconLibrary.Entypo}
                        leftIconName='user'

                    />
                    <InputBar
                        placeholder="Last Name"
                        checkInput
                        onInputChange={(text, validity) => getInput(text, validity, Actions.GET_LAST_NAME, Actions.LAST_NAME_VALIDITY)}
                        default=''
                        minLength={3}
                        error='LastName must be at least three characters long'
                        keyboardType='default'
                        returnKeyType="next"
                        leftIconLibrary={IconLibrary.Entypo}
                        leftIconName='user'
                    />

                    <InputBar
                        placeholder="Email Address"
                        checkInput
                        email
                        required
                        onInputChange={(text, validity) => getInput(text, validity, Actions.GET_EMAIL, Actions.EMAIL_VALIDITY)}
                        validity={state.emailValidity}
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
                    <PhoneNumber
                        flag={selectedCode?.country_name.toLowerCase()}
                        callingCode={selectedCode?.dialling_code}
                        onInputChange={(text, validity) => getInput(text, validity, Actions.GET_PHONE_NUMBER, Actions.PHONE_NUMBER_VALIDITY)}
                    />

                </View>
            </ScrollView>
            <NormalButton
                title='Sign Up'
                style={styles.button}
                onPress={validInputs}
                disabled={!state.emailValidity}
            />
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
