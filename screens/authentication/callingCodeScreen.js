import React, {useEffect, useCallback} from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

import Colors from '../../constants/colors'
import { useSelector, useDispatch} from 'react-redux'
import fetchCountriesAndCallingCodes from '../../store/actions/countriesAndCode'
import * as ActionTypes from '../../store/actions/actionTypes'
import CustomList from '../../components/customList'
import countriesAndCode from '../../store/actions/countriesAndCode'

const CallingCodeScreen = ({route}) => {
    countriesAndCodes = route.params;
    console.log('njarbou',countriesAndCodes)
    // const dispatch = useDispatch()
    // const countriesAndCodes = useSelector(state => state.countriesAndCodes.countriesAndCodes)
    // const loading = useSelector(state => state.countriesAndCodes.loading)
    // const loadCountriesAndCallingCodes = useCallback(() => {
    //     dispatch(fetchCountriesAndCallingCodes())
    // },[dispatch])

    // useEffect(() => {
    //     loadCountriesAndCallingCodes()
    // },[loadCountriesAndCallingCodes])

    return (
            <CustomList data={countriesAndCodes} key='name' pressedElement='SignUp' service={ActionTypes.GET_COUNTRIES}/>
    )
}

export default CallingCodeScreen

const styles = StyleSheet.create({
    spinner: {
        justifyContent: 'center',
        alignItems: 'center'
      },
})
