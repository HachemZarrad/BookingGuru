import AsyncStorage from '@react-native-async-storage/async-storage'

import * as ActionTypes from '../actions/actionTypes'
import { baseUrl } from '../../constants/networking'

let timer

const authentication = (payload) => (dispatch) => {
    dispatch({ type: ActionTypes.AUTHENTICATION_SUCCESS, payload: payload })
}

export const signUp = (creds) => async (dispatch) => {
    dispatch({ type: ActionTypes.AUTHENTICATION_REQUEST })
    try {
        const response = await fetch(`${baseUrl}users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        })
        if (!response.ok) throw Error(response.err)
        const data = await response.json()
        saveDataToStorage(data.token, data.userDetails)
        authentication(data)
    }
    catch (error) {
        dispatch({ type: ActionTypes.AUTHENTICATION_FAILURE, payload: error })
    }
}


export const login = (creds) => async (dispatch) => {
    dispatch({ type: ActionTypes.AUTHENTICATION_REQUEST })
    try {
        const response = await fetch(`${baseUrl}users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        })
        if (!response.ok) throw Error(response.err)
        const data = await response.json()
        saveDataToStorage(data.token, data.userDetails)
        authentication(data)
    }
    catch (error) {
        dispatch({ type: ActionTypes.AUTHENTICATION_FAILURE, payload: error })

    }
}


export const logout = () => (dispatch) => {
    dispatch({ type: ActionTypes.LOGOUT_REQUEST })
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('userDetails')
    dispatch({ type: ActionTypes.LOGOUT_SUCCESS })
}

const saveDataToStorage = (token, userDetails) => {
    AsyncStorage.setItem('token', token)
    AsyncStorage.setItem('userDetails', JSON.stringify(userDetails))
}