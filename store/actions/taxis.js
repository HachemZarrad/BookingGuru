import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchTaxis = () => async (dispatch) => {
    dispatch({ type: ActionTypes.TAXIS_LOADING })
    try {
        const response = await fetch(`${baseUrl}taxis`)
        if (!response.ok) throw Error('Please Check Your Internet Connection')
        const taxis = await response.json()
        dispatch({ type: ActionTypes.GET_TAXIS, payload: taxis })
    }
    catch (error) {
        dispatch({ type: ActionTypes.TAXIS_FAILED, payload: error })
        throw error
    }
}

