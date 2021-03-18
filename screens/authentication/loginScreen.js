import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Title from '../../components/title';
import Icon from '../../components/icon';

import IconLibrary from '../../constants/iconLibrary';
import Colors from '../../constants/colors';

const LoginScreen = () => {
    const navigation = useNavigation();
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
                    leftIconColor={Colors.buttonContainer}
                />
                <InputBar
                    placeholder='Password'
                    leftIconLibrary={IconLibrary.Entypo}
                    leftIconName='lock'
                    leftIconColor={Colors.buttonContainer}
                    rightIconLibrary={IconLibrary.AntDesign}
                    rightIconName='eye'
                    rightIconColor={Colors.buttonContainer}
                />
                <NormalButton style={styles.button} title='Login' />
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
