import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    countries: [],
    error: null,
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_COUNTRIES):
            return {...state, countries: action.payload, error: null};
        case(ActionTypes.COUNTRIES_FAILED):
            return{...state, countries: [], error: action.payload};
        default: 
            return state;
    }
}