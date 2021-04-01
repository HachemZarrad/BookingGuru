import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RadioButton } from 'react-native-paper';

import { HOTELS_SORTING_PROPERTIES } from '../constants/usefulLists'


const CustomizeFiltersScreen = props => {
    const [checked, setChecked] = useState('first');

    return (
        <View style={styles.list}>
            {HOTELS_SORTING_PROPERTIES.map((property) => {
                return (
                    <View style={styles.radioButton} key={property}>
                        <Text>{property}</Text>
                        <RadioButton
                            data
                            value={property}
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                    </View>
                )
            })
            }
        </View>
    );
}

export default CustomizeFiltersScreen

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around'
        justifyContent: 'flex-end'
    }
})
