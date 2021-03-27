import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Platform, Text } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'

import Icon from './icon'

import IconLibrary from '../constants/iconLibrary'
import Colors from '../constants/colors'

const CustomDatePicker = props => {
    
    const minDate = props.dateOfBirth ?? new Date()
    const maxDate = new Date(`${minDate.getFullYear()+2}`)

    const [date, setDate] = useState(minDate);
    const [show, setShow] = useState(false);
    
    const icon = props.mode === 'date' ? 'calendar' : 'clockcircleo'
    const dateToDisplay = `${date?.getDate()+1}/${date?.getMonth()+1}/${date?.getFullYear()}`
    const timeToDisplay = `${date?.getHours()}:${date?.getMinutes()}`

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
                library={IconLibrary.Octicons}
                name={icon}
                color={Colors.buttonContainer}
                style={styles.leftIcon}
            />
            <Text style={styles.text}>{props.mode == 'date' ? dateToDisplay : timeToDisplay}</Text>
            <Icon
                library={IconLibrary.AntDesign}
                name='caretdown'
                color={Colors.buttonContainer}
                style={styles.rightIcon}
                size={10}
                color={Colors.buttonContainer}
            />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={props.mode}
                    is24Hour={true}
                    minimumDate={new Date()}
                    maximumDate={maxDate}
                    display='default'
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
        marginRight: 18,
    },
    text: {
        flex: 1,
        fontWeight: 'bold',
    }

})
