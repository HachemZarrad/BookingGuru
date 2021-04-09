import React, { useState, useReducer } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import NormalButton from '../components/normalButton'
import Title from '../components/title'
import Filters from '../components/filters'



const CustomizeFiltersScreen = ({ route }) => {

    const navigation = useNavigation()
    const dataFilters = route?.params
    // const [finalFilters, dispatchFinalFilters] = useReducer(finalFiltersReducer, {})


    const confirmProperty = (property) => {
        setChecked(property)
        setInitial(property)
        setTimeout(() => {
            visibility()
        }, 500);
    }


    return (
        <View style={styles.screen}>
            <ScrollView >
                <View style={styles.list}>
                    {Object.keys(dataFilters).map((property) => {
                        return (
                            <View key={property}>
                                <Title title={property} />
                                <Filters
                                    property={property}
                                    dataFilters={dataFilters}
                                />
                            </View>
                        )
                    })
                    }
                </View>
            </ScrollView>
            <NormalButton title='Confirm' style={styles.button} />
        </View>
    );
}

export default CustomizeFiltersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        padding: 10,
    },
    button: {
        alignSelf: 'center',
        marginVertical: 20
    }
})
