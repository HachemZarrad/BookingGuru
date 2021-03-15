import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';
import { useNavigation } from '@react-navigation/native';


const NormalButton = props => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            {...props} 
            style={{...styles.button, ...props.style}}
            onPress={props.nextScreen ? () => navigation.navigate(props.nextScreen) : props.onPress}
        >
            <Text style={styles.textButton}>{props.title}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    
    textButton: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    button: {
        width: '80%',
        height: 60,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.toolbarColor,
    },

});

export default NormalButton;