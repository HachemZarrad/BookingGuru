import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import * as ActionTypes from '../../store/actions/actionTypes'
import CustomList from '../../components/customList'
import countriesAndCodes from '../../constants/coutriesAndCallingCodes';

const CallingCodeScreen = () => {

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
        backgroundColor: 'white',
    }
})
