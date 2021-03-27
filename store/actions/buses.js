import * as ActionTypes from '../actions/actionTypes'; 
import { baseUrl } from '../../constants/networking';


export const fetchBuses = () => (dispatch) => {
    dispatch({type: ActionTypes.BUSES_LOADING})
    return fetch(`${baseUrl}buses`)
     .then((response) => response.json())
     .then((buses) => dispatch({type: ActionTypes.GET_BUSES, payload: buses}))
     .catch((error) => dispatch({type: ActionTypes.BUSES_FAILED, payload: error}))

}
