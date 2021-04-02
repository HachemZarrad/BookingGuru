import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { RadioButton } from 'react-native-paper';

import Colors from '../constants/colors'

const SortingList = props => {

    const { list, visibility, setInitial, initial } = props
    const [checked, setChecked] = useState(initial ? initial : list[0]);


    const confirmProperty = (property) => {
        setChecked(property)
        setInitial(property)
        setTimeout(() => {
            visibility()
        }, 500);
    }


    return (
        <View style={styles.list}>
            {list.map((property) => {
                return (
                    <TouchableOpacity
                        style={styles.radioButton}
                        key={property}
                        onPress={() => confirmProperty(property)}
                    >
                        <Text style={styles.text}>{property}</Text>
                        <RadioButton
                            value={property}
                            status={checked === property ? 'checked' : 'unchecked'}
                            onPress={() => confirmProperty(property)}
                        />
                    </TouchableOpacity>
                )
            })
            }
        </View>
    );
}

export default SortingList

const styles = StyleSheet.create({
    list: {
        width: 200,
        height: 280,
        backgroundColor: 'white',
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
    }
})
