import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    countriesAndCodes: [],
    loading: true,
    error: null,
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_CALLING_CODES):
            return {...state, loading: false, error: null, countriesAndCodes: action.payload };
        case(ActionTypes.CALLING_CODES_LOADING):
            return {...state, loading: true, error: null, countriesAndCodes: [] };
        case(ActionTypes.CALLING_CODES_FAILED):
            return{...state, loading: false, error: action.payload, countriesAndCodes: []};
        default: 
            return state;
    }
}