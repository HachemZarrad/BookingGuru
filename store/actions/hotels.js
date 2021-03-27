import * as ActionTypes from '../actions/actionTypes'; 
import { baseUrl } from '../../constants/networking';


export const fetchHotels = () => (dispatch) => {
    dispatch({type: ActionTypes.HOTELS_LOADING})
    return fetch(`${baseUrl}hotels`)
     .then((response) => response.json())
     .then((hotels) => dispatch({type: ActionTypes.GET_HOTELS, payload: hotels}))
     .catch((error) => dispatch({type: ActionTypes.HOTELS_FAILED, payload: error}))

}
export const fetchHotelsAccordingToDestination = (destination) => (dispatch) => {
    return fetch(`${baseUrl}hotels/filter/${destination}`)
     .then((response) => response.json())
     .then((hotels) => dispatch({type: ActionTypes.GET_HOTELS, payload: hotels}))
     .catch((error) => dispatch({type: ActionTypes.HOTELS_FAILED, payload: error}))

}