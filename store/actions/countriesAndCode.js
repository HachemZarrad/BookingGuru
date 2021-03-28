import * as ActionTypes from '../actions/actionTypes';


export default () => (dispatch) => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes',
        { method: 'get', signal: signal })
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
        .then((countries) => dispatch({ type: ActionTypes.GET_COUNTRIES, payload: countries }))
        .catch((error) => dispatch({ type: ActionTypes.COUNTRIES_FAILED, payload: error }))

    return function cleanUp() {
        controller.abort()
    }

}

