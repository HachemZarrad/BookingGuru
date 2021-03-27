import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Platform, Text } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'

import Icon from './icon'

import IconLibrary from '../constants/iconLibrary'
import Colors from '../constants/colors'

const CustomDatePicker = props => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const icon = props.mode === 'date' ? 'calendar' : 'clockcircleo'

    const showPicker = () => {
        setShow(true);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <TouchableOpacity style={{...styles.pickerContainer, ...props.style}} onPress={showPicker}>
            <Icon
                library={IconLibrary.AntDesign}
                name={icon}
                color={Colors.buttonContainer}
                style={styles.leftIcon}
            />
            <Text style={styles.text}>display date here</Text>
            <Icon
                library={IconLibrary.AntDesign}
                name='caretdown'
                color={Colors.buttonContainer}
                style={styles.rightIcon}
                size={12}
                color='grey'
            />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={props.mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            
        </TouchableOpacity>
    );
}

export default CustomDatePicker

const styles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 4,
        margin: 5,
        borderColor: Colors.toolbarColor,
    },
    leftIcon: {
        margin: 5
    },
    rightIcon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }

})
