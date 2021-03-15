import React, {useState, useReducer} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Title from '../../components/title';
import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

import Colors from '../../constants/colors';
import IconLibrary from '../../constants/iconLibrary';

const PRIMARYCOLOR = 'black';

const Actions = {
    SET_PASSWORD_INPUT_DIRTY: 'SET_PASSWORD_INPUT_DIRTY',
    SHOW_PASSWORD: 'SHOW_PASSWORD',
    VALIDATE_TEN_CHARACTERS: 'VALIDATE_TEN_CHARACTERS',
    VALIDATE_ONE_NUMBER: 'VALIDATE_ONE_NUMBER',
    VALIDATE_ONE_CAPITAL: 'VALIDATE_ONE_CAPITAL',
    ACCEPT_PASSWORD: 'ACCEPT_PASSWORD',
    CONFRIM_PASSWORD_MATCH: 'CONFRIM_PASSWORD_MATCH'
};

const reducer = (state,action) => {
    switch(action.type) {
        case(Actions.SET_PASSWORD_INPUT_DIRTY): 
            return  {...state, pristine: false};
        case(Actions.ACCEPT_PASSWORD): 
            return  {...state, pristine: !pristine};
        case(Actions.SHOW_PASSWORD): 
            return  {...state, passwordHidden: !passwordHidden};
        case(Actions.VALIDATE_TEN_CHARACTERS): 
            return  {...state, tenCharacters: !tenCharacters};
            case(Actions.VALIDATE_ONE_NUMBER): 
            return  {...state, oneNumber: !oneNumber};
            case(Actions.VALIDATE_ONE_CAPITAL): 
            return  {...state, oneCapital: !oneCapital};
        case(Actions.ACCEPT_PASSWORD): 
            return  {...state, pristine: !pristine};
        // case(Actions.SET_PASSWORD_INPUT_DIRTY): 
        //     return  {...state, pristine: !pristine};
        default: 
            return state;
    }
};

const PasswordScreen = () => {
    const [bingo, setBingo] = useState(true);
    const [state, dispatch] = useReducer(reducer, {
        pristine: true,
        password: '',
        passwordHidden: true,
        tenCharacters: false,
        tenCharactersColor: PRIMARYCOLOR,
        oneNumber: false,
        oneNumberColor: PRIMARYCOLOR,
        oneCapital: false,
        oneCapitalColor: PRIMARYCOLOR,
        passwordAccepted: false,
        passwordLabelColor: PRIMARYCOLOR,
        retypedPassword: '',
        retypedPasswordLabel: PRIMARYCOLOR,
        passwordMatchConfirmed: false,

    });

    const manageColors = (pristine, condition) => {
        if(pristine) {

        }

    }
    return (
        <View style={styles.screen}>
            <Title title='Create a password according to our security standars'/>
            <View style={styles.labelAndInput}>
                <Text style={{...styles.label , color: bingo ? 'green' : 'red'}}>Password</Text>
                <InputBar
                    leftIconLibrary={IconLibrary.Entypo} 
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.AntDesign}
                    rightIconName='eye'
                    rightIconColor={Colors.buttonContainer}
                    style={styles.input}
                />
            </View>
            <Caution type='password' bingo={bingo} style={{container: styles.container, caution: styles.caution}} caution='Your password must be at least 10 characters'/>
            <Caution type='password' bingo={bingo} style={{container: styles.container, caution: styles.caution}} caution='Your password must include at least one number'/>
            <Caution type='password' bingo={bingo} style={{container: styles.container, caution: styles.caution}} caution='Your password must include at least one Capital letter'/>
            <View style={styles.labelAndInput}>
                <Text style={{...styles.label , color: bingo ? 'green' : 'red', marginTop:10}}>Confirm Password</Text>
                <InputBar
                    leftIconLibrary={IconLibrary.Entypo} 
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.AntDesign}
                    rightIconName='eye'
                    rightIconColor={Colors.buttonContainer}
                    style={styles.input}
                />
            </View>
            <NormalButton title='Register' nextScreen='Home' style={styles.button}/>
        </View>
    )
}

export default PasswordScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent :'space-around',
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
