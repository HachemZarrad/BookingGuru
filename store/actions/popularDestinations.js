import * as ActionTypes from '../actions/actionTypes'; 
import { baseUrl } from '../../constants/networking';


export const fetchDestinations = () => (dispatch) => {
    dispatch({type: ActionTypes.GET_DESTINATIONS})
    return fetch(`${baseUrl}destinations`)
     .then((response) => response.json())
     .then((destinations) => dispatch({type: ActionTypes.GET_DESTINATIONS, payload: destinations}))
     .catch((error) => dispatch({type: ActionTypes.DESTINATIONS_FAILED, payload: error}))

}