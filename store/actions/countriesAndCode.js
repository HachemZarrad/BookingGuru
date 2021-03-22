import * as ActionTypes from '../actions/actionTypes';


export default () => (dispatch) => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes',
        {method: 'get', signal: signal})
        .then((response) => response.json())
        .then((countries) => dispatch({ type: ActionTypes.GET_COUNTRIES, payload: countries }))
        .catch((error) => dispatch({ type: ActionTypes.COUNTRIES_FAILED, payload: error }))

        return function cleanUp(){
            controller.abort()
        }
          
}

