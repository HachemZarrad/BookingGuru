import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { RadioButton, Checkbox } from 'react-native-paper';

import NormalButton from '../components/normalButton'
import Title from '../components/title'

import { HOTELS_FILTERS } from '../constants/usefulLists'
import Colors from '../constants/colors'

const CustomizeFiltersScreen = props => {

    const { list, visibility, setInitial, initial } = props
    const [checked, setChecked] = useState(initial ? initial : HOTELS_FILTERS[0]);


    const confirmProperty = (property) => {
        setChecked(property)
        setInitial(property)
        setTimeout(() => {
            visibility()
        }, 500);
    }


    return (
        <View style={styles.list}>
            {HOTELS_FILTERS.map((property) => {
                return (
                    <TouchableOpacity
                        style={styles.radioButton}
                        key={property}
                        // onPress={() => confirmProperty(property)}
                    >
                        <Text style={styles.text}>{property}</Text>
                        <Checkbox
                            // value={property}
                            color={Colors.button}
                            status={checked === property ? 'checked' : 'unchecked'}
                            // onPress={() => confirmProperty(property)}
                        />
                    </TouchableOpacity>
                )
            })
            }
            <NormalButton title='Confirm' style={styles.button}/>
        </View>
    );
}

export default CustomizeFiltersScreen

const styles = StyleSheet.create({
    list: {
        width: 200,
        height: 280,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 10,
    },
    radioButton: {
        flex: 1,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'black',
    },
    button: {

    }
})
