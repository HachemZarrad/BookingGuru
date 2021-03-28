import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchBuses = () => (dispatch) => {
    dispatch({ type: ActionTypes.BUSES_LOADING })
    return fetch(`${baseUrl}buses`)
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
        .then((buses) => dispatch({ type: ActionTypes.GET_BUSES, payload: buses }))
        .catch((error) => dispatch({ type: ActionTypes.BUSES_FAILED, payload: error }))

}
