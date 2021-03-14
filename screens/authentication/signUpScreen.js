import React from 'react'
import { StyleSheet, View} from 'react-native';

import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

import Colors from '../../constants/colors';
import IconLibrary from '../../constants/iconLibrary';


const SignUpScreen = () => {
    return (
        <View style={styles.screen}>
            <Caution type='standar' style={{container:styles.caution}} caution='Only your email is required for the moment but please consider
                filling other fields to get full advantage of our services. Once registred you can alter those details in settings section'/>
            <View style={styles.form}>
                <InputBar 
                    placeholder="First Name"
                    leftIconLibrary={IconLibrary.Entypo} 
                    leftIconName='user'
                    leftIconColor={Colors.buttonContainer}
                    
                />
                <InputBar 
                    placeholder="Last Name"
                    leftIconLibrary={IconLibrary.Entypo} 
                    leftIconName='user'
                    leftIconColor={Colors.buttonContainer}
                    
                />
                <InputBar 
                    placeholder="Email Address"
                    leftIconLibrary={IconLibrary.MaterialIcons} 
                    leftIconName='email'
                    leftIconColor={Colors.buttonContainer}
                    
                />
                <InputBar 
                    placeholder="Country/Region"
                    leftIconLibrary={IconLibrary.MaterialIcons} 
                    leftIconName='place'
                    leftIconColor={Colors.buttonContainer}
                    
                />
                <InputBar 
                    placeholder="Phone Number"
                    leftIconLibrary={IconLibrary.MaterialIcons} 
                    leftIconName='phone-android'
                    leftIconColor={Colors.buttonContainer}
                />  
                <NormalButton  title='Sign Up' style={styles.button} nextScreen='Password'/>
            </View>
        </View>         
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor: Colors.background
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 30
    },
    caution: {
        marginBottom: 20,
    }
})
