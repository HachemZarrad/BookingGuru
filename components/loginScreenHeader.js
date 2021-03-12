import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Colors from '../constants/colors';

const LoginScreenHeader = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/guruLogo.png')}
                style={styles.logo}/>
        </View>
    )
}

export default LoginScreenHeader

const styles = StyleSheet.create({
    container:{
        flex:1,
        // flexDirection:'row',
        // alignContent: 'center',
        // height: '100%',
        // backgroundColor: Colors.toolbarColor,
        // alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
    },  
    logo: {
        flex:1,
        width: 200,
        height: 150,
        marginTop: 60,
        marginRight: 40,
        // alignItems: 'center',
        // margin: 20,
        // justifyContent: 'center'
        // alignSelf: 'center'
    }
})
