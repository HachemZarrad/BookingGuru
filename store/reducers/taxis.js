import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    taxis: [],
    error: null,
    loading: true
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_TAXIS):
            return {...state, taxis: action.payload, error: null, loading: false};
        case(ActionTypes.TAXIS_LOADING):
            return {...state, taxis: [], error: null, loading: true};
        case(ActionTypes.TAXIS_FAILED):
            return{...state, taxis: [], error: action.payload, loading: false};

        default: 
            return state;
    }
}