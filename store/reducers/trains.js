import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    trains: [],
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_TRAINS):
            return {...state, trains: action.payload};

        default: 
            return state;
    }
}