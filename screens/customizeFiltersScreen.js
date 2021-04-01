import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RadioButton } from 'react-native-paper';

import { HOTELS_SORTING_PROPERTIES } from '../constants/usefulLists'


const CustomizeFiltersScreen = props => {
    const [checked, setChecked] = useState(HOTELS_SORTING_PROPERTIES[0]);

    return (
        <View style={styles.list}>
            {HOTELS_SORTING_PROPERTIES.map((property) => {
                return (
                    <View style={styles.radioButton} key={property}>
                        <Text>{property}</Text>
                        <RadioButton
                            data
                            value={property}
                            status={checked === property ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(property)}
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
        width: 190,
        // height: 190,
        flex: 0.5,
    },
    radioButton: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
