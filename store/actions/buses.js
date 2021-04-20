import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchBuses = () => async (dispatch) => {
    dispatch({ type: ActionTypes.BUSES_LOADING })
    try {
        const response = await fetch(`${baseUrl}buses`)
        if (!response.ok) throw Error('Please Check Your Internet Connection')
        const buses = await response.json()
        dispatch({ type: ActionTypes.GET_BUSES, payload: buses })
    }
    catch (error) {
        dispatch({ type: ActionTypes.BUSES_FAILED, payload: error })
        throw error
    }
}

