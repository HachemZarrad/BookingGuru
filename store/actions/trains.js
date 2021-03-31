import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchTrains = () => (dispatch) => {
    dispatch({ type: ActionTypes.TRAINS_LOADING })
    return fetch(`${baseUrl}trains`)
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
        .then((trains) => dispatch({ type: ActionTypes.GET_TRAINS, payload: trains }))
        .catch((error) => dispatch({ type: ActionTypes.TRAINS_FAILED, payload: error }))

}
