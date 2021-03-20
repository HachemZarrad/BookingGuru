import * as ActionTypes from '../actions/actionTypes'; 


export default () => (dispatch) => {
    return fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes')
     .then((response) => response.json())
     .then((countries) => dispatch({type: ActionTypes.GET_COUNTRIES, payload: countries}))
     .catch((error) => dispatch({type: ActionTypes.COUNTRIES_FAILED, payload: error}))

}