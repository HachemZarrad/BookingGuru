import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

import Icon from './icon'

import Colors from '../constants/colors'


const InputBar = props => {

    const [pristine, setPristine] = useState(true)
    const [inputValue, setInputValue] = useState('')

    const { onInputChange } = props


    const textChangeHandler = (text) => {
        let isValid = true
        const emailRegex = /^[/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (props.required && text.trim().length === 0) {
            isValid = false
        }
        if (props.email && !emailRegex.test(text.toLowerCase())) {
            isValid = false
        }
        if (props.minLength != null && text.length < props.minLength) {
            isValid = false
        }
        if (props.maxLength != null && text.length > props.maxLength) {
            isValid = false
        }
        setInputValue(text)
        onInputChange(text, isValid)
    }

    const makeDirty = () => {
        setPristine(false)
    }


    return (
        <View>
            <View style={{ ...styles.container, ...props.style }}>
                <Icon
                    library={props.leftIconLibrary}
                    name={props.leftIconName}
                    color={Colors.buttonContainer}
                    size={props.leftIconSize}
                    onPress={props.leftIconFeature}
                    style={styles.leftIcon}
                />
                <TextInput
                    {...props}
                    placeholderTextColor="black"
                    style={{ ...styles.inputBar, ...props.style }}
                    value={inputValue}
                    onBlur={makeDirty}
                    onChangeText={textChangeHandler}
                >
                </TextInput>
                <Icon
                    library={props.rightIconLibrary}
                    name={props.rightIconName}
                    color={props.rightIconColor ?? Colors.buttonContainer}
                    size={props.rightIconSize}
                    onPress={props.rightIconFeature}
                    style={styles.rightIcon}
                />
            </View>
            {!pristine && !props.validity && props.checkInput &&
                <View style={styles.errorContainer}>
                    <Text style={styles.error}>{props.error}</Text>
                </View>
            }
        </View>
    )
}

export default InputBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 4,
        margin: 5,
        borderColor: Colors.toolbarColor,

    },
    inputBar: {
        flex: 1
    },
    leftIcon: {
        margin: 5,
        paddingRight: 5,
    },
    rightIcon: {
        marginRight: 10
    },
    error: {
        marginLeft: 10,
        fontSize: 13,
        color: 'red',

    },
    errorContainer: {
        marginVertical: 5
    },
})