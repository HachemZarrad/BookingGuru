import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';



export const fetchHotels = () => async (dispatch) => {
        dispatch({ type: ActionTypes.HOTELS_LOADING })
        try {
            const response = await fetch(`${baseUrl}hotels`)
            if (!response.ok) throw Error('Please Check Your Internet Connection')
            const hotels = await response.json()
            dispatch({ type: ActionTypes.GET_HOTELS, payload: hotels })
        }
        catch (error) {
            dispatch({ type: ActionTypes.HOTELS_FAILED, payload: error })
            throw error
        }
}