import * as ActionTypes from '../actions/actionTypes'; 
import { baseUrl } from '../../constants/networking';


export const fetchTaxis = () => (dispatch) => {
    dispatch({type: ActionTypes.TAXIS_LOADING})
    return fetch(`${baseUrl}taxis`)
     .then((response) => response.json())
     .then((taxis) => dispatch({type: ActionTypes.GET_TAXIS, payload: taxis}))
     .catch((error) => dispatch({type: ActionTypes.TAXIS_FAILED, payload: error}))

}
