import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchBuses = () => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}buses`)
        if (!response.ok) throw new Error('Please Check Your Internet Connection')
        const buses = await response.json()
        dispatch({ type: ActionTypes.GET_BUSES, payload: buses })
    }
    catch (error) {
        throw error
    }
}

