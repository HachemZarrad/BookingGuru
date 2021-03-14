import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

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
        <View style={styles.background}>
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('Home', {screen: 'HomePage'})}} >
                    <Icon library={IconLibrary.FontAwesome} name="arrow-left" size={22}/>
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../../assets/loginScreenLogo.png')}
                        style={styles.logo}/>
                </View>
            </View>
            <View style={styles.loginForm}>
                <Title title='Login' style={{fontSize:35}}/>
                <InputBar
                    placeholder='    Email'
                    leftIconLibrary={IconLibrary.AntDesign} 
                    leftIconName='lock'
                    rightIconLibrary={IconLibrary.AntDesign}
                    rightIconName='eye'
                    style={styles.input}
                />
                <InputBar
                    placeholder='     Password'
                    leftIconLibrary={IconLibrary.AntDesign} 
                    leftIconName='lock'
                    rightIconLibrary={IconLibrary.AntDesign}
                    rightIconName='eye'
                    style={styles.input}
                />
                <NormalButton style={styles.button} title='Login'/>
                <NormalButton title='Sign Up' nextScreen='SignUp'/>
            </View>
        </View>
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
    logo:{
        marginRight: 20,
    },
    loginForm:{
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
    button:{
        marginTop: 20,
        marginBottom: 5
    },
    backButton: {
        marginLeft: 10,
    },
})
