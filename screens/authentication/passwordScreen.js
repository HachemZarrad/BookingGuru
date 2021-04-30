import React, { useReducer } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'

import Title from '../../components/title';
import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

import Colors from '../../constants/colors';
import IconLibrary from '../../constants/iconLibrary';
import passwordCreationReducer from '../../constants/passwordCreationReducer';
import passwordCreationActions from '../../constants/passwordCreationActions'



const PasswordScreen = () => {
    const [state, dispatch] = useReducer(passwordCreationReducer, {
        "pristine": true,
        "password": '',
        "passwordHidden": true,
        "tenCharacters": false,
        "tenCharactersColor": 'red',
        "oneNumber": false,
        "oneNumberColor": 'red',
        "oneCapital": false,
        "oneCapitalColor": 'red',
        "passwordAccepted": false,
        "retypedPassword": '',
        "retypedPasswordHidden": true,
        "passwordMatchConfirmed": false,

    });

    const showHidePassword = () => {
        dispatch({ type: passwordCreationActions.SHOW_PASSWORD })
    }

    const showHideRetypedPassword = () => {
        dispatch({ type: passwordCreationActions.SHOW_RETYPED_PASSWORD })
    }

    const manageColors = (password) => {
        dispatch({ type: passwordCreationActions.SET_PASSWORD_INPUT_DIRTY });
        dispatch({ type: passwordCreationActions.VALIDATE_TEN_CHARACTERS, payload: password });
        dispatch({ type: passwordCreationActions.VALIDATE_ONE_NUMBER, payload: password });
        dispatch({ type: passwordCreationActions.VALIDATE_ONE_CAPITAL, payload: password });
        if (state.tenCharacters && state.oneNumber && state.oneCapital) {
            return dispatch({ type: passwordCreationActions.ACCEPT_PASSWORD, payload: password });
        }
        return dispatch({ type: passwordCreationActions.CANCEL_PASSWORD });
    }

    const manageConfirmPassword = (retypedPassword) => {
        dispatch({ type: passwordCreationActions.CONFIRM_PASSWORD_MATCH, payload: retypedPassword });
    }

    const manageSignUp = () => {

    }

    return (
        <View style={styles.screen} >
            <Title title='Create a password according to our security standards' />
            <View style={styles.labelAndInput}>
                <Text style={styles.label}>Password</Text>
                <InputBar
                    leftIconLibrary={IconLibrary.Entypo}
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.Ionicons}
                    rightIconName={state.passwordHidden ? 'eye-off' : 'eye'}
                    rightIconColor={Colors.buttonContainer}
                    rightIconFeature={showHidePassword}
                    secureTextEntry={state.passwordHidden}
                    passwordCreation
                    onInputChange={manageColors}
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
                    rightIconName={state.retypedPasswordHidden ? 'eye-off' : 'eye'}
                    rightIconColor={Colors.buttonContainer}
                    rightIconFeature={showHideRetypedPassword}
                    secureTextEntry={state.retypedPasswordHidden}
                    passwordCreation
                    onInputChange={manageConfirmPassword}
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
