import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

import { useNavigation } from '@react-navigation/native';

import InputBar from '../../components/inputBar';
import CustomButton from '../../components/customButton';
import Title from '../../components/title';

import Colors from '../../constants/colors';

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.background}>
            <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('Home', {screen: 'HomePage'})}} >
                <Icon name="arrow-left" size={22} color="black"/>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../../assets/guruLogo.png')}
                    style={styles.logo}/>
            </View>
            <View style={styles.screen}>
                <Title title='Login'/>
                <InputBar placeholder='    Email'/>
                <InputBar placeholder='    Password'/>
                <CustomButton style={styles.button}/>
                <CustomButton />
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
    logoContainer: {
        alignItems: 'center',
        height: '50%',
    },
    logo:{
        width: '50%',
        height: '50%',
    },
    screen:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: Colors.background,
       borderTopStartRadius: 40,
       borderTopEndRadius: 40,
       elevation: 40,
       borderColor: Colors.background,
       borderWidth: 4,
       marginTop: '-30%',
    },
    button:{
        marginTop: 20,
        marginBottom: 5
    },
    backButton: {
        marginLeft: 10,
        marginTop: 20,
    },
})
