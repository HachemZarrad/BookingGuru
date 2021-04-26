import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';



export const fetchHotels = () => async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}hotels`)
            if (!response.ok) throw new Error('Please Check Your Internet Connection')
            const hotels = await response.json()
            dispatch({ type: ActionTypes.GET_HOTELS, payload: hotels })
        }
        catch (error) {
            throw error
        }
}