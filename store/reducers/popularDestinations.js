import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    destinations: [],
    error: null,
    loading: true
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_DESTINATIONS):
            return {...state, destinations: action.payload, error: null, loading: false};
        case(ActionTypes.DESTINATIONS_LOADING):
            return {...state, destinations: [], error: null, loading: true};
        case(ActionTypes.DESTINATIONS_FAILED):
            return{...state, destinations: [], error: action.payload, loading: false};

        default: 
            return state;
    }
}