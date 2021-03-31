import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Colors from '../constants/colors'
import IconLibrary from '../constants/iconLibrary'

import Icon from './icon'

const CustomHeader = props => {
    const navigation = useNavigation()

    const backHome = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.arrowAndTitle}>
                <TouchableOpacity style={styles.backButton} onPress={backHome} >
                    <Icon
                        library={IconLibrary.Ionicons}
                        name="arrow-back"
                        size={24}
                        color='white'
                    />
                </TouchableOpacity>
                <Text style={styles.title}>{props.ComponentTitle}</Text>
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: Colors.toolbarColor,
    },
    arrowAndTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '60%',
        height: 60,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})
