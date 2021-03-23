import React, { useEffect, useCallback } from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

import Colors from '../../constants/colors'
import * as ActionTypes from '../../store/actions/actionTypes'
import CustomList from '../../components/customList'
import countriesAndCodes from '../../constants/coutriesAndCallingCodes';

const CallingCodeScreen = ({ route }) => {
    // countriesAndCodes = route.params;


    return (
        <View style={styles.container}>
            <CustomList data={countriesAndCodes} key='name' pressedElement='SignUp' service={ActionTypes.GET_COUNTRIES} />
        </View>
    )
}

export default CallingCodeScreen

const styles = StyleSheet.create({
    spinner: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    }
})
