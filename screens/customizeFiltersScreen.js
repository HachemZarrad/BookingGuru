import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

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
                        <TouchableOpacity key={track} style={styles.checkBox}>
                            <Text style={styles.text}>{track}</Text>
                            <Checkbox
                                status={checked ? 'checked' : 'unchecked'}
                                color={Colors.button}
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
        <ScrollView>
            <View style={styles.list}>
                {HOTELS_FILTERS.map((property) => {
                    return (
                        <TouchableOpacity
                            style={styles.checkBox1}
                            key={property}
                        >
                            <Title title={property} />
                            <Filter />
                        </TouchableOpacity>
                    )
                })
                }
                <NormalButton title='Confirm' style={styles.button} />
            </View>
        </ScrollView>
    );
}

export default CustomizeFiltersScreen

const styles = StyleSheet.create({
    list1: {
        width: '80%',
        // marginLeft: 40,
        // backgroundColor: 'red',
        alignSelf: 'center',
        marginBottom: 15,
    },
    list: {
        backgroundColor: 'white',
        padding: 10,
        // justifyContent: 'center',
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 15
    },
    button: {
        alignSelf :'center',
        margin: 20,
    }
})
