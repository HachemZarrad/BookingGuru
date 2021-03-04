import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';

const Caution = props => {
    return (
        <View {...props} style={{...styles.container, ...props.style}}>
            <Octicons name="stop" size={24} color="black" />
            <Text style={styles.caution} >{props.caution}</Text>
        </View>
    )
}

export default Caution

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 20
    },
    caution: {
        fontStyle: 'italic',
        fontWeight: 'bold'
    }

})
