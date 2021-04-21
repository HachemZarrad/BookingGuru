import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';

let timer = 0

const authentication = (payload) => (dispatch) => {
    dispatch({ type: ActionTypes.AUTHENTICATION_SUCCESS, payload: payload })
}

export const signUp = (creds) => async (dispatch) => {
    dispatch({ type: ActionTypes.AUTHENTICATION_REQUEST, payload: creds })
    try {
        const response = await fetch(`${baseUrl}users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        })
        if (!response.ok) throw Error(response.err)
        AsyncStorage.setItem('token', response.token)
        AsyncStorage.setItem('creds', JSON.stringify(creds))
        authentication(response)
    }
    catch (error) {
        dispatch({ type: ActionTypes.AUTHENTICATION_FAILURE, payload: error })

    }
}



export const login = (creds) => async (dispatch) => {
    dispatch({ type: ActionTypes.AUTHENTICATION_REQUEST, payload: creds })
    try {
        const response = await fetch(`${baseUrl}users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        })
        if (!response.ok) throw Error(response.err)
        AsyncStorage.setItem('token', response.token)
        AsyncStorage.setItem('creds', JSON.stringify(creds))
        dispatch({ type: ActionTypes.AUTHENTICATION_SUCCESS, payload: response })
    }
    catch (error) {
        dispatch({ type: ActionTypes.AUTHENTICATION_FAILURE, payload: error })

    }
}


export const logout = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT_REQUEST, payload: creds })
    try {
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('creds')
        dispatch({ type: ActionTypes.LOGOUT_SUCCESS })
    }
    catch (error) {
        dispatch({ type: ActionTypes.LOGOUT_FAILURE, payload: error })
    }
}