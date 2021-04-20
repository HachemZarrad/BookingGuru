import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchFlights = () => async (dispatch) => {
    dispatch({ type: ActionTypes.FLIGHTS_LOADING })
    try {
        const response = await fetch(`${baseUrl}flights`)
        if (!response.ok) throw Error('Please Check Your Internet Connection')
        const  flights = await response.json()
        dispatch({ type: ActionTypes.GET_FLIGHTS, payload: flights })
    }
    catch (error) {
        dispatch({ type: ActionTypes.FLIGHTS_FAILED, payload: error })
        throw error
    }
}

