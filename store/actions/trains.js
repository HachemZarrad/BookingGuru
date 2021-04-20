import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../constants/networking';




export const fetchTrains = () => async (dispatch) => {
        dispatch({ type: ActionTypes.TRAINS_LOADING })
        try {
            const response = await fetch(`${baseUrl}trains`)
            if (!response.ok) throw Error('Please Check your internet connection')
            const trains = await response.json()
            dispatch({ type: ActionTypes.GET_TRAINS, payload: trains})
        }
        catch (error) {
            dispatch({ type: ActionTypes.TRAINS_FAILED, payload: error })
            throw error
        }
}