import * as ActionTypes from '../actions/actionTypes'; 
import { baseUrl } from '../../constants/networking';


export const fetchTrains = () => (dispatch) => {
    dispatch({type: ActionTypes.TRAINS_LOADING})
    return fetch(`${baseUrl}trains`)
     .then((response) => response.json())
     .then((trains) => dispatch({type: ActionTypes.GET_TRAINS, payload: trains}))
     .catch((error) => dispatch({type: ActionTypes.TRAINS_FAILED, payload: error}))

}
