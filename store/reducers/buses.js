import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    buses: [],
    error: null,
    loading: true
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_BUSES):
            return {...state, buses: action.payload, error: null, loading: false};
        case(ActionTypes.BUSES_LOADING):
            return {...state, buses: [], error: null, loading: true};
        case(ActionTypes.HOTELS_FAILED):
            return{...state, buses: [], error: action.payload, loading: false};

        default: 
            return state;
    }
}