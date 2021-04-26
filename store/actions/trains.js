import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../constants/networking';




export const fetchTrains = () => async (dispatch) => {
        try {
            const response = await fetch(`${baseUrl}trains`)
            if (!response.ok) throw new Error('Please Check your internet connection')
            const trains = await response.json()
            dispatch({ type: ActionTypes.GET_TRAINS, payload: trains})
        }
        catch (error) {
            throw error
        }
}