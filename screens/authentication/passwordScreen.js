import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Title from '../../components/title';
import InputBar from '../../components/inputBar';
import NormalButton from '../../components/normalButton';
import Caution from '../../components/caution';

import Colors from '../../constants/colors';
import { color } from 'react-native-reanimated';


const PasswordScreen = () => {
    var [bingo, setBingo] = useState(true);
    return (
        <View style={styles.screen}>
            <Title title='Create a password according to our security standars'/>
            <View style={styles.labelAndInput}>
                <Text style={{...styles.label , color: bingo ? 'green' : 'red'}}>Password</Text>
                <InputBar style={styles.input}/>
            </View>
            <Caution type='password' bingo={bingo} style={{container: styles.container, caution: styles.caution}} caution='Your password must be at least 10 characters'/>
            <Caution type='password' bingo={bingo} style={{container: styles.container, caution: styles.caution}} caution='Your password must include at least one number'/>
            <Caution type='password' bingo={bingo} style={{container: styles.container, caution: styles.caution}} caution='Your password must include at least one Capital letter'/>
            <View style={styles.labelAndInput}>
                <Text style={{...styles.label , color: bingo ? 'green' : 'red', marginTop:10}}>Confirm Password</Text>
                <InputBar style={styles.input}/>
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
