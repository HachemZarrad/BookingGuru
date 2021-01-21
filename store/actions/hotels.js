import * as ActionTypes from '../actions/actionTypes'; 
import { baseUrl } from '../../constants/networking';
import { useDispatch } from 'react-redux'


export const fetchHotels = () => (dispatch) => {
    return fetch(`${baseUrl}hotels`)
     .then((response) => response.json())
     .then((hotels) => dispatch({type: ActionTypes.GET_HOTELS, payload: hotels}))
     .catch((error) => dispatch({type: ActionTypes.HOTELS_Failed, payload: error}))

}