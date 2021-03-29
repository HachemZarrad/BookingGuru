import * as ActionTypes from './actionTypes';
import { baseUrl } from '../../constants/networking';


export const fetchCountriesAndCallingCodes = () => (dispatch) => {
    dispatch({ type: ActionTypes.CALLING_CODES_LOADING })
    return fetch(`${baseUrl}callingCodes`)
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
        .then(callingCodes => dispatch({ type: ActionTypes.GET_CALLING_CODES, payload: callingCodes }))
        .catch(error => dispatch({ type: ActionTypes.CALLING_CODES_FAILED, payload: error.message }))

}