import React, { useReducer, useEffect } from 'react'
import {
    StyleSheet, View, Image, TouchableOpacity,
    KeyboardAvoidingView, Alert
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import InputBar from '../../components/inputBar'
import NormalButton from '../../components/normalButton'
import Title from '../../components/title'
import Icon from '../../components/icon'

import IconLibrary from '../../constants/iconLibrary'
import Colors from '../../constants/colors'

import { authenticate } from '../../store/actions/auth'

const SHOW_PASSWORD = 'SHOW_PASSWORD'
const GET_EMAIL = 'GET_EMAIL'
const GET_EMAIL_VALIDITY = 'GET_EMAIL_VALIDITY'
const GET_PASSWORD = 'GET_PASSWORD'
const LOADING_LOGIN = 'LOADING_LOGIN'
const LOGIN_ERROR = 'LOGIN_ERROR'

const loginReducer = (state, action) => {
    switch (action.type) {
        case SHOW_PASSWORD:
            return { ...state, showPassword: !state.showPassword }
        case GET_EMAIL:
            return { ...state, email: action.payload }
        case GET_EMAIL_VALIDITY:
            return { ...state, emailValidity: action.payload }
        case GET_PASSWORD:
            return { ...state, password: action.payload }
        case LOADING_LOGIN:
            return { ...state, loading: action.payload }
        case LOGIN_ERROR:
            return { ...state, error: action.payload }
    }
}

const LoginScreen = () => {
    const navigation = useNavigation()
    const reduxDispatch = useDispatch()

    const [loginState, dispatch] = useReducer(loginReducer, {
        showPassword: false,
        email: '',
        emailValidity: false,
        password: '',
        loading: false,
        error: null
    })


    useEffect(() => {
        if (loginState.error) Alert.alert('Check your credentials!!', loginState.error, [{ text: 'Okay' }])
    }, [loginState.error])


    const goHome = () => {
        navigation.navigate('HomePage')
    }

    const getEmail = (email, validity) => {
        dispatch({ type: GET_EMAIL, payload: email })
        dispatch({ type: GET_EMAIL_VALIDITY, payload: validity })
    }

    const getPassword = (password) => {
        dispatch({ type: GET_PASSWORD, payload: password })
    }

    const showHidePassword = () => {
        dispatch({ type: SHOW_PASSWORD })
    }

    const handleLogin = async () => {
        dispatch({ type: LOGIN_ERROR, payload: null })
        dispatch({ type: LOADING_LOGIN, payload: true })
        try {
            await reduxDispatch(authenticate({ username: loginState.email, password: loginState.password }, 'login'))
            goHome()
        }
        catch (error) {
            dispatch({ type: LOGIN_ERROR, payload: error.message })
            dispatch({ type: LOADING_LOGIN, payload: false })
        }
    }


    return (
        <KeyboardAvoidingView
            style={styles.background}
            keyboardVerticalOffset={10}
            behavior='height'
        >
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.backButton} onPress={goHome} >
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
                    checkInput
                    email
                    validity={loginState.emailValidity}
                    error='Please Enter a valid Email'
                    onInputChange={getEmail}
                    leftIconLibrary={IconLibrary.MaterialIcons}
                    leftIconName='email'
                />
                <InputBar
                    placeholder='Password'
                    onInputChange={getPassword}
                    secureTextEntry={!loginState.showPassword}
                    checkInput
                    required
                    validity={loginState.password.length !== 0}
                    error='Password Required'
                    leftIconLibrary={IconLibrary.Entypo}
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.Ionicons}
                    rightIconName={loginState.showPassword ? 'eye' : 'eye-off'}
                    rightIconColor={Colors.buttonContainer}
                    rightIconFeature={showHidePassword}
                />

                <NormalButton style={styles.button}
                    title='Login'
                    onPress={handleLogin}
                    disabled={!loginState.emailValidity || loginState.password.length === 0}
                />
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
