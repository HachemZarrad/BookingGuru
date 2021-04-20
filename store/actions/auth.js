import AsyncStorage from '@react-native-async-storage/async-storage';

import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export async const signUp = (creds) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_REQUEST, payload: creds })
    return await fetch(`${baseUrl}users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
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