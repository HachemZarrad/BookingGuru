import React, { useReducer } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'

import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Title from '../../components/title';
import Icon from '../../components/icon';

import IconLibrary from '../../constants/iconLibrary';
import Colors from '../../constants/colors';

import { login } from '../../store/actions/auth'

const SHOW_PASSWORD = 'SHOW_PASSWORD'
const GET_EMAIL = 'GET_EMAIL'
const GET_PASSWORD = 'GET_PASSWORD'

const loginReducer = (state, action) => {
    switch (action.type) {
        case SHOW_PASSWORD:
            return { ...state, showPassword: !state.showPassword }
        case GET_EMAIL:
            return { ...state, email: action.payload }
        case GET_PASSWORD:
            return { ...state, password: action.payload }
    }
}

const LoginScreen = () => {
    const navigation = useNavigation();
    const reduxDispatch = useDispatch()
    const [loginState, dispatch] = useReducer(loginReducer, {
        showPassword: false,
        email: '',
        password: ''
    })

    const response = useSelector(state => state.auth.useDetails)
    const token = useSelector(state => state.auth.token)

    const getEmail = (email) => {
        dispatch({ type: GET_EMAIL, payload: email })
        console.log({ email })
    }

    const getPassword = (password) => {
        dispatch({ type: GET_PASSWORD, payload: password })
        console.log({ password })
    }

    const handleLogin = () => {
        reduxDispatch(login({ username: loginState.email, password: loginState.password }))
        console.log({ token, response })
        // console.log({loginState})
    }

    return (
        <KeyboardAvoidingView
            style={styles.background}
            keyboardVerticalOffset={10}
            behavior='height'
        >
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.backButton} onPress={() => { navigation.navigate('Home', { screen: 'HomePage' }) }} >
                    <Icon library={IconLibrary.FontAwesome5} name="arrow-left" size={22} />
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/loginScreenLogo.png')}
                        style={styles.logo} />
                </View>
            </View>
            <View style={styles.loginForm}>
                <Title title='Login' style={styles.title} />
                <InputBar
                    placeholder='Email'
                    leftIconLibrary={IconLibrary.MaterialIcons}
                    leftIconName='email'
                    passwordCreation
                    onChangeText={getEmail}
                />
                <InputBar
                    placeholder='Password'
                    leftIconLibrary={IconLibrary.Entypo}
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.Ionicons}
                    rightIconName={loginState.showPassword ? 'eye' : 'eye-off'}
                    rightIconColor={Colors.buttonContainer}
                    rightIconFeature={() => dispatch({ type: SHOW_PASSWORD })}
                    secureTextEntry={!loginState.showPassword}
                    passwordCreation
                    onChangeText={getPassword}
                />

                <NormalButton style={styles.button} title='Login' onPress={handleLogin} />
                <NormalButton title='Sign Up' nextScreen='SignUp' />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.toolbarColor,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '40%',
        marginTop: 20,

    },
    logoContainer: {
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        marginRight: 20,
    },
    loginForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background,
        borderTopEndRadius: 90,
        elevation: 40,
        borderColor: Colors.background,
        borderWidth: 4,
        marginTop: '-20%',
    },
    button: {
        marginTop: 20,
        marginBottom: 5
    },
    backButton: {
        marginLeft: 10,
    },
    title: {
        fontSize: 35,
    }
})
