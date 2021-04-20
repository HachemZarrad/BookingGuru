import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchCountriesAndCallingCodes = () => async (dispatch) => {
    dispatch({ type: ActionTypes.CALLING_CODES_LOADING })
    try {
        const response = await fetch(`${baseUrl}callingCodes`)
        if (!response.ok) throw Error('Please Check Your Internet Connection')
        const callingCodes = await response.json()
        dispatch({ type: ActionTypes.GET_CALLING_CODES, payload: callingCodes })
    }
    catch (error) {
        dispatch({ type: ActionTypes.CALLING_CODES_FAILED, payload: error })
        throw error
    }
}


