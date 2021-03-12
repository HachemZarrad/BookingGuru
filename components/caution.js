import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';

const Caution = props => {
    return (
        <View {...props} style={{...styles.container, ...props.style}}>
            <Octicons name="stop" size={24} color="black" style={styles.icon} />
            <View style={styles.cautionContainer}>
                <Text numberOfLines={6}  style={styles.caution} >{props.caution}</Text>
            </View>
        </View>
    )
}

export default Caution

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cautionContainer: {
        flex: 1,
    },
    caution: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginLeft: 20
    },
    icon: {
        marginLeft: 15,
    }

})
