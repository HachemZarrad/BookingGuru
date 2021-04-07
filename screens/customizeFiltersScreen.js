import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { RadioButton, Checkbox } from 'react-native-paper';

import NormalButton from '../components/normalButton'
import Title from '../components/title'

import { HOTELS_FILTERS, HOTELS_FILTERS1 } from '../constants/usefulLists'
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


    const Filter = () => {
        return (
            <View style={styles.list1}>
                {HOTELS_FILTERS.map((track) => {
                    return (
                        <TouchableOpacity key={track} style={styles.radioButton}>
                            <Text>{track}</Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                        </TouchableOpacity>


                    )
                })
                }
            </View>
        )
    }


    return (
        <View style={styles.list}>
            {HOTELS_FILTERS.map((property) => {
                return (
                    <TouchableOpacity
                        style={styles.radioButton1}
                        key={property}
                    // onPress={() => confirmProperty(property)}
                    >
                        <Title title={property} />

                        <Filter />

                    </TouchableOpacity>
                )
            })
            }
            <NormalButton title='Confirm' style={styles.button} />
        </View>
    );
}

export default CustomizeFiltersScreen

const styles = StyleSheet.create({
    list1: {

    },
    list: {
        // width: 200,
        // height: 280,
        flex: 1,
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
