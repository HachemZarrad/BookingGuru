import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { Picker } from '@react-native-picker/picker'

import Colors from '../constants/colors'
import Icon from './icon'


const CustomPicker = props => {
    const valuesList = props.list
    const [selectedValue, setSelectedValue] = useState('Tunisia')
    const selectedElementAccordingToOtherFactors = props.selectedElementAccordingToOtherFactors

    useEffect(() => {
        if (selectedElementAccordingToOtherFactors) setSelectedValue(selectedElementAccordingToOtherFactors)
    }, [selectedElementAccordingToOtherFactors])

    return (
        <View style={{ ...styles.border, ...props.style }}>
            <Icon
                library={props.iconLibrary}
                name={props.iconName}
                color={props.iconColor}
                size={props.iconSize}
                style={styles.icon}
            />
            <Picker
                {...props}
                selectedValue={selectedValue}
                style={{ ...styles.picker, ...props.style }}
                mode='dialog'
                prompt={props.prompt}
                dropdownIconColor={Colors.buttonContainer}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {valuesList.map(value => {
                    return (
                        <Picker.Item key={value} label={value} value={value} />
                    )
                })}
            </Picker>
        </View>
    )
}

export default CustomPicker

const styles = StyleSheet.create({
    border: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: Colors.toolbarColor,
        margin: 5,
    },
    picker: {
        height: 50,
        flex: 1,
        marginTop: -6
    },
    icon: {
        margin: 5,
    }

})
