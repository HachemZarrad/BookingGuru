import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    countriesAndCodes: [],
    error: null,
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_COUNTRIES):
            return {...state, countriesAndCodes: action.payload, error: null};
        case(ActionTypes.COUNTRIES_FAILED):
            return{...state, countriesAndCodes: [], error: action.payload};
        default: 
            return state;
    }
}