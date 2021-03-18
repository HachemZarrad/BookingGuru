import React, {useReducer} from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

import Icon from './icon'

import Colors from '../constants/colors'

const EMAILCHECK = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CAPITALLETTERS = /[A-Z]/g;
const DIGITS = /\d/g;

const SET_INPUT_DIRTY = 'SET_INPUT_DIRTY';
const INPUT_CHANGE = 'INPUT_CHANGE';

const inputReducer = (action,inputState) => {
    switch(action.type) {
        case SET_INPUT_DIRTY:
            return {...inputState, pristine: false};
        case INPUT_CHANGE:
            return {...inputState, isValid: action.payload.isValid, input: action.payload.value};
        default:
            return inputState;
    }
}

const textChangeHandler = text => {
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !EMAILCHECK.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

const makeDirty = () => {
    dispatch({type: SET_INPUT_DIRTY });
}

const InputBar = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        pristine: true,
        isValid: props.isValid,
        value: props.value

    });

    return (
        <View>
            <View style={{ ...styles.container, ...props.style }}>
                <Icon
                    library={props.leftIconLibrary}
                    name={props.leftIconName}
                    color={props.leftIconColor}
                    size={props.leftIconSize}
                    style={styles.leftIcon}
                />
                <TextInput 
                    {...props} 
                    placeholderTextColor="black" 
                    style={{ ...styles.inputBar, ...props.style }}
                    onBlur={makeDirty}
                    onChange={textChangeHandler}
                >
                </TextInput>
                <Icon
                    library={props.rightIconLibrary}
                    name={props.rightIconName}
                    color={props.rightIconColor}
                    size={props.rightIconSize}
                    onPress={props.rightIconFeature}
                    style={styles.rightIcon}
                />
            </View>
            {!pristine && !isValid &&
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
        width: '80%',
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
        margin: 5
    },
    rightIcon: {
        marginRight: 5
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
