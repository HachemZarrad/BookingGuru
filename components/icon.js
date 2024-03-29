import React from 'react'
import { StyleSheet } from 'react-native'

import IconLibrary from '../constants/iconLibrary'

import FlagIcon from 'react-native-ico-flags'
import {
    AntDesign, Octicons, FontAwesome, FontAwesome5, Feather, Ionicons,
    MaterialIcons, SimpleLineIcons, Entypo, Foundation
} from '@expo/vector-icons'


const Icon = ({ library, name, color = 'black', size = 25, style, onPress }) => {
    switch (library) {
        case (IconLibrary.AntDesign):
            return (
                <AntDesign name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.Ionicons):
            return (
                <Ionicons name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.Entypo):
            return (
                <Entypo name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.Feather):
            return (
                <Feather name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.FontAwesome):
            return (
                <FontAwesome name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.FontAwesome5):
            return (
                <FontAwesome5 name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.Foundation):
            return (
                <Foundation name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.MaterialIcons):
            return (
                <MaterialIcons name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.Octicons):
            return (
                <Octicons name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.SimpleLineIcons):
            return (
                <SimpleLineIcons name={name} onPress={onPress} size={size} color={color} style={{ ...styles.icon, ...style }} />
            )
        case (IconLibrary.Flags):
            return (
                <FlagIcon name={name} height="30" width="30" />
            )
        default:
            return (
                null
            )
    }
}

export default Icon

const styles = StyleSheet.create({
    icon: {

    },
})
