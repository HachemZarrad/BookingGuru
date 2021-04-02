import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'

import { createFilter } from 'react-native-search-filter'

import { useNavigation } from '@react-navigation/native'

import InputBar from './inputBar'
import Icon from './icon'

import Colors from '../constants/colors'
import IconLibrary from '../constants/iconLibrary'


const KEYS_TO_FILTERS = ['name', 'locality']

const CustomHeader = props => {
    const navigation = useNavigation()

    const backHome = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
        <View style={styles.input}>
                <InputBar
                    // onChangeText={searchBarHandler}
                    placeholder="   Search down here"
                    keyboardType='default'
                    leftIconLibrary={IconLibrary.FontAwesome5}
                    leftIconName='arrow-left'
                    leftIconFeature={backHome}
                    rightIconSize={20}
                    searchBar
                />
                </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: Platform.OS === 'android' ? Colors.toolbarColor : 'white',
        width: '100%',
        alignItems: 'center',
        height: 60,
    },
    input: {
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
        width: '100%',
        alignItems: 'center',
    }
})
