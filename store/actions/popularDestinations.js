import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchDestinations = () => (dispatch) => {
    dispatch({ type: ActionTypes.DESTINATIONS_LOADING })
    return fetch(`${baseUrl}destinations`)
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
        .then((destinations) => dispatch({ type: ActionTypes.GET_DESTINATIONS, payload: destinations }))
        .catch((error) => dispatch({ type: ActionTypes.DESTINATIONS_FAILED, payload: error }))

}