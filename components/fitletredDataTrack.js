import React from 'react'
import { StyleSheet, Text, View, button } from 'react-native'

import Colors from '../constants/colors'
import NormalButton from './normalButton'

const FitletredDataTrack = props => {
    const { data, dataType, resetFunction } = props
    return (
        <View style={styles.banner}>
            <Text style={styles.text} numberOfLines={2}>
                Your filtered List is composed of {data.length} {dataType}</Text>
            <NormalButton
                style={styles.clearButton}
                title='Clear'
            />
        </View>
    )
}

export default FitletredDataTrack

const styles = StyleSheet.create({
    banner: {
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        backgroundColor: Colors.buttonContainer,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    clearButton: {
        width: '25%',
        height: '80%',
    },
    text: {
        color: 'white',
    }
})
