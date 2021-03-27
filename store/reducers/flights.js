import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    flights: [],
    error: null,
    loading: true
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_FLIGHTS):
            return {...state, flights: action.payload, error: null, loading: false};
        case(ActionTypes.FLIGHTS_LOADING):
            return {...state, flights: [], error: null, loading: true};
        case(ActionTypes.FLIGHTS_FAILED):
            return{...state, flights: [], error: action.payload, loading: false};

        default: 
            return state;
    }
}