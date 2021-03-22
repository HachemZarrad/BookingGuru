import React, {useEffect, useCallback} from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'

import Colors from '../../constants/colors'
import * as ActionTypes from '../../store/actions/actionTypes'
import CustomList from '../../components/customList'
import countriesAndCodes from '../../constants/coutriesAndCallingCodes';

const CallingCodeScreen = ({route}) => {
    // countriesAndCodes = route.params;
    

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
