import React, { useReducer, useEffect, useCallback } from 'react'
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native';

import InputBar from '../../components/inputBar';
import CustomPicker from '../../components/customPicker';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';
import PhoneNumber from '../../components/phoneNumber';

import Colors from '../../constants/colors';
import IconLibrary from '../../constants/iconLibrary';
import countriesAndCodes from '../../constants/coutriesAndCallingCodes';
// const Actions = {

// }

// const reducer = (state, action) => {
// }

const SignUpScreen = () => {
    // const [state, dispatch] = useReducer(reducer, {})
 
    let callingCodes = [];
    // let ids = [];
    countriesAndCodes.map(country => {
        callingCodes.push(country.dialling_code)
        // ids.push(country._id)
    })
    // const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    // for(id of ids){
    //     if(countOccurrences(ids,id) >1) console.log('help', id)
    // }
   

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
                        default=''
                        error='Firstname must be at least three characters long'
                        minLength={3}

                    />
                    <InputBar
                        placeholder="Last Name"
                        leftIconLibrary={IconLibrary.Entypo}
                        leftIconName='user'
                        leftIconColor={Colors.buttonContainer}
                        keyboardType='default'
                        default=''
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
                        list={callingCodes}
                        iconLibrary={IconLibrary.MaterialIcons}
                        iconName='place'
                        iconColor={Colors.buttonContainer}

                    />
                    {/* <View> */}
                        {/* <CustomPicker
                            list={countries}
                        /> */}

                        <InputBar
                            placeholder="Phone Number"
                            leftIconLibrary={IconLibrary.MaterialIcons}
                            leftIconName='phone-android'
                            leftIconColor={Colors.buttonContainer}
                            style={{width: '80%'}}
                            default=''
                        />

                    {/* </View> */}
                </View>
            </ScrollView>
            <NormalButton title='Sign Up' style={styles.button} nextScreen='Password' />
            <NormalButton title='Experience' style={styles.button} payload={countriesAndCodes} nextScreen='callingCodes' />
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
