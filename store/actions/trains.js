import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../constants/networking';




export const fetchTrains = () => {
    return async (dispatch) => {
        dispatch({ type: ActionTypes.TRAINS_LOADING })
        try {
            const response = await fetch(`${baseUrl}trains`)
            if (!response.ok) throw Error('What The Fuck')
            const trains = response.json()
            dispatch({ type: ActionTypes.GET_TRAINS, payload: trains })
        }
        catch (error) {
            dispatch({ type: ActionTypes.TRAINS_FAILED, payload: error })
            throw error
        }
    }
}