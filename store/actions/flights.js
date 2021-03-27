import * as ActionTypes from '../actions/actionTypes'; 
import { baseUrl } from '../../constants/networking';


export const fetchFlights = () => (dispatch) => {
    dispatch({type: ActionTypes.FLIGHTS_LOADING})
    return fetch(`${baseUrl}flights`)
     .then((response) => response.json())
     .then((flights) => dispatch({type: ActionTypes.GET_FLIGHTS, payload: flights}))
     .catch((error) => dispatch({type: ActionTypes.FLIGHTS_FAILED, payload: error}))

}
