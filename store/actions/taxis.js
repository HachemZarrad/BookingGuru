import * as ActionTypes from '../actions/actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchTaxis = () => (dispatch) => {
    dispatch({ type: ActionTypes.TAXIS_LOADING })
    return fetch(`${baseUrl}taxis`)
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
        .then((taxis) => dispatch({ type: ActionTypes.GET_TAXIS, payload: taxis }))
        .catch((error) => dispatch({ type: ActionTypes.TAXIS_FAILED, payload: error }))

}
