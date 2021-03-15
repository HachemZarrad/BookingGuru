import React, { useState, useReducer } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

import Title from '../../components/title';
import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

import Colors from '../../constants/colors';
import IconLibrary from '../../constants/iconLibrary';


const Actions = {
    SET_PASSWORD_INPUT_DIRTY: 'SET_PASSWORD_INPUT_DIRTY',
    SHOW_PASSWORD: 'SHOW_PASSWORD',
    VALIDATE_TEN_CHARACTERS: 'VALIDATE_TEN_CHARACTERS',
    VALIDATE_ONE_NUMBER: 'VALIDATE_ONE_NUMBER',
    VALIDATE_ONE_CAPITAL: 'VALIDATE_ONE_CAPITAL',
    ACCEPT_PASSWORD: 'ACCEPT_PASSWORD',
    SHOW_RETYPED_PASSWORD: 'SHOW_RETYPED_PASSWORD',
    CONFRIM_PASSWORD_MATCH: 'CONFRIM_PASSWORD_MATCH'
};

const reducer = (state, action) => {
    switch (action.type) {
        case (Actions.ACCEPT_PASSWORD):
            return { ...state, pristine: !pristine };
        case (Actions.SHOW_PASSWORD):
            return { ...state, passwordHidden: !state.passwordHidden };
        case (Actions.VALIDATE_TEN_CHARACTERS):
            return { ...state, tenCharacters: !state.tenCharacters };
        case (Actions.VALIDATE_ONE_NUMBER):
            return { ...state, oneNumber: !state.oneNumber };
        case (Actions.VALIDATE_ONE_CAPITAL):
            return { ...state, oneCapital: !state.oneCapital };
        case (Actions.SHOW_RETYPED_PASSWORD):
            return { ...state, retypedPasswordHiddden: !state.retypedPasswordHiddden };
        case (Actions.ACCEPT_PASSWORD):
            return { ...state, pristine: !pristine };
        // case(Actions.SET_PASSWORD_INPUT_DIRTY): 
        //     return  {...state, pristine: !pristine};
        default:
            return state;
    }
};

const PasswordScreen = () => {
    const [bingo, setBingo] = useState(true);
    const [pristine, setPristine] = useState(true);
    const PRIMARYCOLOR = 'black';
    const [state, dispatch] = useReducer(reducer, {
        password: '',
        passwordHidden: true,
        tenCharacters: false,
        tenCharactersColor: pristine ? PRIMARYCOLOR : 'red',
        oneNumber: false,
        oneNumberColor: pristine ? PRIMARYCOLOR : 'red',
        oneCapital: false,
        oneCapitalColor: pristine ? PRIMARYCOLOR : 'red',
        passwordAccepted: false,
        passwordLabelColor: pristine ? PRIMARYCOLOR : 'red',
        retypedPassword: '',
        retypedPasswordLabel: pristine ? PRIMARYCOLOR : 'red',
        retypedPasswordHiddden: true,
        passwordMatchConfirmed: false,

    });
    // const [trialColor, setTrialColor] = useState('black');

    const manageColors = (password) => {
        setPristine(false);
        // dispatch({ type: Actions.SET_PASSWORD_INPUT_DIRTY });
    }
    return (
        <View style={styles.screen} >
            <Title title='Create a password according to our security standars' />
            <View style={styles.labelAndInput}>
                <Text style={{ ...styles.label, color: state.passwordLabelColor }}>Password</Text>
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
            <Caution type='password' bingo={bingo} iconColor={state.tenCharactersColor} style={{ container: styles.container, caution: styles.caution }} caution='Your password must be at least 10 characters' />
            <Caution type='password' bingo={bingo} iconColor={state.oneNumberColor} style={{ container: styles.container, caution: styles.caution }} caution='Your password must include at least one number' />
            <Caution type='password' bingo={bingo} iconColor={state.oneCapitalColor} style={{ container: styles.container, caution: styles.caution }} caution='Your password must include at least one Capital letter' />
            <View style={styles.labelAndInput}>
                <Text style={{ ...styles.label, color: state.passwordLabelColor, marginTop: 10 }}>Confirm Password</Text>
                <InputBar
                    leftIconLibrary={IconLibrary.Entypo}
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.Ionicons}
                    rightIconName={state.retypedPasswordHiddden ? 'eye-off' : 'eye'}
                    rightIconColor={Colors.buttonContainer}
                    rightIconFeature={() => dispatch({ type: Actions.SHOW_RETYPED_PASSWORD })}
                    secureTextEntry={state.retypedPasswordHiddden}
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
    },
    container: {
        backgroundColor: Colors.background,
        height: 2,
        // margin: 15
        // marginLeft: 10,
    },
    caution: {
        // backgroundColor: Colors.background,
        // height: 20,
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
