import React, {useReducer} from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'

import Icon from './icon'

import Colors from '../constants/colors'

const EMAILCHECK = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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


const InputBar = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        pristine: true,
        isValid: props.isValid,
        value: props.value ? props.value : props.default
        
    });
    
    const textChangeHandler = text => {
        let isValid = true;
        if (props.required && text.trim().length === 0) {
          isValid = false;
        }
        if (props.email && !EMAILCHECK.test(text.toLowerCase())) {
          isValid = false;
        }
        if (props.minLength != null && text.length < props.minLength) {
          isValid = false;
        }
        dispatch({ type: INPUT_CHANGE, payload: { value: text, isValid: isValid}});
      };
    
    const makeDirty = () => {
        dispatch({type: SET_INPUT_DIRTY });
    }


    return (
        <View>
            <View style={{ ...styles.container, ...props.style }}>
                <Icon
                    library={props.leftIconLibrary}
                    name={props.leftIconName}
                    color={Colors.buttonContainer}
                    size={props.leftIconSize}
                    style={styles.leftIcon}
                />
                <TextInput 
                    {...props} 
                    placeholderTextColor="black" 
                    style={{ ...styles.inputBar, ...props.style }}
                    value={inputState.value}
                    onBlur={makeDirty}
                    onChangeText={props.searchBar || props.passwordCreation ? props.onChangeText: textChangeHandler}
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
            {!inputState.pristine && !inputState.isValid && !props.passwordCreation &&
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
