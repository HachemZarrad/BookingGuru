import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Colors from '../constants/colors';

import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


{/* <Octicons name="stop" size={24} color="black" style={styles.icon} />
<FontAwesome5 name="check-circle" size={24} color="green" style={styles.icon} />
<Feather name="x-circle" size={24} color="red" style={styles.icon} /> */}

const inputBar = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <TextInput {...props}  placeholderTextColor="black" style={{...styles.inputBar, ...props.style}}></TextInput>
        </View>
    )
}

export default inputBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '80%',
        height: 50,
        backgroundColor: 'white', 
        borderRadius: 20, 
        borderWidth: 4,
        // margin: 5,
        borderColor: Colors.toolbarColor, 
    }
})
