import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    hotels: [],
    error: null,
    loading: true
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_HOTELS):
            return {...state, loading: false, error: null, hotels: action.payload };
        case(ActionTypes.HOTELS_LOADING):
            return {...state, loading: true, error: null, hotels: [] };
        case(ActionTypes.HOTELS_FAILED):
            return{...state, loading: false, error: action.payload, hotels: []};

        default: 
            return state;
    }
}