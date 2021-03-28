import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchHotels = () => (dispatch) => {
    dispatch({ type: ActionTypes.HOTELS_LOADING })
    return fetch(`${baseUrl}hotels`)
        .then(response => {
            if (response.ok) return response;
            else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(hotels => dispatch({ type: ActionTypes.GET_HOTELS, payload: hotels }))
        .catch(error => dispatch({ type: ActionTypes.HOTELS_FAILED, payload: error.message }))

}
export const fetchHotelsAccordingToDestination = (destination) => (dispatch) => {
    dispatch({ type: ActionTypes.HOTELS_LOADING })
    return fetch(`${baseUrl}hotels/filter/${destination}`)
        .then(response => {
            if (response.ok) return response;
            else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                let errmess = new Error(error.message);
                throw errmess;
            })
        .then((response) => response.json())
        .then((hotels) => dispatch({ type: ActionTypes.GET_HOTELS_ACCORDING_TO_DESTINATION, payload: hotels }))
        .catch((error) => dispatch({ type: ActionTypes.HOTELS_FAILED, payload: error.message }))

}