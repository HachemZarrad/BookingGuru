import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Platform } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'

import Colors from '../constants/colors'

const CustomDatePicker = props => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);



    const showPicker = () => {
        setShow(true);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <TouchableOpacity style={styles.pickerContainer} onPress={showPicker}>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 4,
        margin: 5,
        borderColor: Colors.toolbarColor,
    }
})
