import React, { useState } from 'react'
import { StyleSheet, View} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Colors from '../constants/colors';


const CustomPicker = props => {
    const [selectedValue, setSelectedValue] = useState(props.firstValue);
    return (
        <View style={{...styles.border, ...props.style}}>
            <Picker
                {...props}
                selectedValue={selectedValue}
                style={{...styles.picker, ...props.style}}
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                <Picker.Item label= {props.firstValue} value={props.firstValue} />
                <Picker.Item label={props.secondValue} value={props.secondValue} />
            </Picker>
        </View>
    )
}

export default CustomPicker

const styles = StyleSheet.create({
    border: {
        width: 300,
        height: 50,
        backgroundColor: 'white', 
        borderRadius: 20, 
        borderWidth: 4,
        borderColor: Colors.toolbarColor, 
        marginLeft: 30, 
        marginTop: 10
    },
    picker: {
        height: 50,
        width: 300
    }
   
})
