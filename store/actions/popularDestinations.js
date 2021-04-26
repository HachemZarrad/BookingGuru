import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchDestinations = () => async (dispatch) => {
    try {
        const response = await fetch(`${baseUrl}destinations`)
        if (!response.ok) throw new Error('Please Check Your Internet Connection')
        const destinations = await response.json()
        dispatch({ type: ActionTypes.GET_DESTINATIONS, payload: destinations })
    }
    catch (error) {
        throw error
    }
}
