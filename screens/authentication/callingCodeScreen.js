import React from 'react'
import { StyleSheet, View } from 'react-native'

import * as ActionTypes from '../../store/actions/actionTypes'
import { useSelector }  from 'react-redux'

import CustomList from '../../components/customList'

const CallingCodeScreen = () => {
    
    const countriesAndCodes = useSelector(state => state.countriesAndCodes.countriesAndCodes)

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
