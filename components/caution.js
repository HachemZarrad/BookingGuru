import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Icon from '../components/icon';
import IconLibrary from '../constants/iconLibrary';



const Caution = props => {
    return (
        <View {...props} style={{...styles.container, ...props.style.container}}>
            {props.type == 'standar' ?
                 <Icon library={IconLibrary.Octicons} name="stop" style={styles.icon} />
            : props.bingo ? 
                <Icon library={IconLibrary.FontAwesome5} name="check-circle"  color="green" style={styles.icon} />
            :   <Icon library={IconLibrary.Feather} name="x-circle"  color="red" style={styles.icon} />
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
