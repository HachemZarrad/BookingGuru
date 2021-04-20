import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const signUp = (creds) => async (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_REQUEST, payload: creds })
    try {
        const response = await fetch(`${baseUrl}users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(creds)
        })
        if(!response.ok) throw Error(response.err)
        AsyncStorage.setItem('token', response.token)
        AsyncStorage.setItem('creds', JSON.stringify(creds))
        dispatch({type: ActionTypes.SIGN_UP_SUCCESS, payload: response})
    }
    catch(error) {
        dispatch({type: ActionTypes.SIGN_UP_FAILURE, payload: error})

    }
}




export const login = (creds) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_REQUEST, payload: creds })
    return fetch(`${baseUrl}users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
}

export const logout = (creds) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_REQUEST, payload: creds })
    return fetch(`${baseUrl}users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
}