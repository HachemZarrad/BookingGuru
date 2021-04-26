import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchFlights = () => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}flights`)
        if (!response.ok) throw new Error('Please Check Your Internet Connection')
        const  flights = await response.json()
        dispatch({ type: ActionTypes.GET_FLIGHTS, payload: flights })
    }
    catch (error) {
        throw error
    }
}

