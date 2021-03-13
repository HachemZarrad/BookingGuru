import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const Caution = props => {
    return (
        <View {...props} style={{...styles.container, ...props.style.container}}>
            {props.type == 'standar' ?
                 <Octicons name="stop" size={24} color="black" style={styles.icon} />
            : props.bingo ? 
                <FontAwesome5 name="check-circle" size={24} color="green" style={styles.icon} />
            :   <Feather name="x-circle" size={24} color="red" style={styles.icon} />
            }
            <View style={styles.cautionContainer}>
                <Text {...props} numberOfLines={6}  style={{...styles.caution, ...props.style.caution}} >{props.caution}</Text>
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
