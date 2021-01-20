import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    hotels: []
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_HOTELS):
            return {...state, hotels: action.payload};

        default: 
            return state;
    }
}