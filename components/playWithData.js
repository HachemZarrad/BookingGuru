import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Colors from '../constants/colors'
import IconLibrary from '../constants/iconLibrary'

import Icon from '../components/icon'

const PlayWithData = props => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                {...props}
                style={styles.button}
            // onPress={}
            >
                <Icon
                    library={IconLibrary.FontAwesome5}
                    name="sort-numeric-down"
                    size={24}
                    color='white'
                />
                <Text style={styles.textButton}>Sort Your List</Text>
            </TouchableOpacity>
            <TouchableOpacity
                {...props}
                style={styles.button}
            // onPress={}
            >
                <Icon
                    library={IconLibrary.Entypo}
                    name="funnel"
                    size={24}
                    color='white'
                />
                <Text style={styles.textButton}>Customize Filter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlayWithData

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },
    button: {
        flexDirection: 'row',
        width: '50%',
        height: 60,
        // borderRadius: 10,
        borderColor: 'green',
        borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.buttonContainer,
    },
})
