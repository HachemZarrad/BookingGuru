import React, { useState, useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Title from '../../components/title';
import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

import Colors from '../../constants/colors';
import IconLibrary from '../../constants/iconLibrary';

const CAPITALlLETTERS = /[A-Z]/g;
const DIGITS = /\d/g;

const Actions = {
    SET_PASSWORD_INPUT_DIRTY: 'SET_PASSWORD_INPUT_DIRTY',
    SHOW_PASSWORD: 'SHOW_PASSWORD',
    VALIDATE_TEN_CHARACTERS: 'VALIDATE_TEN_CHARACTERS',
    VALIDATE_ONE_NUMBER: 'VALIDATE_ONE_NUMBER',
    VALIDATE_ONE_CAPITAL: 'VALIDATE_ONE_CAPITAL',
    ACCEPT_PASSWORD: 'ACCEPT_PASSWORD',
    CANCEL_PASSWORD :'CANCEL_PASSWORD',
    SHOW_RETYPED_PASSWORD: 'SHOW_RETYPED_PASSWORD',
    CONFRIM_PASSWORD_MATCH: 'CONFRIM_PASSWORD_MATCH'
};

const reducer = (state, action) => {
    switch (action.type) {
        case (Actions.SET_PASSWORD_INPUT_DIRTY):
            return {...state, pristine: false};
        case (Actions.SHOW_PASSWORD):
            return { ...state, passwordHidden: !state.passwordHidden };
        case (Actions.VALIDATE_TEN_CHARACTERS):
            let confirmTenCharacters = false;
            if(action.payload.length >= 10) confirmTenCharacters = true;   
            return { ...state, tenCharacters: confirmTenCharacters, tenCharactersColor: confirmTenCharacters ? 'green' : 'red'};
        case (Actions.VALIDATE_ONE_NUMBER):
            let confirmOneNumber = false;
            if(action.payload.match(DIGITS)) confirmOneNumber = true;
            return { ...state, oneNumber: confirmOneNumber, oneNumberColor: confirmOneNumber ? 'green' : 'red'};
        case (Actions.VALIDATE_ONE_CAPITAL):
            let confirmOneCapital = false;
            if(action.payload.match(CAPITALlLETTERS)) confirmOneCapital = true;
            return { ...state, oneCapital: confirmOneCapital, oneCapitalColor: confirmOneCapital ? 'green' : 'red'};
        case (Actions.SHOW_RETYPED_PASSWORD):
            return { ...state, retypedPasswordHiddden: !state.retypedPasswordHiddden };
        case (Actions.ACCEPT_PASSWORD):
            return { ...state, password: action.payload };
        case (Actions.CANCEL_PASSWORD):
            return { ...state, password: '', passwordAccepted: false };
        case(Actions.CONFRIM_PASSWORD_MATCH): 
            let confirmPasswordMatch = false;
            if (action.payload === state.password) confirmPasswordMatch = true;
            return  {...state, passwordMatchConfirmed: confirmPasswordMatch, retypedPassword: action.payload};
        default:
            return state;
    }
};

const PasswordScreen = () => {
    const [state, dispatch] = useReducer(reducer, {
        pristine: true,
        password: '',
        passwordHidden: true,
        tenCharacters: false,
        tenCharactersColor: 'red',
        oneNumber: false,
        oneNumberColor: 'red',
        oneCapital: false,
        oneCapitalColor: 'red',
        passwordAccepted: false,
        retypedPassword: '',
        retypedPasswordHiddden: true,
        passwordMatchConfirmed: false,
        
    });
    
    const manageColors = (password) => {
        dispatch({type: Actions.SET_PASSWORD_INPUT_DIRTY});
        dispatch({type: Actions.VALIDATE_TEN_CHARACTERS, payload: password});
        dispatch({type: Actions.VALIDATE_ONE_NUMBER, payload: password});
        dispatch({type: Actions.VALIDATE_ONE_CAPITAL, payload: password});
        if(state.tenCharacters && state.oneNumber && state.oneCapital) {
            dispatch({type: Actions.ACCEPT_PASSWORD, payload: password});
        }
        else dispatch({type: Actions.CANCEL_PASSWORD});
    }

    const manageConfirmPassword = (retypedPassword) => {
        dispatch({type: Actions.CONFRIM_PASSWORD_MATCH, payload: retypedPassword});
    }

    const manageSignUp = () => {
        
    }

    return (
        <View style={styles.screen} >
            <Title title='Create a password according to our security standars' />
            <View style={styles.labelAndInput}>
                <Text style={styles.label}>Password</Text>
                <InputBar
                    leftIconLibrary={IconLibrary.Entypo}
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.Ionicons}
                    rightIconName={state.passwordHidden ? 'eye-off' : 'eye'}
                    rightIconColor={Colors.buttonContainer}
                    rightIconFeature={() => dispatch({ type: Actions.SHOW_PASSWORD })}
                    secureTextEntry={state.passwordHidden}
                    onChangeText={(password) => manageColors(password)}
                    style={styles.input}
                />
            </View>
            <Caution type='password' bingo={state.tenCharacters} iconColor={state.pristine ? 'black' : state.tenCharactersColor} style={{ container: styles.container, caution: styles.caution }} caution='Your password must be at least 10 characters' />
            <Caution type='password' bingo={state.oneNumber} iconColor={state.pristine ? 'black' : state.oneNumberColor} style={{ container: styles.container, caution: styles.caution }} caution='Your password must include at least one number' />
            <Caution type='password' bingo={state.oneCapital} iconColor={state.pristine ? 'black' : state.oneCapitalColor} style={{ container: styles.container, caution: styles.caution }} caution='Your password must include at least one Capital letter' />
            <View style={styles.labelAndInput}>
                <Text style={{ ...styles.label, marginTop: 10 }}>Confirm Password</Text>
                <InputBar
                    leftIconLibrary={IconLibrary.Entypo}
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.Ionicons}
                    rightIconName={state.retypedPasswordHiddden ? 'eye-off' : 'eye'}
                    rightIconColor={Colors.buttonContainer}
                    rightIconFeature={() => dispatch({ type: Actions.SHOW_RETYPED_PASSWORD })}
                    secureTextEntry={state.retypedPasswordHiddden}
                    onChangeText={(retypedPassword) => manageConfirmPassword(retypedPassword)}
                    style={styles.input}
                />
            </View>
            <NormalButton title='Register' style={styles.button} />
        </View>
    )
}

export default PasswordScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: Colors.background,
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        color: 'black'
    },
    container: {
        backgroundColor: Colors.background,
        height: 2,
    },
    caution: {
        marginLeft: 10,
    },
    labelAndInput: {
        alignItems: 'center',
    },
    button: {
        alignSelf: 'center',
        width: '90%'
    },
    input: {
        width: '90%'
    }
})
