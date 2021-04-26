import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    flights: [],
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_FLIGHTS):
            return {...state, flights: action.payload};

        default: 
            return state;
    }
}