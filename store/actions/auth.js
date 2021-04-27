import AsyncStorage from '@react-native-async-storage/async-storage'

import * as ActionTypes from '../actions/actionTypes'
import { baseUrl } from '../../constants/networking'

let timer


export const authenticate = (creds, type) => async (dispatch) => {
    const response = await fetch(`${baseUrl}users/${type}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
    if (!response.ok) {
        const dataError = await response.json()
        const error = dataError.err.message
        throw new Error(error)
    }
    const data = await response.json()
    dispatch({ type: ActionTypes.AUTHENTICATION, token: data.token, userDetails: data.userDetails })
    AsyncStorage.setItem('token', data.token)
    AsyncStorage.setItem('userDetails', JSON.stringify(data.userDetails))
}

export const logout = () => (dispatch) => {
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('userDetails')
    dispatch({ type: ActionTypes.LOGOUT })
}

