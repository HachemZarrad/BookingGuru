import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import Colors from '../constants/colors'
import IconLibrary from '../constants/iconLibrary'

import Icon from '../components/icon'


const sortingList = (list) => {

}


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
                    color='black'
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
                    color='black'
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
        // marginTop: 2,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    button: {
        flexDirection: 'row',
        width: '50%',
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
})
