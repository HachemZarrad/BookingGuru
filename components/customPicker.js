import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Colors from '../constants/colors';


const CustomPicker = props => {
    const valuesList = props.list;
    const [selectedValue, setSelectedValue] = useState(valuesList[0]);
    return (
        <View style={{ ...styles.border, ...props.style }}>
            <Picker
                {...props}
                selectedValue={selectedValue}
                style={{ ...styles.picker, ...props.style }}
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {valuesList.map(value => {
                    return(
                    <Picker.Item label={value} value={value} />
                    )
                })}
            </Picker>
        </View>
    )
}

export default CustomPicker

const styles = StyleSheet.create({
    border: {
        width: '75%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: Colors.toolbarColor,
        marginBottom: 20
    },
    picker: {
        height: 50,
        width: '100%',
        marginTop: -6
    }

})
