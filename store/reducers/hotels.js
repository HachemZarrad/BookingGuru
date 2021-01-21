import * as ActionTypes from '../actions/actionTypes'; 

const initialState = {
    hotels: [],
    error: null,
    loading: true
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case(ActionTypes.GET_HOTELS):
            return {...state, hotels: action.payload, error: null, loading: false};
        case(ActionTypes.HOTELS_LOADING):
            return {...state, hotels: [], error: null, loading: true};
        case(ActionTypes.HOTELS_Failed):
            return{...state, hotel: [], error: action.payload, loading: false};

        default: 
            return state;
    }
}