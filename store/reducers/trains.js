import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    trains: [],
    error: null,
    loading: true
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_TRAINS):
            return {...state, trains: action.payload, error: null, loading: false};
        case(ActionTypes.TRAINS_LOADING):
            return {...state, trains: [], error: null, loading: true};
        case(ActionTypes.TRAINS_FAILED):
            return{...state, trains: [], error: action.payload, loading: false};

        default: 
            return state;
    }
}