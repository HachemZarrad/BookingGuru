import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchCountriesAndCallingCodes = () => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}callingCodes`)
        if (!response.ok) throw new Error('Please Check Your Internet Connection')
        const callingCodes = await response.json()
        dispatch({ type: ActionTypes.GET_CALLING_CODES, payload: callingCodes })
    }
    catch (error) {
        throw error
    }
}


