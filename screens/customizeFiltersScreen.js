import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import { Checkbox } from 'react-native-paper';

import HotelStars from '../components/hotelStars'
import NormalButton from '../components/normalButton'
import Title from '../components/title'

import Colors from '../constants/colors'


const CustomizeFiltersScreen = ({route}) => {

    const navigation = useNavigation()
    const dataFilters = route?.params
    // const [checked, setChecked] = useState(1)


    const confirmProperty = (property) => {
        setChecked(property)
        setInitial(property)
        setTimeout(() => {
            visibility()
        }, 500);
    }


    const Filter = ({ property }) => {
        const [checked, setChecked] = useState(null)
        return (
            <View style={styles.checkBoxContainer}>
                {Object.values(dataFilters[property].data).map((filter) => {
                    return (
                        <TouchableOpacity key={filter} style={styles.checkBox}>
                            {property === 'StarRating' ?
                                <HotelStars rating={filter} />
                                :
                                <Text style={styles.text}>{filter}</Text>
                            }
                            <Checkbox
                                status={checked === filter ? 'checked' : 'unchecked'}
                                color={Colors.button}
                                onPress={() => setChecked(filter)}
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
                {Object.keys(dataFilters).map((property) => {
                    return (
                        <View
                            // style={styles}
                            key={property}
                        >
                            <Title title={property} />
                            <Filter property={property} />
                        </View>
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
    checkBoxContainer: {
        width: '80%',
        // backgroundColor: 'red',
        // marginBottom: 15,
        // marginLeft: 20,
        margin: 20,
    },
    list: {
        backgroundColor: 'white',
        padding: 10,
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
        alignSelf: 'center',
        margin: 20,
    }
})
